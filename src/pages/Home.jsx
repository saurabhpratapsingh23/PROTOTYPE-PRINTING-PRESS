import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    text: "Crafting premium prints that leave a mark.",
  },
  {
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    text: "From concept to creation — perfection in every detail.",
  },
  {
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    text: "Your vision. Our print mastery.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden text-center text-white">
      {/* Slide Images */}
      <AnimatePresence>
        <motion.img
          key={slides[current].img}
          src={slides[current].img}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text */}
      <motion.div
        key={slides[current].text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#D4AF37]">
          Print<span className="text-white">Press</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">{slides[current].text}</p>
      </motion.div>
    </section>
  );
};

export default Home;

