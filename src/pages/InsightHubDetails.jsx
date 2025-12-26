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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
            {blog.category || "Market Insight"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
          {blog.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-10">
          {blog.author && (
            <span className="flex items-center gap-2">
              <User size={16} />
              {blog.author}
            </span>
          )}
          <span className="flex items-center gap-2">
            <Calendar size={16} />
            {blog.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={16} />
            {blog.readTime || "10 min read"}
          </span>
        </div>

        {/* Article */}
        <article
          className="
            prose prose-base max-w-none mx-auto

            /* HEADINGS */
            prose-headings:font-extrabold
            prose-headings:text-gray-900
            prose-h2:text-center
            prose-h2:text-xl sm:prose-h2:text-2xl md:prose-h2:text-3xl
            prose-h2:mt-14 prose-h2:mb-6

            /* PARAGRAPHS */
            prose-p:text-gray-700
            prose-p:leading-relaxed
            prose-p:text-sm md:prose-p:text-base
            prose-p:my-6

            /* LISTS */
            prose-ul:my-6 prose-ul:pl-6 prose-ul:list-disc
            prose-li:text-gray-700 prose-li:my-2
            prose-li:marker:text-green-600

            /* TABLES */
            prose-table:w-full
            prose-table:border
            prose-table:border-gray-300
            prose-table:rounded-xl
            prose-table:overflow-hidden
            prose-table:my-10
            prose-table:block
            prose-table:overflow-x-auto
            prose-table:whitespace-nowrap

            prose-thead:bg-gray-100
            prose-th:px-4 prose-th:py-3 prose-th:text-sm prose-th:font-semibold prose-th:text-gray-800

            /* 🔥 FORCE Sr. No CENTER */
            prose-th:first-child:!text-center 
            prose-td:first-child:!text-center

            prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:text-gray-700
            prose-tr:border-t
            prose-tr:hover:bg-gray-50
          "
          dangerouslySetInnerHTML={{
            __html: blog.content
              .replace(
                /<table/g,
                '<div class="overflow-x-auto my-8"><table class="min-w-full border-collapse"'
              )
              .replace(/<\/table>/g, "</table></div>"),
          }}
        />

        {/* Footer */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Share this article</span>
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
