// src/components/Blogs.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Meesho IPO 2025: Complete Details & Review",
    category: "Upcoming IPO",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "December 2025 SME IPO Bonanza – 12 New Issues",
    category: "SME IPO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    date: "1 Dec 2025",
  },
  {
    id: 3,
    title: "8 MEGA IPOs That Delivered 500%+ Returns in 2025",
    category: "Listing Gains",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    date: "14 Dec 2025",
  },
  {
    id: 4,
    title: "Top 10 IPOs of 2025 – Spectacular Listing Performance",
    category: "IPO Performance",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
    date: "13 Dec 2025",
  },
  {
    id: 5,
    title: "Reliance Industries Announces 1:1 Bonus Issue",
    category: "Bonus Issue",
    image: "https://images.unsplash.com/photo-1559526324-c1f0a2a9b2c5?w=800&q=80",
    date: "7 Dec 2025",
  },
  {
    id: 6,
    title: "TCS Declares ₹48 Final Dividend – Record Date 15 Dec",
    category: "Dividend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    date: "13 Dec 2025",
  },
  {
    id: 7,
    title: "HDFC Bank Rights Issue Opens – ₹25,000 Cr Fundraise",
    category: "Rights Issue",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    date: "9 Dec 2025",
  },
  {
    id: 8,
    title: "Axis Multi-Asset Allocation Fund NFO Opens",
    category: "NFO",
    image: "https://images.unsplash.com/photo-1559526324-593bbc0b6dc2?w=800&q=80",
    date: "Today",
  },
  {
    id: 9,
    title: "Embassy REIT Announces 8.2% Dividend Yield",
    category: "REITs",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    date: "6 Dec 2025",
  },
  {
    id: 10,
    title: "10.5% GoI Floating Rate Bonds 2035 – Should You Invest?",
    category: "Bonds",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80",
    date: "4 days ago",
  },
];

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="flex-shrink-0 w-64 sm:w-72"
    >
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        {/* Smaller Image */}
        <div className="h-36 relative overflow-hidden bg-gray-100">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Compact Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-gray-900 text-base leading-tight line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs text-gray-500 mt-2">{post.date}</p>

          {/* Read More */}
          <div className="mt-auto pt-3">
            <button className="text-green-600 font-medium text-xs hover:text-green-700 flex items-center gap-1 transition">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Blogs() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered && scrollRef.current) {
      const container = scrollRef.current;
      let position = 0;
      const speed = 0.5;

      const scroll = () => {
        if (!isHovered) {
          position += speed;
          if (position >= container.scrollWidth / 2) {
            position = 0;
          }
          container.scrollLeft = position;
        }
        requestAnimationFrame(scroll);
      };
      scroll();
    }
  }, [isHovered]);

  return (
     <section className="pt-16 pb-4 lg:pt-4 lg:pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-5 py-4 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {/* Duplicate for seamless loop */}
            {[...blogPosts, ...blogPosts].map((post, index) => (
              <BlogCard
                key={`${post.id}-${index}`}
                post={post}
                index={index % blogPosts.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}