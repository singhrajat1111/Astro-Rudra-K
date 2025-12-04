import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import AstrologerCard from "../ui/AstrologerCard";

interface Astrologer {
  id: number;
  name: string;
  experience: string;
  rating: number;
  specialty: string[];
  image: string;
  skills: string[];
}

const astrologers: Astrologer[] = [
  {
    id: 1,
    name: "Rudra Katyal",
    experience: "2+ Years",
    rating: 4.9,
    specialty: ["Vedic Astrology", "Kundli Reading", "Gemstone Astrology"],
    image: "https://i.ibb.co/SR6n3Sd/astro1.jpg",
    skills: ["Numerology", "Gemstone Consultation", "Palmistry"],
  },
  {
    id: 2,
    name: "Ms. Sonakshi",
    experience: "2+ Years",
    rating: 4.8,
    specialty: ["Oracle", "Tarot", "Healing"],
    image: "https://i.ibb.co/HGZVtKw/astro2.jpg",
    skills: ["Oracle", "Healing", "Tarot Reading"],
  },
];

export default function Astrologers() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[180px] rounded-full pointer-events-none"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 tracking-wide"
        style={{ marginTop: "70px" }}
      >
        Choose Your Astrologer
      </motion.h1>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10"
      >
        {astrologers.map((astro, index) => (
          <motion.div
            key={astro.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="hover:scale-[1.03] transition-transform duration-300"
          >
            <AstrologerCard
              name={astro.name}
              experience={astro.experience}
              rating={astro.rating}
              skills={astro.skills}
              image={astro.image}
              onView={() => setSelectedId(astro.id)}
              onReach={() => {
                alert(`You have selected ${astro.name}`);
                navigate("/booking");
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
