// src/components/UserProfileDropdown.jsx

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User, Bell, Settings, LogOut, Share2 } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    displayName: "User",
    email: "",
    handle: "@User", // fallback
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Use Firebase data with sensible fallbacks
        const name = currentUser.displayName || 
                     (currentUser.email ? currentUser.email.split('@')[0] : "User");
        const email = currentUser.email || "Not available";
        
        // You can customize handle generation if needed (e.g., from Firestore later)
        const handle = `@${name.replace(/\s+/g, '')}` || "@User";

        setUserData({
          displayName: name,
          email,
          handle,
        });
      } else {
        // Fallback when not logged in (shouldn't happen due to auth guard)
        setUserData({
          displayName: "Guest",
          email: "",
          handle: "@Guest",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 hover:bg-gray-100 rounded-full p-2 transition-all duration-200 focus:outline-none"
        aria-label="User menu"
      >
        <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-semibold shadow-sm">
          {userData.displayName.charAt(0).toUpperCase()}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop to close on outside click */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-50">
            {/* User Info Header - Now dynamic */}
            <div className="px-5 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100">
              <p className="text-base font-bold text-gray-900">
                {userData.displayName}
              </p>
              <p className="text-sm text-gray-600 truncate mt-1">
                {userData.handle}
              </p>
              {userData.email && (
                <p className="text-xs text-gray-500 mt-1 truncate">
                  {userData.email}
                </p>
              )}
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <NavLink
                to="/notifications"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors"
              >
                <Bell size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Notifications</span>
              </NavLink>

              <NavLink
                to="/settings"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors"
              >
                <Settings size={18} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Settings</span>
              </NavLink>``

              {/* Refer & Earn */}
              <button
                className="w-full flex items-center gap-4 px-5 py-3 hover:bg-green-50 transition-colors text-left"
              >
                <Share2 size={18} className="text-green-600" />
                <span className="text-sm font-medium text-green-600">Refer & Earn</span>
              </button>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-100">
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-4 px-5 py-3 hover:bg-red-50 transition-colors text-left"
              >
                <LogOut size={18} className="text-red-600" />
                <span className="text-sm font-medium text-red-600">Logout</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfileDropdown;