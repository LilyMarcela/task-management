const { Task } = require("../models");

const createOne = async (userId, taskdata) => {
  return await Task.create({
    title: taskdata.title,
    description: taskdata.description,
    userId,
  });
};

const findByUser = async (userId) => {
  return await Task.findAll({ where: { userId } });
};

const findById = async (id, userId) => {
  return await Task.findOne({ where: { id, userId } });
};

const updateOne = async (id, taskdata) => {
  return await Task.update(id, taskdata);
};

const deleteOne = async (task) => {
  task.destroy();
};

const deleteAll = async () => {
  return await Task.destroy({ where: {} });
};

module.exports = {
  createOne,
  findById,
  findByUser,
  updateOne,
  deleteOne,
  deleteAll,
};
