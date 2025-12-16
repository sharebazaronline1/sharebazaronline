// src/pages/InsightHub.jsx
import { motion } from "framer-motion";

const InsightHub = () => {
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

  return (
    <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-black mb-4"
          >
            Insight Hub
          </motion.h1>
          <p className="text-xl opacity-90">
            IPOs, Listings, Dividends, Corporate Actions & Market Insights
          </p>
        </div>

        {/* Grid */}
        <div className="p-8 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500">{post.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
                    {post.title}
                  </h3>

                  <span className="mt-auto text-green-600 font-semibold">
                    Read More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="py-10 text-center border-t">
          <button className="px-8 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition">
            Load More Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightHub;
