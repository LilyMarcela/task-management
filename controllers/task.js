const taskService = require("../services/taskService");

// create
const createOne = async (req, res) => {
  try {
    const task = await taskService.createOne(req.user.id, req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating" });
  }
};

const getMany = async (req, res) => {
  try {
    const tasks = await taskService.findByUser(req.user.id);
    res.status(201).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error finding" });
  }
};

const updateOne = async (req, res) => {
  try {
    const task = await taskService.findById(req.params.id, req.user.id);
    if (!task) {
      return res.status(404).json({ error: "Not found" });
    }
    const updatedTask = await taskService.updateOne(task.id, req.body);
    res.status(201).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Error updating" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const task = await taskService.findById(req.params.id, req.user.id);
    if (!task) {
      return res.status(404).json({ error: "Not found" });
    }
    await taskService.deleteOne(task);
    res.status(201).json("task deleted");
  } catch (error) {
    res.status(500).json({ error: "Error updating" });
  }
};

const deleteAll = async (req, res) => {
  try {
    await taskService.deleteAll();
  } catch (error) {}
};

module.exports = {
  createOne,
  updateOne,
  getMany,
  deleteOne,
  deleteAll,
};
