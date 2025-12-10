import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { fetchIPOs, fetchUnlisted } from '../api/mockApi';
import IPODashboard from '../components/IPODashboard';
import UnlistedCard from '../components/UnlistedCard';
import Blogs from './Blogs';
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
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
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
            className="mt-8 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center"
          >
            Your Trusted One-Stop Platform for Smarter Investment.
          </motion.p>
        </div>
      </section>

      {/* IPO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900">Unlisted Shares</h2>
            <p className="text-gray-600 mt-3 text-lg">Curated marketplace with verified listings</p>
          </div>

          {isUnlistedLoading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-9">
                <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 pb-8">
                  <div className="inline-flex gap-6">
                    {unlistedStocks.map((stock) => (
                      <div key={stock.id} className="flex-shrink-0 w-80">
                        <UnlistedCard stock={stock} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                  {unlistedStocks.map((stock) => (
                    <UnlistedCard key={stock.id} stock={stock} />
                  ))}
                </div>
              </div>

              <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24 space-y-6">
                  <div className="border border-dashed border-gray-400 rounded-xl h-64 flex items-center justify-center text-gray-500 text-sm">
                    Ads
                  </div>
                </div>
              </div>
              
            </div>
          )}
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Blogs />
        </div>
        
      </section>

      {/* BROKER ANALYSIS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
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

    </div>
  );
}