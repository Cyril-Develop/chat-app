const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createChatRoom = async (req, res) => {
  const { name, password } = req.body;
  const userId = req.auth.userId;

  if (!name) {
    return res.status(400).json({ error: "Le nom du salon est requis" });
  }

  // Vérifier si le nom du salon existe déjà
  const existingChatRoom = await prisma.chatRoom.findFirst({
    where: { name },
  });

  if (existingChatRoom) {
    return res.status(400).json({ error: "Le nom du salon  est déjà pris" });
  }

  try {
    const chatRoom = await prisma.chatRoom.create({
      data: {
        name,
        password: password,
        isPrivate: !!password,
        createdBy: userId,
      },
    });
    res.status(201).json(chatRoom);
  } catch (error) {
    console.error("Error creating chat room:", error);
    res.status(500).json({ error: "Error creating chat room" });
  }
};

exports.joinChatRoom = async (req, res) => {
  const { roomId, password } = req.body;
  const userId = req.auth.userId;

  console.log(
    `Requête pour rejoindre le salon: roomId=${roomId}, userId=${userId}`
  );

  try {
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      select: {
        id: true,
        name: true,
        isPrivate: true,
        password: true,
        users: true,
      },
    });

    if (!chatRoom) {
      console.log(`Le salon de discussion avec l'ID ${roomId} n'existe pas`);
      return res
        .status(404)
        .json({ error: "Le salon de discussion n'existe pas" });
    }

    if (chatRoom.isPrivate && !password) {
      console.log("Mot de passe requis pour un salon privé");
      return res.status(403).json({ error: "Le mot de passe est requis" });
    }

    if (chatRoom.isPrivate && chatRoom.password !== password) {
      console.log("Mot de passe incorrect");
      return res.status(403).json({ error: "Mot de passe incorrect" });
    }

    console.log(`Utilisateur ${userId} rejoint le salon ${roomId}`);

    // Ajouter l'utilisateur au salon de discussion via la table de jonction UserChatRoom
    // const updatedChatRoom = await prisma.userChatRoom.create({
    //   data: {
    //     userId: userId,
    //     chatRoomId: roomId
    //   },
    // });

    const chatRoomWithUsers = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      select: { id: true, name: true, users: true },
    });

    console.log(`Salon mis à jour: ${JSON.stringify(chatRoomWithUsers)}`);
    res.status(200).json(chatRoomWithUsers);
  } catch (error) {
    console.error("Erreur lors de la tentative de rejoindre le salon:", error);
    res.status(500).json({ error: "Impossible de rejoindre le salon" });
  }
};

exports.getChatRooms = async (req, res) => {
  try {
    const chatRooms = await prisma.chatRoom.findMany();
    res.status(200).json(chatRooms);
  } catch (error) {
    res.status(500).json({ error: "Error getting chat rooms" });
  }
};

exports.getChatRoom = async (req, res) => {
  const { roomId } = req.params;

  try {
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      select: {
        id: true,
        name: true,
        isPrivate: true,
        users: true,
      },
    });

    if (!chatRoom) {
      return res
        .status(404)
        .json({ error: "Le salon de discussion n'existe pas" });
    }

    res.status(200).json(chatRoom); // Retourne directement l'objet chatRoom
  } catch (error) {
    console.error("Erreur lors de la récupération du salon de discussion :", error);
    res.status(500).json({ error: "Erreur lors de la récupération du salon de discussion" });
  }
};

