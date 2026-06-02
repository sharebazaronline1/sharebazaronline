// src/components/InsightHub.jsx

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { fetchInsightDetails } from "../api/mockApi";
import slugify from "../utils/slugify";
import {
  BookOpen,
  TrendingUp,
  LineChart,
  GraduationCap,
} from "lucide-react";

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
  navigate(
    `/insight-hub/${post.id}/${slugify(post.title)}`
  );
};

  return (
    <div className="w-full min-h-screen">
      {/* HERO */}
  <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f6fffb] to-[#eef8ff] py-16 lg:py-8">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-100/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-100/40 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

  <div className="relative max-w-[1800px] mx-auto px-6">

    <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div className="xl:col-span-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm">
          <BookOpen size={16} />
          Insight Hub
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-black tracking-[-3px] leading-[0.95] text-[#0f172a]">
          Market Insights
          <span className="text-green-600 block">
            & Investment Guides
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg lg:text-[22px] leading-9 text-slate-600 max-w-2xl">
          Stay ahead with expert analysis, IPO updates,
          investment strategies, market trends, and
          educational guides designed for smarter investing.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
              <TrendingUp
                size={22}
                className="text-green-700"
              />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Market Trends
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Latest insights & updates
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
              <LineChart
                size={22}
                className="text-blue-700"
              />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Expert Analysis
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Data-backed investment views
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center">
              <GraduationCap
                size={22}
                className="text-purple-700"
              />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Learning Guides
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Simplified investing education
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="xl:col-span-6">

        <div className="relative flex justify-center">
          <img
            src="/images/hero-insight.png"
            alt="Insight Hub"
            className="w-full max-w-[780px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>

    </div>

  </div>

</section>

      {/* CONTENT */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {loading ? (
          <div className="text-center text-gray-500">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-500">No blogs found</div>
        ) : (
           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5">           
           {blogs.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
               className="
                        group
                        bg-white
                        rounded-2xl
                        shadow-md
                        hover:shadow-xl
                        transition-all duration-300
                        cursor-pointer
                        flex flex-col
                        h-full
                        overflow-hidden
                      "
                onClick={() => handleCardClick(post)}
              >
                {/* IMAGE */}
           <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gray-100">

              <img
                src={post.image_url}
                alt={post.title}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                  rounded-none
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

            </div>

                {/* CONTENT */}
          <div className="p-2 sm:p-3 flex flex-col flex-1">
                  <time className="text-[11px] text-gray-500 mb-1">
                    {post.published_at
                      ? new Date(post.published_at).toLocaleDateString("en-IN")
                      : "—"}
                  </time>

                  <h3 className="text-[13px] sm:text-sm font-semibold text-gray-900 leading-snug line-clamp-3 mb-2">
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