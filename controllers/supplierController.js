const Supplier = require("../models/Supplier");

// Créer un fournisseur (Manager only)
exports.createSupplier = async (req, res) => {
	try {
		const supplier = new Supplier(req.body);
		await supplier.save();
		res.status(201).json(supplier);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la création du fournisseur",
			error,
		});
	}
};

// Récupérer tous les fournisseurs
exports.getSuppliers = async (req, res) => {
	try {
		const suppliers = await Supplier.find();
		res.json(suppliers);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la récupération des fournisseurs",
			error,
		});
	}
};

// Modifier un fournisseur
exports.updateSupplier = async (req, res) => {
	try {
		const supplier = await Supplier.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		if (!supplier)
			return res.status(404).json({ message: "Fournisseur non trouvé" });
		res.json(supplier);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la modification du fournisseur",
			error,
		});
	}
};

// Supprimer un fournisseur
exports.deleteSupplier = async (req, res) => {
	try {
		const supplier = await Supplier.findByIdAndDelete(req.params.id);
		if (!supplier)
			return res.status(404).json({ message: "Fournisseur non trouvé" });
		res.json({ message: "Fournisseur supprimé avec succès" });
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la suppression du fournisseur",
			error,
		});
	}
};
