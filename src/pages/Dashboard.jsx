// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import {
  BarChart2,
  Briefcase,
  FileText,
  IndianRupee,
  Menu,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setUser(currentUser);
    });
    return () => unsub();
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      {/* Main Content */}
      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Dashboard</h1>
          <button onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Header with User Profile Dropdown */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome, {user.displayName || "Investor"}
            </h1>
            <p className="text-gray-600 mt-1">
              Track IPOs, Pre-IPOs & portfolio performance
            </p>
          </div>

          {/* Top Right User Profile Dropdown */}
          <UserProfileDropdown />
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <StatCard
            icon={<Briefcase />}
            title="Portfolio Value"
            value="₹0"
            change="No investments yet"
          />
          <StatCard
            icon={<FileText />}
            title="Holdings"
            value="0"
            change="Start investing to build portfolio"
          />
          <StatCard
            icon={<CalendarDays />}
            title="Orders"
            value="0"
            change="No orders placed"
          />
          <StatCard
            icon={<IndianRupee />}
            title="Wallet Balance"
            value="₹0"
            change="Add funds to invest"
          />
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Top Trending Pre-IPO – Reduced height */}
          <section className="bg-white rounded-2xl p-5 border shadow-sm xl:col-span-2 h-72 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Top Trending Pre-IPO</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
              <SmallPreIPOItem
                name="PhonePe"
                price="₹19,968"
                demand="Very High Demand"
              />
              <SmallPreIPOItem
                name="NSE India Ltd"
                price="₹2,134"
                demand="Strong Interest (IPO Expected)"
              />
              <SmallPreIPOItem
                name="boAt (Imagine Marketing)"
                price="₹980"
                demand="High Demand"
              />
            </div>
          </section>

          {/* Portfolio Chart – Reduced height */}
          <section className="bg-white rounded-2xl p-5 border shadow-sm h-72 flex flex-col">
            <h2 className="text-xl font-bold mb-4">
              Portfolio Mix
            </h2>
            <div className="flex-1 bg-gray-50 rounded-xl flex items-center justify-center">
              <BarChart2 className="w-14 h-14 text-green-600" />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              IPO • Pre-IPO distribution
            </p>
          </section>

          {/* Upcoming Unlisted IPOs */}
          <section className="bg-white rounded-2xl p-6 border shadow-sm xl:col-span-3">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-600" />
              Upcoming Unlisted IPOs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <UnlistedCard
                name="Bharat Coking Coal Ltd"
                sector="Mining"
                price="₹21 – TBA"
                status="Upcoming"
              />
              <UnlistedCard
                name="Avana Electrosystems"
                sector="Electronics"
                price="TBA"
                status="Pre-IPO"
              />
              <UnlistedCard
                name="Hero FinCorp"
                sector="NBFC"
                price="TBA"
                status="Pre-IPO"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

/* ---------------- Reusable Components ---------------- */

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white rounded-xl p-5 border shadow-sm">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-green-100 text-green-600 rounded-full">
        {icon}
      </div>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-sm text-green-600">{change}</p>
  </div>
);

const SmallPreIPOItem = ({ name, price, demand }) => (
  <div className="bg-gray-50 rounded-xl p-4 border hover:shadow-md transition">
    <h4 className="font-bold text-gray-900 text-base mb-2">{name}</h4>
    <p className="text-xs text-gray-600 mb-2">{price}</p>
    <div className="flex items-center justify-between">
      
      <button className="px-3 py-1.5 text-xs font-semibold rounded-full bg-green-600 text-white hover:bg-green-700 transition">
        Buy
      </button>
    </div>
  </div>
);

const UnlistedCard = ({ name, sector, price, status }) => (
  <div className="bg-gray-50 rounded-xl p-4 border hover:shadow-md transition">
    <h4 className="font-bold text-gray-900">{name}</h4>
    <p className="text-sm text-gray-600 mt-1">Sector: {sector}</p>
    <p className="text-sm text-gray-600">Price Range: {price}</p>

    <div className="flex items-center justify-between mt-4">
      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
        {status}
      </span>
      <button className="px-4 py-1.5 text-sm font-semibold rounded-full border border-green-600 text-green-600 hover:bg-green-50 transition">
        Buy
      </button>
    </div>
  </div>
);

export default Dashboard;