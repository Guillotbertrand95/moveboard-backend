const express = require("express");
const router = express.Router();
const {
	createOrder,
	getOrdersByDate,
} = require("../controllers/stockOrderController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

// Créer une commande de stock
router.post(
	"/",
	authMiddleware,
	roleMiddleware(["staff", "manager"]),
	createOrder
);

router.get(
	"/",
	authMiddleware,
	roleMiddleware(["staff", "manager"]),
	getOrdersByDate
);

module.exports = router;
