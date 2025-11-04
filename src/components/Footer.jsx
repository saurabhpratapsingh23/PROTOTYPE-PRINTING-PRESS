import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0B1C39] text-white py-14 px-6">
      {/* Animated Wave Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#0B1C39] via-[#13224D] to-[#1E2A56] opacity-90"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
        {/* Brand Name */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-wide text-white"
        >
          Print<span className="text-blue-400">Press</span>
        </motion.h2>
        <p className="text-gray-300 max-w-md mx-auto leading-relaxed">
          Premium printing solutions crafted with creativity, precision, and care.
        </p>

        {/* Links & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300 mt-10">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition">Portfolio</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaPhone className="text-blue-400" /> +91 98765 43210
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaEnvelope className="text-blue-400" /> info@printpress.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3 text-white">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-3/4 mx-auto h-px bg-gray-600 mt-10"
        ></motion.div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} PrintPress. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
