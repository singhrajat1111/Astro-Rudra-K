console.log("👉 server.ts is running BEFORE imports");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import api from "./src/api/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", api);

app.get("/", (req, res) => {
    res.send("Astrology Engine API is running 🚀");
});

// 👇 This MUST print when server starts
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});
