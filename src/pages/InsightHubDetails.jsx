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

        // MOCK BLOG
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
          // SUPABASE BLOG
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
            // FALLBACK MOCK
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* CATEGORY */}
        <div className="text-center mb-5">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
            {blog.category || "Market Insight"}
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          {blog.title}
        </h1>

        {/* META */}
        <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500 mb-10">

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
              : "—"}
          </span>

          <span className="flex items-center gap-2">
            <Clock size={16} />
            {blog.reading_time || "10 min read"}
          </span>
        </div>

        

        {/* ARTICLE */}
        <article
          className="blog-content text-gray-800"
          dangerouslySetInnerHTML={{
            __html: (blog.content || "")

              // REMOVE EMPTY PARAGRAPHS
              .replace(/<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")

              // REMOVE MULTIPLE BR TAGS
              .replace(/(<br\s*\/?>\s*){2,}/gi, "<br />")

              // REMOVE INLINE HUGE SPACING
              .replace(/margin-top:[^;"]+;?/gi, "")
              .replace(/margin-bottom:[^;"]+;?/gi, "")
              .replace(/padding-top:[^;"]+;?/gi, "")
              .replace(/padding-bottom:[^;"]+;?/gi, "")

              // TABLE RESPONSIVE
              .replace(
                /<table/g,
                '<div class="overflow-x-auto my-6 rounded-xl border border-gray-200"><table class="min-w-full border-collapse"'
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

      {/* STYLES */}
      <style jsx>{`
        .blog-content {
          font-size: 16px;
          line-height: 1.8;
        }

        .blog-content p {
          margin-bottom: 18px !important;
          line-height: 1.8 !important;
          color: #374151;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          color: #111827;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 40px !important;
          margin-bottom: 18px !important;
        }

        .blog-content h2 {
          font-size: 28px;
        }

        .blog-content h3 {
          font-size: 24px;
        }

        .blog-content ul,
        .blog-content ol {
          margin: 20px 0 !important;
          padding-left: 24px !important;
        }

        .blog-content li {
          margin-bottom: 10px !important;
          line-height: 1.8 !important;
        }

        .blog-content table {
          width: 100%;
        }

        .blog-content th {
          background: #f3f4f6;
          font-weight: 600;
          text-align: left;
          padding: 14px;
          border: 1px solid #d1d5db;
        }

        .blog-content td {
          padding: 14px;
          border: 1px solid #d1d5db;
        }

        .blog-content img {
          border-radius: 14px;
          margin: 24px 0;
        }

        @media (max-width: 640px) {
          .blog-content {
            font-size: 15px;
            line-height: 1.7;
          }

          .blog-content p {
            margin-bottom: 16px !important;
          }

          .blog-content h2 {
            font-size: 24px;
          }

          .blog-content h3 {
            font-size: 20px;
          }

          .blog-content li {
            margin-bottom: 8px !important;
          }

          .blog-content th,
          .blog-content td {
            padding: 10px;
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogDetail;

