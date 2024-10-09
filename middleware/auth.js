const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { verifyToken } = require("../utils/tokens");

// Middleware to protect routes

const authMiddleware = async (res, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer", "");
    if (!token) {
      return res.status(401).json({ error: "Auth token missing" });
    }

    const decode = verifyToken(token);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "invalid token" });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authMiddleware;
