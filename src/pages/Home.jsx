// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchIPOs, fetchUnlisted } from '../api/mockApi';
import IPODashboard from '../components/IPODashboard';
import UnlistedCard from '../components/UnlistedCard';
import Blogs from './Blogs';

import { TrendingUp, Gem, Scale, Lightbulb, Star, Check } from 'lucide-react';
import BrokerAnalyzer from './BrokerAnalyzer';

const features = [
  "Stocks", "IPO Updates", "Unlisted Shares", "Broker Comparison",
  "Options", "Futures", "Commodity", "ETFs",
  "Mutual Funds", "NFO", "Corporate Actions",
];

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
      setIndex(prev => (prev + 1) % features.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* HERO SECTION */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-black text-gray-900 leading-tight tracking-tight"
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
                className="absolute font-black text-green-600 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl drop-shadow-lg"
              >
                {features[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Your Trusted One-Stop Platform for Smarter Investment.
          </motion.p>
        </div>
      </section>

      {/* IPO SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {isIPOLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-800"></div>
            </div>
          ) : (
            <IPODashboard ipos={ipos} />
          )}
        </div>
      </section>

      {/* UNLISTED SHARES SECTION */}
           {/* UNLISTED SHARES SECTION – Only 4 cards visible horizontally */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900">Unlisted Shares</h2>
            <p className="text-gray-600 mt-3 text-lg">Curated marketplace with verified listings</p>
          </div>

          {isUnlistedLoading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600"></div>
            </div>
          ) : (
            <>
              {/* Mobile: Horizontal Scroll */}
              <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 pb-8">
                <div className="inline-flex gap-6">
                  {unlistedStocks.map((stock) => (
                    <div key={stock.id} className="flex-shrink-0">
                      <UnlistedCard stock={stock} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Exactly 4 cards in a row, centered */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {unlistedStocks.slice(0, 4).map((stock) => (
                    <UnlistedCard key={stock.id} stock={stock} />
                  ))}
                </div>

                {/* Optional: "View All" button if you have more than 4 */}
                {unlistedStocks.length > 4 && (
                  <div className="text-center mt-10">
                    <button
                      onClick={() => navigate('/pre-ipo-stocks')}
                      className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
                    >
                      View All Unlisted Shares →
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Blogs />
        </div>
      </section>

      {/* BROKER ANALYZER SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrokerAnalyzer />
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/brokers')}
              className="px-8 py-3.5 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-md"
            >
              View All Brokers
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US – Premium Marketing Section */}
    {/* WHY CHOOSE US – With Real Beautiful Icons */}
<section className="py-24 bg-white">
  <div className="max-w-7xl xl:max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">
        Your Ultimate Hub for <span className="text-green-600">Smarter Stock-Market Decisions</span> in India
      </h2>
      <p className="mt-5 text-xl text-gray-600 max-w-4xl mx-auto">
        Everything you need — IPO updates, unlisted shares, broker comparison, and market insights — all in one powerful platform.
      </p>
    </div>

    {/* 4 Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {/* IPO Updates */}
      <div className="bg-gray-50/70 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-8 h-8 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Real-Time IPO Updates & Insights</h3>
        </div>
        <p className="text-gray-600 mb-6">Never miss a listing opportunity again.</p>
        <ul className="space-y-4">
          {[
            "Live IPO timelines & issue details",
            "Daily GMP (Grey Market Premium)",
            "Real-time subscription status",
            "Instant allotment & listing alerts",
            "Complete SME + Mainboard calendar"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Unlisted Shares */}
      <div className="bg-gray-50/70 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Gem className="w-8 h-8 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Unlisted & Pre-IPO Shares</h3>
        </div>
        <p className="text-gray-600 mb-6">Invest in tomorrow’s giants today.</p>
        <ul className="space-y-4">
          {[
            "Verified prices & availability",
            "ESOP buyback opportunities",
            "Valuation trends & financials",
            "Transparent buy/sell process",
            "Curated high-growth startups"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Broker Comparison */}
      <div className="bg-gray-50/70 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Scale className="w-8 h-8 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Compare Top Stock Brokers</h3>
        </div>
        <p className="text-gray-600 mb-6">Find the perfect broker for your style.</p>
        <ul className="space-y-4">
          {[
            "Brokerage & account charges",
            "Platform speed & features",
            "Charts, tools & order types",
            "Customer support ratings",
            "Margin, IPO funding & perks"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Market Insights */}
      <div className="bg-gray-50/70 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-8 h-8 text-green-700" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Deep Market Insights</h3>
        </div>
        <p className="text-gray-600 mb-6">Make decisions backed by clarity.</p>
        <ul className="space-y-4">
          {[
            "Sector trends & outlook",
            "Fundamentals & valuations",
            "Dividend, bonus & buybacks",
            "Analyst reports & summaries",
            "Actionable investment ideas"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Final Trust Badge */}
    <div className="mt-20 text-center">
      <div className="inline-flex items-center gap-4 bg-green-50 text-green-700 px-10 py-6 rounded-full text-2xl font-bold shadow-lg">
        <Star className="w-10 h-10 text-yellow-500 fill-current" />
        <span>Why Investors Trust Us </span>
      </div>
      <p className="mt-8 text-2xl font-medium text-gray-800 max-w-5xl mx-auto leading-relaxed">
        Because we make the Indian stock market <span className="text-green-600 font-bold">simple, transparent, and truly accessible</span> — for everyone.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}