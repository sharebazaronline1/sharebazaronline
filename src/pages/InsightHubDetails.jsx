// src/pages/BlogDetail.jsx

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react";
import { supabase } from "../lib/supabase"; // ✅ FIXED
import { fetchInsightDetails } from "../api/mockApi";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);

      try {
        let foundBlog = null;

        // 🔥 1️⃣ MOCK ID HANDLING
        if (String(id).startsWith("mock-")) {
          const mockData = await fetchInsightDetails();
          const cleanId = id.replace("mock-", "");

          const mockBlog = mockData.find(
            (item) => String(item.id) === String(cleanId)
          );

          if (mockBlog) {
            foundBlog = {
              ...mockBlog,
              id,
              image_url: mockBlog.image,
              published_at: mockBlog.date,
              reading_time: mockBlog.readTime,
              source: "mock",
            };
          }
        } else {
          // 🔥 2️⃣ TRY SUPABASE
          const { data, error } = await supabase
            .from("blogs")
            .select("*")
            .eq("id", id)
            .single();

          if (!error && data) {
            foundBlog = {
              ...data,
              source: "db",
            };
          } else {
            // 🔥 3️⃣ FALLBACK TO MOCK
            const mockData = await fetchInsightDetails();

            const mockBlog = mockData.find(
              (item) =>
                String(item.id) === String(id) ||
                `mock-${item.id}` === String(id)
            );

            if (mockBlog) {
              foundBlog = {
                ...mockBlog,
                id: `mock-${mockBlog.id}`,
                image_url: mockBlog.image,
                published_at: mockBlog.date,
                reading_time: mockBlog.readTime,
                source: "mock",
              };
            }
          }
        }

        setBlog(foundBlog);
      } catch (err) {
        console.error("Error loading blog:", err);
        setBlog(null);
      }

      setLoading(false);
    };

    if (id) fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <span className="text-gray-600 text-lg">Loading article…</span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <span className="text-gray-600 text-xl">Article not found</span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* CATEGORY */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
            {blog.category || "Market Insight"}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* META */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-10">
          {blog.author && (
            <span className="flex items-center gap-2">
              <User size={16} />
              {blog.author}
            </span>
          )}

          <span className="flex items-center gap-2">
            <Calendar size={16} />
            {blog.published_at
              ? new Date(blog.published_at).toLocaleDateString("en-IN")
              : blog.date || "—"}
          </span>

          <span className="flex items-center gap-2">
            <Clock size={16} />
            {blog.reading_time
              ? `${blog.reading_time} min read`
              : blog.readTime || "10 min read"}
          </span>
        </div>

        {/* ARTICLE */}
        <article
  className="
    ql-editor blog-content
    max-w-none mx-auto
    text-gray-700
    leading-relaxed

    prose-headings:font-bold
    prose-headings:text-gray-900

    prose-h1:text-4xl
    prose-h2:text-3xl
    prose-h3:text-2xl

    prose-h2:mt-10
    prose-h2:mb-4

    prose-p:text-base
    prose-p:leading-8

    prose-ul:pl-6
    prose-li:my-1

    prose-table:w-full
    prose-table:border
    prose-table:border-gray-300
    prose-table:rounded-xl
    prose-table:overflow-hidden

    prose-th:bg-gray-100
    prose-th:px-4
    prose-th:py-3

    prose-td:px-4
    prose-td:py-3
  "
  dangerouslySetInnerHTML={{
    __html: (blog.content || "")
      .replace(
        /<table/g,
        '<div class="overflow-x-auto my-8"><table class="min-w-full border-collapse"'
      )
      .replace(/<\/table>/g, "</table></div>"),
  }}
/>

        {/* FOOTER */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">
              Share this article
            </span>
            <button className="p-2 bg-white rounded-full border hover:bg-gray-100 transition">
              <Share2 size={18} />
            </button>
          </div>

          <Link
            to="/insight-hub"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
          >
            <ArrowLeft size={18} />
            Back to Insights
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;