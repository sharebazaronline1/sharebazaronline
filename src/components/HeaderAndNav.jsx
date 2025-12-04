// src/components/HeaderAndNav.jsx
import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderAndNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

       
          <Link to="/" className="flex items-center">
            <img
              src="/images/sharebazaar.png"
              alt="ShareBazaarOnline"
              className="h-5 w-auto "
              onError={(e) => (e.target.src = "https://via.placeholder.com/200x60/1e40af/14b8a6?text=ShareBazaarOnline")}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <Link to="/" className="text-gray-700 hover:text-[#1e40af] transition">
              Home
            </Link>

            <div className="relative group">
               <Link to="/ipotracker" className="text-gray-700 hover:text-[#1e40af] transition">
             IPO Tracker
            </Link>
              {/* <button className="flex items-center gap-1 text-gray-700 hover:text-[#1e40af] transition">
                IPO Tracker
              
              </button> */}
              {/* <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-3">
                <Link to="/ipo/live" className="block px-6 py-3 hover:bg-teal-50 text-gray-700 font-medium">Live IPOs</Link>
                <Link to="/ipo/upcoming" className="block px-6 py-3 hover:bg-teal-50 text-gray-700 font-medium">Upcoming IPOs</Link>
                <Link to="/ipo/mainboard" className="block px-6 py-3 hover:bg-teal-50 text-gray-700 font-medium">Mainboard</Link>
                <Link to="/ipo/sme" className="block px-6 py-3 hover:bg-teal-50 text-gray-700 font-medium border-t">SME IPOs</Link>
              </div> */}
            </div>

            <Link to="/preipo" className="text-gray-700 hover:text-[#1e40af] transition">
              Pre-IPO Stocks
            </Link>

            <Link to="/brokers" className="text-gray-700 hover:text-[#1e40af] transition">
              Broker Analyzer
            </Link>

            <Link to="/blog" className="text-gray-700 hover:text-[#1e40af] transition">
              Insight Hub
            </Link>

            <Link to="/courses" className="text-gray-700 hover:text-[#1e40af] transition">
              SkillUp
            </Link>

            {/* Login Button - Teal Gradient */}
            <Link
              to="/login"
              className="ml-6 px-8 py-3 bg-blue-600 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:from-[#1e3a8a] hover:to-[#0d9488] transform hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-6 space-y-5">
            <Link to="/" className="block text-lg font-semibold text-[#1e40af]">Home</Link>
            <Link to="/ipo" className="block text-lg font-semibold text-gray-800">IPO Tracker</Link>
            <Link to="/preipo" className="block text-lg font-semibold text-gray-800">Pre-IPO Stocks</Link>
            <Link to="/brokers" className="block text-lg font-semibold text-gray-800">Broker Analyzer</Link>
            <Link to="/blog" className="block text-lg font-semibold text-gray-800">Insight Hub</Link>
            <Link to="/courses" className="block text-lg font-semibold text-gray-800">SkillUp</Link>
            <Link
              to="/login"
              className="block text-center py-3.5 bg-blue-600 text-white font-bold rounded-full shadow-lg"
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