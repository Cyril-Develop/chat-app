const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getMessages = async (req, res) => {
  const { chatRoomId } = req.body;

  try {
    // Vérifiez si le salon de chat existe
    const chatRoom = await prisma.chatRoom.findUnique({ where: { id: chatRoomId } });

    if (!chatRoom) {
      return res.status(404).json({ error: 'ChatRoom not found.' });
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
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.sendMessage = async (req, res) => {
  const { roomId, content } = req.body;
  const userId = req.auth.userId;

  console.log(roomId, content, userId);

  // Vérifiez que toutes les informations nécessaires sont présentes
  if (!userId || !roomId || !content) {
    return res.status(400).json({ error: 'userId, roomId, and content are required.' });
  }

  try {
    // Vérifiez si l'utilisateur et le salon de chat existent
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const chatRoom = await prisma.chatRoom.findUnique({ where: { id: roomId } });

    if (!user || !chatRoom) {
      return res.status(404).json({ error: 'User or ChatRoom not found.' });
    }

    // Créez le message
    const message = await prisma.message.create({
      data: {
        content: content,
        userId: userId,
        chatRoomId: roomId,
      },
      include: {
        user: true,
        chatRoom: true,
      },
    });

    // Retournez le message créé
    return res.status(201).json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.deleteMessage = async (req, res) => {
  const { messageId } = req.body;
  const userId = req.auth.userId;

  console.log(messageId, userId);

  // Vérifiez que toutes les informations nécessaires sont présentes
  if (!userId || !messageId) {
    return res.status(400).json({ error: 'userId and messageId are required.' });
  }

  try {
    // Vérifiez si l'utilisateur et le message existent
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const message = await prisma.message.findUnique({ where: { id: messageId } });

    if (!user || !message) {
      return res.status(404).json({ error: 'User or Message not found.' });
    }

    // Vérifiez si l'utilisateur est l'auteur du message
    if (message.userId !== userId) {
      return res.status(403).json({ error: 'You are not allowed to delete this message.' });
    }

    // Supprimez le message
    await prisma.message.delete({ where: { id: messageId } });

    // Retournez un message de succès
    return res.status(200).json({ message: 'Message deleted successfully.', messageId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};