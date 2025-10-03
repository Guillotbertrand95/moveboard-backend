const Order = require("../models/StockOrder");

// ------------------- CREATE -------------------
exports.createOrder = async (req, res) => {
	try {
		const { date, title, content, selectedStaffId } = req.body;

		if (!selectedStaffId || !title || !date) {
			return res.status(400).json({
				message: "selectedStaffId, title et date sont requis",
			});
		}

		const newOrder = new Order({
			date: new Date(date),
			title,
			content,
			createdBy: selectedStaffId, // le collaborateur choisi dans le front
		});

		await newOrder.save();
		res.status(201).json(newOrder);
	} catch (error) {
		console.error("Erreur création commande :", error);
		res.status(500).json({
			message: "Erreur lors de la création de la commande",
			error,
		});
	}
};

// ------------------- READ -------------------
exports.getOrdersByDate = async (req, res) => {
	try {
		const { staffId, date } = req.query;

		const filter = {};
		if (staffId) filter.createdBy = staffId; // filtrer par collaborateur choisi

		if (date) {
			const start = new Date(date);
			start.setHours(0, 0, 0, 0);
			const end = new Date(date);
			end.setHours(23, 59, 59, 999);
			filter.date = { $gte: start, $lte: end };
		}

		console.log("Filtre MongoDB:", filter);

		const orders = await Order.find(filter).populate(
			"createdBy",
			"username firstname role"
		); // infos collaborateur

		res.status(200).json(orders);
	} catch (error) {
		console.error("Erreur récupération commandes :", error);
		res.status(500).json({
			message: "Erreur lors de la récupération des commandes",
			error,
		});
	}
};
