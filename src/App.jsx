// src/App.jsx (updated - fixed duplicate route, added BlogDetail route)

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HeaderAndNav from './components/HeaderAndNav';
import Footer from './components/Footer';

import Home from './pages/Home';
import IPOTracker from './pages/IPOTracker';
import PreIPOStocks from './pages/PreIPOStocks';
import BrokerAnalyzer from './pages/BrokerAnalyzer';
import InsightHub from './pages/InsightHub';
import InsightHubDetails from './pages/InsightHubDetails';  // ← Added BlogDetail import
import SkillUp from './pages/SkillUp';
import Login from './pages/Login';
import IPODetails from './pages/IPODetails';
import IPOList from './pages/IPOList';
import UpcomingIpoSidebar from './components/IPOSidebar';
import UnlistedSharesSidebar from './components/UnlistedSidebar';

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
        <div className="flex-1 flex w-full">
          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0 px-4 lg:px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ipo-tracker" element={<IPOTracker />} />
              <Route path="/ipo/ipo-list" element={<IPOList />} />
              <Route path="/pre-ipo-stocks" element={<PreIPOStocks />} />
              <Route path="/broker-analyzer" element={<BrokerAnalyzer />} />
              <Route path="/insight-hub" element={<InsightHub />} />  {/* ← Fixed duplicate */}
              <Route path="/insight-hub/:id" element={<InsightHubDetails />} />  {/* ← Added BlogDetail route */}
              <Route path="/login" element={<Login />} />
              <Route path="/ipo/:id" element={<IPODetails />} />
              <Route path="/skill-up" element={<SkillUp />} />
            </Routes>
          </main>

          {/* SIDEBAR */}
          <aside className="hidden xl:block w-48 flex-shrink-0 mr-6">
            <div className="sticky top-20 mt-96 py-8 flex flex-col gap-2">
              <div className="h-24 bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700 shadow-sm">
                Banner Ad
              </div>
              <UpcomingIpoSidebar />
              <UnlistedSharesSidebar />
            </div>
          </aside>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;