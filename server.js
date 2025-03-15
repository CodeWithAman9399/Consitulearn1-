require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", require("./auth.js"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
