// src/pages/Orders.jsx

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { IndianRupee, Search, Plus, Minus } from "lucide-react";
import { fetchPreIPODetails } from "../api/mockApi"; // Only Pre-IPOs
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";

const Orders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("buy");

  const [pricePerUnit, setPricePerUnit] = useState(0);
  const [quantity, setQuantity] = useState(null);
const total = (quantity || 0) * (pricePerUnit || 0);
const [preIpos, setPreIpos] = useState([]);
const [dbCompanies, setDbCompanies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [orders, setOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(true);

  // Load Pre-IPO list
  // Load Pre-IPO list + Supabase prices/lots
useEffect(() => {
  const fetchData = async () => {
    try {
      const preIpoData = await fetchPreIPODetails();

      const { data: dbData, error } = await supabase
        .from("pre_ipo_companies")
        .select("name, price, lot_size");

      if (error) {
        console.error("Supabase fetch error:", error);
      }

      const normalize = (str = "") =>
        str
          .toLowerCase()
          .replace(/limited|ltd|llp|private|unlisted|shares?|share/gi, "")
          .replace(/[^\w\s]/g, " ")
          .replace(/\s+/g, " ")
          .trim();

      const dbMap = {};

      dbData?.forEach((item) => {
        dbMap[normalize(item.name)] = item;
      });

      const merged = preIpoData.map((item) => {
        const key = normalize(item.name);

        let dbItem = dbMap[key];

        // fuzzy fallback
        if (!dbItem) {
          const bestMatch = Object.keys(dbMap).find(
            (dbKey) =>
              dbKey.includes(key) ||
              key.includes(dbKey)
          );

          if (bestMatch) {
            dbItem = dbMap[bestMatch];
          }
        }

        return {
          ...item,
          price:
            dbItem?.price != null
              ? Number(dbItem.price)
              : Number(item.price || 0),

          lot_size:
            dbItem?.lot_size != null
              ? Number(dbItem.lot_size)
              : null,
        };
      });

      setPreIpos(Array.isArray(merged) ? merged : []);
      setDbCompanies(dbData || []);
    } catch (err) {
      console.error("Failed to load Pre-IPOs:", err);
      setPreIpos([]);
    }
  };

  fetchData();
}, []);
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch orders once on mount
  useEffect(() => {
    const fetchOrders = async () => {
      setOrdersLoading(true);
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setOrdersLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Fetch orders error:", error);
      } else {
        setOrders(data || []);
      }
      setOrdersLoading(false);
    };

    fetchOrders();
  }, []);

  const filteredCompanies = preIpos.filter((item) =>
    item?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item?.isin ?? "").toLowerCase().includes(searchQuery.toLowerCase())
  );

const handleCompanySelect = (company) => {
  setSelectedCompany(company.name || "Unknown");

  // PRICE FROM SUPABASE
  const parsedPrice = Number(company.price) || 0;

  setPricePerUnit(parsedPrice);

  // LOT SIZE FROM SUPABASE
  let lotSize =
    Number(company.lot_size) ||
    Number(company.lot) ||
    Number(company.ipo_basic_details?.lot_size) ||
    Number(company.market_lot_details?.retail_minimum?.shares);

  // fallback for text like "50 Shares"
  if (!lotSize && company.shareDetails?.lotSize) {
    const match = company.shareDetails.lotSize.match(/\d+/);
    lotSize = match ? Number(match[0]) : null;
  }

  setQuantity(lotSize || 5);

  setSearchQuery("");
  setShowDropdown(false);
};

const adjustQuantity = (delta) => {
  const selected = preIpos.find(
    (item) => item.name === selectedCompany
  );

  const minLot =
    Number(selected?.lot_size) ||
    5;

  const currentQty = Number(quantity) || minLot;

  const step = 5;

  const newQty = Math.max(
    minLot,
    currentQty + delta * step
  );

  setQuantity(newQty);
};

  const handleSubmit = async () => {
    if (!selectedCompany) {
      alert("Please select a company");
      return;
    }

    if (quantity < 5 || quantity % 5 !== 0) {
      alert("Quantity must be a multiple of 5 and at least 5");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login again");
      return;
    }

    const { error } = await supabase.from("orders").insert({
      user_id: user.id,
      order_type: activeTab === "buy" ? "BUY" : "SELL",
      asset_name: selectedCompany,
      quantity,
      price: pricePerUnit,
      total: pricePerUnit * quantity,
      status: "PENDING",
    });

    if (error) {
      console.error("Order insert error:", error);
      alert("Failed to submit order: " + (error.message || "Unknown error"));
      return;
    }

    // Refresh orders
    const { data: refreshed } = await supabase
      .from("orders")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    setOrders(refreshed || []);

    // Reset form
    setQuantity(0);
    setSelectedCompany("");
    setPricePerUnit(0);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <main className="md:ml-64 transition-all">
        {/* Header with title and profile */}
        <header className="flex items-center justify-between p-4 md:p-6 lg:p-8 border-b bg-white sticky top-0 z-10">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Orders & Buy/Sell Requests</h1>
            <p className="text-gray-600 mt-1">Manage your Pre-IPO buy and sell interests</p>
          </div>
          <UserProfileDropdown />
        </header>

        {/* Content */}
        <div className="p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 xl:gap-8">
          {/* LEFT - Buy/Sell form */}
          <section
            className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden w-full lg:w-1/2 max-w-2xl flex flex-col"
            style={{ maxHeight: "85vh" }}
          >
            <div className="p-5 md:p-6 border-b bg-gray-50 shrink-0">
              <h2 className="text-lg font-bold flex items-center gap-2.5">
                <IndianRupee className="text-green-600" size={22} />
                {activeTab === "buy" ? "Buy Interest" : "Sell Interest"}
              </h2>
            </div>

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
                      if (e.target.value) setShowDropdown(true);
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
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => adjustQuantity(-1)}
                      className="px-3 py-3 bg-gray-100 hover:bg-gray-200 transition"
                      disabled={quantity <= 5}
                    >
                      <Minus size={16} />
                    </button>
                   <input
  type="text"
  inputMode="numeric"
  value={quantity ?? ""}
  onChange={(e) => {
    // remove non-numeric chars
    let value = e.target.value.replace(/\D/g, "");

    // remove leading zeros
    value = value.replace(/^0+/, "");

    if (value === "") {
      setQuantity("");
      return;
    }

    const numericValue = Number(value);

    // prevent below original lot size
    const selected = preIpos.find(
      (item) => item.name === selectedCompany
    );

    const minLot =
      Number(selected?.lot_size) ||
      5;

    if (numericValue < minLot) {
      setQuantity(minLot);
      return;
    }

    setQuantity(numericValue);
  }}
  className="w-full text-center py-3 font-semibold text-base focus:outline-none appearance-none"
  style={{
    MozAppearance: "textfield",
  }}
/>
                    <button
                      onClick={() => adjustQuantity(1)}
                      className="px-3 py-3 bg-gray-100 hover:bg-gray-200 transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
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

              {/* Total + Submit */}
              <div className="pt-6 border-t space-y-5 sticky bottom-0 bg-white pb-2">
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-gray-700">Total Amount</span>
                  <span className="text-2xl font-bold text-green-700">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

              {(() => {
  const selected = preIpos.find(
    (item) => item.name === selectedCompany
  );

  const minLot =
    Number(selected?.lot_size) || 5;

  const isBelowLot =
    Number(quantity || 0) < minLot;

  return (
    <>
    

      <button
        onClick={handleSubmit}
        disabled={isBelowLot}
        className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all shadow-md ${
          isBelowLot
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 hover:shadow-lg active:scale-[0.98]"
        }`}
      >
        {activeTab === "buy"
          ? "Submit Buy Request"
          : "Submit Sell Request"}
      </button>
    </>
  );
})()}

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

            {ordersLoading ? (
              <div className="flex-1 flex items-center justify-center py-12">
                <p className="text-gray-500">Loading orders...</p>
              </div>
            ) : orders.length === 0 ? (
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
                    {orders.slice(0, 6).map((order) => (
                      <tr
                        key={order.id}
                        className="border-b last:border-0 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                              order.order_type === "BUY"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {order.order_type === "BUY" ? "Buy" : "Sell"}
                          </span>
                        </td>
                        <td
                          className="py-3 px-4 font-medium max-w-[180px] truncate"
                          title={order.asset_name}
                        >
                          {order.asset_name?.length > 28
                            ? order.asset_name.substring(0, 25) + "..."
                            : order.asset_name || "—"}
                        </td>
                        <td className="py-3 px-4 text-right">{order.quantity}</td>
                        <td className="py-3 px-4 text-right">
                          ₹{order.price?.toLocaleString("en-IN") || "—"}
                        </td>
                        <td className="py-3 px-4 text-right font-medium">
                          ₹{order.total?.toLocaleString("en-IN") || "—"}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                             order.status === "SETTLED"
  ? "bg-green-100 text-green-700"
  : order.status === "PROCESSING"
  ? "bg-blue-100 text-blue-700"
  : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {order.status || "PENDING"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600 text-xs">
                          {order.created_at
                            ? new Date(order.created_at).toLocaleDateString("en-IN")
                            : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {orders.length > 6 && (
                  <div className="text-center py-4 text-sm text-gray-500">
                    Showing latest 6 of {orders.length} orders
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Orders;