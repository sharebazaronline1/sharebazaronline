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
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">

            <Link to="/" className="text-gray-700 hover:text-[#1e40af] transition">
              Home
            </Link>

          
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#1e40af] transition">
                <span className="font-semibold">IPO Tracker</span>
                <span className="text-[8px] select-none">▼</span>
              </button>

              <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999]
                opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                transition-opacity duration-200">
                <Link to="/ipo/ipolist" className="block  px-4 py-2 hover:bg-gray-50">
                  List Of Ipo
                </Link>
                
              </div>
            </div>

            {/* Pre IPO Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#1e40af] transition">
                <span className="font-semibold">Pre-IPO Stocks</span>
                <span className="text-[8px] select-none">▼</span>
              </button>

              <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999]
                opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                transition-opacity duration-200">
                <Link to="/preipo/dhrpfiled" className="block px-4 py-2 hover:bg-gray-50">
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
              className="ml-4 px-7 py-2.5 bg-green-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-2">
              <Search className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#1e40af]" /> : <Menu className="w-7 h-7 text-[#1e40af]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeIn">
          <div className="px-6 py-6 space-y-5 text-base font-semibold">
            <Link to="/" className="block text-[#1e40af]">Home</Link>

            <Link to="/ipotracker" className="block text-gray-800"><span className="font-bold">IPO Tracker</span></Link>
            <div className="pl-3 space-y-2 text-gray-600 font-medium">
              <Link to="/ipo/current">Current IPO</Link>
              <Link to="/ipo/past">Past IPO</Link>
              <Link to="/ipo/upcoming">Upcoming IPO</Link>
            </div>

            <Link to="/preipo" className="block text-gray-800"><span className="font-bold">Pre-IPO Stocks</span></Link>
            <div className="pl-3 space-y-2 text-gray-600 font-medium">
              <Link to="/preipo/dhrpfiled">DHRP Filed</Link>
            </div>

            <Link to="/brokers" className="block text-gray-800">Broker Analyzer</Link>
            <Link to="/blog" className="block text-gray-800">Insight Hub</Link>
            <Link to="/courses" className="block text-gray-800">SkillUp</Link>

            <Link to="/login" className="block text-center py-3 bg-green-500 text-white font-bold rounded-full shadow-lg">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderAndNav;
