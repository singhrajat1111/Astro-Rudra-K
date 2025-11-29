import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
        phone: { type: String, },
        dateofbirth: { type: Date },
        gender: { type: String, enum: ["male", "female", "other"], default: "male" },
        status: { type: String, enum: ["active", "inactive"], default: "inactive" },
        otp: String,
        otpExpire: Date,

    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
