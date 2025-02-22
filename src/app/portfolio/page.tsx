'use client';
import { useState } from "react";
import Breadcrumb1 from "../../../components/breadcrum1";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { motion } from "framer-motion";

const portfolioImages = [
  {
    src: "/images/1.jpg",
    alt: "Bridal Portrait",
    category: "bridal-portraits",
    title: "Bridal Elegance",
    description: "Capturing timeless moments",
    size: "large" // will span 2 rows
  },
  {
    src: "/images/2.jpg",
    alt: "Couple Portrait",
    category: "couple-portraits",
    title: "Love in Motion",
    description: "Candid moments of pure joy",
    size: "small"
  },
  {
    src: "/images/3.jpg",
    alt: "Groom Portrait",
    category: "groom-portraits",
    title: "Dapper Moments",
    description: "Elegance in every detail",
    size: "tall" // will span 2 rows
  },
  {
    src: "/images/4.jpg",
    alt: "Jewellery Shot",
    category: "jewellery",
    title: "Wedding Jewels",
    description: "Sparkling memories",
    size: "wide" // will span 2 columns
  },
  {
    src: "/images/5.jpg",
    alt: "Wedding Ritual",
    category: "rituals",
    title: "Sacred Traditions",
    description: "Cherishing cultural moments",
    size: "small"
  },
  {
    src: "/images/6.jpg",
    alt: "Candid Moment",
    category: "candid-moments",
    title: "Natural Beauty",
    description: "Unscripted perfection",
    size: "wide"
  },
  {
    src: "/images/7.jpg",
    alt: "Bridal Portrait",
    category: "bridal-portraits",
    title: "Royal Grace",
    description: "Majestic bridal moments",
    size: "tall"
  },
  {
    src: "/images/8.jpg",
    alt: "Couple Portrait",
    category: "couple-portraits",
    title: "Together Forever",
    description: "Love stories unfold",
    size: "small"
  },
  {
    src: "/images/9.jpg",
    alt: "Candid Moment",
    category: "candid-moments",
    title: "Pure Joy",
    description: "Capturing real emotions",
    size: "large"
  }
];

const categories = [
  { id: 'all', label: 'All', count: portfolioImages.length },
  { 
    id: 'bridal-portraits', 
    label: 'Bridal Portraits',
    count: portfolioImages.filter(img => img.category === 'bridal-portraits').length 
  },
  { id: 'couple-portraits', label: 'Couple Portraits' },
  { id: 'groom-portraits', label: 'Groom Portraits' },
  { id: 'jewellery', label: 'Jewellery' },
  { id: 'rituals', label: 'Rituals' },
  { id: 'candid-moments', label: 'Candid Moments' }
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
    <Breadcrumb1 imageUrl={"/images/1.jpg"} text={"Portfolio"}/>
    
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
                ? 'bg-primary text-white shadow-md'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto">
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                    <h3 className="text-xl font-semibold text-white mb-2">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-playfair text-gray-900 mb-4">Ready to capture your special moments?</h3>
          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 
                           transition-colors duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    <Footer/>
  </>);
}