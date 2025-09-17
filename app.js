const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Routes
const authRoutes = require("./routes/auth");
const staffRoutes = require("./routes/staff");
const supplierRoutes = require("./routes/supplier");
const stockRoutes = require("./routes/stock");

const app = express();

// Middlewares globaux
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Route test
app.get("/", (req, res) => {
	res.send("Hello from backend!");
});

// Routes montées
app.use("/api/auth", authRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/stock", stockRoutes); // ← ici, après les middlewares

module.exports = app;
