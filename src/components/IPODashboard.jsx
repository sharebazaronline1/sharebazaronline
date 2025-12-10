// src/components/IPODashboard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const IPODashboard = ({ ipos = [] }) => {
  const navigate = useNavigate();

  // Filter only LIVE IPOs
  const liveIPOs = ipos.filter((ipo) => ipo.status?.toLowerCase() === "live");

  // Parse close date safely
  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  };

  // Get only top 4 LIVE IPOs (closing soonest first)
  const top4IPOs = liveIPOs
    .map((ipo) => ({
      ...ipo,
      _closeDate: parseDate(ipo.close),
    }))
    .filter((ipo) => ipo._closeDate !== null)
    .sort((a, b) => a._closeDate - b._closeDate)
    .slice(0, 4);

  const getIPOType = (ipo) => {
    const name = (ipo.fullName || ipo.name || "").toLowerCase();
    return name.includes("sme") ? "SME" : "Mainboard";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 bg-gray-50 border-b border-gray-200 text-center">
        <h2 className="text-3xl font-black text-gray-900">IPO Tracker</h2>
        <p className="text-lg text-gray-600 mt-2">
          Latest Mainboard & SME IPOs in India
        </p>
      </div>

      <div className="p-6 pb-10">
        {top4IPOs.length === 0 ? (
          <div className="text-center py-28">
            <p className="text-2xl font-medium text-gray-500">No LIVE IPOs</p>
            <p className="text-gray-400 mt-4 text-lg">Check again soon!</p>
          </div>
        ) : (
          <>
            {/* Mobile: Horizontal Scroll – Only 4 cards */}
            <div className="lg:hidden -mx-6 overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 px-6 py-4">
                {top4IPOs.map((ipo, i) => {
                  const type = getIPOType(ipo);
                  return (
                    <motion.div
                      key={ipo.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex-shrink-0 w-80"
                    >
                      <div className="relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition">
                        {/* Badges – Exactly as before */}
                        <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-10">
                          <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-600 font-medium rounded">
                            {type}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 bg-red-50 text-red-600 font-bold rounded min-w-[32px] text-center">
                            LIVE
                          </span>
                        </div>

                        <div className="h-full flex flex-col">
                          <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center gap-3 pr-16">
                              <img
                                src={ipo.logo || "/placeholder-logo.svg"}
                                alt={ipo.name}
                                className="w-12 h-12 object-contain rounded border border-gray-200 flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <h3 className="font-bold text-gray-900 text-base leading-tight truncate">
                                  {ipo.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-0.5 truncate">
                                  {ipo.fullName || "IPO"}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 space-y-2 text-xs flex-1">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Open</span>
                              <span className="font-medium text-right">{ipo.open || "—"}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Close</span>
                              <span className="font-medium text-right">{ipo.close || "—"}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Price</span>
                              <span className="font-medium text-green-600">₹{ipo.price}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Lot</span>
                              <span className="font-medium text-right">{ipo.lot} shares</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Listing</span>
                              <span className="font-medium text-right">{ipo.listing}</span>
                            </div>
                          </div>

                          <div className="p-4 pt-3 border-t border-gray-100 flex gap-2 mt-auto">
                            <button
                              onClick={() => navigate(`/ipo/${ipo.id}`)}
                              className="flex-1 py-2 text-xs font-bold bg-green-500 text-white rounded hover:bg-green-600 transition"
                            >
                              Apply
                            </button>
                            <button
                              onClick={() => navigate(`/ipo/${ipo.id}`)}
                              className="flex-1 py-2 text-xs font-bold border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Desktop: Grid – Only 4 cards */}
            <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {top4IPOs.map((ipo, i) => {
                const type = getIPOType(ipo);
                return (
                  <motion.div
                    key={ipo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 transition h-full flex flex-col">
                      {/* Badges – Exactly same as before */}
                      <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5 z-10">
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 font-medium rounded">
                          {type}
                        </span>
                        <span className="text-xs px-2 py-0.5 bg-red-50 text-red-600 font-bold rounded min-w-[36px] text-center">
                          LIVE
                        </span>
                      </div>

                      <div className="p-5 border-b border-gray-100">
                        <div className="flex items-center gap-4 pr-20">
                          <img
                            src={ipo.logo || "/placeholder-logo.svg"}
                            alt={ipo.name}
                            className="w-14 h-14 object-contain rounded-xl border border-gray-200 flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <h3 className="font-bold text-gray-900 text-lg leading-tight truncate">
                              {ipo.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1 truncate">
                              {ipo.fullName || "IPO"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 space-y-3 text-sm flex-1">
                        <div className="space-y-2.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Open Date</span>
                            <span className="font-medium text-right">{ipo.open || "—"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Close Date</span>
                            <span className="font-medium text-right">{ipo.close || "—"}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Price Band</span>
                            <span className="font-medium text-green-600">₹{ipo.price}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Lot Size</span>
                            <span className="font-medium text-right">{ipo.lot} shares</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Listing</span>
                            <span className="font-medium text-right">{ipo.listing}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-3 border-t border-gray-100 flex gap-3 mt-auto">
                        <button
                          onClick={() => navigate(`/ipo/${ipo.id}`)}
                          className="flex-1 py-2.5 text-sm font-bold bg-green-500 text-white rounded hover:bg-green-600 transition"
                        >
                          Apply Now
                        </button>
                        <button
                          onClick={() => navigate(`/ipo/${ipo.id}`)}
                          className="flex-1 py-2.5 text-sm font-bold border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition"
                        >
                          View More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IPODashboard;