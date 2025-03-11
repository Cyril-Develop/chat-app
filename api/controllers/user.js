const { PrismaClient } = require("@prisma/client");
const e = require("express");
const fs = require("fs");
const path = require("path");
const prisma = new PrismaClient();

//********** GET ALL USERS **********/
exports.getAllUsers = async (req, res) => {
  try {
    const currentUserId = req.userId;

    // Récupérer l'utilisateur actuel pour vérifier son rôle
    const currentUser = await prisma.user.findUnique({
      where: { id: currentUserId },
      select: { role: true },
    });

    const usersQuery = {
      where: {
        AND: [
          // Exclure les utilisateurs que l'utilisateur actuel a bloqués
          {
            blockedBy: {
              none: {
                blockerId: currentUserId,
              },
            },
          },
          // Exclure les utilisateurs qui ont bloqué l'utilisateur actuel
          {
            blockedUsers: {
              none: {
                blockedId: currentUserId,
              },
            },
          },
        ],
      },
      select: {
        id: true,
        createdAt: true,
        username: true,
        bio: true,
        profileImage: true,
        role: true,
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
    };

    // Si l'utilisateur est un administrateur, ne pas appliquer les filtres de blocage
    if (currentUser.role === "ADMIN") {
      delete usersQuery.where; // Enlève la condition de filtrage si admin
    }

    const users = await prisma.user.findMany(usersQuery);

    res.status(200).json(users);
  } catch (err) {
    console.error("Error getting users:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.isAuthenticated = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "L'utilisateur n'existe pas" });
  }

  res.json({
    isAuthenticated: true,
    user: {
      id: user.id,
      role: user.role,
    },
  });
};

//********** GET CURRENT USER **********/
exports.getCurrentUser = async (req, res) => {
  const userId = req.userId;

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
        role: true,
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

//********** GET USER BY ID **********/
exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      select: {
        id: true,
        createdAt: true,
        email: true,
        username: true,
        bio: true,
        profileImage: true,
        notification: true,
        role: true,
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

//********** UPDATE USER INFOS **********/
exports.updateUser = async (req, res) => {
  try {
    const userId = req.userId;
    const userRole = req.role;
    const { username, bio } = req.body;

    if (userRole === "GUEST") {
      return res.status(403).json({
        error: "Action non autorisée en tant qu'invité.",
      });
    }

    let updatedFields = {};
    if (username) {
      updatedFields.username = username;
    }

    updatedFields.bio = bio;

    // Get image profile
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
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
        id: userId,
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

//********** UPDATE EMAIL ACCOUNT **********/
exports.updateAccount = async (req, res) => {
  try {
    const userId = req.userId;
    const userRole = req.role;
    const { email } = req.body;

    if (userRole === "GUEST") {
      return res.status(403).json({
        error: "Action non autorisée en tant qu'invité.",
      });
    }

    if (!email) {
      return res.status(400).json({
        error: "L'email est requis.",
      });
    }

    const user = await prisma.user.update({
      where: { id: userId },
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

//********** DELETE ACCOUNT **********/
exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.userId;
    const userRole = req.role;

    if (userRole === "GUEST") {
      return res.status(403).json({
        error: "Action non autorisée en tant qu'invité.",
      });
    }

    // Vérifier si l'utilisateur est membre d'un salon de discussion
    // retourne l'id de l'utilisateur et l'id du salon de discussion
    const existingMembership = await prisma.userChatRoom.findFirst({
      where: { userId: userId },
    });

    if (existingMembership) {
      // Supprimer l'utilisateur du salon de discussion
      await prisma.userChatRoom.delete({
        where: {
          userId_chatRoomId: {
            userId: userId,
            chatRoomId: existingMembership.chatRoomId,
          },
        },
      });
    }

    // Ensuite supprimer l'utilisateur de la base de données
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).json({
      message:
        "Compte supprimé avec succès, nous espérons vous revoir bientôt! 😔",
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

//********** DELETE USER ACCOUNT **********/
exports.deleteUserAccount = async (req, res) => {
  try {
    const userId = req.params.id;
    const userRole = req.role;

    if (userRole !== "ADMIN") {
      return res.status(403).json({
        error: "Action non autorisée.",
      });
    }

    // Vérifier si l'utilisateur est membre d'un salon de discussion
    // retourne l'id de l'utilisateur et l'id du salon de discussion
    const existingMembership = await prisma.userChatRoom.findFirst({
      where: { userId: parseInt(userId) },
    });

    if (existingMembership) {
      // Supprimer l'utilisateur du salon de discussion
      await prisma.userChatRoom.delete({
        where: {
          userId_chatRoomId: {
            userId: parseInt(userId),
            chatRoomId: existingMembership.chatRoomId,
          },
        },
      });
    }

    // Ensuite supprimer l'utilisateur de la base de données
    await prisma.user.delete({
      where: {
        id: parseInt(userId),
      },
    });

    res.status(200).json({
      message: "L'utilisateur a été supprimé avec succès.",
    });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

exports.updateNotification = async (req, res) => {
  try {
    const userId = req.userId;
    const userRole = req.role;
    const { notification } = req.body;

    if (userRole === "GUEST") {
      return res.status(403).json({
        error: "Action non autorisée en tant qu'invité.",
      });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { notification },
      select: {
        id: true,
        notification: true,
      },
    });

    res.status(200).json({
      message: "Vos préférences ont été mises à jour avec succès !",
      user,
    });
  } catch (err) {
    console.error("Error updating notification:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

//********** SEND FRIEND REQUEST **********/
exports.sendFriendRequest = async (req, res) => {
  const { receiverId } = req.body;
  const senderId = req.userId;
  const userRole = req.role;

  if (userRole === "GUEST") {
    return res.status(403).json({
      error: "Action non autorisée en tant qu'invité.",
    });
  }

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
            notification: true,
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

//********** GET FRIEND REQUEST **********/
exports.getFriendRequest = async (req, res) => {
  const userId = req.userId;

  if (!userId) {
    return res
      .status(400)
      .json({ error: "L'identifiant de l'utilisateur est requis." });
  }

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

    res.status(200).json(friendRequests);
  } catch (error) {
    console.error("Error getting friend requests:", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des demandes d'amis." });
  }
};

//********** ACCEPT FRIEND REQUEST **********/
exports.acceptFriendRequest = async (req, res) => {
  const { contactId } = req.body;
  const userId = req.userId;

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

//********** REJECT FRIEND REQUEST **********/
exports.rejectFriendRequest = async (req, res) => {
  const { contactId } = req.body;
  const userId = req.userId;

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

//********** REMOVE CONTACT **********/
exports.removeContact = async (req, res) => {
  const { contactId } = req.body;
  const userId = req.userId;

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

//********** BLOCK USER **********/
exports.blockUser = async (req, res) => {
  // Celui qui bloque
  const userId = req.userId;
  const userRole = req.role;
  // Celui qui est bloqué
  const { contactId } = req.body;

  if (userRole === "GUEST") {
    return res.status(403).json({
      error: "Action non autorisée en tant qu'invité.",
    });
  }

  if (userId === contactId) {
    return res
      .status(400)
      .json({ error: "Vous ne pouvez pas vous bloquer vous-même." });
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

    // Bloquer l'utilisateur
    await prisma.blockedUser.create({
      data: {
        blockerId: userId,
        blockedId: contactId,
      },
    });

    res.status(200).json({
      message:
        "Utilisateur bloqué avec succès et retiré de votre liste d'amis.",
      contactId,
      userId,
      user,
      contact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors du blocage de l'utilisateur." });
  }
};

//********** GET BLOCKED USERS **********/
exports.getBlockedUsers = async (req, res) => {
  const userId = req.userId;

  try {
    const blockedUsers = await prisma.blockedUser.findMany({
      where: { blockerId: userId },
      select: {
        blocked: {
          select: {
            id: true,
            username: true,
            profileImage: true,
          },
        },
      },
    });

    const result = blockedUsers.map((user) => user.blocked);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Erreur lors de la récupération des utilisateurs bloqués.",
    });
  }
};

//********** UNBLOCK USER **********/
exports.unblockUser = async (req, res) => {
  const userId = req.userId;
  const blockedId = req.params.blockedId;

  try {
    await prisma.blockedUser.deleteMany({
      where: {
        blockerId: userId,
        blockedId: parseInt(blockedId),
      },
    });

    res.json({ message: "Utilisateur débloqué avec succès." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors du déblocage de l'utilisateur." });
  }
};
