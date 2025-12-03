import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

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
    // TODO: Call backend API
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-gray-300 text-sm">Full Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-1 rounded-xl bg-[#0c0f17] border border-white/10 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-1 rounded-xl bg-[#0c0f17] border border-white/10 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div>
          <label className="text-gray-300 text-sm">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-1 rounded-xl bg-[#0c0f17] border border-white/10 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition"
        >
          Create Account
        </button>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
