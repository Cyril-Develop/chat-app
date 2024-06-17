const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createChatRoom = async (req, res) => {
  const { name, password } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Le nom du salon est requis" });
  }

  try {
    const chatRoom = await prisma.chatRoom.create({
      data: {
        name,
        password: password,
        isPrivate: password ? true : false,
      },
    });
    res.status(201).json(chatRoom);
  } catch (error) {
    res.status(500).json({ error: "Error creating chat room" });
  }
};

exports.joinChatRoom = async (req, res) => {
  const { roomId, password } = req.body;

  try {
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
    });

    if (!chatRoom) {
      return res
        .status(404)
        .json({ error: "le salon de discussion n'existe pas" });
    }

    if (chatRoom.isPrivate && chatRoom.password !== password) {
      return res.status(403).json({ error: "Incorrect password" });
    }

    res.status(200).json({
      message: "Vous avez rejoint le salon de discussion avec succès!",
    });
  } catch (error) {
    res.status(500).json({ error: "Error joining chat room" });
  }
};
