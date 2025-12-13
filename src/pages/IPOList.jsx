// src/components/IPODashboard.jsx (or src/pages/IPOList.jsx)
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchIPOs } from "../api/mockApi";

const tabs = ["Open", "Closed", "Upcoming"];

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

  const getIPOType = (ipo) => {
    if (ipo.type) return ipo.type.toUpperCase();
    const name = (ipo.fullName || ipo.name || "").toLowerCase();
    return name.includes("sme") ? "SME" : "MAINBOARD";
  };

  const filteredIPOs = ipos.filter((ipo) => {
    const isLive = ipo.status?.toLowerCase() === "live";
    const isClosed = ipo.listingPrice != null && ipo.listingPrice !== "";
    const isUpcoming = !ipo.status || ipo.status?.toLowerCase() === "upcoming";

    const matchesTab =
      (activeTab === "Open" && isLive) ||
      (activeTab === "Closed" && isClosed) ||
      (activeTab === "Upcoming" && isUpcoming);

    const matchesType =
      typeFilter === "All" ||
      getIPOType(ipo).toLowerCase().includes(typeFilter.toLowerCase());

    return matchesTab && matchesType;
  });

  const getCount = (tab) => {
    if (tab === "Open")
      return ipos.filter((i) => i.status?.toLowerCase() === "live").length;
    if (tab === "Closed")
      return ipos.filter((i) => i.listingPrice != null && i.listingPrice !== "").length;
    if (tab === "Upcoming")
      return ipos.filter((i) => !i.status || i.status?.toLowerCase() === "upcoming").length;
    return 0;
  };

  const LetterAvatar = ({ name }) => {
    const letter = name?.charAt(0).toUpperCase() || "?";
    return (
      <div className="w-12 h-12 rounded-lg bg-gray-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
        {letter}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading IPOs...</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 bg-gray-50 border-b border-gray-200 text-center">
          <h2 className="text-3xl font-black text-gray-900">IPO Tracker</h2>
          <p className="mt-2 text-lg text-gray-600">Live & Upcoming IPOs in India (as of Dec 13, 2025)</p>
        </div>

        <div className="px-8 py-5 border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-3 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                    activeTab === tab
                      ? "bg-green-600 text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      activeTab === tab ? "bg-white text-green-600" : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {getCount(tab)}
                  </span>
                </button>
              ))}
            </div>

            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-5 py-2.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="All">All Types</option>
              <option value="Mainboard">Mainboard</option>
              <option value="SME">SME</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b-2 border-gray-200">
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4 text-center">Open</th>
                <th className="px-6 py-4 text-center">Close</th>
                <th className="px-6 py-4 text-center">Price Band</th>
                <th className="px-6 py-4 text-center">Listing</th>
                <th className="px-6 py-4 text-center">Lot Size</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredIPOs.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-20 text-gray-500 text-lg">
                    No {activeTab.toLowerCase()} IPOs available
                  </td>
                </tr>
              ) : (
                filteredIPOs.map((ipo, i) => {
                  const type = getIPOType(ipo);
                  const hasLogo = ipo.logo && ipo.logo.trim() !== "";

                  return (
                    <motion.tr
                      key={ipo.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="hover:bg-gray-50 transition cursor-pointer"
                      onClick={() => navigate(`/ipo/${ipo.id}`)} // ← Row click = View button
                    >
                      {/* All cells except Action column: allow row click */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          {hasLogo ? (
                            <img
                              src={ipo.logo}
                              alt={ipo.name}
                              className="w-12 h-12 object-contain rounded-lg border border-gray-200 bg-white shadow-sm"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.nextElementSibling.style.display = "flex";
                              }}
                            />
                          ) : null}
                          <div className={`${hasLogo ? "hidden" : "flex"}`}>
                            <LetterAvatar name={ipo.name} />
                          </div>

                          <div>
                            <p className="font-semibold text-gray-900 text-base">{ipo.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{ipo.fullName || "Initial Public Offering"}</p>
                            <span
                              className={`inline-flex mt-2 px-2.5 py-1 text-xs font-bold rounded-full shadow-sm ${
                                type === "SME"
                                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                                  : "bg-green-100 text-green-700 border border-green-200"
                              }`}
                            >
                              {type}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                        {ipo.open || "—"}
                      </td>
                      <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                        {ipo.close || "—"}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="font-bold text-gray-900 text-base">₹{ipo.price}</span>
                      </td>
                      <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                        {ipo.listing || "TBA"}
                      </td>
                      <td className="px-6 py-5 text-center font-semibold text-gray-900 text-base">
                        {ipo.lot}
                      </td>

                      {/* Action column: stop row click so buttons work independently */}
                      <td className="px-6 py-5 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-center items-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (activeTab === "Open") navigate(`/ipo/${ipo.id}`);
                            }}
                            disabled={activeTab !== "Open"}
                            className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
                              activeTab === "Open"
                                ? "bg-green-600 text-white hover:bg-green-700 shadow-sm"
                                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                            }`}
                          >
                            Apply
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/ipo/${ipo.id}`);
                            }}
                            className="px-5 py-2 rounded-lg border border-gray-400 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IPODashboard;