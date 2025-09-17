const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
router.post(
	"/",
	authMiddleware,
	roleMiddleware(["manager"]),
	supplierController.createSupplier
);
router.get(
	"/",
	authMiddleware,
	roleMiddleware(["manager"]),
	supplierController.getSuppliers
);
router.put(
	"/:id",
	authMiddleware,
	roleMiddleware(["manager"]),
	supplierController.updateSupplier
);
router.delete(
	"/:id",
	authMiddleware,
	roleMiddleware(["manager"]),
	supplierController.deleteSupplier
);

module.exports = router;
