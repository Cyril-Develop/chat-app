const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        createdAt: true,
        username: true,
        bio: true,
        profileImage: true,
        friends: {
          select: {
            friend: {
              select: {
                id: true,
                username: true,
                profileImage: true,
              },
            },
          },
        },
        friendOf: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                profileImage: true,
              },
            },
          },
        },
        receivedFriendRequests: {
          where: {
            status: "pending",
          },
          select: {
            id: true,
            sender: {
              select: {
                id: true,
                username: true,
                profileImage: true,
              },
            },
          },
        },
      },
    });
    res.status(200).json(users);
  } catch (err) {
    console.error("Error getting users:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.getUser = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        createdAt: true,
        email: true,
        username: true,
        bio: true,
        profileImage: true,
        notification: true,
        chatRooms: {
          select: {
            chatRoom: {
              select: {
                id: true,
                name: true,
                isPrivate: true,
              },
            },
          },
        },
        friends: {
          select: {
            friend: {
              select: {
                id: true,
                username: true,
                profileImage: true,
                createdAt: true,
                bio: true,
              },
            },
          },
        },
        friendOf: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                profileImage: true,
              },
            },
          },
        },
      },
    });

    if (user) {
      // Combine friends and friendOf into a single list of unique friends
      const friendsList = [];

      user.friends.forEach((f) => {
        if (!friendsList.some((friend) => friend.id === f.friend.id)) {
          friendsList.push(f.friend);
        }
      });

      user.friendOf.forEach((f) => {
        if (!friendsList.some((friend) => friend.id === f.user.id)) {
          friendsList.push(f.user);
        }
      });

      res.status(200).json({ ...user, friendsList });
    } else {
      res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

// Update user's username, bio and profile image
exports.updateUser = async (req, res) => {
  try {
    const id = req.auth.userId;
    const { username, bio } = req.body;

    let updatedFields = {};
    if (username) {
      updatedFields.username = username;
    }

    updatedFields.bio = bio;

    // Get image profile
    const currentUser = await prisma.user.findUnique({
      where: { id },
      select: { profileImage: true },
    });

    if (req.file) {
      if (currentUser.profileImage) {
        const oldImagePath = path.join(
          "images/profile",
          currentUser.profileImage
        );
        if (currentUser.profileImage !== "default.jpg") {
          fs.unlink(oldImagePath, (err) => {
            if (err) console.error("Error deleting old image:", err);
          });
        }
      }
      updatedFields.profileImage = req.file.filename;
    }

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: updatedFields,
      select: {
        id: true,
        username: true,
        bio: true,
        profileImage: true,
      },
    });

    res.status(200).json({ message: "Profil modifié avec succès.", user });
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const id = req.auth.userId;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "L'email est requis.",
      });
    }

    const user = await prisma.user.update({
      where: { id },
      data: { email },
      select: {
        id: true,
        email: true,
      },
    });

    res.status(200).json({
      message: "Adresse email modifiée avec succès.",
      email: user.email,
    });
  } catch (err) {
    console.error("Error updating email:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.auth.userId;
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Compte supprimé avec succès." });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const id = req.auth.userId;
    const { notification } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: { notification },
      select: {
        id: true,
        notification: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.error("Error updating notification:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.sendFriendRequest = async (req, res) => {
  const { receiverId } = req.body;
  const senderId = req.auth.userId;

  if (!senderId || !receiverId) {
    return res
      .status(400)
      .json({ error: "Les identifiants des utilisateurs sont requis." });
  }

  if (senderId === receiverId) {
    return res.status(400).json({
      error: "Vous ne pouvez pas vous envoyer une demande d'ami à vous-même!",
    });
  }

  try {
    // Vérifier si une demande d'ami est déjà en attente dans un sens ou dans l'autre
    const existingRequest = await prisma.friendRequest.findFirst({
      where: {
        OR: [
          { senderId, receiverId, status: "pending" },
          { senderId: receiverId, receiverId: senderId, status: "pending" },
        ],
      },
    });

    if (existingRequest) {
      return res
        .status(400)
        .json({ error: "Une demande d'ami est déjà en attente." });
    }

    await prisma.friendRequest.create({
      data: {
        senderId,
        receiverId,
        status: "pending",
      },
    });

    const newRequest = await prisma.friendRequest.findFirst({
      where: {
        senderId,
        receiverId,
        status: "pending",
      },
      select: {
        id: true,
        status: true,
        sender: {
          select: {
            id: true,
            username: true,
            profileImage: true,
          },
        },
        receiver: {
          select: {
            id: true,
            username: true,
            profileImage: true,
          },
        },
        createdAt: true,
      },
    });

    res.status(201).json({
      message: "Demande d'ami envoyée avec succès.",
      newRequest,
    });
  } catch (error) {
    console.error("Error sending friend request:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de l'envoi de la demande d'ami." });
  }
};

exports.getFriendRequest = async (req, res) => {
  const userId = req.auth.userId;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "L'identifiant de l'utilisateur est requis." });
  }

  console.log("userId", userId);

  try {
    const friendRequests = await prisma.friendRequest.findMany({
      where: {
        OR: [
          { senderId: userId, status: "pending" },
          { receiverId: userId, status: "pending" },
        ],
      },
      select: {
        id: true,
        status: true,
        sender: {
          select: {
            id: true,
            username: true,
            profileImage: true,
          },
        },
        receiver: {
          select: {
            id: true,
            username: true,
            profileImage: true,
          },
        },
        createdAt: true,
      },
    });

    console.log("friendRequests", friendRequests);

    res.status(200).json(friendRequests);
  } catch (error) {
    console.error("Error getting friend requests:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des demandes d'amis." });
  }
};

exports.acceptFriendRequest = async (req, res) => {
  const { contactId } = req.body;
  const userId = req.auth.userId;

  if (!userId || !contactId) {
    return res
      .status(400)
      .json({ error: "Les identifiants des utilisateurs sont requis." });
  }

  if (userId === contactId) {
    return res
      .status(400)
      .json({ error: "Vous ne pouvez pas vous ajouter vous-même!" });
  }

  try {
    // Vérifier si l'amitié existe déjà
    const existingFriendship = await prisma.friend.findFirst({
      where: {
        OR: [
          { userId: userId, friendId: contactId },
          { userId: contactId, friendId: userId },
        ],
      },
    });

    if (existingFriendship) {
      return res
        .status(400)
        .json({ error: "Ce contact fait déjà partie de votre liste d'amis." });
    }

    // Accepter la demande d'ami et supprimer la demande en un seul batch transaction
    await prisma.$transaction([
      // Création de l'amitié dans les deux sens
      prisma.friend.create({
        data: { userId: userId, friendId: contactId },
        include: { friend: true },
      }),
      prisma.friend.create({
        data: { userId: contactId, friendId: userId },
        include: { friend: true },
      }),
      // Suppression de la demande d'ami
      prisma.friendRequest.deleteMany({
        where: {
          senderId: contactId,
          receiverId: userId,
          status: "pending",
        },
      }),
    ]);

    const user1 = await prisma.user.findUnique({ where: { id: userId } });
    const user2 = await prisma.user.findUnique({ where: { id: contactId } });

    res.status(201).json({
      message: "Contact ajouté avec succès.",
      user: user1,
      friend: user2,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'ajout de l'ami." });
  }
};

exports.rejectFriendRequest = async (req, res) => {
  const { contactId } = req.body;
  const userId = req.auth.userId;

  console.log("contactId", contactId);
  console.log("userId", userId);

  if (!userId || !contactId) {
    return res
      .status(400)
      .json({ error: "Les identifiants des utilisateurs sont requis." });
  }

  if (userId === contactId) {
    return res
      .status(400)
      .json({ error: "Vous ne pouvez pas vous retirer vous-même!" });
  }

  try {
    // Utilisation d'une transaction pour assurer l'intégrité des données
    await prisma.$transaction([
      prisma.friendRequest.deleteMany({
        where: {
          OR: [
            {
              senderId: userId,
              receiverId: contactId,
            },
            {
              senderId: contactId,
              receiverId: userId,
            },
          ],
        },
      }),
    ]);

    // Suppression de la demande d'ami
    prisma.friendRequest.deleteMany({
      where: {
        senderId: contactId,
        receiverId: userId,
        status: "pending",
      },
    }),
      res.status(200).json({
        message: "Demande d'ami refusée avec succès.",
        contactId,
        userId,
      });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'ami:", error);
    res.status(500).json({ error: "Erreur lors de la suppression de l'ami." });
  }
};

exports.removeContact = async (req, res) => {
  const { contactId } = req.body;
  const userId = req.auth.userId;

  if (!userId || !contactId) {
    return res
      .status(400)
      .json({ error: "Les identifiants des utilisateurs sont requis." });
  }

  if (userId === contactId) {
    return res
      .status(400)
      .json({ error: "Vous ne pouvez pas vous retirer vous-même!" });
  }

  try {
    // Utilisation d'une transaction pour assurer l'intégrité des données
    await prisma.$transaction([
      prisma.friend.deleteMany({
        where: {
          OR: [
            {
              userId: userId,
              friendId: contactId,
            },
            {
              userId: contactId,
              friendId: userId,
            },
          ],
        },
      }),
    ]);

    // Récupère les informations des utilisateurs mis à jour
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { friends: true },
    });

    const contact = await prisma.user.findUnique({
      where: { id: contactId },
      include: { friends: true },
    });

    res.status(200).json({
      message: "Contact retiré de votre liste d'amis.",
      contactId,
      userId,
      user,
      contact,
    });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'ami:", error);
    res.status(500).json({ error: "Erreur lors de la suppression de l'ami." });
  }
};
