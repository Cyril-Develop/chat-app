const prisma = require("../lib/prisma");

const autoUnblockUsers = async () => {
  try {
    console.log("[CRON] Début de la vérification des comptes bloqués...");

    const now = new Date();

    const result = await prisma.adminBlock.updateMany({
      where: {
        isActive: true,
        endDate: {
          not: null,
          lt: now,
        },
      },
      data: {
        isActive: false,
      },
    });

    if (result.count > 0) {
      console.log(
        `[CRON] Déblocage automatique terminé. Utilisateurs débloqués : ${result.count}`
      );
    } else {
      console.log(`[CRON] Aucun utilisateur à débloquer pour le moment.`);
    }
  } catch (error) {
    console.error("[CRON] Erreur lors du déblocage automatique :", error);
  }
};

module.exports = autoUnblockUsers;
