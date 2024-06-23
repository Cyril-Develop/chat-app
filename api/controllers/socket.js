const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("search", async (query) => {
      console.log(`Received search query: ${query}`);

      if (query.length < 3) {
        socket.emit("searchResults", []);
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
        socket.emit("searchResults", users);
      } catch (error) {
        console.error(`Error fetching users: ${error.message}`);
        socket.emit("error", "Error fetching users");
      }
    });

    // socket.on("createRoom", async ({ name, isPrivate, password }) => {
    //   if (!name) {
    //     socket.emit("error", "Le nom du salon est requis");
    //     return;
    //   }

    //   try {
    //     const chatRoom = await prisma.chatRoom.create({
    //       data: {
    //         name,
    //         isPrivate: isPrivate || false,
    //         password: isPrivate ? password : null,
    //       },
    //     });
    //     socket.emit("roomCreated", chatRoom);
    //   } catch (error) {
    //     socket.emit("error", "Error creating chat room");
    //   }
    // });

    // socket.on("joinRoom", async ({ name, password }) => {
    //   try {
    //     const chatRoom = await prisma.chatRoom.findUnique({
    //       where: { name: name },
    //     });

    //     if (!chatRoom) {
    //       socket.emit("error", "Le salon de discussion n'existe pas");
    //       return;
    //     }

    //     if (chatRoom.isPrivate && chatRoom.password !== password) {
    //       socket.emit("error", "Incorrect password");
    //       return;
    //     }

    //     socket.join(name);
    //     socket.emit("joinedRoom", chatRoom);
    //   } catch (error) {
    //     socket.emit("error", "Error joining chat room");
    //   }
    // });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
