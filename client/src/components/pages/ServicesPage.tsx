import { motion } from "motion/react";
import CosmicCapsuleCard from "../CosmicCapsuleCard";
import EnergyBurstButton from "../EnergyBurstButton";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    { icon: "🌟", title: "Comprehensive Birth Chart Analysis", description: "Deep dive into your natal chart revealing personality traits, life path, karmic patterns, strengths, challenges, and soul purpose. Includes detailed analysis of all 12 houses and planetary positions." },
    { icon: "💼", title: "Career & Business Guidance", description: "Navigate your professional journey with planetary insights. Discover ideal career paths, auspicious timing for job changes, business ventures, partnerships, and financial growth opportunities." },
    { icon: "💖", title: "Love & Relationship Compatibility", description: "Comprehensive compatibility analysis for relationships and marriage. Understand karmic connections, relationship dynamics, timing for marriage, and remedies for harmonious partnerships." },
    { icon: "💎", title: "Gemstone Consultation", description: "Personalized gemstone recommendations based on your birth chart to strengthen beneficial planetary influences, reduce malefic effects, and enhance specific life areas." },
    { icon: "🏡", title: "Vastu Shastra Consultation", description: "Harmonize your living and working spaces with ancient Vastu principles. Site selection, directional analysis, room placement, and remedies for existing structures." },
    { icon: "🔮", title: "Remedial Measures & Rituals", description: "Effective Vedic remedies including mantras, yantras, charitable activities, fasting, and specific rituals to overcome obstacles, reduce negative influences, and enhance prosperity." },
    { icon: "⏰", title: "Muhurta - Auspicious Timing", description: "Electional astrology to select the most auspicious time for important events like marriage, business launch, property purchase, travel, surgery, or any significant undertaking." },
    { icon: "🌙", title: "Dasha & Transit Analysis", description: "Understand current and upcoming planetary periods (Dasha) and transits affecting your life. Predictions for specific time frames and guidance on navigating challenging periods." },
    { icon: "👶", title: "Child Birth Consultation", description: "Pre-birth consultation for conception timing, baby naming based on numerology and birth chart, and new parent guidance for child's astrological blueprint." },
    { icon: "🧘", title: "Spiritual Growth & Moksha", description: "Guidance on spiritual path, meditation practices, karmic lessons, past life insights, and remedies for spiritual evolution and liberation (Moksha)." },
    { icon: "💰", title: "Financial Astrology", description: "Wealth analysis, investment timing, property matters, inheritance predictions, and remedies for financial stability and prosperity through planetary insights." },
    { icon: "🏥", title: "Health & Wellness Astrology", description: "Preventive health insights from birth chart, potential health challenges, body constitution (Ayurvedic dosha), ideal diet, and timing for medical procedures." }
  ];

  return (
    <div className="relative pt-32 pb-20 overflow-hidden">

      {/* Soft Ambient Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-purple-700/30 blur-[160px] rounded-full"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full"
      />

      {/* ——————————————————————————————————————————
         HERO SECTION
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-700/20 border border-purple-700/40 glass-blur shadow-md shadow-purple-900/20">
            <span className="text-sm text-[#6C33FF] font-medium">
              ✨ Celestial Guidance
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#FFD79A] to-[#6C33FF] bg-clip-text text-transparent">
            Our Sacred Services
          </h1>

          <p className="text-xl text-white/70 leading-relaxed">
            Comprehensive astrological solutions for every aspect of your life journey.<br />
            Each consultation is personalized and rooted in authentic Vedic wisdom.
          </p>
        </motion.div>
      </section>

      {/* ——————————————————————————————————————————
         SERVICES GRID
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <CosmicCapsuleCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ——————————————————————————————————————————
         HOW CONSULTATION WORKS
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD79A] mb-6">
            How Consultation Works
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { step: "01", title: "Book Your Session", description: "Choose your service and select a convenient time slot. Provide your birth details for chart preparation." },
            { step: "02", title: "Chart Analysis", description: "Your birth chart is carefully analyzed using authentic Vedic techniques before the consultation." },
            { step: "03", title: "Consultation & Guidance", description: "One-on-one session with detailed insights, predictions, and personalized remedies. Receive a comprehensive report." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl bg-white/5 glass-blur border border-white/10 p-8 hover:border-yellow-200/40 transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] flex items-center justify-center text-xl font-medium">
                  {item.step}
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl text-[#FFD79A] font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>

                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-[#FFD79A] text-2xl">
                    →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ——————————————————————————————————————————
         PRICING SECTION
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD79A] mb-4">
            Investment in Your Cosmic Journey
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Transparent pricing with exceptional value. All consultations include detailed reports and follow-up support.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            { type: "Basic Reading", price: "2,999", duration: "30 min" },
            { type: "Detailed Analysis", price: "5,999", duration: "60 min" },
            { type: "Premium Package", price: "11,999", duration: "90 min" }
          ].map((pricing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 glass-blur border border-white/10 p-8 text-center hover:border-yellow-200/40 transition-all duration-300"
            >
              <div className="text-lg text-white/70 mb-2">{pricing.type}</div>
              <div className="text-3xl text-[#FFD79A] font-semibold mb-2">₹{pricing.price}</div>
              <div className="text-sm text-white/50">{pricing.duration}</div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/60 mb-4">
          Special packages available for multiple consultations and family readings
        </p>
      </section>

      {/* ——————————————————————————————————————————
         CTA SECTION
      ——————————————————————————————————————————— */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-purple-700/20 via-blue-500/20 to-yellow-300/20 glass-blur border border-yellow-200/40 p-12 md:p-16 text-center overflow-hidden max-w-5xl mx-auto shadow-xl shadow-black/30"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Consultation?
            </h2>

            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Book your personalized session and receive cosmic guidance tailored to your unique journey.
            </p>

            <EnergyBurstButton onClick={() => navigate("/booking")}>
              <Sparkles className="w-5 h-5" />
              Book Consultation Now
            </EnergyBurstButton>
          </div>

          {/* Glow */}
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
