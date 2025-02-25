'use client';

import { useState } from 'react';
import Footer from '../../../components/Footer';
import Hero from '../../../components/Hero1';
import Navbar from '../../../components/Navbar';


export default function FAQ() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a range of photography services including weddings, portraits, and events."
    },
    {
      question: "How can I book a session?",
      answer: "You can book a session by contacting us through our website or calling us directly."
    },
    {
      question: "What is your pricing?",
      answer: "Our pricing varies depending on the type of service. Please contact us for a detailed quote."
    },
    {
      question: "Do you offer photo editing services?",
      answer: "Yes, all our packages include professional photo editing."
    },
    {
      question: "How long will it take to receive my photos?",
      answer: "Typically, you will receive your photos within 2-4 weeks after the session."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
          <Navbar />

      <Hero title="FAQ" subtitle="Your Questions Answered" />
      <div className="pt-24 pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">Frequently Asked Questions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <h2 className="text-xl font-bold text-gray-900">{faq.question}</h2>
                  <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}