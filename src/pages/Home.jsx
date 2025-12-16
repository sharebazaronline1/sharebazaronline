// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchIPOs, fetchUnlisted } from '../api/mockApi';
import IPODashboard, { IPOCard } from "../components/IPODashboard";
import UnlistedCard from '../components/UnlistedCard';
import Blogs from './Blogs';
import BrokerAnalyzer from './BrokerAnalyzer';

import { TrendingUp, Gem, Scale, Lightbulb, Star, Check } from 'lucide-react';

const features = [
  "Stocks", "IPO Updates", "Unlisted Shares", "Broker Comparison",
  "Options", "Futures", "Commodity", "ETFs",
  "Mutual Funds", "NFO", "Corporate Actions",
];

const AdBanner = ({ size = "horizontal" }) => (
  <div className="w-full flex justify-center py-8"> {/* Reduced from py-16 */}
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

  const { data: unlistedStocks = [], isLoading: isUnlistedLoading } = useQuery({
    queryKey: ['unlisted'],
    queryFn: fetchUnlisted,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* HERO */}
      <section className="py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-black text-gray-900 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.4rem)' }}
          >
            India’s Most Trusted Analysis Platform for
          </motion.h1>

          <div className="relative mt-6 h-20 lg:h-24 flex justify-center items-center">
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

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your Trusted One-Stop Platform for Smarter Investment.
          </p>
        </div>
      </section>

      {/* IPO SECTION */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {isIPOLoading ? (
            <div className="flex justify-center py-24">
              <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-gray-800" />
            </div>
          ) : (
            <>
              {/* HEADER - only once */}
              <div className="text-center mb-6 lg:hidden">
                <h1 className="text-4xl font-black text-gray-900">IPO Tracker</h1>
                <p className="mt-2 text-lg text-gray-700">
                  Latest Mainboard & SME IPOs in India
                </p>
              </div>

              {/* Mobile & Tablet: Horizontal Scroll */}
              <div className="lg:hidden overflow-x-auto px-2 pb-6 scrollbar-hide">
                <div className="flex gap-6">
                  {ipos.map((ipo) => (
                    <div key={ipo.id} className="min-w-[280px] flex-shrink-0">
                      <IPOCard ipo={ipo} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Normal layout */}
              <div className="hidden lg:block">
                <IPODashboard ipos={ipos} />
              </div>
            </>
          )}

          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/ipo/ipo-list")}
              className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
            >
              View All IPO
            </button>
          </div>
        </div>
      </section>

      <AdBanner />

      {/* UNLISTED SHARES */}
      <section className="py-12"> {/* Reduced from py-16 */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900">Unlisted Shares</h2>
            <p className="text-gray-600 mt-3 text-lg">
              Curated marketplace with verified listings
            </p>
          </div>

          {isUnlistedLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600" />
            </div>
          ) : (
            <>
              {/* Mobile: Horizontal Scroll */}
              <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-6 scrollbar-hide">
                <div className="flex gap-6">
                  {unlistedStocks.map((stock) => (
                    <div className="min-w-[250px] flex-shrink-0" key={stock.id}>
                      <UnlistedCard stock={stock} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden lg:grid grid-cols-4 gap-6">
                {unlistedStocks.map((stock) => (
                  <UnlistedCard key={stock.id} stock={stock} />
                ))}
              </div>

              {unlistedStocks.length > 0 && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => navigate("/pre-ipo-stocks")}
                    className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
                  >
                    View All Unlisted Shares
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <AdBanner />

      {/* BLOGS */}
      <section className="py-12"> {/* Reduced from py-14 */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Blogs />
        </div>
         {/* View All Button */}
        <div className="text-center mt-2">
        <button
          onClick={() => navigate("/insight-hub")}
          className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
        >
          View All News & Blogs →
        </button>
      </div>
      </section>

      <AdBanner />

      {/* BROKER ANALYZER */}
      <section className="py-12"> {/* Reduced from py-14 */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrokerAnalyzer />
          <div className="text-center mt-10">
            <button
              onClick={() => navigate('/brokers')}
              className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
            >
              View All Brokers
            </button>
          </div>
        </div>
      </section>

      <AdBanner />

      {/* WHY CHOOSE US */}
      <section className="py-20"> {/* Reduced from py-24 */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              Your Ultimate Hub for{" "}
              <span className="text-green-600">
                Smarter Stock-Market Decisions
              </span>{" "}
              in India
            </h2>
            <p className="mt-5 text-xl text-gray-600 max-w-4xl mx-auto">
              Everything you need — IPO updates, unlisted shares, broker comparison,
              and market insights — all in one powerful platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
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
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center"> {/* Reduced from mt-20 */}
            <div className="inline-flex items-center gap-4 bg-green-50 text-green-700 px-10 py-6 rounded-full text-2xl font-bold shadow-lg">
              <Star className="w-10 h-10 text-yellow-500 fill-current" />
              <span>Why Investors Trust Us</span>
            </div>
            <p className="mt-6 text-2xl font-medium text-gray-800 max-w-5xl mx-auto"> {/* Reduced from mt-8 */}
              Because we make the Indian stock market{" "}
              <span className="text-green-600 font-bold">
                simple, transparent, and truly accessible
              </span>{" "}
              — for everyone.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
