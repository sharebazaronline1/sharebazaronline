// src/pages/Orders.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { IndianRupee, Search } from "lucide-react";
import { fetchPreIPOs } from "../api/mockApi"; // Only Pre-IPOs
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";


const Orders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("buy");

  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [quantity, setQuantity] = useState(10);
  const total = quantity * pricePerUnit;

  const [preIpos, setPreIpos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const preIpoData = await fetchPreIPOs();
        setPreIpos(Array.isArray(preIpoData) ? preIpoData : []);
      } catch (err) {
        console.error("Failed to load Pre-IPOs:", err);
        setPreIpos([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCompanies = preIpos.filter((item) =>
    item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item?.isin ?? "").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCompanySelect = (company) => {
    setSelectedCompany(company.name || "Unknown");
    setPricePerUnit(Number(company.price) || 0);
    setSearchQuery("");
    setShowDropdown(false);
  };

  const handleSubmit = () => {
    if (!selectedCompany) {
      alert("Please select a company");
      return;
    }
    if (quantity < 5 || quantity % 5 !== 0) {
      alert("Quantity must be a multiple of 5 and at least 5");
      return;
    }

    const newOrder = {
      id: Date.now(),
      type: activeTab === "buy" ? "Buy" : "Sell",
      name: selectedCompany,
      quantity,
      price: pricePerUnit,
      total,
      status: "Pending",
      date: new Date().toLocaleDateString("en-IN"),
    };

    setOrders((prev) => [newOrder, ...prev]);

    setQuantity(10);
    setSelectedCompany("");
    setPricePerUnit(0);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <main className="md:ml-64 p-4 md:p-6 lg:p-8 transition-all flex flex-col lg:flex-row gap-6 xl:gap-8">
        {/* LEFT - Buy/Sell form - fixed max height + scroll */}
        <section 
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden w-full lg:w-1/2 max-w-2xl flex flex-col"
          style={{ maxHeight: '85vh' }} // ← main fix
        >
          <div className="p-5 md:p-6 border-b bg-gray-50 shrink-0">
            <h2 className="text-lg font-bold flex items-center gap-2.5">
              <IndianRupee className="text-green-600" size={22} />
              {activeTab === "buy" ? "Buy Interest" : "Sell Interest"}
            </h2>
          </div>

          {/* Scrollable content area */}
          <div className="p-5 md:p-6 space-y-6 overflow-y-auto flex-1">
            {/* Tabs */}
            <div className="flex border-b shrink-0">
              <button
                onClick={() => setActiveTab("buy")}
                className={`flex-1 py-3.5 text-sm font-medium transition-colors ${
                  activeTab === "buy"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab("sell")}
                className={`flex-1 py-3.5 text-sm font-medium transition-colors ${
                  activeTab === "sell"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sell
              </button>
            </div>

            {/* Company Search */}
            <div className="relative" ref={dropdownRef}>
              <label className="block text-xs font-medium text-gray-600 mb-2">
                Company (Name or ISIN)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery || selectedCompany}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search company name or ISIN..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm transition"
                />
                <Search
                  className="absolute right-4 top-1/3 -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={20}
                />
              </div>

              {showDropdown && (
                <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto z-50">
                  {filteredCompanies.length > 0 ? (
                    filteredCompanies.map((company) => (
                      <div
                        key={company.name}
                        onClick={() => handleCompanySelect(company)}
                        className="px-5 py-3.5 hover:bg-gray-50 cursor-pointer text-sm flex justify-between items-center transition"
                      >
                        <span className="font-medium text-gray-900">{company.name}</span>
                        <span className="text-xs text-gray-500 font-mono">
                          {company.isin || "—"}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="px-5 py-4 text-sm text-gray-500 italic">
                      No matching Pre-IPO companies found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quantity + Price */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Quantity (multiples of 5)
                </label>
                <input
                  type="number"
                  value={quantity}
                  step={5}
                  min={5}
                  onChange={(e) => {
                    const val = Math.max(5, parseInt(e.target.value) || 5);
                    setQuantity(val - (val % 5) || 5);
                  }}
                  className="w-full px-4 py-3 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 font-semibold text-base bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Price/Unit
                </label>
                <div className="text-xl font-bold text-gray-900 flex items-center h-[46px]">
                  ₹{pricePerUnit.toLocaleString("en-IN")}
                </div>
              </div>
            </div>

            {/* Total + Submit - sticky bottom feel */}
            <div className="pt-6 border-t space-y-5 sticky bottom-0 bg-white pb-2">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-gray-700">Total Amount</span>
                <span className="text-2xl font-bold text-green-700">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all shadow-md ${
                  activeTab === "buy"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-600 hover:bg-green-700"
                } hover:shadow-lg active:scale-[0.98]`}
              >
                {activeTab === "buy" ? "Submit Buy Request" : "Submit Sell Request"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Indicative prices • Final confirmation required
              </p>
            </div>
          </div>
        </section>

    

        {/* Order History */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6 w-full lg:w-1/2 flex flex-col">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2.5 shrink-0">
            <IndianRupee className="text-green-600" size={22} />
            Order History
          </h2>

          {orders.length === 0 ? (
            <div className="flex-1 flex items-center justify-center py-12">
              <div className="text-center max-w-md">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center">
                  <IndianRupee className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No orders yet
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Your Pre-IPO buy/sell requests will appear here once submitted.
                </p>
                <button
                  onClick={() => navigate("/ipo/ipo-list")}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition font-medium shadow-md hover:shadow-lg"
                >
                  Explore Pre-IPOs
                </button>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto flex-1">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b bg-gray-50 text-gray-700 text-left">
                    <th className="py-4 px-4 font-medium">ID</th>
                    <th className="py-4 px-4 font-medium">Type</th>
                    <th className="py-4 px-4 font-medium">Company</th>
                    <th className="py-4 px-4 font-medium text-right">Qty</th>
                    <th className="py-4 px-4 font-medium text-right">Price</th>
                    <th className="py-4 px-4 font-medium text-right">Total</th>
                    <th className="py-4 px-4 font-medium">Status</th>
                    <th className="py-4 px-4 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Show only latest 6 orders */}
                  {orders.slice(0, 6).map((order) => (
                    <tr
                      key={order.id}
                      className="border-b last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 font-mono text-gray-600 text-xs">
                        {order.id}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            order.type === "Buy"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {order.type}
                        </span>
                      </td>
                      {/* Shortened company name with ellipsis */}
                      <td 
                        className="py-3 px-4 font-medium max-w-[180px] truncate" 
                        title={order.name} // tooltip shows full name on hover
                      >
                        {order.name.length > 28 
                          ? order.name.substring(0, 25) + '...' 
                          : order.name}
                      </td>
                      <td className="py-3 px-4 text-right">{order.quantity}</td>
                      <td className="py-3 px-4 text-right">
                        ₹{order.price.toLocaleString("en-IN")}
                      </td>
                      <td className="py-3 px-4 text-right font-medium">
                        ₹{order.total.toLocaleString("en-IN")}
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-600 text-xs">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Optional hint when there are more than 6 orders */}
              {orders.length > 6 && (
                <div className="text-center py-4 text-sm text-gray-500">
                  Showing latest 6 of {orders.length} orders
                </div>
              )}
            </div>
          )}
        </section>


      </main>
    </div>
  );
};

export default Orders;