import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Award,
  Users,
  Sparkles,
  Star,
  Calendar
} from "lucide-react";

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
      description:
        "Comprehensive analysis of your natal chart revealing life path, strengths, and karmic patterns.",
    },
    {
      icon: "💼",
      title: "Career Guidance",
      description:
        "Navigate your professional journey with planetary insights and timing for success.",
    },
    {
      icon: "💖",
      title: "Love & Relationships",
      description:
        "Compatibility analysis and guidance for harmonious relationships and marriage.",
    },
    {
      icon: "💎",
      title: "Gemstone Consultation",
      description:
        "Personalized gemstone recommendations to strengthen beneficial planetary influences.",
    },
    {
      icon: "🏡",
      title: "Vastu Shastra",
      description:
        "Harmonize your living and working spaces with ancient architectural wisdom.",
    },
    {
      icon: "🔮",
      title: "Remedies & Rituals",
      description:
        "Effective Vedic remedies and rituals to overcome obstacles and enhance prosperity.",
    },
  ];

  const pillars = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "20+ Years Experience",
      description:
        "Mastery in Vedic astrology with thousands of successful consultations",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "10,000+ Happy Clients",
      description:
        "Trusted by clients worldwide for accurate predictions and guidance",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Ancient Wisdom",
      description:
        "Authentic Vedic techniques combined with modern astrological insights",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      text: "Astro Rudra K's guidance completely transformed my career trajectory. His predictions were remarkably accurate and the remedies truly worked!",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      text: "The kundli reading was incredibly detailed and insightful. I finally understand my life's purpose and the timing for important decisions.",
    },
    {
      name: "Ananya Desai",
      location: "Bangalore, India",
      rating: 5,
      text: "His gemstone recommendations brought positive changes in my life. The consultation was professional and deeply spiritual.",
    },
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

            <h2 className="text-2xl md:text-3xl mb-8 text-[rgba(255,255,255,0.8)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Through Ancient Vedic Wisdom
            </h2>

            <p className="text-lg text-[rgba(255,255,255,0.7)] mb-10 leading-relaxed max-w-xl">
              Unlock the cosmic secrets written in your stars. Get personalized guidance from Master Astrologer Rudra K with over 20 years of experience in Vedic astrology.
            </p>

            {/* CTA Buttons */}
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

          {/* Right - Orb Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative orbital-float"
          >
            <div className="relative w-full max-w-[500px] mx-auto aspect-square">
              {/* Rotating Mandala */}
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

              {/* Inner Glass Orb */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.3)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.3)] glass-blur border-2 border-[rgba(255,215,154,0.4)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
                  <div className="text-8xl opacity-50">🧘‍♂️</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 md:px-[120px] py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]">Our Celestial Services</h2>
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#FFD79A]">Why Choose Astro Rudra K</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl glass-blur border border-[rgba(255,215,154,0.3)] bg-[rgba(108,51,255,0.1)] text-center hover:scale-105 transition-transform"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] text-[#FFD79A] flex items-center justify-center">
                {pillar.icon}
              </div>

              <h3 className="text-2xl mb-4 text-[#FFD79A]">{pillar.title}</h3>
              <p className="text-[rgba(255,255,255,0.7)]">{pillar.description}</p>
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]">Client Testimonials</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <TestimonialGlassTile
              key={index}
              name={t.name}
              location={t.location}
              rating={t.rating}
              text={t.text}
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
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.2)] glass-blur border border-[rgba(255,215,154,0.4)] p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl mb-6 text-white">
            Ready to Unlock Your Cosmic Blueprint?
          </h2>

          <p className="text-lg text-[rgba(255,255,255,0.8)] mb-10 max-w-xl mx-auto">
            Book a personalized consultation and discover what the stars have aligned for you.
          </p>

          <EnergyBurstButton onClick={() => navigate("/astrologers")}>
            <Sparkles className="w-5 h-5" />
            Book Your Reading Now
          </EnergyBurstButton>
        </motion.div>
      </section>
    </div>
  );
}