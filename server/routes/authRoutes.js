import express from "express";
import {
    loginWithOtp,
    logoutUser
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", loginWithOtp);
router.post("/logout", logoutUser);

export default router;
