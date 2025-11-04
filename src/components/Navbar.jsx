import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ["Home", "Services", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-3">
      <div className="backdrop-blur-md bg-white/90 rounded-full shadow-md px-8 py-2 flex justify-between items-center w-[90%] md:w-[70%]">
        <h1 className="text-2xl font-bold text-[#1E3A8A] tracking-wide">
          Print<span className="text-[#D4AF37]">Press</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-[#1F2937] font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-[#1E3A8A] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#1E3A8A] text-2xl"
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0F172A] text-white flex flex-col justify-center items-center space-y-8 text-xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 bg-white text-[#0F172A] rounded-full p-2 text-2xl"
            >
              <FiX />
            </button>

            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-[#D4AF37] transition-all"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
