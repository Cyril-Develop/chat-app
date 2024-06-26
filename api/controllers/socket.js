const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("search", async (query) => {
      console.log(`Received search query: ${query}`);

      if (query.length < 3) {
        socket.emit("searchUsers", []);
        return;
      }

      try {
        const users = await prisma.user.findMany({
          where: {
            OR: [{ username: { contains: query.toLowerCase() } }],
          },
          select: {
            id: true,
            username: true,
            bio: true,
            profileImage: true,
            friends: {
              select: {
                friend: {
                  select: {
                    id: true,
                    username: true,
                    profileImage: true,
                  },
                },
              },
            },
          },
        });

        console.log(`Found users: ${JSON.stringify(users)}`);
        socket.emit("searchUsers", users);
      } catch (error) {
        console.error(`Error fetching users: ${error.message}`);
        socket.emit("error", "Error fetching users");
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
