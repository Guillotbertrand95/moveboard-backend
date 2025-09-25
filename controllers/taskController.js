// controllers/taskController.js
const Task = require("../models/Task");

// Récupérer les tâches par staff et date
exports.getTasksByStaffAndDate = async (req, res) => {
	try {
		const { staffId, date } = req.query;
		console.log("💡 GET /tasks - staffId:", staffId, "date:", date); // <-- log

		if (!staffId || !date) {
			return res
				.status(400)
				.json({ error: "staffId et date obligatoires" });
		}

		const tasks = await Task.find({
			staffId,
			date: new Date(date),
		});
		res.json(tasks);
	} catch (err) {
		console.error("🔥 ERREUR getTasksByStaffAndDate:", err); // <-- log complet
		res.status(500).json({ error: err.message });
	}
};

// Ajouter une tâche
exports.addTask = async (req, res) => {
	try {
		console.log("💡 POST /tasks - req.body:", req.body); // <-- log complet
		const { staffId, date, title, description, status } = req.body;

		if (!staffId || !date || !title) {
			return res
				.status(400)
				.json({ error: "staffId, date et title sont obligatoires" });
		}

		const newTask = await Task.create({
			staffId,
			date: new Date(date),
			title,
			description,
			status,
		});

		console.log("✅ Tâche créée:", newTask); // <-- log succès
		res.status(201).json(newTask);
	} catch (err) {
		console.error("🔥 ERREUR addTask:", err); // <-- log complet de l'erreur
		res.status(500).json({ error: err.message });
	}
};

// Mettre à jour une tâche
exports.updateTask = async (req, res) => {
	try {
		console.log("💡 PUT /tasks/:id - req.body:", req.body); // <-- log
		const updatedTask = await Task.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json(updatedTask);
	} catch (err) {
		console.error("🔥 ERREUR updateTask:", err);
		res.status(500).json({ error: err.message });
	}
};

// Supprimer une tâche
exports.deleteTask = async (req, res) => {
	try {
		console.log("💡 DELETE /tasks/:id - id:", req.params.id);
		await Task.findByIdAndDelete(req.params.id);
		res.json({ message: "Tâche supprimée" });
	} catch (err) {
		console.error("🔥 ERREUR deleteTask:", err);
		res.status(500).json({ error: err.message });
	}
};
