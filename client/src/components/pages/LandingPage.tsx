import { motion } from "motion/react";
import { Sparkles, Stars, Compass, TrendingUp, Heart, Home as HomeIcon, Award, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CosmicCapsuleCard from "../CosmicCapsuleCard";
import EnergyBurstButton from "../EnergyBurstButton";
import NebulaGhostButton from "../NebulaGhostButton";
import TestimonialGlassTile from "../TestimonialGlassTile";

export default function LandingPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: "🌟",
      title: "Birth Chart Analysis",
      description: "Comprehensive analysis of your natal chart revealing life path, strengths, and karmic patterns."
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description: "Navigate your professional journey with planetary insights and timing for success."
    },
    {
      icon: "💖",
      title: "Love & Relationships",
      description: "Compatibility analysis and guidance for harmonious relationships and marriage."
    },
    {
      icon: "💎",
      title: "Gemstone Consultation",
      description: "Personalized gemstone recommendations to strengthen beneficial planetary influences."
    },
    {
      icon: "🏡",
      title: "Vastu Shastra",
      description: "Harmonize your living and working spaces with ancient architectural wisdom."
    },
    {
      icon: "🔮",
      title: "Remedies & Rituals",
      description: "Effective Vedic remedies and rituals to overcome obstacles and enhance prosperity."
    }
  ];

  const pillars = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "20+ Years Experience",
      description: "Mastery in Vedic astrology with thousands of successful consultations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "10,000+ Happy Clients",
      description: "Trusted by clients worldwide for accurate predictions and guidance"
    },
    {
      icon: <Stars className="w-8 h-8" />,
      title: "Ancient Wisdom",
      description: "Authentic Vedic techniques combined with modern astrological insights"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "Astro Rudra K's guidance completely transformed my career trajectory. His predictions were remarkably accurate and the remedies truly worked!"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      text: "The kundli reading was incredibly detailed and insightful. I finally understand my life's purpose and the timing for important decisions."
    },
    {
      name: "Ananya Desai",
      location: "Bangalore, India",
      rating: 5,
      text: "His gemstone recommendations brought positive changes in my life. The consultation was professional and deeply spiritual."
    }
  ];

  return (
    <div className="relative">
      {/* Background Mandala */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="mandala-rotate opacity-[0.02]">
          <svg width="1200" height="1200" viewBox="0 0 1200 1200">
            <circle cx="600" cy="600" r="500" fill="none" stroke="#FFD79A" strokeWidth="1" />
            <circle cx="600" cy="600" r="400" fill="none" stroke="#6C33FF" strokeWidth="1" />
            <circle cx="600" cy="600" r="300" fill="none" stroke="#4EA3FF" strokeWidth="1" />
            <circle cx="600" cy="600" r="200" fill="none" stroke="#FFD79A" strokeWidth="1" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1="600"
                  y1="600"
                  x2={600 + Math.cos(angle) * 500}
                  y2={600 + Math.sin(angle) * 500}
                  stroke="#FFD79A"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-[120px] pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] glass-blur">
              <span className="text-sm text-[#6C33FF]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ✨ Authentic Vedic Astrology
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white via-[#FFD79A] to-[#6C33FF] bg-clip-text text-transparent leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
              Decoding Your Destiny
            </h1>

            <h2 className="text-2xl md:text-3xl mb-8 text-[rgba(255,255,255,0.8)]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400 }}>
              Through Ancient Vedic Wisdom
            </h2>

            <p className="text-lg text-[rgba(255,255,255,0.7)] mb-10 leading-relaxed max-w-xl">
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

            {/* Floating Glyph */}
            <div className="hidden lg:block absolute top-20 right-0 orbital-float">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] opacity-30 blur-sm" />
            </div>
          </motion.div>

          {/* Right Orb Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative orbital-float"
          >
            <div className="relative w-full max-w-[500px] mx-auto aspect-square">
              <div className="absolute inset-0 mandala-rotate opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#FFD79A" strokeWidth="1" />
                  <circle cx="200" cy="200" r="140" fill="none" stroke="#6C33FF" strokeWidth="1" />
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    return (
                      <line
                        key={i}
                        x1="200"
                        y1="200"
                        x2={200 + Math.cos(angle) * 180}
                        y2={200 + Math.sin(angle) * 180}
                        stroke="#4EA3FF"
                        strokeWidth="0.5"
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.3)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.3)] glass-blur border-2 border-[rgba(255,215,154,0.4)] overflow-hidden golden-glow">
                <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] flex items-center justify-center">
                  <div className="text-8xl opacity-50">🧘‍♂️</div>
                </div>
              </div>

              {/* Floating Symbols */}
              {["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏"].map((symbol, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="absolute w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] glass-blur border border-[rgba(255,215,154,0.3)] flex items-center justify-center text-[#FFD79A]"
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

        {/* Background Glow */}
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.1)] to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[rgba(78,163,255,0.1)] to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Services Section */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Celestial Services
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
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

      {/* Why Choose Us */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Why Choose Astro Rudra K
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-[rgba(108,51,255,0.1)] to-[rgba(78,163,255,0.1)] glass-blur border border-[rgba(255,215,154,0.3)] p-8 text-center h-full overflow-hidden transition-all duration-300 hover:border-[rgba(255,215,154,0.6)] hover:scale-105">
                <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] items-center justify-center mb-6 text-[#FFD79A] group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>

                <h3 className="text-2xl mb-4 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {pillar.title}
                </h3>
                <p className="text-[rgba(255,255,255,0.7)]">{pillar.description}</p>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[rgba(108,51,255,0.2)] to-[rgba(78,163,255,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Client Testimonials
          </h2>
          <p className="text-lg text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
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

      {/* CTA Banner */}
      <section className="relative px-6 md:px-[120px] py-20 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.2)] glass-blur border border-[rgba(255,215,154,0.4)] p-12 md:p-16 text-center overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <pattern id="cta-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="#FFD79A" />
              </pattern>
              <rect width="400" height="200" fill="url(#cta-pattern)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Unlock Your Cosmic Blueprint?
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.8)] mb-10 max-w-2xl mx-auto">
              Book a personalized consultation and discover what the stars have aligned for you
            </p>
            <EnergyBurstButton onClick={() => navigate("/booking")}>
              <Sparkles className="w-5 h-5" />
              Book Your Reading Now
            </EnergyBurstButton>
          </div>

          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] opacity-20 blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD79A] to-[#D68A28] opacity-20 blur-2xl" />
        </motion.div>
      </section>
    </div>
  );
}
