const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware.js");
const userController = require("../controllers/userController");

// Seul le manager peut créer un staff
router.post(
	"/",
	authMiddleware,
	roleMiddleware(["manager"]),
	userController.createStaff
);

// Tu peux ajouter GET, PUT, DELETE ici plus tard
module.exports = router;
