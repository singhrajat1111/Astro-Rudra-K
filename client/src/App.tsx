import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CelestialHeader from "./components/CelestialHeader";
import CelestialFooter from "./components/CelestialFooter";
import LandingPage from "./components/pages/LandingPage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import BookingPage from "./components/pages/BookingPage";
import KundliReadingPage from "./components/pages/KundliReadingPage";
import ContactPage from "./components/pages/ContactPage";
import AstrologerPage from "./components/pages/AstrologerPage";

export type PageName =
  | "home"
  | "about"
  | "services"
  | "booking"
  | "kundli"
  | "contact"
  | "astrologers";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const handleNavigate = (page: any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <LandingPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "services":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "booking":
        return <BookingPage />;
      case "kundli":
        return <KundliReadingPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage />;
      case "astrologers":                
        return <AstrologerPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0B0B0E] flex items-center justify-center overflow-hidden">
        {/* Loading Animation */}
        <div className="relative">
          {/* Rotating Mandala */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#FFD79A" strokeWidth="0.5" opacity="0.3" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#6C33FF" strokeWidth="0.5" opacity="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#4EA3FF" strokeWidth="0.5" opacity="0.7" />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                return (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + Math.cos(angle) * 40}
                    y2={50 + Math.sin(angle) * 40}
                    stroke="#FFD79A"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Center Om Symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl text-[#FFD79A]"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              ॐ
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <p className="text-[#FFD79A] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Aligning the cosmos...
            </p>
          </motion.div>
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.2)] to-[rgba(78,163,255,0.2)] blur-3xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] relative overflow-x-hidden">
      {/* Ambient Background Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.05)] to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[rgba(78,163,255,0.05)] to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[rgba(255,215,154,0.03)] to-transparent blur-3xl" />
      </div>

      {/* Subtle Star Field */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = Math.random() * 2 + 2;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* Header */}
      <CelestialHeader currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content with Page Transitions */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <CelestialFooter />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,215,154,0.3)] flex items-center justify-center hover:border-[rgba(255,215,154,0.6)] hover:scale-110 transition-all duration-300 group"
      >
        <svg
          className="w-5 h-5 text-[#FFD79A] group-hover:translate-y-[-2px] transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}
