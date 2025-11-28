import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CosmicCapsuleCard from "../CosmicCapsuleCard";
import EnergyBurstButton from "../EnergyBurstButton";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: "🌟",
      title: "Comprehensive Birth Chart Analysis",
      description: "Deep dive into your natal chart revealing personality traits, life path, karmic patterns, strengths, challenges, and soul purpose. Includes detailed analysis of all 12 houses and planetary positions."
    },
    {
      icon: "💼",
      title: "Career & Business Guidance",
      description: "Navigate your professional journey with planetary insights. Discover ideal career paths, auspicious timing for job changes, business ventures, partnerships, and financial growth opportunities."
    },
    {
      icon: "💖",
      title: "Love & Relationship Compatibility",
      description: "Comprehensive compatibility analysis for relationships and marriage. Understand karmic connections, relationship dynamics, timing for marriage, and remedies for harmonious partnerships."
    },
    {
      icon: "💎",
      title: "Gemstone Consultation",
      description: "Personalized gemstone recommendations based on your birth chart to strengthen beneficial planetary influences, reduce malefic effects, and enhance specific life areas."
    },
    {
      icon: "🏡",
      title: "Vastu Shastra Consultation",
      description: "Harmonize your living and working spaces with ancient Vastu principles. Site selection, directional analysis, room placement, and remedies for existing structures."
    },
    {
      icon: "🔮",
      title: "Remedial Measures & Rituals",
      description: "Effective Vedic remedies including mantras, yantras, charitable activities, fasting, and specific rituals to overcome obstacles, reduce negative influences, and enhance prosperity."
    },
    {
      icon: "⏰",
      title: "Muhurta - Auspicious Timing",
      description: "Electional astrology to select the most auspicious time for important events like marriage, business launch, property purchase, travel, surgery, or any significant undertaking."
    },
    {
      icon: "🌙",
      title: "Dasha & Transit Analysis",
      description: "Understand current and upcoming planetary periods (Dasha) and transits affecting your life. Predictions for specific time frames and guidance on navigating challenging periods."
    },
    {
      icon: "👶",
      title: "Child Birth Consultation",
      description: "Pre-birth consultation for conception timing, baby naming based on numerology and birth chart, and new parent guidance for child's astrological blueprint."
    },
    {
      icon: "🧘",
      title: "Spiritual Growth & Moksha",
      description: "Guidance on spiritual path, meditation practices, karmic lessons, past life insights, and remedies for spiritual evolution and liberation (Moksha)."
    },
    {
      icon: "💰",
      title: "Financial Astrology",
      description: "Wealth analysis, investment timing, property matters, inheritance predictions, and remedies for financial stability and prosperity through planetary insights."
    },
    {
      icon: "🏥",
      title: "Health & Wellness Astrology",
      description: "Preventive health insights from birth chart, potential health challenges, body constitution (Ayurvedic dosha), ideal diet, and timing for medical procedures."
    }
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] glass-blur">
            <span className="text-sm text-[#6C33FF]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ✨ Celestial Guidance
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white via-[#FFD79A] to-[#6C33FF] bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
            Our Sacred Services
          </h1>

          <p className="text-xl text-[rgba(255,255,255,0.7)] leading-relaxed">
            Comprehensive astrological solutions for every aspect of your life journey. Each consultation is personalized and rooted in authentic Vedic wisdom.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.15)] to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[rgba(78,163,255,0.15)] to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Services Grid */}
      <section className="relative px-6 md:px-[120px] py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <CosmicCapsuleCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            How Consultation Works
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Book Your Session",
              description: "Choose your service and select a convenient time slot. Provide your birth details for chart preparation."
            },
            {
              step: "02",
              title: "Chart Analysis",
              description: "Your birth chart is carefully analyzed using authentic Vedic techniques before the consultation."
            },
            {
              step: "03",
              title: "Consultation & Guidance",
              description: "One-on-one session with detailed insights, predictions, and personalized remedies. Receive a comprehensive report."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8 h-full hover:border-[rgba(255,215,154,0.4)] transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] flex items-center justify-center text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {item.step}
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl mb-4 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
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

      {/* Pricing Overview Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Investment in Your Cosmic Journey
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
            Transparent pricing with exceptional value. All consultations include detailed reports and follow-up support.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { type: "Basic Reading", price: "2,999", duration: "30 min" },
            { type: "Detailed Analysis", price: "5,999", duration: "60 min" },
            { type: "Premium Package", price: "11,999", duration: "90 min" }
          ].map((pricing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-6 text-center hover:border-[rgba(255,215,154,0.4)] transition-all duration-300"
            >
              <div className="text-lg mb-2 text-[rgba(255,255,255,0.7)]">{pricing.type}</div>
              <div className="text-3xl mb-2 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ₹{pricing.price}
              </div>
              <div className="text-sm text-[rgba(255,255,255,0.5)]">{pricing.duration}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[rgba(255,255,255,0.6)] mb-6">
            Special packages available for multiple consultations and family readings
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.2)] glass-blur border border-[rgba(255,215,154,0.4)] p-12 md:p-16 text-center overflow-hidden max-w-5xl mx-auto"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Begin Your Consultation?
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.8)] mb-10 max-w-2xl mx-auto">
              Book your personalized session and receive cosmic guidance tailored to your unique journey
            </p>
            <EnergyBurstButton onClick={() => navigate("/astrologers")}>
              <Sparkles className="w-5 h-5" />
              Book Consultation Now
            </EnergyBurstButton>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] opacity-20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD79A] to-[#D68A28] opacity-20 blur-3xl" />
        </motion.div>
      </section>
    </div>
  );
}