const { Server } = require("socket.io");
const userHandlers = require("./handlers/userHandlers");
const authenticateSocket = require("./middlewares/authenticate-socket");

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineUsers = [];
let usersInRooms = {}; // Utilisation d'un objet pour stocker les utilisateurs par salon

io.use(authenticateSocket);

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  // Ajouter un nouvel utilisateur
  socket.on("addNewUser", (userId) => {
    if (!onlineUsers.some((user) => user.userId === userId)) {
      onlineUsers.push({ userId, socketId: socket.id });
      console.log("onlineUsers", onlineUsers);
      io.emit("getOnlineUsers", onlineUsers);
    }
  });

  // Rejoindre un salon
  socket.on("joinRoom", (roomId) => {
    if (socket.user) {
      socket.join(roomId);

      // Mettre à jour usersInRooms
      if (!usersInRooms[roomId]) {
        usersInRooms[roomId] = [];
      }

      // Vérifier si l'utilisateur est déjà dans le salon
      const existingUser = usersInRooms[roomId].find(user => user.userId === socket.user.id);
      console.log("existingUser", existingUser);
      console.log("usersInRooms", usersInRooms);
      if (!existingUser) {
        usersInRooms[roomId].push({
          userId: socket.user.id,
          socketId: socket.id
        });
      }

      io.to(roomId).emit("userJoined", { userId: socket.user.id, roomId });
      console.log(`User ${socket.user.id} joined room ${roomId}`);
      console.log("Users in room:", usersInRooms[roomId]);
    }
  });

  // Quitter un salon
  socket.on("leaveRoom", (roomId) => {
    if (socket.user) {
      socket.leave(roomId);

      // Mettre à jour usersInRooms
      if (usersInRooms[roomId]) {
        usersInRooms[roomId] = usersInRooms[roomId].filter(user => user.userId !== socket.user.id);
      }

      io.to(roomId).emit("userLeft", { userId: socket.user.id, roomId });
      console.log(`User ${socket.user.id} left room ${roomId}`);
      console.log("Users in room:", usersInRooms[roomId]);
    }
  });

  // Gérer la déconnexion
  socket.on("disconnect", () => {
    if (socket.user) {
      onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
      io.emit("getOnlineUsers", onlineUsers);

      // Supprimer l'utilisateur de tous les salons où il était
      for (const roomId in usersInRooms) {
        usersInRooms[roomId] = usersInRooms[roomId].filter(user => user.socketId !== socket.id);
        if (usersInRooms[roomId].length === 0) {
          delete usersInRooms[roomId];
        } else {
          io.to(roomId).emit("userLeft", { userId: socket.user.id, roomId });
        }
      }

      console.log(`User ${socket.user.id} disconnected`);
    }
  });

  userHandlers(socket);
});

io.listen(3000);
console.log("Socket.IO server running at http://localhost:3000/");
