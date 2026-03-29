// importamos el modelo...
const Task = require("../models/Task");

const taskController = {
  createTask: async (req, res) => {
    try {
      if(!req.body.title || req.body.title == "") {
        res.status(400).json({error: "Title not provided"})
      }
      const task = await Task.create(req.body);
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  },
  getAllTasks: async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  },
  getTaskById: async (req, res) => {
    try {
      const _id = req.params._id;
      const task = await Task.findById(_id);
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  },
  markAsCompleted: async (req, res) => {
    try {
      const _id = req.params._id;
      const task = await Task.findById(_id);
      task.completed = true;
      await task.save();
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  },
  changeTitle: async (req, res) => {
    try {
      const _id = req.params._id;
      const task = await Task.findById(_id);
      const newTitle = req.body.title;
      task.title = newTitle;
      await task.save();
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  },
  deleteTask: async (req, res) => {
    try {
      const _id = req.params._id;
      const task = await Task.findByIdAndDelete(_id);
      res.json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json("Error");
    }
  }
};

module.exports = taskController;