const { Server } = require("socket.io");
require("dotenv").config();
const https = require("https");
const fs = require("fs");
const jwt = require("jsonwebtoken");

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/cyril-develop.fr/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/cyril-develop.fr/fullchain.pem"),
};

const server = https.createServer(options);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});

// Users connected
let users = [];
// Users in room
let userInRoom = [];

const addUser = (userId, socketId, visible, appState) => {
  const existingUserIndex = users.findIndex((user) => user.userId === userId);

  if (existingUserIndex !== -1) {
    users[existingUserIndex] = { userId, socketId, visible, appState };
  } else {
    users.push({ userId, socketId, visible, appState });
  }
};

const addUserInRoom = (
  roomId,
  id,
  username,
  sex,
  profileImage,
  visible,
  role
) => {
  if (!userInRoom.some((user) => user.id === id && user.roomId === roomId)) {
    userInRoom.push({
      roomId,
      id,
      username,
      sex,
      profileImage,
      visible,
      role,
    });
  }
};

const getUsersInRoom = (roomId) => {
  return userInRoom.filter((user) => user.roomId === roomId);
};

const removeUserInRoom = (roomId, userId) => {
  userInRoom = userInRoom.filter(
    (user) => user.id !== userId || user.roomId !== roomId
  );
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

//**********  AUTHENTICATION **********/
io.use((socket, next) => {
  try {
    // Récupération des cookies
    const cookies = socket.request.headers.cookie;
    if (!cookies) {
      return next(new Error("Authentication required"));
    }

    // Extraction du token JWT du cookie
    const tokenMatch = cookies.match(/token=([^;]*)/);
    if (!tokenMatch) {
      return next(new Error("Authentication token not found"));
    }

    const token = tokenMatch[1];

    // Vérification du token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Stockage des informations utilisateur dans l'objet socket
    socket.user = { id: decoded.id };

    next();
  } catch (error) {
    console.error("Socket authentication error:", error.message);
    next(new Error("Invalid authentication token"));
  }
});

//**********  SOCKET CONNECTION **********/
io.on("connection", (socket) => {
  // ADD USER ONLINE
  socket.on("addUser", (visible, appState) => {
    const userId = socket.user.id;
    addUser(userId, socket.id, visible, appState);
    io.emit("getUsers", users);
  });

  //********** CREATE ROOM **********/
  socket.on("createRoom", () => {
    // Émettre simplement l'événement pour invalider le cache avec tanstack-query
    io.emit("roomCreated");
  });

  //********** UPDATE ROOM **********/
  socket.on("updateRoomDescription", (roomId) => {
    // Émettre simplement l'événement pour invalider le cache avec tanstack-query
    io.emit("roomUpdated", roomId);
  });

  //********** UPDATE APP STATE **********/
  socket.on("appStateChanged", (data) => {
    const user = users.find((user) => user.socketId === socket.id);
    if (user) {
      user.appState = data.state; // 'foreground' or 'background'
    }
  });

  //********** JOIN ROOM **********/
  socket.on(
    "joinRoom",
    (roomId, id, username, sex, profileImage, visible, role) => {
      socket.join(roomId);
      addUserInRoom(roomId, id, username, sex, profileImage, visible, role);

      const usersInThisRoom = getUsersInRoom(roomId);
      io.to(roomId).emit("getUserInRoom", usersInThisRoom);
    }
  );

  //********** LEAVE ROOM **********/
  socket.on("leaveRoom", (roomId) => {
    const userId = socket.user.id;
    removeUserInRoom(roomId, userId);
    socket.leave(roomId);
    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  //********** DELETE ROOM **********/
  socket.on("deleteRoom", (id) => {
    io.emit("roomDeleted", id);
  });

  //********** VOCAL CHAT WITH PEERJS **********/
  socket.on("join-vocal-chat", ({ roomId, userId, username, peerId }) => {
    // Vérifier que l'utilisateur authentifié est celui qui fait la demande
    if (userId !== socket.user.id) return;

    // Informer les autres utilisateurs dans la salle
    socket.join(`voice-${roomId}`);
    socket.to(roomId).emit("user-joined-vocal", {
      userId,
      username,
      peerId,
      roomId,
    });

    // Diffuser votre peerId aux utilisateurs existants
    socket.to(roomId).emit("peer-id-broadcast", {
      userId,
      peerId,
      roomId,
    });
  });

  socket.on("leave-vocal-chat", ({ roomId, userId, username }) => {
    // Vérifier que l'utilisateur authentifié est celui qui fait la demande
    if (userId !== socket.user.id) return;

    // Informer les autres utilisateurs dans la salle
    socket.leave(`voice-${roomId}`);
    socket.to(roomId).emit("user-left-vocal", {
      userId,
      username,
      roomId,
    });
  });

  socket.on("user-speaking", ({ roomId, userId }) => {
    // Émettre à toute la room même si l'utilisateur n'est pas dans le chat vocal, permet de savoir qui parle
    io.to(roomId).emit("user-speaking", { userId });
  });

  socket.on("user-stopped-speaking", ({ roomId, userId }) => {
    io.to(roomId).emit("user-stopped-speaking", { userId });
  });

  //********** SEND MESSAGE IN ROOM **********/
  socket.on("sendMessage", (roomId) => {
    io.to(roomId).emit("messageSentInRoom");
  });

  //********** LIKE MESSAGE **********/
  socket.on("likeMessage", (data) => {
    const { userId, sex, username, messageId, roomId, receiverId, senderId } =
      data;

    // Cas des messages dans une room
    if (roomId) {
      io.to(roomId).emit("messageLiked", {
        userId,
        sex,
        username,
        messageId,
        roomId,
      });
      return;
    }

    // Cas du message privé : envoyer à sender ET receiver
    const senderSocket = users.find((u) => u.userId === senderId);
    const receiverSocket = users.find((u) => u.userId === receiverId);

    const payload = {
      userId,
      sex,
      username,
      messageId,
      senderId,
      receiverId,
    };

    if (senderSocket) {
      io.to(senderSocket.socketId).emit("messageLiked", payload);
    }
    if (receiverSocket) {
      io.to(receiverSocket.socketId).emit("messageLiked", payload);
    }
  });

  //********** DISLIKE MESSAGE **********/
  socket.on("dislikeMessage", (data) => {
    const { userId, username, messageId, roomId, receiverId, senderId } = data;

    // Cas des messages dans une room (groupe)
    if (roomId) {
      io.to(roomId).emit("messageDisliked", {
        userId,
        username,
        messageId,
        roomId,
      });
      return;
    }

    // Cas message privé : juste envoyer à sender + receiver
    const senderSocket = users.find((u) => u.userId === senderId);
    const receiverSocket = users.find((u) => u.userId === receiverId);

    const payload = {
      userId,
      username,
      messageId,
      senderId,
      receiverId,
    };

    if (senderSocket) {
      io.to(senderSocket.socketId).emit("messageDisliked", payload);
    }
    if (receiverSocket) {
      io.to(receiverSocket.socketId).emit("messageDisliked", payload);
    }
  });

  //********** DELETE MESSAGE IN ROOM **********/
  socket.on("deleteMessage", (roomId) => {
    io.to(roomId).emit("messageDeleted");
  });

  //********** UPDATE MESSAGE IN ROOM **********/
  socket.on("updateUserInfos", (userId) => {
    // Vérifier que l'utilisateur qui crée est bien celui qui est authentifié
    if (userId !== socket.user.id) {
      return;
    }
    io.emit("updatedUserInfos", userId);
  });

  //********** CHANGE USER STATUS **********/
  socket.on("changeStatut", (visible) => {
    // Update the status in the global user list
    const userId = socket.user.id;
    const user = users.find((user) => user.userId === userId);

    if (user) {
      user.visible = visible;
    }
    // Update the status in the room user list
    const userInRoomEntries = userInRoom.filter((user) => user.id === userId);
    userInRoomEntries.forEach((entry) => {
      entry.visible = visible;
      io.to(entry.roomId).emit("getUserInRoom", getUsersInRoom(entry.roomId));
    });

    // Send the status change to all users
    io.emit("userStatusChanged", { userId, visible });
  });

 //******** SEND PRIVATE MESSAGE **********/
  socket.on("sendPrivateMessage", async (data) => {
    const receiverSocket = users.find(
      (user) => user.userId === data.receiver.id
    );
    const senderSocket = users.find((user) => user.userId === data.user.id);

    // Envoyer le message à l'expéditeur
    if (senderSocket) {
      io.to(senderSocket.socketId).emit("getPrivateMessage", data);
    }

    // Le destinataire est connecté
    if (receiverSocket) {
      // On lui envoie toujours le message
      io.to(receiverSocket.socketId).emit("getPrivateMessage", data);

      // On lui envoie une notification socket (pour UI)
      io.to(receiverSocket.socketId).emit("newNotification", {
        type: "message",
        id: data.id,
        receiver: {
          id: data.receiver.id,
        },
        user: {
          id: data.user.id,
          username: data.user.username,
          profileImage: data.user.profileImage,
          sex: data.user.sex,
        },
      });

      // Si l'application est en arrière-plan, on envoie aussi une notification push
      if (receiverSocket.appState === "background") {
        await sendPushNotification(data);
      }
    } else {
      // Si le receveur est déconnecté, envoyer push notification
      await sendPushNotification(data);
    }
  });

  // Fonction pour envoyer les notifications push
  async function sendPushNotification(data) {
    try {
      await fetch(`${process.env.API_URL}/notification/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiverId: data.receiver.id,
          title: "Chateo",
          body: `${data.user.username} vous a envoyé un message privé`,
          image: data.user.profileImage,
        }),
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de la notification push:", error);
    }
  }  

  //********** DELETE PRIVATE MESSAGE **********/
  socket.on("deletePrivateMessage", (messageId) => {
    io.emit("deletePrivateMessage", messageId);
  });

  //********** SEND FRIEND REQUEST **********/
  socket.on(
    "sendFriendRequest",
    (
      requestId,
      receiverId,
      senderId,
      senderName,
      sendersex,
      senderProfileImage
    ) => {
      const receiverSocket = users.find((user) => user.userId === receiverId);
      const senderSocket = users.find((user) => user.userId === senderId);

      if (senderSocket) {
        io.to(senderSocket.socketId).emit("friendRequestSent");
      }

      if (receiverSocket) {
        io.to(receiverSocket.socketId).emit("receiveFriendRequest");

        // Nouvelle émission uniquement pour la notification du destinataire
        io.to(receiverSocket.socketId).emit("newNotification", {
          type: "request",
          id: requestId,
          receiver: {
            id: receiverId,
          },
          sender: {
            id: senderId,
            username: senderName,
            sex: sendersex,
            profileImage: senderProfileImage,
          },
        });
      } else {
        // Si le receveur est déconnecté, demander au backend d’envoyer la notif
        fetch(`${process.env.API_URL}/notification/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiverId,
            title: "Chateo",
            body: `${senderName} vous a envoyé une demande d'ami`,
            image: senderProfileImage,
          }),
        });
      }

      // On envoie l'event à tous les utilisateurs pour mettre à jour la liste des demandes d'amis dans la liste users
      io.emit("requestPending");
    }
  );

  //********** ACCEPT FRIEND REQUEST **********/
  socket.on("acceptFriendRequest", (userId, friendId) => {
    const userSocket = users.find((user) => user.userId === userId);
    const friendSocket = users.find((user) => user.userId === friendId);

    if (userSocket) {
      io.to(userSocket.socketId).emit("friendRequestAccepted");
    }

    if (friendSocket) {
      io.to(friendSocket.socketId).emit("friendRequestAccepted");
    }

    // On envoie l'event à tous les utilisateurs pour mettre à jour la liste des demandes d'amis dans la liste users
    io.emit("friendRequestAccepted");
  });

  //********** REJECT FRIEND REQUEST **********/
  socket.on("rejectFriendRequest", () => {
    // On envoie l'event à tous les utilisateurs pour mettre à jour la liste des demandes d'amis dans la liste users
    io.emit("friendRequestRejected");
  });

  //********** REMOVE FRIEND **********/
  socket.on("removeFriend", (userId, contactId) => {
    const userSocket = users.find((user) => user.userId === userId);
    const friendSocket = users.find((user) => user.userId === contactId);

    // On supprime le contact de la liste pour les deux utilisateurs
    if (userSocket) {
      io.to(userSocket.socketId).emit("friendRemoved", contactId);
    }

    if (friendSocket) {
      io.to(friendSocket.socketId).emit("friendRemoved", userId);
    }

    // On supprime la relation pour mettre à jours la liste des utilisateurs
    io.emit("removedRelationship");
  });

  //********** BLOCK USER **********/
  socket.on("blockUser", () => {
    // On bloque la relation pour retirer l'utilisateur de la liste des utilisateurs dans search user
    io.emit("blockedRelationship");
  });

  //********** UNBLOCK USER **********/
  socket.on("unblockUser", () => {
    // On débloque la relation pour remettre l'utilisateur dans la liste des utilisateurs dans search user
    io.emit("unblockedRelationship");
  });

  //! Pas encore implémenté côté client
  //********** CREATE ACCOUNT **********/
  socket.on("createAccount", () => {
    io.emit("accountCreated");
  });

  //********** DELETE ACCOUNT **********/
  socket.on("deleteAccount", (affectedUserIds) => {
    affectedUserIds.forEach((userId) => {
      const userSocket = users.find((user) => user.userId === userId);

      if (userSocket) {
        io.to(userSocket.socketId).emit("accountDeletedForUser");
      }
    });

    // Envoie l'événement global pour mettre à jour les listes
    io.emit("accountDeletedGlobal");
  });

  //********** DISCONNECT **********/
  socket.on("disconnect", () => {
    const user = users.find((u) => u.socketId === socket.id);
    if (user) {
      // Trouver tous les salons où l'utilisateur est présent
      const userRooms = userInRoom.filter((u) => u.id === user.userId);

      // Retirer l'utilisateur de tous les salons
      userRooms.forEach((room) => {
        removeUserInRoom(room.roomId, user.userId);

        // Informer les autres utilisateurs du salon que cet utilisateur a quitté
        const usersInThisRoom = getUsersInRoom(room.roomId);
        io.to(room.roomId).emit("getUserInRoom", usersInThisRoom);
      });

      // Informer tous les utilisateurs que cet utilisateur est hors ligne
      io.emit("userStatusChanged", { userId: user.userId, visible: false });
    }
    // Retirer l'utilisateur de la liste des utilisateurs connectés
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

const PORT = process.env.SOCKET_PORT || 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server is running at https://localhost:${PORT}`);
});
