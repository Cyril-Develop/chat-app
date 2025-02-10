const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
app.use(cors());
app.use(express.json());

app.use(morgan("dev"));

// Serving images statically
app.use("/chateo/api/images", express.static(path.join(__dirname, "images")));

// Importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const chatRoutes = require('./routes/chat');
const messageRoomRoutes = require('./routes/message-room');
const messagePrivateRoutes = require('./routes/message-private');

// Using routes
app.use("/chateo/api/auth", authRoutes);
app.use("/chateo/api/user", userRoutes);
app.use('/chateo/api/chat', chatRoutes);
app.use('/chateo/api/message-room', messageRoomRoutes);
app.use('/chateo/api/message-private', messagePrivateRoutes);

module.exports = app;