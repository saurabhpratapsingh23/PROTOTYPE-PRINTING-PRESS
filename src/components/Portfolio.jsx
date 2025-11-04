import { motion } from "framer-motion";

// Dummy image URLs (replace later with real ones)
const portfolioItems = [
  {
    id: 1,
    category: "Business Cards",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "Wedding Cards",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "Business Stationery",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "Flyers & Brochures",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "Packaging & Labels",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "Event Posters",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-50 text-center">
      <motion.h2
        className="text-4xl font-bold text-indigo-700 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Portfolio
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-600 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Explore our diverse range of print designs — from elegant wedding cards to professional business stationery.  
        We turn your ideas into beautifully printed products that stand out.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-md group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img
              src={item.img}
              alt={item.category}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl font-semibold">{item.category}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
