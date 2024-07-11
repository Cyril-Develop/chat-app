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

const addUserInRoom = (id, roomId, username, profileImage) => {
  if (!userInRoom.some((user) => user.id === id && user.roomId === roomId)) {
    userInRoom.push({ id, username, profileImage, roomId });
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

io.on("connection", (socket) => {
  // when connect
  console.log("new connection", socket.id);

  // Take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  // Create room
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

  // join room
  socket.on("joinRoom", (roomId, id, username, profileImage) => {
    socket.join(roomId);
    addUserInRoom(id, roomId, username, profileImage);

    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  // leave room
  socket.on("leaveRoom", (roomId, id) => {
    removeUserInRoom(id, roomId);
    socket.leave(roomId);
    const usersInThisRoom = getUsersInRoom(roomId);
    io.to(roomId).emit("getUserInRoom", usersInThisRoom);
  });

  // send test message
  socket.on(
    "sendMessage",
    ({ userId, username, profileImage, roomId, message, id, createdAt }) => {
      io.to(roomId).emit("getMessage", {
        userId,
        username,
        profileImage,
        message,
        id,
        createdAt,
      });
    }
  );

  // delete message
  socket.on("messageDeleted", (messageId, roomId) => {
    console.log("messageId", messageId, "roomId", roomId);
    io.to(roomId).emit("messageDeleted", messageId);
  });

  // add friend
  socket.on("addFriend", (userId, friendId) => {
    const friendSocketId = users.find((user) => user.userId === friendId);
    if (friendSocketId) {
      io.to(friendSocketId.socketId).emit("addFriend", userId);
    }
  });

  // remove friend
  socket.on("removeFriend", (userId, friendId) => {
    const friendSocketId = users.find((user) => user.userId === friendId);
    if (friendSocketId) {
      io.to(friendSocketId.socketId).emit("removeFriend", userId);
    }
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

io.listen(3000);
console.log("Socket.IO server running at http://localhost:3000/");
