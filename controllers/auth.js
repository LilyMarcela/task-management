const bycrypt = require("bcryptjs");
const { User } = require("../models");
const { generateToken } = require("../utils/tokens");

const register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await User.create({ username, email, password, role });
    const token = generateToken(user);
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Registration failed" });
  }
};

// login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bycrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = generateToken(user);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "failed login" });
  }
};

module.exports = { register, login };
