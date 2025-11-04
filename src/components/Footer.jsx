import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-12">
      {/* Subtle animated gradient shimmer */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
          backgroundSize: "400% 400%",
        }}
      ></motion.div>

      {/* Footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Call us at <span className="font-semibold text-white">+91 98765 43210</span> or
          email us at
          <span className="font-semibold text-white"> info@printpress.com</span>
        </motion.p>

        {/* Contact details with icons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-8 text-gray-300 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2">
            <Phone className="text-blue-300" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-blue-300" />
            <span>info@printpress.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="text-blue-300" />
            <span>Walchand Nagar, Maharashtra</span>
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 mx-auto w-3/4"
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "75%" }}
          transition={{ duration: 1 }}
        ></motion.div>

        {/* Footer bottom text */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          © {new Date().getFullYear()} PrintPress | All rights reserved.
        </motion.p>
      </div>

      {/* Animated gradient glow at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />
    </footer>
  );
};

export default Footer;
