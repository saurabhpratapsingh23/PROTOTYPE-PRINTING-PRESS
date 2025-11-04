import { motion } from "framer-motion";
import { FaPenNib, FaPrint, FaCheckCircle, FaTruck } from "react-icons/fa";

const steps = [
  {
    icon: <FaPenNib className="text-4xl text-[#D4AF37] drop-shadow-glow" />,
    title: "Design & Consultation",
    description:
      "We collaborate with you to refine your design and ensure it’s print-ready with perfect color and layout.",
  },
  {
    icon: <FaPrint className="text-4xl text-[#D4AF37] drop-shadow-glow" />,
    title: "Printing & Production",
    description:
      "Using advanced printing technology, we deliver precision, consistency, and vibrant results every time.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-[#D4AF37] drop-shadow-glow" />,
    title: "Quality Check",
    description:
      "Every print is carefully inspected for clarity, color accuracy, and durability before dispatch.",
  },
  {
    icon: <FaTruck className="text-4xl text-[#D4AF37] drop-shadow-glow" />,
    title: "Delivery",
    description:
      "Your order is securely packed and delivered to your doorstep on schedule — satisfaction guaranteed!",
  },
];

const Process = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0F0F10] to-[#1C1C1E] text-center text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none"></div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-16 text-[#D4AF37] tracking-wide"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Printing Process
      </motion.h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-6 bg-white/5 p-5 rounded-full border border-white/10">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
