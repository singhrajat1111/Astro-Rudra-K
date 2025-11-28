import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Heart, Briefcase, Shield } from "lucide-react";
import AstroOrbChart from "../AstroOrbChart";
import CosmicCapsuleCard from "../CosmicCapsuleCard";
import EnergyBurstButton from "../EnergyBurstButton";

export default function KundliReadingPage({ onNavigate }) {
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
    { icon: "💎", title: "Yellow Sapphire", description: "Wear a 5-carat natural yellow sapphire on Thursdays." },
    { icon: "🕉️", title: "Mantra Chanting", description: "Recite 'Om Namah Shivaya' daily 108 times." },
    { icon: "🌅", title: "Surya Namaskar", description: "Perform 12 rounds every sunrise." },
    { icon: "🙏", title: "Charity & Service", description: "Donate yellow items on Thursdays." }
  ];

  const lifeAreas = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Career & Success",
      prediction: "Strong leadership potential. Best period: 2024-2026.",
      color: "#FFD79A"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Love & Relationships",
      prediction: "Favorable for marriage after mid-2025.",
      color: "#6C33FF"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Finance & Wealth",
      prediction: "Gradual growth. Avoid speculation.",
      color: "#4EA3FF"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Health & Wellness",
      prediction: "Good health. Focus on digestion.",
      color: "#D68A28"
    }
  ];

  return (
    <div className="relative pt-32 pb-20">

      {/* ---------------- HERO ---------------- */}
      <section className="px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] glass-blur">
            <span className="text-sm text-[#6C33FF]">✨ Your Cosmic Blueprint</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-[#FFD79A] to-[#6C33FF] bg-clip-text text-transparent font-bold">
            Kundli Reading
          </h1>

          <p className="text-lg text-[rgba(255,255,255,0.7)]">
            Sample birth chart analysis – Book a consultation for your personalized reading
          </p>
        </motion.div>
      </section>

      {/* ---------------- ORB CHART ---------------- */}
      <section className="px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-[#FFD79A]">Birth Chart Visualization</h2>
          <p className="text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
            Interactive planetary positions in your natal chart
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <AstroOrbChart />
        </motion.div>

        {/* Info Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Ascendant (Lagna)", value: "Aries 12°45'", icon: "♈" },
            { label: "Moon Sign (Rashi)", value: "Cancer 22°18'", icon: "♋" },
            { label: "Nakshatra", value: "Pushya Pada 3", icon: "⭐" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[rgba(255,255,255,0.04)] p-6 text-center border border-[rgba(255,255,255,0.1)] glass-blur hover:border-[rgba(255,215,154,0.4)] transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-sm text-[rgba(255,255,255,0.6)]">{item.label}</p>
              <p className="text-lg text-[#FFD79A]">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- PLANETARY STRENGTHS ---------------- */}
      <section className="px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-[#FFD79A]">Planetary Strengths</h2>
          <p className="text-[rgba(255,255,255,0.7)]">
            Analysis of each planet's influence in your chart
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {planetaryStrengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[rgba(255,255,255,0.04)] p-6 border border-[rgba(255,255,255,0.1)] glass-blur hover:border-[rgba(255,215,154,0.4)] transition"
            >
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="text-lg text-white">{item.planet}</h4>
                  <p className="text-sm text-[rgba(255,255,255,0.6)]">
                    {item.house}
                  </p>
                </div>

                {/* FIXED STATUS BADGE */}
                <div
                  className={`
                    px-3 py-1 rounded-full text-xs
                    ${item.status === "Excellent"
                      ? "bg-[rgba(108,51,255,0.3)] text-[#6C33FF]"
                      : item.status === "Strong"
                        ? "bg-[rgba(78,163,255,0.3)] text-[#4EA3FF]"
                        : item.status === "Good"
                          ? "bg-[rgba(78,163,255,0.3)] text-[#4EA3FF]"
                          : item.status === "Moderate"
                            ? "bg-[rgba(255,215,154,0.3)] text-[#FFD79A]"
                            : "bg-[rgba(214,138,40,0.3)] text-[#D68A28]"
                    }
                  `}
                >
                  {item.status}
                </div>
              </div>

              {/* Strength Bar */}
              <div className="relative w-full h-2 rounded-full bg-[rgba(255,255,255,0.1)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.strength}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A]"
                />
              </div>

              <p className="text-right mt-2 text-sm text-[rgba(255,255,255,0.7)]">
                {item.strength}% Strength
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- DASHA TIMELINE ---------------- */}
      <section className="px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-[#FFD79A]">Dasha Periods</h2>
          <p className="text-[rgba(255,255,255,0.7)]">
            Major planetary influences across life periods
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">

          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A]" />

          {dashaTimeline.map((dasha, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-10 ${index % 2 === 0
                  ? "md:pr-[calc(50%+3rem)]"
                  : "md:pl-[calc(50%+3rem)] md:ml-auto"
                } pl-20 md:pl-0`}
            >
              {/* Node */}
              <div
                className={`absolute top-0 ${index % 2 === 0 ? "left-8 md:right-0" : "left-8 md:left-0"
                  } w-8 h-8 rounded-full border-4 border-[#0B0B0E] flex items-center justify-center`}
                style={{ backgroundColor: dasha.color }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div
                className={`
                  rounded-2xl p-6 glass-blur border
                  ${dasha.status === "current"
                    ? "bg-gradient-to-br from-[rgba(255,215,154,0.2)] to-[rgba(214,138,40,0.2)] border-[rgba(255,215,154,0.6)] shadow-[0_0_30px_rgba(255,215,154,0.3)]"
                    : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.1)]"
                  }
                `}
              >
                <div className="flex justify-between mb-2">
                  <h4 className="text-xl text-white">{dasha.planet} Dasha</h4>

                  {dasha.status === "current" && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FFD79A] to-[#D68A28] text-[#0B0B0E] text-xs">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-[rgba(255,255,255,0.7)]">{dasha.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- LIFE AREAS ---------------- */}
      <section className="px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-[#FFD79A]">Life Areas Analysis</h2>
          <p className="text-[rgba(255,255,255,0.7)]">Insights into key areas of your life</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {lifeAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[rgba(255,255,255,0.04)] p-8 border border-[rgba(255,255,255,0.1)] glass-blur hover:border-[rgba(255,215,154,0.4)] transition"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: area.color + "33", color: area.color }}
              >
                {area.icon}
              </div>

              <h3 className="text-xl mb-3 text-[#FFD79A]">{area.title}</h3>

              <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                {area.prediction}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- REMEDIES ---------------- */}
      <section className="px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-[#FFD79A]">Recommended Remedies</h2>
          <p className="text-[rgba(255,255,255,0.7)]">
            Vedic solutions for positive transformation
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

      {/* ---------------- CTA ---------------- */}
      <section className="px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.2)] p-12 md:p-16 text-center border border-[rgba(255,215,154,0.4)] glass-blur overflow-hidden max-w-5xl mx-auto"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl mb-6 text-white">
              Get Your Personalized Kundli Reading
            </h2>

            <p className="text-lg text-[rgba(255,255,255,0.8)] mb-10 max-w-2xl mx-auto">
              This is a sample reading. Book a consultation for your full birth chart analysis.
            </p>

            <EnergyBurstButton onClick={() => onNavigate("booking")}>
              <Sparkles className="w-5 h-5" />
              Book Your Reading Now
            </EnergyBurstButton>
          </div>

          {/* Background Orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] opacity-20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD79A] to-[#D68A28] opacity-20 blur-3xl" />
        </motion.div>
      </section>

    </div>
  );
}