// src/components/IPODashboard.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const IPODashboard = ({ ipos = [] }) => {
  const navigate = useNavigate();

  
  const liveIPOs = ipos.filter((ipo) => ipo.status?.toLowerCase() === "live");

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-6 bg-gray-50 border-b border-gray-200">
        <h2 className="text-3xl font-black text-center text-gray-900">IPO Tracker</h2>
        <p className="text-center text-gray-600 mt-2 text-lg">Latest Mainboard & SME IPOs in India</p>
      </div>

      {/* IPO Cards */}
      <div className="p-6 pb-10">
        {liveIPOs.length === 0 ? (
          <div className="text-center py-28">
            <p className="text-2xl font-medium text-gray-500">No LIVE IPOs</p>
            <p className="text-gray-400 mt-4 text-lg">Check again soon!</p>
          </div>
        ) : (
          <>
            {/* Mobile & Tablet: Horizontal Scroll */}
            <div className="lg:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4">
                {liveIPOs.map((ipo, i) => (
                  <motion.div
                    key={ipo.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-shrink-0 w-80 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                  >
                    {/* Card Header */}
                    <div className="p-5 border-b border-gray-100">
                      <div className="flex items-center gap-4">
                        <img
                          src={ipo.logo || "/placeholder-logo.svg"}
                          alt={ipo.name}
                          className="w-14 h-14 object-contain rounded-lg border border-gray-200"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{ipo.name}</h3>
                          <p className="text-xs text-gray-500 mt-1">{ipo.fullName || "Mainboard IPO"}</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-4 text-sm">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Open</span>
                          <span className="font-medium text-gray-900">{ipo.open || "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Close</span>
                          <span className="font-medium text-gray-900">{ipo.close || "—"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Price</span>
                          <span className="font-medium text-gray-900">₹{ipo.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lot</span>
                          <span className="font-medium text-gray-900">{ipo.lot} shares</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Listing</span>
                          <span className="font-medium text-gray-900">{ipo.listing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="p-5 pt-4 border-t border-gray-100 flex gap-3">
                      <button
                        onClick={() => navigate(`/ipo/${ipo.id}`)}
                        className="flex-1 py-2.5 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                      >
                        Apply
                      </button>
                      <button
                        onClick={() => navigate(`/ipo/${ipo.id}`)}
                        className="flex-1 py-2.5 text-sm font-semibold border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition"
                      >
                        View
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {liveIPOs.map((ipo, i) => (
                <motion.div
                  key={ipo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <img
                        src={ipo.logo || "/placeholder-logo.svg"}
                        alt={ipo.name}
                        className="w-16 h-16 object-contain rounded-xl border border-gray-200"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{ipo.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{ipo.fullName || "Mainboard IPO"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-5 text-sm">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Open Date</span>
                        <span className="font-medium text-gray-900">{ipo.open || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Close Date</span>
                        <span className="font-medium text-gray-900">{ipo.close || "—"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price Band</span>
                        <span className="font-medium text-gray-900">₹{ipo.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lot Size</span>
                        <span className="font-medium text-gray-900">{ipo.lot} shares</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Listing</span>
                        <span className="font-medium text-gray-900">{ipo.listing}</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="p-6 pt-4 border-t border-gray-100 flex gap-3">
                    <button
                      onClick={() => navigate(`/ipo/${ipo.id}`)}
                      className="flex-1 py-3 text-sm font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      Apply Now
                    </button>
                    <button
                      onClick={() => navigate(`/ipo/${ipo.id}`)}
                      className="flex-1 py-3 text-sm font-semibold border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 transition"
                    >
                      View More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IPODashboard;
