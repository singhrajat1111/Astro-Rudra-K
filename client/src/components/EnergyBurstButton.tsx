import { motion, HTMLMotionProps } from "motion/react";
import React from "react";

interface EnergyBurstButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function EnergyBurstButton({
  children,
  onClick,
  className = "",
  disabled = false,
  ...props
}: EnergyBurstButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        relative px-8 py-4 rounded-full 
        bg-gradient-to-r from-[#FFD79A] to-[#D68A28] 
        text-[#0B0B0E] overflow-hidden group
        transition-all duration-300
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      {...props}
    >
      {/* Pulse Background */}
      {!disabled && <div className="absolute inset-0 rounded-full pulse-glow" />}

      {/* Shimmer Effect */}
      {!disabled && (
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6 }}
          />
        </div>
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>

      {/* Glow Rings */}
      {!disabled && (
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#FFD79A] to-[#D68A28] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
      )}
    </motion.button>
  );
}
