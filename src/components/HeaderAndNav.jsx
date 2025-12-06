import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderAndNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/sharebazaar.png"
              alt="ShareBazaarOnline"
              className="h-5 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">

            <Link to="/" className="text-gray-700 hover:text-[#1e40af] transition">
              Home
            </Link>

            {/* ================= IPO DROPDOWN ================= */}
            <div className="relative group py-3">
              <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[#1e40af] transition">
                <span>IPO Tracker</span>
                <span className="text-[10px] select-none">▼</span>
              </div>

              <div className="absolute left-0 mt-2 w-48 hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-md shadow-xl z-[999] pointer-events-auto">
                <Link to="/ipo/current" className="px-4 py-2 hover:bg-gray-50 text-gray-700">
                  Current IPO
                </Link>
                <Link to="/ipo/past" className="px-4 py-2 hover:bg-gray-50 text-gray-700">
                  Past IPO
                </Link>
                <Link to="/ipo/upcoming" className="px-4 py-2 hover:bg-gray-50 text-gray-700">
                  Upcoming IPO
                </Link>
              </div>
            </div>

            {/* ================= PRE-IPO DROPDOWN ================= */}
            <div className="relative group py-3">
              <div className="flex items-center gap-1 cursor-pointer text-gray-700 hover:text-[#1e40af] transition">
                <span>Pre-IPO Stocks</span>
                <span className="text-[10px] select-none">▼</span>
              </div>

              <div className="absolute left-0 mt-2 w-48 hidden group-hover:flex flex-col bg-white border border-gray-200 rounded-md shadow-xl z-[999] pointer-events-auto">
                <Link to="/preipo/dhrpfiled" className="px-4 py-2 hover:bg-gray-50 text-gray-700">
                  DHRP Filed
                </Link>
              </div>
            </div>

            <Link to="/brokers" className="text-gray-700 hover:text-[#1e40af] transition">
              Broker Analyzer
            </Link>

            <Link to="/blog" className="text-gray-700 hover:text-[#1e40af] transition">
              Insight Hub
            </Link>

            <Link to="/courses" className="text-gray-700 hover:text-[#1e40af] transition">
              SkillUp
            </Link>

            <Link
              to="/login"
              className="ml-6 px-8 py-3 bg-blue-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-2">
              <Search className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-[#1e40af]" />
              ) : (
                <Menu className="w-7 h-7 text-[#1e40af]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ------------ MOBILE NAV ------------ */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-6 space-y-5">
            <Link to="/" className="block text-lg font-semibold text-[#1e40af]">
              Home
            </Link>

            <Link to="/ipotracker" className="block text-lg font-semibold text-gray-800">
              IPO Tracker
            </Link>
            <div className="pl-4 space-y-2 text-gray-600 text-base">
              <Link to="/ipo/current">Current IPO</Link>
              <Link to="/ipo/past">Past IPO</Link>
              <Link to="/ipo/upcoming">Upcoming IPO</Link>
            </div>

            <Link to="/preipo" className="block text-lg font-semibold text-gray-800">
              Pre-IPO Stocks
            </Link>
            <div className="pl-4 space-y-2 text-gray-600 text-base">
              <Link to="/preipo/dhrpfiled">DHRP Filed</Link>
            </div>

            <Link to="/brokers" className="block text-lg font-semibold text-gray-800">
              Broker Analyzer
            </Link>

            <Link to="/blog" className="block text-lg font-semibold text-gray-800">
              Insight Hub
            </Link>

            <Link to="/courses" className="block text-lg font-semibold text-gray-800">
              SkillUp
            </Link>

            <Link
              to="/login"
              className="block text-center py-3.5 bg-blue-500 text-white font-bold rounded-full shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderAndNav;
