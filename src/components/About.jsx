import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1581092580491-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    caption: "10+ Years of Printing Excellence",
  },
  {
    img: "https://images.unsplash.com/photo-1579547621706-1a9c79d5d8af?auto=format&fit=crop&w=900&q=80",
    caption: "State-of-the-Art Equipment",
  },
  {
    img: "https://images.unsplash.com/photo-1534237710431-e2fc408eb7a7?auto=format&fit=crop&w=900&q=80",
    caption: "Creative & Passionate Team",
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatedSection
      id="about"
      animation="fade-up"
      className="py-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto"
    >
      {/* Left - Text */}
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-6">About PrintPress</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          With over a decade of experience, PrintPress has transformed creative ideas into stunning
          printed realities. From business branding to event marketing, we ensure precision,
          quality, and innovation in every print.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our mission is simple — to merge **creativity and technology** to deliver exceptional
          printing solutions that elevate your brand presence and storytelling.
        </p>
      </motion.div>

      {/* Right - Slideshow */}
      <motion.div
        className="flex-1 relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence>
          <motion.img
            key={slides[current].img}
            src={slides[current].img}
            alt="About us slideshow"
            className="w-full h-80 object-cover rounded-2xl"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-3 text-sm font-medium backdrop-blur-md">
          {slides[current].caption}
        </div>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-blue-500" : "bg-white/60"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default About;
