import { useState, useRef, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderAndNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ipoOpen, setIpoOpen] = useState(false);
  const [preIpoOpen, setPreIpoOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ipoTimer = useRef(null);
  const preIpoTimer = useRef(null);
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

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/sharebazaar.png" alt="ShareBazaarOnline" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">

            <Link to="/" className="text-gray-700 hover:text-[#1e40af] transition">Home</Link>

            {/* IPO */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(setIpoOpen, ipoTimer)}
              onMouseLeave={() => closeWithDelay(setIpoOpen, ipoTimer)}
            >
              <button
                aria-expanded={ipoOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1 text-gray-700 hover:text-[#1e40af] transition cursor-pointer"
                onClick={() => setIpoOpen((v) => !v)}
              >
                <span>IPO Tracker</span>
                <span className="text-[8px]">▼</span>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transform transition-all duration-150 
                  ${ipoOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
                role="menu"
              >
                <Link to="/ipo/ipo-list" className="block px-4 py-2 hover:bg-gray-50">List Of IPO</Link>
              </div>
            </div>

            {/* PRE IPO */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(setPreIpoOpen, preIpoTimer)}
              onMouseLeave={() => closeWithDelay(setPreIpoOpen, preIpoTimer)}
            >
              <button
                aria-expanded={preIpoOpen}
                aria-haspopup="menu"
                className="flex items-center gap-1 text-gray-700 hover:text-[#1e40af] transition cursor-pointer"
                onClick={() => setPreIpoOpen((v) => !v)}
              >
                <span>Pre-IPO Stocks</span>
                <span className="text-[8px]">▼</span>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transform transition-all duration-150 
                  ${preIpoOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
                role="menu"
              >
                <Link to="/pre-ipo-stocks" className="block px-4 py-2 hover:bg-gray-50">Pre-IPO List</Link>
              </div>
            </div>

            <Link to="/brokers" className="text-gray-700 hover:text-[#1e40af] transition">Broker Analyzer</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#1e40af] transition">Insight Hub</Link>
            <Link to="/courses" className="text-gray-700 hover:text-[#1e40af] transition">SkillUp</Link>

            {/* Desktop Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="ml-4 px-7 py-2.5 bg-green-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Right Icons */}
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

      {/* ========== SEARCH OVERLAY ========== */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[1000] flex items-start justify-center pt-24 px-4">
          <div ref={searchRef} className="bg-white w-full max-w-xl rounded-xl shadow-xl p-4 animate-fadeIn">
            <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-3">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search IPOs, Pre-IPO, Brokers..."
                className="flex-1 outline-none text-gray-700"
              />
              <button onClick={() => setSearchOpen(false)}>
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeIn">
          <div className="px-6 py-6 space-y-5 text-base font-semibold">
            <Link to="/" className="block text-[#1e40af]">Home</Link>

            <Link to="/ipotracker" className="block text-gray-800 font-bold">IPO Tracker</Link>
            <div className="pl-3 space-y-2 text-gray-600 font-medium">
              <Link to="/ipo/ipo-list">List Of IPO</Link>
            </div>

            <Link to="/preipo" className="block text-gray-800 font-bold">Pre-IPO Stocks</Link>
            <div className="pl-3 space-y-2 text-gray-600 font-medium">
              <Link to="/pre-ipo-stocks">Pre-IPO List</Link>
            </div>

            <Link to="/brokers" className="block">Broker Analyzer</Link>
            <Link to="/blog" className="block">Insight Hub</Link>
            <Link to="/courses" className="block">SkillUp</Link>

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
