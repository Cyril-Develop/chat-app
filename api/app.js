const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");

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
const chatRoutes = require('./routes/chat');
const messageRoomRoutes = require('./routes/message-room');
const messagePrivateRoutes = require('./routes/message-private');
const emailRoutes = require("./routes/email");

// Using routes
app.use("/chateo/api/auth", authRoutes);
app.use("/chateo/api/user", userRoutes);
app.use('/chateo/api/chat', chatRoutes);
app.use('/chateo/api/message-room', messageRoomRoutes);
app.use('/chateo/api/message-private', messagePrivateRoutes);
app.use("/chateo/api/email", emailRoutes);

module.exports = app;
