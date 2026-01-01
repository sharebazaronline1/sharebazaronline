// src/components/InsightHub.jsx (Updated: "How to Apply For IPO" redirects to /how-to-apply-ipo)

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  

const InsightHub = () => {
  const navigate = useNavigate();  

  const blogPosts = [
    {
      id: 1,
      title: "NSE Trading Holiday & Clearing Holidays Update 2026",
      category: "Market Update",
      image: "images/insight/insightimage1.png",
      date: "24 Dec 2025",
    },
    {
      id: 2,
      title: "How to Apply For IPO",
      category: "IPO In India",
      image: "images/howtoapplyipo.png",
      date: "1 Nov 2025",
      // Special route for this post
      customRoute: "/how-to-apply-ipo",
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
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
      date: "9 Dec 2025",
    },
    {
      id: 8,
      title: "Axis Multi-Asset Allocation Fund NFO Opens",
      category: "NFO",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
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
    {
      id: 11,
      title: "Best Multibagger Stocks of 2025 – Up 300%+",
      category: "Multibagger",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
      date: "11 Dec 2025",
    },
    {
      id: 12,
      title: "Upcoming SME IPOs This Week – Subscription Details",
      category: "SME IPO",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      date: "15 Dec 2025",
    },
  ];

  const handleCardClick = (post) => {
    if (post.customRoute) {
      navigate(post.customRoute);
    } else {
      navigate(`/insight-hub/${post.id}`);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="w-screen relative left-1 -translate-x-1/2 -mx-8">
          <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] rounded overflow-hidden lg:mr-12">
            <img
              src="/images/insight.png"
              alt="InsightHub"
              className="absolute inset-0 w-full h-full object-top object-center"
            />
          </div>
        </div>

      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
              onClick={() => handleCardClick(post)}
            >
              <div className="relative h-36 px-3 pt-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <time className="text-[11px] text-gray-500 mb-1">
                  {post.date}
                </time>

                <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-3 mb-3">
                  {post.title}
                </h3>

                <span className="mt-auto text-xs font-semibold text-green-600 hover:text-green-700">
                  More Info →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition shadow-md">
            Load More Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightHub;