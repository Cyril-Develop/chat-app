const express  = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Importing routes
const authRoutes = require("./routes/auth");

// Using routes
app.use("/auth", authRoutes);

module.exports = app;