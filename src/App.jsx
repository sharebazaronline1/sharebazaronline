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
import UpcomingIPOSidebar from './pages/Listofdata';

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
        <HeaderAndNav />

        {/* MAIN CONTENT + SIDEBAR */}
        <div className="flex-1 flex flex-col xl:flex-row">

          {/* MAIN CONTENT */}
          <main className="flex-1 min-w-0 pb-20">
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

          {/* RIGHT SIDEBAR */}
          <aside className="hidden xl:block w-72 pr-4 mt-96">
            <div className="sticky top-56 flex flex-col gap-4">

              {/* IPO Sidebar */}
              <UpcomingIPOSidebar />

              {/* BANNERS – HORIZONTAL ALIGNMENT */}
              <div className="flex gap-3">
                
                {/* Banner 1 */}
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm h-36 flex items-center justify-center">
                  <p className="text-xs font-semibold text-gray-800">
                    Banner
                  </p>
                </div>

                {/* Banner 2 */}
                <div className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm h-36 flex items-center justify-center">
                  <p className="text-xs font-semibold text-gray-800">
                    Banner
                  </p>
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
