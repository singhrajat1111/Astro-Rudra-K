import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import CelestialHeader from "./components/CelestialHeader";
import CelestialFooter from "./components/CelestialFooter";

import LandingPage from "./components/pages/LandingPage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import BookingPage from "./components/pages/BookingPage";
import KundliReadingPage from "./components/pages/KundliReadingPage";
import ContactPage from "./components/pages/ContactPage";
import AstrologerPage from "./components/pages/AstrologerPage";
import LoginPage from "./components/pages/LoginPage";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0B0B0E] relative overflow-x-hidden">
      
      {/* Header */}
      <CelestialHeader />

      {/* Page Transition Logic */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location} key={location.pathname}>

              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/kundli" element={<KundliReadingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/astrologers" element={<AstrologerPage />} />
              <Route path="/login" element={<LoginPage />} />

            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <CelestialFooter />
    </div>
  );
}
