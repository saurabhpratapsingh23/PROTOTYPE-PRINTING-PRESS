import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#0B0C10] via-[#1C1C1E] to-[#0B0C10] text-center text-[#EDEDED]"
    >
      {/* Subtle golden radial lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-[#D4AF37] mb-10"
      >
        Let’s Create Something Remarkable
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-[#C7C7C7] mb-12 text-lg leading-relaxed"
      >
        Whether it’s elegant wedding cards or bold brand stationery, we’re here
        to craft prints that leave a lasting impression. Reach out to us — we’d
        love to collaborate.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-[#151515]/70 backdrop-blur-md 
                   border border-[#D4AF37]/20 shadow-[0_0_15px_rgba(212,175,55,0.15)] 
                   rounded-2xl p-8 flex flex-col gap-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 bg-transparent border-b border-[#D4AF37]/40 
                     text-[#EDEDED] focus:outline-none focus:border-[#D4AF37] 
                     transition duration-300 placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 bg-transparent border-b border-[#D4AF37]/40 
                     text-[#EDEDED] focus:outline-none focus:border-[#D4AF37] 
                     transition duration-300 placeholder-gray-400"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="p-3 bg-transparent border-b border-[#D4AF37]/40 
                     text-[#EDEDED] focus:outline-none focus:border-[#D4AF37] 
                     transition duration-300 placeholder-gray-400 resize-none"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 py-3 px-8 bg-gradient-to-r from-[#D4AF37] to-[#B38B2E]
                     text-[#1C1C1E] font-semibold rounded-full shadow-lg 
                     hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
