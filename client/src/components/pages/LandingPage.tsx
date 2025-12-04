import { motion } from "motion/react";
import { Sparkles, Stars, Calendar, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CosmicCapsuleCard from "../CosmicCapsuleCard";
import EnergyBurstButton from "../EnergyBurstButton";
import NebulaGhostButton from "../NebulaGhostButton";
import TestimonialGlassTile from "../TestimonialGlassTile";

export default function LandingPage() {
  const navigate = useNavigate();

  const services = [
    { icon: "🌟", title: "Birth Chart Analysis", description: "Comprehensive analysis of your natal chart revealing life path, strengths, and karmic patterns." },
    { icon: "💼", title: "Career Guidance", description: "Navigate your professional journey with planetary insights and timing for success." },
    { icon: "💖", title: "Love & Relationships", description: "Compatibility analysis and guidance for harmonious relationships and marriage." },
    { icon: "💎", title: "Gemstone Consultation", description: "Personalized gemstone recommendations to strengthen beneficial planetary influences." },
    { icon: "🏡", title: "Vastu Shastra", description: "Harmonize your living and working spaces with ancient architectural wisdom." },
    { icon: "🔮", title: "Remedies & Rituals", description: "Effective Vedic remedies and rituals to overcome obstacles and enhance prosperity." }
  ];

  const pillars = [
    { icon: <Award className="w-8 h-8" />, title: "20+ Years Experience", description: "Mastery in Vedic astrology with thousands of successful consultations" },
    { icon: <Users className="w-8 h-8" />, title: "10,000+ Happy Clients", description: "Trusted by clients worldwide for accurate predictions and guidance" },
    { icon: <Stars className="w-8 h-8" />, title: "Ancient Wisdom", description: "Authentic Vedic techniques combined with modern astrological insights" }
  ];

  const testimonials = [
    { name: "Priya Sharma", location: "Mumbai, India", rating: 5, text: "Astro Rudra K's guidance completely transformed my career trajectory. His predictions were remarkably accurate and the remedies truly worked!" },
    { name: "Rajesh Kumar", location: "Delhi, India", rating: 5, text: "The kundli reading was incredibly detailed and insightful. I finally understand my life's purpose and the timing for important decisions." },
    { name: "Ananya Desai", location: "Bangalore, India", rating: 5, text: "His gemstone recommendations brought positive changes in my life. The consultation was professional and deeply spiritual." }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Mandala */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="mandala-rotate opacity-[0.03]"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <svg width="1200" height="1200" viewBox="0 0 1200 1200">
            <circle cx="600" cy="600" r="500" fill="none" stroke="#FFD79A" strokeWidth="1" />
            <circle cx="600" cy="600" r="400" fill="none" stroke="#6C33FF" strokeWidth="1" />
            <circle cx="600" cy="600" r="300" fill="none" stroke="#4EA3FF" strokeWidth="1" />
            <circle cx="600" cy="600" r="200" fill="none" stroke="#FFD79A" strokeWidth="1" />
          </svg>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-[120px] pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6, duration: 1.5 }}
              className="absolute -top-10 -left-10 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full"
            />

            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] glass-blur">
              <span className="text-sm text-[#6C33FF] font-semibold">
                ✨ Authentic Vedic Astrology
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-[#FFD79A] to-[#6C33FF] bg-clip-text text-transparent leading-tight font-extrabold">
              Decoding Your Destiny
            </h1>

            <h2 className="text-2xl md:text-3xl mb-8 text-white/80 font-light">
              Through Ancient Vedic Wisdom
            </h2>

            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
              Unlock the cosmic secrets written in your stars. Get personalized guidance from Master Astrologer Rudra K with over 20 years of experience in Vedic astrology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <EnergyBurstButton onClick={() => navigate("/astrologers")}>
                <Calendar className="w-5 h-5" />
                Book Consultation
              </EnergyBurstButton>

              <NebulaGhostButton onClick={() => navigate("/kundli")}>
                <Sparkles className="w-5 h-5" />
                Try Astro Reading
              </NebulaGhostButton>
            </div>
          </motion.div>

          {/* RIGHT ORB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative orbital-float"
          >
            <div className="relative w-full max-w-[500px] mx-auto aspect-square">
              {/* Outer Mandala */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#FFD79A" strokeWidth="1" />
                  <circle cx="200" cy="200" r="140" fill="none" stroke="#6C33FF" strokeWidth="1" />
                </svg>
              </motion.div>

              {/* Inner glowing orb */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.3)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.3)] glass-blur border-2 border-[rgba(255,215,154,0.4)] overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl opacity-50"
                  >
                    🧘‍♂️
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating symbols */}
              {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏"].map((symbol, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.12, duration: 0.6 }}
                    className="absolute w-10 h-10 rounded-full bg-white/5 glass-blur border border-[#FFD79A]/30 flex items-center justify-center text-[#FFD79A]"
                    style={{
                      left: `${50 + Math.cos(angle) * 50}%`,
                      top: `${50 + Math.sin(angle) * 50}%`,
                      transform: "translate(-50%, -50%)",
                      fontFamily: "'Cinzel Decorative', serif"
                    }}
                  >
                    {symbol}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A] font-bold">
            Our Celestial Services
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive astrological guidance for every aspect of your life journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <CosmicCapsuleCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A] font-bold">
            Why Choose Astro Rudra K
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="rounded-3xl bg-gradient-to-br from-purple-600/10 to-blue-500/10 glass-blur border border-yellow-200/30 p-8 text-center h-full transition-all duration-300 hover:border-yellow-200/60 hover:scale-[1.04]">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] items-center justify-center mb-6 text-[#FFD79A]"
                >
                  {pillar.icon}
                </motion.div>

                <h3 className="text-2xl mb-4 text-[#FFD79A] font-semibold">{pillar.title}</h3>
                <p className="text-white/70">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A] font-bold">
            Client Testimonials
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Hear from those who found their cosmic path with our guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialGlassTile
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              delay={index * 0.15}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 md:px-[120px] py-20 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-yellow-300/20 glass-blur border border-yellow-200/40 p-12 md:p-16 text-center overflow-hidden max-w-5xl mx-auto"
        >
          <motion.div
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute inset-0"
          >
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <pattern id="cta-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="#FFD79A" />
              </pattern>
              <rect width="400" height="200" fill="url(#cta-pattern)" />
            </svg>
          </motion.div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl mb-6 text-white font-bold">
              Ready to Unlock Your Cosmic Blueprint?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Book a personalized consultation and discover what the stars have aligned for you
            </p>

            <EnergyBurstButton onClick={() => navigate("/booking")}>
              <Sparkles className="w-5 h-5" />
              Book Your Reading Now
            </EnergyBurstButton>
          </div>

          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-600/30 blur-2xl"
          />

          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-yellow-300/30 blur-2xl"
          />
        </motion.div>
      </section>
    </div>
  );
}
