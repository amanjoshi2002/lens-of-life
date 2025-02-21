"use client";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "MATERNITY",
      description: "Celebrate your journey into motherhood with portraits that encapsulate your radiant beauty.",
      image: "https://images.unsplash.com/photo-1623428335242-146aa129f6de?auto=format&fit=crop&q=80"
    },
    {
      title: "MOTHERHOOD & FAMILY",
      description: "Embrace the beauty of motherhood and capture your family's narrative with timeless portraits.",
      image: "https://images.unsplash.com/photo-1623428335242-146aa129f6de?auto=format&fit=crop&q=80"
    },
    {
      title: "helloq",
      description: "Celebrate your journey into motherhood with portraits that encapsulate your radiant beauty.",
      image: "https://images.unsplash.com/photo-1623428335242-146aa129f6de?auto=format&fit=crop&q=80"
    },

   

  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 3 === 1 ? 'md:flex-row-reverse' : ''
            } mb-20`}
          >
            <div className="flex-1">
              <h3 className="text-4xl font-serif mb-6">{service.title}</h3>
              <p className="text-lg mb-8">{service.description}</p>
              <button className="border border-black px-6 py-2 hover:bg-black hover:text-white transition-colors">
                LEARN MORE
              </button>
            </div>
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;