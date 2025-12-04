import { motion } from "motion/react";

export default function NebulaGhostButton({
  children,
  onClick,
  type = "button",
  className = "",
}: {
  children: any;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,215,154,0.4)" }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      type={type}
      className={`
        px-8 py-3 rounded-xl
        bg-[rgba(255,255,255,0.05)]
        border border-[rgba(255,255,255,0.15)]
        backdrop-blur-md
        text-white font-medium
        transition-all duration-300
        hover:border-[rgba(255,215,154,0.5)]
        hover:text-[#FFD79A]
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
