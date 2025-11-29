import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Sparkles } from "lucide-react";
import NebulaGhostButton from "./NebulaGhostButton";

export default function CelestialHeader({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "astrologers", label: "Astrologers" },
    { id: "booking", label: "Book Consultation" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-[120px]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-full bg-[rgba(11,11,14,0.8)] glass-blur border border-[rgba(255,255,255,0.1)] px-6 py-3"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#FFD79A]" />
            </div>
            <span className="text-xl text-[#FFD79A]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              Astro Rudra K
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  text-sm transition-colors duration-300 relative
                  ${currentPage === item.id ? 'text-[#FFD79A]' : 'text-[rgba(255,255,255,0.7)] hover:text-white'}
                `}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A]"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <NebulaGhostButton onClick={() => onNavigate("booking")}>
              Book Reading
            </NebulaGhostButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-[rgba(255,255,255,0.1)]"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`
                    text-left px-4 py-2 rounded-xl transition-colors duration-300
                    ${currentPage === item.id 
                      ? 'text-[#FFD79A] bg-[rgba(255,215,154,0.1)]' 
                      : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.05)]'}
                  `}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </motion.div>
    </header>
  );
}
