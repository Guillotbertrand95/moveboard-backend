const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Routes
const authRoutes = require("./routes/auth");
const staffRoutes = require("./routes/staff"); // à créer plus tard
// const menuRoutes = require("./routes/menu"); // futur
// const orderRoutes = require("./routes/orders"); // futur
const supplierRoutes = require("./routes/supplier");
const app = express();

// Middlewares globaux
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Route test
app.get("/", (req, res) => {
	res.send("Hello from backend!");
});

// Routes
app.use("/api/auth", authRoutes); // /api/auth/register, /api/auth/login
app.use("/api/staff", staffRoutes); // /api/staff → protégé par middleware
// app.use("/api/menu", menuRoutes); // futur
// app.use("/api/orders", orderRoutes); // futur
app.use("/api/suppliers", supplierRoutes); // /api/suppliers
module.exports = app;
