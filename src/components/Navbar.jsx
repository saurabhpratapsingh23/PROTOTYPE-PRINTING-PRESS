import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const moreLinks = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Process", path: "/process" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center items-center py-3">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full shadow-lg px-8 py-3 flex justify-between items-center w-[90%] md:w-[70%] text-white">
        <h1 className="text-2xl font-bold tracking-wide">
          Print<span className="text-[#D4AF37]">Press</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-200 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`hover:text-[#D4AF37] transition-colors ${
                  location.pathname === link.path ? "text-[#D4AF37]" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* More Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="flex items-center space-x-1 hover:text-[#D4AF37]"
            >
              <span>More</span>
              <FiChevronDown
                className={`transition-transform ${
                  showMore ? "rotate-180 text-[#D4AF37]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {showMore && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg py-2 w-44 text-center"
                >
                  {moreLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        onClick={() => setShowMore(false)}
                        className={`block py-2 text-gray-200 hover:text-[#D4AF37] transition-all ${
                          location.pathname === link.path ? "text-[#D4AF37]" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-2xl text-[#D4AF37]"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 w-[85%] md:hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl text-center py-4"
          >
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block py-2 text-gray-200 hover:text-[#D4AF37] transition-all ${
                  location.pathname === link.path ? "text-[#D4AF37]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
