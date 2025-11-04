import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0F172A] text-white overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold tracking-wide"
      >
        Your <span className="text-[#D4AF37]">Printing</span> Partner for
        Excellence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 max-w-xl text-lg text-gray-200"
      >
        Premium quality, reliable delivery, and creative printing solutions for
        your brand.
      </motion.p>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="mt-8 px-6 py-3 bg-[#D4AF37] text-[#0F172A] font-semibold rounded-full shadow-lg hover:bg-[#C59E2C] transition-all"
      >
        Get a Quote
      </motion.a>
    </section>
  );
};

export default Hero;
