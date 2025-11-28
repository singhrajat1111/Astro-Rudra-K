import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-[#0B0B0E] flex items-center justify-center px-6 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#6C33FF]/20 blur-3xl rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4EA3FF]/20 blur-3xl rounded-full" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 max-w-md w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center shadow-2xl"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#4EA3FF] to-[#6C33FF] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#6C33FF]/30"
                >
                    <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <h1 className="text-3xl font-bold text-[#FFD79A] mb-2" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                    Booking Confirmed!
                </h1>

                <p className="text-white/70 mb-8">
                    Your consultation has been successfully scheduled. You will receive a confirmation email shortly with the meeting details.
                </p>

                <div className="space-y-3">
                    <Link to="/">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white font-medium shadow-lg shadow-[#6C33FF]/20 flex items-center justify-center gap-2"
                        >
                            Return to Home
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}