const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");

module.exports = async (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).json({
        error: "Session expirée, veuillez vous reconnecter.",
        errorCode: "TOKEN_EXPIRED",
      });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { id: userId, role } = decodedToken;

    // Check if user still exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    });

    if (!user) {
      return res.status(401).json({
        error: "Votre compte a été supprimé par un administrateur.",
        errorCode: "ACCOUNT_DELETED",
      });
    }

    req.userId = userId;
    req.role = role;

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: "Session expirée, veuillez vous reconnecter.",
        errorCode: "TOKEN_EXPIRED",
      });
    }
    res.status(401).json({ error: "Action non autorisée !" });
  }
};
