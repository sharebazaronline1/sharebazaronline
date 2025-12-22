// src/components/HeaderAndNav.jsx
import { useState, useRef, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import GlobalSearch from "./GlobalSearch";

const HeaderAndNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ipoOpen, setIpoOpen] = useState(false);
  const [preIpoOpen, setPreIpoOpen] = useState(false);
  const [brokerOpen, setBrokerOpen] = useState(false); // New dropdown for Broker Analyzer
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ipoTimer = useRef(null);
  const preIpoTimer = useRef(null);
  const brokerTimer = useRef(null);
  const searchRef = useRef(null);

  const openWithDelay = (setter, timerRef) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setter(true);
  };

  const closeWithDelay = (setter, timerRef, delay = 150) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setter(false);
      timerRef.current = null;
    }, delay);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER FLEX */}
        <div className="flex items-center justify-between h-16">

          {/* Logo - Left side */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/images/sharebazaar.png" alt="ShareBazaarOnline" className="h-6 w-auto" />
          </Link>

          {/* All Menu Items + Login - Moved to right side */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <Link to="/" className="text-gray-700 hover:text-[#1e40af] transition">Home</Link>

            {/* IPO Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(setIpoOpen, ipoTimer)}
              onMouseLeave={() => closeWithDelay(setIpoOpen, ipoTimer)}
            >
              <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#1e40af] transition">
                IPO Tracker <span className=" text-xl">▾</span>
              </button>
              <div
                className={`absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transition-all duration-150 
                  ${ipoOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
              >
                <Link to="/ipo/ipo-list" className="block px-4 py-2 hover:bg-gray-50 rounded-xl">List Of IPO</Link>
              </div>
            </div>

            {/* Pre-IPO Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(setPreIpoOpen, preIpoTimer)}
              onMouseLeave={() => closeWithDelay(setPreIpoOpen, preIpoTimer)}
            >
              <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#1e40af] transition">
                Pre-IPO Stocks <span className=" text-xl">▾</span>
              </button>
              <div
                className={`absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transition-all duration-150 
                  ${preIpoOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
              >
                <Link to="/pre-ipo-stocks" className="block px-4 py-2 hover:bg-gray-50 rounded-xl">Pre-IPO List</Link>
              </div>
            </div>

            {/* Broker Analyzer Dropdown - NEW */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(setBrokerOpen, brokerTimer)}
              onMouseLeave={() => closeWithDelay(setBrokerOpen, brokerTimer)}
            >
              <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#1e40af] transition">
                Broker Analyzer <span className=" text-xl">▾</span>
              </button>
              <div
                className={`absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transition-all duration-150 
                  ${brokerOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
              >
                <Link to="/broker-analyzer/compare" className="block px-4 py-2 hover:bg-gray-50 rounded-t-xl">Compare Brokers</Link>
              </div>
            </div>

            <Link to="/insight-hub" className="text-gray-700 hover:text-[#1e40af] transition">Insight Hub</Link>
            <Link to="/skill-up" className="text-gray-700 hover:text-[#1e40af] transition">SkillUp</Link>


{/* add inside header */}
<GlobalSearch />
            {/* Login Button - Far right */}
            <Link
              to="/login"
              className="ml-8 px-7 py-2.5 bg-green-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setSearchOpen(true)} className="p-2">
              <Search className="w-6 h-6 text-gray-600" />
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X className="w-7 h-7 text-[#1e40af]" /> : <Menu className="w-7 h-7 text-[#1e40af]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Improved spacing & alignment */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-6 space-y-6 text-base font-medium">
            <Link to="/" className="block text-[#1e40af] font-bold py-2">Home</Link>

            <div className="space-y-1">
              <p className="font-bold text-gray-800 py-2">IPO Tracker</p>
              <Link to="/ipo/ipo-list" className="block pl-6 py-1 text-gray-600 hover:text-[#1e40af]">List Of IPO</Link>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-gray-800 py-2">Pre-IPO Stocks</p>
              <Link to="/pre-ipo-stocks" className="block pl-6 py-1 text-gray-600 hover:text-[#1e40af]">Pre-IPO List</Link>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-gray-800 py-2">Broker Analyzer</p>
              <Link to="/broker-analyzer/compare" className="block pl-6 py-1 text-gray-600 hover:text-[#1e40af]">Compare Brokers</Link>
            </div>

            <Link to="/insight-hub" className="block py-2 text-gray-800">Insight Hub</Link>
            <Link to="/skill-up" className="block py-2 text-gray-800">SkillUp</Link>

            <Link
              to="/login"
              className="block text-center mt-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition"
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