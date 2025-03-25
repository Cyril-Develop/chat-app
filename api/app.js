const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

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
app.use("/images", express.static(path.join(__dirname, "/images")));

// Importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const chatRoutes = require("./routes/chat");
const messageRoomRoutes = require("./routes/message-room");
const messagePrivateRoutes = require("./routes/message-private");
const emailRoutes = require("./routes/email");

// Using routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message-room", messageRoomRoutes);
app.use("/message-private", messagePrivateRoutes);
app.use("/email", emailRoutes);

module.exports = app;
