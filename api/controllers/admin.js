const prisma = require("../lib/prisma");
const transporter = require("../email/transporter");
const deleteAccountTemplate = require("../email/templates/admin/delete-account");
const blockAccountTemplate = require("../email/templates/admin/block-account");
const unblockAccountTemplate = require("../email/templates/admin/unblock-account");

//********** GET ALL USERS **********/
exports.getAllUsers = async (req, res) => {
  try {
    const userRole = req.role;
    if (userRole !== "ADMIN") {
      return res.status(403).json({
        error: "Action non autorisée.",
      });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        profileImage: true,
        role: true,
        sex: true,
        // Récupérer les blocages actifs
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
        // Compter tous les blocages (historique complet)
        _count: {
          select: {
            adminBlocks: true, // Nombre total de blocages (actifs et inactifs)
          },
        },
      },
    });

    if (!users) {
      return res.status(404).json({
        error: "Aucun utilisateur trouvé.",
      });
    }

    // Restructurer les données pour plus de clarté
    const formattedUsers = users.map((user) => ({
      ...user,
      totalBlockCount: user._count.adminBlocks,
      isCurrentlyBlocked: user.adminBlocks.length > 0,
      _count: undefined, // Supprimer cette propriété pour nettoyer la réponse
    }));

    res.status(200).json(formattedUsers);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

//********** GET ALL ROOMS **********/
exports.getAllRooms = async (req, res) => {
  try {
    const userRole = req.role;
    if (userRole !== "ADMIN") {
      return res.status(403).json({
        error: "Action non autorisée.",
      });
    }

    const rooms = await prisma.chatRoom.findMany({
      select: {
        id: true,
        name: true,
        isPrivate: true,
        creator: {
          select: {
            username: true,
          },
        },
      },
    });

    if (!rooms) {
      return res.status(404).json({
        error: "Aucun salon trouvé.",
      });
    }

    res.status(200).json(rooms);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

//********** DELETE USER ACCOUNT **********/
exports.deleteUserAccount = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const { reason } = req.body;
    const userRole = req.role;

    if (userRole !== "ADMIN") {
      return res.status(403).json({
        error: "Action non autorisée.",
      });
    }

    if (!userId) {
      return res.status(400).json({
        error: "L'identifiant de l'utilisateur est requis.",
      });
    }

    // Utilisation d'une transaction pour garantir l'atomicité
    const result = await prisma.$transaction(async (prisma) => {
      const userToDelete = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
        },
      });

      if (!userToDelete) {
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

      // Envoyer l'email
      try {
        await transporter.sendMail({
          to: userToDelete.email,
          subject: "Suppression du compte",
          html: deleteAccountTemplate(
            userToDelete.username,
            userToDelete.email,
            reason
          ),
        });
      } catch (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
      }

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
      message: "L'utilisateur a été supprimé avec succès.",
      affectedUserIds: result.affectedUserIds,
    });
  } catch (err) {
    console.error("Error deleting user:", err);

    if (err.message === "Utilisateur non trouvé") {
      return res.status(404).json({
        error: "L'utilisateur que vous essayez de supprimer n'existe pas.",
      });
    }

    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

// Calculer la date de fin en fonction de la durée
function calculateEndDate(duration) {
  const now = new Date();

  switch (duration) {
    case "1j":
      return new Date(now.setDate(now.getDate() + 1));
    case "7j":
      return new Date(now.setDate(now.getDate() + 7));
    case "30j":
      return new Date(now.setDate(now.getDate() + 30));
    case "permanent":
      return null; // null pour un blocage permanent
    default:
      throw new Error("Durée de blocage invalide");
  }
}

//********** BLOCK USER ACCOUNT **********/
exports.blockUserAccount = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const userRole = req.role;
    const adminId = req.userId;
    const { duration, reason } = req.body;

    if (userRole !== "ADMIN") {
      return res.status(403).json({
        error: "Action non autorisée.",
      });
    }

    const endDate = calculateEndDate(duration);
    let userToBlock;

    try {
      // Récupérer d'abord les informations utilisateur hors transaction
      userToBlock = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          username: true,
          email: true,
        },
      });

      if (!userToBlock) {
        return res.status(404).json({
          error: "Utilisateur non trouvé",
        });
      }

      // Exécuter la transaction avec timeout augmenté
      blockResult = await prisma.$transaction(async (prisma) => {
        // Désactiver tous les blocages actifs précédents
        await prisma.adminBlock.updateMany({
          where: {
            userId: userId,
            isActive: true,
          },
          data: {
            isActive: false,
          },
        });

        // Créer un nouveau blocage
        return await prisma.adminBlock.create({
          data: {
            userId: userId,
            adminId: adminId,
            reason: reason,
            duration: duration,
            endDate: endDate,
            isActive: true,
          },
        });
      });

      // Envoyer l'email après la transaction (non bloquant)
      try {
        await transporter.sendMail({
          to: userToBlock.email,
          subject: "Compte bloqué",
          html: blockAccountTemplate(
            userToBlock.username,
            userToBlock.email,
            reason,
            duration
          ),
        });
      } catch (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
        // On continue malgré l'erreur d'email
      }

      res.status(200).json({
        message: "L'utilisateur a été bloqué avec succès.",
        success: true,
      });
    } catch (transactionError) {
      console.error("Erreur de transaction:", transactionError);
      return res.status(500).json({
        error: "Une erreur est survenue lors du blocage de l'utilisateur.",
      });
    }
  } catch (err) {
    console.error("Error banning user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};

//********** UNBLOCK USER ACCOUNT **********/
exports.unblockUserAccount = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const userRole = req.role;

    if (userRole !== "ADMIN") {
      return res.status(403).json({
        error: "Action non autorisée.",
      });
    }

    try {
      await prisma.$transaction(async (prisma) => {
        // Vérifier si l'utilisateur existe
        const user = await prisma.user.findUnique({
          where: { id: userId },
          select: { id: true, username: true, email: true },
        });

        if (!user) {
          throw { status: 404, message: "Utilisateur non trouvé" };
        }

        // Rechercher et désactiver le blocage actif pour cet utilisateur
        const updateResult = await prisma.adminBlock.updateMany({
          where: {
            userId: userId,
            isActive: true,
            OR: [
              { endDate: null }, // Blocage permanent
              { endDate: { gt: new Date() } }, // Blocage temporaire encore actif
            ],
          },
          data: {
            isActive: false,
          },
        });

        if (updateResult.count === 0) {
          throw {
            status: 404,
            message: "Aucun blocage actif trouvé pour cet utilisateur.",
          };
        }

        try {
          await transporter.sendMail({
            to: user.email,
            subject: "Compte débloqué",
            html: unblockAccountTemplate(user.username, user.email),
          });
        } catch (emailError) {
          console.error(
            "Erreur lors de l'envoi de l'email de déblocage:",
            emailError
          );
        }
      });

      res.status(200).json({
        message: "Le blocage de l'utilisateur a été levé avec succès.",
        success: true,
      });
    } catch (transactionError) {
      // Gestion des erreurs spécifiques de la transaction
      if (transactionError.status) {
        return res.status(transactionError.status).json({
          error: transactionError.message,
        });
      }
      // Erreur inattendue dans la transaction
      throw transactionError;
    }
  } catch (err) {
    console.error("Error unblocking user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};
