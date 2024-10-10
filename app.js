const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task");

const app = express();
app.use(express.json());

//Define routes
app.use("/api/auth", authRoutes);
app.use("/api", taskRoutes);

// Database connection

app.use((req, res, next) => {
  console.log(res);
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server" });
});

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("db connection failed", error);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running");
});

module.exports = app;
