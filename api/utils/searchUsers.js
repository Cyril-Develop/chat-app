const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Search for users by username
const searchUsers = async (query) => {
  if (query.length < 3) {
    return [];
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

    return users;
  } catch (error) {
    console.error(`Error fetching users: ${error.message}`);
    throw new Error("Error fetching users");
  }
};

module.exports = {
  searchUsers,
};