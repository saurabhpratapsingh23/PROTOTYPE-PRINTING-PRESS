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
    <section id="services" className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1E3A8A]">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#D4AF37] hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
              {s.title}
            </h3>
            <p className="text-[#6B7280]">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
