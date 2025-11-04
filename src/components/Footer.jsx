import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#111113] text-[#EDEDED] py-16 px-6">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#111113] via-[#1C1C1E] to-[#111113] opacity-95"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold tracking-wide"
        >
          <span className="text-[#EDEDED]">Print</span>
          <span className="text-[#D4AF37]">Press</span>
        </motion.h2>

        <p className="text-[#F4F4F5]/80 max-w-md mx-auto leading-relaxed">
          Crafting premium prints that blend artistry, precision, and modern
          design.
        </p>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[#F4F4F5]/70 mt-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-[#B38B2E] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-[#D4AF37]">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaPhone className="text-[#D4AF37]" /> +91 98765 43210
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <FaEnvelope className="text-[#D4AF37]" /> info@printpress.com
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-[#D4AF37]">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-3 bg-[#F4F4F5]/10 rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37]/30 transition"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-3/4 mx-auto h-px bg-[#D4AF37]/30 mt-10"></div>

        {/* Copyright */}
        <p className="text-[#F4F4F5]/60 text-sm mt-6 tracking-wide">
          © {new Date().getFullYear()} PrintPress — Designed with class.
        </p>
      </div>

      {/* Subtle Glow Line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </footer>
  );
};

export default Footer;
