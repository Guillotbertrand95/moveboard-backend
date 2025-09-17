const express = require("express");
const router = express.Router();
const { createTask, getTaskByDate } = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware.js");

// staff crée une tâche
router.post(
	"/",
	authMiddleware,
	roleMiddleware(["staff", "manager"]),
	createTask
);
// récupérer les tâches par date
router.get(
	"/",
	authMiddleware,
	roleMiddleware(["staff", "manager"]),
	getTaskByDate
);

module.exports = router;
