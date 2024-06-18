const { PrismaClient } = require("@prisma/client");
const moment = require("moment");
require("moment/locale/fr");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        createdAt: true,
        username: true,
        bio: true,
        profileImage: true,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    console.error("Error getting users:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.auth.userId,
      },
      select: {
        id: true,
        createdAt: true,
        email: true,
        username: true,
        bio: true,
        profileImage: true,
        notification: true,
        chatRooms: {
          select: {
            id: true,
            name: true,
            isPrivate: true,
          },
        },
      },
    });
    if (user) {
      user.createdAt = moment(user.createdAt)
        .locale("fr")
        .format("DD MMMM YYYY");
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

// Update user's username, bio and profile image
exports.updateUser = async (req, res) => {
  try {
    const id = req.auth.userId;
    const { username, bio } = req.body;

    let updatedFields = {};
    if (username) {
      updatedFields.username = username;
    }
    if (bio) {
      updatedFields.bio = bio;
    }
    // Get image profile
    const currentUser = await prisma.user.findUnique({
      where: { id },
      select: { profileImage: true },
    });

    if (req.file) {
      if (currentUser.profileImage) {
        const oldImagePath = path.join(
          "images/profile",
          currentUser.profileImage
        );
        console.log("oldImagePath", oldImagePath);
        if (currentUser.profileImage !== "default.jpg") {
          fs.unlink(oldImagePath, (err) => {
            if (err) console.error("Error deleting old image:", err);
          });
        }
      }
      updatedFields.profileImage = req.file.filename;
    }

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: updatedFields,
      select: {
        id: true,
        username: true,
        bio: true,
        profileImage: true,
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

exports.updateAccount = async (req, res) => {
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

exports.updateNotification = async (req, res) => {
  try {
    const id = req.auth.userId;
    const { notification } = req.body;

    const user = await prisma.user.update({
      where: { id },
      data: { notification },
      select: {
        id: true,
        notification: true,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.error("Error updating notification:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};
