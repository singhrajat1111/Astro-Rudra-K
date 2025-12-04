import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import AuthLayout from "../AuthLayout";
import NebulaGhostButton from "../NebulaGhostButton";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", form);
  };

  return (
    <AuthLayout>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="space-y-6 w-full"
      >
        {/* EMAIL */}
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

        {/* PASSWORD */}
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

        {/* LOGIN BUTTON */}
        <center className="pt-3">
          <NebulaGhostButton onClick={() => alert("this is form is submitted")}>
            Login / Signup
          </NebulaGhostButton>
        </center>

        {/* SIGNUP LINK */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.form>
    </AuthLayout>
  );
}
