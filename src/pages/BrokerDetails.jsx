// src/pages/BrokerReviewDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Clock, Calendar, Star, StarHalf, Award, Users, ChevronRight } from "lucide-react";
import { supabase } from "../lib/supabase";

const BrokerReviewDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [review, setReview] = useState(null);
  const [broker, setBroker] = useState(null);
  const [competitors, setCompetitors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviewAndBrokers = async () => {
      setLoading(true);
      try {
        const possibleSlugs = [slug, `${slug}-review`, `${slug}review`];
        let reviewData = null;

        // 1. Fetch the main review row
        for (const trySlug of possibleSlugs) {
          const { data, error } = await supabase
            .from("broker_reviews")
            .select("*")
            .eq("slug", trySlug)
            .single();

          if (!error && data) {
            reviewData = data;
            break;
          }
        }

        if (reviewData) {
          setReview(reviewData);

          // 2. Explicitly find matching broker by base slug or matching name variations
          const baseSlug = slug.replace(/-review$/, "").replace(/review$/, "");
          const { data: brokerData } = await supabase
            .from("brokers")
            .select("*")
            .or(`slug.eq.${baseSlug},slug.eq.${slug}`)
            .maybeSingle();

          if (brokerData) {
            setBroker(brokerData);
          }

          // 3. Populate competitors section cleanly from active entries
          const { data: popularBrokers } = await supabase
            .from("brokers")
            .select("name, slug, logo, rating, active_users")
            .neq("slug", brokerData?.slug || baseSlug)
            .limit(4);

          if (popularBrokers && popularBrokers.length > 0) {
            setCompetitors(popularBrokers);
          }
        }
      } catch (err) {
        console.error("Error matching database configuration criteria:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchReviewAndBrokers();
  }, [slug]);

  const renderStars = (ratingScore) => {
    const score = parseFloat(ratingScore) || 4.2;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (score >= i) {
        stars.push(
          <Star 
            key={i} 
            size={18} 
            strokeWidth={1.5} 
            className="fill-amber-400 text-amber-500 flex-shrink-0" 
          />
        );
      } else if (score > i - 1 && score < i) {
        const remainder = score - (i - 1);
        if (remainder >= 0.2 && remainder <= 0.7) {
          stars.push(
            <div key={i} className="relative inline-block w-[18px] h-[18px] flex-shrink-0">
              <Star 
                size={18} 
                strokeWidth={1.5} 
                className="fill-transparent text-slate-300 absolute top-0 left-0" 
              />
              <StarHalf 
                size={18} 
                strokeWidth={1.5} 
                className="fill-amber-400 text-amber-500 absolute top-0 left-0 z-10" 
              />
            </div>
          );
        } else if (remainder > 0.7) {
          stars.push(
            <Star 
              key={i} 
              size={18} 
              strokeWidth={1.5} 
              className="fill-amber-400 text-amber-500 flex-shrink-0" 
            />
          );
        } else {
          stars.push(
            <Star 
              key={i} 
              size={18} 
              strokeWidth={1.5} 
              className="fill-transparent text-slate-300 flex-shrink-0" 
            />
          );
        }
      } else {
        stars.push(
          <Star 
            key={i} 
            size={18} 
            strokeWidth={1.5} 
            className="fill-transparent text-slate-300 flex-shrink-0" 
          />
        );
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50/50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-slate-500">Loading metrics...</p>
        </div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50/50 px-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-slate-900">Review Not Found</h2>
          <Link to="/compare-brokers" className="mt-4 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium inline-block shadow-sm">
            Back to Broker Comparison
          </Link>
        </div>
      </div>
    );
  }

  // Bind values dynamically directly to your provided table properties
  const currentRating = broker?.rating || review?.rating || 4.2;
  const currentActiveUsers = broker?.active_users || review?.active_users;
  const targetActionUrl = broker?.account_opening_url || broker?.website || "#";

  return (
    <div className="bg-slate-50/50 min-h-screen pb-24 text-slate-900 font-sans antialiased">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap pb-1">
          <Link to="/" className="hover:text-emerald-600 transition">Home</Link>
          <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />
          <Link to="/compare-brokers" className="hover:text-emerald-600 transition">Brokers</Link>
          <ChevronRight size={14} className="text-slate-400 flex-shrink-0" />
          <span className="text-slate-800 font-medium truncate">{review.title}</span>
        </nav>

        {/* Content Presentation Flow */}
        <div className="space-y-6">
          
          {/* Header Panel */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2 text-emerald-600">
                <Award size={18} className="stroke-[2.5]" />
                <span className="font-bold uppercase tracking-wider text-xs">Verified Review Desk • 2026</span>
              </div>
              {broker?.broker_type && (
                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {broker.broker_type}
                </span>
              )}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="space-y-2 max-w-2xl">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
                  {review.title}
                </h1>
                {broker?.tagline && <p className="text-slate-500 text-sm sm:text-base font-medium">{broker.tagline}</p>}
              </div>
              {broker?.logo && (
                <div className="w-16 h-16 rounded-xl border border-slate-100 p-2 flex items-center justify-center bg-white shadow-xs flex-shrink-0">
                  <img src={broker.logo} alt={`${broker.name} logo`} className="max-w-full max-h-full object-contain" />
                </div>
              )}
            </div>

            {/* Metrics Bar with Active Live Values */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3.5 text-xs sm:text-sm text-slate-600 border-y border-slate-100 py-4 my-5">
              <div className="flex items-center gap-2 sm:border-r sm:border-slate-200 sm:pr-6">
                <div className="flex items-center gap-0.5">
                  {renderStars(currentRating)}
                </div>
                <span className="ml-1 text-sm font-bold text-slate-900">
                  {isNaN(parseFloat(currentRating)) ? "4.2" : parseFloat(currentRating).toFixed(1)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar size={15} className="text-slate-400" />
                <span>Updated {new Date(review.created_at || review.published_at).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={15} className="text-slate-400" />
                <span>{review.reading_time || 8} min read</span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={15} className="text-slate-400" />
                <span className="font-medium text-slate-800">
                  {currentActiveUsers ? `${currentActiveUsers.trim()} Active Users` : "Verified Client Base"}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a 
                href={targetActionUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-center px-8 py-3.5 rounded-xl font-semibold text-sm transition shadow-sm"
              >
                Open Demat Account
              </a>
            </div>
          </div>

          {/* MAIN ARTICLE MARKUP PANEL */}
          <article
            className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-100 shadow-sm text-slate-800 overflow-hidden
              [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-slate-950 [&_h2]:border-b [&_h2]:border-slate-100 [&_h2]:pb-3 [&_h2]:mt-10 [&_h2]:mb-5
              [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-sm [&_p]:sm:text-base
              
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-5 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-5 [&_ol]:space-y-2
              [&_li]:text-slate-600 [&_li]:text-sm [&_li]:sm:text-base
              
              [&_table]:w-full [&_table]:my-6 [&_table]:border-collapse [&_table]:text-xs [&_table]:sm:text-sm [&_table]:overflow-x-auto [&_table]:block md:[&_table]:table
              [&_th]:bg-slate-50/80 [&_th]:text-slate-800 [&_th]:p-3 [&_th]:text-left [&_th]:font-semibold [&_th]:border [&_th]:border-slate-100 [&_th]:whitespace-nowrap
              [&_td]:p-3 [&_td]:border [&_td]:border-slate-100 [&_td]:text-slate-600 [&_td]:align-middle
              
              [&_tr:nth-child(even)]:bg-slate-50/20
              [&_strong]:text-slate-900 [&_strong]:font-semibold
              hover:[&_a]:text-emerald-700 [&_a]:text-emerald-600 [&_a]:underline"
            dangerouslySetInnerHTML={{
              __html: review.content || "<p className='text-slate-400 text-sm'>No content available yet.</p>",
            }}
          />

          {/* Dynamic Similar Brokers Block */}
          {competitors.length > 0 && (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Compare Similar Brokers</h3>
                <Link to="/comparebrokers" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1 transition">
                  View Comparison Engine <ChevronRight size={16} />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {competitors.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => navigate("/comparebrokers", { state: { selectedBroker: item.name } })}
                    className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50/30 text-left hover:border-emerald-200 hover:bg-emerald-50/10 transition group w-full"
                  >
                    {item.logo ? (
                      <div className="w-11 h-11 bg-white border border-slate-100 rounded-xl flex items-center justify-center p-1.5 shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform">
                        <img src={item.logo} alt={`${item.name} logo`} className="max-w-full max-h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform">
                        {item.name.charAt(0)}
                      </div>
                    )}

                    <div className="truncate">
                      <h4 className="font-semibold text-slate-900 text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-slate-400 group-hover:text-emerald-600 transition flex items-center gap-1 mt-0.5">
                        <span>★ {item.rating ? parseFloat(item.rating).toFixed(1) : "N/A"}</span>
                        <span className="text-slate-300">•</span>
                        <span className="truncate">{item.active_users ? item.active_users.trim() : "Compare"}</span>
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BrokerReviewDetail;