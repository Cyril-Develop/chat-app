const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

// Serving images statically
app.use("/images", express.static(path.join(__dirname, "images")));

// Importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const chatRoutes = require('./routes/chat');
const messageRoomRoutes = require('./routes/message-room');
const messagePrivateRoutes = require('./routes/message-private');

// Using routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use('/chat', chatRoutes);
app.use('/message-room', messageRoomRoutes);
app.use('/message-private', messagePrivateRoutes);

module.exports = app;