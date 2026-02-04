import { useState, useEffect } from "react";
import { NavLink,useNavigate  } from "react-router-dom";
import { Bell, Settings, LogOut, User, Share2 } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

const UserProfileDropdown = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [userData, setUserData] = useState({
    displayName: "Guest",
    email: "",
    userID: "SB-NOTSET",
  });
  const navigate = useNavigate(); 
  useEffect(() => {
    let mounted = true;

    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || !mounted) return;

      const email = user.email || "No email";
      let name =
        user.user_metadata?.full_name ||
        user.user_metadata?.name ||
        email.split("@")[0];

      name = name.charAt(0).toUpperCase() + name.slice(1);

      const { data: profile } = await supabase
        .from("profiles")
        .select("sb_user_id")
        .eq("id", user.id)
        .single();

      setUserData({
        displayName: name,
        email,
        userID: profile?.sb_user_id ?? "SB-NOTSET",
      });

      setProfile(profile);
    };

    getUser();

    return () => {
      mounted = false;
    };
  }, []);

  const handleLogout = async () => {
  await supabase.auth.signOut();
  navigate("/", { replace: true }); 
};

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "Guest";

  const avatarLetter = displayName.charAt(0).toUpperCase() || "?";

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 hover:bg-gray-100 rounded-full p-2 transition-all duration-200"
      >
        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold">
          {avatarLetter}
        </div>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden">
            {/* User Info */}
            <div className="px-5 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b">
              <p className="text-base font-bold text-gray-900">
                {userData.displayName}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                ID: {userData.userID}
              </p>
              <p className="text-xs text-gray-500 truncate mt-1">
                {userData.email}
              </p>
            </div>

            {/* Menu */}
            <div className="py-2">
              <NavLink
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50"
              >
                <User size={18} />
                <span className="text-sm">Dashboard</span>
              </NavLink>

              <NavLink
                to="/notifications"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50"
              >
                <Bell size={18} />
                <span className="text-sm">Notifications</span>
              </NavLink>

              <NavLink
                to="/settings"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50"
              >
                <Settings size={18} />
                <span className="text-sm">Settings</span>
              </NavLink>

              <NavLink
                to="/referrals"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-5 py-3 hover:bg-green-50 text-green-600"
              >
                <Share2 size={18} />
                <span className="text-sm font-medium">Refer & Earn</span>
              </NavLink>
            </div>

            {/* Logout */}
            <div className="border-t">
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-4 px-5 py-3 hover:bg-red-50 text-red-600"
              >
                <LogOut size={18} />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfileDropdown;
