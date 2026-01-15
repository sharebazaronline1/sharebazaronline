// src/components/Sidebar.jsx

import { NavLink, useNavigate } from "react-router-dom";
import {
  LogOut,
  Home,
  Briefcase,
  Bell,
  Settings,
  IndianRupee,
  FileText,
  BarChart2,
  AlertCircle,
  X,
  User,
} from "lucide-react";
import { useState } from "react";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);



  return (
    <>
      {/* Overlay (Mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r z-50 transform transition-transform
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col`}
      >
        {/* Header with Logo */}
        <div className="p-6 border-b flex justify-between items-center bg-white">
          <button 
            onClick={() => window.location.href = '/'} 
            className="flex items-center"
          >
            <img 
              src="/images/sharebazaar.png" 
              alt="ShareBazaarOnline" 
              className="h-8" 
            />
          </button>
        </div>

        {/* Main Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <SidebarLink to="/dashboard" icon={<Home size={18} />} label="Dashboard" />
          <SidebarLink to="/pre-ipo-watchlist" icon={<AlertCircle size={18} />} label="Pre-IPO Watchlist" />
          <SidebarLink to="/kyc" icon={<BarChart2 size={18} />} label="Documents" />
          <SidebarLink to="/orders" icon={<IndianRupee size={18} />} label="Orders" />
        </nav>

       
         {/* Ad Banner - Placed just above Logout */}
        <div className="px-4 pb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 text-center">
            <p className="text-sm font-medium text-green-800 mb-2">
              Unlock Premium Features
            </p>
            <p className="text-xs text-gray-600 mb-3">
              Get exclusive IPO alerts, priority access & more!
            </p>
            <button className="w-full bg-green-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-green-700 transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ to, icon, label }) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `
      flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition
      ${
        isActive
          ? "bg-green-50 text-green-600"
          : "text-gray-700 hover:bg-green-50 hover:text-green-600"
      }
      `
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;