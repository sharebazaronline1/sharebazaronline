import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileCheck,
  Share2,
  Settings,
  TrendingUp,
  Layers,
  ShieldCheck,
  IndianRupee,
  Newspaper,
  Activity,
  ScrollText,
} from "lucide-react";

const AdminSidebar = ({ mobileOpen, setMobileOpen }) => {
  return (
    <>
      {/* Overlay (Mobile) */}
      {/* Overlay (Mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white  z-50 transform transition-transform
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 flex flex-col`}
      >
        {/* Header with Logo */}
        <div className="p-6 flex justify-between items-center bg-white">
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


        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <SidebarLink to="/admin-dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarLink to="/admin-users" icon={<Users size={18} />} label="Users" />
          <SidebarLink to="/admin-kyc" icon={<FileCheck size={18} />} label="KYC Verification" />
          <SidebarLink to="/admin-referrals" icon={<Share2 size={18} />} label="Referrals" />
          <SidebarLink to="/admin-preipo" icon={<TrendingUp size={18} />} label="Pre IPO" />
          <SidebarLink to="/admin-orders" icon={<IndianRupee size={18} />} label="Orders" />
          <SidebarLink to="/admin-corporate" icon={<Layers size={18} />} label="Corporate Actions" />
          <SidebarLink to="/admin-blogs" icon={<Newspaper  size={18} />} label="Blogs" />
          <SidebarLink to="/admin-signals" icon={<Activity   size={18} />} label="Signal Upload" />
          <SidebarLink to="/admin-settings" icon={<Settings size={18} />} label="Settings" />
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-gray-500">
          Logged in as <span className="font-medium">Admin</span>
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

export default AdminSidebar;
