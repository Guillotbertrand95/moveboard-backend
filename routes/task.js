const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

// Récupérer les tâches
router.get("/", authMiddleware, taskController.getTasksByStaffAndDate);

// Ajouter une tâche
router.post("/", authMiddleware, taskController.addTask);

// Mettre à jour une tâche
router.put("/:id", authMiddleware, taskController.updateTask);

// Supprimer une tâche
router.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = router;
