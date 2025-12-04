import { motion } from "motion/react";
import { Award, BookOpen, Globe, Star, Sparkles, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EnergyBurstButton from "../EnergyBurstButton";

export default function AboutPage() {
  const navigate = useNavigate();

  const achievements = [
    { icon: <Award className="w-6 h-6" />, text: "Master's in Vedic Astrology", color: "#FFD79A" },
    { icon: <Users className="w-6 h-6" />, text: "10,000+ Consultations", color: "#6C33FF" },
    { icon: <Globe className="w-6 h-6" />, text: "Global Recognition", color: "#4EA3FF" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Published Author", color: "#D68A28" }
  ];

  const timeline = [
    { year: "2003", title: "Journey Begins", description: "Started learning Vedic astrology under renowned Guru Pandit Sharma" },
    { year: "2008", title: "Professional Practice", description: "Established first consultation center in Delhi" },
    { year: "2015", title: "International Recognition", description: "Invited to speak at World Astrology Conference" },
    { year: "2020", title: "Digital Expansion", description: "Launched online consultations reaching global clients" },
    { year: "2024", title: "Master Astrologer", description: "Over 20 years of experience guiding thousands" }
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
    <div className="relative pt-32 pb-20 overflow-hidden">

      {/* Ambient Page Glows */}
      <motion.div
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-purple-700/30 blur-[150px] rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 8, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"
      />

      {/* Hero Section */}
      <section className="relative px-6 md:px-[120px] py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-purple-700/25 border border-purple-600/40 glass-blur shadow-md shadow-purple-900/30">
              <span className="text-sm text-[#6C33FF] font-medium">✨ About the Master</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FFD79A]">
              Astro Rudra K
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A luminary in Vedic astrology, bridging ancient wisdom with modern insights
            </p>
          </motion.div>

          {/* Glass Orb Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto mb-24"
          >
            <div className="relative rounded-[32px] bg-white/5 glass-blur border border-yellow-200/30 p-10 md:p-14 shadow-xl shadow-black/20 overflow-hidden">

              {/* Soft gradient glow inside */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-400/20 blur-3xl" />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* Photo Orb */}
                <div className="relative mx-auto">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/40 via-blue-500/20 to-yellow-300/30 glass-blur border-2 border-yellow-200/40 overflow-hidden shadow-lg flex items-center justify-center">
                    <div className="text-8xl opacity-80">🧘‍♂️</div>
                  </div>

                  {/* Floating Achievement Badges */}
                  {achievements.map((ach, i) => {
                    const angle = (i * 90 * Math.PI) / 180;
                    const x = 50 + Math.cos(angle) * 60;
                    const y = 50 + Math.sin(angle) * 60;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                        className="absolute w-12 h-12 rounded-xl bg-white/10 glass-blur border border-yellow-200/30 flex items-center justify-center cursor-pointer hover:scale-125 transition-all group"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          color: ach.color
                        }}
                      >
                        {ach.icon}

                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="px-3 py-1.5 text-xs rounded-xl bg-black/70 border border-yellow-200/30 text-white shadow-lg">
                            {ach.text}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bio */}
                <div className="space-y-4">
                  <h3 className="text-2xl text-[#FFD79A] font-semibold mb-4">
                    The Journey of a Master
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    With over two decades of dedicated practice, Astro Rudra K has become a beacon of light for thousands seeking cosmic guidance.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    Blending ancient Vedic knowledge with intuitive depth, he offers profound readings admired across the globe.
                  </p>

                  <p className="text-white/70 leading-relaxed">
                    His work has been featured in international astrology conferences, global summits, and spiritual publications.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative px-6 md:px-[120px] py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFD79A]">
              Areas of Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/5 glass-blur border border-white/10 p-5 text-center hover:border-yellow-200/40 hover:scale-[1.06] transition-all duration-300"
              >
                <Star className="w-6 h-6 text-[#FFD79A] mx-auto mb-2" />
                <p className="text-sm text-white/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative px-6 md:px-[120px] py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFD79A]">
              Journey Timeline
            </h2>
          </motion.div>

          <div className="relative">

            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 via-blue-500 to-yellow-300 rounded-full" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-14 md:mb-16 ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+3rem)]"
                    : "md:pl-[calc(50%+3rem)] md:ml-auto"
                } pl-20 md:pl-0`}
              >
                {/* Node */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-8 md:right-0" : "left-8 md:left-0"
                  } w-8 h-8 rounded-full bg-gradient-to-br from-[#6C33FF] to-[#4EA3FF] border-[5px] border-black flex items-center justify-center shadow-md`}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="rounded-2xl bg-white/5 glass-blur border border-white/10 p-6 hover:border-yellow-200/40 transition-all duration-300">
                  <div className="text-2xl text-[#FFD79A] font-semibold mb-2">{item.year}</div>
                  <h4 className="text-xl text-white mb-2">{item.title}</h4>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 md:px-[120px] py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] bg-gradient-to-br from-purple-700/20 via-blue-500/20 to-yellow-300/20 glass-blur border border-yellow-200/40 p-12 text-center overflow-hidden max-w-4xl mx-auto shadow-xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Wisdom of the Stars
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Begin your journey to cosmic clarity with a personalized consultation
            </p>

            <EnergyBurstButton onClick={() => navigate("/booking")}>
              <Sparkles className="w-5 h-5" />
              Book Consultation
            </EnergyBurstButton>
          </div>

          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute top-10 left-10 w-36 h-36 rounded-full bg-purple-700/30 blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ repeat: Infinity, duration: 6, delay: 0.4 }}
            className="absolute bottom-10 right-10 w-36 h-36 rounded-full bg-yellow-300/30 blur-3xl"
          />
        </motion.div>
      </section>
    </div>
  );
}
