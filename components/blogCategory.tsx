'use client'; 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Category 1",
    products: [
      { name: "Product 1", image: "/product1.jpg", description: "High-quality material with a sleek design." },
      { name: "Product 2", image: "/product2.jpg", description: "Perfect for everyday use and durability." },
      { name: "Product 3", image: "/product3.jpg", description: "Innovative design with premium feel." },
      { name: "Product 4", image: "/product4.jpg", description: "Reliable and efficient, best in class." },
    ],
  },
  {
    name: "Category 2",
    products: [
      { name: "Product 5", image: "/product5.jpg", description: "Elegant and stylish for all occasions." },
      { name: "Product 6", image: "/product6.jpg", description: "Lightweight yet strong and durable." },
      { name: "Product 7", image: "/product7.jpg", description: "A modern touch to your essentials." },
      { name: "Product 8", image: "/product8.jpg", description: "Unmatched quality and premium design." },
    ],
  },
];

export default function CategorySlider() {
  return (
    <div className="space-y-12 p-6">
      {categories.map((category, rowIndex) => (
        <div key={rowIndex} className="overflow-hidden relative w-full p-6 border rounded-xl bg-gray-50 shadow-lg">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 left-6 font-bold text-xl text-gray-800"
          >
            {category.name}
          </motion.p>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex space-x-6 mt-12"
              animate={{ x: [0, -250, -500, -750, 0] }}
              transition={{ ease: "linear", duration: 8, repeat: Infinity }}
            >
              {[...category.products, ...category.products].map((product, index) => (
                <motion.div 
                  key={index} 
                  className="min-w-[250px] bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-xl w-full h-48 object-cover"
                  />
                  <p className="text-center font-semibold mt-3 text-gray-900">{product.name}</p>
                  <p className="text-center text-sm text-gray-600 mt-1">{product.description}</p>
                  <motion.button 
                    className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    Know More
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
