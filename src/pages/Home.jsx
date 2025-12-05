// pages/Home.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchIPOs, fetchUnlisted } from '../api/mockApi';
import IPOCard from '../components/IPOCard';
import UnlistedCard from '../components/UnlistedCard';

const features = [
  "Stocks", "IPO Updates", "Unlisted Shares", "Broker Comparison",
  "Options", "Futures", "Commodity", "ETFs", "Mutual Funds", "NFO", "Corporate Actions"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // IPO Data
  const { data: ipos = [], isLoading: isIPOLoading } = useQuery({
    queryKey: ['ipos'],
    queryFn: fetchIPOs,
  });

  // Unlisted Stocks Data
  const { data: unlistedStocks = [], isLoading: isUnlistedLoading } = useQuery({
    queryKey: ['unlisted'],
    queryFn: fetchUnlisted,
  });

  const longestFeature = features.reduce((a, b) => a.length > b.length ? a : b, "");

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % features.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-5 pt-24 pb-16 md:pt-20">
        <div className="text-center max-w-6xl mx-auto -mt-8 md:-mt-12">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-black text-gray-900 leading-tight
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          >
            India’s Most Trusted Platform for
          </motion.h1>

          {/* Rotating Feature */}
          <div className="relative h-20 sm:h-24 md:h-28 lg:h-32 mt-4">
            <span className="invisible font-black text-green-600 whitespace-nowrap
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              {longestFeature}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -70, opacity: 0 }}
                transition={{ y: { type: "spring", stiffness: 300, damping: 28 } }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <span className="font-black text-green-600
                  text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                  {features[index]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-10 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-600 max-w-3xl mx-auto"
          >
            Real-time Market Coverage • Research Backed • Trader Friendly
          </motion.p>
        </div>
      </section>

      {/* IPO Section */}
      <section className="relative px-4 pb-24 -mt-10 md:-mt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-black text-gray-900 text-4xl sm:text-5xl md:text-6xl lg:text-5xl">
              Live IPO Tracker
            </h2>
          </motion.div>

          {isIPOLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
            </div>
          ) : (
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ipos.map((ipo) => (
                <div key={ipo.id} className="w-full">
                  <IPOCard ipo={ipo} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Unlisted Shares & Pre-IPO Section */}
      <section className="relative px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              Unlisted Shares & Pre-IPO
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Curated marketplace with verified listings
            </p>
          </div>

          {isUnlistedLoading ? (
            <div className="flex justify-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
            </div>
          ) : (
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0">
              <div className="flex gap-6 pb-4 snap-x snap-mandatory">
                {unlistedStocks.map((stock) => (
                  <div key={stock.id} className="snap-center flex-shrink-0 w-80">
                    <UnlistedCard stock={stock} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

 
      {/* 
    

      <section className="my-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Best Brokers for IPO & Trading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {brokers.map(broker => <BrokerCard key={broker.id} broker={broker} />)}
        </div>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Latest Market Insights</h2>
        <BlogCarousel blogs={blogs} />
      </section>
      */}