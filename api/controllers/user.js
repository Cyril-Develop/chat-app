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
                profileImage: true
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
                profileImage: true
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
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.auth.userId,
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

    console.log(username, bio);

    let updatedFields = {};
    if (username) {
      updatedFields.username = username;
    }
    if (bio) {
      updatedFields.bio = bio;
    }
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
        console.log("oldImagePath", oldImagePath);
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

    res.status(200).json(user);
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

    res.status(200).json(user);
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
    res.status(200).json({ message: "Compte supprimé avec succès" });
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

exports.addContact = async (req, res) => {
  const { contactId } = req.body;

  const userId = req.auth.userId;

  // Vérifiez que userId et friendId sont présents
  if (!userId || !contactId) {
    return res
      .status(400)
      .json({ error: "Les identifiants des utilisateurs sont requis." });
  }

  if (userId === contactId) {
    return res
      .status(400)
      .json({ error: "Vous ne pouvez pas vous ajouter vous même!" });
  }

  try {
    // Vérifiez si la relation d'amitié existe déjà
    const existingFriendship = await prisma.friend.findFirst({
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
    });

    if (existingFriendship) {
      return res
        .status(400)
        .json({ error: "Ce contact fait déjà partie de votre liste d'amis." });
    }

    // Utilisation d'une transaction pour assurer l'intégrité des données
    const friendship = await prisma.$transaction([
      prisma.friend.create({
        data: {
          userId: userId,
          friendId: contactId,
        },
      }),
      prisma.friend.create({
        data: {
          userId: contactId,
          friendId: userId,
        },
      }),
    ]);

    res.status(201).json(friendship[0]); // Renvoie le premier objet créé
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de l'ajout de l'ami." });
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

    res.status(200).json({ message: "Ami retiré avec succès." });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'ami:", error);
    res.status(500).json({ error: "Erreur lors de la suppression de l'ami." });
  }
};