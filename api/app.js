const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const cron = require("node-cron");
const autoUnblockUsers = require("./service/auto-unblock-users");

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(morgan("dev"));

// Preventing DOS attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

//app.use(limiter);

// Serving images statically
app.use("/chateo/api/images", express.static(path.join(__dirname, "images")));

// Importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const chatRoutes = require('./routes/chat');
const emailRoutes = require("./routes/email");

// Using routes
app.use("/chateo/api/auth", authRoutes);
app.use("/chateo/api/user", userRoutes);
app.use("/chateo/api/admin", adminRoutes);
app.use('/chateo/api/chat', chatRoutes);
app.use("/chateo/api/email", emailRoutes);

// CRON job to automatically unblock users
cron.schedule("0 * * * *", async () => {
  console.log("[CRON] Vérification des comptes bloqués...");
  try {
    await autoUnblockUsers();
  } catch (err) {
    console.error("[CRON] Erreur lors de l'exécution autoUnblockUsers:", err);
  }
});

module.exports = app;
