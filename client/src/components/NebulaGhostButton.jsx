import { motion } from "framer-motion";

export default function NebulaGhostButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full bg-[rgba(255,255,255,0.04)] glass-blur border-2 border-transparent text-white overflow-hidden group ${className}`}
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        borderImage: "linear-gradient(135deg, #6C33FF, #4EA3FF) 1"
      }}
    >
      {/* Gradient Border Animation */}
      <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#6C33FF] via-[#4EA3FF] to-[#6C33FF] bg-[length:200%_100%] group-hover:animate-[gradient-shift_2s_linear_infinite]" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }}>
      </div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>

      {/* Nebula Glow on Hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(108,51,255,0.2)] to-[rgba(78,163,255,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
    </motion.button>
  );
}