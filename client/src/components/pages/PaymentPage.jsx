import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CreditCard, Lock, ArrowRight } from "lucide-react";
import GlassFormField from "../GlassFormField";

export default function PaymentPage() {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            navigate("/success");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#0B0B0E] pt-24 pb-12 px-4 flex items-center justify-center relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C33FF]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-[400px] relative z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[rgba(255,255,255,0.03)] backdrop-blur-2xl border border-[rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-8 shadow-2xl"
                >
                    <h1 className="text-3xl font-bold text-center text-[#FFD79A] mb-8" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
                        Complete Payment
                    </h1>

                    {/* Order Summary */}
                    <div className="mb-8 bg-black/20 rounded-xl p-4 border border-white/5">
                        <div className="flex justify-between text-white/70 text-sm mb-2">
                            <span>Consultation Fee</span>
                            <span>₹ 1,500</span>
                        </div>
                        <div className="flex justify-between text-white/70 text-sm mb-2">
                            <span>GST (18%)</span>
                            <span>₹ 270</span>
                        </div>
                        <div className="h-px bg-white/10 my-3" />
                        <div className="flex justify-between text-lg font-bold text-[#FFD79A]">
                            <span>Total Amount</span>
                            <span>₹ 1,770</span>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handlePayment} className="space-y-5">
                        <GlassFormField label="Card Number" placeholder="0000 0000 0000 0000" icon={CreditCard} />

                        <div className="grid grid-cols-2 gap-5">
                            <GlassFormField label="Expiry Date" placeholder="MM/YY" />
                            <GlassFormField label="CVV" placeholder="123" type="password" />
                        </div>

                        <GlassFormField label="Cardholder Name" placeholder="John Doe" />

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isProcessing}
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white font-bold shadow-lg shadow-[#6C33FF]/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                        >
                            {isProcessing ? (
                                <span className="flex items-center gap-2">
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Processing...
                                </span>
                            ) : (
                                <>
                                    Pay ₹ 1,770
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </motion.button>
                    </form>

                    {/* Security Note */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40">
                        <Lock className="w-3 h-3" />
                        <span>Secure 256-bit SSL Encrypted Payment</span>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}