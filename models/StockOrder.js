const mongoose = require("mongoose");

const StockOrderSchema = new mongoose.Schema(
	{
		date: { type: Date, required: true },
		title: { type: String, required: true },
		content: { type: String },
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		status: { type: String, default: "Disponible" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("StockOrder", StockOrderSchema);
