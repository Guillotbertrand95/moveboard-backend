const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
	try {
		// On récupère le token depuis le header Authorization (Bearer token)
		const authHeader = req.headers["authorization"];
		if (!authHeader) {
			return res.status(401).json({ message: "Token manquant" });
		}

		const token = authHeader.split(" ")[1]; // format : "Bearer <token>"
		if (!token) {
			return res.status(401).json({ message: "Token manquant" });
		}

		// Vérifie le token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Attache l'utilisateur à la requête
		req.user = {
			id: decoded.id,
			role: decoded.role,
		};

		// Passe au controller suivant
		next();
	} catch (err) {
		console.error(err);
		return res.status(403).json({ message: "Token invalide" });
	}
};

module.exports = authMiddleware;
