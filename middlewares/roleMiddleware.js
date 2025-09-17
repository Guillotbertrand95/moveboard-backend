// roleMiddleware.js

module.exports = (allowedRoles) => {
	return (req, res, next) => {
		// Vérifie si l'utilisateur est connecté
		if (!req.user) {
			return res
				.status(401)
				.json({ message: "Utilisateur non authentifié" });
		}

		// Vérifie si le rôle est autorisé
		if (!allowedRoles.includes(req.user.role)) {
			return res.status(403).json({ message: "Accès refusé" });
		}

		// Tout est OK → passe au controller
		next();
	};
};
