// src/components/InsightHub.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { fetchInsightDetails } from "../api/mockApi";

const InsightHub = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FETCH BLOGS FROM DB

useEffect(() => {
  const fetchBlogs = async () => {
    setLoading(true);

    try {
      // 1️⃣ Supabase data
      const { data: dbData, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("status", "published");

      if (error) {
        console.error("Supabase error:", error);
      }

      // 2️⃣ Mock data
      const mockData = await fetchInsightDetails();

      const formattedMock = mockData.map((item) => ({
        id: `mock-${item.id}`, // 🔥 avoid id conflict
        title: item.title,
        image_url: item.image,
        published_at: item.date,
        reading_time: item.readTime,
        category: item.category,
        content: item.content,
        source: "mock",
      }));

      const formattedDB = (dbData || []).map((item) => ({
        ...item,
        source: "db",
      }));

      // 3️⃣ MERGE BOTH
      let merged = [...formattedDB, ...formattedMock];

      // 4️⃣ REMOVE DUPLICATES (by title)
      const uniqueMap = new Map();
      merged.forEach((item) => {
        if (!uniqueMap.has(item.title)) {
          uniqueMap.set(item.title, item);
        }
      });

      merged = Array.from(uniqueMap.values());

      // 5️⃣ SORT BY DATE
      merged.sort((a, b) => {
        return new Date(b.published_at || 0) - new Date(a.published_at || 0);
      });

      setBlogs(merged);
    } catch (err) {
      console.error("Error loading blogs:", err);
    }

    setLoading(false);
  };

  fetchBlogs();
}, []);

  const handleCardClick = (post) => {
    navigate(`/insight-hub/${post.id}`);
  };

  return (
    <div className="w-full min-h-screen">
      {/* HERO */}
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

      {/* CONTENT */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {loading ? (
          <div className="text-center text-gray-500">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-500">No blogs found</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {blogs.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
                onClick={() => handleCardClick(post)}
              >
                {/* IMAGE */}
                <div className="relative h-36 px-3 pt-3">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3 flex flex-col flex-1">
                  <time className="text-[11px] text-gray-500 mb-1">
                    {post.published_at
                      ? new Date(post.published_at).toLocaleDateString("en-IN")
                      : "—"}
                  </time>

                  <h3 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-3 mb-3">
                    {post.title}
                  </h3>

                  <span className="mt-auto text-xs font-semibold text-green-600 hover:text-green-700">
                    Read More →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* LOAD MORE (optional later pagination) */}
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