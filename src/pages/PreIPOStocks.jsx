// src/pages/PreIPOStocks.jsx (with Load More)

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchPreIPOs } from "../api/mockApi";

const ITEMS_PER_PAGE = 10;

const PreIPOStocks = () => {
  const [ipos, setIPOs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
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

  // Fixed-size logo component
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

  const visibleIPOs = ipos.slice(0, visibleCount);

  return (
    <div className="w-full bg-gray-50">
      {/* BANNER */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-screen relative left-1 -translate-x-1/2 -mx-8">
          <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] rounded overflow-hidden lg:mr-12">
            <img
              src="/images/unlistedshare.png"
              alt="Preipo"
              className="absolute inset-0 w-full h-full object-top object-center"
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
                {visibleIPOs.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-20 text-gray-500 text-lg">
                      No Pre-IPO / Unlisted shares available right now
                    </td>
                  </tr>
                ) : (
                  visibleIPOs.map((ipo, i) => (
                    <motion.tr
                      key={ipo.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/preipo/${ipo.id}`)}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <CompanyLogo name={ipo.name} logo={ipo.logo} />
                          <p className="font-medium text-gray-900 text-base line-clamp-2">
                            {ipo.name}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-center">
                        <span className="text-lg font-bold text-green-600">
                          ₹{ipo.price?.toLocaleString("en-IN") || "-"}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-center font-medium text-gray-800">
                        {ipo.minLotSize?.toLocaleString("en-IN") || "-"} shares
                      </td>

                      <td className="px-6 py-5 text-center text-gray-700 text-sm">
                        {ipo.depository || "-"}
                      </td>

                    <td
                      className="px-6 py-5 text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            alert("Buy Now clicked");
                          }}
                          className="px-5 py-2.5 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition text-sm whitespace-nowrap"
                        >
                          Buy Now
                        </button>
                        <button
                          onClick={() => navigate(`/preipo/${ipo.id}`)}
                          className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition text-sm whitespace-nowrap"
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

          {/* LOAD MORE */}
          {visibleCount < ipos.length && (
            <div className="py-6 text-center bg-gray-50 border-t">
              <button
                onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
              >
                View More
              </button>
            </div>
          )}

          {/* Footer */}
          {ipos.length > 0 && (
            <div className="px-8 py-5 bg-gray-50 border-t text-center text-sm text-gray-600">
              Prices are indicative • Subject to availability • Contact for latest quotes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreIPOStocks;
