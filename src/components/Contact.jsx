import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields before submitting.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left side: contact info */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Get in <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We’d love to hear from you. Whether you want to discuss your next
            print project, get a custom quote, or just say hello — reach out to
            us using the form or contact details below.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-600" />
              <p className="text-gray-700 font-medium">info@printpress.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-600" />
              <p className="text-gray-700 font-medium">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-blue-600" />
              <p className="text-gray-700 font-medium">
                123 Printing Street, Mumbai, India
              </p>
            </div>
          </div>

          <div className="h-[2px] w-24 bg-yellow-500 mt-6"></div>
        </motion.div>

        {/* Right side: contact form */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-10"
        >
          {submitted ? (
            <div className="text-center text-green-600 text-lg font-semibold">
              ✅ Thank you for contacting us! We’ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2 text-left">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                  rows="5"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
