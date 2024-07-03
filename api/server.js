// api/server.js
const app = require("./app");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:5173", // Assurez-vous que c'est la même que dans sockets/index.js
    methods: ["GET", "POST"],
  },
});

const userHandlers = require("../socket/handlers/userHandlers");
io.on("connection", (socket) => {
  userHandlers(socket); // Utilisation des handlers pour les événements spécifiques
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
