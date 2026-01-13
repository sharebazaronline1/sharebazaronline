// src/pages/Orders.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Menu, IndianRupee, Plus, Minus } from "lucide-react";

const Orders = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("buy"); // "buy" or "sell"
  const navigate = useNavigate();

  // Demo states for Buy Interest
  const [buyQuantity, setBuyQuantity] = useState(10);
  const [buyPricePerUnit] = useState(225);

  // Demo states for Sell Interest
  const [sellQuantity, setSellQuantity] = useState(5);
  const [sellPricePerUnit] = useState(230);

  const buyTotal = buyQuantity * buyPricePerUnit;
  const sellTotal = sellQuantity * sellPricePerUnit;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setUser(currentUser);
    });
    return () => unsub();
  }, [navigate]);

  if (!user) return null;

  // Sample orders (empty for new user)
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

        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <p className="text-gray-600 mt-1">View your order history and status</p>
          </div>
          <UserProfileDropdown />
        </header>

        {/* Narrower Buy/Sell Interest Box – Aligned Left */}
        <section className="bg-white rounded-2xl border shadow-sm mb-8 overflow-hidden max-w-2xl">
          <div className="p-4 border-b bg-gray-50">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <IndianRupee className="text-green-600" size={20} />
              Buy / Sell Interest
            </h2>
          </div>

          <div className="p-4">
            {/* Compact Tabs */}
            <div className="flex border-b mb-4">
              <button
                onClick={() => setActiveTab("buy")}
                className={`flex-1 py-2.5 text-sm font-medium text-center transition-colors ${
                  activeTab === "buy"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Buy Interest
              </button>
              <button
                onClick={() => setActiveTab("sell")}
                className={`flex-1 py-2.5 text-sm font-medium text-center transition-colors ${
                  activeTab === "sell"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sell Interest
              </button>
            </div>

            {/* Compact Quantity + Price */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Quantity */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Quantity
                </label>
                <div className="flex items-center bg-gray-50 border rounded-lg p-1.5">
                  <button
                    onClick={() =>
                      activeTab === "buy"
                        ? setBuyQuantity(Math.max(1, buyQuantity - 1))
                        : setSellQuantity(Math.max(1, sellQuantity - 1))
                    }
                    className="p-1 hover:bg-gray-200 rounded transition"
                  >
                    <Minus size={14} />
                  </button>
                  <input
                    type="number"
                    value={activeTab === "buy" ? buyQuantity : sellQuantity}
                    onChange={(e) => {
                      const val = Math.max(1, parseInt(e.target.value) || 1);
                      activeTab === "buy" ? setBuyQuantity(val) : setSellQuantity(val);
                    }}
                    className="flex-1 text-center bg-transparent border-none focus:outline-none font-medium text-base"
                  />
                  <button
                    onClick={() =>
                      activeTab === "buy"
                        ? setBuyQuantity(buyQuantity + 1)
                        : setSellQuantity(sellQuantity + 1)
                    }
                    className="p-1 hover:bg-gray-200 rounded transition"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Price per Unit */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  Price/Unit
                </label>
                <div className="text-lg font-bold text-gray-900">
                  ₹{(activeTab === "buy" ? buyPricePerUnit : sellPricePerUnit).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Total & Submit – Compact */}
            <div className="pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-gray-700">Total</span>
                <span className="text-xl font-bold text-green-700">
                  ₹{(activeTab === "buy" ? buyTotal : sellTotal).toLocaleString()}
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-medium text-white text-sm transition shadow-sm hover:shadow-md ${
                  activeTab === "buy" ? "bg-green-600 hover:bg-green-700" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {activeTab === "buy" ? "Submit Buy Request" : "Submit Sell Request"}
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Prices indicative • Manual confirmation required
              </p>
            </div>
          </div>
        </section>

        {/* Order History */}
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