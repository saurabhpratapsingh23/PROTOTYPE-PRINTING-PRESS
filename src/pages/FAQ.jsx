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
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#0B0C10] via-[#1C1C1E] to-[#0B0C10] text-[#EDEDED]"
    >
      {/* Soft gold spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#D4AF37] text-center mb-16"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl mx-auto text-left space-y-6 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
              activeIndex === index
                ? "border-[#D4AF37]/70 bg-[#1C1C1E]/80 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                : "border-[#D4AF37]/20 bg-[#111111]/70"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3
                className={`text-lg font-semibold ${
                  activeIndex === index ? "text-[#D4AF37]" : "text-[#EDEDED]"
                }`}
              >
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#D4AF37]"
              >
                <FaChevronDown />
              </motion.div>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[#C7C7C7] mt-4 leading-relaxed"
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
