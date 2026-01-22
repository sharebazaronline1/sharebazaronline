// src/pages/Notifications.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown"; // ← New component
import { Menu, Bell } from "lucide-react";
import { supabase } from "../lib/supabase";

const Notifications = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

 useEffect(() => {
  let mounted = true;

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!mounted) return;

    if (!session?.user) {
      navigate("/login");
      return;
    }

    setUser(session.user);
  };

  checkAuth();

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    if (!session?.user) {
      navigate("/login");
    } else {
      setUser(session.user);
    }
  });

  return () => {
    mounted = false;
    subscription.unsubscribe();
  };
}, [navigate]);

  if (!user) return null;

  // Sample notifications
  const notifications = [
    { id: 1, title: "Bharat Coking Coal IPO Opens Today", message: "Subscription starts Jan 09. Don't miss out!", time: "2 hours ago", read: false },
    { id: 2, title: "Price Update: NSE India Unlisted", message: "Current price: ₹2000 (+0.25%)", time: "1 day ago", read: true },
    { id: 3, title: "Order Executed", message: "Your Defrail Technologies order has been processed.", time: "3 days ago", read: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Notifications</h1>
          <button onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Header with User Profile Dropdown */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-1">Stay updated with latest alerts</p>
          </div>

          {/* Top Right User Profile Dropdown */}
          <UserProfileDropdown />
        </header>

        {/* Notification List */}
        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bell className="text-green-600" />
            Recent Notifications
          </h2>
          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li key={notif.id} className={`p-4 rounded-xl ${notif.read ? "bg-gray-50" : "bg-green-50"}`}>
                <div className="flex justify-between">
                  <p className="font-medium text-gray-900">{notif.title}</p>
                  <p className="text-xs text-gray-500">{notif.time}</p>
                </div>
                <p className="text-sm text-gray-600">{notif.message}</p>
                {!notif.read && <button className="text-xs text-green-600 mt-2">Mark as Read</button>}
              </li>
            ))}
          </ul>
          {notifications.length === 0 && <p className="text-center text-gray-500">No new notifications</p>}
        </section>
      </main>
    </div>
  );
};

export default Notifications;