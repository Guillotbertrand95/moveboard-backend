// models/Supplier.js
const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String },
	phone: { type: String },
	managerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // pour savoir qui a ajouté
});

module.exports = mongoose.model("Supplier", SupplierSchema);
