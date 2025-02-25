'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

const categories = [
  {
    name: 'Wedding',
    posts: [
      {
        id: 1,
        title: 'Comparing Different Wedding Photography Packages: What to Look For',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000',
        date: '02/10/2025',
        excerpt: 'A comprehensive guide to help you choose the perfect wedding photography package for your special day.',
        slug: 'comparing-wedding-photography-packages'
      },
      {
        id: 2,
        title: 'The Impact of Lighting on Wedding Photos: How to Get the Perfect Shots',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000',
        date: '02/03/2025',
        excerpt: 'Understanding the role of lighting in creating stunning wedding photographs.',
        slug: 'impact-of-lighting-wedding-photos'
      },
      {
        id: 3,
        title: 'Choosing the Right Photographer for Your Wedding',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000',
        date: '01/28/2025',
        excerpt: 'Tips for selecting the best photographer for your big day.',
        slug: 'choosing-photographer-wedding'
      },
      {
        id: 4,
        title: 'Capturing the Perfect Moments: Wedding Photography Tips',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000',
        date: '01/20/2025',
        excerpt: 'Essential tips for capturing beautiful wedding moments.',
        slug: 'wedding-photography-tips'
      },
      {
        id: 5,
        title: 'Post-Wedding Photography: What to Expect',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000',
        date: '01/15/2025',
        excerpt: 'A guide to post-wedding photography sessions.',
        slug: 'post-wedding-photography'
      },
    ],
  },
  {
    name: 'Destination Wedding',
    posts: [
      {
        id: 1,
        title: 'Comparing Different Wedding Photography Packages: What to Look For',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000',
        date: '02/10/2025',
        excerpt: 'A comprehensive guide to help you choose the perfect wedding photography package for your special day.',
        slug: 'comparing-wedding-photography-packages'
      },
      {
        id: 2,
        title: 'The Impact of Lighting on Wedding Photos: How to Get the Perfect Shots',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000',
        date: '02/03/2025',
        excerpt: 'Understanding the role of lighting in creating stunning wedding photographs.',
        slug: 'impact-of-lighting-wedding-photos'
      },
      {
        id: 3,
        title: 'Choosing the Right Photographer for Your Wedding',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000',
        date: '01/28/2025',
        excerpt: 'Tips for selecting the best photographer for your big day.',
        slug: 'choosing-photographer-wedding'
      },
      {
        id: 4,
        title: 'Capturing the Perfect Moments: Wedding Photography Tips',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000',
        date: '01/20/2025',
        excerpt: 'Essential tips for capturing beautiful wedding moments.',
        slug: 'wedding-photography-tips'
      },
      {
        id: 5,
        title: 'Post-Wedding Photography: What to Expect',
        image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000',
        date: '01/15/2025',
        excerpt: 'A guide to post-wedding photography sessions.',
        slug: 'post-wedding-photography'
      },
    ],
  }
];

export default function CategorySlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const updateScrollButtons = () => {
      if (sliderRef.current) {
        setCanScrollLeft(sliderRef.current.scrollLeft > 0);
        setCanScrollRight(
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth < sliderRef.current.scrollWidth
        );
      }
    };
    
    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }

    const autoScroll = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
        }
      }
    }, 3000); // Adjust the interval as needed

    return () => {
      sliderRef.current?.removeEventListener("scroll", updateScrollButtons);
      clearInterval(autoScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -sliderRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: sliderRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {categories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
              >
                &lt;
              </button>
            )}
            <div
              ref={sliderRef}
              className="flex overflow-hidden scrollbar-hide snap-x snap-mandatory space-x-4"
            >
              {category.posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] min-w-[calc(100%/3-1rem)] snap-start">
                  <div className="relative h-64">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link href={`/test`}>
                      <button className="w-full rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            {canScrollRight && (
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
