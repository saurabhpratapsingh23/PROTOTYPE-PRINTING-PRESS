import { motion } from "framer-motion";
import CountUp from "react-countup";

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Started as a small local print shop, crafting traditional offset prints and elegant wedding invitations.",
  },
  {
    year: "2018",
    title: "Digital Expansion",
    description:
      "Adopted cutting-edge digital printing to deliver faster, more customizable results for modern clients.",
  },
  {
    year: "2021",
    title: "Nationwide Reach",
    description:
      "Extended our presence across India — bringing premium prints and designs to every major city.",
  },
  {
    year: "2024",
    title: "Creative Innovation",
    description:
      "Launched eco-friendly printing and bespoke packaging services for high-end brands and events.",
  },
];

const stats = [
  { number: 10, suffix: "+", label: "Years of Craftsmanship" },
  { number: 1000, suffix: "+", label: "Delighted Clients" },
  { number: 50000, suffix: "+", label: "Prints Perfected" },
  { number: 50, suffix: "+", label: "Creative Minds at Work" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[#0B0C10] via-[#1C1C1E] to-[#0B0C10] text-center text-[#F5F5F5]"
    >
      {/* Subtle gold shimmer background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 text-accent"
      >
        Our Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-2 border-[#D4AF37]/30 pl-6 space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#151515]/60 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)] 
                       rounded-xl p-6 md:p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 
                       transition-all duration-300"
          >
            <div className="absolute -left-5 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] border-4 border-[#0B0C10] shadow-[0_0_10px_rgba(212,175,55,0.6)]"></div>
            <h3 className="text-2xl font-bold text-accent">{milestone.year}</h3>
            <h4 className="text-lg font-semibold text-[#E0E0E0] mt-2">{milestone.title}</h4>
            <p className="text-[#C7C7C7] mt-3 leading-relaxed">
              {milestone.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#151515]/70 backdrop-blur-md p-8 rounded-xl 
                       shadow-[0_0_20px_rgba(212,175,55,0.15)] border border-[#D4AF37]/20"
          >
            <h3 className="text-4xl font-extrabold text-accent mb-2">
              <CountUp end={stat.number} duration={2} />{stat.suffix}
            </h3>
            <p className="text-[#E0E0E0] font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
