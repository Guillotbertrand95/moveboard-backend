const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Routes
const authRoutes = require("./routes/auth");
const staffRoutes = require("./routes/staff");
const supplierRoutes = require("./routes/supplier");
const stockRoutes = require("./routes/stock");
const infoRoutes = require("./routes/Info");
const taskRoutes = require("./routes/task");
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
app.use("/api/supplier", supplierRoutes);
app.use("/api/info", infoRoutes);
app.use("/api/stock", stockRoutes); // ← ici, après les middlewares
app.use("/api/tasks", taskRoutes); // ← ici, après les middlewares
module.exports = app;
