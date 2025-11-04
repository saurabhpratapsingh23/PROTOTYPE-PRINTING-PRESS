import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center
      bg-[#0F1115] text-white overflow-hidden"
    >
      {/* Subtle Animated Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)]"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Gold Light Sweep */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(212,175,55,0.08),transparent)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 text-5xl md:text-6xl font-extrabold leading-tight tracking-wide text-[#EDEDED]"
      >
        Printing <span className="text-[#D4AF37]">Perfection</span>,  
        <br /> Elevated with <span className="text-[#D4AF37]">Elegance</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 mt-6 max-w-2xl text-gray-300 text-lg"
      >
        From premium business cards to timeless wedding invites — we transform
        your ideas into printed art that speaks luxury and refinement.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link
          to="/services"
          className="relative z-10 mt-10 inline-block px-8 py-3 bg-[#D4AF37] text-[#0F1115] font-semibold 
          rounded-full shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] 
          hover:scale-105 transition-all duration-300"
        >
          Explore Our Craft
        </Link>
      </motion.div>

      {/* Gradient Overlay for Smooth Section Flow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0F1115] to-transparent" />
    </section>
  );
};

export default Hero;
