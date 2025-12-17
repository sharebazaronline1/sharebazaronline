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
import UpcomingIPOSidebar from './components/IPOSidebar';

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

        <div className="flex-1 flex">
          {/* Main Content - Full width when no sidebar, shared when sidebar present */}
         <main className="flex-1 min-w-0 pb-10 xl:pl-36"> {/* Added right padding on lg+ to prevent content touching sidebar */}
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

          {/* Right Sidebar - Only on xl screens, placed inside the flex row */}
          <aside className="hidden xl:block w-72 flex-shrink-0">
            <div className="flex flex-col gap-8 py-8"> {/* py-8 for vertical alignment with main content */}
              {/* Top Advertisement Banner - Scrolls with page */}
              <div className="border-2 border-dashed border-gray-200 rounded-lg shadow-sm h-48 flex items-center justify-center">
                <p className="text-xs font-semibold text-gray-800">Advertisement</p>
              </div>

              {/* IPO Sidebar */}
              <UpcomingIPOSidebar />

              {/* Sticky Banners */}
              <div className="flex flex-col gap-3 sticky top-64">
                <div className=" border-2 border-dashed border-gray-200 rounded-lg shadow-sm h-36 flex items-center justify-center">
                  <p className="text-xs font-semibold text-gray-800">Banner Ad 1</p>
                </div>
                <div className="border-2 border-dashed border-gray-200 rounded-lg shadow-sm h-36 flex items-center justify-center">
                  <p className="text-xs font-semibold text-gray-800">Banner Ad 2</p>
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