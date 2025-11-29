import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import morgan from "morgan";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173", // or your React frontend port
    credentials: true,               // ✅ allow cookies
  })
);

// Routes
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});

// DB + Server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
