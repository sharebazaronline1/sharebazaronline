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
import { TrendingUp,UserRound,Clock3,ShieldCheck,UserCheck, Gem, Scale, Lightbulb, Star, Check,Building2, UserCircle2, UserCog2Icon } from 'lucide-react';


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
<section className="relative overflow-hidden">

<div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-2">
<div className="grid lg:grid-cols-2 items-center gap-16">      {/* LEFT IMAGE */}
     {/* LEFT IMAGE */}
<div className="hidden lg:flex justify-center">

  <div className="relative">

    {/* Ambient Green Glow */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-radial
        from-green-200/50
        via-green-100/20
        to-transparent
        scale-125
        blur-[80px]
      "
    />

    {/* Top Highlight */}
    <div
      className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-[220px]
        h-[220px]
        bg-green-300/15
        rounded-full
        blur-[60px]
      "
    />

    {/* Bottom Ground Shadow */}
    <div
      className="
        absolute
        bottom-5
        left-1/2
        -translate-x-1/2
        w-[300px]
        h-[70px]
        bg-green-500/20
        blur-[40px]
        rounded-full
      "
    />

    {/* Soft White Reflection */}
    <div
      className="
        absolute
        top-[25%]
        left-[20%]
        w-[120px]
        h-[120px]
        bg-white/30
        rounded-full
        blur-[45px]
      "
    />

   

    <img
      src="/images/hero-img.png"
      alt="Investment Platform"
      className="
        relative
        z-10
        w-[300px]
        xl:w-[360px]
        object-contain
        drop-shadow-[0_25px_35px_rgba(16,185,129,0.15)]
      "
    />

  </div>

</div>

      {/* RIGHT CONTENT */}
   <div className="flex flex-col justify-center lg:items-start text-center lg:text-left ">

        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-full
            bg-green-50
            border
            border-green-200
            text-green-700
            bg-green-100
            font-semibold
            shadow-sm
          "
        >
          <ShieldCheck className="w-5 h-5" />
          Trusted by Millions of Investors
        </div>

     <motion.h2
  initial={{ opacity: 0, y: -15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="
    mt-4
    text-slate-900
    font-black
    leading-[1]
    tracking-tight
    text-2xl
    lg:text-4xl
    xl:text-5xl
    max-w-4xl
  "
>
  India's Most Trusted
  <br />
  Analysis Platform for
</motion.h2>

        {/* Animated Word */}
        <div className="h-24 mt-0 sm:mt-1 lg:mt-2 flex items-center">
          <AnimatePresence mode="wait">
  <motion.span
    key={index}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.3 }}
    className="
    z-20
      text-green-600
      font-black
      leading-none
      text-3xl
      sm:text-8xl
      md:text-5xl
      lg:text-6xl
      xl:text-7xl
      text-center
      lg:text-left
      w-full
      whitespace-nowrap
    "
  >
    {features[index]}
  </motion.span>
</AnimatePresence>

        </div>

        {/* Description */}
        <p
          className="
            mt-2
            text-lg
            xl:text-xl
            text-slate-600
            max-w-xl
            leading-relaxed
          "
        >
          Your Trusted One-Stop Platform for Smarter
          Investment Decisions.
        </p>

        {/* Buttons */}
<div className="flex flex-row justify-center lg:justify-start gap-3 mt-8 w-full">
        <button
  onClick={() => navigate("/ipo/ipo-list")}
  className="
    flex-1
    sm:flex-none
    px-4 sm:px-8
    py-3 sm:py-4
    rounded-2xl
    bg-green-600
    hover:bg-green-700
    text-white
    font-bold
    shadow-lg
    transition
    text-sm sm:text-base
  "
>
  Explore IPOs
</button>

<button
  onClick={() => navigate("/comparebrokers")}
  className="
    flex-1
    sm:flex-none
    px-4 sm:px-8
    py-3 sm:py-4
    rounded-2xl
    border
    border-green-500
    bg-white
    text-green-700
    font-bold
    hover:bg-green-50
    transition
    text-sm sm:text-base
  "
>
  Compare Brokers
</button>

        </div>
        

      </div>
           

    </div>
    {/* STATS */}
<div className=" grid grid-cols-2 lg:grid-cols-4 gap-6">

  {[
    {
      value: "50+",
      label: "Live IPOs",
      icon: TrendingUp,
    },
    {
      value: "150+",
      label: "Unlisted Shares",
      icon: Building2,
    },
    {
      value: "50+",
      label: "Brokers Compared",
      icon: UserCog2Icon,
    },
    {
      value: "2M+",
      label: "Investors",
      icon: UserCheck,
    },
  ].map(({ value, label, icon: Icon }) => (
    <div
      key={label}
      className="
        bg-white
        rounded-3xl
        border border-green-50
        shadow-[0_10px_30px_rgba(0,0,0,0.05)]
        p-6 lg:p-8
        flex flex-col items-center
        text-center
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)]
      "
    >
      <div
        className="
          w-16 h-16 lg:w-20 lg:h-20
          rounded-full
          bg-green-50
          flex items-center justify-center
          mb-4
        "
      >
        <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-green-600" />
      </div>

      <h4 className="text-3xl  lg:text-3xl font-black text-green-600">
        {value}
      </h4>

      <p className="mt-2 text-base lg:text-xl font-semibold text-slate-700">
        {label}
      </p>
    </div>
  ))}

</div>

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