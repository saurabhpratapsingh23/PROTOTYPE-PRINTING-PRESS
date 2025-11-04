import { motion } from "framer-motion";
import CountUp from "react-countup";

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Started as a small local print shop, focusing on traditional offset printing for small businesses and wedding cards.",
  },
  {
    year: "2018",
    title: "Digital Expansion",
    description:
      "Adopted modern digital printing technologies to deliver faster and more customized results.",
  },
  {
    year: "2021",
    title: "Nationwide Reach",
    description:
      "Expanded our client base across India, offering delivery and remote design support.",
  },
  {
    year: "2024",
    title: "Creative Innovation",
    description:
      "Launched eco-friendly printing solutions and custom packaging services for premium clients.",
  },
];

const stats = [
  { number: 10, suffix: "+", label: "Years of Experience" },
  { number: 1000, suffix: "+", label: "Happy Clients" },
  { number: 50000, suffix: "+", label: "Prints Delivered" },
  { number: 50, suffix: "+", label: "Creative Designers & Staff" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-[#f7f8fc] to-[#e9ebf2] text-center"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#0B1C39] mb-16"
      >
        Our Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto border-l-4 border-[#0B1C39]/20 pl-6 space-y-12">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white shadow-lg rounded-xl p-6 md:p-8 border border-gray-200"
          >
            <div className="absolute -left-5 top-6 w-8 h-8 rounded-full bg-[#0B1C39] border-4 border-white shadow-md"></div>
            <h3 className="text-xl font-bold text-[#0B1C39]">{milestone.year}</h3>
            <h4 className="text-lg font-semibold text-gray-700 mt-2">
              {milestone.title}
            </h4>
            <p className="text-gray-600 mt-3 leading-relaxed">
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
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
          >
            <h3 className="text-3xl font-bold text-[#0B1C39] mb-2">
              <CountUp end={stat.number} duration={2} />{stat.suffix}
            </h3>
            <p className="text-gray-600 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
