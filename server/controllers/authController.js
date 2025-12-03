import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import crypto from "crypto";
import { sendOtpEmail } from "../utils/sendEmail.js";

export const loginWithOtp = async (req, res) => {
    try {
        const { step, email, otp } = req.body;

        if (!step || !email) {
            return res.status(400).json({ message: "Step and email required" });
        }

        // ---------------------------------------------
        // STEP 1: REQUEST OTP (REGISTER IF NOT EXISTS)
        // ---------------------------------------------
        if (step === "request") {
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: "Invalid email format" });
            }

            // Check user
            let user = await User.findOne({ email });

            // If not exists → register user automatically
            if (!user) {
                user = await User.create({
                    email : email
                });
            }

            // Generate OTP
            const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
            const hashedOtp = crypto.createHash("sha256").update(newOtp).digest("hex");

            // Save OTP
            user.otp = hashedOtp;
            user.otpExpire = Date.now() + 5 * 60 * 1000; // 5 min
            await user.save();

            const emailresp = await sendOtpEmail("Login", email, newOtp, 5);
            if (!emailresp) {
                return res.status(500).json({ message: "Failed to send OTP email" });
            }
            return res.json({
                message: "OTP sent successfully",
                email: email,
                userExists: !user,
            });
        }

        // ---------------------------------------------
        // STEP 2: VERIFY OTP & LOGIN
        // ---------------------------------------------
        if (step === "verify") {
            if (!otp) {
                return res.status(400).json({ message: "OTP required" });
            }

            const user = await User.findOne({ email });

            if (!user || !user.otp) {
                return res.status(400).json({ message: "OTP not generated for this email" });
            }

            const hashedOtp = crypto.createHash("sha256").update(otp).digest("hex");

            if (hashedOtp !== user.otp || user.otpExpire < Date.now()) {
                return res.status(401).json({ message: "Invalid or expired OTP" });
            }

            // Clear OTP fields
            user.otp = undefined;
            user.otpExpire = undefined;
            await user.save();

            // Generate JWT token
            generateToken(res, user._id);

            return res.json({
                message: "Login successful",
                _id: user._id,
                name: user.name,
                email: user.email,
            });
        }

        return res.status(400).json({ message: "Invalid step value" });

    } catch (error) {
        console.error("OTP Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const logoutUser = (req, res) => {
    res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
    });
    res.json({ message: "Logged out successfully" });
};