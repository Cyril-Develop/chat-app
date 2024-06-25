const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.createChatRoom = async (req, res) => {
  const { name, password } = req.body;
  const userId = req.auth.userId;

  if (!name) {
    return res.status(400).json({ error: "Le nom du salon est requis" });
  }

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

  try {
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
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

    // Vérifier si l'utilisateur est déjà membre d'un autre salon
    const existingMembership = await prisma.userChatRoom.findFirst({
      where: { userId: userId },
    });

    if (existingMembership) {
      console.log(`Utilisateur ${userId} quitte le salon ${existingMembership.chatRoomId}`);
      // Retirer l'utilisateur de l'ancien salon
      await prisma.userChatRoom.delete({
        where: {
          userId_chatRoomId: {
            userId: userId,
            chatRoomId: existingMembership.chatRoomId,
          },
        },
      });
    }

    // Ajouter l'utilisateur au nouveau salon de discussion via la table de jonction UserChatRoom
    await prisma.userChatRoom.create({
      data: {
        userId: userId,
        chatRoomId: roomId,
      },
    });

    res.status(200).json({ message: "Vous avez rejoint le salon de discussion" });
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
  const { id } = req.params;
  const roomId = parseInt(id);

  try {
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      select: {
        id: true,
        name: true,
        users: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                profileImage: true,
              },
            },
          },
        },
      },
    });

    if (!chatRoom) {
      return res
        .status(404)
        .json({ error: "Le salon de discussion n'existe pas" });
    }

    // Map the users to return a simplified array of users
    const users = chatRoom.users.map((userChatRoom) => userChatRoom.user);

    res.status(200).json({ ...chatRoom, users });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du salon de discussion :",
      error
    );
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération du salon de discussion" });
  }
};

