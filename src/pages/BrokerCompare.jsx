// src/pages/CompareBroker.jsx
import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  ShieldCheck,
  Star,
  TrendingUp,
  Wallet,
  Zap,
  BarChart3,
  Loader2,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const brokers = [
  {
    name: "Zerodha",
    type: "Discount",
    rating: 4.6,
    logo: "/images/brokers/zerodha.png",
    tagline: "India’s largest discount broker",
    segments: ["Equity", "F&O", "Commodity", "Currency"],
    charges: { opening: 200, amc: 300, delivery: "₹0", intraday: "₹20 or 0.03%" },
  },
  {
    name: "Angel One",
    type: "Discount",
    rating: 4.4,
    logo: "/images/brokers/angel-one.png",
    tagline: "Smart investing platform",
    segments: ["Equity", "F&O", "Commodity", "Currency"],
    charges: { opening: 0, amc: 240, delivery: "₹0", intraday: "₹20 or 0.03%" },
  },
  {
    name: "Groww",
    type: "Discount",
    rating: 4.5,
    logo: "/images/brokers/groww.png",
    tagline: "Simple investing for everyone",
    segments: ["Equity", "F&O", "Currency"],
    charges: { opening: 0, amc: 0, delivery: "₹20 or 0.05%", intraday: "₹20 or 0.05%" },
  },
  {
    name: "Upstox",
    type: "Discount",
    rating: 4.5,
    logo: "/images/brokers/upstox.jpg",
    tagline: "Fast & modern trading experience",
    segments: ["Equity", "F&O", "Commodity", "Currency"],
    charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹20 or 0.05%" },
  },
  {
    name: "ICICI Securities",
    type: "Full Service",
    rating: 4.2,
    logo: "/images/brokers/icic.png",
    tagline: "Premium research & advisory",
    segments: ["Equity", "F&O", "Commodity", "Currency"],
    charges: { opening: 0, amc: 700, delivery: "0.55%", intraday: "0.275%" },
  },
  {
    name: "HDFC Securities",
    type: "Full Service",
    rating: 4.0,
    logo: "/images/brokers/hdfc.png",
    tagline: "Trusted banking integration",
    segments: ["Equity", "F&O", "Commodity", "Currency"],
    charges: { opening: 0, amc: 750, delivery: "0.50%", intraday: "0.05%" },
  },
];

const featureCards = [
  { icon: Wallet, title: "Low Brokerage", desc: "Compare delivery & intraday charges instantly.", color: "green" },
  { icon: Zap, title: "Fast Trading", desc: "Choose platforms with faster execution speed.", color: "blue" },
  { icon: TrendingUp, title: "Best for Traders", desc: "Find brokers suitable for active traders.", color: "green" },
  { icon: ShieldCheck, title: "Trusted & Safe", desc: "SEBI registered & investor trusted brokers.", color: "blue" },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1 justify-center">
<Star size={18} className="fill-current fill-yellow-600 text-yellow-400" />
    <span className="text-lg font-bold text-gray-900">{rating}</span>
  </div>
);

const BrokerDropdown = ({ label, selected, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <p className="text-sm font-medium text-gray-600 mb-2 ml-1">{label}</p>
      <button
        onClick={() => setOpen(!open)}
        className="w-full h-14 bg-white border border-gray-200 hover:border-blue-500 focus:border-blue-600 rounded-2xl px-5 flex items-center justify-between transition-all shadow-sm"
      >
        <div className="flex items-center gap-3 truncate">
          {selected ? (
            <img
              src={selected.logo}
              alt={selected.name}
              className="w-12 h-12 rounded-lg object-contain border p-1 bg-white"
            />
          ) : (
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <BarChart3 size={26} className="text-gray-400" />
            </div>
          )}
          <span className="font-semibold text-gray-800">
            {selected?.name || "Pick a Broker"}
          </span>
        </div>
        <ChevronDown size={20} className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="max-h-72 overflow-y-auto py-2">
              {brokers.map((broker) => (
                <button
                  key={broker.name}
                  onClick={() => { onSelect(broker); setOpen(false); }}
                  className="w-full px-5 py-3.5 hover:bg-blue-50 flex items-center gap-4 transition-all"
                >
                  <img src={broker.logo} alt={broker.name} className="w-12 h-12 rounded-xl object-contain border bg-white p-1" />
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-900">{broker.name}</p>
                    <p className="text-xs text-gray-500">{broker.type} Broker</p>
                  </div>
                  {selected?.name === broker.name && <Check className="text-blue-600" size={22} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CompareCard = ({ broker, highlight }) => {
  if (!broker) {
    return (
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl h-full min-h-[520px] flex flex-col items-center justify-center text-center p-8">
        <BarChart3 size={56} className="text-gray-300 mb-6" />
        <p className="font-medium text-gray-400 text-lg">Select a Broker</p>
        <p className="text-sm text-gray-500 mt-2">to begin comparison</p>
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative bg-gradient-to-br from-blue-50 to-white rounded-3xl overflow-hidden shadow-xl border transition-all duration-300 ${
        highlight ? "border-blue-600 ring-2 ring-blue-100" : "border-gray-100 hover:border-gray-200"
      }`}
    >
      {highlight && (
        <div className="absolute -top-px -right-px bg-yellow-400  text-white text-xs font-medium px-6 py-2 rounded-bl-3xl shadow-lg flex items-center gap-1.5">
          <Award size={16} /> Best Rated
        </div>
      )}

      {/* Header */}
      <div className="px-8 pt-10 pb-8 text-center">
        <div className="mx-auto w-32 h-32 bg-white rounded-3xl p-6 shadow-2xl">
          <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-gray-900 text-2xl font-bold mt-6">{broker.name}</h3>
        <p className="text-blue-500 text-sm mt-1.5">{broker.tagline}</p>
        <div className="mt-5">
          <StarRating rating={broker.rating} />
        </div>
      </div>

      {/* Body */}
      <div className="p-8 space-y-8">
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-2">Broker Type</p>
          <span className="px-5 py-2 bg-green-100 text-green-700 font-semibold rounded-2xl text-sm inline-block">
            {broker.type}
          </span>
        </div>

        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-4">CHARGES</p>
          <div className="space-y-4">
            {[
              ["Account Opening", `₹${broker.charges.opening}`],
              ["Annual Maintenance", `₹${broker.charges.amc}`],
              ["Equity Delivery", broker.charges.delivery],
              ["Equity Intraday", broker.charges.intraday],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between text-sm border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <span className="text-gray-600">{label}</span>
                <span className="font-semibold text-gray-900">{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">SEGMENTS</p>
          <div className="flex flex-wrap gap-2">
            {broker.segments.map((seg, i) => (
              <span
                key={i}
                className="px-4 py-2 text-xs font-medium bg-green-50 text-green-700 border border-blue-100 rounded-2xl"
              >
                {seg}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 flex gap-3">
          <button className="flex-1 py-4 border border-gray-300 font-semibold rounded-2xl hover:bg-gray-50 transition-colors text-sm">
            Details
          </button>
          <button className="flex-1 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-all text-sm">
            Open Account
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const LoadingAnimation = () => (
  <div className="flex flex-col items-center py-24">
    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}>
      <Loader2 size={72} className="text-blue-600" />
    </motion.div>
    <p className="text-2xl font-semibold text-gray-800 mt-10">Comparing Brokers...</p>
    <p className="text-gray-500 mt-3">Fetching latest data</p>
  </div>
);

const CompareBroker = () => {
  const [broker1, setBroker1] = useState(null);
  const [broker2, setBroker2] = useState(null);
  const [broker3, setBroker3] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedBrokers = [broker1, broker2, broker3].filter(Boolean);

  const highestRated = useMemo(() => {
    if (!selectedBrokers.length) return null;
    return [...selectedBrokers].sort((a, b) => b.rating - a.rating)[0]?.name;
  }, [selectedBrokers]);

  const handleCompare = () => {
    if (selectedBrokers.length < 2) return;
    setIsLoading(true);
    setShowComparison(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowComparison(true);
      document.getElementById("comparison-section").scrollIntoView({ behavior: "smooth" });
    }, 1650);
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp size={18} /> Compare India's Top Brokers
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">Broker Comparison</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Make the right choice by comparing brokerage charges, ratings, and features side by side
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featureCards.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${feature.color}-100 to-white flex items-center justify-center border border-${feature.color}-100`}>
                  <Icon className={`text-${feature.color}-600`} size={34} />
                </div>
                <h3 className="text-xl font-bold mt-6 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-3 leading-snug">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Broker Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BrokerDropdown label="Broker 1" selected={broker1} onSelect={setBroker1} />
            <BrokerDropdown label="Broker 2" selected={broker2} onSelect={setBroker2} />
            <BrokerDropdown label="Broker 3" selected={broker3} onSelect={setBroker3} />
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={handleCompare}
              disabled={selectedBrokers.length < 2}
              className="px-12 py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold text-lg rounded-3xl flex items-center gap-3 shadow-xl transition-all disabled:cursor-not-allowed"
            >
              START COMPARISON
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Result */}
      <AnimatePresence>
        {(isLoading || showComparison) && (
          <div id="comparison-section" className="max-w-7xl mx-auto px-5 md:px-8 pb-24">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Side-by-Side Comparison</h2>

            {isLoading ? (
              <LoadingAnimation />
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <CompareCard broker={broker1} highlight={broker1?.name === highestRated} />
                <CompareCard broker={broker2} highlight={broker2?.name === highestRated} />
                <CompareCard broker={broker3} highlight={broker3?.name === highestRated} />
              </div>
            )}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CompareBroker;