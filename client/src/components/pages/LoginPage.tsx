import { useState } from "react";
import { Link } from "react-router-dom";
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
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-gray-300 text-lg mb-4">Email</label>
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
          <label className="text-gray-300 text-lg">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 mt-1 mb-4 rounded-xl bg-[#0c0f17] border border-white/10 text-gray-200 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <center>
          <NebulaGhostButton onClick={() => alert("this is form is submitted")}>
            Login/Signup
          </NebulaGhostButton>
        </center>
        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
