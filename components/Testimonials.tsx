import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    text: "Absolutely incredible photographer! Would highly recommend and will most definitely be back.",
    author: "Kassyqq",
  },
  {
    text: "Absolutely incredible photographer! Would highly recommend and will most definitely be back.",
    author: "Kassysd",
  },
  {
    text: "Absolutely incredible photographer! Would highly recommend and will most definitely be back.",
    author: "Kassyqw",
  },
  {
    text: "Absolutely incredible photographer! Would highly recommend and will most definitely be back.",
    author: "Kassy23",
  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] bg-gray-100 p-8">
      {/* Outer container for centering */}
      {/* <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-10"> */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Star icons */}
          <div className="flex justify-center mt-4 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} size={30} />
            ))}
          </div>

          {/* Testimonial text */}
          <p className="text-gray-800 text-xl font-serif mt-6">
            {testimonials[index].text}
          </p>

          {/* Author name */}
          <p className="text-gray-500 text-lg mt-4">
            — {testimonials[index].author}
          </p>
        </motion.div>
      {/* </div> */}
    </div>
  );
};

export default TestimonialSlider;