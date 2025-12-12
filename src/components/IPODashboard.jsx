// src/components/IPODashboard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const IPODashboard = ({ ipos = [] }) => {
  const navigate = useNavigate();

  const liveIPOs = ipos.filter(
    (ipo) => ipo.status?.toLowerCase() === "live"
  );

  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  };

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

  const today = new Date();
  const formattedDate = today
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, " ");

  const upcomingIPOs = [
    { name: "Cello World", type: "Mainboard", dates: "15-17 Dec" },
    { name: "AWFIS Space Solutions", type: "Mainboard", dates: "16-18 Dec" },
    { name: "Niva Bupa Health", type: "Mainboard", dates: "17-19 Dec" },
    { name: "Sagility India", type: "Mainboard", dates: "18-20 Dec" },
    { name: "Vishal Mega Mart", type: "Mainboard", dates: "22-24 Dec" },
    { name: "HDB Financial", type: "Mainboard", dates: "24-26 Dec" },
    { name: "Methodhub Software", type: "SME", dates: "5-9 Dec" },
    { name: "Flywings Simulator", type: "SME", dates: "5-9 Dec" },
    { name: "ScaleSauce", type: "SME", dates: "5-9 Dec" },
    { name: "Riddhi Display", type: "SME", dates: "8-10 Dec" },
    { name: "K. V. Toys India", type: "SME", dates: "8-10 Dec" },
    { name: "Unisem Agritech", type: "SME", dates: "10-12 Dec" },
    { name: "Shipwaves Online", type: "SME", dates: "10-12 Dec" },
    { name: "Pajson Agro", type: "SME", dates: "11-15 Dec" },
    { name: "Ashwini Container", type: "SME", dates: "12-16 Dec" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-300 overflow-hidden">
          
          {/* HEADER */}
          <div className="bg-gray-100 px-10 py-10 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900">IPO Tracker</h1>
            <p className="mt-3 text-xl text-gray-700">
              Latest Mainboard & SME IPOs in India
            </p>
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

              {/* LIVE IPO CARDS */}
              <div className="xl:col-span-9">
                {top4IPOs.length === 0 ? (
                  <div className="text-center py-24 bg-gray-50 rounded-2xl border border-gray-200">
                    <p className="text-3xl font-semibold text-gray-600">No LIVE IPOs</p>
                    <p className="mt-4 text-lg text-gray-500">New IPOs opening soon!</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
                    <div className="flex gap-6 py-4 min-w-max">

                      {top4IPOs.map((ipo, i) => {
                        const type = getIPOType(ipo);

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

                                {/* LOGO + NAME + BADGES BELOW FULL NAME */}
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

                                    {/* FULL NAME */}
                                    <p className="text-xs text-gray-500 mt-1">
                                      {ipo.fullName || "IPO"}
                                    </p>

                                    {/* BADGES STACKED UNDER FULL NAME */}
                                    <div className="flex items-center gap-2 mt-2">

                                      {/* TYPE BADGE */}
                                      <span className="px-2.5 py-0.5 text-xs font-bold bg-green-100 text-gray-800 rounded-full border border-green-200">
                                        {type}
                                      </span>

                                      {/* LIVE BADGE */}
                                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded-full">
                                        <span className="relative flex h-2 w-2">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                          <span className="relative inline-flex h-full w-full rounded-full bg-red-600"></span>
                                        </span>
                                        LIVE
                                      </span>

                                    </div>
                                  </div>
                                </div>

                                {/* STATS */}
                                <div className="space-y-3 text-sm flex-1">
                                  <div className="flex justify-between">
                                    <span className="text-gray-600">Open</span>
                                    <span className="font-medium text-gray-600">{ipo.open || "—"}</span>
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

                                {/* BUTTONS */}
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

              {/* RIGHT SIDEBAR */}
              <div className="hidden xl:block xl:col-span-3">
                <div className="h-96">
                  <div className="bg-gray-50 border border-gray-300 rounded-2xl h-full flex flex-col">

                    <div className="bg-gray-100 px-6 py-4 border-b border-gray-300 flex-shrink-0">
                      <h3 className="text-xl font-bold text-gray-900">Upcoming IPOs</h3>
                      <p className="text-xs text-gray-600 mt-1">As of {formattedDate}</p>
                    </div>

                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                      {upcomingIPOs.map((ipo, i) => (
                        <div
                          key={i}
                          className="px-5 py-3.5 border-b border-gray-200 hover:bg-white transition last:border-0"
                        >
                          <div className="flex justify-between items-start">
                            <div className="pr-3">
                              <p className="font-medium text-gray-900 text-sm leading-tight">
                                {ipo.name}
                              </p>

                              <span className="text-xs px-2 py-0.5 rounded-full mt-1 inline-block font-medium bg-green-100 text-gray-800">
                                {ipo.type}
                              </span>
                            </div>

                            <span className="text-xs font-semibold text-gray-600 whitespace-nowrap">
                              {ipo.dates}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white px-5 py-3 border-t border-gray-300 flex-shrink-0">
                      <p className="text-xs text-gray-500 text-center">
                        Updated daily • NSE/BSE
                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IPODashboard;
