const envFile =
	process.env.NODE_ENV === "production" ? ".env.prod" : ".env.local";
require("dotenv").config({ path: envFile });
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;

// Connexion DB
mongoose
	.connect(process.env.MONGO_URI)

	.then(() => {
		console.log("✅ MongoDB connectée");
		// On démarre le serveur seulement après la connexion DB
		app.listen(PORT, () =>
			console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`)
		);
	})
	.catch((err) => console.error("❌ Erreur DB :", err));
