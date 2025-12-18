// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HeaderAndNav from './components/HeaderAndNav';
import Footer from './components/Footer';

import Home from './pages/Home';
import IPOTracker from './pages/IPOTracker';
import PreIPOStocks from './pages/PreIPOStocks';
import BrokerAnalyzer from './pages/BrokerAnalyzer';
import InsightHub from './pages/InsightHub';
import SkillUp from './pages/SkillUp';
import IPODetails from './pages/IPODetails';
import IPOList from './pages/IPOList';

function App() {
  return (
    <Router>
      <Helmet>
        <title>ShareBazaarOnline - IPO Updates, Unlisted Shares & Broker Comparison</title>
        <meta
          name="description"
          content="India's most trusted platform for real-time IPO insights, GMP updates, pre-IPO stocks, and broker comparisons."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
        {/* HEADER */}
        <HeaderAndNav />

        {/* CONTENT WRAPPER */}
      {/* CONTENT WRAPPER */}
<div className="relative flex flex-1">

  {/* MAIN CONTENT — CENTERED */}
  <main className="w-full max-w-[1200px] mx-auto px-4 lg:px-6 pb-10">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ipo-tracker" element={<IPOTracker />} />
      <Route path="/ipo/ipo-list" element={<IPOList />} />
      <Route path="/pre-ipo-stocks" element={<PreIPOStocks />} />
      <Route path="/broker-analyzer" element={<BrokerAnalyzer />} />
      <Route path="/insight-hub" element={<InsightHub />} />
      <Route path="/ipo/:id" element={<IPODetails />} />
      <Route path="/skill-up" element={<SkillUp />} />
    </Routes>
  </main>

{/* RIGHT SIDEBAR — STICKY, STOPS BEFORE FOOTER */}
<aside className="hidden xl:block w-36 mr-6"> {/* increased width from w-24 to w-36 */}
  <div className="sticky top-96">
    <div className="flex flex-col gap-2">
      <div className="h-28 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-[11px] font-semibold text-gray-700 bg-white">
       1
      </div>
      <div className="h-28 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-[11px] font-semibold text-gray-700 bg-white">
     2
      </div>
    </div>
  </div>
</aside>



</div>


        <Footer />
      </div>
    </Router>
  );
}

export default App;
