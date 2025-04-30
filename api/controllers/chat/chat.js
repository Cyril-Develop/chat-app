const prisma = require("../../lib/prisma");

//**********  CREATE CHAT ROOM **********/
exports.createChatRoom = async (req, res) => {
  const { name, password, description } = req.body;
  const userId = req.userId;

  if (!name) {
    return res.status(400).json({ error: "Le nom du salon est requis." });
  }

  const existingChatRoom = await prisma.chatRoom.findFirst({
    where: { name },
  });

  if (existingChatRoom) {
    return res.status(400).json({ error: "Le nom du salon  est déjà pris." });
  }

  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  try {
    const chatRoom = await prisma.chatRoom.create({
      data: {
        name: nameCapitalized,
        password: password,
        description,
        isPrivate: !!password,
        createdBy: userId,
      },
    });
    res.status(201).json(chatRoom);
  } catch (error) {
    console.error("Error creating chat room:", error);
    res.status(500).json({ error: "Error creating chat room." });
  }
};

//**********  UPDATE DESCRIPTION CHAT ROOM **********/
exports.updateChatRoom = async (req, res) => {
  let { roomId } = req.params;
  roomId = parseInt(roomId);
  const { description } = req.body;
  const userId = req.userId;

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      select: {
        id: true,
        name: true,
        createdBy: true,
      },
    });

    if (!chatRoom) {
      return res.status(404).json({
        error: "Le salon de discussion n'existe pas.",
      });
    }

    if (chatRoom.createdBy !== userId && user.role !== "ADMIN") {
      return res.status(403).json({
        error: "Vous n'êtes pas autorisé à modifier ce salon.",
      });
    }

    const updatedChatRoom = await prisma.chatRoom.update({
      where: { id: roomId },
      data: { description },
    });
    res.status(200).json({
      message: "Description du salon mise à jour.",
      chatRoom: updatedChatRoom,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour de la description du salon:",
      error
    );
    res.status(500).json({
      error: "Erreur lors de la mise à jour de la description du salon.",
    });
  }
};

//**********  JOIN CHAT ROOM **********/
exports.joinChatRoom = async (req, res) => {
  const { roomId, password } = req.body;
  const userId = req.userId;
  try {
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      select: {
        id: true,
        name: true,
        password: true,
        isPrivate: true,
      },
    });

    if (!chatRoom) {
      return res.status(404).json({
        error: "Le salon de discussion n'existe pas.",
        errorCode: "ROOM_NOT_FOUND",
      });
    }

    if (chatRoom.isPrivate && !password) {
      return res.status(403).json({ error: "Le mot de passe est requis." });
    }

    if (chatRoom.isPrivate && chatRoom.password !== password) {
      return res.status(403).json({ error: "Mot de passe incorrect." });
    }

    // Vérifier si l'utilisateur est déjà membre de cette salle
    const existingMembership = await prisma.userChatRoom.findUnique({
      where: {
        userId_chatRoomId: {
          userId: userId,
          chatRoomId: roomId,
        },
      },
    });

    // Si l'utilisateur est déjà membre, renvoyer simplement une réponse réussie
    if (existingMembership) {
      return res.status(200).json({
        roomId: chatRoom.id,
        roomName: chatRoom.name,
      });
    }

    // Ajouter l'utilisateur au nouveau salon de discussion via la table de jonction UserChatRoom
    await prisma.userChatRoom.create({
      data: {
        userId: userId,
        chatRoomId: roomId,
      },
    });

    return res.status(200).json({
      message: `Vous avez rejoint le salon de discussion "${chatRoom.name}".`,
      roomId: chatRoom.id,
      roomName: chatRoom.name,
    });
  } catch (error) {
    console.error("Erreur lors de la tentative de rejoindre le salon:", error);
    res.status(500).json({ error: "Impossible de rejoindre le salon." });
  }
};

//**********  LEAVE CHAT ROOM **********/
exports.leaveChatRoom = async (req, res) => {
  const { roomId } = req.body;
  const userId = req.userId;

  try {
    const existingMembership = await prisma.userChatRoom.findFirst({
      where: { userId: userId, chatRoomId: roomId },
    });

    if (!existingMembership) {
      return res.status(404).json({
        error: "Vous n'êtes pas membre de ce salon.",
        errorCode: "USER_NOT_IN_ROOM",
      });
    }

    await prisma.userChatRoom.delete({
      where: {
        userId_chatRoomId: {
          userId: userId,
          chatRoomId: roomId,
        },
      },
    });

    return res
      .status(200)
      .json({ message: "Vous avez quitté le salon de discussion.", roomId });
  } catch (error) {
    console.error("Erreur lors de la tentative de quitter le salon:", error);
    res.status(500).json({ error: "Impossible de quitter le salon." });
  }
};

//**********  GET CHAT ROOMS **********/
exports.getChatRooms = async (req, res) => {
  try {
    const chatRooms = await prisma.chatRoom.findMany();
    res.status(200).json(chatRooms);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Impossible de récupérer la liste des salons." });
  }
};

//**********  GET CHAT ROOM **********/
exports.getChatRoom = async (req, res) => {
  const { id } = req.params;
  const roomId = parseInt(id);

  try {
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      select: {
        id: true,
        name: true,
        description: true,
        createdBy: true,
        isPrivate: true,
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
      return res.status(404).json({
        error: "Le salon de discussion n'existe pas.",
        errorCode: "ROOM_NOT_FOUND",
      });
    }

    // Map the users to return a simplified array of users
    const users = chatRoom.users.map((userChatRoom) => userChatRoom.user);

    res.status(200).json({ ...chatRoom, users });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du salon de discussion :",
      error
    );
    res.status(500).json({
      error: "Erreur lors de la récupération du salon de discussion.",
    });
  }
};

//**********  DELETE CHAT ROOM **********/
exports.deleteChatRoom = async (req, res) => {
  const { roomId } = req.body;

  try {
    await prisma.chatRoom.delete({
      where: { id: roomId },
    });

    res.status(200).json({ message: "Salon de discussion supprimé.", roomId });
  } catch (error) {
    console.error(
      "Erreur lors de la suppression du salon de discussion :",
      error
    );
    res
      .status(500)
      .json({ error: "Erreur lors de la suppression du salon de discussion." });
  }
};
