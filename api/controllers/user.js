const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

exports.getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.auth.userId,
      },
      select: {
        id: true,
        email: true,
        username: true,
        bio: true,
        profileImage: true,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.auth.userId;
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Compte supprimé avec succès" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};
