'use client';
import { useState } from "react";
import Hero from "../../../components/Hero1";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { motion } from "framer-motion";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000",
    alt: "Bridal Portrait",
    category: "bridal-portraits",
    title: "Bridal Elegance",
    description: "Capturing timeless moments",
    size: "large" // will span 2 rows
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000",
    alt: "Couple Portrait",
    category: "couple-portraits",
    title: "Love in Motion",
    description: "Candid moments of pure joy",
    size: "small"
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000",
    alt: "Groom Portrait",
    category: "groom-portraits",
    title: "Dapper Moments",
    description: "Elegance in every detail",
    size: "tall" // will span 2 rows
  },
  
];

const categories = [
  { id: 'all', label: 'All', count: portfolioImages.length },
  { 
    id: 'bridal-portraits', 
    label: 'Bridal Portraits',
    count: portfolioImages.filter(img => img.category === 'bridal-portraits').length 
  },
  { 
    id: 'couple-portraits', 
    label: 'Couple Portraits',
    count: portfolioImages.filter(img => img.category === 'couple-portraits').length 
  },
  { 
    id: 'groom-portraits', 
    label: 'Groom Portraits',
    count: portfolioImages.filter(img => img.category === 'groom-portraits').length 
  },
  { 
    id: 'jewellery', 
    label: 'Jewellery',
    count: portfolioImages.filter(img => img.category === 'jewellery').length 
  },
  { 
    id: 'rituals', 
    label: 'Rituals',
    count: portfolioImages.filter(img => img.category === 'rituals').length 
  },
  { 
    id: 'candid-moments', 
    label: 'Candid Moments',
    count: portfolioImages.filter(img => img.category === 'candid-moments').length 
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(image => image.category === activeCategory);

  const getImageClassName = (size: string) => {
    const baseClass = "relative overflow-hidden rounded-xl shadow-lg group";
    switch(size) {
      case 'large':
        return `${baseClass} col-span-2 row-span-2`;
      case 'wide':
        return `${baseClass} col-span-2`;
      case 'tall':
        return `${baseClass} row-span-2`;
      default:
        return baseClass;
    }
  };

  return (<>
    <Navbar/>
    <Hero title="Portfolio" subtitle="Explore Our Work" />
    
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-playfair text-gray-900 mb-6">Our Photography Portfolio</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We value everything that our clients stand for, and we take pride in the fact that we are trusted by our clients time and again for their Wedding Photography.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-8 mb-16 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-black text-white shadow-md'
                : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-4 md:gap-6"
            layout
          >
            {filteredImages.map((image, index) => (
              <motion.div 
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={getImageClassName(image.size)}
                onHoverStart={() => setHoveredImage(index)}
                onHoverEnd={() => setHoveredImage(null)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-all duration-700 
                           filter grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Image Overlay with Gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent
                    transition-opacity duration-500 ${hoveredImage === index ? 'opacity-100' : 'opacity-0'}`}
                >
                 
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-playfair text-gray-900 mb-4">Ready to capture your special moments?</h3>
          <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-primary/90 
                           transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    <Footer/>
  </>);
}