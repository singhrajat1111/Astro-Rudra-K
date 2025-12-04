import { motion } from "motion/react";
import { Sparkles, TrendingUp, Heart, Briefcase, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AstroOrbChart from "../AstroOrbChart";
import CosmicCapsuleCard from "../CosmicCapsuleCard";
import EnergyBurstButton from "../EnergyBurstButton";

export default function KundliReadingPage() {
  const navigate = useNavigate();

  const dashaTimeline = [
    { planet: "Venus", period: "2020-2023", status: "completed", color: "#4EA3FF" },
    { planet: "Sun", period: "2023-2024", status: "current", color: "#FFD79A" },
    { planet: "Moon", period: "2024-2034", status: "upcoming", color: "#6C33FF" },
    { planet: "Mars", period: "2034-2041", status: "upcoming", color: "#D68A28" },
  ];

  const planetaryStrengths = [
    { planet: "Sun", strength: 85, house: "10th House", status: "Strong" },
    { planet: "Moon", strength: 70, house: "4th House", status: "Good" },
    { planet: "Mars", strength: 60, house: "3rd House", status: "Moderate" },
    { planet: "Mercury", strength: 90, house: "11th House", status: "Excellent" },
    { planet: "Jupiter", strength: 75, house: "9th House", status: "Good" },
    { planet: "Venus", strength: 65, house: "7th House", status: "Moderate" },
    { planet: "Saturn", strength: 50, house: "12th House", status: "Weak" },
    { planet: "Rahu", strength: 55, house: "6th House", status: "Moderate" },
  ];

  const remedies = [
    {
      icon: "💎",
      title: "Yellow Sapphire",
      description: "Wear a 5-carat natural yellow sapphire in gold ring on Thursday morning to strengthen Jupiter."
    },
    {
      icon: "🕉️",
      title: "Mantra Chanting",
      description: "Recite 'Om Namah Shivaya' 108 times daily during morning to balance planetary energies."
    },
    {
      icon: "🌅",
      title: "Surya Namaskar",
      description: "Perform 12 rounds of sun salutations at sunrise to enhance Sun's positive influence."
    },
    {
      icon: "🙏",
      title: "Charity & Service",
      description: "Donate yellow items on Thursdays and feed cows to appease Jupiter and reduce malefic effects."
    }
  ];

  const lifeAreas = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career & Success",
      prediction: "Strong potential for leadership roles. Best period: 2024-2026.",
      color: "#FFD79A"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Love & Relationships",
      prediction: "Favorable time for marriage after mid-2025. Compatible with Taurus & Virgo.",
      color: "#6C33FF"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Finance & Wealth",
      prediction: "Gradual financial growth. Avoid speculation. Real estate favorable.",
      color: "#4EA3FF"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Health & Wellness",
      prediction: "Generally good. Watch digestive system. Yoga & meditation recommended.",
      color: "#D68A28"
    }
  ];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">

      {/* Soft background gradient glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/30 blur-[180px] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full"
      />

      {/* ——————————————————————————————————————————
         HERO SECTION
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-700/20 border border-purple-700/40 glass-blur shadow-md shadow-purple-900/20">
            <span className="text-sm text-[#6C33FF] font-medium">
              ✨ Your Cosmic Blueprint
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 font-bold bg-gradient-to-r from-white via-[#FFD79A] to-[#6C33FF] bg-clip-text text-transparent">
            Kundli Reading
          </h1>

          <p className="text-lg text-white/70">
            Sample birth chart analysis - Book a consultation for your personalized reading
          </p>
        </motion.div>
      </section>

      {/* ——————————————————————————————————————————
         Astro Orb Chart
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#FFD79A] font-bold mb-4">Birth Chart Visualization</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Interactive planetary positions in your natal chart
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-14"
        >
          <AstroOrbChart />
        </motion.div>

        {/* Ascendant / Moon / Nakshatra */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Ascendant (Lagna)", value: "Aries 12°45'", icon: "♈" },
            { label: "Moon Sign (Rashi)", value: "Cancer 22°18'", icon: "♋" },
            { label: "Nakshatra", value: "Pushya Pada 3", icon: "⭐" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl glass-blur bg-white/5 border border-white/10 p-6 text-center hover:border-yellow-200/40 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-sm text-white/60 mb-1">{item.label}</div>
              <div className="text-lg text-[#FFD79A] font-medium">{item.value}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——————————————————————————————————————————
         Planetary Strengths
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#FFD79A] font-bold mb-4">Planetary Strengths</h2>
          <p className="text-white/70">Analysis of each planet's position and influence in your chart</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {planetaryStrengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 glass-blur border border-white/10 p-6 hover:border-yellow-200/40 transition-all duration-300"
            >
              {/* Title Row */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{item.planet}</h4>
                  <p className="text-sm text-white/60">{item.house}</p>
                </div>

                <div className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    item.status === "Excellent"
                      ? "bg-purple-600/30 text-purple-400"
                      : item.status === "Good" || item.status === "Strong"
                      ? "bg-blue-500/30 text-blue-300"
                      : item.status === "Moderate"
                      ? "bg-yellow-300/25 text-[#FFD79A]"
                      : "bg-orange-500/25 text-orange-300"
                  }
                `}>
                  {item.status}
                </div>
              </div>

              {/* Strength Bar */}
              <div className="relative w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.strength}%` }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A]"
                />
              </div>

              <div className="text-right mt-2 text-sm text-white/70">{item.strength}% Strength</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——————————————————————————————————————————
         Dasha Timeline
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#FFD79A] font-bold mb-4">Dasha Periods</h2>
          <p className="text-white/70">Major planetary periods influencing your life</p>
        </motion.div>

        {/* TIMELINE */}
        <div className="max-w-4xl mx-auto relative">

          {/* Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A]" />

          {dashaTimeline.map((dasha, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-10 ${index % 2 === 0
                ? "md:pr-[calc(50%+3rem)]"
                : "md:pl-[calc(50%+3rem)] md:ml-auto"} pl-20 md:pl-0`}
            >
              {/* Node */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "left-8 md:right-0" : "left-8 md:left-0"
                } w-8 h-8 rounded-full border-4 border-black bg-opacity-20 flex items-center justify-center`}
                style={{ backgroundColor: dasha.color }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div
                className={`rounded-2xl glass-blur border p-6 transition-all duration-300 ${
                  dasha.status === "current"
                    ? "bg-gradient-to-br from-yellow-300/20 to-orange-400/20 border-yellow-300/60 shadow-[0_0_30px_rgba(255,215,154,0.3)]"
                    : "bg-white/5 border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl text-white font-semibold">{dasha.planet} Dasha</h4>

                  {dasha.status === "current" && (
                    <span className="px-3 py-1 rounded-full text-xs bg-gradient-to-r from-[#FFD79A] to-[#D68A28] text-black">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-white/70">{dasha.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——————————————————————————————————————————
         Life Areas
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#FFD79A] font-bold mb-4">Life Areas Analysis</h2>
          <p className="text-white/70">Predictions and guidance for major life aspects</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifeAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 glass-blur border border-white/10 p-8 hover:border-yellow-200/40 transition-all duration-300"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: area.color + "33", color: area.color }}
              >
                {area.icon}
              </div>

              <h3 className="text-xl text-[#FFD79A] font-semibold mb-2">{area.title}</h3>

              <p className="text-white/70">{area.prediction}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——————————————————————————————————————————
         Remedies
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#FFD79A] font-bold mb-4">Recommended Remedies</h2>
          <p className="text-white/70">
            Vedic solutions to enhance positive energies and reduce challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {remedies.map((remedy, index) => (
            <CosmicCapsuleCard
              key={index}
              icon={remedy.icon}
              title={remedy.title}
              description={remedy.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* ——————————————————————————————————————————
         CTA Section
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-purple-700/20 via-blue-500/20 to-yellow-300/20 glass-blur border border-yellow-200/40 p-12 md:p-16 text-center overflow-hidden max-w-5xl mx-auto shadow-xl shadow-black/30"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get Your Personalized Kundli Reading
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
              This is a sample reading. Book a consultation to receive your complete birth chart analysis with detailed predictions and personalized remedies.
            </p>

            <EnergyBurstButton onClick={() => navigate("/booking")}>
              <Sparkles className="w-5 h-5" />
              Book Your Reading Now
            </EnergyBurstButton>
          </div>

          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-700/30 blur-3xl"
          />

          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-yellow-300/30 blur-3xl"
          />
        </motion.div>
      </section>
    </div>
  );
}
