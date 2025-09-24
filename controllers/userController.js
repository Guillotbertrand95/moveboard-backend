const StaffMember = require("../models/StaffMember");

// Créer un collaborateur
exports.createStaff = async (req, res) => {
	const { name, firstname, section, role, telephone, email } = req.body;
	const managerId = req.user.id;

	try {
		const staff = new StaffMember({
			name,
			firstname,
			section,
			role,
			telephone,
			email,
			managerId,
		});
		await staff.save();
		res.status(201).json({ message: "Staff créé avec succès", staff });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur serveur", error });
	}
};

// Récupérer tous les collaborateurs
exports.getStaff = async (req, res) => {
	try {
		const staffList = await StaffMember.find({ managerId: req.user.id });
		res.status(200).json(staffList);
	} catch (error) {
		res.status(500).json({ message: "Erreur serveur", error });
	}
};

// Modifier un collaborateur
exports.updateStaff = async (req, res) => {
	try {
		const updatedStaff = await StaffMember.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true } // pour renvoyer le document mis à jour
		);
		if (!updatedStaff)
			return res
				.status(404)
				.json({ message: "Collaborateur non trouvé" });
		res.json(updatedStaff);
	} catch (error) {
		res.status(500).json({ message: "Erreur serveur", error });
	}
};

// Supprimer un collaborateur
exports.deleteStaff = async (req, res) => {
	try {
		const deletedStaff = await StaffMember.findByIdAndDelete(req.params.id);
		if (!deletedStaff)
			return res
				.status(404)
				.json({ message: "Collaborateur non trouvé" });
		res.json({ message: "Collaborateur supprimé avec succès" });
	} catch (error) {
		res.status(500).json({ message: "Erreur serveur", error });
	}
};
