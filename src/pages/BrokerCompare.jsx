import { useMemo, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ChevronDown,
  ShieldCheck,
  Star,
  TrendingUp,
  Wallet,
  Zap,
  BarChart3,
  Loader2,
  Award,
  Users,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { supabase } from "../lib/supabase";

const featureCards = [
  { icon: Wallet, title: "Low Brokerage", desc: "Compare delivery & intraday charges instantly.", color: "emerald" },
  { icon: Zap, title: "Fast Trading", desc: "Choose platforms with faster execution speed.", color: "blue" },
  { icon: TrendingUp, title: "Best for Traders", desc: "Find brokers suitable for active traders.", color: "emerald" },
  { icon: ShieldCheck, title: "Trusted & Safe", desc: "SEBI registered & investor trusted brokers.", color: "blue" },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center justify-center gap-1.5">
    <Star size={18} className="fill-amber-400 text-amber-400" />
    <span className="text-xl font-bold text-gray-900">{rating}</span>
  </div>
);

const formatActiveUsers = (text) => {
  if (!text) return "N/A";
  return text
    .replace(/active clients?/i, "")
    .replace(/registered customers?/i, "")
    .replace(/total clients?/i, "")
    .replace(/NSE Active Clients?/i, "")
    .replace(/\(.*?\)/g, "")
    .replace(/;/g, " / ")
    .trim();
};

const BrokerDropdown = ({ brokers, label, selected, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <p className="text-sm font-semibold text-gray-500 mb-2.5 ml-1 uppercase tracking-wider">{label}</p>
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-20 bg-white border-2 border-gray-200 hover:border-emerald-500 focus:border-emerald-600 rounded-2xl px-5 flex items-center justify-between transition-all shadow-sm hover:shadow-md"
      >
        <div className="flex items-center gap-4 truncate mr-2">
          {selected ? (
            <div className="w-12 h-12 bg-white rounded-xl p-1.5 border border-gray-100 shadow-sm flex-shrink-0 flex items-center justify-center">
              <img src={selected.logo} alt={selected.name} className="w-full h-full object-contain" />
            </div>
          ) : (
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-100">
              <BarChart3 size={22} className="text-gray-400" />
            </div>
          )}
          <div className="text-left truncate">
            <span className="font-bold text-gray-900 text-base block truncate">
              {selected?.name || "Select Broker"}
            </span>
            <span className="text-xs font-medium text-gray-400 block truncate mt-0.5">
              {selected?.broker_type || "Choose from list"}
            </span>
          </div>
        </div>
        <ChevronDown size={20} className={`text-gray-400 transition-transform flex-shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="max-h-72 overflow-y-auto py-2">
              {brokers.map((broker) => (
                <button
                  key={broker.slug}
                  onClick={() => { onSelect(broker); setOpen(false); }}
                  className="w-full px-5 py-3.5 hover:bg-emerald-50/50 flex items-center gap-4 transition-all border-b border-gray-50 last:border-0"
                >
                  <div className="w-10 h-10 bg-white rounded-lg p-1 border border-gray-100 shadow-sm flex-shrink-0 flex items-center justify-center">
                    <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 text-left truncate">
                    <p className="font-semibold text-gray-900 text-sm truncate">{broker.name}</p>
                    <p className="text-xs text-gray-400 truncate mt-0.5">{broker.broker_type}</p>
                  </div>
                  {selected?.slug === broker.slug && <Check className="text-emerald-600 ml-auto flex-shrink-0" size={18} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const getCharge = (broker, key) => broker?.details?.brokerage_charges?.[key] ?? "—";
const getAccountCharge = (broker, key) => broker?.details?.account_opening_charges?.[key] ?? "—";

const fixedSegments = ["Equity", "F&O", "Commodity", "Currency"];

const CompareCard = ({ broker, highlight }) => {
  if (!broker) {
    return (
      <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl h-full min-h-[600px] flex flex-col items-center justify-center text-center p-8 transition-colors hover:border-gray-300">
        <BarChart3 size={48} className="text-gray-300 mb-4" />
        <p className="font-bold text-gray-400 text-lg">Select a Broker</p>
        <p className="text-sm text-gray-400 mt-1 max-w-[200px]">Add a broker to start comparison parameters</p>
      </div>
    );
  }

  const rating = parseFloat(broker.rating) || "N/A";
  const activeUsersFormatted = formatActiveUsers(broker.active_users);

  let brokerType = broker.broker_type
    ?.replace(/operating on a Discount Brokerage \(Flat[- ]?Fee\) Model/gi, "")
    ?.replace(/Full-Service Broker \(with discount-style flat-fee plans\)/gi, "Full-Service Broker")
    ?.trim() || "Broker";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative bg-white rounded-3xl overflow-hidden border h-full flex flex-col transition-all duration-300 ${
        highlight 
          ? "border-emerald-500 shadow-xl ring-4 ring-emerald-50" 
          : "border-gray-200/80 shadow-md hover:shadow-xl hover:border-gray-300"
      }`}
    >
      {highlight && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-5 py-2 rounded-bl-2xl shadow flex items-center gap-1.5 z-10">
          <Award size={14} /> Top Rated
        </div>
      )}

      {/* Header */}
      <div className="px-6 pt-10 pb-6 text-center border-b border-gray-100 flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-center">
          <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" />
        </div>

        <h3 className="text-2xl font-extrabold text-gray-900 mt-5 tracking-tight min-h-[32px] flex items-center">{broker.name}</h3>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs mt-6 bg-gray-50/70 p-3.5 rounded-2xl border border-gray-100">
          <div className="border-r border-gray-200 last:border-0 pr-2">
            <StarRating rating={rating} />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mt-1">Rating</p>
          </div>
          <div className="pl-2 flex flex-col justify-center items-center">
            <div className="flex items-center gap-1.5 text-gray-900">
              <Users size={16} className="text-emerald-600 flex-shrink-0" />
              <span className="text-base font-bold tracking-tight leading-none break-all line-clamp-2 max-w-full">
                {activeUsersFormatted}
              </span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mt-1">Active Clients</p>
          </div>
        </div>

        <div className="mt-5">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 font-bold rounded-xl text-xs uppercase tracking-wide">
            {brokerType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col bg-white">
        <div className="mb-8">
          <p className="uppercase text-xs tracking-widest text-gray-400 mb-4 font-bold">KEY CHARGES</p>
          <div className="divide-y divide-gray-100 text-sm">
            {[
              ["Account Opening", getAccountCharge(broker, "individual_account_opening_fee")],
              ["Equity Delivery", getCharge(broker, "equity_delivery_individual")],
              ["Intraday", getCharge(broker, "intraday_individual")],
              ["Futures", getCharge(broker, "futures_individual")],
              ["Options", getCharge(broker, "options_individual")],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between items-start gap-4 py-3.5 first:pt-0 last:pb-0">
                <span className="text-gray-500 font-medium text-xs md:text-sm flex-shrink-0">{label}</span>
                <span className="font-semibold text-gray-900 text-right text-xs md:text-sm leading-tight break-words max-w-[65%]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Segments Supported */}
        <div className="mb-8">
          <p className="uppercase text-xs tracking-widest text-gray-400 mb-3 font-bold">SEGMENTS SUPPORTED</p>
          <div className="flex flex-wrap gap-1.5">
            {fixedSegments.map((seg) => (
              <span
                key={seg}
                className="px-3.5 py-1.5 bg-gray-50 text-gray-600 text-xs font-semibold rounded-xl border border-gray-200/60 whitespace-nowrap"
              >
                {seg}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-auto pt-6 grid grid-cols-2 gap-3 border-t border-gray-100">
          <Link
            to={`/brokerdetails/${broker.slug}`}
            className="py-3.5 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors text-center text-sm"
          >
            View Details
          </Link>
          <button className="py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-600/10 text-sm">
            Open Account
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const LoadingAnimation = () => (
  <div className="flex flex-col items-center py-20">
    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}>
      <Loader2 size={60} className="text-emerald-600" />
    </motion.div>
    <p className="text-xl font-extrabold text-gray-900 mt-6">Comparing Brokers...</p>
    <p className="text-sm text-gray-400 mt-1.5">Fetching latest verified data</p>
  </div>
);

const CompareBroker = () => {
  const [brokers, setBrokers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const [broker1, setBroker1] = useState(null);
  const [broker2, setBroker2] = useState(null);
  const [broker3, setBroker3] = useState(null);

  const [showComparison, setShowComparison] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBrokers = async () => {
      try {
        const { data, error } = await supabase
          .from("brokers")
          .select("*")
          .order("name", { ascending: true });

        if (error) throw error;
        if (data) {
          setBrokers(data);
          
          // Identify and bind any specific URL configuration parameters 
          const urlParam1 = searchParams.get("broker1");
          const urlParam2 = searchParams.get("broker2");
          const urlParam3 = searchParams.get("broker3");

          let b1Match = null;
          let b2Match = null;
          let b3Match = null;

          if (urlParam1) {
            b1Match = data.find((b) => (b.slug || b.name.toLowerCase().replace(/\s+/g, "-")) === urlParam1.toLowerCase().trim());
            if (b1Match) setBroker1(b1Match);
          }
          if (urlParam2) {
            b2Match = data.find((b) => (b.slug || b.name.toLowerCase().replace(/\s+/g, "-")) === urlParam2.toLowerCase().trim());
            if (b2Match) setBroker2(b2Match);
          }
          if (urlParam3) {
            b3Match = data.find((b) => (b.slug || b.name.toLowerCase().replace(/\s+/g, "-")) === urlParam3.toLowerCase().trim());
            if (b3Match) setBroker3(b3Match);
          }

          // Automatically pop open the metrics breakdown if multiple entries are matched
          const totalPreselected = [b1Match, b2Match, b3Match].filter(Boolean).length;
          if (totalPreselected >= 2) {
            setShowComparison(true);
          }
        }
      } catch (err) {
        console.error("Error setting initial values:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBrokers();
  }, [searchParams]);

  const selectedBrokers = [broker1, broker2, broker3].filter(Boolean);

  const highestRated = useMemo(() => {
    if (!selectedBrokers.length) return null;
    return [...selectedBrokers].sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0))[0];
  }, [selectedBrokers]);

  const handleCompare = () => {
    if (selectedBrokers.length < 2) return;
    setIsLoading(true);
    setShowComparison(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowComparison(true);
      setTimeout(() => {
        document.getElementById("comparison-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 1200);
  };

  if (loading) return <div className="min-h-screen bg-gray-50/50 flex items-center justify-center"><LoadingAnimation /></div>;

  return (
    <div className="min-h-screen bg-gray-50/50 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-xs font-bold mb-5 tracking-wide uppercase">
            <TrendingUp size={14} /> Compare India's Top Brokers
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">Broker Comparison</h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Make the right choice by comparing brokerage charges, ratings, and features side by side
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {featureCards.map((feature, idx) => {
            const Icon = feature.icon;
            const isEmerald = feature.color === "emerald";
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200/60 hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isEmerald ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mt-5 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Selection Area */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-10 border border-gray-200/60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BrokerDropdown brokers={brokers} label="Broker 1" selected={broker1} onSelect={setBroker1} />
            <BrokerDropdown brokers={brokers} label="Broker 2" selected={broker2} onSelect={setBroker2} />
            <BrokerDropdown brokers={brokers} label="Broker 3" selected={broker3} onSelect={setBroker3} />
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleCompare}
              disabled={selectedBrokers.length < 2}
              className="px-12 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-extrabold text-base rounded-2xl flex items-center gap-2 shadow-lg shadow-emerald-600/10 transition-all disabled:shadow-none disabled:cursor-not-allowed tracking-wider"
            >
              START COMPARISON
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <AnimatePresence>
        {(isLoading || showComparison) && (
          <div id="comparison-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 scroll-mt-6">
            <hr className="border-gray-200 mb-16" />
            <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">Side-by-Side Comparison</h2>

            {isLoading ? (
              <LoadingAnimation />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                <CompareCard broker={broker1} highlight={broker1 && broker1.name === highestRated?.name} />
                <CompareCard broker={broker2} highlight={broker2 && broker2.name === highestRated?.name} />
                <CompareCard broker={broker3} highlight={broker3 && broker3.name === highestRated?.name} />
              </div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompareBroker;