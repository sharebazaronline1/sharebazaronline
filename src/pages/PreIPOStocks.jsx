// src/pages/PreIPOStocks.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchIPOs } from "../api/mockApi";

const PreIPOStocks = () => {
  const [ipos, setIPOs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const data = await fetchIPOs();
      const upcoming = data.filter(
        (item) => item?.status?.toLowerCase() === "upcoming"
      );
      setIPOs(upcoming);
    };
    load();
  }, []);

  // Helper component for logo or fallback letter
  const CompanyLogo = ({ name, logo }) => {
    const firstLetter = name?.charAt(0).toUpperCase() || "?";

    return (
      <div className="w-14 h-14 rounded-xl bg-gray-500 flex items-center justify-center text-white font-bold text-xl shadow-md border border-indigo-200">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="w-full h-full rounded-xl object-contain bg-white p-1"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none"; 
              e.target.nextSibling.style.display = "flex"; 
            }}
            onLoad={(e) => {
              e.target.style.display = "block";
              e.target.nextSibling.style.display = "none";
            }}
          />
        ) : null}
        {/* Fallback letter - hidden if image loads */}
        <span className={`block ${logo ? "hidden" : "flex"} items-center justify-center w-full h-full`}>
          {firstLetter}
        </span>
      </div>
    );
  };

  return (
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
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Company Name + Logo */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <CompanyLogo name={ipo.name} logo={ipo.logo} />
                        <div>
                          <p className="font-bold text-gray-900 text-base sm:text-lg line-clamp-2">
                            {ipo.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-5 text-center">
                      <span className="text-lg font-bold text-green-600">
                        ₹{ipo.price?.toLocaleString("en-IN") || "-"}
                      </span>
                    </td>

                    {/* Min Lot Size */}
                    <td className="px-6 py-5 text-center font-medium text-gray-800">
                      {ipo.minLotSize?.toLocaleString("en-IN") || "-"} shares
                    </td>

                    {/* Depository */}
                    <td className="px-6 py-5 text-center text-gray-700 text-sm">
                      {ipo.depository || "-"}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-5 text-center">
                      <div className="flex justify-center gap-3">
                        <button className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition shadow-sm text-sm whitespace-nowrap">
                          Buy Now
                        </button>
                        <button
                          onClick={() => navigate(`/preipo/${ipo.id}`)}
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

        {/* Footer Note */}
        {ipos.length > 0 && (
          <div className="px-8 py-5 bg-gray-50 border-t border-gray-200 text-center text-sm text-gray-600">
            Prices are indicative • Subject to availability • Contact for latest quotes
          </div>
        )}
      </div>
    </div>
  );
};

export default PreIPOStocks;