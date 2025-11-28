import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import NebulaGhostButton from "./NebulaGhostButton";

export default function CelestialHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/kundli", label: "Kundli Reading" },
    { path: "/astrologers", label: "Astrologers" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-[120px]">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-full bg-[rgba(11,11,14,0.8)] backdrop-blur-xl border border-white/10 px-6 py-3"
      >
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#FFD79A]" />
            </div>
            <span className="text-xl text-[#FFD79A]" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              Astro Rudra K
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  text-sm relative transition duration-300
                  ${isActive(item.path) ? "text-[#FFD79A]" : "text-white/70 hover:text-white"}
                `}
              >
                {item.label}

                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/auth">
              <NebulaGhostButton>Login</NebulaGhostButton>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    px-4 py-2 rounded-xl text-sm
                    ${isActive(item.path)
                      ? "text-[#FFD79A] bg-[#FFD79A]/10"
                      : "text-white/70 hover:bg-white/5"}
                  `}
                >
                  {item.label}
                </Link>
              ))}

              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <NebulaGhostButton className="w-full">
                  Login
                </NebulaGhostButton>
              </Link>
            </div>
          </motion.nav>
        )}
      </motion.div>
    </header>
  );
}