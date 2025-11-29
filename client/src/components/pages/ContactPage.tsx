import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import GlassFormField from "../GlassFormField";
import EnergyBurstButton from "../EnergyBurstButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "+91 98765 43210",
      subtext: "Mon-Sat, 9 AM - 8 PM IST",
      color: "#6C33FF"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "contact@astrorudrak.com",
      subtext: "Response within 24 hours",
      color: "#4EA3FF"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      detail: "Vedic Astrology Center",
      subtext: "Connaught Place, New Delhi, India",
      color: "#FFD79A"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      detail: "Monday - Saturday",
      subtext: "9:00 AM - 8:00 PM IST",
      color: "#D68A28"
    }
  ];

  const faqs = [
    {
      question: "How accurate are your predictions?",
      answer: "Our predictions are based on authentic Vedic astrology techniques with over 20 years of experience. While astrology provides guidance, individual free will also plays a role."
    },
    {
      question: "Do you offer consultations in languages other than English?",
      answer: "Yes, we offer consultations in Hindi, English, and Sanskrit. Please mention your preferred language when booking."
    },
    {
      question: "How long does it take to prepare a birth chart?",
      answer: "Birth chart preparation typically takes 2-3 days. For urgent consultations, expedited service is available with additional charges."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "We offer a satisfaction guarantee. If you're not satisfied with the consultation, please contact us within 7 days for resolution."
    }
  ];

  return (
    <div className="relative pt-32 pb-20">
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
              ✨ Get in Touch
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Contact Us
          </h1>
          
          <p className="text-lg text-[rgba(255,255,255,0.7)]">
            Have questions? We're here to guide you on your cosmic journey
          </p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.1)] to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-[rgba(78,163,255,0.1)] to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Contact Info Cards */}
      <section className="relative px-6 md:px-[120px] py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-6 hover:border-[rgba(255,215,154,0.4)] transition-all duration-300 hover:scale-105"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: info.color + '33', color: info.color }}
              >
                {info.icon}
              </div>
              <h3 className="text-lg mb-2 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {info.title}
              </h3>
              <p className="text-white mb-1">{info.detail}</p>
              <p className="text-sm text-[rgba(255,255,255,0.6)]">{info.subtext}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="relative px-6 md:px-[120px] py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[32px] bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8 md:p-10">
              <h2 className="text-3xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Send Us a Message
              </h2>
              <p className="text-[rgba(255,255,255,0.7)] mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <GlassFormField
                  label="Your Name"
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
                />
                <GlassFormField
                  label="Subject"
                  type="text"
                  placeholder="What is your inquiry about?"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                />
                <GlassFormField
                  label="Message"
                  as="textarea"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />

                <EnergyBurstButton type="submit" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </EnergyBurstButton>
              </form>
            </div>
          </motion.div>

          {/* Right Column - FAQs & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.2)] glass-blur border border-[rgba(255,215,154,0.4)] p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Chat on WhatsApp
              </h3>
              <p className="text-[rgba(255,255,255,0.8)] mb-6">
                Get instant responses to your queries
              </p>
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:scale-105 transition-transform duration-300">
                Start WhatsApp Chat
              </button>
            </div>

            {/* FAQs */}
            <div className="rounded-[32px] bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-8">
              <h3 className="text-2xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {faq.question}
                    </h4>
                    <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                      {faq.answer}
                    </p>
                    {index < faqs.length - 1 && <div className="golden-thread mt-6" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="rounded-[32px] bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-4 overflow-hidden h-[400px]">
            {/* Map Placeholder with Cosmic Design */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[rgba(108,51,255,0.1)] to-[rgba(78,163,255,0.1)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <pattern id="map-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="#FFD79A" />
                    <path d="M20 0 L20 40 M0 20 L40 20" stroke="#FFD79A" strokeWidth="0.5" opacity="0.3" />
                  </pattern>
                  <rect width="400" height="400" fill="url(#map-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10 text-center">
                <MapPin className="w-16 h-16 text-[#FFD79A] mx-auto mb-4" />
                <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Vedic Astrology Center
                </h3>
                <p className="text-[rgba(255,255,255,0.7)]">
                  Connaught Place, New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.2)] glass-blur border border-[rgba(255,215,154,0.4)] p-12 text-center overflow-hidden max-w-4xl mx-auto"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.8)] mb-8">
              Book a consultation and discover what the cosmos has in store for you
            </p>
          </div>
          
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] opacity-20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD79A] to-[#D68A28] opacity-20 blur-3xl" />
        </motion.div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.button>
    </div>
  );
}
