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
        <meta name="description" content="India's most trusted platform for real-time IPO insights, GMP updates, pre-IPO stocks, and broker comparisons." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
        <HeaderAndNav />

        {/* MAIN LAYOUT */}
        <div className="flex-1 flex">
          {/* MAIN CONTENT – Let child pages control width & padding */}
          <main className="flex-1 min-w-0">
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

        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;