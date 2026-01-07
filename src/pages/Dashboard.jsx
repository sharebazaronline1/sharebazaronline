// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  BarChart2,
  Briefcase,
  FileText,
  AlertCircle,
  IndianRupee,
  Menu,
  X,
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

        {/* Desktop Header */}
        <header className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user.displayName || "Investor"}
          </h1>
          <p className="text-gray-600 mt-1">
            Track IPOs, applications & portfolio performance
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Briefcase />} title="Portfolio Value" value="₹5,20,000" change="+12%" />
          <StatCard icon={<FileText />} title="Active IPOs" value="3" change="2 Pending" />
          <StatCard icon={<CalendarDays />} title="Upcoming IPOs" value="7" change="This Month" />
          <StatCard icon={<IndianRupee />} title="Total Gains" value="₹15,200" change="+8.5%" />
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* IPO Activity */}
          <section className="bg-white rounded-2xl p-6 border shadow-sm xl:col-span-2">
            <h2 className="text-xl font-bold mb-4">IPO Activity</h2>
            <ul className="space-y-4">
              <ActivityItem title="Applied – Gujarat Kidney & Super Speciality" date="Jan 6" status="Pending" />
              <ActivityItem title="Allotted – Green Energy Ltd" date="Jan 2" status="Allotted" />
              <ActivityItem title="Refund – Global Ocean Logistics India" date="Dec 28" status="Refunded" />
            </ul>
          </section>

          {/* Portfolio Chart */}
          <section className="bg-white rounded-2xl p-6 border shadow-sm">
            <h2 className="text-xl font-bold mb-4">Portfolio Mix</h2>
            <div className="h-56 bg-gray-50 rounded-xl flex items-center justify-center">
              <BarChart2 className="w-16 h-16 text-green-600" />
            </div>
            <p className="text-center text-sm text-gray-500 mt-3">
              Equity • IPO • Pre-IPO distribution
            </p>
          </section>

          {/* Recommended IPOs */}
          <section className="bg-white rounded-2xl p-6 border shadow-sm xl:col-span-3">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-600" />
              Recommended IPOs
            </h2>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <RecoCard
    name="Victory Electric Vehicles Intl"
    open="Jan 7 – Jan 9, 2026"
    price="₹41 (Fixed Price)"
  />
  <RecoCard
    name="Defrail Technologies"
    open="Jan 9 – Jan 13, 2026"
    price="TBD"
  />
  <RecoCard
    name="Yajur Fibres Ltd"
    open="Jan 7 – Jan 9, 2026"
    price="₹168–₹174"
  />
</div>

          </section>
        </div>
      </main>
    </div>
  );
};

/* Reusable Components */

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

const ActivityItem = ({ title, date, status }) => (
  <li className="flex items-center justify-between border-b pb-3 last:border-none">
    <div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
      {status}
    </span>
  </li>
);

const RecoCard = ({ name, open, price }) => (
  <div className="bg-gray-50 rounded-xl p-4 border hover:shadow-md transition">
    <h4 className="font-bold mb-1">{name}</h4>
    <p className="text-sm text-gray-600">Open: {open}</p>
    <p className="text-sm text-gray-600 mb-3">Price: {price}</p>
    <button className="w-full py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700">
      Apply IPO
    </button>
  </div>
);

export default Dashboard;
