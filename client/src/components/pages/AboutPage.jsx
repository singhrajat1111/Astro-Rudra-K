import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Award, BookOpen, Globe, Star, Sparkles, TrendingUp, Users } from "lucide-react";
import EnergyBurstButton from "../EnergyBurstButton";

export default function AboutPage() {
  const navigate = useNavigate();

  const achievements = [
    { icon: <Award className="w-6 h-6" />, text: "Master's in Vedic Astrology", color: "#FFD79A" },
    { icon: <Users className="w-6 h-6" />, text: "10,000+ Consultations", color: "#6C33FF" },
    { icon: <Globe className="w-6 h-6" />, text: "Global Recognition", color: "#4EA3FF" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Published Author", color: "#D68A28" },
  ];

  const timeline = [
    { year: "2003", title: "Journey Begins", description: "Started learning Vedic astrology under renowned Guru Pandit Sharma" },
    { year: "2008", title: "Professional Practice", description: "Established first consultation center in Delhi" },
    { year: "2015", title: "International Recognition", description: "Invited to speak at World Astrology Conference" },
    { year: "2020", title: "Digital Expansion", description: "Launched online consultations reaching global clients" },
    { year: "2024", title: "Master Astrologer", description: "Over 20 years of experience guiding thousands" },
  ];

  const expertise = [
    "Vedic Birth Chart Analysis",
    "Predictive Astrology",
    "Gemstone Therapy",
    "Vastu Consultation",
    "Muhurta (Auspicious Timing)",
    "Remedial Measures",
    "Career & Business Guidance",
    "Relationship Compatibility"
  ];

  return (
    <div className="relative pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-[rgba(108,51,255,0.2)] border border-[rgba(108,51,255,0.4)] glass-blur">
              <span className="text-sm text-[#6C33FF]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                ✨ About the Master
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Astro Rudra K
            </h1>
            <p className="text-xl text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
              A luminary in Vedic astrology, bridging ancient wisdom with modern insights
            </p>
          </motion.div>

          {/* Astrologer Card in Glass Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto mb-20"
          >
            <div className="relative rounded-[32px] bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,215,154,0.3)] p-8 md:p-12 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.2)] to-[rgba(78,163,255,0.2)] blur-3xl" />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Photo Orb */}
                <div className="relative mx-auto">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[rgba(108,51,255,0.3)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.3)] glass-blur border-2 border-[rgba(255,215,154,0.4)] overflow-hidden golden-glow flex items-center justify-center">
                    <div className="text-8xl">🧘‍♂️</div>
                  </div>

                  {/* Floating Achievement Badges */}
                  {achievements.map((achievement, i) => {
                    const angle = (i * 90 * Math.PI) / 180;
                    const x = 50 + Math.cos(angle) * 60;
                    const y = 50 + Math.sin(angle) * 60;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="absolute w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.06)] glass-blur border border-[rgba(255,215,154,0.3)] flex items-center justify-center hover:scale-125 transition-transform cursor-pointer group"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                          color: achievement.color
                        }}
                      >
                        {achievement.icon}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                          <div className="bg-[rgba(11,11,14,0.95)] glass-blur border border-[rgba(255,215,154,0.3)] rounded-xl px-3 py-1.5 text-xs text-white">
                            {achievement.text}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bio */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#FFD79A] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    The Journey of a Master
                  </h3>
                  <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                    With over two decades of dedicated practice, Astro Rudra K has become a beacon of light for thousands seeking cosmic guidance. His journey began under the tutelage of renowned masters in the ancient city of Varanasi.
                  </p>
                  <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                    Combining traditional Vedic techniques with intuitive insights, he offers profound readings that have transformed lives across the globe. His approach is holistic, compassionate, and deeply rooted in ancient wisdom.
                  </p>
                  <p className="text-[rgba(255,255,255,0.7)] leading-relaxed">
                    Featured in international astrology conferences and media, Rudra K continues to illuminate paths and decode destinies with remarkable accuracy and spiritual depth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Areas of Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-4 text-center hover:border-[rgba(255,215,154,0.4)] transition-all duration-300 hover:scale-105"
              >
                <Star className="w-6 h-6 text-[#FFD79A] mx-auto mb-2" />
                <p className="text-sm text-[rgba(255,255,255,0.8)]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6 text-[#FFD79A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Journey Timeline
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6C33FF] via-[#4EA3FF] to-[#FFD79A]" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[calc(50%+3rem)]' : 'md:pl-[calc(50%+3rem)] md:ml-auto'
                  } pl-20 md:pl-0`}
              >
                {/* Timeline Node */}
                <div className={`absolute top-0 ${index % 2 === 0 ? 'left-8 md:right-0' : 'left-8 md:left-0'
                  } w-8 h-8 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] border-4 border-[#0B0B0E] flex items-center justify-center`}>
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Content Card */}
                <div className="rounded-2xl bg-[rgba(255,255,255,0.04)] glass-blur border border-[rgba(255,255,255,0.1)] p-6 hover:border-[rgba(255,215,154,0.4)] transition-all duration-300">
                  <div className="text-2xl text-[#FFD79A] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.year}
                  </div>
                  <h4 className="text-xl mb-2 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-[rgba(255,255,255,0.7)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-[rgba(108,51,255,0.2)] via-[rgba(78,163,255,0.2)] to-[rgba(255,215,154,0.2)] glass-blur border border-[rgba(255,215,154,0.4)] p-12 text-center overflow-hidden max-w-4xl mx-auto"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Experience the Wisdom of the Stars
            </h2>
            <p className="text-lg text-[rgba(255,255,255,0.8)] mb-8 max-w-2xl mx-auto">
              Begin your journey to cosmic clarity with a personalized consultation
            </p>
            <EnergyBurstButton onClick={() => navigate("/astrologers")}>
              <Sparkles className="w-5 h-5" />
              Book Consultation
            </EnergyBurstButton>
          </div>

          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] opacity-20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#FFD79A] to-[#D68A28] opacity-20 blur-3xl" />
        </motion.div>
      </section>
    </div>
  );
}