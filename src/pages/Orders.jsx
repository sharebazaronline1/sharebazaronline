// src/pages/Orders.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
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

  // Sample orders based on actual IPOs
  const orders = [
   
  ];

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
        <header className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-1">View your order history and status</p>
        </header>

        {/* Orders Table */}
        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <IndianRupee className="text-green-600" />
            Order History
          </h2>
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
          {orders.length === 0 && <p className="text-center text-gray-500 mt-4">No orders placed yet</p>}
        </section>
      </main>
    </div>
  );
};

export default Orders;