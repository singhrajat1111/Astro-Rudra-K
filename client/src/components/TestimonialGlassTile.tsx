import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function TestimonialGlassTile({ name, location, rating, text, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8 h-full overflow-hidden transition-all duration-300 hover:border-[rgba(108,51,255,0.4)] hover:shadow-[0_0_30px_rgba(108,51,255,0.2)]">
        {/* Orbital Highlight */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.2)] to-[rgba(78,163,255,0.2)] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4 relative z-10">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#FFD79A] text-[#FFD79A]" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-[rgba(255,255,255,0.8)] mb-6 leading-relaxed relative z-10 italic">
          "{text}"
        </p>

        {/* Golden Thread Divider */}
        <div className="golden-thread mb-4" />

        {/* Author Info */}
        <div className="relative z-10">
          <div className="text-[#FFD79A] mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {name}
          </div>
          <div className="text-xs text-[rgba(255,255,255,0.5)]">
            {location}
          </div>
        </div>

        {/* Decorative Corner Element */}
        <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#FFD79A]">
            <circle cx="80" cy="80" r="2" fill="currentColor" />
            <circle cx="60" cy="80" r="1.5" fill="currentColor" />
            <circle cx="80" cy="60" r="1.5" fill="currentColor" />
            <path d="M80 80 L60 80 L80 60 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
