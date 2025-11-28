import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Icons
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";

// Custom UI Components
import Calendar from "../ui/Calendar";
import PricingNodeCard from "../PricingNodeCard";
import EnergyBurstButton from "../EnergyBurstButton";
import GlassFormField from "../GlassFormField";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    concern: ""
  });

  // Pricing Plans
  const pricingPlans = [
    {
      title: "Basic Reading",
      price: "2,999",
      duration: "30 minutes",
      features: [
        "Birth chart analysis",
        "Current planetary positions",
        "Basic predictions",
        "PDF report",
        "Email support"
      ],
      highlighted: false
    },
    {
      title: "Detailed Analysis",
      price: "5,999",
      duration: "60 minutes",
      features: [
        "Comprehensive chart reading",
        "Dasha & transit analysis",
        "Career & relationship guidance",
        "Detailed PDF report",
        "Gemstone recommendations",
        "7-day email support"
      ],
      highlighted: true
    },
    {
      title: "Premium Package",
      price: "11,999",
      duration: "90 minutes",
      features: [
        "In-depth life analysis",
        "Multiple life areas covered",
        "Remedial measures included",
        "Muhurta consultation",
        "Comprehensive report (30+ pages)",
        "30-day priority support",
        "Follow-up session"
      ],
      highlighted: false
    }
  ];

  // Time slot options
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM"
  ];

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/payment");
  };

  return (
    <div className="relative pt-32 pb-20 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] glass-blur">
            <span className="text-sm text-[#6C33FF]">✨ Book Your Reading</span>
          </div>

          <h1 className="text-5xl md:text-6xl mb-6 text-[#FFD79A]">
            Schedule Your Consultation
          </h1>

          <p className="text-lg text-[rgba(255,255,255,0.7)]">
            Choose your plan, select a time, and begin your cosmic journey
          </p>
        </motion.div>

        {/* STEP INDICATOR */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((num, index) => {
              const labels = ["Select Plan", "Date & Time", "Your Details"];
              return (
                <div key={num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                        ${step >= num
                          ? "bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] text-white"
                          : "bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.5)]"
                        }
                      `}
                    >
                      {step > num && <Check className="w-5 h-5" />}
                    </div>
                    <div className="text-xs mt-2 text-[rgba(255,255,255,0.7)]">
                      {labels[index]}
                    </div>
                  </div>

                  {index < 2 && (
                    <div
                      className={`w-16 h-px mx-4 transition-all duration-300 ${step > num
                        ? "bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF]"
                        : "bg-[rgba(255,255,255,0.1)]"
                        }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STEP 1 – SELECT PLAN */}
      {step === 1 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 md:px-[120px] py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingNodeCard
                key={index}
                {...plan}
                delay={index * 0.1}
                onSelect={() => {
                  setSelectedPlan(plan);
                  setStep(2);
                }}
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* STEP 2 – DATE & TIME */}
      {step === 2 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 md:px-[120px] py-12"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-8">
              {/* Calendar */}
              <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8">
                <h3 className="text-xl mb-6 text-[#FFD79A] flex items-center gap-2">
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
              </div>

              {/* Time Slots */}
              <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8">
                <h3 className="text-xl mb-6 text-[#FFD79A] flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Select Time
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        px-4 py-3 rounded-xl transition-all duration-300
                        ${selectedTime === time
                          ? "bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white border-transparent"
                          : "bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] hover:border-[rgba(255,215,154,0.4)]"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right – Booking Summary */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="rounded-3xl bg-gradient-to-br from-[rgba(108,51,255,0.15)] to-[rgba(78,163,255,0.15)] glass-blur border border-[rgba(255,215,154,0.3)] p-8">
                <h3 className="text-2xl mb-6 text-[#FFD79A]">Booking Summary</h3>

                <div className="space-y-4 mb-8">
                  <SummaryItem label="Plan" value={selectedPlan?.title} />
                  <SummaryItem label="Duration" value={selectedPlan?.duration} />
                  <SummaryItem
                    label="Date"
                    value={selectedDate.toLocaleDateString()}
                  />
                  <SummaryItem
                    label="Time"
                    value={selectedTime || "Not selected"}
                  />

                  <div className="golden-thread my-6" />

                  <div className="flex justify-between items-center">
                    <span className="text-xl text-[#FFD79A]">Total:</span>
                    <span className="text-3xl text-[#FFD79A]">
                      ₹{selectedPlan?.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setStep(1)}
                    className="w-full px-8 py-3 rounded-full bg-[rgba(255,255,255,0.06)] glass-blur border border-[rgba(255,255,255,0.1)] text-white hover:border-[rgba(255,215,154,0.4)] transition-all duration-300"
                  >
                    Change Plan
                  </button>

                  <EnergyBurstButton
                    onClick={() => selectedTime && setStep(3)}
                    className="w-full"
                    disabled={!selectedTime}
                  >
                    Continue to Details
                  </EnergyBurstButton>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* STEP 3 – DETAILS FORM */}
      {step === 3 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 md:px-[120px] py-12"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* LEFT – FORM */}
            <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8">
              <h3 className="text-2xl mb-8 text-[#FFD79A]">Your Details</h3>

              <div className="space-y-6">
                <GlassFormField
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => updateForm("name", e.target.value)}
                />

                <GlassFormField
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                />

                <GlassFormField
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => updateForm("phone", e.target.value)}
                />

                <div className="golden-thread my-8" />

                <h4 className="text-lg text-[#FFD79A] mb-4">
                  Birth Details (for chart preparation)
                </h4>

                <GlassFormField
                  label="Date of Birth"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => updateForm("birthDate", e.target.value)}
                />

                <GlassFormField
                  label="Time of Birth"
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => updateForm("birthTime", e.target.value)}
                />

                <GlassFormField
                  label="Place of Birth"
                  type="text"
                  placeholder="City, State, Country"
                  value={formData.birthPlace}
                  onChange={(e) => updateForm("birthPlace", e.target.value)}
                />

                <GlassFormField
                  label="Main Concern / Questions"
                  as="textarea"
                  placeholder="What specific areas would you like guidance on?"
                  value={formData.concern}
                  onChange={(e) => updateForm("concern", e.target.value)}
                />
              </div>
            </div>

            {/* RIGHT – FINAL SUMMARY */}
            <div className="lg:sticky lg:top-32 h-fit space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[rgba(108,51,255,0.15)] to-[rgba(78,163,255,0.15)] glass-blur border border-[rgba(255,215,154,0.3)] p-8">
                <h3 className="text-2xl mb-6 text-[#FFD79A]">Final Summary</h3>

                <div className="space-y-4 mb-6">
                  <SummaryItem label="Plan" value={selectedPlan?.title} />
                  <SummaryItem
                    label="Date"
                    value={selectedDate.toLocaleDateString()}
                  />
                  <SummaryItem label="Time" value={selectedTime} />

                  <div className="golden-thread my-4" />

                  <div className="flex justify-between items-center text-xl">
                    <span className="text-[#FFD79A]">Total Amount:</span>
                    <span className="text-3xl text-[#FFD79A]">
                      ₹{selectedPlan?.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setStep(2)}
                    className="w-full px-8 py-3 rounded-full bg-[rgba(255,255,255,0.06)] glass-blur border border-[rgba(255,255,255,0.1)] text-white hover:border-[rgba(255,215,154,0.4)] transition-all duration-300"
                  >
                    Back to Date & Time
                  </button>

                  <EnergyBurstButton onClick={handleSubmit} className="w-full">
                    Confirm & Pay ₹{selectedPlan?.price}
                  </EnergyBurstButton>
                </div>

                <p className="text-xs text-[rgba(255,255,255,0.5)] mt-4 text-center">
                  Secure payment powered by Razorpay
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}

/* Small Extracted Component: Reusable Summary Item */
function SummaryItem({ label, value }) {
  return (
    <div className="flex justify-between items-start">
      <span className="text-[rgba(255,255,255,0.7)]">{label}:</span>
      <span className="text-white">{value}</span>
    </div>
  );
}