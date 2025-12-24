// src/pages/BlogDetail.jsx (only "Sr. No" column centered)

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react";
import { fetchInsightDetails } from "../api/mockApi";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsightDetails().then((blogs) => {
      const found = blogs.find((b) => b.id === parseInt(id));
      setBlog(found);
      setLoading(false);
    });
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
      {/* Hero Image Only */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[360px] overflow-hidden">
        <img
          src={blog.image || "/images/default-blog-banner.jpg"}
          alt={blog.title}
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Full-width Content Container - Title + Article in same box */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 py-10 lg:py-14 lg:pr-80">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Title & Meta Section - Inside the same white box */}
          <div className="px-6 sm:px-10 lg:px-16 pt-10 pb-8 border-b border-gray-100">
            <span className="inline-block px-5 py-2 bg-green-500 rounded-full text-xs sm:text-sm font-bold tracking-wide mb-5">
              {blog.category || "Market Insight"}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-700">
              {blog.author && (
                <span className="flex items-center gap-2 font-medium">
                  <User size={18} />
                  {blog.author}
                </span>
              )}
              <span className="flex items-center gap-2 font-medium">
                <Calendar size={18} />
                {blog.date}
              </span>
              <span className="flex items-center gap-2 font-medium">
                <Clock size={18} />
                {blog.readTime || "10 min read"}
              </span>
            </div>
          </div>

          {/* Article Content - Same box, smaller text */}
          <div className="px-6 sm:px-10 lg:px-16 py-10 lg:py-14">
            <article
              className="
                prose prose-base max-w-none

                /* Headings */
                prose-headings:font-extrabold
                prose-headings:text-gray-900
                prose-headings:tracking-tight
                prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl
                prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-green-500 prose-h2:pl-4

                /* Paragraphs */
                prose-p:text-gray-700
                prose-p:leading-relaxed
                prose-p:text-sm md:prose-p:text-base
                prose-p:my-6

                /* Lists */
                prose-ul:my-6 prose-ul:pl-6 prose-ul:list-disc
                prose-ol:my-6 prose-ol:pl-6 prose-ol:list-decimal
                prose-li:text-gray-700 prose-li:my-3 prose-li:text-sm md:prose-li:text-base
                prose-li:marker:text-green-600 prose-li:marker:font-bold

                /* Links */
                prose-a:text-green-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-green-700

                /* Blockquote */
                prose-blockquote:border-l-6 prose-blockquote:border-green-600
                prose-blockquote:bg-gradient-to-r prose-blockquote:from-green-50 prose-blockquote:to-transparent
                prose-blockquote:rounded-xl prose-blockquote:shadow-md prose-blockquote:px-6 prose-blockquote:py-5
                prose-blockquote:text-gray-800 prose-blockquote:italic prose-blockquote:text-base

                /* HR */
                prose-hr:my-14 prose-hr:border-t-3 prose-hr:border-green-200 prose-hr:rounded-full

                /* Tables */
                prose-table:w-full prose-table:rounded-2xl prose-table:overflow-hidden prose-table:shadow-xl prose-table:border prose-table:border-gray-300 prose-table:my-10
                prose-table:block prose-table:overflow-x-auto prose-table:whitespace-nowrap

                prose-thead:bg-gradient-to-r prose-thead:from-green-600 prose-thead:to-green-500
                prose-th:text-white prose-th:font-bold prose-th:text-left prose-th:px-5 prose-th:py-4 prose-th:text-sm

                /* Center only the first column (Sr. No) */
                prose-th:first-child:text-center
                prose-td:first-child:text-center prose-td:first-child:font-medium

                prose-tbody:bg-white
                prose-td:px-5 prose-td:py-4 prose-td:border-t prose-td:border-gray-200 prose-td:text-gray-800 prose-td:text-sm
                prose-tr:hover:bg-green-50 prose-tr:transition prose-tr:duration-200
              "
              dangerouslySetInnerHTML={{
                __html: blog.content
                  .replace(/<table/g, '<div class="overflow-x-auto rounded-2xl shadow-inner my-8"><table class="min-w-full"')
                  .replace(/<\/table>/g, "</table></div>"),
              }}
            />
          </div>
        </div>

        {/* Share & Back Section - Outside the main box */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-green-50 to-transparent rounded-2xl p-8 border border-green-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-800">Share this article</span>
                <button className="p-3 bg-white rounded-full hover:bg-green-100 transition shadow">
                  <Share2 size={20} className="text-gray-700" />
                </button>
              </div>

              <Link
                to="/insight-hub"
                className="inline-flex items-center gap-3 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-lg hover:shadow-xl"
              >
                <ArrowLeft size={22} />
                Back to All Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;