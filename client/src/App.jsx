import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import CelestialHeader from "./components/CelestialHeader";
import CelestialFooter from "./components/CelestialFooter";
import AstrologerDetailsPage from "./components/pages/AstrologerDetailsPage";
import LandingPage from "./components/pages/LandingPage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import BookingPage from "./components/pages/BookingPage";
import KundliReadingPage from "./components/pages/KundliReadingPage";
import ContactPage from "./components/pages/ContactPage";
import AuthPage from "./components/pages/AuthPage";
import AstrologersPage from "./components/pages/AstrologersPage";
import PaymentPage from "./components/pages/PaymentPage";
import SuccessPage from "./components/pages/SuccessPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Initial Loader
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <InitialLoader />;

  return (
    <div className="min-h-screen bg-[#0B0B0E] relative overflow-x-hidden">

      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Header */}
      <CelestialHeader />

      {/* Page Transitions */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              {/* Main pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/kundli" element={<KundliReadingPage />} />

              {/* Consultation Flow */}
              <Route path="/astrologers" element={<AstrologersPage />} />
              <Route path="/astrologers/:id" element={<AstrologerDetailsPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/success" element={<SuccessPage />} />

              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <CelestialFooter />

      {/* Scroll-to-top Button */}
      <ScrollToTopButton />
    </div >
  );
}

//
// -----------------------------------------------------
// 🔵 INITIAL LOADER
// -----------------------------------------------------
//
function InitialLoader() {
  return (
    <div className="min-h-screen bg-[#0B0B0E] flex items-center justify-center overflow-hidden relative">

      {/* Rotating Mandala */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="relative w-32 h-32"
      >
        <MandalaSVG />
      </motion.div>

      {/* Om Symbol */}
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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute -bottom-12 text-[#FFD79A] text-sm"
      >
        Aligning the cosmos...
      </motion.p>

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.2)] to-[rgba(78,163,255,0.2)] blur-3xl mx-auto mt-10" />
      </div>
    </div>
  );
}


function MandalaSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="40" fill="none" stroke="#FFD79A" strokeWidth="0.5" opacity="0.3" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#6C33FF" strokeWidth="0.5" opacity="0.5" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#4EA3FF" strokeWidth="0.5" opacity="0.7" />

      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + Math.cos(a) * 40}
            y2={50 + Math.sin(a) * 40}
            stroke="#FFD79A"
            strokeWidth="0.5"
            opacity="0.5"
          />
        );
      })}
    </svg>
  );
}


function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">

      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#6C33FF]/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#4EA3FF]/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#FFD79A]/5 blur-3xl" />

      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}


function ScrollToTopButton() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,215,154,0.3)] flex items-center justify-center hover:border-[rgba(255,215,154,0.6)] hover:scale-110 transition-all duration-300 group"
    >
      <svg
        className="w-5 h-5 text-[#FFD79A] group-hover:-translate-y-1 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
}