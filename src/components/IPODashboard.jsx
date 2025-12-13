// src/components/IPODashboard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Badge = ({ children, colorClass }) => (
  <span
    className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${colorClass}`}
  >
    {children}
  </span>
);

const IPODashboard = ({ ipos = [] }) => {
  const navigate = useNavigate();

  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  };

  const top4IPOs = useMemo(() => {
    return ipos
      .filter((ipo) => ipo.status?.toLowerCase() === "live")
      .map((ipo) => ({ ...ipo, _closeDate: parseDate(ipo.close) }))
      .filter((ipo) => ipo._closeDate !== null)
      .sort((a, b) => a._closeDate - b._closeDate)
      .slice(0, 4);
  }, [ipos]);

  const getIPOType = (ipo) => {
    const name = (ipo.fullName || ipo.name || "").toLowerCase();
    return name.includes("sme") ? "SME" : "Mainboard";
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bg-gray-50 py-6 px-4">
      {/* WIDTH INCREASED HERE */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

          {/* LEFT MAIN BOX */}
          <div className="xl:col-span-12">
            <div className=" overflow-hidden flex flex-col h-[600px]">

              {/* HEADER */}
              <div className=" px-10 py-6 text-center">
                <h1 className="text-4xl md:text-4xl font-black text-gray-900">
                  IPO Tracker
                </h1>
                <p className="mt-3 text-xl text-gray-700">
                  Latest Mainboard & SME IPOs in India
                </p>
              </div>

              {/* CONTENT */}
              <div className="p-6 py-6 md:p-8 lg:p-10 flex-flex-1 overflow-y-auto">
                {top4IPOs.length === 0 ? (
                  <div className="text-center py-24 bg-gray-50 rounded-2xl border border-gray-200">
                    <p className="text-3xl font-semibold text-gray-600">
                      No LIVE IPOs
                    </p>
                    <p className="mt-4 text-lg text-gray-500">
                      New IPOs opening soon!
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
                    <div className="flex gap-6 py-4 min-w-max">
                      {top4IPOs.map((ipo, i) => {
                        const type = getIPOType(ipo);
                        const typeColor =
                          type === "SME"
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-green-100 text-green-700 border border-green-200";

                        return (
                          <motion.div
                            key={ipo.id}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.12 }}
                            className="w-80 flex-shrink-0"
                          >
                            <div className="relative bg-white border border-gray-300 rounded-2xl hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                              <div className="px-6 pb-7 flex flex-col flex-1">

                                {/* LOGO + BADGES */}
                                <div className="flex items-start gap-4 mb-4 mt-4">
                                  <img
                                    src={ipo.logo || "/placeholder-logo.svg"}
                                    alt={ipo.name}
                                    className="w-14 h-14 object-contain rounded-xl border border-gray-200 bg-gray-50 p-2"
                                  />
                                  <div className="flex-1">
                                    <h3 className="font-bold text-lg text-gray-900 leading-tight">
                                      {ipo.name}
                                    </h3>

                                    <p className="text-xs text-gray-500 mt-1">
                                      {ipo.fullName || "IPO"}
                                    </p>

                                    <div className="flex items-center gap-2 mt-2">
                                      <Badge colorClass={typeColor}>
                                        {type}
                                      </Badge>

                                      <Badge colorClass="flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold text-red-600 bg-red-50 border border-red-200">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                          <span className="relative inline-flex h-full w-full rounded-full bg-red-600"></span>
                                        </span>
                                        LIVE
                                      </Badge>
                                    </div>
                                  </div>
                                </div>

                                {/* STATS */}
                                <div className="space-y-3 text-sm flex-1">
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Open</span>
                                    <span>{ipo.open || "—"}</span>
                                  </div>
                                  <div className="flex justify-between text-gray-600">
                                    <span>Close</span>
                                    <span>{ipo.close || "—"}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Price</span>
                                    <span className="font-bold text-gray-900">
                                      ₹{ipo.price}
                                    </span>
                                  </div>
                                  <div className="flex justify-between text-gray-600">
                                    <span>Lot</span>
                                    <span>{ipo.lot} shares</span>
                                  </div>
                                  <div className="flex justify-between text-gray-600">
                                    <span>Listing</span>
                                    <span>{ipo.listing || "TBA"}</span>
                                  </div>
                                </div>

                                <div className="mt-6 flex gap-3">
                                  <button
                                    onClick={() => navigate(`/ipo/${ipo.id}`)}
                                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition shadow-md"
                                  >
                                    Apply Now
                                  </button>

                                  <button
                                    onClick={() => navigate(`/ipo/${ipo.id}`)}
                                    className="flex-1 py-3 border border-gray-400 hover:bg-gray-100 text-gray-800 font-semibold rounded-xl transition"
                                  >
                                    View Details
                                  </button>
                                </div>

                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IPODashboard;
