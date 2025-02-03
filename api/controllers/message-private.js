const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const path = require("path");

exports.sendMessage = async (req, res) => {
  const { receiverId, message } = req.body;
  const userId = req.auth.userId;

  if (!userId || !receiverId || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
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
        receiver: { select: { id: true, username: true, profileImage: true } },
      },
    });

    console.log(privateMessage);
    

    return res.status(201).json(privateMessage);
  } catch (error) {
    return res.status(500).json({
      error: "Erreur lors de l'envoi du message.",
      details: error.message,
    });
  }
};

exports.getMessages = async (req, res) => {
  const userId = req.auth.userId;

  try {
    // Récupérer les messages privés envoyés ou reçus par l'utilisateur
    const privateMessages = await prisma.privateMessage.findMany({
      where: {
        OR: [{ userId: userId }, { receiverId: userId }],
      },
      include: {
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

exports.deleteMessage = async (req, res) => {
  const { messageId } = req.body;
  const userId = req.auth.userId;

  try {
    // Vérifiez si le message appartient à l'utilisateur
    const message = await prisma.privateMessage.findUnique({
      where: { id: messageId },
    });

    if (!message || message.userId !== userId) {
      return res.status(404).json({ error: "Message not found." });
    }

    // Supprimer le message
    await prisma.privateMessage.delete({ where: { id: messageId } });

    return res.status(200).json({ message: "Message supprimé avec succès." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Erreur lors de la suppression du message." });
  }
};
