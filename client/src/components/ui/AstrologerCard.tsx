import { motion } from "motion/react";
import { Star } from "lucide-react";
import BookingPage from "../pages/BookingPage";

interface AstrologerCardProps {
  name: string;
  experience: string;
  rating: number;
  skills: string[];
  image: string;
  onView: () => void;
  onReach: () => void;
}

export default function AstrologerCard({
  name,
  experience,
  rating,
  skills,
  image,
  onView,
  onReach,
}: AstrologerCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="
        relative rounded-3xl p-8
        bg-[rgba(255,255,255,0.04)]
        border border-[rgba(255,255,255,0.1)]
        glass-blur
        overflow-hidden
        max-w-md mx-auto
      "
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", width: "350px" }}
    >
      {/* Glowing Border */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-[#6C33FF]/20 to-[#4EA3FF]/20 blur-xl opacity-40" />

      <div className="relative z-10 flex flex-col items-center gap-4">

        {/* Avatar */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] p-[3px] overflow-hidden">
          <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center">
            <img
              src={image}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-2xl text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {name}
        </h3>

        {/* Experience */}
        <p className="text-[rgba(255,255,255,0.6)]">{experience}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-[#FFD79A]">
          <Star className="w-4 h-4 fill-[#FFD79A]" />
          <span>{rating}</span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center text-center items-center gap-2 mt-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="
                px-4 py-1 rounded-full text-sm text-white
                bg-[rgba(255,255,255,0.06)]
                border border-[rgba(255,255,255,0.1)]
                backdrop-blur-md
              "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 w-full">
          <button
            onClick={onView}
            className="
              flex-1 px-5 py-3 rounded-full
              bg-[rgba(255,255,255,0.08)]
              border border-[rgba(255,255,255,0.15)]
              text-white
              transition-all duration-300
              hover:border-[rgba(255,215,154,0.4)]
              hover:bg-[rgba(255,255,255,0.15)]
            "
          >
            View Profile
          </button>

          <button
            onClick={onReach}
            className="
              flex-1 px-5 py-3 rounded-full
              bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF]
              text-white
              hover:opacity-90
              transition-all duration-300
            "
          >
            Reach
          </button>
        </div>
      </div>
    </motion.div>
  );
}
