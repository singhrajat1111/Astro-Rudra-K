import { motion } from "motion/react";

export default function AstroOrbChart() {
  const planets = [
    { name: "Sun", degree: "15°", sign: "Aries", color: "#FFD79A", angle: 0 },
    { name: "Moon", degree: "22°", sign: "Cancer", color: "#4EA3FF", angle: 45 },
    { name: "Mars", degree: "08°", sign: "Leo", color: "#D68A28", angle: 90 },
    { name: "Mercury", degree: "29°", sign: "Gemini", color: "#6C33FF", angle: 135 },
    { name: "Jupiter", degree: "12°", sign: "Sagittarius", color: "#FFD79A", angle: 180 },
    { name: "Venus", degree: "18°", sign: "Taurus", color: "#4EA3FF", angle: 225 },
    { name: "Saturn", degree: "05°", sign: "Capricorn", color: "#8B5CF6", angle: 270 },
    { name: "Rahu", degree: "14°", sign: "Pisces", color: "#D68A28", angle: 315 },
  ];

  const houses = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="relative w-full max-w-[600px] mx-auto aspect-square">
      {/* Background Mandala Pattern */}
      <div className="absolute inset-0 opacity-5 mandala-rotate">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="180" fill="none" stroke="#FFD79A" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#6C33FF" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#4EA3FF" strokeWidth="0.5" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="200"
                y1="200"
                x2={200 + Math.cos(angle) * 180}
                y2={200 + Math.sin(angle) * 180}
                stroke="#FFD79A"
                strokeWidth="0.5"
                opacity="0.3"
              />
            );
          })}
        </svg>
      </div>

      {/* Main Orb Container */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.1)] via-[rgba(78,163,255,0.1)] to-[rgba(255,215,154,0.1)] border border-[rgba(255,215,154,0.3)] glass-blur overflow-hidden">
        {/* Inner Glow */}
        <div className="absolute inset-8 rounded-full bg-[rgba(11,11,14,0.6)] border border-[rgba(255,215,154,0.2)]">
          {/* Center Core */}
          <div className="absolute inset-1/4 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] opacity-20 blur-2xl" />
          
          {/* House Divisions */}
          {houses.map((house, i) => {
            const angle = (i * 30 * Math.PI) / 180 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 35;
            const y = 50 + Math.sin(angle) * 35;
            
            return (
              <div
                key={house}
                className="absolute text-xs text-[rgba(255,215,154,0.6)]"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {house}
              </div>
            );
          })}
        </div>

        {/* Planetary Positions */}
        {planets.map((planet, index) => {
          const angle = (planet.angle * Math.PI) / 180 - Math.PI / 2;
          const radius = 42;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;

          return (
            <motion.div
              key={planet.name}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative group">
                {/* Planet Orb */}
                <div
                  className="w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 hover:scale-150 hover:z-50"
                  style={{
                    backgroundColor: planet.color + '33',
                    borderColor: planet.color,
                    boxShadow: `0 0 20px ${planet.color}66`
                  }}
                />
                
                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                  <div className="bg-[rgba(11,11,14,0.95)] glass-blur border border-[rgba(255,215,154,0.3)] rounded-2xl px-4 py-2">
                    <div className="text-sm text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {planet.name}
                    </div>
                    <div className="text-xs text-[rgba(255,255,255,0.6)]">
                      {planet.degree} {planet.sign}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Center Symbol */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD79A] to-[#D68A28] flex items-center justify-center text-xl">
            ॐ
          </div>
        </div>
      </div>
    </div>
  );
}
