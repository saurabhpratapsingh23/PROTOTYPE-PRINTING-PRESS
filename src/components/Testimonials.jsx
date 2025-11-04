import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Business Owner",
    text: "Their printing quality is unmatched. My business cards got me so many compliments!",
  },
  {
    name: "Amit Verma",
    role: "Wedding Planner",
    text: "They brought my wedding invitation designs to life with luxurious finishes and rich details.",
  },
  {
    name: "Sneha Patel",
    role: "Marketing Executive",
    text: "They’re reliable, fast, and professional — everything you want in a printing partner.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] text-gray-800"
    >
      <h2 className="text-4xl font-extrabold text-center text-indigo-900 mb-16">
        Client Stories
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Text section */}
            <div className="flex-1 text-center md:text-left">
              <FaQuoteLeft className="text-indigo-500 text-4xl mb-4 mx-auto md:mx-0" />
              <p className="text-lg italic text-gray-700 mb-4 leading-relaxed">
                “{t.text}”
              </p>
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-yellow-600">{t.role}</p>
            </div>

            {/* Image / placeholder section */}
            <motion.div
              className="flex-1 relative rounded-2xl overflow-hidden h-56 w-full shadow-lg bg-gradient-to-br from-indigo-50 via-white to-indigo-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/40 to-transparent" />
              <div className="absolute bottom-3 right-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                ★ 5.0
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
