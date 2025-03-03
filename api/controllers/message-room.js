const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const path = require("path");

//********** GET MESSAGES **********/
exports.getMessages = async (req, res) => {
  const { chatRoomId } = req.body;

  try {
    // Vérifiez si le salon de chat existe
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: chatRoomId },
    });

    if (!chatRoom) {
      return res.status(404).json({ error: "ChatRoom not found." });
    }

    // Récupérez les messages du salon de chat
    const messages = await prisma.message.findMany({
      where: { chatRoomId: chatRoomId },
      include: { user: true },
    });

    // Retournez les messages
    return res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

//********** SEND MESSAGE **********/
exports.sendMessage = async (req, res) => {
  const { roomId, message } = req.body;
  const userId = req.auth.userId;

  try {
    // Vérifiez si l'utilisateur et le salon de chat existent
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: Number(roomId) },
    });

    if (!user || !chatRoom) {
      return res.status(404).json({ error: "User or ChatRoom not found." });
    }

    // Créez le message
    const newMessage = await prisma.message.create({
      data: {
        message: message,
        image: req.file ? req.file.filename : "",
        userId: userId,
        chatRoomId: Number(roomId),
      },
      include: {
        user: true,
        chatRoom: true,
      },
    });

    // Retournez le message créé
    return res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

//********** DELETE MESSAGE **********/
exports.deleteMessage = async (req, res) => {
  const { messageId } = req.body;
  const userId = req.auth.userId;

  // Vérifiez que toutes les informations nécessaires sont présentes
  if (!userId || !messageId) {
    return res
      .status(400)
      .json({ error: "userId and messageId are required." });
  }

  try {
    // Vérifiez si l'utilisateur et le message existent
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!user || !message) {
      return res.status(404).json({ error: "User or Message not found." });
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
        .json({ error: "You are not allowed to delete this message." });
    }

    // Supprimez le message
    await prisma.message.delete({ where: { id: messageId } });

    // Retournez un message de succès
    return res
      .status(200)
      .json({ message: "Message supprimé avec succès.", messageId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};
