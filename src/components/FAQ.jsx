import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What printing services do you offer?",
    answer:
      "We provide digital and offset printing, business cards, wedding cards, brochures, packaging, flyers, and custom design solutions.",
  },
  {
    question: "Can I order in bulk or request a custom quote?",
    answer:
      "Absolutely! We handle both small and bulk orders. You can contact us directly for custom quotes or special requests.",
  },
  {
    question: "How long does printing usually take?",
    answer:
      "Turnaround time depends on the order type and quantity, but most standard orders are completed within 2–4 business days.",
  },
  {
    question: "Do you offer design assistance?",
    answer:
      "Yes, our in-house design team can help you refine or create print-ready designs to ensure perfect results.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we deliver all over India through trusted logistics partners to ensure safe and timely delivery.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 px-6 bg-gradient-to-b from-[#f8f9fb] to-[#eceef3] text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#0B1C39] mb-10"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto text-left space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-[#0B1C39]">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-gray-500" />
              </motion.div>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-gray-600 mt-3"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
