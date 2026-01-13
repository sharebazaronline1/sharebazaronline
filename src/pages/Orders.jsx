// src/pages/Orders.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown"; // ← New component
import { Menu, IndianRupee } from "lucide-react";

const Orders = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setUser(currentUser);
    });
    return () => unsub();
  }, [navigate]);

  if (!user) return null;

  // Sample orders based on actual IPOs (empty for new user)
  const orders = [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Orders</h1>
          <button onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Header with User Profile Dropdown */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <p className="text-gray-600 mt-1">View your order history and status</p>
          </div>

          {/* Top Right User Profile Dropdown */}
          <UserProfileDropdown />
        </header>

        {/* Orders Table / Empty State */}
        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <IndianRupee className="text-green-600" />
            Order History
          </h2>

          {orders.length === 0 ? (
            <div className="text-center py-16 px-6">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <IndianRupee className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No orders placed yet
                </h3>
                <p className="text-gray-600 mb-8">
                  Start investing in upcoming IPOs and SME listings. Your order history will appear here once you place your first application.
                </p>
                <button
                  onClick={() => navigate("/ipo/ipo-list")}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition font-medium inline-flex items-center gap-3 shadow-md hover:shadow-lg"
                >
                  Explore Upcoming IPOs
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left text-gray-600">
                    <th className="pb-2">Order ID</th>
                    <th className="pb-2">IPO Name</th>
                    <th className="pb-2">Quantity</th>
                    <th className="pb-2">Price</th>
                    <th className="pb-2">Total</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b last:border-0">
                      <td className="py-3">{order.id}</td>
                      <td>{order.name}</td>
                      <td>{order.quantity}</td>
                      <td>₹{order.price}</td>
                      <td>₹{order.total.toLocaleString()}</td>
                      <td className={`font-medium ${order.status === "Executed" ? "text-green-600" : order.status === "Cancelled" ? "text-red-600" : "text-yellow-600"}`}>
                        {order.status}
                      </td>
                      <td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Orders;