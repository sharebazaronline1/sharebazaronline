// src/components/IPODashboard.jsx 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchIPOs } from "../api/mockApi";

const tabs = ["Open", "Closed"];

const IPODashboard = () => {
  const [ipos, setIpos] = useState([]);
  const [activeTab, setActiveTab] = useState("Open");
  const [typeFilter, setTypeFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadIPOs = async () => {
      try {
        const data = await fetchIPOs();
        setIpos(data);
      } catch (error) {
        console.error("Failed to load IPOs:", error);
      } finally {
        setLoading(false);
      }
    };
    loadIPOs();
  }, []);

  const filteredIPOs = ipos.filter((ipo) => {
    const isLive = ipo.status?.toLowerCase() === "live";
    const isClosed = ipo.listingPrice != null && ipo.listingPrice !== "";
    const isUpcoming = !ipo.status && (ipo.listingPrice == null || ipo.listingPrice === "");

    const matchesTab =
      (activeTab === "Open" && isLive) ||
      (activeTab === "Closed" && isClosed) ||
      (activeTab === "Upcoming" && isUpcoming);

    const matchesType = typeFilter === "All" || 
      (ipo.type && ipo.type.toLowerCase().includes(typeFilter.toLowerCase()));

    return matchesTab && matchesType;
  });

  const getCount = (tab) => {
    if (tab === "Open") return ipos.filter(i => i.status?.toLowerCase() === "live").length;
    if (tab === "Closed") return ipos.filter(i => i.listingPrice != null && i.listingPrice !== "").length;
    if (tab === "Upcoming") return ipos.filter(i => !i.status && (i.listingPrice == null || i.listingPrice === "")).length;
    return 0;
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading IPOs...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* IPO Tracker Card */}
        <div className="lg:col-span-12 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-8 py-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-3xl font-black text-center text-gray-900">IPO Tracker</h2>
            <p className="text-center text-gray-600 mt-2 text-lg">Live & Upcoming IPOs in India</p>
          </div>

          <div className="px-8 py-6 border-b border-gray-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-4 flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                      activeTab === tab
                        ? "bg-green-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                    <span className={`px-3 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === tab ? "bg-white text-green-600" : "bg-gray-300 text-gray-700"
                    }`}>
                      {getCount(tab)}
                    </span>
                  </button>
                ))}
              </div>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="All">All Types</option>
                <option value="Mainboard">Mainboard</option>
                <option value="SME">SME</option>
              </select>
            </div>
          </div>

          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1400px] text-base">
                <thead>
                  <tr className="bg-gray-50 text-left text-sm font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-200">
                    <th className="px-8 py-4">Company</th>
                    <th className="px-8 py-4 text-center">Open</th>
                    <th className="px-8 py-4 text-center">Close</th>
                    <th className="px-8 py-4 text-center">Price</th>
                    <th className="px-8 py-4 text-center">Listing</th>
                    <th className="px-8 py-4 text-center">Lot</th>
                    <th className="px-8 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-base">
                  {filteredIPOs.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-20 text-gray-500 text-lg">
                        No {activeTab.toLowerCase()} IPOs available
                      </td>
                    </tr>
                  ) : (
                    filteredIPOs.map((ipo, i) => (
                      <motion.tr
                        key={ipo.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="hover:bg-gray-50 transition"
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <img
                              src={ipo.logo || "/placeholder-logo.svg"}
                              alt={ipo.name}
                              className="w-14 h-14 object-contain rounded-lg border border-gray-200"
                            />
                            <div>
                              <p className="font-bold text-gray-900 text-lg">{ipo.name}</p>
                              <p className="text-xs text-gray-500 mt-1">{ipo.fullName || "Mainboard IPO"}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-8 py-6 text-center text-gray-700">{ipo.open || "—"}</td>
                        <td className="px-8 py-6 text-center text-gray-700">{ipo.close || "—"}</td>
                        <td className="px-8 py-6 text-center font-bold text-gray-900 text-lg">₹{ipo.price}</td>
                        <td className="px-8 py-6 text-center text-gray-700">{ipo.listing || "TBA"}</td>
                        <td className="px-8 py-6 text-center font-medium text-gray-900 text-lg">{ipo.lot}</td>

                        <td className="px-8 py-6 text-center">
                          <div className="flex justify-center gap-4">
                            <button
                              onClick={() => navigate(`/ipo/${ipo.id}`)}
                              disabled={activeTab !== "Open"}
                              className={`px-6 py-3 rounded-lg font-semibold text-sm transition ${
                                activeTab === "Open"
                                  ? "bg-green-600 text-white hover:bg-green-700"
                                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                              }`}
                            >
                              Apply 
                            </button>
                            <button
                              onClick={() => navigate(`/ipo/${ipo.id}`)}
                              className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition"
                            >
                              View 
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IPODashboard;
