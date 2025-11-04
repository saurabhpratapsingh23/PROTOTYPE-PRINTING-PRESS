import { motion } from "framer-motion";
import { FaPenNib, FaPrint, FaCheckCircle, FaTruck } from "react-icons/fa";

const steps = [
  {
    icon: <FaPenNib className="text-4xl text-indigo-600" />,
    title: "Design & Consultation",
    description:
      "We collaborate with you to refine your design and ensure it’s print-ready with perfect color and layout.",
  },
  {
    icon: <FaPrint className="text-4xl text-indigo-600" />,
    title: "Printing & Production",
    description:
      "Using advanced printing technology, we deliver precision, consistency, and vibrant results every time.",
  },
  {
    icon: <FaCheckCircle className="text-4xl text-indigo-600" />,
    title: "Quality Check",
    description:
      "Every print is carefully inspected for clarity, color accuracy, and durability before dispatch.",
  },
  {
    icon: <FaTruck className="text-4xl text-indigo-600" />,
    title: "Delivery",
    description:
      "Your order is securely packed and delivered to your doorstep on schedule — satisfaction guaranteed!",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 text-center">
      <motion.h2
        className="text-4xl font-bold text-indigo-700 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Printing Process
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Connecting line (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 transform -translate-y-1/2 z-0"></div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md flex flex-col items-center relative hover:scale-105 hover:shadow-xl transition-transform duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connector circle (desktop) */}
              <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full z-20"></div>

              <div className="mb-4 bg-indigo-100 p-5 rounded-full shadow-inner">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vertical connector for mobile */}
      <div className="md:hidden mt-12 flex flex-col items-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-indigo-600 w-1 h-12 absolute top-0 left-1/2 -translate-x-1/2"></div>
            <div className="bg-white p-6 rounded-xl shadow-md w-72 z-10">
              <div className="flex flex-col items-center">
                <div className="bg-indigo-100 p-4 rounded-full mb-3">
                  {steps[index].icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {steps[index].title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {steps[index].description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
