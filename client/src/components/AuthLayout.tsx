import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0c0f17] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[350px] max-w-md p-8 rounded-2xl bg-[#11131b] shadow-xl border border-white/5"
      >
        <h1 className="text-center text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          AstroRudra-K
        </h1>

        {children}
      </motion.div>
    </div>
  );
}
