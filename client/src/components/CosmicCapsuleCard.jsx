import { motion } from "framer-motion";

export default function CosmicCapsuleCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      <div className="relative rounded-[32px] bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,215,154,0.3)] p-8 overflow-hidden transition-all duration-300 hover:border-[rgba(255,215,154,0.6)] hover:shadow-[0_0_30px_rgba(255,215,154,0.2)]">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <pattern id="cosmic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#FFD79A" />
              <path d="M20 0 L20 40 M0 20 L40 20" stroke="#FFD79A" strokeWidth="0.5" opacity="0.3" />
            </pattern>
            <rect width="200" height="200" fill="url(#cosmic-pattern)" />
          </svg>
        </div>

        {/* Icon Container */}
        <div className="relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="text-3xl">{icon}</div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-xl mb-3 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {title}
          </h3>
          <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.1)] to-[rgba(78,163,255,0.1)]" />
        </div>
      </div>
    </motion.div>
  );
}