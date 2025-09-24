const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
	name: { type: String, required: true },
	firstname: { type: String, required: true },
	section: { type: String },
	role: { type: String, default: "staff" },
	telephone: { type: String },
	email: { type: String },
	managerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("StaffMember", StaffSchema);
