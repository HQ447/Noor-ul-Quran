// server.js
import express from "express";
import dotenv from "dotenv";
import authRouter from "../routes/auth/authRoutes.js";
import connectDB from "../config/connectDB.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import router from "../routes/bookRoutes.js";
import adminRouter from "../routes/adminRoutes.js";

dotenv.config();

const app = express();

// Database connection
const db_url = process.env.DB_URL;
connectDB(db_url);

// Paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/api", router);

// Test route
app.get("/", (req, res) => res.send("Server is running 🚀"));

// Start server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
