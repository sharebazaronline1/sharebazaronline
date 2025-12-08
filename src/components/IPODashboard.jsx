// src/components/IPODashboard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const tabs = ["Open", "Closed", "Upcoming"];

const IPODashboard = ({ ipos = [] }) => {
  const [activeTab, setActiveTab] = useState("Open");
  const [typeFilter, setTypeFilter] = useState("All");
  const navigate = useNavigate();

  // Filter logic
  const filteredIPOs = ipos.filter((ipo) => {
    const isLive = ipo.status === "live";
    const isClosed = ipo.listingPrice !== undefined;
    const isUpcoming = !ipo.status && !ipo.listingPrice;

    const matchesTab =
      activeTab === "Open" ? isLive :
      activeTab === "Closed" ? isClosed :
      activeTab === "Upcoming" ? isUpcoming : true;

    const matchesType = typeFilter === "All" || ipo.type?.toLowerCase().includes(typeFilter.toLowerCase());

    return matchesTab && matchesType;
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
        <h2 className="text-2xl font-bold text-center text-gray-800">IPO Tracker</h2>
      </div>

      {/* Tabs + Filter */}
      <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex gap-3 flex-nowrap justify-start sm:justify-center overflow-x-auto scrollbar-hide w-full py-1">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-5 py-2 whitespace-nowrap rounded-full text-xs sm:text-sm font-medium transition-all ${
        activeTab === tab
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {tab}
    </button>
  ))}
</div>


        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-gray-400"
        >
          <option value="All">All Types</option>
          <option value="Mainboard">Mainboard</option>
          <option value="SME">SME</option>
        </select>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3 text-center">Open</th>
              <th className="px-4 py-3 text-center">Close</th>
              <th className="px-4 py-3 text-center">Price</th>
              <th className="px-4 py-3 text-center">Listing</th>
              <th className="px-4 py-3 text-center">Lot</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredIPOs.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-16 text-gray-500 text-lg">
                  No {activeTab.toLowerCase()} IPOs available
                </td>
              </tr>
            ) : (
              filteredIPOs.map((ipo, i) => (
                <motion.tr
                  key={ipo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Company */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={ipo.logo || "/placeholder-logo.svg"}
                        alt={ipo.name}
                        className="w-10 h-10 object-contain rounded-lg border border-gray-200"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{ipo.name}</p>
                        {ipo.fullName && (
                          <p className="text-xs text-gray-500">{ipo.fullName}</p>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Dates */}
                  <td className="text-center text-xs sm:text-sm text-gray-700 font-medium">
                    {ipo.open || "—"}
                  </td>
                  <td className="text-center text-xs sm:text-sm text-gray-700 font-medium">
                    {ipo.close || "—"}
                  </td>

                  {/* Price */}
                  <td className="text-center font-semibold text-gray-900 text-sm">
                    ₹{ipo.price}
                  </td>

                  {/* Listing Date */}
                  <td className="text-center text-xs sm:text-sm text-gray-700 font-medium">
                    {ipo.listing || "TBA"}
                  </td>

                  {/* Lot Size */}
                  <td className="text-center font-semibold text-gray-800 text-sm">
                    {ipo.lot || "—"}
                  </td>

                  {/* Action Buttons */}
                  <td className="text-center py-3">
                    <div className="flex justify-center gap-2 flex-wrap">
                      <button
                        onClick={() => navigate(`/ipo/${ipo.id}`)}
                        disabled={activeTab !== "Open"}
                        className={`px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-all ${
                          activeTab === "Open"
                            ? "bg-green-600 text-white hover:bg-green-700 shadow-sm"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Apply Now
                      </button>
                      <button
                        onClick={() => navigate(`/ipo/${ipo.id}`)}
                        className="px-4 py-2 border border-gray-400 text-gray-700 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-50 transition"
                      >
                        View More
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
  );
};

export default IPODashboard;