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

exports.updateUser = async (req, res) => {
  try {
    const id = req.auth.userId;
    const { username, bio } = req.body;
    
    let updatedFields = {};
    if (username !== undefined) {
      updatedFields.username = username;
    }
    if (bio !== undefined) {
      updatedFields.bio = bio;
    }

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: updatedFields,
      select: {
        id: true,
        username: true,
        bio: true
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};


exports.updateEmail = async (req, res) => {
  try {
    const id = req.auth.userId;
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "L'email est requis.",
      });
    }

    const user = await prisma.user.update({
      where: { id },
      data: { email },
      select: {
        id: true,
        email: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.error("Error updating email:", err);
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
