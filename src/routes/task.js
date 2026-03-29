const express = require("express");
const router = express.Router();
const taskController = require("../controllers/TaskController")

router.post("/create", taskController.createTask)
router.get("/", taskController.getAllTasks);

router.get("/id/:_id", taskController.getTaskById);

router.put("/markAsCompleted/:_id", taskController.markAsCompleted);

router.put("/id/:_id", taskController.changeTitle);
router.delete("/id/:_id", taskController.deleteTask);

module.exports = router;