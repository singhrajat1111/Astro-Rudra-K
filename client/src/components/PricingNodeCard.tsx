import { motion } from "motion/react";
import { Check } from "lucide-react";
import EnergyBurstButton from "./EnergyBurstButton";

export default function PricingNodeCard({ 
  title, 
  price, 
  duration, 
  features, 
  highlighted = false,
  delay = 0,
  onSelect
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className={`
        relative rounded-[32px] glass-blur p-8 h-full
        ${highlighted 
          ? 'bg-gradient-to-br from-[rgba(108,51,255,0.15)] to-[rgba(78,163,255,0.15)] border-2 border-[#6C33FF] shadow-[0_0_40px_rgba(108,51,255,0.3)]' 
          : 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)]'}
        transition-all duration-300 hover:scale-105
      `}>
        {/* Popular Badge */}
        {highlighted && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Most Popular
          </div>
        )}

        {/* Cosmic Gradient Border Animation */}
        {highlighted && (
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A] opacity-50 blur-xl" />
        )}

        <div className="relative z-10">
          {/* Title */}
          <h3 className="text-2xl mb-2 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {title}
          </h3>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ₹{price}
              </span>
              <span className="text-[rgba(255,255,255,0.6)]">/ {duration}</span>
            </div>
          </div>

          {/* Golden Thread Divider */}
          <div className="golden-thread mb-6" />

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-[rgba(255,255,255,0.8)]">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          {highlighted ? (
            <EnergyBurstButton onClick={onSelect} className="w-full">
              Book Now
            </EnergyBurstButton>
          ) : (
            <button 
              onClick={onSelect}
              className="w-full px-8 py-4 rounded-full bg-[rgba(255,255,255,0.06)] glass-blur border border-[rgba(255,215,154,0.3)] text-white hover:border-[rgba(255,215,154,0.6)] transition-all duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Select Plan
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
