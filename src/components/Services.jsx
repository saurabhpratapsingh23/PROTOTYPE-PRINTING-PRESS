import React from "react";
import { motion } from "framer-motion";
import { Printer, Package, FileText, Layers, Image, PenTool } from "lucide-react";

const services = [
  {
    title: "Digital Printing",
    description:
      "High-quality and fast digital printing for all your business needs — brochures, flyers, and posters.",
    icon: <Printer className="w-10 h-10 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Offset Printing",
    description:
      "Perfect for bulk printing jobs with sharp color reproduction and professional finish.",
    icon: <Layers className="w-10 h-10 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Custom Packaging",
    description:
      "Design and print custom boxes, labels, and packaging that enhance your brand identity.",
    icon: <Package className="w-10 h-10 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1581091215367-59ab6c1d1f9d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business Cards",
    description:
      "Leave a lasting impression with our premium business cards printed on top-quality stock.",
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1583225112756-1c52f39b34ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Photo Printing",
    description:
      "Capture memories in vibrant detail with our advanced photo printing services.",
    icon: <Image className="w-10 h-10 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Graphic Design",
    description:
      "Our in-house designers bring your ideas to life with creative designs for print and digital media.",
    icon: <PenTool className="w-10 h-10 text-blue-600" />,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-700 mb-4"
        >
          Our <span className="text-yellow-500">Services</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From high-volume offset printing to custom packaging, we provide complete
          printing solutions designed to bring your ideas to life.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-left">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-end p-4">
              <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-600 transition">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
