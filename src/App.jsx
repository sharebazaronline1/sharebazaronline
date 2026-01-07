// src/App.jsx

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import HeaderAndNav from "./components/HeaderAndNav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import IPOTracker from "./pages/IPOTracker";
import PreIPOStocks from "./pages/PreIPOStocks";
import BrokerAnalyzer from "./pages/BrokerAnalyzer";
import InsightHub from "./pages/InsightHub";
import InsightHubDetails from "./pages/InsightHubDetails";
import SkillUp from "./pages/SkillUp";
import Login from "./pages/Login";
import IPODetails from "./pages/IPODetails";
import IPOList from "./pages/IPOList";
import PreIPODetails from "./pages/PreIPODetails";
import UpcomingIpoSidebar from "./components/IPOSidebar";
import UnlistedSharesSidebar from "./components/UnlistedSidebar";
import HowToApplyIPO from "./pages/HowToApplyIPO";
import IPOGuideSection from "./components/IPOGuideSection";
import UnlistedGuideSection from "./components/UnlistedGuideSection";
import Dashboard from "./pages/Dashboard";

function AppLayout() {
  const location = useLocation();

  // Hide header, sidebar, banner, footer on login & dashboard
  const hideLayoutElements =
    location.pathname === "/login" ||
    location.pathname.startsWith("/dashboard");

  return (
    <>
      <Helmet>
        <title>ShareBazaarOnline - IPO Updates, Unlisted Shares & Broker Comparison</title>
        <meta
          name="description"
          content="India's most trusted platform for real-time IPO insights, GMP updates, pre-IPO stocks, and broker comparisons."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
        {/* HEADER */}
        {!hideLayoutElements && <HeaderAndNav />}

        {/* CONTENT */}
        <div className="flex-1 flex w-full">
          {/* MAIN */}
          <main className="flex-1 min-w-0 px-4 lg:px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ipo-tracker" element={<IPOTracker />} />
              <Route path="/ipo/ipo-list" element={<IPOList />} />
              <Route path="/pre-ipo-stocks" element={<PreIPOStocks />} />
              <Route path="/broker-analyzer" element={<BrokerAnalyzer />} />
              <Route path="/how-to-apply-ipo" element={<HowToApplyIPO />} />
              <Route path="/preipo/:id" element={<PreIPODetails />} />
              <Route path="/insight-hub" element={<InsightHub />} />
              <Route path="/insight-hub/:id" element={<InsightHubDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ipoguide" element={<IPOGuideSection />} />
              <Route path="/preipoguide" element={<UnlistedGuideSection />} />
              <Route path="/ipo/:id" element={<IPODetails />} />
              <Route path="/skill-up" element={<SkillUp />} />
            </Routes>
          </main>

          {/* RIGHT SIDEBAR */}
          {!hideLayoutElements && (
            <aside className="hidden xl:block w-48 flex-shrink-0 mr-6">
              <div className="sticky top-20 mt-96 py-8 flex flex-col gap-2">
                <div className="h-24 bg-white rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700 shadow-sm">
                  Banner Ad
                </div>
                <UpcomingIpoSidebar />
                <UnlistedSharesSidebar />
              </div>
            </aside>
          )}
        </div>

        {/* FOOTER */}
        {!hideLayoutElements && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
