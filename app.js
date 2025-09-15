const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");

const app = express();

// Middlewares globaux
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Exemple route simple
app.get("/", (req, res) => {
	res.send("Hello from backend!");
});
// Routes
app.use("/api/auth", authRoutes);
module.exports = app;
