'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from '../../../components/Hero1';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CategorySlider from '../../../components/blogCategory';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category') ?? '';

  useEffect(() => {
    if (category) {
      const element = document.getElementById(category);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [category]);

  return (
    <>
      <Navbar />
      <Hero title="Blog" subtitle="Stories, Tips, and Photography Insights" />
      <CategorySlider />
      <Footer />
    </>
  );
}
