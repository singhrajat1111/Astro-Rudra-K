import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function AstrologersPage() {
  const astrologers = [
    {
      name: "Rudra Katyal",
      experience: "2+ Years",
      specialty: ["Vedic Astrology", "Kundli Reading", "Gemstone Astrology"],
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1601582581074-ec5b1b1c3662?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ms. Sonakshi",
      experience: "2+ Years",
      specialty: ["Tarot Reader", "Oracle", "Vastu Shastra"],
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 py-24 md:px-[120px] bg-[#0B0B0E]"
      style={{ marginTop: "130px" }}
    >
      <BackgroundGlows />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD79A] mb-12"
        style={{ fontFamily: "'Cinzel Decorative', serif" }}
      >
        Our Expert Astrologers
      </motion.h1>

      {/* Grid Responsive */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-x-6 
        lg:gap-x-14
        gap-y-12 
        justify-items-center
        relative 
        z-10
      ">
        {astrologers.map((astro, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="
              bg-[rgba(255,255,255,0.06)] 
              glass-blur 
              border 
              border-[rgba(255,255,255,0.1)]
              rounded-2xl 
              overflow-hidden 
              shadow-lg 
              hover:shadow-[#FFD79A]/10 
              transition-all 
              backdrop-blur-xl 
              flex 
              flex-col 
              h-full 
              w-full 
              max-w-[360px]
            "
          >
            {/* Image */}
            <div className="h-64 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0E] to-transparent opacity-60 z-10" />
              <img
                src={astro.img}
                alt={astro.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-white flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-[#FFD79A] line-clamp-1">
                  {astro.name}
                </h2>

                <div className="flex items-center gap-1 bg-[#FFD79A]/10 px-2 py-1 rounded-lg border border-[#FFD79A]/20">
                  <Star className="w-3 h-3 text-[#FFD79A] fill-[#FFD79A]" />
                  <span className="text-xs font-bold text-[#FFD79A]">
                    {astro.rating}
                  </span>
                </div>
              </div>

              <p className="text-sm opacity-70 mb-4">
                {astro.experience} Experience
              </p>

              {/* RESPONSIVE CAPSULES */}
              <div className="flex flex-wrap gap-2 mb-6">
                {astro.specialty.map((tag, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 
                      py-2 
                      text-[10px] sm:text-[11px]
                      uppercase 
                      tracking-wider 
                      font-medium 
                      rounded-full 
                      bg-[rgba(255,255,255,0.08)] 
                      border 
                      border-white/10 
                      text-white/90 
                      flex 
                      justify-center 
                      items-center
                      w-auto 
                      min-w-[90px]
                      sm:min-w-[110px]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto pt-4 border-t border-white/10">
                <div className="flex gap-3">
                  <Link to={`/astrologers/${i}`} className="flex-1">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 px-3 rounded-xl border border-[#FFD79A]/30 text-[#FFD79A] text-sm font-semibold hover:bg-[#FFD79A]/10 transition-colors"
                    >
                      View Profile
                    </motion.button>
                  </Link>

                  <Link to="/booking" className="flex-1">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 px-3 rounded-xl bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white text-sm font-semibold shadow-lg shadow-[#6C33FF]/20 hover:shadow-[#6C33FF]/40 transition-all"
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

//
// Background Glow Component
//
function BackgroundGlows() {
  return (
    <>
      <div className="absolute top-20 left-10 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#6C33FF]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#4EA3FF]/10 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[#FFD79A]/5 blur-3xl rounded-full"></div>
    </>
  );
}