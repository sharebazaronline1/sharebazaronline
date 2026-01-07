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
} from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();

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
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center">
          <img src="/images/sharebazaar.png" alt="ShareBazaarOnline" className="h-6" />
         
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <SidebarLink to="/dashboard" icon={<Home size={18} />} label="Dashboard" />
          <SidebarLink to="/portfolio" icon={<Briefcase size={18} />} label="My Portfolio" />
          <SidebarLink to="/ipo-applications" icon={<FileText size={18} />} label="IPO Applications" />
          <SidebarLink to="/pre-ipo-watchlist" icon={<AlertCircle size={18} />} label="Pre-IPO Watchlist" />
          <SidebarLink to="/insights" icon={<BarChart2 size={18} />} label="Insights" />
          <SidebarLink to="/transactions" icon={<IndianRupee size={18} />} label="Transactions" />
          <SidebarLink to="/notifications" icon={<Bell size={18} />} label="Notifications" />
          <SidebarLink to="/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>

        {/* Logout */}
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
