const prisma = require("../lib/prisma");
const fs = require("fs");
const path = require("path");

//********** GET ALL USERS **********/
exports.getAllUsers = async (req, res) => {
  try {
    const userId = req.userId;

    const users = await prisma.user.findMany({
      where: {
        AND: [
          // Exclure les utilisateurs que l'utilisateur actuel a bloqués
          {
            blockedBy: {
              none: {
                blockerId: userId,
              },
            },
          },
          // Exclure les utilisateurs qui ont bloqué l'utilisateur actuel
          {
            blockedUsers: {
              none: {
                blockedId: userId,
              },
            },
          },
        ],
      },
      select: {
        id: true,
        createdAt: true,
        username: true,
        sex: true,
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
        sentFriendRequests: {
          where: {
            status: "pending",
          },
          select: {
            id: true,
            receiver: {
              select: {
                id: true,
                username: true,
                profileImage: true,
              },
            },
          },
        },
        blockedUsers: {
          select: {
            blocker: {
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
        sex: true,
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
        adminBlocks: {
          where: {
            isActive: true,
            OR: [
              { endDate: null }, // Blocages permanents
              { endDate: { gt: new Date() } }, // Blocages temporaires non expirés
            ],
          },
          select: {
            id: true,
            reason: true,
            duration: true,
            startDate: true,
            endDate: true,
            isActive: true,
            admin: {
              select: {
                username: true,
              },
            },
          },
        },
      },
    });

    if (user) {
      const friendsList = user.friends.map((f) => f.friend);
      const isCurrentlyBlocked =
        user.adminBlocks?.some((block) => block.isActive) ?? false;

      res.status(200).json({
        ...user,
        friendsList,
        isCurrentlyBlocked,
      });
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
  let userId = req.params.id;
  // Convertir userId en entier
  userId = Number(userId);
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
        sex: true,
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
      },
    });

    if (user) {
      const friendsList = user.friends.map((f) => f.friend);

      res.status(200).json({ ...user, friendsList });
    } else {
      res.status(404).json({ error: "Cet utilisateur n'existe pas." });
    }
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

//********** GET FRIENDS **********/
exports.getFriends = async (req, res) => {
  const userId = req.userId;
  try {
    const friends = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        friends: {
          select: {
            friend: {
              select: {
                id: true,
                username: true,
                sex: true,
                profileImage: true,
                createdAt: true,
                bio: true,
              },
            },
          },
        },
      },
    });
    if (friends) {
      const friendsList = [];
      friends.friends.forEach((f) => {
        if (!friendsList.some((friend) => friend.id === f.friend.id)) {
          friendsList.push(f.friend);
        }
      });
      res.status(200).json(friendsList);
    } else {
      res.status(404).json({ error: "Aucun ami trouvé." });
    }
  } catch (err) {
    console.error("Error getting friends:", err);
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

    res.status(200).json({ message: "Profil mis à jour.", user });
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
      message: "Adresse email mise à jour.",
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

    // Utiliser une transaction pour garantir l'atomicité
    const result = await prisma.$transaction(async (prisma) => {
      // Vérifier si l'utilisateur existe
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new Error("Utilisateur non trouvé");
      }

      // Récupérer les données des relations avant suppression
      const [friends, blockers] = await Promise.all([
        prisma.friend.findMany({
          where: {
            OR: [{ userId: userId }, { friendId: userId }],
          },
          select: {
            userId: true,
            friendId: true,
          },
        }),
        prisma.blockedUser.findMany({
          where: {
            blockedId: userId,
          },
          select: {
            blockerId: true,
          },
        }),
      ]);

      // Supprimer l'utilisateur
      await prisma.user.delete({
        where: { id: userId },
      });

      // Construire la liste des utilisateurs affectés
      const affectedUserIds = new Set();
      friends.forEach((f) => {
        if (f.userId !== userId) affectedUserIds.add(f.userId);
        if (f.friendId !== userId) affectedUserIds.add(f.friendId);
      });
      blockers.forEach((b) => affectedUserIds.add(b.blockerId));

      return {
        affectedUserIds: Array.from(affectedUserIds),
      };
    });

    res.status(200).json({
      message: "Compte supprimé, nous espérons vous revoir bientôt! 😔",
      affectedUserIds: result.affectedUserIds,
    });
  } catch (err) {
    console.error("Error deleting user:", err);

    if (err.message === "Utilisateur non trouvé") {
      return res.status(404).json({
        error: "Votre compte n'a pas pu être trouvé.",
      });
    }

    res.status(500).json({
      error:
        "Une erreur est survenue lors de la suppression de votre compte. Veuillez réessayer plus tard.",
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
      message: "Vos préférences ont été mises à jour !",
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
  const receiverId = Number(req.params.receiverId);
  const senderId = req.userId;
  const userRole = req.role;

  if (userRole === "GUEST") {
    return res.status(403).json({
      error: "Action non autorisée en tant qu'invité.",
    });
  }

  // ne pas envoyé la demande d'ami si c'est l'invité qui la reçoit
  const receiver = await prisma.user.findUnique({
    where: { id: receiverId },
    select: { role: true },
  });
  if (receiver && receiver.role === "GUEST") {
    return res.status(403).json({
      error: "Vous ne pouvez pas envoyer de demande d'ami à cet utilisateur.",
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
            sex: true,
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
      message: `Demande d'ami envoyée à "${newRequest.receiver.username}".`,
      newRequest,
    });
  } catch (error) {
    console.error("Error sending friend request:", error);
    res.status(500).json({ error: "Impossible d'envoyer la demande d'ami." });
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
        sender: {
          select: {
            id: true,
            username: true,
            sex: true,
            profileImage: true,
          },
        },
        receiver: {
          select: {
            id: true,
          },
        },
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
  const contactId = Number(req.params.contactId);
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

    const user1 = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    const user2 = await prisma.user.findUnique({
      where: { id: contactId },
      select: { id: true },
    });

    res.status(201).json({
      message: "Contact ajouté à votre liste d'amis.",
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
  const contactId = Number(req.params.contactId);
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
  const contactId = Number(req.params.contactId);
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
    await prisma.$transaction([
      // Suppression des relations d'amitié
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

      // Suppression des messages privés entre les deux utilisateurs
      prisma.privateMessage.deleteMany({
        where: {
          OR: [
            {
              userId: userId,
              receiverId: contactId,
            },
            {
              userId: contactId,
              receiverId: userId,
            },
          ],
        },
      }),
    ]);

    res.status(200).json({
      message: "Contact retiré de votre liste d'amis.",
      contactId,
      userId,
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
  const contactId = Number(req.params.contactId);

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

    // Bloquer l'utilisateur
    await prisma.blockedUser.create({
      data: {
        blockerId: userId,
        blockedId: contactId,
      },
    });

    res.status(200).json({
      message: "Utilisateur bloqué et retiré de votre liste d'amis.",
      userId,
      contactId,
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
            sex: true,
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
      error: "Impossible de récupérer les utilisateurs bloqués.",
    });
  }
};

//********** UNBLOCK USER **********/
exports.unblockUser = async (req, res) => {
  const userId = req.userId;
  const contactId = Number(req.params.contactId);

  try {
    await prisma.blockedUser.deleteMany({
      where: {
        blockerId: userId,
        blockedId: contactId,
      },
    });

    res.json({
      message: "Utilisateur débloqué.",
      userId,
      unblockedId: contactId,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors du déblocage de l'utilisateur." });
  }
};
