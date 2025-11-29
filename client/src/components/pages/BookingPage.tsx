import { useState } from "react";
import { motion } from "motion/react";
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";
import { Calendar } from "../ui/calendar";
import PricingNodeCard from "../PricingNodeCard";
import EnergyBurstButton from "../EnergyBurstButton";
import GlassFormField from "../GlassFormField";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [step, setStep] = useState(1); // 1: Select Plan, 2: Date/Time, 3: Details
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    concern: ""
  });

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

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM"
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Mock submission
    alert("Booking confirmed! You will receive a confirmation email shortly.");
  };

  return (
    <div className="relative pt-32 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] glass-blur">
            <span className="text-sm text-[#6C33FF]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              ✨ Book Your Reading
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Schedule Your Consultation
          </h1>
          
          <p className="text-lg text-[rgba(255,255,255,0.7)]">
            Choose your plan, select a time, and begin your cosmic journey
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4">
            {[
              { num: 1, label: "Select Plan" },
              { num: 2, label: "Date & Time" },
              { num: 3, label: "Your Details" }
            ].map((stepItem, index) => (
              <div key={stepItem.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${step >= stepItem.num 
                      ? 'bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] text-white' 
                      : 'bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.5)]'}
                  `}>
                    {step > stepItem.num ? <Check className="w-5 h-5" /> : stepItem.num}
                  </div>
                  <div className="text-xs mt-2 text-[rgba(255,255,255,0.7)] text-center">
                    {stepItem.label}
                  </div>
                </div>
                {index < 2 && (
                  <div className={`w-16 h-px mx-4 transition-all duration-300 ${
                    step > stepItem.num ? 'bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF]' : 'bg-[rgba(255,255,255,0.1)]'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 1: Select Plan */}
      {step === 1 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative px-6 md:px-[120px] py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingNodeCard
                key={index}
                title={plan.title}
                price={plan.price}
                duration={plan.duration}
                features={plan.features}
                highlighted={plan.highlighted}
                delay={index * 0.1}
                onSelect={() => handlePlanSelect(plan)}
              />
            ))}
          </div>
        </motion.section>
      )}

      {/* Step 2: Date & Time Selection */}
      {step === 2 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative px-6 md:px-[120px] py-12"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Calendar & Time Slots */}
            <div className="space-y-8">
              {/* Calendar */}
              <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8">
                <h3 className="text-xl mb-6 text-[#FFD79A] flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <CalendarIcon className="w-5 h-5" />
                  Select Date
                </h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-xl"
                  disabled={(date) => date < new Date()}
                />
              </div>

              {/* Time Slots */}
              <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8">
                <h3 className="text-xl mb-6 text-[#FFD79A] flex items-center gap-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  <Clock className="w-5 h-5" />
                  Select Time
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`
                        px-4 py-3 rounded-xl transition-all duration-300
                        ${selectedTime === time
                          ? 'bg-gradient-to-r from-[#6C33FF] to-[#4EA3FF] text-white border-transparent'
                          : 'bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] hover:border-[rgba(255,215,154,0.4)]'}
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Selected Plan Summary */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="rounded-3xl bg-gradient-to-br from-[rgba(108,51,255,0.15)] to-[rgba(78,163,255,0.15)] glass-blur border border-[rgba(255,215,154,0.3)] p-8">
                <h3 className="text-2xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Booking Summary
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-start">
                    <span className="text-[rgba(255,255,255,0.7)]">Plan:</span>
                    <span className="text-white">{selectedPlan?.title}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[rgba(255,255,255,0.7)]">Duration:</span>
                    <span className="text-white">{selectedPlan?.duration}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[rgba(255,255,255,0.7)]">Date:</span>
                    <span className="text-white">{selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-[rgba(255,255,255,0.7)]">Time:</span>
                    <span className="text-white">{selectedTime || "Not selected"}</span>
                  </div>
                  
                  <div className="golden-thread my-6" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Total:
                    </span>
                    <span className="text-3xl text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      ₹{selectedPlan?.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setStep(1)}
                    className="w-full px-8 py-3 rounded-full bg-[rgba(255,255,255,0.06)] glass-blur border border-[rgba(255,255,255,0.1)] text-white hover:border-[rgba(255,215,154,0.4)] transition-all duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
            </div>
          </div>
        </motion.section>
      )}

      {/* Step 3: Personal Details */}
      {step === 3 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative px-6 md:px-[120px] py-12"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Form */}
            <div className="rounded-3xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8">
              <h3 className="text-2xl mb-8 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Your Details
              </h3>

              <div className="space-y-6">
                <GlassFormField
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
                <GlassFormField
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
                <GlassFormField
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />

                <div className="golden-thread my-8" />

                <h4 className="text-lg text-[#FFD79A] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Birth Details (for chart preparation)
                </h4>

                <GlassFormField
                  label="Date of Birth"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange("birthDate", e.target.value)}
                  required
                />
                <GlassFormField
                  label="Time of Birth"
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => handleInputChange("birthTime", e.target.value)}
                  required
                />
                <GlassFormField
                  label="Place of Birth"
                  type="text"
                  placeholder="City, State, Country"
                  value={formData.birthPlace}
                  onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                  required
                />
                <GlassFormField
                  label="Main Concern / Questions"
                  as="textarea"
                  placeholder="What specific areas would you like guidance on?"
                  value={formData.concern}
                  onChange={(e) => handleInputChange("concern", e.target.value)}
                />
              </div>
            </div>

            {/* Right: Summary & Payment */}
            <div className="lg:sticky lg:top-32 h-fit space-y-6">
              {/* Booking Summary */}
              <div className="rounded-3xl bg-gradient-to-br from-[rgba(108,51,255,0.15)] to-[rgba(78,163,255,0.15)] glass-blur border border-[rgba(255,215,154,0.3)] p-8">
                <h3 className="text-2xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Final Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.7)]">Plan:</span>
                    <span className="text-white">{selectedPlan?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.7)]">Date:</span>
                    <span className="text-white">{selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[rgba(255,255,255,0.7)]">Time:</span>
                    <span className="text-white">{selectedTime}</span>
                  </div>
                  
                  <div className="golden-thread my-4" />
                  
                  <div className="flex justify-between items-center text-xl">
                    <span className="text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      Total Amount:
                    </span>
                    <span className="text-3xl text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      ₹{selectedPlan?.price}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setStep(2)}
                    className="w-full px-8 py-3 rounded-full bg-[rgba(255,255,255,0.06)] glass-blur border border-[rgba(255,255,255,0.1)] text-white hover:border-[rgba(255,215,154,0.4)] transition-all duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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

              {/* Benefits Reminder */}
              <div className="rounded-2xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-6">
                <h4 className="text-lg mb-4 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  What You'll Receive:
                </h4>
                <ul className="space-y-2">
                  {selectedPlan?.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[rgba(255,255,255,0.7)]">
                      <Check className="w-4 h-4 text-[#6C33FF] mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
}
