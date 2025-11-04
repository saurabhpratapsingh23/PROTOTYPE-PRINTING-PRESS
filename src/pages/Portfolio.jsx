import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: 1,
    category: "Business Cards",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Wedding Invitations",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Brand Stationery",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Flyers & Brochures",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Packaging & Labels",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Event Posters",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 bg-[#1C1C1E] text-center relative overflow-hidden"
    >
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1C1C1E]/90 to-[#0E0E0F]" />

      <motion.h2
        className="text-4xl font-semibold text-[#D4AF37] mb-10 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Portfolio
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-[#F4F4F5]/70 mb-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        A curated showcase of premium designs — each print crafted with precision and passion to elevate your brand.
      </motion.p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-[#1C1C1E]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.category}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/90 via-[#1C1C1E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end justify-center p-6">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-[#D4AF37] text-lg font-medium tracking-wide uppercase"
              >
                {item.category}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom line */}
      <motion.div
        className="mt-20 w-1/2 mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Portfolio;
