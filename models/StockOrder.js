const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
	{
		date: { type: Date, required: true },
		supplier: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Supplier",
			required: true,
		},
		items: [
			{
				productName: String,
				quantity: Number,
				price: Number,
			},
		],
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("StockOrder", OrderSchema);
