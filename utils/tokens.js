const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "somerthing something";

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
};

// verify token

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = { generateToken, verifyToken };
