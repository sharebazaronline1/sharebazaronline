import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchPreIPOs } from "../api/mockApi";

const ITEMS_PER_PAGE = 10;

const PreIPOStocks = () => {
  const [ipos, setIPOs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchPreIPOs();
      const upcoming = data.filter(
        (item) => item?.status?.toLowerCase() === "upcoming"
      );
      setIPOs(upcoming);
      setVisibleCount(upcoming.length); // load all
      setLoading(false);
    };
    load();
  }, []);

  // 🔹 FIXED: SCROLL EVEN IF USER IS ALREADY ON PAGE
  useEffect(() => {
    if (!location.hash || ipos.length === 0) return;

    const targetId = location.hash.replace("#preipo-", "");

    const scroll = () => {
      const el = document.getElementById(`preipo-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    // ensure DOM is painted
    const t = setTimeout(scroll, 150);
    return () => clearTimeout(t);
  }, [location.hash, location.key, ipos]);

  const CompanyLogo = ({ name, logo }) => {
    const firstLetter = name?.charAt(0).toUpperCase() || "?";

    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] rounded-xl bg-gray-500 flex items-center justify-center text-white font-bold text-lg shadow border overflow-hidden">
        {logo ? (
          <img
            src={logo}
            alt={name}
            loading="lazy"
            className="w-full h-full object-contain bg-white p-2"
            onError={(e) => (e.currentTarget.style.display = "none")}
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
          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-gray-50 text-xs font-bold text-gray-700 uppercase border-b">
                  <th className="px-6 py-4 text-left">Company</th>
                  <th className="px-6 py-4 text-center">Price</th>
                  <th className="px-6 py-4 text-center">Min Lot</th>
                  <th className="px-6 py-4 text-center">Depository</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {/* LOADING */}
                {loading &&
                  Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-5">
                        <div className="flex gap-3 items-center">
                          <div className="w-12 h-12 bg-gray-200 rounded-xl" />
                          <div className="h-4 w-36 bg-gray-200 rounded" />
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-4 w-16 bg-gray-200 mx-auto rounded" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-4 w-20 bg-gray-200 mx-auto rounded" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-4 w-20 bg-gray-200 mx-auto rounded" />
                      </td>
                      <td className="px-6 py-5">
                        <div className="h-8 w-28 bg-gray-200 mx-auto rounded" />
                      </td>
                    </tr>
                  ))}

                {/* DATA */}
                {!loading &&
                  visibleIPOs.map((ipo, i) => (
                    <motion.tr
                      id={`preipo-${ipo.id}`}
                      key={ipo.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.02 }}
                      className="hover:bg-gray-50 cursor-pointer scroll-mt-32"
                      onClick={() => navigate(`/preipo/${ipo.id}`)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <CompanyLogo name={ipo.name} logo={ipo.logo} />
                          <p className="font-medium text-gray-900 line-clamp-2">
                            {ipo.name}
                          </p>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-center font-bold text-green-600">
                        ₹{ipo.price?.toLocaleString("en-IN") || "-"}
                      </td>

                      <td className="px-6 py-4 text-center">
                        {ipo.minLotSize || "-"} shares
                      </td>

                      <td className="px-6 py-4 text-center">
                        {ipo.depository || "-"}
                      </td>

                      <td
                        className="px-6 py-4 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => navigate("/login")}
                            className="px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg hover:bg-green-700"
                          >
                            Buy Now
                          </button>
                          <button
                            onClick={() => navigate(`/preipo/${ipo.id}`)}
                            className="px-3 py-1.5 border text-xs rounded-lg hover:bg-gray-50"
                          >
                            View Details
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* FOOTER */}
          {!loading && ipos.length > 0 && (
            <div className="px-6 py-4 bg-gray-50 border-t text-center text-xs sm:text-sm text-gray-600">
              Prices are indicative • Subject to availability • Contact for latest quotes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreIPOStocks;
