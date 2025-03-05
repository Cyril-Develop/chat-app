const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Token manquant" });
    }

    // Check if token is valid
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;
    const role = decodedToken.role;

    // Check if user still exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(401).json({ error: "Votre compte a été supprimé" });
    }

    // Check if user role is admin
    req.auth = { userId, role };

    next();
  } catch (error) {
    if (error.message === "jwt expired") {
      return res.status(401).json({ error: "Session expirée, veuillez vous reconnecter" });
    }
    res.status(401).json({ error: "Action non autorisée !" });
  }
};
