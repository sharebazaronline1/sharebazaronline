// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import Documents from "./pages/Documents";
import Portfolio from "./pages/Portfolio";
import PreIPOWatchlist from "./pages/PreIPOWatchlist";
import Orders from "./pages/Orders";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Referrals from "./pages/Referrals";
import AdminLogin from "./pages/AdminLogin";         
import AdminDashboard from "./pages/AdminDashboard";  
import ReferralRedirect from "./pages/ReferralRedirect";
import AdminKycDocuments from "./pages/AdminKycDocuments"
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";      
// import AdminReferrals from "./pages/AdminReferrals";
import AdminUsers from "./pages/AdminUsers"
// Optional: If you want admin to have its own layout without user sidebar/header
function AdminLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* No HeaderAndNav or Footer for admin */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

function AppLayout() {
  const location = useLocation();
  const isAuthOrProtectedPage =
    location.pathname === "/login" ||
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/portfolio") ||
    location.pathname.startsWith("/pre-ipo-watchlist") ||
    location.pathname.startsWith("/kyc") ||
    location.pathname.startsWith("/orders") ||
    location.pathname.startsWith("/notifications") ||
    location.pathname.startsWith("/settings") ||
    location.pathname.startsWith("/referrals") ||
    location.pathname.startsWith("/admin"); // ← hide layout for admin too

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
        {/* HEADER - only on public pages */}
        {!isAuthOrProtectedPage && <HeaderAndNav />}

        {/* CONTENT */}
        <div className="flex-1 flex w-full">
          {/* MAIN */}
          <main className="flex-1 min-w-0 px-4 lg:px-6">
            <Routes>
              {/* Public routes (with layout) */}
              <Route path="/" element={<Home />} />
              <Route path="/ipo-tracker" element={<IPOTracker />} />
              <Route path="/ipo/ipo-list" element={<IPOList />} />
              <Route path="/pre-ipo-stocks" element={<PreIPOStocks />} />
              <Route path="/broker-analyzer" element={<BrokerAnalyzer />} />
              <Route path="/how-to-apply-ipo" element={<HowToApplyIPO />} />
              <Route path="/preipo/:id" element={<PreIPODetails />} />
              <Route path="/insight-hub" element={<InsightHub />} />
              <Route path="/insight-hub/:id" element={<InsightHubDetails />} />
              <Route path="/ipo/:id" element={<IPODetails />} />
              <Route path="/skill-up" element={<SkillUp />} />
              <Route path="/ipoguide" element={<IPOGuideSection />} />
              <Route path="/preipoguide" element={<UnlistedGuideSection />} />

              {/* Login & Referral */}
              <Route path="/login" element={<Login />} />
              <Route path="/ref/:code" element={<ReferralRedirect />} />

              {/* Protected user routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/pre-ipo-watchlist" element={<PreIPOWatchlist />} />
                <Route path="/kyc" element={<Documents />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/referrals" element={<Referrals />} />
              </Route>

              {/* Admin Routes – protected by AdminRoute */}
              <Route element={<AdminRoute />}>
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/admin-kyc" element={<AdminKycDocuments />} />
                {/* <Route path="/admin-referrals" element={<AdminReferrals />} /> */}
                <Route path="/admin-users" element={<AdminUsers />} />
              </Route>

              {/* Catch-all redirect (optional) */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* RIGHT SIDEBAR - only on public pages */}
          {!isAuthOrProtectedPage && (
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

        {/* FOOTER - only on public pages */}
        {!isAuthOrProtectedPage && <Footer />}
      </div>
    </>
  );
}

/* ---------------- ROOT ---------------- */
function App() {
  return (
    <AuthProvider>
      <Router>
        <AppLayout />
      </Router>
    </AuthProvider>
  );
}

export default App;