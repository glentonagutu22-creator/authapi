const express = require("express");

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Student Management API",
  });
});

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use(errorHandler);

module.exports = app;