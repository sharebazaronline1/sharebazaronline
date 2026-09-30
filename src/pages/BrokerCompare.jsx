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
  Plus,
  Minus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { supabase } from "../lib/supabase";

const SITE_URL = "https://sharebazaaronline.com";
const CANONICAL_URL = `${SITE_URL}/comparebrokers`;

/* ==========================================================
   FAQ DATA — mirrors FAQPage schema (must match exactly)
   ========================================================== */
const FAQ_DATA = [
  {
    q: "Which is the best stock broker in India in 2026?",
    a: "The best stock broker in India depends on your trading style. For low-cost discount brokerage, Zerodha, Upstox, Groww, Angel One and 5paisa dominate. For full-service research-backed investing, ICICI Direct, HDFC Securities, Kotak Securities and Motilal Oswal are preferred. Use our broker comparison tool above to compare brokerage charges, ratings and active clients side by side before choosing.",
  },
  {
    q: "How do I compare brokerage charges between two brokers?",
    a: "Select any two brokers from the dropdowns above and click Start Comparison. Our tool instantly shows account opening fees, equity delivery charges, intraday charges, futures and options brokerage side by side, along with ratings and active client counts so you can spot the lowest brokerage broker for your needs.",
  },
  {
    q: "What is the difference between a demat account and a trading account?",
    a: "A demat account holds your shares and securities in electronic form, while a trading account is used to place buy and sell orders on stock exchanges. Most Indian brokers offer a combined 2-in-1 or 3-in-1 account that links your demat, trading, and bank accounts together for seamless transactions.",
  },
  {
    q: "Which broker has the lowest brokerage charges in India?",
    a: "Discount brokers such as Zerodha, Upstox, Groww, Angel One, 5paisa, and Dhan offer the lowest brokerage in India — typically ₹0 for equity delivery and a flat ₹20 per executed order for intraday, futures, and options. Full-service brokers charge a percentage of turnover, which is higher.",
  },
  {
    q: "Is a demat account free to open?",
    a: "Yes. Most leading discount brokers including Zerodha, Upstox, Groww, Angel One, and 5paisa offer free demat account opening with zero account opening charges. Some brokers charge a small annual maintenance charge (AMC) of ₹0–₹300 per year depending on the plan.",
  },
  {
    q: "Which broker is best for beginners in the Indian stock market?",
    a: "For beginners, Groww and Zerodha are the most recommended due to their simple user interface, free demat account opening, zero equity delivery brokerage, and strong educational resources. Angel One and Upstox are also excellent beginner-friendly brokers with low charges.",
  },
  {
    q: "How many active clients does Zerodha have compared to other brokers?",
    a: "Zerodha is India's largest stock broker by active clients, followed closely by Groww, Angel One, Upstox, and ICICI Securities. Our broker comparison cards above display the latest active client count for every broker so you can compare market leaders instantly.",
  },
  {
    q: "Are SEBI-registered brokers safe for investing?",
    a: "Yes. All brokers listed on ShareBazaarOnline are SEBI-registered and are members of NSE, BSE, and MCX. Your shares are held with depositories CDSL or NSDL, which are regulated by SEBI, ensuring your investments remain safe even if a broker faces operational issues.",
  },
  {
    q: "Which broker offers zero brokerage on equity delivery?",
    a: "Zerodha, Upstox, Groww, Angel One, 5paisa, Dhan, Fyers, and Paytm Money all offer zero brokerage on equity delivery. This means you pay no brokerage when you buy shares and hold them for the long term — only statutory charges like STT, GST, and stamp duty apply.",
  },
  {
    q: "How do I open a demat and trading account online?",
    a: "Choose your broker from our comparison, click Open Account, and complete the paperless KYC process using your PAN, Aadhaar, bank account details, and a selfie. Most brokers including Zerodha, Groww, and Upstox activate the account within 24–48 hours.",
  },
];

/* ==========================================================
   FAQ SECTION COMPONENT
   ========================================================== */
const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
    <button
      onClick={onToggle}
      className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition"
      aria-expanded={isOpen}
    >
      <span className="font-bold text-gray-900 text-sm sm:text-base">{question}</span>
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <p className="px-5 sm:px-6 pb-5 text-sm text-gray-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider">
          Help Center
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Broker Comparison — Frequently Asked Questions
        </h2>
        <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto">
          Everything you need to know about comparing stock brokers, demat accounts, and brokerage charges in India.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_DATA.map((item, idx) => (
          <FAQItem
            key={idx}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          />
        ))}
      </div>
    </section>
  );
};

const featureCards = [
  { icon: Wallet, title: "Low Brokerage", desc: "Compare delivery & intraday charges instantly.", color: "emerald" },
  { icon: Zap, title: "Fast Trading", desc: "Choose platforms with faster execution speed.", color: "blue" },
  { icon: TrendingUp, title: "Best for Traders", desc: "Find brokers suitable for active traders.", color: "emerald" },
  { icon: ShieldCheck, title: "Trusted & Safe", desc: "SEBI registered & investor trusted brokers.", color: "blue" },
];

const formatCharge = (value) => {
  if (!value) return "—";

  let text = String(value).trim();

  text = text
    .replace(/Rs\.?/gi, "₹")
    .replace(/&#8377;|&\s*₹\s*;|&amp;#8377;/g, "₹")
    .replace(/\\u20B9/g, "₹")
    .replace(/\s+/g, " ");

  const cleaned = text.replace(/[₹,\s]/g, "");
  if (/^\d+(\.\d+)?$/.test(cleaned)) {
    return `₹${cleaned}/order`;
  }

  return text.length > 45 ? text.substring(0, 45) + "..." : text;
};

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

/* ==========================================================
   FLEXIBLE CHARGE LOOKUP
   ----------------------------------------------------------
   Different brokers in the DB store brokerage keys with
   different naming conventions, e.g.:
     "equity_delivery_for_individuals"
     "equity_delivery_individual"
     "equity delivery individual"
   This resolver normalizes both sides and tries:
     1) exact match
     2) normalized match (lowercase + non-alphanum → "_")
     3) token-based loose match (all tokens present)
   so KEY CHARGES always populates when data exists.
   ========================================================== */
const normalizeKey = (k) =>
  String(k)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

const findChargeValue = (charges, aliases) => {
  if (!charges || typeof charges !== "object") return null;

  // Build normalized map for lookup
  const normalized = {};
  Object.keys(charges).forEach((k) => {
    normalized[normalizeKey(k)] = charges[k];
  });

  const isUsable = (v) => v !== undefined && v !== null && v !== "";

  // 1) exact or normalized match on any alias
  for (const alias of aliases) {
    if (isUsable(charges[alias])) return charges[alias];
    const nk = normalizeKey(alias);
    if (isUsable(normalized[nk])) return normalized[nk];
  }

  // 2) loose token-based fallback (all meaningful tokens must be present)
  for (const alias of aliases) {
    const nk = normalizeKey(alias);
    const tokens = nk.split("_").filter((t) => t.length > 2);
    if (!tokens.length) continue;

    const found = Object.keys(normalized).find((k) => {
      const hit = tokens.every((t) => k.includes(t));
      return hit && isUsable(normalized[k]);
    });

    if (found) return normalized[found];
  }

  return null;
};

const getCharge = (broker, aliases) => {
  const charges = broker?.details?.brokerage_charges;
  const val = findChargeValue(charges, aliases);
  return val ?? "—";
};

const getAccountCharge = (broker, aliases) => {
  const charges = broker?.details?.account_opening_charges;
  const val = findChargeValue(charges, aliases);
  return val ?? "—";
};

const fixedSegments = ["Equity", "F&O", "Commodity", "Currency"];

const CompareCard = ({ broker, highlight }) => {
  if (!broker) {
    return (
      <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl h-[920px] flex flex-col items-center justify-center text-center p-8 transition-colors hover:border-gray-300">
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
      className={`relative bg-white rounded-3xl overflow-hidden border flex flex-col h-[920px] transition-all duration-300 ${
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

      <div className="px-6 pt-10 pb-6 text-center border-b border-gray-100 h-[260px] flex flex-col items-center justify-between">
        <div className="w-24 h-24 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-center">
          <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" />
        </div>

        <h3 className="text-2xl font-extrabold text-center h-16 flex items-center justify-center leading-tight text-gray-900 mt-2 tracking-tight">
          {broker.name}
        </h3>

        <div className="grid grid-cols-2 gap-4 w-full max-w-xs bg-gray-50/70 p-3.5 rounded-2xl border border-gray-100">
          <div className="border-r border-gray-200 last:border-0 pr-2">
            <StarRating rating={rating} />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mt-1">Rating</p>
          </div>
          <div className="pl-2 flex flex-col justify-center items-center">
            <div className="flex items-center gap-1.5 text-gray-900">
              <Users size={16} className="text-emerald-600 flex-shrink-0" />
              <span className="text-base font-bold leading-tight text-center line-clamp-2 h-10 flex items-center justify-center">
                {activeUsersFormatted}
              </span>
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 mt-1">Active Clients</p>
          </div>
        </div>

        <div className="mt-5 h-10 flex items-center">
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 font-bold rounded-xl text-xs uppercase tracking-wide">
            {brokerType}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col bg-white justify-between">
        <div className="mb-8 h-[330px]">
          <p className="uppercase text-xs tracking-widest text-gray-400 mb-4 font-bold">KEY CHARGES</p>
          <div className="divide-y divide-gray-100 text-sm">
            {[
              [
                "Account Opening",
                getAccountCharge(broker, [
                  "individual_account_opening_fee",
                  "account_opening_fee",
                  "individual_account_opening",
                  "account_opening_individual",
                  "account_opening",
                ]),
              ],
              [
                "Equity Delivery",
                getCharge(broker, [
                  "equity_delivery_for_individuals",
                  "equity_delivery_individual",
                  "equity delivery individual",
                  "equity_delivery",
                ]),
              ],
              [
                "Intraday",
                getCharge(broker, [
                  "intraday_for_individuals",
                  "intraday_individual",
                  "intraday individual",
                  "intraday",
                ]),
              ],
              [
                "Futures",
                getCharge(broker, [
                  "futures_trades_for_individuals",
                  "futures_individual",
                  "futures individual",
                  "futures_trades",
                  "futures",
                ]),
              ],
              [
                "Options",
                getCharge(broker, [
                  "option_trades_for_individuals",
                  "options_trades_for_individuals",
                  "options_individual",
                  "option_individual",
                  "options individual",
                  "option individual",
                  "options_trades",
                  "option_trades",
                  "options",
                  "option",
                ]),
              ],
            ].map(([label, value]) => (
              <div 
                key={label} 
                className="flex justify-between items-start gap-4 min-h-[64px] py-3 border-b border-gray-100 last:border-0"
              >
                <span className="text-gray-500 font-medium text-xs md:text-sm flex-shrink-0 mt-0.5">{label}</span>
                <span className="font-semibold text-gray-900 text-xs md:text-sm leading-5 text-right line-clamp-3 overflow-hidden max-w-[65%]">
                  {formatCharge(value)}
                </span>
              </div>
            ))}
          </div>
        </div>

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

        <div className="mt-auto pt-6 border-t border-gray-100 grid grid-cols-2 gap-3 h-[88px]">
          <Link
            to={`/brokerdetails/${broker.slug}`}
            className="py-3.5 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors text-center text-sm flex items-center justify-center"
          >
            View Details
          </Link>
          <button className="py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md shadow-emerald-600/10 text-sm flex items-center justify-center">
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
          const parsedData = data.map(broker => ({
            ...broker,
            details: typeof broker.details === "string" ? JSON.parse(broker.details) : broker.details
          }));

          setBrokers(parsedData);
          const urlParam1 = searchParams.get("broker1");
          const urlParam2 = searchParams.get("broker2");
          const urlParam3 = searchParams.get("broker3");

          let b1Match = null;
          let b2Match = null;
          let b3Match = null;

          if (urlParam1) {
            b1Match = parsedData.find((b) => (b.slug || b.name.toLowerCase().replace(/\s+/g, "-")) === urlParam1.toLowerCase().trim());
            if (b1Match) setBroker1(b1Match);
          }
          if (urlParam2) {
            b2Match = parsedData.find((b) => (b.slug || b.name.toLowerCase().replace(/\s+/g, "-")) === urlParam2.toLowerCase().trim());
            if (b2Match) setBroker2(b2Match);
          }
          if (urlParam3) {
            b3Match = parsedData.find((b) => (b.slug || b.name.toLowerCase().replace(/\s+/g, "-")) === urlParam3.toLowerCase().trim());
            if (b3Match) setBroker3(b3Match);
          }

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

  /* ==========================================================
     JSON-LD SCHEMAS — the real SEO signals
     ========================================================== */

  // 1. WebPage + Organization
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${CANONICAL_URL}#webpage`,
    url: CANONICAL_URL,
    name: "Compare Best Stock Brokers in India 2026 - Brokerage Charges & Ratings",
    description:
      "Compare top stock brokers in India side by side. Check brokerage charges, account opening fees, ratings, active clients and trading segments to find the best broker in India 2026.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "ShareBazaarOnline",
      publisher: { "@id": `${SITE_URL}#organization` },
    },
    about: {
      "@type": "Thing",
      name: "Stock Broker Comparison in India",
      description:
        "Side-by-side comparison of Indian stock brokers including brokerage charges, demat account fees and trading segments.",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.jpg`,
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  // 2. Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "ShareBazaarOnline",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    sameAs: [
      "https://twitter.com/sharebazaar",
      "https://www.linkedin.com/company/sharebazaaronline",
    ],
  };

  // 3. BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Compare Brokers", item: CANONICAL_URL },
    ],
  };

  // 4. ItemList — the brokers being compared
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "List of Best Stock Brokers in India 2026",
    description:
      "Compare the best stock brokers in India by brokerage charges, ratings, active clients, and trading segments.",
    numberOfItems: brokers.length,
    itemListElement: brokers.slice(0, 20).map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FinancialService",
        name: b.name,
        url: `${SITE_URL}/brokerdetails/${b.slug}`,
        ...(b.logo ? { image: b.logo } : {}),
        ...(b.rating
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: parseFloat(b.rating).toFixed(1),
                bestRating: "5",
                worstRating: "1",
                ratingCount: 100,
              },
            }
          : {}),
      },
    })),
  };

  // 5. FAQPage — most important for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const safeJson = (obj) =>
    JSON.stringify(obj).replace(/</g, "\\u003c");

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <LoadingAnimation />
      </div>
    );

  return (
    <>
      <Helmet>
        {/* ============ PRIMARY META ============ */}
        <title>
          Compare Best Stock Brokers in India 2026 - Brokerage Charges & Ratings
        </title>

        <meta
          name="description"
          content="Compare the best stock brokers in India 2026 side by side. Check brokerage charges, demat account opening fees, ratings, active clients and trading segments to find the lowest brokerage broker for you."
        />

        <meta
          name="keywords"
          content="share analysis tools, tool for stock analysis, demat account, zerodha account opening, demat account opening, zerodha demat account, best broker for trading, free demat account, open demat account online, open trading account, hdfc demat account, icici demat account, kotak demat account charges, best demat account, free trading account, demat, upstox demat account, upstox account opening, discount brokers, free demat account opening, zerodha demat account opening, best trading account, angel broking demat account, share broker, stock market account opening, online demat account, demat account meaning, angel broking account opening, kotak trading account, zero brokerage demat account, stock market broker, groww demat account, value investing course, create demat account, demat and trading account, zerodha new account, share market account open, angel broking charges, motilal oswal demat account, free demat account with no annual charges, angel account opening, bajaj demat account, zerodha online account opening, zero brokerage trading account, open stock trading account, hdfc demat account charges, online trading account, zero brokerage trading app, icici demat account charges, icici direct demat account, tickertape, free demat account app, icici trading account, best trading account for beginners, zerodha account opening charges, zerodha account, open a trading account online, free brokerage demat account, share market account, zerodha new account opening, demat account india, demat account kotak, demat account charges, demat trading account, low brokerage demat account, best stock broker in india, kotak demat account opening, 5 paisa demat account, lowest brokerage charges, share market demat account, share market brokers, demat account app, low brokerage trading app, top 10 stock brokers in india, icici demat account opening, hdfc demat account opening, open demat account online free, icici direct account opening, angel broking demat account opening, motilal oswal demat account charges, upstox account opening charges, lowest brokerage fees, zerodha account opening documents, best trading account in india, iifl account opening, open demat account online india, share market account open online, new demat account, hdfc demat, online trading free, ticker tape screener, hdfc trading account, zerodha create account, broker comparison, top brokers in india, kotak trading account charges, lowest brokerage charges demat account in india, free trading account with zero brokerage, trading account in india, kotak securities account opening, motilal demat account, lowest brokerage charges in india, best demat account lowest brokerage, 5 paisa account opening, demat app, mutual funds stock, kotak securities open demat account, anand rathi demat account, free demat account in india, free demat and trading account, upstox demat account opening, upstox demat account charges, brokerage free trading, best broker in india, zerodha free account opening, top stock brokers in india, best discount broker, open share trading account, zerodha demat account opening charges, kotak 3 in 1 account, bajaj finance demat account, stock screener india, my demat account, investment trading account, bajaj finserv demat account, 5paisa account opening, best share broker in india, discount brokers in india, stock brokers in india, zero brokerage brokers, top brokers for trading, edelweiss demat account, broker online trading, best discount broker in india, groww demat account charges, best broker for trading in india, hdfc securities demat account, cheap brokerage accounts, zerodha trading account, best zero brokerage trading account in india, trading app with zero brokerage, stock market trading account, kotak free demat account, low brokerage trading account, trading account in stock market, broker trading account, top 5 stock brokers in india, zerodha broker, motilal oswal open demat account, best stock screener india, open new demat account, ticker tape app, trading brokers in india, angel open account, best brokerage account in india, best broker for stock market, kotak bank demat account charges, demat account opening charges, stock broker comparison, best app for demat account, icici demat account opening online, create demat account online, open demat account sbi, zerodha account opening form, best share broker, lowest brokerage charges demat account, zerodha account opening process, 0 brokerage demat account, open free trading account, 0 brokerage trading app in india, open demat account online angel broking, brokerage account opening, lifetime free demat account, stock market demat account, kotak securities demat account charges, cheap broker for trading, kotak demat charges, angel broking demat account charges, trading bank account, demat account open online free, brokerage accounts comparison, minimum brokerage charges demat account, zero brokerage trading account in india, i want to open demat account, angel broking free demat account, hdfc demat account opening online, share market new account open, my trading account, angel broking account opening charges, open demat and trading account, demat account opening zerodha, low brokerage, free demat account opening app, share broker online, share trading brokers, groww trading account, zero brokerage trading platform, open upstox account, top stock broker, icici direct account opening online, icici direct demat account opening, stock market demat account open, zerodha free demat account, bajaj finance demat account login, open my demat account, online share trading account opening, demat account groww, free brokerage trading account, upstox free demat account, iifl demat account opening, 5paisa open account, zero brokerage trading india, stock market brokers in india, free demat account with zero brokerage, oswal demat account, stoxkart account opening, instant demat account, best app to open demat account, demat account opening process, zero brokerage demat account india, best demat and trading account, zerodha trading account opening, demat account for stock trading, best broker for demat account, kotak demat account brokerage charges, account for trading, kotak open demat account, iifl demat account opening online, lowest commission stock broker, best zero brokerage trading account, free online trading account, choice demat account, free brokerage account india, bajaj demat account login, angel broking account, bajaj trading account, open online stock trading account, less brokerage demat account, demat account list, new trading account, kotak online demat account, less brokerage charges, zerodha demat, 0 brokerage trading, demat account for minors, www demat account opening, demat account kholna hai, zerodha share market, online angel broking account opening, demat trading account opening, kotak trading account opening, demat account how to open, upstox account, lowest brokerage charges app, bajaj finserv demat account opening, iifl demat account charges, to open demat account, zerodha sign in, online courses for investing, lowest charges demat account, upstox com open demat account, upstox trading account, share market demat account opening, open broker account online, upstox demat account opening charges, open demat account without pan card, icici trading account charges, 5 paisa demat account charges, open demat, upstox demat account login, top 10 brokers in india, motilal oswal free demat account, free trading demat account, zero brokerage broker, demat account opening documents, best broker for share market, deemed account, zero brokerage app, zerodha demat account opening documents, icici direct online demat account opening, icici securities demat account, discount stock broker, lowest brokerage in india, open demat account online kotak, upstox open demat account, bajaj account opening, open demat account upstox, create a demat account online, demat account download, low brokerage demat account in india, kotak demat account opening online, motilal account opening, groww open demat account, demat account registration, demat account trading account, demat account and trading account, lowest cost share trading platform, demat account link, zero brokerage stock broker, less brokerage charges demat account in india, upstox online account opening, low brokerage trading platform, transfer stock from one broker to another, free brokerage share trading, stock market ticker tape, iifl trading account opening, groww demat account login, want to open demat account, free share trading account, brokerage for trading, open angel broking account online, trading demat account free, documents required for demat account, demat account opening angel broking, www zerodha demat account opening, groww demat account opening charges, best full service brokers, bank account for stock trading, angel trading account, zerodha online, make demat account, open demat account in upstox, best demat account in us, demat trading, low brokerage broker, best demat account with zero brokerage, demat account information, espresso demat account opening, stock demat account, kotak demat account opening charges, top discount brokers in india, best free demat account, demat account 5paisa, share market trading account, demat account number, fastest demat account opening, kotak securities account opening charges, motilal oswal trading account, 5paisa demat account charges, free demat, low cost trading account, best and cheapest trading platform, stock research tool, best low brokerage trading account in india, open free demat account angel broking, broker for trading stocks, axis trading account, demat account company, hdfc securities account opening, angel online account opening, axis direct account open, demat account opening in angel broking, iifl securities demat account, open free demat account upstox, bajaj finserv demat account login, 5paisa free demat account, 5 paisa account opening charges, free trading account india, edelweiss demat account charges, broker compare, indian broker, demat account benefits, zero demat account opening charges, demat account broker, angel account opening charges, demat account for mutual funds, zerodha demat account opening online, screener stock market, iifl securities account opening, steps to open demat account, open new demat account online, upstox free account opening, online brokers in india, top 10 brokers for trading, tradesmart account opening, create free demat account, best online demat account, best bank account for trading, demat account bajaj finserv, bank account for trading, ticker finology app, low charge trading app, demat account application, all demat account, demat account best app, top discount brokers, demat account open kaise kare, icici direct demat account charges, discount brokers comparison, open a demat account in zerodha, top share brokers in india, open motilal oswal demat account, online trading demat account, cheap brokerage demat account india, my demat account number, open demat account axis bank, trading offers, share screener, transferring shares from one broker to another, 5paisa online account opening, best demat account for trading, demat account zero brokerage, groww open account, 5paisa account opening charges, new zerodha account, lowest brokerage trading app in india, icici 3 in 1 account charges, online demat, open demat account online zerodha, hdfc trading account charges, zerodha new account opening process, online free demat account, free online demat account opening in india, share brokers in india, share brokerage charges, brokerage charges comparison, zero balance demat account opening, trading brokerage charges, icici securities demat account charges, instant demat and trading account, bajaj finserv trading account, demat account angel, intraday trading account opening, demat account charges comparison, instant demat account opening, demat online account opening, lowest brokerage charges app in india, kotak mahindra trading account charges, demat account for beginners, zero maintenance demat account, zerodha online trading, icici securities account opening, open free demat account zerodha, open demat account 5paisa, equity trading account, motilal oswal demat charges, demat account opening in india, 5paisa open demat account, best stock broker with low fees, icici securities charges, zerodha register, no charges demat account, all demat account charges list, kotak demat account amc charges, bajaj demat login, stock holding demat account, less brokerage demat account in india, kotak brokerage account, upstox account opening process, low brokerage trading account in india, free demat and trading account opening, demat account opening upstox, ticker finology app download, open demat account groww, open zero balance demat account online, kotak bank demat account opening, no 1 stock broker in india, icici demat account online, zero dha, 3 in 1 demat account, open your demat account, icici demat account brokerage charges, zerodha brokerage account opening, trading account comparison, motilal oswal demat account opening charges, share demat account, demat account charges list, icici demat charges, open 5paisa account, best account for share trading, brokerage free demat account in india, free demat account app in india, demat account brokerage charges, about demat account, zerodha demat account opening process, demat account without aadhar, easy demat account opening, zerodha free account, brokerage charges list, zero brokerage demat, ticker stock screener, demat account opening in zerodha, anand rathi account opening, bajaj finserv demat account charges, new account zerodha, open demat account in groww, best stock market brokers in india, free zerodha account opening, icici direct account opening charges, demat account opening form, trading account free balance, open trading account in india, hdfc demat account brokerage charges, share market brokers in india, make demat account online, new demat account opening offers, lowest intraday charges, icici trading account opening, top trading brokers in india, zerodha account opening charges free, upstox 3 in 1 account, lowest share trading brokerage, groww demat account opening, upstox new account opening, best share market broker in india, free demat account zero brokerage, icici demat account opening charges, share market account opening process, apply demat account online, best stocks screener, demat account opening motilal oswal, account for stock trading, brokerage rates, angel demat account opening charges, zerodha online account opening process, hdfc 3 in 1 account, demat account details, free zerodha account, without demat account how to buy shares, alice blue account opening charges, best demat account bank, lowest brokerage charges for intraday trading in india, bajaj finserv demat login, lowest trading charges, free charges demat account, demat account opening procedure, share trading brokerage charges, demat account website, best share trading broker, online trading account opening india, open iifl demat account, 0 brokerage trading account, zerodha stock broker, motilal oswal online demat account, upstox opening charges, hdfc securities open demat account, investment brokers in india, less charges demat account, account demat, kotak securities account opening online, icici demat and trading account, broker with lowest brokerage, icici brokerage account, demat account iifl, lowest brokerage charges trading account, demat account offers, trading account opening charges, trading broker list, stock broker with lowest brokerage, create new demat account, zerodha online demat account, bajaj demat, open free demat account motilal oswal, hdfc securities demat account charges, best online stock broker in india, icici demat brokerage charges, zerodha online demat account opening, demat account requirements, free demat account opening zerodha, best screener for stocks india, free demat account upstox, demat application, apply for demat account, hdfc demat brokerage charges, upstox demat account opening process, stoxkart open account, demat account near me, motilal demat account charges, open demat trading account, zerodha opening charges, demat account open kotak, brokerage free trading account, demat account kholna, icici direct new account opening, online demat and trading account, stock brokerage charges, trading and demat account opening, less brokerage charges in india, zerodha online account, brokers with zero brokerage, 5 paisa demat account opening charges, best site to open demat account, bank demat account, demat account opening online zerodha, demat account in upstox, ticker tape stocks, best full service broker in india, trading account brokers, free account opening broker, hdfc demat and trading account, upstox demat account free, zerodha account opening time, best broker to open demat account, hdfc demat account online, minimum brokerage demat account, open demat account without aadhar card, demat account comparison, minor trading account opening online, demat account under 18, i have demat account how to open trading account, quick demat account opening, to open demat account online, angel broking amc charges, online demat account india, only trading account, 5paisa demat account opening charges, top 5 brokers for stock market, academy of value investing, find my demat account, online stock broker india, stock broking account, account for stock market, demat account new, ticker tape website, demat account process, best broker for investment, open account in upstox, zerodha new demat account opening, best demat account to open, open trading account in zerodha, edelweiss demat account opening online, lowest trading brokerage charges, open demat account online upstox, groww free demat account, zerodha share market account opening, best app for opening demat account, best demat account opening app, new stock broker, instant demat account opening online, new account opening zerodha, open demat account for minor, low brokerage trading, stock broking services, free account opening in zerodha, kotak bank trading account charges, offline demat account opening, icici demat account amc charges, indian share market brokers list, demat zerodha, zerodha account opening link, yes demat account, icici demat opening, bajaj finance demat account charges, online demat account opening in zerodha, kotak demat and trading account charges, best broker for indian share market, open new zerodha account, stock trading platform india, good demat account, kotak demat account annual charges, low cost demat account, ticket app share market, online broker for share market, demat account with no brokerage charges, compare brokerage charges, stock analysis and screening tool, demat and trading, kotak dp charges, 5paisa demat account login, pranjal kamra course, icici demat trading account, demat share market, kotak securities dp charges, demat account zero charges, zerodha account opening procedure, share trading brokerage charges comparison, angel broking account opening online, zerodha account opening status, amc for demat account, open 5paisa demat account, zerodha open new account, all brokerage charges, ticker tape screen, best demat, pranjal kamra stock market course, icici demat account opening process, cheapest trading platform in india, demat account without brokerage, invest without demat account, open hdfc securities account online, documents required to open demat account, direct demat account, best site for demat account, hdfc securities demat account opening, broker account opening form, motilal oswal trading account opening, kotak mahindra demat account brokerage charges, edelweiss demat account opening, icicidirect new account, zerodha new account opening charges, hdfc trading account opening, demat account opening offers, trading account in share market, bajaj finserv trading account login, lowest brokerage broker in india, demat id, demat account on zerodha, open free demat, free delivery demat account, procedure of opening a demat account pdf, top 10 brokerage, online demat account opening axis bank, select broker, cheap demat account, best broker with lowest brokerage, iifl account opening charges, mutual funds stock market, demat account without aadhar card, stock broker best, india best trading broker, demat account without amc charges, demat brokers in india, lowest intraday brokerage charges, edelweiss trading account, icici demat amc charges, most popular demat account, select demat account, my demat account details, discount stock brokers in india, cheapest brokerage charges in india, stock research company, top share broker, axis demat account open, demat account age limit, offline demat account, demat account 0 brokerage, grow up demat account, icici demat account annual charges, screener for stock market, check my demat account, kotak 3 in 1 account charges, trading account fees, nsdl demat account opening online, angel broking account opening process, share market brokerage charges, ticker tape stock screener, cheapest brokerage in india, icici securities open account, demat account minimum balance, demat account check, demat meaning, less brokerage trading account in india, open free demat and trading account online, ticker screener, angel broking demat account opening process, difference between demat and trading account, top demat account app, bajaj demat account charges, stock brokers in india list, free equity delivery brokers, ticker by finology app, upstox online demat account opening, best trading account with low brokerage, open new account in zerodha, bajaj finance demat login, angel broking demat account opening charges, opening of demat account in zerodha, hdfc securities account, kotak amc charges, demat charges, axis direct account opening online, open demat and trading account online, free demat account opening india, free stock broker india, lowest stock brokerage charges in india, zerodha how to open account, start a demat account, open groww demat account, demat account brokerage charges comparison, lowest brokerage app, demat account free of cost, best free demat and trading account, zero brokerage broker in india, choice stock broking, open upstox demat account, best broking sites in india, sebi demat account, the academy of value investing, trading account charges, zerodha demat opening, open a demat account for free, documents required to open demat account in angel broking, india brokerage account, open upstox trading account, online zerodha demat account opening, new zerodha account opening, best website to open demat account, online broking account, demat brokerage charges, transfer of stock from one broker to another, demat account opening near me, zerodha demat account opening link, demat account official website, best stock broker for beginners in india, samco open account, intraday trading lowest brokerage, account for trading stocks, demat best account, best demat account for share market, top share market brokers in india, demat account best broker, edelweiss account opening charges, hdfc demat plans, mosl account opening, the best demat account, top trading account, demat account online form, stock market brokerage charges, broker charges, 5 paisa demat account amc charges, total demat account in india, hdfc demat account charges calculator, open free zerodha account, investment in trading account, documents required to open demat account in india, open demat online, to open demat account in zerodha, corporate demat account opening, icici demat plans, demat account with no annual charges, a demat account, use of demat account, zero brokerage india, about trading account, 3 in 1 trading account, new account in zerodha, india no 1 demat account, online upstox account opening, free delivery brokerage, annual maintenance charges in zerodha, icici securities account opening charges, online demat account zerodha, open account upstox, nsdl demat account opening, free amc charges demat account, trading brokerage charges comparison, option brokerage charges comparison, lowest brokerage charges in share market, best demat account with low charges, best trading account for beginners in india, demat account angel broking charges, best online trading account in india, zerodha demat and trading account, axis bank 3 in 1 account, best brokerage demat account, best broker house in india, india demat account opening, open demat in zerodha, best broker list, best demat account broker, demat account check online, documents for demat account, no amc charges demat account, stock research and analysis, trading account zerodha, upstox account opening charges today, hdfc demat trading account, best company for demat account, cheap stock brokers in india, compare brokers online, open demat account in 5 paisa, icici demat account plans, choice account opening, share brokerage comparison, compare trading account, demat account login groww, zero brokerage demat account in india, smc demat account opening, 0 delivery brokerage, hdfc securities account opening charges, top trading account in india, demat account sign in, zerodha opening, after opening demat account how to buy shares, compare demat account, zerodha account opening form online, top stock market brokers in india, easiest demat account opening, motilal oswal demat account amc charges, lowest intraday charges in india, all demat account charges, demat account opening in upstox, bajaj finserv demat account brokerage charges, best broker in india for share market, share market zero brokerage, icici 3 in 1 account benefits, new account opening in zerodha, 3 in one demat account, demat account opening age limit, demat account opening app, best bank account for trading stocks, low brokerage stock broker in india, best online brokers for stock trading in india, very low brokerage charges, upstox account opening documents, kotak mahindra demat brokerage charges, zerodha new demat account, best demat broker in india, best broking companies in india, zerodha free demat account opening, demat account opening in groww, upstox charges for demat account, demat account id, edelweiss online account opening, axis bank direct account opening, demat account broker list, hdfc brokerage account, no 1 share market broker in india, zerodha securities, zerodha online trading account, demat account with less brokerage, demat demat account, demat and trading account charges, stock analysis screener, open demat account on groww, share market screener, demat account application form, demat account without charges, no annual charges demat account, upstox account opening link, anand rathi demat account open, demat investment, investment without demat account, best equity broker in india, open demat account with hdfc securities, open demat account free of cost, nsdl trading account, upstox demat and trading account, zerodha brokerage demat account, demat opening in zerodha, minimum charges demat account, bank of baroda demat account opening online, kotak securities demat account amc charges, trading brokerage comparison, trading account for company, new stock brokers in india, requirements to open demat account, fast demat account opening, best broker with less brokerage, icici demat account charges pdf, icici demat online, transfer demat account from one broker to another, the best stock broker in india, demat account statement, demat account maintenance charges, best demat account app india, online axis direct account opening, minimum age for demat account, hdfc demat opening, open zerodha demat account online, india best low brokerage trading account, easiest way to open demat account, i want to open demat account which company is best, demat offer, top 3 stock brokers in india, icici demat account benefits, account opening upstox, 3 in 1 account kotak, 3 in 1 account upstox, 3 in 1 account zerodha, 3 in 1 savings account, 3 in 1 zerodha account, 5 paisa account maintenance charges, 5 paisa demat account login, 5paisa 3 in 1 account, 5paisa account maintenance charges, 5paisa account opening process, 5paisa demat account annual charges, 5paisa demat account brokerage charges, 5paisa demat charges, 5paisa opening charges, best share broker company in india, a demat account is used to, a trading account, about demat and trading account, about stock broker, about zerodha demat account, academy of value investing course free download, academy of value investing finology, academy of value investing pranjal kamra, access demat account, account demat account, account for share trading, account for shares, account in zerodha, account maintenance charges groww, account maintenance charges in groww, account maintenance charges in zerodha, account opening at zerodha, account opening charges, account opening charges for zerodha, account opening charges in groww, account opening charges of zerodha, account opening charges on zerodha, account opening fee for zerodha, account opening fee in groww, account opening fee in zerodha, account opening in groww, account opening in upstox, account opening in zerodha charges, account opening process in zerodha, account opening time in zerodha, account zerodha, activate demat account, activate zerodha account, after opening demat account what to do, after opening zerodha account what to do, age for demat account, age for opening demat account, age limit for opening demat account, age limit to open demat account, age to open demat account, alice blue opening charges, all about demat account, all broker list, all brokerage charges comparison, all brokers in india, all demat account brokerage charges, all demat account company list, all demat account list, all stock brokers in india, already have demat account how to open trading account, amc charges for demat account, amc charges for demat account zerodha, amc charges of 5 paisa, amc charges of demat account, amc charges zerodha, amc for demat, amc for demat account charges, amc for demat account in zerodha, amc for demat account zerodha, amc for zerodha, amc for zerodha demat account, amc in demat account, amc in zerodha, amc of demat account, amc of zerodha, amc on zerodha, amc zerodha, anand rathi account opening charges, anand rathi demat account charges, angel broking account charges, angel broking account maintenance charges, angel broking account opening fees, angel broking account opening status, angel broking account opening steps, angel broking account status, angel broking annual maintenance charges, angel broking charges account opening, angel broking charges for demat account, angel broking demat account amc charges, angel broking demat account annual charges, angel broking demat account brokerage charges, angel broking demat account documents required, angel broking demat account maintenance charges, angel broking demat charges, angel broking dp charges, angel broking online account opening documents, angel broking online demat account, angel broking trading account opening charges, angel dp charges, angel stock broker, annual charges for demat account, annual charges of groww demat account, annual charges of zerodha demat account, annual charges zerodha, annual demat charges, annual maintenance charges for demat account in angel broking, annual maintenance charges for demat account in upstox, annual maintenance charges for demat account in zerodha, annual maintenance charges for zerodha, annual maintenance charges groww, annual maintenance charges in groww, best stock broking companies in india, annual maintenance charges of groww, annual maintenance charges of zerodha, any charges for demat account, app stock demat account, axis bank 3 in 1 account charges, axis bank demat account 2 in 1, axis bank online demat account, axis bank online share trading, axis bank trading account opening, axis demat account 2 in 1, axis demat account brokerage charges, axis demat account charges pdf, axis demat account online, axis demat account opening charges, axis demat brokerage charges, best stock broking firm in india, axis demat open, axis direct account charges, axis direct account opening charges, axis direct demat account charges, axis direct demat account opening, axis direct demat account opening charges, axis direct demat charges, axis online demat account login, axis online demat account opening, axis online trading account, axis open demat account, axis trading account charges, axisdirect account, axisdirect open account, bajaj finserv demat, bajaj finserv demat account review, bajaj finserv trading account review, bajaj trading account charges, bank brokers in india, bank charges for demat account, bank demat account charges, bank demat account charges comparison, bank of baroda demat account opening, bank statement for zerodha, bank stock broker, basic demat account, benefits of demat account in india, benefits of opening a demat account, benefits of trading account, benefits of zerodha, benefits of zerodha account, benefits of zerodha demat account, best 3 in 1 demat account, best 5 brokers in india, best bank account for zerodha, best bank broker in india, best broker for beginners in india, best broker for delivery trading, best broker for delivery trading in india, best broker for demat account in india, best broker for equity delivery, best broker for equity trading in india, best broker for investment in india, best broker for stock market in india, best stock broking house in india, best broker in india for demat account, best brokerage charges, best brokerage charges for intraday, best brokerage charges in india, best brokerage plan in india, best brokers for stock trading in india, best brokers for stock trading india, best broking, biggest stock brokers in india, best company to open demat account, best demat account broker in india, best demat account charges, best demat account comparison, best demat broker, best discount stock brokers in india, best equity broker, brokerage house in india, best free brokerage account india, best full service stock brokers in india, best investment broker in india, best low cost brokerage in india, best low cost demat account, best offer for demat account, best online brokers in india, best online demat account opening, best screener for stocks in india, best securities, best service broker in india, brokerage services in india, best share brokerage firm in india, best share market broker company in india, best share trading account in india, best stock broker for beginners in india 2020, best stock broker for trading, best stock broker in india for beginners, best stock broker in india with charges, best stock broker with low brokerage, charges of brokerage, define demat account, demat account account, best stock market trading platform in india, best stock screener sites india, best stock screener website in india, beta ticker, biggest broker in india, demat account axis, book by pranjal kamra, broker brokerage, broker commission in share market, broker comparison finology, broker comparison india, broker finology, broker in stock market in india, broker list in india, broker of stock exchange, brokerage account and demat account difference, brokerage calculator compare, brokerage calculator comparison, brokerage calculator finology, brokerage charges compare, brokerage charges comparison in india, brokerage charges in india, brokerage charges of all brokers, brokerage charges of demat account in india, brokerage charges of different brokers, brokerage charges of different companies, brokerage charges of various brokers in india, brokerage comparison for online trading, brokerage fees in india, demat account best in india, brokerage of different brokers, brokerage rate comparison, demat account explain, brokers in india stock market, broking charges comparison, buy shares without demat account, buy stocks without demat account, cdsl demat account charges, cdsl demat account opening online, cdsl number of demat accounts, change bank account in demat account, change demat account, change stock broker, charges for demat account in groww, charges for demat account in upstox, charges for demat account in zerodha, charges for opening demat account in angel broking, charges for opening demat account in groww, charges for opening demat account in upstox, charges for opening demat account in zerodha, charges for opening zerodha account, charges for zerodha account opening, demat account explanation, charges of opening a demat account, charges of zerodha demat account, charges to open demat account in upstox, charges to open demat account in zerodha, charges to open zerodha account, cheap demat account charges, cheapest brokerage demat account, cheapest brokerage demat account in india, cheapest brokerage for trading in india, cheapest online trading account, check demat account details, check my demat account status, check your demat account, check zerodha account status, checking demat account online, choice demat, close angel broking account online, close axis direct account online, close demat account online, close icici demat account online, close icici direct account online, close icici direct demat account online, close zerodha account online, close zerodha demat account, compare all brokers, compare all stock brokers in india, compare brokerage calculator, compare brokerage charges for online trading india, compare brokerage charges in india, compare brokerage charges of demat account in india, compare brokers finology, compare brokers in india, compare charges of demat account in india, compare demat account in india, compare discount brokers in india, compare share brokers, compare stock broker charges, compare stock brokers india, compare trading charges, comparison demat account charges, comparison of discount brokers in india, comparison of stock brokers in india, cost of demat account, cost of opening a demat account, cost of opening a demat account in zerodha, cost of opening demat account in zerodha, cost of opening zerodha account, demat account fee, demat & trading account charges, demat 3 in 1 account, demat a, demat account 2 in 1, demat account no, demat account activation, demat account age, demat account all information, demat account and mutual funds, demat account and trading account charges, demat account annual maintenance charges comparison, demat account what is, demat account balance, demat account balance check, demat account bank list, demat account best company, demat system, demat account brokers in india, demat account brokers near me, demat account by zerodha, demat account can be opened with, demat account charges groww, demat account charges in groww, demat account charges in india, demat account charges in upstox, demat account charges in zerodha, demat account charges of different banks, demat account charges on groww, demat account charges per year, demat account charges upstox, demat account charges zerodha, demat account commission, demat account comparison india, demat account depository participant, demat account details by pan card, demat account details zerodha, demat account dp, demat account dp charges, demat account earn money, demat account eligibility, demat account example, dematerialized account, depository participant charges, demat account features, diff between demat account and trading account, demat account fees comparison, demat account for, demat account for minor zerodha, demat account for private limited company, demat account for what purpose, demat account format, demat account free amc, demat account full details, demat account full information, demat account government, demat account has been introduced to, demat account history, demat account holder, demat account holding, demat account how it works, demat account in, demat account in hdfc securities, demat account in simple words, demat account in us, demat account income tax, demat account info, demat account information in english, demat account interest rate, demat account introduction, demat account investment, demat account is, demat account is a type of, demat account is free, demat account is opened by, demat account is opened with, demat account is safe, demat account is used for, demat account is used to, demat account ke liye document, demat account kyc, demat account kyc form, demat account limit, demat account login upstox, demat account maintenance charges groww, demat account maintenance charges upstox, demat account maintenance charges zerodha, demat account mandatory for mutual funds, demat account market share, demat account maximum limit, demat account means what, demat account mein, demat account minimum age, demat account minimum charges, demat account minor, demat account monthly charges, demat account name, demat account name list, demat account necessary for mutual fund, demat account needed for mutual funds, demat account news, diff between demat and trading account, demat account no format, demat account no in zerodha, demat account number check, demat account number in zerodha, demat account number zerodha, demat account of zerodha, demat account office near me, demat account on upstox, demat account online apply, demat account open groww, demat account opening age, demat account opening agencies, demat account opening cashback, demat account opening charges comparison, demat account opening charges in groww, demat account opening charges in sbi, demat account opening charges in zerodha, demat account opening charges zerodha, demat account opening commission, demat account opening company, demat account opening company list, demat account opening fee, demat account opening form download, demat account opening form pdf, demat account opening formalities, demat account opening job, demat account opening meaning, demat account opening online hdfc, demat account opening process in zerodha, demat account opening steps, demat account opening time, demat account opening time taken, demat account opening work, demat account passbook, demat account payment, demat account pdf, demat account price, demat account procedure, demat account profit, demat account proof, demat account pros and cons, demat account providers in india, demat account required for mutual fund, demat account review, demat account rules, demat account services, demat account share transfer, demat account sites, demat account start in india, demat account statement zerodha, demat account status, demat account to bank transfer charges, demat account transaction charges, demat account transaction statement, demat account transfer, demat account transfer charges, demat account transfer to zerodha, demat account type, demat account upstox charges, demat account used for, demat account verification, diff between trading account and demat account, demat account with least brokerage, demat account with no maintenance charges, demat account with zero charges, demat account without annual charges, demat account without bank account, demat account without trading account, demat account work, demat account zerodha charges, demat account zerodha login, demat amc, demat amc charges, demat and trading account are same, demat and trading account charges comparison, demat and trading account kya hai, demat and trading account meaning, demat annual maintenance charges, demat application form, demat balance, demat bank, demat benefits, demat broker, demat broker list, demat brokerage charges comparison, demat brokerage comparison, demat card, demat charges comparison, demat charges groww, demat charges in groww, demat charges in zerodha, demat comparison, demat debit charges, demat depository, demat details, demat download, demat dp id, demat for minor, demat form, demat holding, demat in zerodha, demat information, demat limit, demat long form, demat maintenance charges, demat market, demat no, demat opening charges, demat opening procedure, demat opening process, demat opening time, demat poa, demat procedure, demat process, demat proof, demat required for mutual fund, demat securities, demat service, demat share, demat share transfer, demat statement, demat stock, difference between demat account and trading account, demat trading account kya hai, demat trading account meaning, demat trading meaning, demat transaction charges, demat transaction charges in zerodha, demat transaction statement, demat transfer, demat transfer charges, difference in demat and trading account, depository account details, depository of zerodha, equity brokers in india, derivatives brokerage charges comparison, good brokers in india, good stock brokers in india, icici demat account fees, diff between trading and demat account, difference between bank account and demat account, difference between demat account and bank account, india stock screener, difference between demat and mutual funds, difference between trading account and demat account zerodha, india's best broker, difference in trading and demat account, different brokerage charges in india, different demat accounts, direct demat, discount broker charges, discount broker charges comparison, discount brokers in india comparison, discount brokers list in india, discount demat account, discount share brokers in india, documents for demat account in zerodha, documents for demat account zerodha, documents for opening zerodha account, documents for zerodha, documents for zerodha account, documents for zerodha account opening, documents needed for demat account, documents needed for zerodha account, documents needed for zerodha account opening, documents needed to open a demat account, documents needed to open demat account, documents needed to open demat account in zerodha, documents needed to open zerodha account, documents required for account opening in zerodha, documents required for angel broking account opening, documents required for demat account in upstox, documents required for demat account in zerodha, documents required for demat account zerodha, documents required for opening account in zerodha, documents required for opening demat account in angel broking, documents required for opening demat account in upstox, documents required for opening demat account in zerodha, documents required for opening trading account, documents required for opening zerodha account, documents required for opening zerodha demat account, documents required for trading account, documents required for upstox account opening, documents required for upstox demat account, documents required for zerodha, documents required for zerodha account, documents required for zerodha account online, documents required for zerodha account opening, documents required for zerodha demat account, documents required for zerodha demat account online, documents required to open a demat account in zerodha, documents required to open account in zerodha, documents required to open angel broking demat account, documents required to open demat account in upstox, documents required to open demat account in zerodha, documents required to open trading account in zerodha, documents required to open upstox account, documents required to open zerodha account, documents required to open zerodha account online, documents required to open zerodha demat account, documents to open zerodha account, dp account in zerodha, dp account number zerodha, dp amc charges, dp charges in 5 paisa, dp charges in demat account, dp charges in edelweiss, dp charges in stock market, dp charges of all brokers, dp charges of different brokers, dp charges on zerodha, dp demat, dp for demat account, easy way to open demat account, edelweiss account opening process, edelweiss demat account opening charges, edelweiss dp charges, electronic transfer of shares, eligibility to open demat account, equity account in zerodha, equity brokerage comparison, indian best stock broker, equity screener india, espresso demat account opening charges, fin ticker, find demat account number zerodha, find demat account with pan card, find my broker finology, find my demat account number, finology 5 star stocks, finology academy, finology academy of value investing, finology best mutual fund, finology broker, finology broker comparison, finology brokerage calculator, finology by pranjal kamra, finology careers, finology compare brokers, finology course, finology course price, finology course review, finology customer care number, finology demat account, finology dotkom, finology financial planning, finology free course, finology idea bag, finology india, finology internship, finology invest, finology mutual fund, finology portfolio, finology pranjal kamra, finology review, finology screener, finology share, finology stock, finology stock analysis, finology stock broker, finology stock market course, finology stock recommendations, finology stock screener, finology subscription, finology ticker app, finology ticker calculator, finology ticker course, finology ticker mutual fund, finology ticker review, finology ticker tape, finology value investing course, finology ventures, finology zerodha, finticker, flat brokerage charges in india, for demat account which bank is good, for mutual fund demat account required, for trading account, free annual charges demat account, free delivery stock broker, free delivery trading, free demat account bank, free demat account quora, free demat and trading account online, free online demat and trading, free online demat and trading account, free trading and demat account with low brokerage, from where to open demat account, full service broker charges, full service broker india, full service broker with lowest brokerage, full service stock brokers in india, full stock broker, full time broker charges, get demat account statement, indian stockbroker, good discount brokers in india, nsdl demat accounts, government demat account, groww 3 in 1 account, groww app demat account opening charges, groww charges for demat account, groww demat account amc charges, groww demat account annual charges, groww demat account brokerage charges, groww demat account details, groww demat account documents required, groww demat account maintenance charges, groww demat account opening process, groww demat account opening time, groww demat account yearly charges, groww demat and trading account charges, groww demat login, groww opening charges, groww trading account charges, groww without demat account, hdfc 3 in 1 account charges, hdfc 3 in 1 account opening online, hdfc 3 in one account, hdfc bank brokerage charges, hdfc demat account activation, hdfc demat account charges pdf, hdfc demat account details, hdfc demat account form, hdfc demat account opening status, hdfc demat account review, hdfc demat account trading charges, hdfc demat brokerage, hdfc demat login account, hdfc demat online, hdfc demat trading charges, hdfc online share trading, hdfc online trading account open, hdfc sec account opening, hdfc sec demat charges, hdfc securities 3 in 1 account, hdfc securities account charges, hdfc securities account opening online, hdfc securities annual maintenance charges, hdfc securities demat account brokerage charges, hdfc securities demat account opening charges, hdfc securities demat charges, hdfc securities dp charges, hdfc securities free demat account, hdfc securities online demat account opening, hdfc securities opening charges, hdfc securities trading account charges, hdfc share brokerage, hdfc share trading account, hdfc share trading charges, hdfc stock broker, hdfc stock brokerage charges, hdfc three in one account, hdfc trading account brokerage charges, hdfcsec brokerage, high brokerage charges, highest demat account in india, i already have a demat account how to buy shares, i direct account opening, i have a demat account how to buy shares, icici 3 in 1 account opening charges, icici broker charges, icici demat account charges yearly, icici demat account details, icici demat account features, nsdl dp account, icici demat account maintenance charges, icici demat account minimum balance, icici demat account number, icici demat account offer, icici demat account opening form pdf, icici demat account process, icici demat account review, icici demat and trading account charges, icici demat banking, icici demat trading charges, icici direct 3 in 1 account, icici direct 3 in 1 account opening charges, icici direct account charges, icici direct account maintenance charges, icici direct account opening offers, icici direct account opening process, icici direct demat account amc charges, icici direct demat account annual charges, icici direct demat account maintenance charges, icici direct demat account opening charges, icici direct demat charges, icici direct dp charges, icici direct fees and charges, icici direct login account opening, icici direct online trading account opening, icici direct opening charges, icici direct trading account charges, icici dp charges, icici securities demat charges, idea bag pranjal kamra, ideabag finology, iifl annual maintenance charges, iifl demat account amc charges, iifl demat account annual charges, iifl demat account benefits, iifl demat account brokerage charges, iifl demat account opening charges, iifl demat account opening form, iifl demat brokerage charges, iifl demat charges, iifl securities demat account charges, in demat account, in how many days demat account is opened, in how many days zerodha account open, in zerodha, income proof for demat account, income tax on demat account, india best broker company, india best broker for trading, india best brokerage account, india best discount broker, india best stock market broker, india biggest stock broker, india no 1 broker, india number one broker, india screener, india stock analysis, india stock broker list, open a demat, india top 10 broker, india top 5 stock brokers, open an account with zerodha, india's no 1 discount broker, india's number one stock broker, india's top stock broker company, screener indian stocks, indian stock market ticker, indian stock research, indian stock ticker, screener share market, indian top brokerage house, instant demat account online, interest on demat account, intraday brokerage charges comparison, intraday charges comparison, itc finology, kotak 3 in 1 account benefits, kotak demat account charges 2021, kotak demat account maintenance charges, kotak demat account yearly charges, kotak securities account charges, kotak securities account maintenance charges, kotak securities account opening process, kotak securities trading account charges, kyc form for demat account, last step of zerodha account opening, less brokerage, link demat account with zerodha, linking demat account with bank account, list of stock brokers in india 2020, list of top stock brokers in india, login in angel broking, low amc demat account, low cost brokerage in india, low cost stock brokers in india, low cost trading platform in india, lowest brokerage charges demat, lowest brokerage charges for intraday trading, lowest brokerage charges for online trading, lowest brokerage charges for trading in india, lowest brokerage charges in demat account, lowest brokerage charges in india 2020, lowest brokerage charges in india for trading, lowest brokerage demat, lowest brokerage for trading in india, lowest brokerage full service broker, lowest brokerage in stock market, lowest brokerage on delivery, lowest commission stock broker india, lowest equity brokerage in india, maintenance charges for demat account, maintenance charges in zerodha, maintenance charges of demat account, maintenance free demat account, major stock brokers in india, make zerodha account, maximum limit of demat account, minimum age for demat account opening, minimum age for opening demat account, minimum age requirement for demat account, minimum age to open a demat account, minimum age to open trading account, minimum amount to open demat account, minimum brokerage, minimum brokerage charges for trading, minimum brokerage in share market, minor can open demat account, moneycontrol demat account opening, mosl demat account, most popular brokers in india, most popular stock brokers in india, motilal oswal annual maintenance charges, motilal oswal charges for demat account, motilal oswal demat account annual charges, motilal oswal demat account benefits, motilal oswal demat account brokerage charges, motilal oswal demat account closure, motilal oswal demat account closure online, motilal oswal trading account charges, move shares from one demat account to another, mutual fund finology, mutual fund require demat account, mutual funds and stock market, mutual stock, my demat, my demat account balance, my demat account status, my finology, my finology ticker, my first investment finology, my zerodha account, my zerodha account is not opening, name of stock brokers in india, need for demat account, need of demat account, new brokerage firm, new demat, new demat account zerodha, no 1 demat account, no 1 trading broker in india, no annual maintenance charges for demat account, nsdl demat account opening charges, screener stocks india, share trading brokers in india, nsdl free demat account, nsdl online demat account opening, nsdl open demat account, number 1 stock broker in india, number one broker in india, number one demat account, number one share broker in india, number one stock broker in india, o ticker finology, offline account opening zerodha, old demat account, online account opening in zerodha, online account opening zerodha, online account zerodha, online axis demat account opening, online brokers for stock trading in india, online demat trading account opening, online share brokers in india, online share trading brokers, online trading brokerage charges, online trading brokers in india, online transfer of shares from one demat account to another, online zerodha, online zerodha account opening documents, sign in demat account, open a demat account zerodha, open account on zerodha, stock brokerage companies in india, open broking account online, open demat account on zerodha, open demat account online nsdl, open demat axis bank, open demat zerodha, open edelweiss trading account, open new account zerodha, open online zerodha account, open stock trading account online, open trade zerodha, open trading account in hdfc, open trading account in upstox, open trading and demat account online, open upstox 3 in 1 account, open zerodha 3 in 1 account, open zerodha account for free, open zerodha account free, opening a demat account in zerodha, opening charges in zerodha, opening demat account with depository, opening of zerodha account, operation of demat account, pan card is compulsory for opening demat account, pan card required for demat account, paperless demat account opening, pay account opening fee in zerodha, paytm demat account opening online, popular demat account, popular stock brokers in india, pranjal kamra book, pranjal kamra company, pranjal kamra course review, pranjal kamra screener, pranjal kamra share market, pranjal kamra stock portfolio, procedure and documents required to open a demat account, procedure of demat trading, procedure to open demat account in zerodha, procedure to open zerodha account, process of opening demat account in zerodha, process of zerodha account opening, process to open demat account in zerodha, process to open zerodha account, pros and cons of demat account, purpose of opening demat account, requirement for zerodha account, requirements for opening zerodha account, requirements to open zerodha account, research paper on demat account, safe demat account, samco account opening charges, samco demat account charges, samco demat account opening, sas demat account opening, sbi online demat account opening procedure, screener finology, screener for indian stock market, screener for share market, screener for stocks india, screener in share market, screener in stock market, screener india stocks, stock screener for indian stocks, screener of stocks, stock screener in india, screener share price today, stockbroker in india, screener ticker, screener ticker tape, screener tool, screener website for stocks, sebi demat account opening, secure demat account, select finology calculator, select my broker, selection of broker, selling shares from demat account, share brokerage charges in india, share market analysis tool, share market bank account, share market best broker in india, share market broker commission, share market brokerage charges in india, share market dp, share market dp charges, share market lowest brokerage, share market ticker, share market top 10 brokers, share market top brokers, share ticker, ticker market app, share transfer to another demat account, shares in demat account, top brokerage companies in india, state bank demat account charges, steps for zerodha account opening, steps to open account in zerodha, steps to open demat account in zerodha, steps to open upstox account, steps to open zerodha account, stock analysis and screening tool for investors in india, stock analysis tools india, stock analysis website india, stock broker brokerage comparison, stock broker charges india, stock broker commission rates in india, stock broker list india, stock broker zerodha, stock brokerage charges comparison, stock brokerage charges comparison india, stock brokerage charges in india, top equity brokers in india, stock brokers top 10, stock finology, stock holding brokerage charges, stock holding demat account charges, stock in trading account, stock market best broker in india, stock market brokerage charges in india, stock market top brokers, top stock broker companies in india, trading dp, stock screener share price, stock screener today, stock tracker india, stock trading brokerage comparison, stock trading brokers in india, stock trading charges, upstox annual maintenance charges, stoxkart account opening charges, taper ticker, tech and finance brokerage charges, the best broker in india, things needed to open demat account, things needed to open zerodha account, things required to open a demat account, things required to open demat account, things to know before opening demat account, ticker app by finology, ticker beta, ticker broker comparison, ticker by finology app download, ticker by finology calculator, ticker by finology screener, ticker by pranjal kamra, ticker fin, ticker finology broker, ticker finology calculator, ticker finology course, ticker finology dotkom, ticker finology download, ticker finology mutual fund, ticker finology screener, ticker for stocks, ticker founder, ticker india, zerodha account opening fee, ticker plus subscription price, ticker site, ticker talks by finology, ticker talks finology, ticker tape analysis, ticker tape by finology, ticker tape dotcom, ticker tape finology, ticker tape india, ticker tape pranjal kamra, ticker tape review, ticker tape share market, ticker tape stock analysis, ticker tape top stocks, ticker technology, ticker tips, ticker top, ticker trading software, ticker trap, tickerlogy, ticket app for share market, ticket app stock market, ticket stock market, tikker tip, time required for opening demat account, time taken for zerodha account opening, time to open demat account, time to open zerodha account, to open demat account in sbi, to open zerodha account, top 10 best stock brokers in india, top 10 demat brokers in india, top 10 discount stock brokers in india, top 10 indian brokers, top 10 trading account in india, top 3 share market brokers in india, top 5 best stock broker in india, top 5 trading brokers in india, top best brokers in india, top best stock brokers in india, top broker for share market, top broker list, zerodha minor account, top brokerage firms in india 2020, top brokers for trading in india, top brokers in stock market, top demat account broker, top demat brokers, top discount stock brokers in india, zerodha minor account opening, top five stock brokers in india, top free demat account, top investment brokers in india, top most brokers in india, top online brokers in india, top online stock brokers in india, broker stock, top stock broking companies, top ten share market brokers in india, top ten trading brokers in india, trading account age limit, trading account and demat account are same, trading account charges comparison, trading account company, trading account details, zerodha demat account charges, trading account groww, trading account information, trading account list, trading account name, trading account no, trading account number in zerodha, trading account opening charges in zerodha, trading account opening process, trading account requirements, trading account to bank account money transfer, trading account transactions, trading account upstox, trading and demat account meaning, trading charges comparison, trading charges in india, broking account, transactions in your demat account, transfer demat account to another broker, transfer money to demat account, transfer of demat account from one broker to another, transfer of demat shares, transfer of shares from one demat account to another, transfer shares from demat account to another, transfer shares to another demat account, transfer shares to zerodha, transfer stocks from one demat to another, tricker share, tricker share market, tricker tip, trickle tape stock, types of brokers in indian stock market, types of stock brokers in india, upstox 3 in 1 account benefits, upstox 3 in 1 account charges, upstox 3 in 1 account login, upstox account amc charges, upstox account annual charges, upstox account charges, upstox account maintenance charges, upstox account not opening, upstox account opening benefits, upstox account opening charges 2021, upstox account opening fee, upstox account opening form, upstox account opening form pdf, upstox account opening free, upstox account opening offer, upstox account opening process pdf, upstox account opening status, upstox account opening steps, upstox account opening time, axis demat account charges, upstox charges account opening, upstox charges for account opening, upstox close account form, upstox customer care number for account opening, upstox demat account amc charges, upstox demat account annual charges, upstox demat account close, upstox demat account details, upstox demat account documents required, upstox demat account maintenance charges, upstox demat account opening documents, upstox demat account opening time, upstox demat account status, upstox demat account yearly charges, upstox demat amc charges, upstox demat and trading account charges, upstox demat charges, upstox demat login, upstox demat opening charges, upstox fees and charges, upstox free account opening offer, upstox how to open account, upstox new account opening charges, upstox opening process, upstox trading account charges, upstox trading account opening charges, use of demat and trading account, value investing course by pranjal kamra, value investing course finology, value investing course india, value investing finology, value ticker, view demat account, yes demat, zero annual charges demat account, zero brokerage equity trading, zero delivery brokerage brokers, zero maintenance charges demat account, zerodha 2 in 1 account, zerodha 200 rs, zerodha 3 in 1, zerodha 3 in 1 account, zerodha 3 in 1 account benefits, zerodha 3 in 1 account review, zerodha 3 in one account, zerodha aadhaar link, zerodha account activation, zerodha account amc charges, zerodha account annual charges, zerodha account benefits, zerodha account charges, zerodha account close online, zerodha account documents, zerodha account fees, zerodha account for minor, zerodha account free, zerodha account holders, zerodha account maintenance charges, zerodha account online, zerodha account opening age limit, zerodha account opening and amc charges, zerodha account opening and maintenance charges, zerodha account opening bank statement, zerodha account opening benefits, zerodha account opening charges 2021, zerodha account opening charges and amc, zerodha account opening charges today, zerodha account opening contact number, zerodha account opening date, zerodha account opening documents online, online stock broking, zerodha account opening for company, zerodha account opening for minor, zerodha account opening for mutual funds, zerodha account opening form offline, zerodha account opening form pdf, zerodha account opening how many days, zerodha account opening login, zerodha account opening number, zerodha account opening offer, zerodha account opening online documents, zerodha account opening online process, zerodha account opening process pdf, zerodha account opening process step by step, zerodha account opening process time, zerodha account opening required documents, zerodha account opening requirements, zerodha account opening steps, zerodha account opening without aadhar, zerodha account requirements, zerodha account review, zerodha account trading charges, zerodha account type, zerodha activate account, zerodha age limit, zerodha amc for demat account, zerodha annual charges, zerodha annual fee, zerodha annual maintenance charge, zerodha annual maintenance charges for demat account, zerodha application form, zerodha bank account opening, zerodha bank statement, zerodha basic demat account, zerodha benefits, zerodha broker review, zerodha brokerage account, zerodha brokerage amc charges, zerodha brokerage company, zerodha brokerage login, zerodha charges account opening, zerodha charges amc, zerodha charges annual, zerodha charges demat account, zerodha charges for account opening, axis demat charges, zerodha charges for opening account, zerodha close account form, zerodha company account, zerodha corporate account opening, zerodha corporate demat account, zerodha customer care account opening, zerodha customer care for account opening, zerodha customer reviews, zerodha demat account amc charges, zerodha demat account annual charges, zerodha demat account brokerage charges, zerodha demat account details, zerodha demat account documents, zerodha demat account documents required, zerodha demat account fees, zerodha demat account for minors, zerodha demat account free, zerodha demat account maintenance charges, zerodha demat account no, zerodha demat account number, zerodha demat account opening documents online, zerodha demat account opening fee, zerodha demat account opening form pdf, zerodha demat account opening steps, zerodha demat account opening time, zerodha demat account requirements, zerodha demat account review, zerodha demat account sign in, zerodha demat account status, zerodha demat account yearly charges, zerodha demat amc, zerodha demat amc charges, zerodha demat and trading account charges, zerodha demat and trading account opening, zerodha demat and trading account opening charges, zerodha demat annual charges, zerodha demat form, zerodha demat id, zerodha demat online account opening, zerodha demat opening charges, zerodha demat transaction charges, zerodha documents, zerodha documents required, zerodha dp account number, zerodha equity account, zerodha for minor, zerodha for trading, zerodha form, zerodha free, zerodha free account opening charges, zerodha free account opening offer, zerodha free amc, zerodha free trading account, zerodha how to open demat account, zerodha income proof, zerodha income proof documents, zerodha is demat account, zerodha is free, zerodha link demat account, zerodha login account opening, zerodha login charges, trading account form, zerodha charges for demat account, zerodha monthly charges, zerodha multiple accounts, zerodha my account, zerodha new, zerodha new account charges, zerodha new account documents, zerodha new account offers, zerodha new account opening documents, zerodha new account opening online, zerodha new account opening time, zerodha offer, zerodha offer for account opening, zerodha official, zerodha official site, zerodha offline account opening, zerodha offline account opening fees, zerodha offline account opening form, zerodha online account login, zerodha online account opening charges, zerodha online account opening documents, zerodha online account opening time, zerodha online demat account login, zerodha open account charges, zerodha open account documents, zerodha open account process, zerodha open demat, zerodha open time, zerodha open trade, zerodha open trading account, zerodha opening documents, zerodha opening fee, zerodha pan number, zerodha plan, zerodha poa form, zerodha poa online, zerodha poa online submission, zerodha process, zerodha required documents, zerodha review, zerodha services, zerodha setup, zerodha share broker, zerodha share login, zerodha share transfer, zerodha sign, zerodha steps to open account, zerodha three in one account, zerodha time to open account, zerodha trading account charges, zerodha trading account number, zerodha trading account opening charges, zerodha trading account opening documents, zerodha trading and demat account opening charges, zerodha verification process, zerodha yearly demat charges"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="author" content="ShareBazaarOnline" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#16A34A" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />

        {/* ============ CANONICAL ============ */}
        <link rel="canonical" href={CANONICAL_URL} />

        {/* ============ OPEN GRAPH / FACEBOOK / WHATSAPP ============ */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ShareBazaarOnline" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta
          property="og:title"
          content="Compare Best Stock Brokers in India 2026 - Brokerage Charges & Ratings"
        />
        <meta
          property="og:description"
          content="Compare top stock brokers in India 2026. Check brokerage charges, demat account fees, ratings, active clients and trading segments side by side."
        />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Compare Stock Brokers in India - ShareBazaarOnline" />

        {/* ============ TWITTER CARD ============ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sharebazaar" />
        <meta name="twitter:creator" content="@sharebazaar" />
        <meta
          name="twitter:title"
          content="Compare Best Stock Brokers in India 2026 - Brokerage Charges & Ratings"
        />
        <meta
          name="twitter:description"
          content="Compare top Indian brokers side by side — brokerage charges, demat fees, ratings, active clients and trading segments."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        {/* ============ STRUCTURED DATA ============ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(faqSchema) }}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50/50 antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-xs font-bold mb-5 tracking-wide uppercase">
              <TrendingUp size={14} /> Compare India's Top Brokers 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Compare Best Stock Brokers in India
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Make the right choice by comparing <strong className="text-gray-700">brokerage charges</strong>,{" "}
              <strong className="text-gray-700">demat account opening fees</strong>, ratings, active clients, and
              trading segments of India's top brokers — side by side.
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
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Select any two or three brokers to compare instantly
            </h2>
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
              <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
                Side-by-Side Broker Comparison
              </h2>

              {isLoading ? (
                <LoadingAnimation />
              ) : (
                <div className="grid gap-8 lg:grid-cols-3 items-stretch">
                  <CompareCard broker={broker1} highlight={broker1 && broker1.name === highestRated?.name} />
                  <CompareCard broker={broker2} highlight={broker2 && broker2.name === highestRated?.name} />
                  <CompareCard broker={broker3} highlight={broker3 && broker3.name === highestRated?.name} />
                </div>
              )}
            </div>
          )}
        </AnimatePresence>

        {/* FAQ Section — SEO gold */}
        <FAQSection />
      </div>
    </>
  );
};

export default CompareBroker;