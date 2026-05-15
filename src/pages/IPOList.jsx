// src/components/IPODashboard.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchIPOs } from "../api/mockApi";
import IPOFAQ from '../components/IPOFaq'
import slugify from "../utils/slugify";


const tabs = ["Open", "Closed", "Upcoming"];

const IPODashboard = () => {
  const [ipos, setIpos] = useState([]);
  const [activeTab, setActiveTab] = useState("Closed");
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
  if (ipo?.ipo_basic_details?.ipo_type) {
    return ipo.ipo_basic_details.ipo_type
      .replace("IPO", "")
      .trim()
      .toUpperCase();
  }

  if (ipo?.type) {
    return ipo.type.toUpperCase();
  }

  const name = (ipo?.fullName || ipo?.name || "").toLowerCase();
  return name.includes("sme") ? "SME" : "MAINBOARD";
};


 const getIPOStatusByDate = (ipo) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let openDate = ipo.openDate || ipo.open || null;
  let closeDate = ipo.closeDate || ipo.close || null;

  openDate = openDate ? new Date(openDate) : null;
  closeDate = closeDate ? new Date(closeDate) : null;

  if (openDate && closeDate) {
    if (today >= openDate && today <= closeDate) return "Open";
    if (today > closeDate) return "Closed";
    if (today < openDate) return "Upcoming";
  } else if (openDate) {
    if (today >= openDate) return "Open";
    if (today < openDate) return "Upcoming";
  }
    return "Upcoming";
};

  const filteredIPOs = ipos.filter((ipo) => {
    const ipoStatus = getIPOStatusByDate(ipo);
    const matchesTab = ipoStatus === activeTab;

    const matchesType =
      typeFilter === "All" ||
      getIPOType(ipo).toLowerCase().includes(typeFilter.toLowerCase());

    return matchesTab && matchesType;
  });

  const getCount = (tab) =>
    ipos.filter((ipo) => getIPOStatusByDate(ipo) === tab).length;

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
    <div className="w-full ">

      {/* ===== FIXED IPO LIST BANNER – Top cropping fixed ===== */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">

      <div className="w-screen relative left-1 -translate-x-1/2 -mx-8">
      
        <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] rounded overflow-hidden lg:mr-12">
          <img
            src="/images/Ipolist.png"
            alt="IPO Tracker - Live & Upcoming IPOs in India"
            className="absolute inset-0 w-full h-full object-top  object-center"
          />
      
        </div>
      </div>

      </div>
  

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
         <div className="px-4 sm:px-8 py-5 sm:py-6 bg-gray-50 border-b border-gray-200 text-center">
           <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">IPO Tracker</h2>
          <p className="mt-2 text-sm sm:text-lg text-gray-600">
              Live & Upcoming IPOs in India
            </p>
          </div>

        <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-gray-200">
  <div className="flex items-center justify-between gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap">
             <div className="flex flex-wrap gap-2 sm:gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                      activeTab === tab
                        ? "bg-green-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                    <span
                     className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${
                        activeTab === tab
                          ? "bg-white text-green-600"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {getCount(tab)}
                    </span>
                  </button>
                ))}
              </div>

             <div className="relative shrink-0">
  <select
    value={typeFilter}
    onChange={(e) => setTypeFilter(e.target.value)}
    className="
      h-9
      min-w-[105px]
      sm:min-w-[130px]
      pl-3
      pr-7
      text-[11px]
      sm:text-sm
      font-medium
      text-gray-700
      bg-white
      border border-gray-300
      rounded-full
      outline-none
      appearance-none
      shadow-sm
      transition
      focus:ring-1
      focus:ring-green-500
      focus:border-green-500
      active:outline-none
      tap-highlight-transparent
    "
    style={{
      WebkitTapHighlightColor: "transparent",
    }}
  >
    <option value="All">All Types</option>
    <option value="Mainboard">Mainboard</option>
    <option value="SME">SME</option>
  </select>

  {/* Arrow */}
  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
    <svg
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
</div>
            </div>
          </div>
<div className="sm:hidden flex items-center justify-end gap-2 px-4 py-2 bg-blue-50 border-b text-[11px] text-blue-700 font-medium animate-pulse">
  <span>← Swipe →</span>
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
                        onClick={() =>
                          navigate(
                            `/ipo/${ipo.id}/${slugify(
                              ipo.name || ipo.fullName
                            )}`
                          )
                        }
                      >
                        <td className="px-6 py-5">
                         <div className="flex items-center gap-3 min-w-[220px]">
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
                                <p className="hidden sm:block text-xs text-gray-500 mt-0.5">
                                  {ipo.fullName || "Initial Public Offering"}
                                </p>                              <span
                                className={`inline-flex mt-2 px-1 py-1 text-xs font-semibold rounded shadow-sm ${
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

                        <td
  className="px-6 py-5 text-center"
  onClick={(e) => e.stopPropagation()}
>
  <div className="flex justify-center items-center gap-3">
    
    <button
      onClick={(e) => {
        e.stopPropagation();
        navigate("/how-to-apply-ipo");
      }}
      className="px-5 py-2 rounded-lg text-sm font-semibold transition bg-green-600 text-white hover:bg-green-700 shadow-sm"
    >
      Apply
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        navigate(
  `/ipo/${ipo.id}/${slugify(
    ipo.name || ipo.fullName
  )}`
);
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
    </div>
  );
};

export default IPODashboard;