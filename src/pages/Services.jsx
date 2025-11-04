import { motion } from "framer-motion";

const services = [
  {
    title: "Offset Printing",
    desc: "High-quality, cost-effective prints perfect for bulk production.",
  },
  {
    title: "Digital Printing",
    desc: "Fast turnaround for small to medium print volumes.",
  },
  {
    title: "Packaging Solutions",
    desc: "Custom boxes and labels that elevate your brand presence.",
  },
  {
    title: "Business Cards",
    desc: "Premium designs for professional impact.",
  },
  {
    title: "Brochures & Flyers",
    desc: "Vibrant promotional materials that stand out.",
  },
  {
    title: "Custom Design",
    desc: "Creative layouts and branding tailored to your business.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-[#1C1C1E] text-center relative overflow-hidden"
    >
      {/* Soft radial glow behind section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F10] via-[#1C1C1E] to-[#0F0F10] opacity-95" />

      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-[#D4AF37] mb-12 relative z-10"
      >
        Our Services
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#262629] p-8 rounded-2xl border border-[#2E2E30] hover:border-[#D4AF37]/60 hover:shadow-[0_0_25px_-8px_#D4AF37] transition-all duration-500"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold text-[#D4AF37] mb-3"
            >
              {s.title}
            </motion.h3>
            <p className="text-[#EDEDED]/80">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 w-1/2 mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
      ></motion.div>
    </section>
  );
};

export default Services;
