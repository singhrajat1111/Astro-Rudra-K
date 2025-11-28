import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function AuthPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#070B1A] pt-24 pb-12">

      {/* ★ Planetary / Orbital Animation Background ★ */}
      <OrbitalBackground />

      {/* ★ Auth Container ★ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="z-20 w-560px max-w-[400px] flex flex-col items-center gap-8"
      >
        {/* Title above the container */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFD79A]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
            Welcome Back
          </h1>
          <p className="text-white/60 text-sm">Enter your cosmic credentials</p>
        </div>

        {/* Compact Form Container */}
        <div className="w-full bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-3xl p-6 shadow-2xl flex flex-col justify-center relative overflow-hidden group hover:border-[rgba(255,215,154,0.3)] transition-colors duration-500">

          {/* Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD79A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="space-y-6">
            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#FFD79A] ml-1">Email Address</label>
                <Input
                  type="email"
                  placeholder="name@example.com"
                  className="bg-black/20 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#FFD79A]/50 focus:ring-[#FFD79A]/20 transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#FFD79A] ml-1">Phone Number</label>
                <Input
                  type="text"
                  placeholder="+91 98765 43210"
                  className="bg-black/20 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-[#FFD79A]/50 focus:ring-[#FFD79A]/20 transition-all"
                />
              </div>
            </div>

            <Button
              onClick={() => navigate("/")}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] hover:from-[#5b2ad6] hover:to-[#3d8ce6] text-white font-semibold shadow-lg shadow-[#6C33FF]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue Journey
            </Button>

            <div className="text-center">
              <p className="text-xs text-white/40">
                By continuing, you agree to our{" "}
                <Link className="text-[#FFD79A] hover:underline" to="/privacy">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

//
// =============================
// ★ ORBITAL BACKGROUND COMPONENT
// =============================
//
function OrbitalBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Central glowing star */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full"
          style={{
            width: 110,
            height: 110,
            background:
              "radial-gradient(circle, #ffe9b5, #ffb963, rgba(255,140,50,0.2))",
            boxShadow:
              "0 0 50px rgba(255,180,120,0.3), 0 0 100px rgba(255,150,80,0.18)"
          }}
        />
      </div>

      {/* Animated orbital planets */}
      <PlanetOrbit size={15} distance={90} duration={9} />
      <PlanetOrbit size={20} distance={140} duration={14} />
      <PlanetOrbit size={12} distance={180} duration={18} />
    </div>
  );
}

function PlanetOrbit({ size, distance, duration }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{ width: distance * 2, height: distance * 2 }}
        className="relative"
      >
        <div
          style={{
            width: size,
            height: size,
            background:
              "radial-gradient(circle at 30% 30%, #ffffff, #bcd0ff, #4a63ff40)",
            boxShadow: "0 0 10px rgba(150,200,255,0.3)"
          }}
          className="absolute top-1/2 left-0 -translate-y-1/2 rounded-full"
        />
      </motion.div>
    </div>
  );
}