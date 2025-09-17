// Exemple pour une tâche
const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	staffId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "StaffMember",
		required: true,
	},
	date: { type: Date, required: true },
	title: { type: String, required: true },
	description: { type: String },
	status: { type: String, enum: ["en cours", "fait"], default: "en cours" },
	timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", TaskSchema);
