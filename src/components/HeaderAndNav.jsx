// src/components/HeaderAndNav.jsx (Updated with Unique User ID: SB-XXXXXXXX format)

import { useState, useRef, useEffect } from "react";
import { Search, Menu, X, User, LogOut, Settings, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import GlobalSearch from "./GlobalSearch";

// Helper: Generate unique 8-character alphanumeric ID (e.g., SB-A7K9P2M4)
const generateUserID = (uid) => {
  // Simple deterministic but readable approach using part of Firebase UID
  // Firebase UID is usually 28 chars, we take a portion and mix with fixed prefix
  if (!uid) return "SB-GUEST000";

  const short = uid.slice(-12); // last 12 chars of UID
  const hash = btoa(short).replace(/[=+/]/g, "").slice(0, 8).toUpperCase();
  return `SB-${hash}`;
};

const HeaderAndNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ipoOpen, setIpoOpen] = useState(false);
  const [preIpoOpen, setPreIpoOpen] = useState(false);
  const [brokerOpen, setBrokerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileIPO, setMobileIPO] = useState(false);
  const [mobilePreIPO, setMobilePreIPO] = useState(false);
  const [mobileBroker, setMobileBroker] = useState(false);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userID, setUserID] = useState(""); // ← Unique SB-XXXXXXXX ID

  const ipoTimer = useRef(null);
  const preIpoTimer = useRef(null);
  const brokerTimer = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setUserID(generateUserID(currentUser.uid));
      } else {
        setUserID("");
      }
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setProfileOpen(false);
    navigate("/", { replace: true });
  };

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

          {/* All Menu Items + Login/Profile - Right side */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <Link to="/" className="text-gray-700 hover:text-[#1e40af] transition">Home</Link>

            {/* IPO Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(setIpoOpen, ipoTimer)}
              onMouseLeave={() => closeWithDelay(setIpoOpen, ipoTimer)}
            >
              <div className="relative">
                <Link
                  to="/ipoguide"
                  className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#1e40af] transition"
                >
                  IPO Tracker <span className="text-xl">▾</span>
                </Link>
              </div>
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
              <div className="relative">
                <Link
                  to="/preipoguide"
                  className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#1e40af] transition"
                >
                  Pre IPO <span className="text-xl">▾</span>
                </Link>
              </div>
              <div
                className={`absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-[999] transition-all duration-150 
                  ${preIpoOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
              >
                <Link to="/pre-ipo-stocks" className="block px-4 py-2 hover:bg-gray-50 rounded-xl">Pre-IPO List</Link>
              </div>
            </div>

            {/* Broker Analyzer Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(setBrokerOpen, brokerTimer)}
              onMouseLeave={() => closeWithDelay(setBrokerOpen, brokerTimer)}
            >
              <button className="flex items-center gap-1 font-semibold text-gray-700 hover:text-[#1e40af] transition">
                Broker Analyzer <span className="text-xl">▾</span>
              </button>
              <div
                className={`absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-[9999] transition-all duration-150 
                  ${brokerOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-1"}`}
              >
                <Link to="/broker-analyzer/compare" className="block px-4 py-2 hover:bg-gray-50 rounded-xl">Compare Brokers</Link>
              </div>
            </div>

            <Link to="/insight-hub" className="text-gray-700 hover:text-[#1e40af] transition">Insight Hub</Link>
            <Link to="/skill-up" className="text-gray-700 hover:text-[#1e40af] transition">SkillUp</Link>

            <GlobalSearch />

            {/* USER AUTH STATE - MODERN PROFILE WITH USER ID */}
            {user ? (
              <div className="ml-4 lg:ml-8 relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 hover:bg-gray-100 rounded-full px-3 py-2 transition-all duration-200"
                  aria-label="User menu"
                >
                  <img
                    src={user.photoURL || "/images/avatar.png"}
                    alt="Profile"
                    onError={(e) => {
                      e.currentTarget.src = "/images/avatar.png";
                    }}
                    className="h-10 w-10 rounded-full border-2 border-gray-300 object-cover shadow-sm"
                  />
                  <span className="text-sm font-medium text-gray-700 hidden xl:block">
                    {user.displayName || user.email?.split("@")[0] || "User"}
                  </span>
                </button>

                {/* Profile Dropdown */}
                {profileOpen && (
                  <>
                    {/* Backdrop - closes dropdown when clicked outside */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileOpen(false)}
                    />

                    <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-50">
                      {/* User Info Header */}
                      <div className="px-5 py-4 bg-green-50 border-b border-gray-100">
                        <p className="text-base font-bold text-gray-900">
                          {user.displayName || "User"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">ID: {userID}</p>
                        <p className="text-sm text-gray-600 truncate mt-1">{user.email}</p>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition"
                        >
                          <User size={19} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">Dashboard</span>
                        </Link>

                        <Link
                          to="/notifications"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition"
                        >
                          <Bell size={19} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">Notifications</span>
                        </Link>

                        <Link
                          to="/settings"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition"
                        >
                          <Settings size={19} className="text-gray-600" />
                          <span className="text-sm font-medium text-gray-700">Settings</span>
                        </Link>
                      </div>

                      {/* Logout */}
                      <div className="border-t border-gray-100 pt-2">
                        <button
                          onClick={() => {
                            handleLogout();
                            setProfileOpen(false);
                          }}
                          className="w-full flex items-center gap-4 px-5 py-3 hover:bg-red-50 transition text-left"
                        >
                          <LogOut size={19} className="text-red-600" />
                          <span className="text-sm font-medium text-red-600">Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Login Button - When not logged in */
              <Link
                to="/login"
                className="ml-4 lg:ml-8 px-7 py-2.5 bg-green-600 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
              >
                Login
              </Link>
            )}
          </nav>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 lg:hidden">
            <GlobalSearch />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-[#1e40af]" />
              ) : (
                <Menu className="w-7 h-7 text-[#1e40af]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-6 space-y-5 text-base font-semibold max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link
              to="/"
              className="block text-[#1e40af] font-semibold py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileIPO(!mobileIPO)}
                className="w-full flex justify-between items-center font-semibold text-gray-800 py-2"
              >
                IPO Tracker
                <span className="text-xl">{mobileIPO ? "−" : "+"}</span>
              </button>
              {mobileIPO && (
                <div className="pl-6 space-y-2 mt-1">
                  <Link
                    to="/ipo/ipo-list"
                    className="block text-gray-600 hover:text-[#1e40af]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    List Of IPO
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobilePreIPO(!mobilePreIPO)}
                className="w-full flex justify-between items-center font-semibold text-gray-800 py-2"
              >
                Pre-IPO Stocks
                <span className="text-xl">{mobilePreIPO ? "−" : "+"}</span>
              </button>
              {mobilePreIPO && (
                <div className="pl-6 space-y-2 mt-1">
                  <Link
                    to="/pre-ipo-stocks"
                    className="block text-gray-600 hover:text-[#1e40af]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pre-IPO List
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileBroker(!mobileBroker)}
                className="w-full flex justify-between items-center font-semibold text-gray-800 py-2"
              >
                Broker Analyzer
                <span className="text-xl">{mobileBroker ? "−" : "+"}</span>
              </button>
              {mobileBroker && (
                <div className="pl-6 space-y-2 mt-1">
                  <Link
                    to="/broker-analyzer/compare"
                    className="block text-gray-600 hover:text-[#1e40af]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Compare Brokers
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/insight-hub"
              className="block py-2 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insight Hub
            </Link>

            <Link
              to="/skill-up"
              className="block py-2 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              SkillUp
            </Link>

            {/* Mobile Login/Profile with User ID */}
            {user ? (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-900 mb-1">
                  {user.displayName || user.email.split("@")[0]}
                </p>
                <p className="text-xs text-gray-500 mb-2">ID: {userID}</p>
                <button
                  onClick={handleLogout}
                  className="text-sm text-red-600 font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center mt-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderAndNav;