import { useState } from "react";
import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";

import { Calendar } from "../ui/calendar";
import PricingNodeCard from "../PricingNodeCard";
import EnergyBurstButton from "../EnergyBurstButton";
import GlassFormField from "../GlassFormField";

// -------------------------
// TYPES
// -------------------------
interface PricingPlan {
  title: string;
  price: string;
  duration: string;
  features: string[];
  highlighted: boolean;
}

// -------------------------
// PAGE COMPONENT
// -------------------------
export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    concern: "",
  });

  // -------------------------
  // DATA
  // -------------------------
  const pricingPlans: PricingPlan[] = [
    {
      title: "Basic Reading",
      price: "2,999",
      duration: "session",
      features: [
        "Birth chart analysis",
        "Current planetary positions",
        "Basic predictions",
        "No Email support",
      ],
      highlighted: false,
    },
    {
      title: "Detailed Analysis",
      price: "5,999",
      duration: "session",
      features: [
        "Comprehensive chart reading",
        "Dasha & transit analysis",
        "Career & relationship guidance",
        "Detailed PDF report",
        "Gemstone recommendations",
        "PDF Report",
        "7-day email support",
      ],
      highlighted: true,
    },
    {
      title: "Premium Package",
      price: "11,999",
      duration: "session",
      features: [
        "In-depth life analysis",
        "Multiple life areas covered",
        "Remedial measures included",
        "Muhurta consultation",
        "Comprehensive report (30+ pages)",
        "30-day priority support",
        "Follow-up session",
      ],
      highlighted: false,
    },
  ];

  const timeSlots = [
    "09:00 AM-12:00 PM",
    "12:00 PM-02:00 PM",
    "02:00 PM-04:00 PM",
    "04:00 PM-06:00 PM",
  ];

  // -------------------------
  // HANDLERS
  // -------------------------
  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    alert("Booking confirmed! You will receive a confirmation email shortly.");
  };

  // -------------------------
  // RENDER
  // -------------------------
  return (
    <div className="relative pt-32 pb-20 min-h-screen overflow-hidden">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.4 }}
        className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ duration: 1.5, delay: 0.25 }}
        className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"
      />

      {/* -------------------------
         HERO SECTION
      -------------------------- */}
      <section className="relative px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-600/20 border border-purple-600/40 glass-blur">
            <span className="text-sm text-[#6C33FF] font-medium">
              ✨ Book Your Reading
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 text-[#FFD79A] font-bold">
            Schedule Your Consultation
          </h1>

          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose your plan, select a time, and begin your cosmic journey
          </p>
        </motion.div>

        {/* -------------------------
           PROGRESS STEPS (refined)
        -------------------------- */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-6">
            {[1, 2, 3].map((num, index) => {
              const isActive = step >= num;
              const isDone = step > num;

              return (
                <div key={num} className="flex items-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.15 * index }}
                    className={`w-12 h-12 flex items-center justify-center rounded-full 
                      transition-all duration-300 shadow-lg
                      ${
                        isActive
                          ? "bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] text-white shadow-purple-500/40"
                          : "bg-white/5 glass-blur border border-white/10 text-white/50"
                      }`}
                  >
                    {isDone ? <Check className="w-5 h-5" /> : num}
                  </motion.div>

                  {index < 2 && (
                    <div
                      className={`w-20 h-[2px] mx-4 transition-all duration-300 ${
                        isDone
                          ? "bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF]"
                          : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——————————————————————————————————————
         STEP 1 — SELECT PLAN
      ——————————————————————————————————————— */}
      {step === 1 && (
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative px-6 md:px-[120px] py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <PricingNodeCard
                  title={plan.title}
                  price={plan.price}
                  duration={plan.duration}
                  features={plan.features}
                  highlighted={plan.highlighted}
                  delay={index * 0.1}
                  onSelect={() => handlePlanSelect(plan)}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* ——————————————————————————————————————
         STEP 2 — DATE & TIME
      ——————————————————————————————————————— */}
      {step === 2 && (
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative px-6 md:px-[120px] py-14"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT SIDE */}
            <div className="space-y-8">

              {/* Calendar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-white/5 glass-blur border border-white/10 p-8 shadow-xl shadow-black/20"
              >
                <h3 className="text-xl mb-6 text-[#FFD79A] font-semibold flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Select Date
                </h3>

                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-xl"
                />
              </motion.div>

              {/* Time Slots */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-3xl bg-white/5 glass-blur border border-white/10 p-8 shadow-xl shadow-black/20"
              >
                <h3 className="text-xl mb-6 text-[#FFD79A] font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Select Time
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`px-4 py-3 rounded-xl transition-all duration-300 text-sm shadow-md
                        ${
                          selectedTime === time
                            ? "bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white shadow-purple-600/30"
                            : "bg-white/5 glass-blur border border-white/10 text-white/75 hover:border-[#FFD79A]/40"
                        }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Booking Summary */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <div className="rounded-3xl bg-gradient-to-br from-purple-700/20 to-blue-500/20 glass-blur border border-yellow-200/30 p-8 shadow-xl shadow-black/20">
                <h3 className="text-2xl mb-6 text-[#FFD79A] font-semibold">Booking Summary</h3>

                {/* Summary Info */}
                <div className="space-y-4 mb-8 text-white/80">
                  <SummaryRow label="Plan" value={selectedPlan?.title} />
                  <SummaryRow label="Duration" value={selectedPlan?.duration} />
                  <SummaryRow label="Date" value={selectedDate?.toLocaleDateString()} />
                  <SummaryRow label="Time" value={selectedTime || "Not selected"} />

                  <div className="golden-thread my-6" />

                  <div className="flex justify-between items-center">
                    <span className="text-xl text-[#FFD79A] font-semibold">Total:</span>
                    <span className="text-3xl text-[#FFD79A] font-bold">₹{selectedPlan?.price}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setStep(1)}
                    className="w-full px-8 py-3 rounded-full bg-white/5 glass-blur border border-white/10 text-white hover:border-yellow-200/40 transition-all duration-300"
                  >
                    Change Plan
                  </button>

                  <EnergyBurstButton
                    onClick={() => setStep(3)}
                    className="w-full"
                    disabled={!selectedTime}
                  >
                    Continue to Details
                  </EnergyBurstButton>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* ——————————————————————————————————————
         STEP 3 — PERSONAL DETAILS
      ——————————————————————————————————————— */}
      {step === 3 && (
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative px-6 md:px-[120px] py-14"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* DETAILS FORM */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-white/5 glass-blur border border-white/10 p-8 shadow-xl shadow-black/20"
            >
              <h3 className="text-2xl mb-8 text-[#FFD79A] font-semibold">Your Details</h3>

              <div className="space-y-6">
                <GlassFormField label="Full Name" type="text" placeholder="Enter your full name"
                  value={formData.name} onChange={(e: { target: { value: string; }; }) => handleInputChange("name", e.target.value)} required />

                <GlassFormField label="Email Address" type="email" placeholder="your.email@example.com"
                  value={formData.email} onChange={(e: { target: { value: string; }; }) => handleInputChange("email", e.target.value)} required />

                <GlassFormField label="Phone Number" type="tel" placeholder="+91 98765 43210"
                  value={formData.phone} onChange={(e: { target: { value: string; }; }) => handleInputChange("phone", e.target.value)} required />

                <div className="golden-thread my-8" />

                <h4 className="text-lg text-[#FFD79A] mb-4 font-semibold">Birth Details</h4>

                <GlassFormField label="Date of Birth" type="date"
                value={formData.birthDate} onChange={(e: { target: { value: string; }; }) => handleInputChange("birthDate", e.target.value)} required placeholder={undefined} />

                <GlassFormField label="Time of Birth" type="time"
                value={formData.birthTime} onChange={(e: { target: { value: string; }; }) => handleInputChange("birthTime", e.target.value)} required placeholder={undefined} />

                <GlassFormField label="Place of Birth" type="text" placeholder="City, State, Country"
                  value={formData.birthPlace} onChange={(e: { target: { value: string; }; }) => handleInputChange("birthPlace", e.target.value)} required />

                <GlassFormField
                  label="Main Concern / Questions" as="textarea"
                  placeholder="What specific areas would you like guidance on?"
                  value={formData.concern}
                  onChange={(e: { target: { value: string; }; }) => handleInputChange("concern", e.target.value)}
                />
              </div>
            </motion.div>

            {/* FINAL SUMMARY */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:sticky lg:top-32 h-fit space-y-6"
            >
              <div className="rounded-3xl bg-gradient-to-br from-purple-700/20 to-blue-500/20 glass-blur border border-yellow-200/30 p-8 shadow-xl shadow-black/20">
                <h3 className="text-2xl mb-6 text-[#FFD79A] font-semibold">Final Summary</h3>

                <div className="space-y-4 mb-6 text-white/80">
                  <SummaryRow label="Plan" value={selectedPlan?.title} />
                  <SummaryRow label="Date" value={selectedDate?.toLocaleDateString()} />
                  <SummaryRow label="Time" value={selectedTime} />

                  <div className="golden-thread my-4" />

                  <div className="flex justify-between items-center text-xl">
                    <span className="text-[#FFD79A] font-semibold">Total Amount:</span>
                    <span className="text-3xl text-[#FFD79A] font-bold">₹{selectedPlan?.price}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setStep(2)}
                    className="w-full px-8 py-3 rounded-full bg-white/5 glass-blur border border-white/10 text-white hover:border-yellow-200/40 transition-all duration-300"
                  >
                    Back to Date & Time
                  </button>

                  <EnergyBurstButton onClick={handleSubmit} className="w-full">
                    Confirm & Pay ₹{selectedPlan?.price}
                  </EnergyBurstButton>
                </div>

                <p className="text-xs text-white/50 mt-4 text-center">
                  Secure payment powered by Razorpay
                </p>
              </div>

              {/* BENEFITS */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl bg-white/5 glass-blur border border-white/10 p-6"
              >
                <h4 className="text-lg mb-4 text-[#FFD79A] font-semibold">What You'll Receive:</h4>

                <ul className="space-y-2">
                  {selectedPlan?.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-[#6C33FF] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </div>
  );
}

// —————————————————————————————————————————
// SMALL SUB COMPONENT FOR REPEATED ROWS
// —————————————————————————————————————————
function SummaryRow({ label, value }:{ label:string; value:any }) {
  return (
    <div className="flex justify-between">
      <span className="text-white/70 text-sm">{label}:</span>
      <span className="text-white text-sm">{value}</span>
    </div>
  );
}
