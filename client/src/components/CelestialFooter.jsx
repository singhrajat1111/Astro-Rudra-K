import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

export default function CelestialFooter() {
  const quickLinks = ["Home", "About", "Services", "Kundli Reading", "Contact"];
  const services = ["Birth Chart Analysis", "Career Guidance", "Love & Relationships", "Gemstone Consultation", "Vastu Shastra"];

  return (
    <footer className="relative px-6 py-16 md:px-[120px] mt-40">
      {/* Golden Thread Divider */}
      <div className="golden-thread mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#FFD79A]" />
            </div>
            <span className="text-xl text-[#FFD79A]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              Astro Rudra K
            </span>
          </div>
          <p className="text-[rgba(255,255,255,0.6)] mb-6 leading-relaxed">
            Decoding your destiny through ancient Vedic wisdom and cosmic guidance.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <button
                key={index}
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] flex items-center justify-center hover:border-[#FFD79A] hover:text-[#FFD79A] transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#FFD79A] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <button className="text-[rgba(255,255,255,0.6)] hover:text-[#FFD79A] transition-colors duration-300">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[#FFD79A] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Our Services
          </h4>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <button className="text-[rgba(255,255,255,0.6)] hover:text-[#FFD79A] transition-colors duration-300 text-left">
                  {service}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#FFD79A] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Get In Touch
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#6C33FF] mt-0.5 flex-shrink-0" />
              <div className="text-[rgba(255,255,255,0.6)]">
                +91 98765 43210
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-[#4EA3FF] mt-0.5 flex-shrink-0" />
              <div className="text-[rgba(255,255,255,0.6)]">
                contact@astrorudrak.com
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#FFD79A] mt-0.5 flex-shrink-0" />
              <div className="text-[rgba(255,255,255,0.6)]">
                Vedic Astrology Center<br />New Delhi, India
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Golden Thread Divider */}
      <div className="golden-thread mb-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[rgba(255,255,255,0.5)] text-sm">
        <div>
          © 2024 Astro Rudra K. All rights reserved.
        </div>
        <div className="flex gap-6">
          <button className="hover:text-[#FFD79A] transition-colors duration-300">Privacy Policy</button>
          <button className="hover:text-[#FFD79A] transition-colors duration-300">Terms of Service</button>
          <button className="hover:text-[#FFD79A] transition-colors duration-300">Cookie Policy</button>
        </div>
      </div>

      {/* Decorative Cosmic Elements */}
      <div className="absolute top-0 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.1)] to-[rgba(78,163,255,0.1)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-[rgba(255,215,154,0.05)] to-[rgba(214,138,40,0.05)] blur-3xl pointer-events-none" />
    </footer>
  );
}