const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const path = require("path");

//********** SEND PRIVATE MESSAGE **********/
exports.sendMessage = async (req, res) => {
  const { receiverId, message } = req.body;
  const userId = req.userId;

  if (!userId || !receiverId) {
    return res.status(400).json({ error: "Les champs sont obligatoires." });
  }

  try {
    const privateMessage = await prisma.privateMessage.create({
      data: {
        userId,
        receiverId: Number(receiverId),
        message,
        image: req.file ? req.file.filename : "",
      },
      include: {
        user: { select: { id: true, username: true, profileImage: true } },
        receiver: {
          select: {
            id: true,
            username: true,
            profileImage: true,
            notification: true,
          },
        },
      },
    });

    return res.status(201).json(privateMessage);
  } catch (error) {
    return res.status(500).json({
      error: "Erreur lors de l'envoi du message.",
      details: error.message,
    });
  }
};

//********** GET PRIVATE MESSAGES **********/
exports.getMessages = async (req, res) => {
  const userId = req.userId;

  try {
    // Récupérer les messages privés envoyés ou reçus par l'utilisateur
    const privateMessages = await prisma.privateMessage.findMany({
      where: {
        OR: [{ userId: userId }, { receiverId: userId }],
      },
      select: {
        id: true,
        message: true,
        image: true,
        createdAt: true,
        isRead: true,
        user: { select: { id: true, username: true, profileImage: true } },
        receiver: { select: { id: true, username: true, profileImage: true } },
      },
      orderBy: { createdAt: "asc" },
    });

    return res.status(200).json(privateMessages);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Erreur lors de la récupération des messages privés." });
  }
};

//********** GET UNREAD PRIVATE MESSAGES **********/
exports.getUnreadMessages = async (req, res) => {
  const userId = req.userId;

  try {
    // Récupérer les messages non lus où l'utilisateur est le destinataire
    const unreadMessages = await prisma.privateMessage.findMany({
      where: {
        receiverId: userId,
        isRead: false,
      },
      select: {
        id: true,
        message: true,
        image: true,
        createdAt: true,
        user: { select: { id: true } },
        receiver: { select: { id: true } },
      },
      orderBy: { createdAt: "asc" },
    });

    return res.status(200).json(unreadMessages);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des messages non lus :",
      error
    );
    return res.status(500).json({
      error: "Erreur lors de la récupération des messages non lus.",
    });
  }
};

//********** MARK MESSAGE AS READ **********/
exports.markMessagesAsRead = async (req, res) => {
  const { contactId } = req.body;
  const userId = req.userId;

  if (!contactId || !userId) {
    return res.status(400).json({ error: "Données invalides." });
  }

  // userId est l'utilisateur qui a envoyé le message
  // receiverId est l'utilisateur qui a reçu le message (l'utilisateur connecté)
  try {
    await prisma.privateMessage.updateMany({
      where: {
        userId: contactId,
        receiverId: userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });

    return res
      .status(200)
      .json({ success: true, message: "Messages marqués comme lus." });
  } catch (error) {
    console.error("Erreur lors de la mise à jour des messages:", error);
    return res.status(500).json({ error: "Erreur serveur." });
  }
};

//********** DELETE PRIVATE MESSAGE **********/
exports.deleteMessage = async (req, res) => {
  const { messageId } = req.body;
  const userId = req.userId;

  try {
    // Vérifiez si l'utilisateur et le message existent
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const message = await prisma.privateMessage.findUnique({
      where: { id: messageId },
    });

    if (!message) {
      return res.status(404).json({ error: "Message introuvable." });
    }

    if (message.image) {
      const imageToDelete = path.join("images/message", message.image);
      fs.unlink(imageToDelete, (err) => {
        if (err) console.error("Error deleting old image:", err);
      });
    }

    // Vérifiez si l'utilisateur est l'auteur du message ou un administrateur
    if (message.userId !== userId && user.role !== "ADMIN") {
      return res
        .status(403)
        .json({ error: "Vous n'êtes pas autorisé à supprimer ce message." });
    }

    // Supprimer le message
    await prisma.privateMessage.delete({ where: { id: messageId } });

    return res
      .status(200)
      .json({ message: "Message supprimé avec succès.", messageId });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Erreur lors de la suppression du message." });
  }
};
