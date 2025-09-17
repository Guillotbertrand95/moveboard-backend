const Task = require("../models/Task");

// création d'une action
exports.createTask = async (req, res) => {
	const { staffId, date, title, description } = req.body;

	try {
		const task = new Task({ staffId, date, title, description });
		await task.save();

		res.status(201).json({ message: "Tâche créée avec succès", task });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur serveur" });
	}
};
// récupérer toutes les actions pour une date
exports.getTaskByDate = async (req, res) => {
	const { date } = req.query;
	try {
		const tasks = await Task.find({ date: new Date(date) });
		res.status(200).json(tasks);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur serveur" });
	}
};
