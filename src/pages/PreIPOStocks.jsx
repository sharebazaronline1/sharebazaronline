// src/pages/PreIPOStocks.jsx (updated - entire row clickable for details)

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchPreIPOs } from "../api/mockApi";

const PreIPOStocks = () => {
  const [ipos, setIPOs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await fetchPreIPOs();
      const upcoming = data.filter(
        (item) => item?.status?.toLowerCase() === "upcoming"
      );
      setIPOs(upcoming);
    };
    load();
  }, []);

  // Fixed-size logo component (no shrinking)
  const CompanyLogo = ({ name, logo }) => {
    const firstLetter = name?.charAt(0).toUpperCase() || "?";

    return (
      <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-xl bg-gray-500 flex items-center justify-center text-white font-bold text-xl shadow-md border border-indigo-200 relative overflow-hidden flex-shrink-0">
        {logo ? (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            className="w-full h-full object-contain bg-white p-2"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <span>{firstLetter}</span>
        )}
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-50">
      {/* BANNER */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="w-screen relative left-1 -translate-x-1/2 -mx-8">
          <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] rounded overflow-hidden lg:mr-12">
            <img
              src="/images/unlistedshares.png"
              alt="Pre-IPO & Unlisted Shares - Invest Early"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="px-6 sm:px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Pre-IPO & Unlisted Shares
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Invest early in high-growth companies before they list
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-gray-50 text-left text-xs font-bold text-gray-700 uppercase tracking-wider border-b-2 border-gray-200">
                  <th className="px-6 py-5">Company</th>
                  <th className="px-6 py-5 text-center">Current Price</th>
                  <th className="px-6 py-5 text-center">Min. Lot</th>
                  <th className="px-6 py-5 text-center">Depository</th>
                  <th className="px-6 py-5 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {ipos.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-20 text-gray-500 text-lg">
                      No Pre-IPO / Unlisted shares available right now
                    </td>
                  </tr>
                ) : (
                  ipos.map((ipo, i) => (
                    <motion.tr
                      key={ipo.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/preipo/${ipo.id}`)}  // ← Entire row clickable
                    >
                      {/* Company */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <CompanyLogo name={ipo.name} logo={ipo.logo} />
                          <p className="font-medium text-gray-900 text-base sm:text-md line-clamp-2">
                            {ipo.name}
                          </p>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-5 text-center">
                        <span className="text-lg font-bold text-green-600">
                          ₹{ipo.price?.toLocaleString("en-IN") || "-"}
                        </span>
                      </td>

                      {/* Min Lot */}
                      <td className="px-6 py-5 text-center font-medium text-gray-800">
                        {ipo.minLotSize?.toLocaleString("en-IN") || "-"} shares
                      </td>

                      {/* Depository */}
                      <td className="px-6 py-5 text-center text-gray-700 text-sm">
                        {ipo.depository || "-"}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5 text-center" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent row click
                              // Handle Buy Now action (e.g., open modal or contact form)
                              alert("Buy Now clicked - implement your logic here");
                            }}
                            className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition shadow-sm text-sm whitespace-nowrap"
                          >
                            Buy Now
                          </button>
                          <button
                            onClick={(e) => e.stopPropagation()} // Prevent row navigation
                            className="px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition text-sm whitespace-nowrap"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          {ipos.length > 0 && (
            <div className="px-8 py-5 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-600">
              Prices are indicative • Subject to availability • Contact for latest quotes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreIPOStocks;