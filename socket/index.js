const { Server } = require("socket.io");
const https = require("https");
require("dotenv").config();
const fs = require("fs");

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/cyril-develop.fr/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/cyril-develop.fr/fullchain.pem"),
};

const server = https.createServer(options);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

// Users connected
let users = [];
// Users in room
let userInRoom = [];
// Friend requests
let friendRequests = [];

const addUser = (userId, socketId, statut) => {
  if (!users.some((user) => user.userId === userId)) {
    users.push({ userId, socketId, statut });
  }
};

const addUserInRoom = (id, roomId, username, profileImage, statut) => {
  if (!userInRoom.some((user) => user.id === id && user.roomId === roomId)) {
    userInRoom.push({ id, username, profileImage, roomId, statut });
  }
};

const getUsersInRoom = (roomId) => {
  return userInRoom.filter((user) => user.roomId === roomId);
};

const removeUserInRoom = (id, roomId) => {
  userInRoom = userInRoom.filter(
    (user) => user.id !== id || user.roomId !== roomId
  );
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

// SOCKET CONNECTION
io.on("connection", (socket) => {
  // ADD USER ONLINE
  socket.on("addUser", (userId, statut) => {
    addUser(userId, socket.id, statut);
    io.emit("getUsers", users);
  });

  // CREATE ROOM
  socket.on(
    "createRoom",
    (id, name, isPrivate, password, updatedAt, createdAt, createdBy) => {
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

  // JOIN ROOM
  socket.on("joinRoom", (roomId, id, username, profileImage, statut) => {
    socket.join(roomId);
    addUserInRoom(id, roomId, username, profileImage, statut);

    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  // LEAVE ROOM
  socket.on("leaveRoom", (roomId, id) => {
    removeUserInRoom(id, roomId);
    socket.leave(roomId);
    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  socket.on("requestUserInRoom", (roomId) => {
    const usersInRoom = getUsersInRoom(roomId);
    socket.emit("getUserInRoom", usersInRoom);
  });

  // DELETE ROOM
  socket.on("deleteRoom", (id) => {
    io.emit("deleteRoom", id);
  });

  // SEND MESSAGE IN ROOM
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

  // DELETE MESSAGE
  socket.on("messageDeleted", (messageId, roomId) => {
    io.to(roomId).emit("messageDeleted", messageId);
  });

  // UPDATE USER INFOS
  socket.on("updateUserInfos", (data) => {
    io.emit("updatedUserInfos", data);
  });

  // CHANGE STATUT
  socket.on("changeStatut", (userId, statut) => {
    // Update the status in the global user list
    const user = users.find((user) => user.userId === userId);
    if (user) {
      user.statut = statut;
    }

    // Update the status in the room user list
    const userInRoomEntries = userInRoom.filter((user) => user.id === userId);
    userInRoomEntries.forEach((entry) => {
      entry.statut = statut;
      io.to(entry.roomId).emit("getUserInRoom", getUsersInRoom(entry.roomId));
    });

    // Send the status change to all users
    io.emit("userStatusChanged", { userId, statut });
  });

  // SEND PRIVATE MESSAGE
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

  // DELETE PRIVATE MESSAGE
  socket.on("deletePrivateMessage", (messageId) => {
    io.emit("deletePrivateMessage", messageId);
  });

  // SEND FRIEND REQUEST
  socket.on("sendFriendRequest", (data) => {
    const { id } = data;
    const receiverSocket = users.find(
      (user) => user.userId === data.receiver.id
    );
    if (receiverSocket) {
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
      friendRequests.push(request);
      io.to(receiverSocket.socketId).emit("receiveFriendRequest", request);
    }
  });

  // ACCEPT FRIEND REQUEST
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
  });

  // UPDATE RELATIONSHIP
  socket.on("updateRelationship", (data) => {
    io.emit("updatedRelationship", data);
  });

  // REFUSE FRIEND REQUEST
  socket.on("rejectFriendRequest", (senderId, receiverId, requestId) => {
    const requestIndex = friendRequests.findIndex(
      (req) => req.id === requestId
    );

    if (requestIndex !== -1) {
      friendRequests.splice(requestIndex, 1);
    }
  });

  // REMOVE FRIEND
  socket.on("removeFriend", (data) => {
    const userSocket = users.find((user) => user.userId === data.userId);
    const friendSocket = users.find((user) => user.userId === data.contactId);

    if (userSocket) {
      io.to(userSocket.socketId).emit("friendRemoved", data.contactId);
    }

    if (friendSocket) {
      io.to(friendSocket.socketId).emit("friendRemoved", data.userId);
    }

    io.emit("removedRelationship", {
      user: data.user,
      friend: data.contact,
    });
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    const user = users.find((u) => u.socketId === socket.id);
    if (user) {
      userInRoom = userInRoom.map((u) =>
        u.id === user.userId ? { ...u, statut: "offline" } : u
      );
      io.emit("userStatusChanged", { userId: user.userId, statut: "offline" });
    }
    removeUser(socket.id);

    io.emit("getUsers", users);
  });
});

const PORT = process.env.SOCKET_PORT || 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server is running at https://localhost:${PORT}`);
});
