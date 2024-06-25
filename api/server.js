const app = require("./app");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const http = require("http");
require("dotenv").config();

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const io = require("socket.io")(server, {
  cors: {
    origin: "*", // Utiliser "*" est acceptable pour le développement, mais en production, spécifiez les origines autorisées
    methods: ["GET", "POST"],
  },
});

// Import the chat controller and pass io to it
const chatController = require("./controllers/socket");
chatController(io);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
