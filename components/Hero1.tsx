'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[60vh] w-full">
      <Image
        src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070"
        alt="Wedding Photography Hero"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-4 text-6xl font-serif">Blog</h1>
          <p className="text-xl">Stories, Tips, and Photography Insights</p>
        </div>
      </div>
    </div>
  );
}