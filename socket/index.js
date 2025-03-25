const { Server } = require("socket.io");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const io = new Server({
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});

// Users connected
let users = [];
// Users in room
let userInRoom = [];
// Friend requests
let friendRequests = [];

const addUser = (userId, socketId, visible) => {
  if (!users.some((user) => user.userId === userId)) {
    users.push({ userId, socketId, visible });
  }
};

const addUserInRoom = (id, roomId, username, profileImage, visible) => {
  if (!userInRoom.some((user) => user.id === id && user.roomId === roomId)) {
    userInRoom.push({ id, username, profileImage, roomId, visible });
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
    // Adapter cette partie selon le format de vos cookies
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
  socket.on("addUser", (visible) => {
    const userId = socket.user.id;
    addUser(userId, socket.id, visible);
    io.emit("getUsers", users);
  });

  //********** CREATE ROOM **********/
  socket.on(
    "createRoom",
    (id, name, isPrivate, password, updatedAt, createdAt, createdBy) => {
      // Vérifier que l'utilisateur qui crée est bien celui qui est authentifié
      if (createdBy !== socket.user.id) {
        return;
      }
      socket.join(id);
      io.emit("getRooms", {
        id,
        name,
        isPrivate,
        password,
        updatedAt,
        createdAt,
        createdBy,
      });
    }
  );

  //********** JOIN ROOM **********/
  socket.on("joinRoom", (roomId, id, username, profileImage, visible) => {
    socket.join(roomId);
    addUserInRoom(id, roomId, username, profileImage, visible);

    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  //********** LEAVE ROOM **********/
  socket.on("leaveRoom", (roomId) => {
    const userId = socket.user.id;
    removeUserInRoom(roomId, userId);
    socket.leave(roomId);
    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  socket.on("requestUserInRoom", (roomId) => {
    const usersInRoom = getUsersInRoom(roomId);
    socket.emit("getUserInRoom", usersInRoom);
  });

  //********** DELETE ROOM **********/
  socket.on("deleteRoom", (id) => {
    io.emit("deleteRoom", id);
  });

  //********** SEND MESSAGE IN ROOM **********/
  socket.on(
    "sendMessage",
    ({
      userId,
      username,
      profileImage,
      roomId,
      message,
      id,
      createdAt,
      image,
    }) => {
      io.to(roomId).emit("getMessage", {
        userId,
        username,
        profileImage,
        message,
        id,
        createdAt,
        image,
      });
    }
  );

  //********** DELETE MESSAGE IN ROOM **********/
  socket.on("messageDeleted", (messageId, roomId) => {
    io.to(roomId).emit("messageDeleted", messageId);
  });
  addUser
  //********** UPDATE USER INFOS IN ROOM **********/
  socket.on("updateUserInfos", (data) => {
    io.emit("updatedUserInfos", data);
  });

  //********** CHANGE USER STATUS **********/
  socket.on("changeStatut", (visible) => {
    if (!socket.user || !socket.user.id) return; // Vérification pour éviter un crash

    const userId = socket.user.id;

    // Mise à jour du statut global
    users = users.map((user) =>
      user.userId === userId ? { ...user, visible } : user
    );

    // Mise à jour du statut dans les rooms où il est présent
    userInRoom.forEach((entry) => {
      if (entry.id === userId) {
        entry.visible = visible;
        io.to(entry.roomId).emit("getUserInRoom", getUsersInRoom(entry.roomId));
      }
    });

    // Notifier tous les clients du changement de statut
    io.emit("userStatusChanged", { userId, visible });
  });

  //******** SEND PRIVATE MESSAGE **********/
  socket.on("sendPrivateMessage", (data) => {
    const receiverSocket = users.find(
      (user) => user.userId === data.receiverId
    );
    const senderSocket = users.find((user) => user.userId === data.userId);

    // Envoyer le message au destinataire
    if (receiverSocket) {
      io.to(receiverSocket.socketId).emit("getPrivateMessage", data);
    }

    // Envoyer le message à l'expéditeur (pour qu'il l'affiche aussi)
    if (senderSocket) {
      io.to(senderSocket.socketId).emit("getPrivateMessage", data);
    }
  });

  //********** DELETE PRIVATE MESSAGE **********/
  socket.on("deletePrivateMessage", (messageId) => {
    io.emit("deletePrivateMessage", messageId);
  });

  //********** SEND FRIEND REQUEST **********/
  socket.on("sendFriendRequest", (data) => {
    const { id } = data;

    // Trouver la connexion du destinataire
    const receiverSocket = users.find(
      (user) => user.userId === data.receiver.id
    );

    // Trouver la connexion de l'expéditeur
    const senderSocket = users.find((user) => user.userId === data.sender.id);

    const request = {
      id: id,
      sender: {
        id: data.sender.id,
        username: data.sender.username,
        profileImage: data.sender.profileImage,
      },
      receiver: {
        id: data.receiver.id,
        username: data.receiver.username,
        profileImage: data.receiver.profileImage,
      },
    };

    // Ajouter la demande dans le tableau des requêtes d'ami
    friendRequests.push(request);

    // Envoyer l'événement au destinataire (receiver)
    if (receiverSocket) {
      io.to(receiverSocket.socketId).emit("receiveFriendRequest", request);
    }

    // Envoyer l'événement à l'expéditeur (sender)
    if (senderSocket) {
      io.to(senderSocket.socketId).emit("friendRequestSent", request);
    }
  });

  //********** ACCEPT FRIEND REQUEST **********/
  socket.on("acceptFriendRequest", (senderId, receiverId, requestId) => {
    const requestIndex = friendRequests.findIndex(
      (req) => req.id === requestId
    );

    // get sender and receiver names
    const senderName = friendRequests[requestIndex].sender.username;
    const receiverName = friendRequests[requestIndex].receiver.username;

    const userSocket = users.find((user) => user.userId === receiverId);
    const friendSocket = users.find((user) => user.userId === senderId);

    if (userSocket) {
      io.to(userSocket.socketId).emit("friendRequestAccepted", {
        senderId,
        senderName,
        receiverId,
        receiverName,
      });
    }

    if (friendSocket) {
      io.to(friendSocket.socketId).emit("friendRequestAccepted", {
        senderId,
        senderName,
        receiverId,
        receiverName,
      });
    }

    // supprimer la demande d'ami du tableau des demandes
    friendRequests = friendRequests.filter((req) => req.id !== requestId);
  });

  //********** UPDATE RELATIONSHIP **********/
  socket.on("updateRelationship", (usersID) => {
    io.emit("updatedRelationship", usersID);
  });

  //********** REJECT FRIEND REQUEST **********/
  socket.on("rejectFriendRequest", (senderId, receiverId, requestId) => {
    const senderSocket = users.find((user) => user.userId === senderId);

    if (senderSocket) {
      io.to(senderSocket.socketId).emit("friendRequestRejected", requestId);
    }

    const receiverSocket = users.find((user) => user.userId === receiverId);

    if (receiverSocket) {
      io.to(receiverSocket.socketId).emit("friendRequestRejected", requestId);
    }

    // supprimer la demande d'ami du tableau des demandes
    friendRequests = friendRequests.filter((req) => req.id !== requestId);
  });

  //********** REMOVE FRIEND **********/
  socket.on("removeFriend", (data) => {
    const userSocket = users.find((user) => user.userId === data.userId);
    const friendSocket = users.find((user) => user.userId === data.contactId);

    if (userSocket) {
      io.to(userSocket.socketId).emit("friendRemoved", data.contactId);
    }

    if (friendSocket) {
      io.to(friendSocket.socketId).emit("friendRemoved", data.userId);
    }

    // Met à jour la liste des utilisateurs disponibles dans le champ de recherche
    io.emit("removedRelationship", {
      user: data.user,
      friend: data.contact,
    });
  });

  //********** DELETE ACCOUNT **********/
  socket.on("deleteAccount", (data) => {
    io.emit("accountDeleted", data.userId);
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
io.listen(PORT, () => {
  console.log(`Socket.IO server is running at https://localhost:${PORT}`);
});
