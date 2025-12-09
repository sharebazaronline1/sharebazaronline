import { useState, useRef } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderAndNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ipoOpen, setIpoOpen] = useState(false);
  const [preIpoOpen, setPreIpoOpen] = useState(false);

  // refs for timers so we can cancel them
  const ipoTimer = useRef(null);
  const preIpoTimer = useRef(null);

  const openWithDelay = (setter, timerRef) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setter(true);
  };

  const closeWithDelay = (setter, timerRef, delay = 150) => {
    // small delay to allow pointer movement into the menu
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setter(false);
      timerRef.current = null;
    }, delay);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/sharebazaar.png" alt="ShareBazaarOnline" className="h-6 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <Link to="/" className="text-gray-700 hover:text-[#1e40af] transition">Home</Link>

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
                <span className="font-semibold">IPO Tracker</span>
                <span className="text-[8px] select-none">▼</span>
              </button>

         
              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transform transition-all duration-150
                  ${ipoOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
                role="menu"
              >
                <Link to="/ipo/ipo-list" className="block px-4 py-2 hover:bg-gray-50" role="menuitem">
                  List Of IPO
                </Link>
             
              </div>
            </div>

         
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
                <span className="font-semibold">Pre-IPO Stocks</span>
                <span className="text-[8px] select-none">▼</span>
              </button>

              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transform transition-all duration-150
                  ${preIpoOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
                role="menu"
              >
                <Link to="/preipo/dhrpfiled" className="block px-4 py-2 hover:bg-gray-50" role="menuitem">
                  DHRP Filed
                </Link>
                  <Link to="/pre-ipo-stocks" className="block px-4 py-2 hover:bg-gray-50" role="menuitem">Pre-IPO List</Link>
              </div>
            </div>

            <Link to="/brokers" className="text-gray-700 hover:text-[#1e40af] transition">Broker Analyzer</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#1e40af] transition">Insight Hub</Link>
            <Link to="/courses" className="text-gray-700 hover:text-[#1e40af] transition">SkillUp</Link>

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
              <Link to="/ipo/current">List Of IPO</Link>
             
            </div>

            <Link to="/preipo" className="block text-gray-800"><span className="font-bold">Pre-IPO Stocks</span></Link>
            <div className="pl-3 space-y-2 text-gray-600 font-medium">
              <Link to="/preipo/dhrpfiled">DHRP Filed</Link>
              <Link to="/pre-ipo-stocks">Pre-IPO List</Link>
            </div>

            <Link to="/brokers" className="block text-gray-800">Broker Analyzer</Link>
            <Link to="/blog" className="block text-gray-800">Insight Hub</Link>
            <Link to="/courses" className="block text-gray-800">SkillUp</Link>

            <Link to="/login" className="block text-center py-3 bg-green-500 text-white font-bold rounded-full shadow-lg">Login</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderAndNav;
