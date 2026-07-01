import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  BarChart3,
  HelpCircle,
  TrendingUp,
  Landmark,
  ShieldCheck,
  Star,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Smartphone,
  Monitor,
  Zap,
  DollarSign,
} from "lucide-react";

const brokerTypes = [
  {
    title: "Full-Service Brokers",
    description: "Offer complete support including research, personalized advice, portfolio management, and dedicated relationship managers.",
    features: ["Investment advice", "Research reports", "Portfolio management", "Relationship manager"],
    brokerage: "Usually 0.1% – 0.5% or higher",
  },
  {
    title: "Discount Brokers",
    description: "Provide low-cost online trading platforms with minimal advisory services. Best for self-directed traders.",
    features: ["Fast trading platform", "Ultra-low brokerage", "No advisory", "Self-directed trading"],
    brokerage: "₹0 – ₹20 per order or flat fee",
  },
];

const faqs = [
  { q: "What is a stock broker in the stock market?", a: "A stock broker is a SEBI-registered intermediary that provides access to stock exchanges (NSE/BSE) so investors can buy and sell shares, derivatives, and other securities." },
  { q: "Why do investors need a stock broker for trading?", a: "Direct access to exchanges is not allowed for individuals. Brokers act as a bridge by providing trading platforms, order execution, and compliance services." },
  { q: "What are brokerage charges in stock trading?", a: "Brokerage is the commission paid to the broker for executing buy or sell orders. It can be flat per order or a percentage of trade value." },
  { q: "How are brokerage charges calculated?", a: "Charges are usually: flat fee per trade (₹10–₹20), percentage of turnover (0.01%–0.50%), or zero for delivery trades in many discount brokers." },
  { q: "What are the main types of stock brokers in India?", a: "There are two main types: Full-service brokers (advice + research) and Discount brokers (low-cost platforms, no advice)." },
  { q: "What services do full-service brokers provide?", a: "They offer personalized advice, research reports, portfolio management, IPO applications, mutual funds, and relationship manager support." },
  { q: "What accounts are required to start trading?", a: "You need three linked accounts: Trading account, Demat account, and Bank account." },
  { q: "How can I open a trading account online?", a: "Most brokers allow 100% online account opening using Aadhaar e-KYC, PAN, and bank proof in 10–30 minutes." },
  { q: "Is there any minimum investment to start trading?", a: "No minimum is required by brokers — you can start with the price of one share (subject to lot size for some stocks)." },
  { q: "What is DP (Depository Participant) charge?", a: "DP charges are levied by the depository (CDSL/NSDL) when shares are sold from your Demat account. Usually ₹10–₹25 + GST per scrip." },
  { q: "What is AMC in Demat account?", a: "Annual Maintenance Charge (AMC) is the yearly fee for maintaining your Demat account. Many discount brokers now offer zero AMC." },
  { q: "How do brokers earn money?", a: "Main sources: brokerage fees, account opening/AMC charges, interest on margin funding, premium advisory, and transaction charges." },
  { q: "Which broker is best for beginners in India?", a: "Zerodha, Groww, and Angel One are popular among beginners due to simple UI, zero delivery brokerage, and educational content." },
  { q: "Which broker is best for active traders?", a: "Zerodha (Kite), Dhan, Fyers, and Upstox are preferred for fast execution, low latency, and advanced charting." },
  { q: "Which broker is best if I want research and advice?", a: "ICICI Direct, Motilal Oswal, HDFC Securities, and Kotak Securities offer strong research and advisory services." },
  { q: "Are discount brokers safe?", a: "Yes, all SEBI-registered discount brokers are safe. Funds and securities are held with banks and depositories, not with the broker." },
];

const StarRating = ({ rating }) => {
  const value = Math.max(0, Math.min(5, Number(rating) || 0));

  if (!rating || isNaN(value)) {
    return (
      <span className="text-sm text-slate-400 font-medium">
        (No reviews)
      </span>
    );
  }

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.max(0, Math.min(1, value - (star - 1)));

        return (
          <div key={star} className="relative h-4 w-4">
            <Star
              size={16}
              className="absolute text-slate-300 fill-slate-200"
            />
            <div
              className="absolute overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                size={16}
                className="fill-amber-400 text-amber-400"
              />
            </div>
          </div>
        );
      })}
      <span className="ml-1 text-sm font-semibold text-slate-700">
        {value.toFixed(1)}
      </span>
    </div>
  );
};

const SegmentBadge = ({ label, segments = [] }) => {
  const hasSegment = segments.some((seg) => seg?.toLowerCase() === label?.toLowerCase());
  return (
    <div className="flex items-center gap-1.5 text-xs font-medium ">
      <CheckCircle2 size={14} className="text-emerald-500 fill-emerald-50" />
      <span>{label}</span>
    </div>
  );
};

const AdBanner = () => (
  <div className="w-full flex justify-center my-6">
    <div className="bg-slate-50 border border-slate-200 rounded-2xl w-full max-w-[1400px] h-20 flex items-center justify-center text-slate-400 text-sm tracking-wider uppercase font-medium">
      Advertisement
    </div>
  </div>
);

const BrokerAnalyzerGuide = () => {
  const [brokersList, setBrokersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const { data, error } = await supabase.from("brokers").select("*");
        if (error) throw error;
        if (data) {
          const sorted = [...data].sort((a, b) => {
            const rA = a.rating ? parseFloat(a.rating) : -1;
            const rB = b.rating ? parseFloat(b.rating) : -1;
            return rB - rA;
          });
          setBrokersList(sorted);
        }
      } catch (err) {
        console.error("Error pulling data from Supabase:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBrokers();
  }, []);

  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);
  const visibleFaqs = showAllFAQs ? faqs : faqs.slice(0, 10);

  const filteredBrokers = brokersList.filter((broker) => {
    if (selectedFilter === "All") return true;
    const typeStr = (broker.broker_type || "").toLowerCase();

    if (selectedFilter === "Discount") {
      return typeStr.includes("discount") && !typeStr.includes("full");
    }
    if (selectedFilter === "Full Service") {
      return (typeStr.includes("full-service") || typeStr.includes("full service")) && !typeStr.includes("discount");
    }
    if (selectedFilter === "Both") {
      return typeStr.includes("discount") && (typeStr.includes("full-service") || typeStr.includes("full service"));
    }
    return true;
  });

  // Target recommendations configuration template
  const dynamicRecommendationCategories = [
    { title: "Best for Beginners", brokers: ["Zerodha", "Groww", "Angel One"] },
    { title: "Best for Active Traders", brokers: ["Zerodha", "Dhan", "Fyers"] },
    { title: "Best for Research", brokers: ["ICICI Securities", "Motilal Oswal", "HDFC Securities"] },
  ];

  return (
    <div className="w-full bg-[#f7faf8] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-white via-[#f6fffb] to-[#eef8ff] py-16 lg:py-20">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-100/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-100/40 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-[1800px] mx-auto px-6">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-center">
            <div className="xl:col-span-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm">
                <Landmark size={18} />
                Broker Analysis Guide
              </div>

              <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-black tracking-[-3px] leading-[0.95] text-[#0f172a]">
                Compare India's
                <span className="text-green-600 block">Top Stock Brokers</span>
              </h1>

              <p className="mt-6 text-lg lg:text-[22px] leading-9 text-slate-600 max-w-2xl">
                Real-time brokerage comparison, zero-delivery charges, platform performance, 
                and verified user ratings — choose the best broker for your trading style.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Zap size={24} className="text-green-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lowest Brokerage</p>
                    <p className="text-sm text-gray-500 mt-1">Compare charges across 20+ brokers</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <ShieldCheck size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">SEBI Registered</p>
                    <p className="text-sm text-gray-500 mt-1">100% verified &amp; trusted platforms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-6 relative flex justify-center">
              <img
                src="/images/hero-broker.png"
                alt="Broker Comparison"
                className="w-full max-w-[780px] object-contain drop-shadow-2xl"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* EXPLANATORY SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <BarChart3 size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">What is a Stock Broker?</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              A SEBI-registered intermediary that gives investors direct access to NSE &amp; BSE for trading equities, derivatives, commodities, and more.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                <DollarSign size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Brokerage Charges</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Fee paid to the broker for executing trades. Most discount brokers now offer ₹0 delivery brokerage.
            </p>
          </div>
        </div>

        {/* TYPES OF BROKERS */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Types of Brokers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brokerTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-gray-100 rounded-2xl p-8 hover:border-green-200 transition-all"
              >
                <h4 className="text-xl font-bold mb-3">{type.title}</h4>
                <p className="text-slate-600 mb-6">{type.description}</p>
                <ul className="space-y-3 mb-8">
                  {type.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-green-600 bg-green-50 border border-green-100 px-5 py-3 rounded-xl inline-block">
                  {type.brokerage}
                </p>
              </div>
            ))}
          </div>
        </div>

        <AdBanner />

        {/* COMPACT BLUE FILTER BAR */}
        <div className="bg-white border border-gray-200 rounded-xl p-1.5 inline-flex gap-1.5 shadow-xs">
          {["All", "Discount", "Full Service", "Both"].map((filterOpt) => (
            <button
              key={filterOpt}
              onClick={() => setSelectedFilter(filterOpt)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedFilter === filterOpt
                  ? "bg-blue-600 text-white shadow-xs"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filterOpt}
            </button>
          ))}
        </div>

        {/* BROKERS LIST */}
        <section className="space-y-4">
          {loading ? (
            <div className="bg-white rounded-2xl border border-gray-200 py-20 text-center">
              <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-green-600 mx-auto"></div>
              <p className="mt-6 text-gray-600">Loading brokers...</p>
            </div>
          ) : filteredBrokers.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 py-20 text-center text-xl text-gray-500">
              No brokers found matching this filter configuration.
            </div>
          ) : (
            filteredBrokers.map((broker) => {
              const charges = broker.details?.brokerage_charges || {};
              const openingCharges = broker.details?.account_opening_charges || {};
              const platform = broker.details?.platform || {};

              const openingFee = openingCharges.individual_account_opening_fee ?? "Free";
              const deliveryFee = charges.equity_delivery_individual ?? "₹0";
              const intradayFee = charges.intraday_individual ?? "₹20";
              const optionsFee = charges.options_individual ?? "₹20/order";
              const activeUsersText = broker.active_users?.trim() || "N/A";

              const segmentCollection = broker.segments || ["Equity", "F&O"];
              const currentSlug = broker.slug || broker.name.toLowerCase().replace(/\s+/g, "-");

              return (
                <div
                  key={broker.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-xs hover:shadow-sm transition-all duration-150 p-5 flex flex-col md:flex-row md:items-stretch justify-between gap-5"
                >
                  {/* LEFT COLUMN: BRAND STACK */}
                  <div className="flex flex-col items-start gap-1 min-w-[210px] border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-5 flex-shrink-0">
                    <img
                      src={broker.logo || "/images/brokers/fallback.png"}
                      alt={broker.name}
                      className="w-14 h-14 object-contain rounded-xl border border-gray-100 p-1.5 bg-white mb-1"
                      onError={(e) => { e.target.src = "/images/brokers/fallback.png"; }}
                    />
                    <h4 className="text-base font-semibold text-slate-900 tracking-tight leading-tight">
                      {broker.name}
                    </h4>
                    <StarRating rating={broker.rating} />
                    <span className="text-xs text-slate-400 font-medium">
                      {activeUsersText} Active Clients
                    </span>
                    <span className="mt-1 px-2 py-0.5 bg-blue-50/60 text-blue-600 border border-blue-100/50 rounded text-[10px] font-bold uppercase tracking-wider">
                      {broker.broker_type?.includes("Discount") && (broker.broker_type?.includes("Full-Service") || broker.broker_type?.includes("Full Service"))
                        ? "Discount / Full Service" 
                        : broker.broker_type?.includes("Discount") ? "Discount Broker" : "Full-Service Broker"}
                    </span>
                  </div>

                  {/* CENTER COLUMN: METRICS & PARAMETERS */}
                  <div className="flex-1 flex flex-col justify-between gap-3.5">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 bg-slate-50/60 px-3.5 py-2 rounded-lg border border-slate-100">
                      <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider mr-1">Segments:</span>
                      {["Equity", "Commodity", "Currency", "Futures", "Options"].map(seg => (
                        <SegmentBadge key={seg} label={seg} segments={segmentCollection} />
                      ))}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 px-0.5">
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Account Opening</p>
                        <p className="text-sm font-medium text-slate-700 break-words">{openingFee}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Delivery Fee</p>
                        <p className="text-sm font-medium text-slate-700 break-words">{deliveryFee}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Intraday Fee</p>
                        <p className="text-sm font-medium text-slate-700 break-words">{intradayFee}</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Options Trading</p>
                        <p className="text-sm font-medium text-slate-700 break-words">{optionsFee}</p>
                      </div>
                      <div className="col-span-2 lg:col-span-1 group relative">
                        <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">Platforms</p>
                        <div className="flex flex-col gap-0.5 text-slate-600 max-w-full">
                          {platform.mobile_trading_platform && (
                            <span className="text-xs font-medium flex items-center gap-1 truncate max-w-[160px]">
                              <Smartphone size={12} className="text-slate-400 flex-shrink-0" /> 
                              {platform.mobile_trading_platform}
                            </span>
                          )}
                          {platform.web_trading_platform && (
                            <span className="text-xs font-medium flex items-center gap-1 truncate max-w-[160px]">
                              <Monitor size={12} className="text-slate-400 flex-shrink-0" /> 
                              {platform.web_trading_platform}
                            </span>
                          )}
                          {!platform.mobile_trading_platform && !platform.web_trading_platform && (
                            <span className="text-xs text-slate-400">Standard Terminal</span>
                          )}
                        </div>
                        
                        {(platform.mobile_trading_platform || platform.web_trading_platform) && (
                          <div className="absolute left-0 top-full mt-2 bg-slate-900 text-white text-xs p-2.5 rounded shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-150 z-20 min-w-[240px] border border-slate-700">
                            {platform.mobile_trading_platform && <div className="break-words">• Mobile: {platform.mobile_trading_platform}</div>}
                            {platform.web_trading_platform && <div className="mt-1 break-words">• Web: {platform.web_trading_platform}</div>}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: ACTION STACK */}
                  <div className="flex flex-row md:flex-col justify-end items-center md:items-stretch gap-2 min-w-[150px] border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                    <button
                      onClick={() => navigate(`/brokerdetails/${currentSlug}`)}
                      className="flex-1 md:flex-initial text-center py-2 px-4 border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 text-xs font-semibold rounded-lg transition-all duration-150"
                    >
                      Full Details
                    </button>
                    <button
                      onClick={() => {
                        if (broker.account_opening_url) {
                          window.open(broker.account_opening_url, "_blank", "noopener,noreferrer");
                        } else {
                          navigate("/login");
                        }
                      }}
                      className="flex-1 md:flex-initial py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-all duration-150 flex items-center justify-center gap-1 shadow-xs"
                    >
                      Open Account
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </section>

        <AdBanner />

        {/* REFACTORED RECOMMENDATIONS SECTION */}
        <div className="bg-white rounded-3xl border border-gray-200 p-10">
          <h3 className="text-center uppercase tracking-[2px] text-sm font-bold text-slate-500 mb-8">
            Our Top Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dynamicRecommendationCategories.map((rec, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 text-center border border-transparent"
              >
                <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-slate-600">
                  {rec.title}
                </h4>
                <div className="flex justify-center gap-8">
                  {rec.brokers.map((brokerName, i) => {
                    // Match text strings dynamically against downloaded database schemas
                    const brokerMatch = brokersList.find(
                      (b) => b.name?.toLowerCase().trim() === brokerName.toLowerCase().trim()
                    );

                    // Compute clean fallback routing params if the database state hasn't resolved
                    const computedSlug = brokerMatch?.slug || brokerName.toLowerCase().replace(/\s+/g, "-");
                    const supabaseLogo = brokerMatch?.logo;

                    return (
                      <div
                        key={i}
                        onClick={() => navigate(`/brokerdetails/${computedSlug}`)}
                        className="text-center cursor-pointer group"
                      >
                        <div className="w-14 h-14 bg-white border rounded-2xl mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-slate-400 overflow-hidden transition-all duration-200 group-hover:scale-105 group-hover:border-green-300 group-hover:shadow-xs">
                          {supabaseLogo ? (
                            <img
                              src={supabaseLogo}
                              alt={`${brokerName} logo`}
                              className="w-full h-full object-contain p-2"
                              onError={(e) => {
                                // Dynamic UI recovery fallback if image load errors out
                                e.target.style.display = "none";
                                e.target.parentNode.innerText = brokerName[0];
                              }}
                            />
                          ) : (
                            <span>{brokerName[0]}</span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-slate-700 group-hover:text-green-600 transition-colors">
                          {brokerName}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-3xl border border-gray-200 p-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center">
              <HelpCircle size={24} className="text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
          </div>

          <div className="divide-y divide-gray-100">
            {visibleFaqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="font-semibold text-lg pr-8 text-slate-800 group-hover:text-green-700 transition">{faq.q}</span>
                  {openIndex === i ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                {openIndex === i && (
                  <p className="mt-5 text-slate-600 leading-relaxed text-[15.5px]">{faq.a}</p>
                )}
              </div>
            ))}
          </div>

          {!showAllFAQs && faqs.length > 10 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllFAQs(true)}
                className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 mx-auto"
              >
                Show all FAQs <span>↓</span>
              </button>
            </div>
          )}
        </div>

        {/* RISK DISCLOSURE */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 flex gap-5">
          <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-amber-800 leading-relaxed">
            Investments in securities market are subject to market risks. Read all related documents carefully before investing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrokerAnalyzerGuide;