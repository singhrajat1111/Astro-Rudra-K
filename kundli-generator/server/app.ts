import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import api from "./api/index.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Astrology Engine API is running 🚀");
});

export default app;
