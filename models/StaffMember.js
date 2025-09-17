const mongoose = require("mongoose"); // 👈 Il manquait

const StaffSchema = new mongoose.Schema({
	name: { type: String, required: true },
	role: { type: String, default: "staff" },
	managerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
module.exports = mongoose.model("StaffMember", StaffSchema);
