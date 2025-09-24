const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
	title: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String },
	address: { type: String },
	hour: { type: String },
	content: { type: String },
});

module.exports = mongoose.model("Info", infoSchema);
