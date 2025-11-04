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
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0F0F10] to-[#1C1C1E] text-gray-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none"></div>

      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-[#D4AF37] mb-16 tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Client Stories
      </motion.h2>

      {/* Testimonial Cards */}
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
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
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left">
              <FaQuoteLeft className="text-[#D4AF37] text-4xl mb-4 mx-auto md:mx-0 opacity-80" />
              <p className="text-lg italic text-gray-300 mb-4 leading-relaxed">
                “{t.text}”
              </p>
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="text-sm text-[#B38B2E]">{t.role}</p>
            </div>

            {/* Glassmorphic Card */}
            <motion.div
              className="flex-1 relative h-56 w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(212,175,55,0.2)] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Rating Badge */}
              <div className="absolute bottom-4 right-4 bg-[#D4AF37] text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
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
