const { Server } = require("socket.io");
const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let users = [];
let userInRoom = [];

const addUser = (userId, socketId) => {
  if (!users.some((user) => user.userId === userId)) {
    users.push({ userId, socketId });
  }
};

const addUserInRoom = (id, roomId, username, profileImage, statut) => {
  if (!userInRoom.some((user) => user.id === id && user.roomId === roomId)) {
    userInRoom.push({ id, username, profileImage, roomId, statut });
  }
};

const getUsersInRoom = (roomId) => {
  return userInRoom.filter(
    (user) => user.roomId === roomId && user.statut === "online"
  );
};

const removeUserInRoom = (id, roomId) => {
  userInRoom = userInRoom.filter(
    (user) => user.id !== id || user.roomId !== roomId
  );
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

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

  socket.on("joinRoom", (roomId, id, username, profileImage, status) => {
    socket.join(roomId);
    addUserInRoom(id, roomId, username, profileImage, status);

    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  socket.on("changeStatut", (userId, statut) => {
    const userInRoomEntry = userInRoom.find((u) => u.id === userId);

    if (userInRoomEntry) {
      userInRoomEntry.statut = statut;
      io.to(userInRoomEntry.roomId).emit(
        "getUserInRoom",
        getUsersInRoom(userInRoomEntry.roomId)
      );
    }
  });

  socket.on("leaveRoom", (roomId, id) => {
    removeUserInRoom(id, roomId);
    socket.leave(roomId);
    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

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

  socket.on("messageDeleted", (messageId, roomId) => {
    io.to(roomId).emit("messageDeleted", messageId);
  });

  socket.on('addFriend', (userId, friendId, friendName) => {
    console.log(userId, friendId, friendName);

    const userSocket = users.find((user) => user.userId === userId);
    const friendSocket = users.find((user) => user.userId === friendId);

    const friend = { id: friendId, username: friendName };

    console.log("userSocket"+ userSocket, "friendSocket"+friendSocket);

    if (userSocket) {
      io.to(userSocket.socketId).emit('getNewFriend', friend);
    }

    if (friendSocket) {
      io.to(friendSocket.socketId).emit('getNewFriend', { id: userId, username: friendName });
    }
  });

  socket.on("removeFriend", (friendId) => {
    io.emit("removeFriend", friendId);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

io.listen(3000);
console.log("Socket.IO server running at http://localhost:3000/");
