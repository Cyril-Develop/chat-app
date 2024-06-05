const { PrismaClient } = require("@prisma/client");
const { log } = require("console");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  try {
    const { lastname, firstname, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        lastname,
        firstname,
        email,
        password,
      },
    });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    if (err.code === "P2002") {
      return res.status(400).json({ error: "Email déjà utilisé" });
    }
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

const createToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    // token 5 minutes valid
    expiresIn: "60s",
  });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "L'utilisateur n'existe pas" });
    } else if (user.password !== password) {
      return res.status(401).json({ error: "Mot de passe incorrect" });
    }

    const token = createToken(user);
    const { lastname, firstname, id } = user;
    res.status(200).json({  token, lastname, firstname, id});
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    console.log(id);
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(204).end();
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};