import { useState, ChangeEvent, FormEvent, JSX } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import GlassFormField from "../GlassFormField";
import EnergyBurstButton from "../EnergyBurstButton";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactInfoItem {
  icon: JSX.Element;
  title: string;
  detail: string;
  subtext: string;
  color: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "+91 98765 43210",
      subtext: "Mon-Sat, 9 AM - 8 PM IST",
      color: "#6C33FF",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "astro-rudra-k@gmail.com",
      subtext: "Response within 24 hours",
      color: "#4EA3FF",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      detail: "Vedic Astrology Center",
      subtext: "Connaught Place, New Delhi, India",
      color: "#FFD79A",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      detail: "Monday - Saturday",
      subtext: "9:00 AM - 8:00 PM IST",
      color: "#D68A28",
    },
  ];

  const faqs: FAQItem[] = [
    {
      question: "How accurate are your predictions?",
      answer:
        "Our predictions are based on authentic Vedic astrology techniques with over 20 years of experience. While astrology provides guidance, individual free will also plays a role.",
    },
    {
      question: "Do you offer consultations in languages other than English?",
      answer:
        "Yes, we offer consultations in Hindi, English, and Sanskrit. Please mention your preferred language when booking.",
    },
    {
      question: "How long does it take to prepare a birth chart?",
      answer:
        "Astro-Rudra-K provides visually appealing birth chart with speed.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We offer a satisfaction guarantee. If you're not satisfied with the consultation, please contact us within 7 days for resolution.",
    },
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] backdrop-blur-md">
            <span
              className="text-sm text-[#6C33FF]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ✨ Get in Touch
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl mb-6 text-[#FFD79A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contact Us
          </h1>

          <p className="text-lg text-[rgba(255,255,255,0.7)]">
            Have questions? We're here to guide you on your cosmic journey.
          </p>
        </motion.div>

        {/* Background Effects */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-500/10 blur-[120px]" />
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="relative px-6 md:px-[120px] py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] p-6 hover:scale-[1.05] hover:border-[rgba(255,215,154,0.4)] transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: info.color + "22", color: info.color }}
              >
                {info.icon}
              </div>
              <h3
                className="text-lg mb-2 text-[#FFD79A]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {info.title}
              </h3>
              <p className="text-white mb-1">{info.detail}</p>
              <p className="text-sm text-[rgba(255,255,255,0.6)]">
                {info.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= CONTACT FORM & FAQ ================= */}
      <section className="relative px-6 md:px-[120px] py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="rounded-[32px] bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] p-8 md:p-10 shadow-xl shadow-black/20">
              <h2
                className="text-3xl mb-6 text-[#FFD79A]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Send Us a Message
              </h2>

              <p className="text-[rgba(255,255,255,0.7)] mb-8">
                Fill out the form below and we’ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <GlassFormField
                  label="Your Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("name", e.target.value)
                  }
                  required
                />

                <GlassFormField
                  label="Email Address"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("email", e.target.value)
                  }
                  required
                />

                <GlassFormField
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("phone", e.target.value)
                  }
                />

                <GlassFormField
                  label="Subject"
                  type="text"
                  placeholder="What is your inquiry about?"
                  value={formData.subject}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange("subject", e.target.value)
                  }
                  required
                />

                <GlassFormField
                  label="Message"
                  as="textarea"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    handleInputChange("message", e.target.value)
                  }
                  required
                />

                <EnergyBurstButton type="submit" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </EnergyBurstButton>
              </form>
            </div>
          </motion.div>

          {/* FAQ SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-[32px] bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] p-8 shadow-xl shadow-black/20">
              <h3
                className="text-2xl mb-6 text-[#FFD79A]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
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
                    <h4
                      className="text-white mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {faq.question}
                    </h4>

                    <p className="text-sm text-[rgba(255,255,255,0.6)] leading-relaxed">
                      {faq.answer}
                    </p>

                    {index < faqs.length - 1 && (
                      <div className="golden-thread mt-6" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP / LOCATION SECTION ================= */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="rounded-[32px] bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] p-4 overflow-hidden h-[400px] shadow-xl shadow-black/20">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#6C33FF22] to-[#4EA3FF22] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <pattern
                    id="map-pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="20" cy="20" r="1" fill="#FFD79A" />
                    <path
                      d="M20 0 L20 40 M0 20 L40 20"
                      stroke="#FFD79A"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  </pattern>
                  <rect width="400" height="400" fill="url(#map-pattern)" />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                <MapPin className="w-16 h-16 text-[#FFD79A] mx-auto mb-4" />

                <h3
                  className="text-2xl text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
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

      {/* ================= CTA SECTION ================= */}
      <section className="relative px-6 md:px-[120px] py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.25)] backdrop-blur-xl border border-[rgba(255,215,154,0.4)] p-12 text-center overflow-hidden max-w-4xl mx-auto shadow-xl shadow-black/20"
        >
          <div className="relative z-10">
            <h2
              className="text-3xl md:text-4xl mb-4 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ready to Begin Your Journey?
            </h2>

            <p className="text-lg text-[rgba(255,255,255,0.8)] mb-8">
              Book a consultation and discover what the cosmos has in store for
              you.
            </p>

            <EnergyBurstButton>
              <Send className="w-5 h-5" />
              Book Consultation
            </EnergyBurstButton>
          </div>

          {/* Glow Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#6C33FF] opacity-20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#FFD79A] opacity-20 blur-3xl" />
        </motion.div>
      </section>

      {/* ================= WHATSAPP FLOAT BUTTON ================= */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.button>
    </div>
  );
}
