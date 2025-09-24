const Info = require("../models/Info.js");

exports.getInfo = async (req, res) => {
	try {
		const allInfo = await Info.find();
		res.status(200).json(allInfo);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la récupération des informations",
		});
	}
};

exports.createInfo = async (req, res) => {
	const { title, email, phone, address, hour, content } = req.body;
	try {
		const newInfo = new Info({
			title,
			email,
			phone,
			address,
			hour,
			content,
		});
		await newInfo.save();
		res.status(201).json(newInfo);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la création des informations",
		});
	}
};

exports.updateInfo = async (req, res) => {
	try {
		const updated = await Info.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!updated) {
			return res.status(404).json({ message: "Information non trouvée" });
		}
		res.status(200).json(updated);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la mise à jour des informations",
		});
	}
};

exports.deleteInfo = async (req, res) => {
	try {
		const deleted = await Info.findByIdAndDelete(req.params.id);
		if (!deleted) {
			return res.status(404).json({ message: "Information non trouvée" });
		}
		res.status(200).json({ message: "Information supprimée avec succès" });
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la suppression des informations",
		});
	}
};
