import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import AuthLayout from "../AuthLayout";
import NebulaGhostButton from "../NebulaGhostButton";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup data:", form);
  };

  return (
    <AuthLayout>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6 w-full"
      >
        {/* Full Name */}
        <div className="space-y-2">
          <label
            className="text-gray-300 text-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0d1018]/80 backdrop-blur-md
            border border-white/10 text-gray-200
            focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/60
            transition-all duration-300 outline-none"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            className="text-gray-300 text-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0d1018]/80 backdrop-blur-md
            border border-white/10 text-gray-200
            focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/60
            transition-all duration-300 outline-none"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            className="text-gray-300 text-lg"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Password
          </label>

          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0d1018]/80 backdrop-blur-md
            border border-white/10 text-gray-200
            focus:ring-2 focus:ring-purple-500/60 focus:border-purple-500/60
            transition-all duration-300 outline-none"
          />
        </div>

        {/* Signup Button */}
        <center className="pt-2">
          <NebulaGhostButton>Create Account</NebulaGhostButton>
        </center>

        {/* Link to Login */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.form>
    </AuthLayout>
  );
}
