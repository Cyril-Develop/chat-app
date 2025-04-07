const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require("fs");
const path = require("path");

//********** ROOM **********/
//********** GET ROOM MESSAGES **********/
exports.getRoomMessage = async (req, res) => {
  const userId = req.userId;
  let { roomId } = req.params;

  // Convertir `roomId` en nombre
  roomId = Number(roomId);

  // Vérifiez que toutes les informations nécessaires sont présentes
  if (!userId || !roomId) {
    return res
      .status(400)
      .json({ error: "Impossible de récupérer les messages." });
  }

  try {
    // Vérifier si le salon existe
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
    });

    if (!chatRoom) {
      return res.status(404).json({ error: "Salon introuvable." });
    }

    // Récupérer les messages du salon avec uniquement les champs nécessaires
    const messages = await prisma.message.findMany({
      where: { chatRoomId: roomId },
      select: {
        id: true,
        message: true,
        image: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            username: true,
            profileImage: true,
            gender: true,
          },
        },
        likes: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                gender: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    // Formater les likes (ajouter userId et userName)
    const formattedMessages = messages.map((message) => ({
      ...message,
      likes: message.likes.map((like) => ({
        userId: like.user.id,
        username: like.user.username,
        gender: like.user.gender,
      })),
    }));

    return res.status(200).json(formattedMessages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur interne du serveur." });
  }
};

//********** SEND ROOM MESSAGE **********/
exports.sendRoomMessage = async (req, res) => {
  const { message } = req.body;
  const userId = req.userId;
  let { roomId } = req.params;
  // Convertir `roomId` en nombre
  roomId = Number(roomId);

  try {
    // Vérifiez si l'utilisateur et le salon de chat existent
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const chatRoom = await prisma.chatRoom.findUnique({
      where: { id: roomId },
    });

    if (!user || !chatRoom) {
      return res
        .status(404)
        .json({ error: "Utilisateur ou salon introuvable." });
    }

    // Créez le message
    const newMessage = await prisma.message.create({
      data: {
        message: message,
        image: req.file ? req.file.filename : "",
        userId: userId,
        chatRoomId: roomId,
      },
      include: {
        user: true,
        chatRoom: true,
        likes: {
          include: {
            user: true,
          },
        },
      },
    });

    // Retournez le message créé
    return res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

//********** LIKE MESSAGE **********/
exports.likeMessage = async (req, res) => {
  const userId = req.userId;
  let { type, messageId } = req.params;
  messageId = Number(messageId);

  try {
    let messageExists, likeExists, likeData, roomId, senderId, receiverId;

    if (type === "room") {
      // Vérifier si le message existe dans le chatRoom
      messageExists = await prisma.message.findFirst({
        where: { id: messageId },
        include: { chatRoom: true, user: true },
      });

      if (!messageExists) {
        return res
          .status(404)
          .json({ error: "Message introuvable dans ce salon." });
      }

      roomId = messageExists.chatRoom.id;
      senderId = messageExists.userId; // ID de l'auteur du message

      // Vérifier si l'utilisateur a déjà liké ce message
      likeExists = await prisma.messageLike.findFirst({
        where: { userId, messageId },
      });

      if (likeExists) {
        return res
          .status(400)
          .json({ error: "Vous avez déjà liké ce message." });
      }

      // Ajouter le like dans le salon
      likeData = await prisma.messageLike.create({
        data: { userId, messageId },
        include: { user: true },
      });
    } else if (type === "private") {
      // Vérifier si le message privé existe
      messageExists = await prisma.privateMessage.findFirst({
        where: { id: messageId },
        include: { user: true, receiver: true },
      });

      if (!messageExists) {
        return res.status(404).json({
          error: "Message privé introuvable dans cette conversation.",
        });
      }

      senderId = messageExists.userId; // ID de l'expéditeur (auteur) du message
      receiverId = messageExists.receiverId; // ID du destinataire du message

      // Vérifier si l'utilisateur a déjà liké ce message
      likeExists = await prisma.privateMessageLike.findFirst({
        where: { userId, privateMessageId: messageId },
      });

      if (likeExists) {
        return res
          .status(400)
          .json({ error: "Vous avez déjà liké ce message." });
      }

      // Ajouter le like dans la conversation privée
      likeData = await prisma.privateMessageLike.create({
        data: { userId, privateMessageId: messageId },
        include: { user: true },
      });
    } else {
      return res.status(400).json({ error: "Type de message invalide." });
    }

    // Vérifier que les données sont bien envoyées
    return res.status(201).json({
      message: "Like ajouté avec succès.",
      like: {
        userId: likeData.user.id,
        gender: likeData.user.gender,
        username: likeData.user.username,
        messageId,
        senderId: senderId,
        roomId: roomId || null,
        receiverId: receiverId || null,
      },
    });
  } catch (error) {
    console.error("Erreur lors du like :", error);
    return res.status(500).json({ error: "Erreur interne du serveur." });
  }
};

//********** DISLIKE MESSAGE **********/
exports.dislikeMessage = async (req, res) => {
  const userId = req.userId;
  let { type, messageId } = req.params;
  messageId = Number(messageId);

  try {
    let existingLike, messageInfo, roomId, senderId, receiverId;

    if (type === "room") {
      // Récupérer les infos du message avant de supprimer le like
      const messageData = await prisma.message.findUnique({
        where: { id: messageId },
        include: { chatRoom: true, user: true },
      });

      if (!messageData) {
        return res
          .status(404)
          .json({ error: "Message introuvable dans ce salon." });
      }

      roomId = messageData.chatRoom.id;
      senderId = messageData.userId;

      // Vérifier si l'utilisateur a liké ce message dans le salon
      existingLike = await prisma.messageLike.findUnique({
        where: {
          messageId_userId: {
            messageId: messageId,
            userId: userId,
          },
        },
        include: { user: true },
      });

      if (!existingLike) {
        return res
          .status(404)
          .json({ message: "Like non trouvé dans ce salon." });
      }

      // Supprimer le like (Dislike)
      await prisma.messageLike.delete({
        where: {
          messageId_userId: {
            messageId: messageId,
            userId: userId,
          },
        },
      });

      messageInfo = {
        userId,
        username: existingLike.user.username,
        messageId,
        roomId,
        senderId,
      };
    } else if (type === "private") {
      // Récupérer les infos du message privé avant de supprimer le like
      const privateMessageData = await prisma.privateMessage.findUnique({
        where: { id: messageId },
        include: { user: true, receiver: true },
      });

      if (!privateMessageData) {
        return res.status(404).json({ error: "Message privé introuvable." });
      }

      senderId = privateMessageData.userId;
      receiverId = privateMessageData.receiverId;

      // Vérifier si l'utilisateur a liké ce message privé
      existingLike = await prisma.privateMessageLike.findUnique({
        where: {
          privateMessageId_userId: {
            privateMessageId: messageId,
            userId: userId,
          },
        },
        include: { user: true },
      });

      if (!existingLike) {
        return res
          .status(404)
          .json({ message: "Like non trouvé dans cette conversation privée." });
      }

      // Supprimer le like (Dislike)
      await prisma.privateMessageLike.delete({
        where: {
          privateMessageId_userId: {
            privateMessageId: messageId,
            userId: userId,
          },
        },
      });

      messageInfo = {
        userId,
        username: existingLike.user.username,
        messageId,
        senderId,
        receiverId,
      };
    } else {
      return res.status(400).json({ error: "Type de message invalide." });
    }

    return res.status(200).json({
      message: "Like retiré avec succès.",
      dislike: messageInfo,
    });
  } catch (error) {
    console.error("Erreur lors du dislike :", error);
    return res.status(500).json({ error: "Erreur interne du serveur." });
  }
};

//********** DELETE ROOM MESSAGE **********/
exports.deleteRoomMessage = async (req, res) => {
  let { messageId } = req.params;
  const userId = req.userId;
  // Convertir `messageId` en nombre
  messageId = Number(messageId);

  // Vérifiez que toutes les informations nécessaires sont présentes
  if (!userId || !messageId) {
    return res
      .status(400)
      .json({ error: "Les informations nécessaires sont manquantes." });
  }

  try {
    // Vérifiez si l'utilisateur et le message existent
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const message = await prisma.message.findUnique({
      where: { id: messageId },
    });

    if (!user || !message) {
      return res
        .status(404)
        .json({ error: "Utilisateur ou message introuvable." });
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

//********** DM **********/
//********** GET PRIVATE MESSAGES **********/
exports.getPrivateMessages = async (req, res) => {
  const userId = req.userId;
  let { contactId } = req.params;
  // Convertir `contactId` en nombre
  contactId = Number(contactId);

  try {
    // Récupérer les messages privés envoyés ou reçus par l'utilisateur
    const messages = await prisma.privateMessage.findMany({
      where: {
        OR: [{ userId: userId }, { receiverId: userId }],
        AND: [
          {
            OR: [{ userId: contactId }, { receiverId: contactId }],
          },
        ],
      },
      select: {
        id: true,
        message: true,
        image: true,
        createdAt: true,
        isRead: true,
        user: {
          select: {
            id: true,
            username: true,
            profileImage: true,
            gender: true,
          },
        },
        receiver: {
          select: {
            id: true,
            username: true,
            profileImage: true,
            gender: true,
          },
        },
        likes: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                gender: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: "asc" },
    });

    // Formater les likes (ajouter userId et userName)
    const formattedMessages = messages.map((message) => ({
      ...message,
      likes: message.likes.map((like) => ({
        userId: like.user.id,
        username: like.user.username,
        gender: like.user.gender,
      })),
    }));

    return res.status(200).json(formattedMessages);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Erreur lors de la récupération des messages privés." });
  }
};
//********** SEND PRIVATE MESSAGE **********/
exports.sendPrivateMessage = async (req, res) => {
  const { message } = req.body;
  const userId = req.userId;
  const { contactId } = req.params;
  // Convertir `contactId` en nombre
  const receiverId = Number(contactId);

  if (!userId || !receiverId) {
    return res.status(400).json({ error: "Les champs sont obligatoires." });
  }

  try {
    const privateMessage = await prisma.privateMessage.create({
      data: {
        userId,
        receiverId: receiverId,
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

//********** MARK PRIVATE MESSAGE AS READ **********/
exports.markMessagesAsRead = async (req, res) => {
  const userId = req.userId;
  let { contactId } = req.params;
  // Convertir `contactId` en nombre
  contactId = Number(contactId);

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
exports.deletePrivateMessage = async (req, res) => {
  const userId = req.userId;
  let { messageId } = req.params;
  // Convertir `messageId` en nombre
  messageId = Number(messageId);

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
