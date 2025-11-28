import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CelestialPopup({ open, onClose }) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
        >
          {/* Floating Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="animate-pulse absolute top-10 left-20 w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="animate-pulse absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="animate-ping absolute top-1/2 left-1/3 w-3 h-3 bg-purple-300/40 rounded-full"></div>
          </div>

          {/* Popup Card */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-[#120d27] bg-opacity-95 border border-purple-300/20 p-8 rounded-2xl shadow-[0_0_40px_rgba(120,80,255,0.4)] text-center w-[90%] max-w-md text-white"
          >
            {/* Rotating Planet */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-[0_0_20px_8px_rgba(130,90,255,0.5)]"
            ></motion.div>

            <div className="mt-12 flex flex-col items-center">
              <CheckCircle className="w-16 h-16 text-green-400 drop-shadow-lg" />
              <h2 className="text-2xl font-semibold mt-4 mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your session has been successfully booked.<br/>
                You will receive a confirmation email shortly.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                navigate("/");
              }}
              className="mt-6 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all shadow-lg"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
