import { motion } from "motion/react";

export default function EnergyBurstButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full bg-gradient-to-r from-[#FFD79A] to-[#D68A28] text-[#0B0B0E] overflow-hidden group ${className}`}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Pulse Animation Background */}
      <div className="absolute inset-0 rounded-full pulse-glow" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>

      {/* Glow Rings */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FFD79A] to-[#D68A28] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
    </motion.button>
  );
}
