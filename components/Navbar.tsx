'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define interfaces for Category and Subcategory
interface Category {
  _id: string;
  name: string;
}

interface Subcategory {
  _id: string;
  name: string;
  categoryId: string; // Assuming subcategories have a reference to their parent category
}

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchSubcategories = async () => {
      try {
        const res = await fetch("/api/subcategories");
        const data: Subcategory[] = await res.json();
        setSubcategories(data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchCategories();
    fetchSubcategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.5
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="hidden lg:flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
            >
              HOME
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setIsPortfolioOpen(true)}
              onMouseLeave={() => setIsPortfolioOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
              >
                <span>PORTFOLIO</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {isPortfolioOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-sm rounded-md overflow-hidden"
                  >
                    {categories.map((category) => (
                      <Link
                        key={category._id}
                        href={`/portfolio?category=${category._id}`}
                        className="block px-6 py-3 text-white hover:bg-pink-400/20 transition-colors duration-300 text-sm tracking-wide"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
              >
                <span>SERVICES</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-sm rounded-md overflow-hidden"
                  >
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-6 py-3 text-white hover:bg-pink-400/20 transition-colors duration-300 text-sm tracking-wide"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link 
              href="/blog" 
              className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
            >
              BLOG
            </Link>
          </div>

          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="text-2xl font-light tracking-[0.2em] text-white">Lens Of Life</span>
              <span className="text-xs tracking-[0.3em] text-pink-400">Creations</span>
            </motion.div>
          </Link>

          <div className="flex items-center space-x-8">
            <Link 
              href="/faq" 
              className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
            >
              FAQs
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-2 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 text-sm tracking-wider rounded-full"
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>

          <Link href="/" className="text-center">
            <div className="text-xl font-light tracking-widest text-white">Lens Of Life </div>
            <div className="text-xs tracking-wider text-pink-400">Creations</div>
          </Link>

          <div className="w-8"></div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 py-4">
                <Link 
                  href="/" 
                  className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
                >
                  HOME
                </Link>
                <Link 
                  href="/portfolio" 
                  className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
                >
                  PORTFOLIO
                </Link>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider flex items-center"
                  >
                    SERVICES
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2"
                      >
                        {categories.map((category, index) => (
                          <Link
                            key={index}
                            href={`/blog?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link 
                  href="/blog" 
                  className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
                >
                  BLOG
                </Link>
                <Link 
                  href="/faq" 
                  className="text-white hover:text-pink-400 transition-colors duration-300 text-sm tracking-wider"
                >
                  FAQs
                </Link>
                <Link 
                  href="/contact"
                  className="inline-block px-6 py-2 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-all duration-300 text-sm tracking-wider rounded-full text-center"
                >
                  CONTACT
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Navbar;