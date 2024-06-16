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

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('search', async (query) => {
    console.log(`Received search query: ${query}`);

    if (query.length < 3) {
      socket.emit('searchResults', []);
      return;
    }

    try {
      const users = await prisma.user.findMany({
        where: {
          OR: [
            { username: { contains: query.toLowerCase() } }
          ],
        },
      });

      console.log(`Found users: ${JSON.stringify(users)}`);
      socket.emit('searchResults', users);
    } catch (error) {
      console.error(`Error fetching users: ${error.message}`);
      socket.emit('error', 'Error fetching users');
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
