"use client";

import { motion } from "framer-motion";
import { Camera, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    "Maternity Photography",
    "Newborn Sessions",
    "Family Portraits",
    "Studio Sessions"
  ];

  return (
    <div className="fixed w-full z-50">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center bg-black text-white py-3"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6 text-sm">
              <Link href="/" className="hover:text-gray-300 transition-colors">HOME</Link>
              <Link href="/portfolio" className="hover:text-gray-300 transition-colors">PORTFOLIO</Link>
              <div className="relative">
                <button 
                  className="flex items-center space-x-1 hover:text-gray-300 transition-colors text-sm"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>SERVICES</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black py-2 shadow-lg">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 hover:bg-gray-800 transition-colors text-sm"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/blog" className="hover:text-gray-300 transition-colors">BLOG</Link>
            </div>

            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-center">
              <div className="text-xl font-light tracking-widest">ANJA UK</div>
              <div className="text-xs tracking-wider">PHOTOGRAPHY</div>
            </Link>

            <div className="flex space-x-6 text-sm">
              <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQs</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">CONTACT</Link>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;