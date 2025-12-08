import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchIPOs, fetchUnlisted } from '../api/mockApi';
import IPODashboard from '../components/IPODashboard';
import UnlistedCard from '../components/UnlistedCard';

const features = [
  "IPO Updates", "Unlisted Shares", "Broker Comparison",
  "Options", "Futures", "Commodity", "ETFs",
  "Mutual Funds", "NFO", "Corporate Actions"
];

export default function Home() {
  const [index, setIndex] = useState(0);

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

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

          <div className="text-center lg:text-left flex-1">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-black text-gray-900 leading-tight tracking-tight max-w-full overflow-hidden text-ellipsis"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
            >
              India’s Most Trusted Analysis Platform for Stocks
            </motion.h1>

            <div className="relative mt-6 h-14 sm:h-16 lg:h-20 flex justify-center lg:justify-start items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute font-black text-green-600 text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl inline-block z-10"
                >
                  {features[index]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
            >
              Your Trusted One-Stop Platform for Smarter Investment.
            </motion.p>
          </div>

          <div className="hidden lg:flex flex-col gap-6 w-50">
           
            <div className="border border-gray-600 border-dashed p-4 h-48 rounded-xl flex items-center justify-center text-gray-600">
              <p className="text-sm">adsense</p>
            </div>
          </div>

        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 bg-white -mt-8 lg:-mt-12 pt-12">
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

      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-9">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900"> Unlisted Shares & Pre-IPO </h2>
              <p className="text-gray-600 mt-3 text-lg"> Curated marketplace with verified listings </p>
            </div>

            {isUnlistedLoading ? (
              <div className="flex justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600"></div>
              </div>
            ) : (
              <>
                <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 pb-6 flex gap-6 snap-x snap-mandatory">
                  {unlistedStocks.map((stock) => (
                    <div key={stock.id} className="snap-center flex-shrink-0 w-80">
                      <UnlistedCard stock={stock} />
                    </div>
                  ))}
                </div>
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {unlistedStocks.map((stock) => (
                    <UnlistedCard key={stock.id} stock={stock} />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="border border-gray-600 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                <p className="text-sm">adsense</p>
              </div>
              <div className="border border-gray-600 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                <p className="text-sm">adsense</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}