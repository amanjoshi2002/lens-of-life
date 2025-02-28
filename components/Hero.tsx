"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1623428335242-146aa129f6de?auto=format&fit=crop&q=80",
      title: "LUXURY PORTRAIT",
      subtitle: "EXPERIENCE",
      text: "Capturing timeless reflections of your unique journey through motherhood and family life."
    },
    {
      image: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?auto=format&fit=crop&q=80",
      title: "MATERNITY",
      subtitle: "MOMENTS",
      text: "Celebrating the beautiful journey of motherhood with elegant portraiture."
    },
    {
      image: "https://images.unsplash.com/photo-1621786858130-36a8402c4b8e?auto=format&fit=crop&q=80",
      title: "FAMILY",
      subtitle: "PORTRAITS",
      text: "Creating timeless memories that will be cherished for generations."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-7xl font-serif mb-4">
                {slides[current].title}
                <br />
                {slides[current].subtitle}
              </h1>
              <p className="text-xl md:text-2xl italic max-w-3xl mx-auto">
                {slides[current].text}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-black/20 rounded-full transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-black/20 rounded-full transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;