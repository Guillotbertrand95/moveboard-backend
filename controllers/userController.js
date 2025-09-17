// controllers/userController.js
const StaffMember = require("../models/StaffMember");

exports.createStaff = async (req, res) => {
	const { name, role } = req.body;
	const managerId = req.user.id; // fourni par authMiddleware

	try {
		const staff = new StaffMember({ name, role, managerId });
		await staff.save();

		res.status(201).json({ message: "Staff créé avec succès", staff });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur serveur" });
	}
};
