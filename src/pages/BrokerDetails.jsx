// src/pages/BrokerReviewDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Star, StarHalf, Award, ChevronRight, CheckCircle2, 
  TrendingUp, Grid, DollarSign, Shield, Info
} from "lucide-react";
import { supabase } from "../lib/supabase";

// ==========================================
// 1. GLOBAL HELPER COMPONENTS & RENDERERS
// ==========================================
const RenderStars = ({ ratingScore, size = 15 }) => {
  const score = parseFloat(ratingScore) || 4.3;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      stars.push(<Star key={i} size={size} className="fill-amber-400 text-amber-400 flex-shrink-0" />);
    } else if (score > i - 1 && score < i) {
      stars.push(
        <div key={i} className="relative inline-block flex-shrink-0" style={{ width: size, height: size }}>
          <Star size={size} className="text-slate-600 absolute top-0 left-0" />
          <StarHalf size={size} className="fill-amber-400 text-amber-400 absolute top-0 left-0 z-10" />
        </div>
      );
    } else {
      stars.push(<Star key={i} size={size} className="text-slate-600 flex-shrink-0" />);
    }
  }
  return <div className="flex gap-0.5 justify-center">{stars}</div>;
};

const RenderDetailsValue = ({ val }) => {
  if (val === null || val === undefined) return <span className="text-slate-400 font-normal">N/A</span>;
  
  if (Array.isArray(val)) {
    return (
      <ul className="space-y-2 text-slate-600 list-none pl-0 m-0 font-normal text-xs sm:text-sm">
        {val.map((item, idx) => (
          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
            <span className="text-emerald-500 select-none mt-0.5">•</span>
            <div className="flex-1"><RenderDetailsValue val={item} /></div>
          </li>
        ))}
      </ul>
    );
  }
  
  if (typeof val === "object") {
    return (
      <div className="text-xs sm:text-sm font-normal w-full divide-y divide-slate-100">
        {Object.entries(val).map(([subKey, subVal]) => (
          <div 
            key={subKey} 
            className="flex items-start justify-between py-2 gap-4 last:pb-0 first:pt-0 w-full text-left"
          >
            <span className="text-slate-400 capitalize font-medium tracking-wide max-w-[45%] break-words leading-tight">
              {subKey.replace(/_/g, " ")}
            </span>
            <span className="text-slate-700 font-normal text-right break-words flex-1 leading-tight pl-2">
              {typeof subVal === "object" ? <RenderDetailsValue val={subVal} /> : String(subVal)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  
  return <span className="text-slate-700 font-normal leading-relaxed break-words block text-left">{String(val)}</span>;
};

// ==========================================
// 2. MAIN BROKER REVIEW DETAIL COMPONENT
// ==========================================
const BrokerReviewDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // State Initialization
  const [review, setReview] = useState(null);
  const [broker, setBroker] = useState(null);
  const [competitors, setCompetitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  // Core Data Fetch Engine
  useEffect(() => {
    const fetchReviewAndBrokers = async () => {
      setLoading(true);
      try {
        const possibleSlugs = [slug, `${slug}-review`, `${slug}review`];
        let reviewData = null;

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

          const baseSlug = slug.replace(/-review$/, "").replace(/review$/, "");
          const { data: brokerData } = await supabase
            .from("brokers")
            .select("*")
            .or(`slug.eq.${baseSlug},slug.eq.${slug}`)
            .maybeSingle();

          if (brokerData) {
            setBroker(brokerData);
          }

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
        console.error("Error matching database layout criteria:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchReviewAndBrokers();
  }, [slug]);

  // Tab Filtering Logical Mapping
  const getFilteredDetails = () => {
    if (!broker?.details || typeof broker.details !== 'object') return [];
    const entries = Object.entries(broker.details);
    
    if (activeTab === "all") return entries;
    if (activeTab === "charges") {
      return entries.filter(([key]) => key.toLowerCase().includes("charge") || key.toLowerCase().includes("fee") || key.toLowerCase().includes("pricing") || key.toLowerCase().includes("brokerage"));
    }
    if (activeTab === "security") {
      return entries.filter(([key]) => key.toLowerCase().includes("security") || key.toLowerCase().includes("margin") || key.toLowerCase().includes("regulation") || key.toLowerCase().includes("sebi"));
    }
    if (activeTab === "general") {
      return entries.filter(([key]) => !key.toLowerCase().includes("charge") && !key.toLowerCase().includes("fee") && !key.toLowerCase().includes("pricing") && !key.toLowerCase().includes("brokerage") && !key.toLowerCase().includes("security") && !key.toLowerCase().includes("margin"));
    }
    return entries;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060a22]">
        <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Link to="/comparebrokers" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium">Return to Comparison Hub</Link>
      </div>
    );
  }

  const currentRating = broker?.rating || review?.rating || 4.3;
  const currentActiveUsers = broker?.active_users || review?.active_users || "25+ Lakhs";
  const targetActionUrl = broker?.account_opening_url || broker?.website || "#";
  const filteredDetailsEntries = getFilteredDetails();

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased w-full overflow-x-hidden">
      
      {/* SECTION 1: HERO PANEL */}
      <div className="bg-gradient-to-b from-[#060a22] to-[#0c133a] text-white border-b border-slate-800/60 w-full">
        <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-14 max-w-none">
          
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-10 whitespace-nowrap overflow-x-auto opacity-70">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <ChevronRight size={12} className="text-slate-600" />
            <Link to="/comparebrokers" className="hover:text-blue-400 transition">Brokers</Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="text-slate-200 truncate">{broker?.name || "Broker"} Reviews</span>
          </nav>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            <div className="xl:col-span-8 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-md uppercase tracking-wider">
                <Award size={13} /> Official Analyst Scorecard
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {review.title}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-5xl opacity-80 font-normal">
                {broker?.tagline || `In-depth structural inspection parameters, system configurations, compliance checks, and pricing models.`}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a 
                  href={targetActionUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-4 rounded-xl text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/10"
                >
                  Open Demat Account
                </a>
                <button 
                  onClick={() => navigate("/comparebrokers")}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium px-8 py-4 rounded-xl text-sm transition"
                >
                  Compare Terminal Matrix
                </button>
              </div>
            </div>

            {broker?.logo && (
              <div className="xl:col-span-4 flex justify-start xl:justify-end w-full">
                <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 backdrop-blur-md w-full xl:max-w-md">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl p-4 flex items-center justify-center shadow-xl">
                    <img src={broker.logo} alt={broker.name} className="max-w-full max-h-full object-contain" />
                  </div>

                  <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                    {broker.broker_type || "Discount Broker"}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-3xl font-black text-white tracking-tight">{parseFloat(currentRating).toFixed(1)}</span>
                      <span className="text-sm text-slate-400">/ 5.0</span>
                    </div>
                    <RenderStars ratingScore={currentRating} size={14} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 mt-8 border-t border-slate-800/60 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-normal"><CheckCircle2 size={13} className="text-emerald-400" /> SEBI Registered Broker Portfolio</span>
            <span className="flex items-center gap-1.5 font-normal"><CheckCircle2 size={13} className="text-emerald-400" /> Exchange Core Member (NSE, BSE, MCX)</span>
          </div>

        </div>
      </div>

      {/* SECTION 2: SPECIFICATION METRIC ENGINE & FILTER TABS */}
      {broker && (
        <div className="w-full border-b border-slate-200/60 bg-slate-50/30">
          <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 py-10 max-w-none">
            
            <div className="flex items-center overflow-x-auto whitespace-nowrap gap-2 pb-3 mb-8 border-b border-slate-200 scrollbar-none">
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all ${activeTab === "all" ? "bg-blue-600 text-white shadow-sm" : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"}`}
              >
                <Grid size={13} /> Comprehensive Matrix ({Object.keys(broker.details || {}).length})
              </button>
              <button
                onClick={() => setActiveTab("general")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all ${activeTab === "general" ? "bg-blue-600 text-white shadow-sm" : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"}`}
              >
                <Info size={13} /> Core Specs
              </button>
              <button
                onClick={() => setActiveTab("charges")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all ${activeTab === "charges" ? "bg-blue-600 text-white shadow-sm" : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"}`}
              >
                <DollarSign size={13} /> Charges & Fees
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all ${activeTab === "security" ? "bg-blue-600 text-white shadow-sm" : "bg-white border border-slate-200 text-slate-500 hover:bg-slate-50"}`}
              >
                <Shield size={13} /> Margins & Security
              </button>
            </div>

            {/* TOP PRIMARY REGISTERS: Structured Flex Grid with equal internal vertical distribution */}
            <div className="bg-white border border-slate-200/70 rounded-xl p-6 w-full mb-8 shadow-sm text-left">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                <TrendingUp size={13} className="text-blue-500" /> Primary System Configuration Registers
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4 text-sm font-normal">
                <div className="space-y-1 border-l-2 border-slate-200 pl-3.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block font-medium">Official Name</span>
                  <span className="text-slate-800 font-bold block truncate">{broker.name}</span>
                </div>
                <div className="space-y-1 border-l-2 border-slate-200 pl-3.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block font-medium">SEBI ID Reference</span>
                  <span className="text-slate-700 font-mono text-xs block truncate" title={broker.sebi_registration}>
                    {broker.sebi_registration || "Verified"}
                  </span>
                </div>
                <div className="space-y-1 border-l-2 border-slate-200 pl-3.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block font-medium">Inception Metric</span>
                  <span className="text-slate-800 font-bold block">{broker.founded_year || "N/A"}</span>
                </div>
                <div className="space-y-1 border-l-2 border-slate-200 pl-3.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block font-medium">Corporate Base</span>
                  <span className="text-slate-800 font-bold block truncate">{broker.headquarters || "India"}</span>
                </div>
                <div className="space-y-1 border-l-2 border-slate-200 pl-3.5 col-span-2 md:col-span-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide block font-medium">Ecosystem Clients</span>
                  <span className="text-slate-800 font-bold block">{currentActiveUsers}</span>
                </div>
              </div>
            </div>

            {/* LOWER DETAILS MATRIX: Configured as a fluid CSS Column Layout to eliminate empty vertical space (As referenced in image_ccb8f3.png) */}
            {filteredDetailsEntries.length > 0 ? (
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 w-full space-y-6 [column-fill:_balance]">
                {filteredDetailsEntries.map(([key, val]) => (
                  <div 
                    key={key} 
                    className="break-inside-avoid border border-slate-200/80 rounded-xl p-5 bg-white flex flex-col font-normal shadow-sm hover:shadow-md/5 transition-all w-full"
                  >
                    <div className="w-full">
                      <span className="text-xs font-bold text-slate-900 tracking-wide block mb-3 pb-2 border-b border-slate-100 capitalize text-left">
                        {key.replace(/_/g, ' ')}
                      </span>
                      <div className="w-full">
                        <RenderDetailsValue val={val} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-400 text-xs">
                No matching entries grouped under this classification filter.
              </div>
            )}

          </div>
        </div>
      )}

      {/* SECTION 3: EDITORIAL CONTENT VIEWPORT */}
      <div className="w-full mx-auto px-4 sm:px-8 lg:px-12 py-14 max-w-none">
        <article
          className="prose max-w-none text-left"
          dangerouslySetInnerHTML={{
            __html: review.content || "<p class='text-slate-400 text-sm'>No editorial content has been populated yet for this entry.</p>",
          }}
        />

        {/* SECTION 4: ECOSYSTEM MATRIX FOOTER */}
        {competitors.length > 0 && (
          <div className="pt-12 mt-14 border-t border-slate-200 w-full text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-950">Compare Equivalent Ecosystems</h3>
                <p className="text-xs text-slate-400 mt-0.5">Evaluate structural variance directly with alternative brokerage operations.</p>
              </div>
              <Link to="/comparebrokers" className="text-blue-600 hover:text-blue-700 font-semibold text-xs uppercase tracking-wider flex items-center gap-1 transition">
                Open Full Matrix Engine <ChevronRight size={14} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {competitors.map((item) => (
                <div
                  key={item.slug}
                  className="flex flex-col justify-between p-5 border border-slate-200 rounded-xl bg-white hover:border-slate-300 transition text-left"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      {item.logo ? (
                        <div className="h-9 max-w-[110px] flex items-center justify-center p-1 border border-slate-100 rounded-xl bg-white">
                          <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 bg-slate-950 rounded-xl flex items-center justify-center text-white font-bold text-xs">
                          {item.name.charAt(0)}
                        </div>
                      )}
                      <span className="text-xs text-amber-500 font-medium bg-amber-50 px-2 py-0.5 rounded">
                        ★ {item.rating ? parseFloat(item.rating).toFixed(1) : "4.2"}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-slate-900 text-sm mb-0.5">{item.name}</h4>
                    <p className="text-xs text-slate-400 truncate">{item.active_users?.trim() || "Verified Member"}</p>
                  </div>

                  <button
                    onClick={() => navigate("/comparebrokers", { state: { selectedBroker: item.name } })}
                    className="mt-5 w-full bg-slate-50 hover:bg-slate-950 text-slate-600 hover:text-white border border-slate-200 hover:border-slate-950 py-2 rounded-lg text-xs font-medium transition text-center"
                  >
                    Compare Matrix
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default BrokerReviewDetail;