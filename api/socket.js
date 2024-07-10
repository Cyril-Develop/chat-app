const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

let onlineUsers = [];

const socketHandlers = (io, socket) => {
  console.log("new connection", socket.id);

  // Ajouter un nouvel utilisateur
  socket.on("addNewUser", async (userId) => {
    await getOnlineUserInfos(userId, io, socket);
  });

  // Rejoindre un salon de discussion
  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User with socketId ${socket.id} joined room ${roomId}`);
  });

  // Quitter un salon de discussion
  socket.on("leaveRoom", (roomId) => {
    socket.leave(roomId);
    console.log(`User with socketId ${socket.id} left room ${roomId}`);
  });

  // Envoyer un message
  socket.on("sendMessage", (data) => {
    console.log("Sending message:", data); // Log de dépannage
    socket.to(data.roomId).emit("receiveMessage", data);
  });

  // Déconnexion
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });
};

const getOnlineUserInfos = async (userId, io, socket) => {
  try {
    // Récupérer les informations utilisateur depuis la base de données
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        profileImage: true,
      },
    });

    if (user && !onlineUsers.some((u) => u.userId === userId)) {
      onlineUsers.push({ ...user, socketId: socket.id });
      console.log("onlineUsers", onlineUsers);
      io.emit("getOnlineUsers", onlineUsers);
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
  }
};

module.exports = socketHandlers;
