const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const transporter = require("../email/transporter");
const deleteAccountTemplate = require("../email/templates/delete-account");

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
          subject: "Suppression de compte",
          html: deleteAccountTemplate(
            userToDelete.username,
            userToDelete.email,
            reason
          ),
        });
      } catch (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
        // On continue la suppression malgré l'échec de l'email
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

//********** BLOCK USER ACCOUNT **********/
exports.blockUserAccount = async (req, res) => {
  try {
    const userId = Number(req.params.id);
    const userRole = req.role;
    const { duration, reason } = req.body;

    console.log(
      "Blocking user:",
      userId,
      "for duration:",
      duration,
      "reason:",
      reason
    );

    if (userRole !== "ADMIN") {
      return res.status(403).json({
        error: "Action non autorisée.",
      });
    }
  } catch (err) {
    console.error("Error banning user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard.",
    });
  }
};
