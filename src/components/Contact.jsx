import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-[#1E3A8A] mb-8"
      >
        Contact Us
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4"
      >
        <input type="text" placeholder="Your Name" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]" />
        <input type="email" placeholder="Your Email" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]" />
        <textarea rows="4" placeholder="Your Message" className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"></textarea>
        <button className="bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold py-3 rounded-full transition">
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
