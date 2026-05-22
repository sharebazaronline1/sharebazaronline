// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchIPOs, fetchPreIPODetails } from '../api/mockApi';
import { supabase } from "../lib/supabase";
import IPODashboard, { IPOCard } from "../components/IPODashboard";
import UnlistedCard from '../components/UnlistedCard';
import Blogs from './Blogs';
import UpcomingIpoSidebar from '../components/IPOSidebar'
import BrokerAnalyzer from './BrokerAnalyzer';
import UnlistedSharesSidebar from '../components/UnlistedSidebar';

import { TrendingUp, Gem, Scale, Lightbulb, Star, Check } from 'lucide-react';

const features = [
  "Stocks", "IPO Updates", "Unlisted Shares", "Broker Comparison",
  "Options", "Futures", "Commodity", "ETFs",
  "Mutual Funds", "NFO", "Corporate Actions",
];

const AdBanner = ({ size = "horizontal" }) => (
  <div className="w-full flex justify-center py-4 ">
    <div
      className={`bg-gray-200 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center text-gray-500 font-medium ${
        size === "horizontal" ? "w-full max-w-5xl h-32" : "w-80 h-96"
      }`}
    >
      Advertisement
    </div>
  </div>
);

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const { data: ipos = [], isLoading: isIPOLoading } = useQuery({
    queryKey: ['ipos'],
    queryFn: fetchIPOs,
  });

 const [unlistedStocks, setUnlistedStocks] = useState([]);
const [isUnlistedLoading, setIsUnlistedLoading] = useState(true);

useEffect(() => {
  const loadUnlisted = async () => {
    setIsUnlistedLoading(true);

    try {
      const detailedData = await fetchPreIPODetails();

      const { data: dbData, error } = await supabase
        .from("pre_ipo_companies")
        .select("name, price, lot_size");

      if (error) {
        console.error("Supabase error:", error);
      }

      // ONLY THESE COMPANIES
   const allowedCompanies = [
  "oyo",
  "oravel",

  "nse",

  "care health",
 

  "metropolitan",
  "mse",

  "pharmeasy",
  "api holdings",

  "ola electric",

  "mobikwik",
];

      const normalizeName = (str = "") => {
        return str
          .toLowerCase()
          .replace(/limited|ltd|llp|private|unlisted|shares?|share/gi, "")
          .replace(/[^\w\s]/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      };

    const dbMap = {};

// Strong alias mapping
const aliases = {
  oyo: [
    "oravel stays",
    "oyo",
  ],

  nse: [
    "nse india",
    "national stock exchange",
  ],

  mse: [
    "metropolitan stock exchange",
    "mse",
  ],

  pharmeasy: [
    "pharmeasy",
    "api holdings",
  ],

  care: [
    "care health insurance",
    "care health",
  ],

  ola: [
    "ola electric",
    "ola electric mobility",
  ],

  mobikwik: [
    "mobikwik",
    "one mobikwik",
  ],
};

dbData?.forEach((db) => {
  const normalizedDb = normalizeName(db.name);

  Object.entries(aliases).forEach(([aliasKey, values]) => {
    if (
      values.some((v) => normalizedDb.includes(v))
    ) {
      dbMap[aliasKey] = db;
    }
  });
});

      const merged = detailedData
        .filter((item) => {
          const normalized = normalizeName(item.name);

         return allowedCompanies.some((company) =>
  normalized.includes(company)
);
        })
        .map((item) => {
       const normalizedName = normalizeName(item.name);

// DIRECT DB MATCH
const dbItem = dbData?.find((db) => {
  const dbName = normalizeName(db.name);

  return (
    normalizedName.includes(dbName) ||
    dbName.includes(normalizedName) ||

    (normalizedName.includes("oyo") &&
      dbName.includes("oravel")) ||

    (normalizedName.includes("nse") &&
      dbName.includes("nse")) ||

    (normalizedName.includes("metropolitan") &&
      dbName.includes("metropolitan")) ||

    (normalizedName.includes("pharmeasy") &&
      dbName.includes("pharmeasy")) ||

    (normalizedName.includes("care health") &&
      dbName.includes("care")) ||

    (normalizedName.includes("ola") &&
      dbName.includes("ola")) ||

    (normalizedName.includes("mobikwik") &&
      dbName.includes("mobikwik"))
  );
});
         

        const rawLotSize =
  dbItem?.lot_size ||
  item.shareDetails?.lot_size ||
  item.shareDetails?.lotSize ||
  item.lot_size ||
  item.lotSize ||
  item.minLotSize ||
  item.min_lot ||
  0;

// Extract only numbers from values like:
// "5,000 Shares"
// "200"
// "1000 shares"

const lotSize = Number(
  String(rawLotSize).replace(/[^\d]/g, "")
);

const finalLotSize =
  !isNaN(lotSize) && lotSize > 0
    ? lotSize
    : null;
          return {
  ...item,

  // PRICE
  price: dbItem?.price
    ? Number(dbItem.price)
    : Number(
        String(
          item.shareDetails?.indicativeUnlistedSharePrice ||
          item.price ||
          0
        )
          .replace(/[^\d.-]/g, "")
          .split("-")[0]
      ),

  // LOT SIZE
  lotSize: finalLotSize,
minLotSize: finalLotSize,

  // MIN INVEST
  minInvestment:
    finalLotSize
      ? finalLotSize *
        (
          dbItem?.price
            ? Number(dbItem.price)
            : Number(
                String(
                  item.shareDetails?.indicativeUnlistedSharePrice ||
                  item.price ||
                  0
                )
                  .replace(/[^\d.-]/g, "")
                  .split("-")[0]
              )
        )
      : null,

  depository:
    item.shareDetails?.depository ||
    item.depository ||
    "NSDL & CDSL",
};
        });

      // SORT SAME AS SCREENSHOT
      const ordered = [
        "oyo",
        "nse india",
        "care health insurance",
        "metropolitan stock exchange",
        "pharmeasy",
        "ola electric",
        "mobikwik",
      ];

      merged.sort((a, b) => {
        const aName = normalizeName(a.name);
        const bName = normalizeName(b.name);

        return (
          ordered.findIndex((x) => aName.includes(x)) -
          ordered.findIndex((x) => bName.includes(x))
        );
      });

      setUnlistedStocks(merged);
    } catch (err) {
      console.error(err);
    } finally {
      setIsUnlistedLoading(false);
    }
  };

  loadUnlisted();
}, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
<div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200">
      {/* HERO */}
 <section className="py-12 px-8 lg:py-12 relative">
  <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
    
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        font-black text-gray-900 leading-tight
        relative z-10 mx-auto
        lg:left-24   /* 👈 forces right shift on large screens */
        text-4xl sm:text-5xl          /* 👈 Increased base mobile size (default + sm) */
        md:text-6xl                   /* 👈 Larger on medium screens */
      "
      style={{
        fontSize: 'clamp(2.5rem, 8vw, 4rem)',  /* 👈 Bigger clamp: larger on small/mobile screens */
      }}
    >
      India’s Most Trusted Analysis Platform for
    </motion.h1>

    <div className="relative mt-6 h-20 lg:h-24 flex justify-center items-center lg:left-24">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute font-black text-green-600 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          {features[index]}
        </motion.span>
      </AnimatePresence>
    </div>

    <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto relative lg:left-24">
      Your Trusted One-Stop Platform for Smarter Investment.
    </p>

  </div>
</section>
       {/* BROKER ANALYZER */}
     <section className="py-3 lg:py-2 overflow-hidden">
  <div className="w-full max-w-full mx-auto px-2 sm:px-5 lg:px-8">

   <div className="
  w-full
  bg-white
  rounded-2xl
  shadow-sm
  border border-gray-200
  overflow-hidden
">

      {/* HEADER */}
      <div className="
        px-4 py-4
        lg:px-8 lg:py-6
        bg-gradient-to-r from-gray-800 to-gray-700
        text-white
        border-b border-gray-200
        text-center
      ">
        <h2 className="
          text-xl
          sm:text-2xl
          font-black
          tracking-tight
          text-white
        ">
          Best Stock Brokers in India 2025
        </h2>

        <p className="
          mt-1
          text-sm
          sm:text-base
          lg:text-lg
          text-white/90
        ">
          Trusted by millions
        </p>
      </div>

      {/* CONTENT */}
    <div className="p-2 sm:p-4 lg:p-8">

        <BrokerAnalyzer />

        {/* BUTTON */}
       <div className="text-center mt-3 lg:mt-2 px-1">

          <button
            onClick={() => navigate('/brokers')}
            className="
              w-full
              sm:w-auto
              px-6
              sm:px-8
              py-3
              text-sm
              sm:text-base
              bg-green-600
              hover:bg-green-700
              text-white
              font-bold
              rounded-xl
              sm:rounded-full
              transition
              shadow-md
            "
          >
            View All Brokers
          </button>

        </div>
      </div>
    </div>
  </div>
</section>

      <AdBanner />

      {/* IPO SECTION */}
<section className="py-3 lg:py-2 overflow-hidden">
  <div className="w-full max-w-full mx-auto px-2 sm:px-4 lg:px-10">

    {/* HORIZONTAL LAYOUT */}
    <div className="flex flex-col xl:flex-row xl:items-start gap-4 xl:gap-3">

      {/* MAIN IPO TRACKER SECTION */}
      <div className="flex-1 w-full max-w-[1100px]">

        <div
          className="
            w-full
            bg-white
            rounded-2xl
            shadow-sm
            border border-gray-200
            overflow-hidden
          "
        >

          {/* HEADER */}
          <div
            className="
              px-4 py-4
              lg:px-8 lg:py-6
              bg-gradient-to-r from-gray-800 to-gray-700
              border-b border-gray-200
              text-center
            "
          >
            <h2 className="text-xl sm:text-2xl font-black text-white">
              IPO Tracker
            </h2>

            <p className="mt-1 text-sm sm:text-base lg:text-lg text-white">
              Live & Upcoming IPOs in India
            </p>
          </div>

          {/* CONTENT */}
          <div className="p-2 sm:p-4 lg:p-8">

            {isIPOLoading ? (

              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-gray-800" />
              </div>

            ) : (

              (() => {

                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const liveIPOs = ipos
                  .map((ipo) => ({
                    ...ipo,
                    _openDate: new Date(ipo.open),
                    _closeDate: new Date(ipo.close),
                  }))
                  .filter(
                    (ipo) =>
                      !isNaN(ipo._openDate) &&
                      !isNaN(ipo._closeDate) &&
                      ipo._openDate <= today &&
                      today <= ipo._closeDate
                  )
                  .sort((a, b) => a._closeDate - b._closeDate)
                  .slice(0, 8);

                return (
                  <>
                    {/* MOBILE / TABLET */}
                    <div
                      className="
                        lg:hidden
                        overflow-x-auto
                        scrollbar-hide
                        -mx-2
                        px-2
                        pb-3
                      "
                    >

                      {liveIPOs.length > 0 ? (

                        <div className="flex gap-3">

                          {liveIPOs.map((ipo) => (

                            <div
                              key={ipo.id}
                              className="
                                w-[84%]
                                max-w-[285px]
                                flex-shrink-0
                              "
                            >
                              <IPOCard ipo={ipo} />
                            </div>

                          ))}

                        </div>

                      ) : (

                        <div className="py-20 text-center">

                          <p className="text-xl font-semibold text-gray-600">
                            No Live IPOs Right Now
                          </p>

                        </div>

                      )}

                    </div>

                    {/* DESKTOP */}
                    <div className="hidden lg:block">
                      <IPODashboard ipos={liveIPOs} />
                    </div>
                  </>
                );

              })()

            )}

            {/* BUTTON */}
            <div className="text-center mt-4 lg:mt-8 px-1">

              <button
                onClick={() => navigate("/ipo/ipo-list")}
                className="
                  w-full
                  sm:w-auto
                  px-6
                  sm:px-8
                  py-3
                  text-sm
                  sm:text-base
                  bg-green-600
                  text-white
                  font-bold
                  rounded-xl
                  sm:rounded-full
                  hover:bg-green-700
                  transition
                  shadow-md
                "
              >
                View All IPO
              </button>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<AdBanner />

{/* UNLISTED SHARES */}
<section className="py-0">
  <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
    {/* Removed ml-4 lg:ml-6 — unnecessary and causing misalignment */}

    {/* FLEX LAYOUT WITH MAIN + SIDEBAR */}
    <div className="flex flex-col xl:flex-row xl:items-start gap-4 xl:gap-3">

      {/* MAIN UNLISTED SHARES SECTION */}
      <div className="flex-1">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-8 py-6 bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-200 text-center">
            <h2 className="text-2xl font-black text-white">Unlisted Shares</h2>
            <p className="mt-2 text-lg text-white">Curated marketplace with verified listings</p>
          </div>

          <div className="p-8">
            {isUnlistedLoading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600" />
              </div>
            ) : (
              <>
                {/* Mobile: Horizontal scroll - reduced gap */}
                {/* MOBILE */}
<div className="lg:hidden space-y-3">

  {unlistedStocks.slice(0, 3).map((stock) => (

    <div
      className="w-full"
      key={stock.id}
    >
      <UnlistedCard stock={stock} />
    </div>

  ))}

</div>

                {/* Desktop: Grid - reduced gap */}
                <div className="hidden lg:grid grid-cols-4 gap-3">  {/* Reduced from gap-6 to gap-3 */}
                  {unlistedStocks.map((stock) => (
                    <UnlistedCard key={stock.id} stock={stock} />
                  ))}
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={() => navigate("/pre-ipo-stocks")}
                    className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
                  >
                    View All Unlisted Shares
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>



      <AdBanner />

      {/* BLOGS */}
      <section className="py-2">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-8 py-6 bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-200 text-center">
              <h2 className="text-2xl font-bold text-white">News & Blogs</h2>
              <p className="mt-2 text-lg text-white">
                Latest updates on IPOs, Dividends, Bonus Issues, Rights, NFOs, REITs & Bonds
              </p>
            </div>

            <div className="px-8 py-8">
              <Blogs />

              <div className="text-center mt-2">
                <button
                  onClick={() => navigate("/insight-hub")}
                  className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
                >
                  View All News & Blogs 
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdBanner />

     

      {/* WHY CHOOSE US */}
      <section className="py-2 pb-8">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-8 py-6 bg-gradient-to-r from-gray-800 to-gray-700 border-b border-gray-200 text-center">
              <h2 className="text-2xl font-bold  text-white">
                Your Ultimate Hub for{" "}
                <span className="text-green-600">Smarter Stock-Market Decisions</span>{" "}
                in India
              </h2>
              <p className="mt-2 text-lg text-white">
                Everything you need — IPO updates, unlisted shares, broker comparison, and market insights — all in one powerful platform.
              </p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-full mx-auto">
                {[
                  {
                    icon: TrendingUp,
                    title: "Real-Time IPO Updates & Insights",
                    items: [
                      "Live IPO timelines & issue details",
                      "Daily GMP (Grey Market Premium)",
                      "Real-time subscription status",
                      "Instant allotment & listing alerts",
                      "Complete SME + Mainboard calendar",
                    ],
                  },
                  {
                    icon: Gem,
                    title: "Unlisted & Pre-IPO Shares",
                    items: [
                      "Verified prices & availability",
                      "ESOP buyback opportunities",
                      "Valuation trends & financials",
                      "Transparent buy/sell process",
                      "Curated high-growth startups",
                    ],
                  },
                  {
                    icon: Scale,
                    title: "Compare Top Stock Brokers",
                    items: [
                      "Brokerage & account charges",
                      "Platform speed & features",
                      "Charts, tools & order types",
                      "Customer support ratings",
                      "Margin, IPO funding & perks",
                    ],
                  },
                  {
                    icon: Lightbulb,
                    title: "Deep Market Insights",
                    items: [
                      "Sector trends & outlook",
                      "Fundamentals & valuations",
                      "Dividend, bonus & buybacks",
                      "Analyst reports & summaries",
                      "Actionable investment ideas",
                    ],
                  },
                ].map(({ icon: Icon, title, items }, i) => (
                  <div
                    key={i}
                    className="bg-gray-50/70 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-8 h-8 text-green-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {title}
                      </h3>
                    </div>
                   <ul className="space-y-4 flex flex-col items-center">
  {items.map((item, idx) => (
    <li key={idx} className="flex items-center gap-3 text-gray-700">
      <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
      <span className="text-center">{item}</span>
    </li>
  ))}
</ul>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-green-50 text-green-700 px-10 py-6 rounded-full text-2xl font-bold shadow-lg">
                  <Star className="w-10 h-10 text-yellow-500 fill-current" />
                  <span>Why Investors Trust Us</span>
                </div>
                <p className="mt-6 mb-6 text-2xl font-medium text-gray-800 max-w-full mx-auto">
                  Because we make the Indian stock market{" "}
                  <span className="text-green-600 font-bold">
                    simple, transparent, and truly accessible
                  </span>{" "}
                  — for everyone.
                </p>
              </div>

    </div>
  );
}