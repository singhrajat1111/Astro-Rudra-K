import { motion } from "motion/react";

export default function GlassFormField({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange,
  required = false,
  as = "input"
}) {
  const Component = as === "textarea" ? "textarea" : "input";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <label className="block mb-2 text-sm text-[rgba(255,255,255,0.8)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {label}
        {required && <span className="text-[#D68A28] ml-1">*</span>}
      </label>
      
      <div className="relative group">
        <Component
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            w-full px-5 py-3.5 
            bg-[rgba(255,255,255,0.04)] glass-blur 
            border border-[rgba(255,255,255,0.1)] 
            rounded-2xl 
            text-white 
            placeholder:text-[rgba(255,255,255,0.3)]
            focus:outline-none 
            focus:border-[#D68A28] 
            focus:shadow-[0_0_20px_rgba(214,138,40,0.3)]
            transition-all duration-300
            ${as === "textarea" ? "min-h-[120px] resize-none" : ""}
          `}
        />
        
        {/* Focus Glow Effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[rgba(214,138,40,0.1)] to-[rgba(255,215,154,0.1)] blur-sm" />
        </div>
      </div>
    </motion.div>
  );
}
