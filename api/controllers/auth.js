const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    if (err.meta.target === "User_email_key") {
      return res.status(400).json({ error: "Email déjà utilisé" });
    }

    if (err.meta.target === "User_username_key") {
      return res.status(400).json({ error: "Nom d'utilisateur déjà utilisé" });
    }
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};

const createToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
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
    res.status(200).json(token);
  } catch (err) {
    console.error("Error logging in user:", err);
    res.status(500).json({
      error: "Une erreur est survenue... Veuillez réessayer plus tard",
    });
  }
};
