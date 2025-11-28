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
      img: "/public/Rudra.png", // Add your correct image here
    },
    {
      name: "Ms. Sonakshi",
      experience: "2+ Years",
      specialty: ["Tarot Reader", "Oracle", "Vastu Shastra"],
      rating: 4.8,
      img: "/public/Sonakshi.jpg",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 py-24 md:px-[100px] bg-[#0B0B0E]"
      style={{ marginTop: "130px" }}
    >
      <BackgroundGlows />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD79A] mb-20"
        style={{ fontFamily: "'Cinzel Decorative', serif" }}
      >
        Our Expert Astrologers
      </motion.h1>

      {/* Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-12 
        place-items-center 
        relative 
        z-10
      "
      >
        {astrologers.map((astro, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="
              bg-white/5
              border border-white/10
              rounded-2xl 
              overflow-hidden 
              shadow-lg 
              hover:shadow-[#FFD79A]/30 
              transition-all 
              backdrop-blur-xl 
              flex 
              flex-col
              w-full
              max-w-[350px]
            "
          >
            {/* IMAGE */}
            <div className="w-full h-64 overflow-hidden relative">
              <img
                src={astro.img}
                alt={astro.name}
                className="
                  w-full 
                  h-full 
                  object-cover 
                  object-center 
                  rounded-t-2xl
                  transition-transform 
                  duration-700 
                  hover:scale-105
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-white flex flex-col flex-grow">
              {/* Name + Rating */}
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-lg sm:text-xl font-semibold text-[#FFD79A] line-clamp-1">
                  {astro.name}
                </h2>

                <div className="flex items-center gap-1 bg-[#FFD79A]/20 px-2 py-1 rounded-lg border border-[#FFD79A]/30">
                  <Star className="w-3 h-3 text-[#FFD79A] fill-[#FFD79A]" />
                  <span className="text-xs font-bold text-[#FFD79A]">{astro.rating}</span>
                </div>
              </div>

              {/* Experience */}
              <p className="text-sm opacity-70 mb-4">{astro.experience} Experience</p>

              {/* Specialities */}
              <div className="flex flex-wrap gap-2 mb-6">
                {astro.specialty.map((tag, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1.5 
                      text-[10px] sm:text-[11px]
                      uppercase tracking-wider 
                      font-medium 
                      rounded-full 
                      bg-white/5 
                      border border-white/10 
                      text-white/90
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
                      className="
                        w-full py-3 px-3 
                        rounded-xl 
                        border border-[#FFD79A]/40 
                        text-[#FFD79A] 
                        text-sm font-semibold 
                        hover:bg-[#FFD79A]/10 
                        transition-colors
                      "
                    >
                      View Profile
                    </motion.button>
                  </Link>

                  <Link to="/booking" className="flex-1">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="
                        w-full py-3 px-3 
                        rounded-xl 
                        bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] 
                        text-white text-sm font-semibold 
                        shadow-lg shadow-[#6C33FF]/20 
                        hover:shadow-[#6C33FF]/40 
                        transition-all
                      "
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

/* BACKGROUND GLOWS */
function BackgroundGlows() {
  return (
    <>
      <div className="absolute top-20 left-10 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-[#6C33FF]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-[#4EA3FF]/10 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-[#FFD79A]/5 blur-3xl rounded-full"></div>
    </>
  );
}
