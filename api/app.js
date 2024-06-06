const express  = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());

// Importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

// Using routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

module.exports = app;