const express = require("express");
const {
  createOne,
  getMany,
  updateOne,
  deleteOne,
} = require("../controllers/task");

const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");

const router = express.Router();

// routes

router.post("/tasks", authMiddleware, createOne);
router.get("/tasks", authMiddleware, getMany);
router.patch("/tasks/:id", authMiddleware, updateOne);
router.delete("tasks/:id", authMiddleware, deleteOne);

// only admin can do this
router.delete(
  "/admin/tasks",
  authMiddleware,
  roleMiddleware("admin", deleteOne)
);
