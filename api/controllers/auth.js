const { PrismaClient } = require("@prisma/client");

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
    res
      .status(500)
      .json({
        error: "Une erreur est survenue... Veuillez réessayer plus tard",
      });
  }
};
