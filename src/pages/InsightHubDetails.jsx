// src/pages/InsightHubDetails.jsx

import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ArrowLeft, Share2, ChevronRight, Home } from "lucide-react";
import { supabase } from "../lib/supabase";
import { fetchInsightDetails } from "../api/mockApi";
import SEO from "../components/SEO";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const InsightHubDetails = () => {
  const { id, slug } = useParams();

  const corporateCategories = [
    "Buyback",
    "Stock Split",
    "Bonus Issue",
    "Dividend",
    "Rights Issue",
    "Merger",
    "Demerger",
    "Takeover / Acquisition",
    "Open Offer",
    "Delisting",
    "OFS",
    "QIP",
    "Preferential Allotment",
    "Warrants Issue",
    "ESOP Allotment",
    "FPO",
    "Bond Issue",
    "NCD Issue",
    "Distribution",
    "Unit Split",
    "AGM",
    "EGM",
    "Board Meeting",
    "Postal Ballot",
    "E-Voting",
    "Promoter Stake Increase",
    "Promoter Stake Sale",
    "Pledge Release",
    "Scheme of Arrangement",
    "Insolvency Resolution",
    "CIRP Process",
    "Subsidiary Incorporation",
    "Joint Venture",
    "Change of Company Name",
    "IPO Listing",
    "Change in Director",
    "CEO Appointment",
    "Auditor Appointment",
    "Regulatory Action",
    "Trading Suspension",
    "Revocation of Suspension",
  ];

  const formatKeywordsForMeta = (keywordsArray) => {
    if (!keywordsArray || keywordsArray.length === 0) return "";

    if (typeof keywordsArray === "string") {
      return keywordsArray;
    }

    return keywordsArray.join(", ");
  };

  const generateKeywordsFromTitle = (title) => {
    if (!title) return "";

    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .split(" ")
      .filter((word) => word.length > 3)
      .slice(0, 8)
      .join(", ");
  };

  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", id],

    queryFn: async () => {
      let foundBlog = null;

      const { data: dbBlog, error: dbError } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

      if (!dbError && dbBlog) {
        foundBlog = {
          ...dbBlog,
          source: "db",
        };
      } else {
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
            keywords: mockBlog.keywords || [],
          };
        }
      }

      if (!foundBlog) {
        throw new Error("Blog not found");
      }

      return foundBlog;
    },

    staleTime: 10 * 60 * 1000,
    cacheTime: 15 * 60 * 1000,
  });

  const isCorporateAction = blog?.category
    ? corporateCategories.includes(blog.category)
    : false;

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.heading || "Insight Article",
          text: "Check out this article",
          url: url,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Share failed:", err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
        alert("Failed to copy link");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <span className="text-gray-600 text-lg">
          Loading article…
        </span>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <span className="text-gray-600 text-xl">
            Article not found
          </span>

          <Link
            to="/insight-hub"
            className="block mt-6 text-green-600 hover:underline"
          >
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const articleTitle =
    blog.heading || blog.title || "Article";

  let metaKeywords = formatKeywordsForMeta(blog.keywords);

  if (!metaKeywords) {
    metaKeywords = generateKeywordsFromTitle(articleTitle);
  }

  const breadcrumbItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Insight Hub",
      url: "/insight-hub",
    },
    {
      name: articleTitle,
      url: `/insight-hub/${id}`,
    },
  ];

  return (
    <>
      <SEO
        title={articleTitle}
        description={
          blog.meta_description ||
          blog.excerpt ||
          "Read this insightful article on ShareBazaarOnline"
        }
        keywords={metaKeywords}
        canonical={`/insight-hub/${id}/${slug || ""}`}
        image={blog.image_url || blog.image}
        type="article"
        publishedTime={blog.published_at || blog.created_at}
        modifiedTime={blog.updated_at}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: articleTitle,
          datePublished: blog.published_at || blog.created_at,
          dateModified: blog.updated_at,
          author: {
            "@type": "Organization",
            name: "ShareBazaarOnline",
          },
          publisher: {
            "@type": "Organization",
            name: "ShareBazaarOnline",
            logo: {
              "@type": "ImageObject",
              url: "https://www.sharebazaaronline.com/logo.png",
            },
          },
          image: blog.image_url || blog.image,
          keywords: metaKeywords,
        }}
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="bg-gray-50 min-h-screen">

        {/* Main page container */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm font-medium text-slate-500"
          >
            <ol className="flex items-center space-x-2 flex-wrap">

              <li>
                <Link
                  to="/"
                  className="hover:text-green-600 flex items-center gap-1 transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </li>

              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

              <li>
                <Link
                  to="/insight-hub"
                  className="hover:text-green-600 transition-colors"
                >
                  Insight Hub
                </Link>
              </li>

              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

              <li className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-[350px] md:max-w-[500px]">
                {articleTitle}
              </li>

            </ol>
          </nav>

          {/* Category */}
          <div className="text-center mb-5">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
              {blog.category || "Market Insight"}
            </span>
          </div>

          {/* Article title */}
          <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {articleTitle}
          </h1>

          {/* Hero image */}
          {blog.image_url && (
            <div className="mb-10 w-full">
              <img
                src={blog.image_url}
                alt={articleTitle}
                className="w-full h-auto object-contain rounded-2xl shadow-sm"
              />
            </div>
          )}

          
          <div className="w-full">
            <article
              className={`prose-content ${
                isCorporateAction
                  ? "corporate-content"
                  : "blog-content"
              }`}
              dangerouslySetInnerHTML={{
                __html: blog.content || "",
              }}
            />
          </div>

          {/* Share + Back */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-3">
              <span className="font-medium text-gray-700">
                Share this article
              </span>

              <button
                onClick={handleShare}
                className="p-2 bg-white rounded-full border hover:bg-gray-100 transition"
              >
                <Share2 size={18} />
              </button>
            </div>

            <Link
              to="/insight-hub"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#16A34A] text-white font-semibold rounded-full hover:bg-[#15803D] transition"
            >
              <ArrowLeft size={18} />
              Back to Insights
            </Link>

          </div>

        </div>

        {/* Normal Blog Styling */}
        {!isCorporateAction && (
          <style jsx>{`
            .blog-content {
              width: 100%;
              max-width: none;
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
              max-width: 100%;
              height: auto;
            }

            @media (max-width: 640px) {
              .blog-content {
                font-size: 15px;
                line-height: 1.7;
              }

              .blog-content h2 {
                font-size: 24px;
              }

              .blog-content h3 {
                font-size: 20px;
              }
            }
          `}</style>
        )}

        {/* Corporate Action Styling */}
        {isCorporateAction && (
          <style jsx>{`
            .corporate-content {
              width: 100%;
              max-width: none;
              font-size: 16px;
              line-height: 1.75;
            }

            .corporate-content table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }

            .corporate-content th,
            .corporate-content td {
              border: 1px solid #d1d5db;
              padding: 12px;
              text-align: left;
            }

            .corporate-content th {
              background-color: #f8fafc;
              font-weight: 600;
            }

            .corporate-content img {
              max-width: 100%;
              height: auto;
            }
          `}</style>
        )}

      </div>
    </>
  );
};

export default InsightHubDetails;