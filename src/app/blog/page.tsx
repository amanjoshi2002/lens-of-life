'use client';

import Hero from '../../../components/Hero1';
import Breadcrumb1 from '../../../components/breadcrum1';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CategorySlider from '../../../components/blogCategory';
import BlogGrid from '../../../components/BlogGrid';

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySlider />
      <Footer />
    </>
  );
}