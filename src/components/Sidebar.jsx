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
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };

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
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
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
        <nav className="flex-1 px-4 py-6 space-y-1">
          <SidebarLink to="/dashboard" icon={<Home size={18} />} label="Dashboard" />
          <SidebarLink to="/pre-ipo-watchlist" icon={<AlertCircle size={18} />} label="Pre-IPO Watchlist" />
          <SidebarLink to="/kyc" icon={<BarChart2 size={18} />} label="Documents" />
          <SidebarLink to="/orders" icon={<IndianRupee size={18} />} label="Orders" />
          <SidebarLink to="/notifications" icon={<Bell size={18} />} label="Notifications" />
          <SidebarLink to="/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>

        {/* Logout (Bottom) */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl"
          >
            <LogOut size={18} />
            Logout
          </button>
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