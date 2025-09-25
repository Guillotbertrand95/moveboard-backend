const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const userController = require("../controllers/userController");

// ------------------- CREATE -------------------
// Seul le manager peut créer un collaborateur
router.post(
	"/",
	authMiddleware,
	roleMiddleware(["manager"]),
	userController.createStaff
);

// ------------------- READ -------------------
// Récupérer tous les collaborateurs
router.get(
	"/",
	authMiddleware,
	roleMiddleware(["manager"]),
	userController.getStaff
);

// ------------------- UPDATE -------------------
// Modifier un collaborateur existant
router.put(
	"/:id",
	authMiddleware,
	roleMiddleware(["manager"]),
	userController.updateStaff
);

// ------------------- DELETE -------------------
// Supprimer un collaborateur
router.delete(
	"/:id",
	authMiddleware,
	roleMiddleware(["manager"]),
	userController.deleteStaff
);

module.exports = router;
