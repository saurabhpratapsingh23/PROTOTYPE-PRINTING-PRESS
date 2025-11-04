import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Solutions", "Resources", "Institutional", "Deals"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 left-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: "transparent", // ensures no semi-transparent overlay
      }}
    >
      <div
        className="max-w-7xl w-[90%] mx-auto mt-4 flex items-center justify-between rounded-full px-6 py-3 
                   shadow-md border border-gray-200 transition-all duration-300 bg-white"
      >
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-md bg-yellow-400" />
          <h1 className="text-xl font-bold text-gray-800 tracking-wide">
            PrintPress
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="cursor-pointer hover:text-yellow-500"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Right: Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition">
            <User size={18} />
            <span>Sign in</span>
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition"
          >
            Get started →
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-full bg-white rounded-b-2xl md:hidden shadow-md border border-gray-200"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-yellow-500 cursor-pointer"
                >
                  {item}
                </li>
              ))}
              <hr className="w-3/4 border-gray-200" />
              <button className="flex items-center gap-2 text-gray-700 hover:text-yellow-500">
                <User size={18} />
                <span>Sign in</span>
              </button>
              <button className="bg-yellow-400 text-gray-900 px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition">
                Get started →
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
