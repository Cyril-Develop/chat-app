const { Server } = require("socket.io");
const io = new Server({
  cors: {
    origin: "http://localhost:5173",
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
  console.log("new connection", socket.id);

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

  // DELETE ROOM
  socket.on("deleteRoom", (id) => {
    io.emit("deleteRoom", id);
  });

  // SEND MESSAGE
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
    console.log("PrivateMessage", data);
  
    const receiverSocket = users.find((user) => user.userId === data.receiverId);
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

    console.log("acceptFriendRequest", senderName, receiverName);

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

  // REFUSE FRIEND REQUEST
  socket.on("rejectFriendRequest", (senderId, receiverId, requestId) => {
    console.log("rejectFriendRequest", friendRequests);

    console.log("rejectFriendRequest", senderId, receiverId, requestId);

    const requestIndex = friendRequests.findIndex(
      (req) => req.id === requestId
    );

    if (requestIndex !== -1) {
      friendRequests.splice(requestIndex, 1);
    }
    console.log("rejectFriendRequest", friendRequests);
  });

  // REMOVE FRIEND
  socket.on("removeFriend", (data) => {
    console.log("removeFriend", data);

    const userSocket = users.find((user) => user.userId === data.userId);
    const friendSocket = users.find((user) => user.userId === data.contactId);

    if (userSocket) {
      io.to(userSocket.socketId).emit("friendRemoved", data.contactId);
    }

    if (friendSocket) {
      io.to(friendSocket.socketId).emit("friendRemoved", data.userId);
    }
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
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

io.listen(3000);
console.log("Socket.IO server running at http://localhost:3000/");
