const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.id;
    req.auth = { userId };
    next();
  } catch (error) {
    if (error == "TokenExpiredError: jwt expired") {
      return res.status(401).json({ error: "Token expiré !" });
    }
    res.status(401).json({ error: "Action non autorisée !" });
  }
};
