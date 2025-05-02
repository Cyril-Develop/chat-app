const prisma = require("../lib/prisma");
const fs = require("fs");
const path = require("path");

const MAX_MESSAGES_PER_ROOM = 2;

const cleanupRoomMessages = async () => {
  try {
    console.log("[CRON] Début du nettoyage des messages des salons...");

    // Récupérer tous les salons
    const rooms = await prisma.chatRoom.findMany({
      select: { id: true, name: true },
    });

    let totalDeletedMessages = 0;

    // Pour chaque salon, vérifier et nettoyer les messages
    for (const room of rooms) {
      // Compter les messages dans ce salon
      const messageCount = await prisma.message.count({
        where: { chatRoomId: room.id },
      });

      // Si le nombre de messages dépasse la limite
      if (messageCount > MAX_MESSAGES_PER_ROOM) {
        // Calculer combien de messages doivent être supprimés
        const messagesToDeleteCount = messageCount - MAX_MESSAGES_PER_ROOM;

        // Trouver les IDs des messages les plus anciens à supprimer
        const messagesToDelete = await prisma.message.findMany({
          where: { chatRoomId: room.id },
          orderBy: { createdAt: "asc" },
          take: messagesToDeleteCount,
          select: { id: true },
        });

        // Supprimer les images associées aux messages à supprimer
        for (const msg of messagesToDelete) {
          const message = await prisma.message.findUnique({
            where: { id: msg.id },
            select: { image: true },
          });

          if (message && message.image) {
            const imageToDelete = path.join("images/message", message.image);
            fs.unlink(imageToDelete, (err) => {
              if (err) console.error("Error deleting old image:", err);
            });
          }
        }

        const messageIds = messagesToDelete.map((msg) => msg.id);

        // Supprimer les messages
        const deleteResult = await prisma.message.deleteMany({
          where: {
            id: { in: messageIds },
          },
        });

        totalDeletedMessages += deleteResult.count;

        console.log(
          `[CRON] Salon ${room.name} (ID: ${room.id}): ${deleteResult.count}/${messageCount} messages supprimés`
        );
      }
    }

    console.log(
      `[CRON] Nettoyage des messages terminé. Total supprimé: ${totalDeletedMessages} messages`
    );
  } catch (error) {
    console.error("[CRON] Erreur lors du nettoyage des messages:", error);
  }
};

module.exports = cleanupRoomMessages;
