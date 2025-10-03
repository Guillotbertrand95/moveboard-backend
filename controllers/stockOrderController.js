// controllers/stockOrderController.js
const Order = require("../models/StockOrder");

// créer une commande
exports.createOrder = async (req, res) => {
	try {
		const { date, supplier, items } = req.body;

		const newOrder = new Order({
			date,
			supplier,
			items,
			createdBy: req.user._id, // correspond bien au modèle
		});

		await newOrder.save();
		res.status(201).json(newOrder);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la création de la commande",
			error,
		});
	}
};

// récupérer les commandes d'une date précise
// récupérer les commandes filtrées par date et staff
exports.getOrdersByDate = async (req, res) => {
	try {
		const { staffId, date } = req.query; // <- récupère query params

		const filter = {};
		if (staffId) filter.createdBy = staffId; // ou 'staff' si ton modèle utilise un champ différent
		if (date) filter.date = new Date(date);

		const orders = await Order.find(filter)
			.populate("supplier") // récupère les infos du fournisseur
			.populate("createdBy", "username role"); // récupère seulement username et rôle du User

		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json({
			message: "Erreur lors de la récupération des commandes",
			error,
		});
	}
};
