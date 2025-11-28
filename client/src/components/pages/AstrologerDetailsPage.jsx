import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Globe, Phone, Video } from "lucide-react";

export default function AstrologerDetailsPage() {
  const { id } = useParams();
  const astrologer = MOCK_ASTROLOGERS.find((a) => a.id === id);

  if (!astrologer) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Astrologer not found.
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0B0B0E] px-6 py-28 md:px-[120px] overflow-hidden">

      {/* 🌌 Background Effects */}
      <BackgroundGlows />

      {/* ============================
          TOP HEADER SECTION
      ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row gap-12 items-center md:items-start"
      >
        {/* Image */}
        <div className="w-52 h-52 rounded-3xl overflow-hidden border border-[#FFD79A]/30 shadow-xl shadow-black/30">
          <img
            src={astrologer.img}
            alt={astrologer.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="text-white max-w-2xl">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#FFD79A]"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            {astrologer.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mt-4">
            <Star className="text-yellow-400 fill-yellow-400 w-6 h-6" />
            <span className="text-xl font-semibold">{astrologer.rating}</span>
            <span className="text-sm opacity-60">(Rated by 2,150+ users)</span>
          </div>

          {/* Experience */}
          <p className="mt-3 opacity-80 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FFD79A]" />
            {astrologer.experience} Experience
          </p>

          {/* Languages */}
          <p className="mt-2 opacity-80 text-sm flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#FFD79A]" />
            Speaks: {astrologer.language}
          </p>

          {/* Specialties */}
          <div className="flex flex-wrap gap-2 mt-4">
            {astrologer.specialty.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-[rgba(255,215,154,0.08)] border border-[#FFD79A]/20 text-[#FFD79A]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>


      {/* ============================
          ABOUT SECTION
      ============================ */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16 max-w-4xl"
      >
        <h2
          className="text-2xl text-[#FFD79A] font-semibold mb-3"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          About
        </h2>
        <p className="opacity-80 leading-relaxed text-white/90">
          {astrologer.about}
        </p>
      </motion.section>


      {/* ============================
          EXPERTISE SECTION
      ============================ */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-4xl"
      >
        <h2
          className="text-2xl text-[#FFD79A] mb-4"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          Expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {astrologer.expertise.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-xl bg-white/5 border border-white/10 shadow-lg shadow-black/20"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#FFD79A]">
                {skill.title}
              </h3>
              <p className="text-sm opacity-75">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* ============================
          CONSULTATION OPTIONS
      ============================ */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 max-w-4xl"
      >
        <h2
          className="text-2xl text-[#FFD79A] mb-4"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          Consultation Options
        </h2>

        <div className="flex flex-wrap gap-4">
          <ConsultationMode icon={Phone} label="Call Consultation" />
          <ConsultationMode icon={Video} label="Video Consultation" />
          <ConsultationMode icon={Lantern} label="Ritual & Remedies Guidance" />
        </div>
      </motion.section>


      {/* ============================
          CTA BUTTON
      ============================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20"
      >
        <Link to="/booking">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(108,51,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white font-medium shadow-lg transition"
          >
            Proceed to Booking
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

//
// 🔮 MODE CARD COMPONENT
//
function ConsultationMode({ icon: Icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm shadow-md shadow-black/20"
    >
      <Icon className="w-5 h-5 text-[#FFD79A]" />
      {label}
    </motion.div>
  );
}

//
// 🌌 BACKGROUND GLOWS
//
function BackgroundGlows() {
  return (
    <>
      <div className="absolute top-10 left-5 w-[450px] h-[450px] bg-[#6C33FF]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-5 w-[450px] h-[450px] bg-[#4EA3FF]/10 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FFD79A]/5 blur-3xl rounded-full"></div>
    </>
  );
}

//
// 🧿 MOCK DATA
//
const MOCK_ASTROLOGERS = [
  {
    id: "1",
    name: "Acharya Raghav Sharma",
    img: "https://images.unsplash.com/photo-1601582581074-ec5b1b1c3662?auto=format&fit=crop&w=600&q=80",
    experience: "15+ Years",
    rating: 4.9,
    language: "Hindi, English",
    specialty: ["Vedic Astrology", "Kundli Reading", "Marriage Matchmaking"],
    about:
      "Acharya Raghav Sharma is a highly respected Vedic astrologer with over 15 years of experience helping people align their cosmic energies...",
    expertise: [
      { title: "Vedic Astrology", desc: "Deep analysis of planetary influence..." },
      { title: "Relationship Guidance", desc: "Offers clarity on marriage & love..." },
    ],
  },
];