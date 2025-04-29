const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const autoUnblockUsers = async () => {
  try {
    const now = new Date();

    const result = await prisma.adminBlock.updateMany({
      where: {
        isActive: true,
        endDate: {
          not: null,
          lt: now, // endDate < now
        },
      },
      data: {
        isActive: false,
      },
    });

    console.log(
      `[CRON] Déblocage automatique terminé. Utilisateurs débloqués : ${result.count}`
    );
  } catch (error) {
    console.error("[CRON] Erreur lors du déblocage automatique :", error);
  }
};

module.exports = autoUnblockUsers;