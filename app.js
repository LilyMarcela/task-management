const express = require("express");
const sequelize = require("./config/database");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json);

//Define routes
app.use("api/auth", authRoutes);

// Database connection

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(3000, () => console.log("server running"));
});
