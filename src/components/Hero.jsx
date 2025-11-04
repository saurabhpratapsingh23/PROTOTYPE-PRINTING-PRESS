import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const images = [
  "https://images.unsplash.com/photo-1581092580491-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1581091215367-59ab6f7238b6?auto=format&fit=crop&w=1600&q=80",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto background slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden text-center text-white">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt="Printing press background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 px-4 max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Premium <span className="text-blue-400">Printing Solutions</span> For Your Business
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          <Typewriter
            words={[
              "High-Quality Brochures & Flyers",
              "Custom Business Cards & Packaging",
              "Fast, Reliable, and Affordable Printing",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold text-white shadow-md transition"
          >
            Explore Services
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/80 px-6 py-3 rounded-full font-semibold text-white hover:bg-white hover:text-blue-700 transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
