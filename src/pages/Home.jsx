import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchIPOs } from '../api/mockApi';
import IPOCard from '../components/IPOCard';

const features = [
  "Stocks", "IPO Updates", "Unlisted Shares", "Broker Comparison",
  "Options", "Futures", "Commodity", "ETFs", "Mutual Funds", "NFO", "Corporate Actions"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const { data: ipos = [], isLoading } = useQuery({
    queryKey: ['ipos'],
    queryFn: fetchIPOs,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % features.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2400&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-7xl md:text-7xl lg:text-8xl font-black text-white"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
          >
            India’s Most Trusted Platform for
          </motion.h1>

          <div className="h-40 md:h-48 mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 160, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -90, opacity: 0 }}
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.7 }
                }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-green-500"
                style={{
                  textShadow: ' 0 0 60px #22d3ee, 0 10px 40px rgba(0,0,0,0.9)'
                }}
              >
                {features[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* THIS LINE WAS HIDDEN — NOW VISIBLE & BRIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-16 text-xl md:text-2xl font-medium text-gray-200 tracking-wider drop-shadow-lg"
          >
            Real-time Market Coverage • Research Backed • Trader-Friendly • Broker Reviews • Unlisted Shares - All in One Place
          </motion.p>
        </div>
      </section>

      {/* IPO TRACKER SECTION — NOW BELOW HERO (NOT HIDDEN) */}
      <section className="relative z-20 -mt-32 md:-mt-24 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-32">
              Live IPO Tracker
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Latest Mainboard & SME IPOs with Live GMP Updates
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-600"></div>
            </div>
          ) : (
            <div className="space-y-8 max-w-3xl mx-auto">
              {ipos.map((ipo) => (
                <div key={ipo.id} className="w-full">
                  <IPOCard ipo={ipo} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
  {/* Uncomment when ready */}
      {/* 
      <section className="my-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Top Trending Unlisted Shares</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {unlisted.map(stock => <UnlistedCard key={stock.id} stock={stock} />)}
        </div>
      </section>

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