const express = require("express");
const router = express.Router();
const infoController = require("../controllers/infoController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.get(
	"/",
	authMiddleware,
	roleMiddleware(["manager"]),
	infoController.getInfo
);
router.post(
	"/",
	authMiddleware,
	roleMiddleware(["manager"]),
	infoController.createInfo
);
router.put(
	"/:id",
	authMiddleware,
	roleMiddleware(["manager"]),
	infoController.updateInfo
);
router.delete(
	"/:id",
	authMiddleware,
	roleMiddleware(["manager"]),
	infoController.deleteInfo
);
module.exports = router;
