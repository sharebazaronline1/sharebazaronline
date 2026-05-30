// src/components/IPODashboard.jsx

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Activity,
  CalendarDays,
  BarChart3,
  Radio,
  BriefcaseBusiness,
  BadgeCheck,
  CalendarClock,
  PieChart,
  TrendingUp,
  Zap,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import { fetchIPOs } from "../api/mockApi";
import IPOFAQ from "../components/IPOFaq";
import slugify from "../utils/slugify";

const tabs = ["Open", "Closed", "Upcoming"];

const ITEMS_PER_PAGE = 10;

const IPODashboard = () => {
  const [ipos, setIpos] = useState([]);
  const [activeTab, setActiveTab] = useState("Closed");
  const [typeFilter, setTypeFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, typeFilter]);

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

  const filteredIPOs = useMemo(() => {
    return ipos.filter((ipo) => {
      const ipoStatus = getIPOStatusByDate(ipo);

      const matchesTab = ipoStatus === activeTab;

      const matchesType =
        typeFilter === "All" ||
        getIPOType(ipo)
          .toLowerCase()
          .includes(typeFilter.toLowerCase());

      return matchesTab && matchesType;
    });
  }, [ipos, activeTab, typeFilter]);

  const totalPages = Math.ceil(
    filteredIPOs.length / ITEMS_PER_PAGE
  );

  const paginatedIPOs = filteredIPOs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getCount = (tab) => {
    if (tab === "All") return ipos.length;

    return ipos.filter(
      (ipo) => getIPOStatusByDate(ipo) === tab
    ).length;
  };

  const LetterAvatar = ({ name }) => {
    const letter = name?.charAt(0).toUpperCase() || "?";

    return (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-lg shadow-sm">
        {letter}
      </div>
    );
  };

const stats = [
  {
    title: "Live IPOs",
    value: getCount("Open"),
    icon: Radio,
    color: "text-green-600",
    bg: "bg-green-100",
    sub: "Open for subscription",
  },
  {
    title: "Upcoming IPOs",
    value: getCount("Upcoming"),
    icon: CalendarClock,
    color: "text-blue-600",
    bg: "bg-blue-100",
    sub: "Yet to open",
  },
  {
    title: "Total IPOs",
    value: getCount("All"),
    icon: BriefcaseBusiness,
    color: "text-purple-600",
    bg: "bg-purple-100",
    sub: "On the tracker",
  },
  {
    title: "Listed IPOs",
    value: getCount("Closed"),
    icon: BadgeCheck,
    color: "text-pink-500",
    bg: "bg-pink-100",
    sub: "Successfully listed",
  },
];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600 mx-auto"></div>

        <p className="mt-4 text-gray-600">
          Loading IPOs...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f7faf8] min-h-screen">

   {/* HERO SECTION - FIXED & CLEAN */}
{/* HERO SECTION - SQUARE CARDS */}
<section className="relative overflow-hidden  border-gray-200 bg-gradient-to-br from-white via-[#f6fffb] to-[#eef8ff] py-16 lg:py-2">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-100/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-100/40 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

  <div className="relative max-w-[1800px] mx-auto px-6">

    <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-center">

      {/* LEFT CONTENT */}
      <div className="xl:col-span-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm">
          <TrendingUp size={16} />
          IPO Tracker
        </div>

        {/* Heading */}
        <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-black tracking-[-3px] leading-[0.95] text-[#0f172a]">
          Track India’s
          <span className="text-green-600 block">
            Complete IPOs
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg lg:text-[22px] leading-9 text-slate-600 max-w-2xl">
          Track live & upcoming IPOs in India with listing dates,
          price bands, GMP trends, lot sizes, and subscription insights —
          all in one place.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
              <Zap size={22} className="text-green-700" />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Real-time IPO Updates
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Stay updated with latest IPO activity instantly
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
              <ShieldCheck
                size={22}
                className="text-blue-700"
              />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Reliable Market Insights
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Trusted IPO data & GMP trends for smarter investing
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="xl:col-span-6 relative">

        {/* IPO Illustration */}
        <div className="relative flex justify-center">

          <img
            src="/images/hero-ipo.png"
            alt="IPO Tracker"
            className="w-full max-w-[780px] object-contain drop-shadow-2xl"
          />

        </div>

        {/* Floating Stats */}
        {/* <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 xl:left-auto xl:right-0 xl:translate-x-0">

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
                    bg-white/90 backdrop-blur
                    border border-gray-200
                    rounded-3xl
                    p-5
                    shadow-lg
                    hover:shadow-xl
                    transition-all
                    w-[180px]
                    h-[180px]
                    flex
                    flex-col
                    justify-between
                  "
                >
                  <div className="flex justify-between items-start">

                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${stat.bg}`}
                    >
                      <Icon
                        className={stat.color}
                        size={20}
                      />
                    </div>

                    <div
                      className={`text-4xl font-black ${stat.color}`}
                    >
                      {stat.value}
                    </div>

                  </div>

                  <div>

                    <p className="text-lg font-bold text-gray-900 leading-tight">
                      {stat.title}
                    </p>

                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {stat.sub}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div> */}

      </div>

    </div>

  </div>

</section>

      {/* TABLE SECTION */}
      <section className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

          {/* FILTER BAR */}
          <div className="px-4 sm:px-8 py-5 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            {/* TABS */}
            <div className="flex flex-wrap gap-3">

              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center gap-2
                    ${
                      activeTab === tab
                        ? "bg-green-600 text-white shadow-sm"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  {tab}

                  <span
                    className={`
                      px-2 py-0.5 rounded-full text-xs font-bold
                      ${
                        activeTab === tab
                          ? "bg-white text-green-600"
                          : "bg-gray-300 text-gray-700"
                      }
                    `}
                  >
                    {getCount(tab)}
                  </span>
                </button>
              ))}

            </div>

            {/* FILTER */}
     <div className="relative w-[160px] sm:w-[190px] lg:w-[180px]">

  <select
    value={typeFilter}
    onChange={(e) => setTypeFilter(e.target.value)}
    className="
      w-full
      h-12
      rounded-2xl
      border border-gray-300
      bg-white
      px-5
      pr-12
      text-sm
      font-semibold
      text-gray-700
      outline-none
      appearance-none
      focus:ring-2
      focus:ring-green-500/20
      focus:border-green-500
    "
  >
    <option value="All">All Types</option>
    <option value="Mainboard">Mainboard</option>
    <option value="SME">SME</option>
  </select>

  <ChevronDown
    size={18}
    className="
      absolute
      right-4
      top-1/3
      -translate-y-1/2
      text-gray-500
      pointer-events-none
    "
  />

</div>
          </div>

          {/* MOBILE SWIPE */}
          <div className="sm:hidden flex items-center justify-end px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold border-b">
            ← Swipe →
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[1200px]">

              <thead>

                <tr className="bg-gray-50 border-b border-gray-200">

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Company
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Open
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Close
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Price Band
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Listing
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Lot Size
                  </th>

                  <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Action
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">

                {paginatedIPOs.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-20 text-gray-500 text-lg"
                    >
                      No {activeTab.toLowerCase()} IPOs available
                    </td>
                  </tr>
                ) : (
                  paginatedIPOs.map((ipo, i) => {
                    const type = getIPOType(ipo);

                    const hasLogo =
                      ipo.logo &&
                      ipo.logo.trim() !== "";

                    return (
                      <motion.tr
                        key={ipo.id}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: i * 0.03,
                        }}
                        className="hover:bg-gray-50 transition cursor-pointer"
                        onClick={() =>
                          navigate(
                            `/ipo/${ipo.id}/${slugify(
                              ipo.name ||
                                ipo.fullName
                            )}`
                          )
                        }
                      >
                        {/* COMPANY */}
                        <td className="px-6 py-5">

                          <div className="flex items-center gap-4 min-w-[240px]">

                            {hasLogo ? (
                              <img
                                src={ipo.logo}
                                alt={ipo.name}
                                className="w-14 h-14 object-contain rounded-2xl border border-gray-200 bg-white p-2 shadow-sm"
                                onError={(e) => {
                                  e.target.style.display =
                                    "none";

                                  e.target.nextElementSibling.style.display =
                                    "flex";
                                }}
                              />
                            ) : null}

                            <div
                              className={`${
                                hasLogo
                                  ? "hidden"
                                  : "flex"
                              }`}
                            >
                              <LetterAvatar
                                name={ipo.name}
                              />
                            </div>

                            <div>

                              <p className="font-semibold text-gray-900 text-base">
                                {ipo.name}
                              </p>

                              <p className="hidden sm:block text-xs text-gray-500 mt-1">
                                {ipo.about_company
                                  ?.company_name ||
                                  "Initial Public Offering"}
                              </p>

                              <span
                                className={`
                                  inline-flex mt-2 px-2.5 py-1 text-[11px] font-semibold rounded-lg border
                                  ${
                                    type === "SME"
                                      ? "bg-blue-100 text-blue-700 border-blue-200"
                                      : "bg-green-100 text-green-700 border-green-200"
                                  }
                                `}
                              >
                                {type}
                              </span>

                            </div>
                          </div>
                        </td>

                        {/* OPEN */}
                        <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                          {ipo.open || "—"}
                        </td>

                        {/* CLOSE */}
                        <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                          {ipo.close || "—"}
                        </td>

                        {/* PRICE */}
                        <td className="px-6 py-5 text-center">

                          <span className="font-semibold text-gray-900 text-base">
                            ₹{ipo.price}
                          </span>

                        </td>

                        {/* LISTING */}
                        <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                          {ipo.listing || "TBA"}
                        </td>

                        {/* LOT */}
                        <td className="px-6 py-5 text-center font-semibold text-gray-900 text-base">
                          {ipo.lot}
                        </td>

                        {/* ACTION */}
                        <td
                          className="px-6 py-5 text-center"
                          onClick={(e) =>
                            e.stopPropagation()
                          }
                        >

                          <div className="flex justify-center items-center gap-3">

                            <button
                              onClick={(e) => {
                                e.stopPropagation();

                                navigate(
                                  "/how-to-apply-ipo"
                                );
                              }}
                              className="px-5 py-2 rounded-xl text-sm font-semibold transition bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                            >
                              Apply
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();

                                navigate(
                                  `/ipo/${ipo.id}/${slugify(
                                    ipo.name ||
                                      ipo.fullName
                                  )}`
                                );
                              }}
                              className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
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

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="px-6 py-5 border-t border-gray-200 flex items-center justify-between">

              <p className="text-sm text-gray-500">
                Showing{" "}
                {(currentPage - 1) *
                  ITEMS_PER_PAGE +
                  1}{" "}
                to{" "}
                {Math.min(
                  currentPage *
                    ITEMS_PER_PAGE,
                  filteredIPOs.length
                )}{" "}
                of {filteredIPOs.length} IPOs
              </p>

              <div className="flex items-center gap-2">

                <button
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage(
                      currentPage - 1
                    )
                  }
                  className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center disabled:opacity-40 hover:bg-gray-50"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({
                  length: totalPages,
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`
                      w-10 h-10 rounded-xl text-sm font-semibold
                      ${
                        currentPage ===
                        index + 1
                          ? "bg-green-600 text-white"
                          : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                      }
                    `}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    setCurrentPage(
                      currentPage + 1
                    )
                  }
                  className="w-10 h-10 rounded-xl border border-gray-300 flex items-center justify-center disabled:opacity-40 hover:bg-gray-50"
                >
                  <ChevronRight size={18} />
                </button>

              </div>
            </div>
          )}

        </div>

        {/* FAQ */}
        <div className="mt-8">
          <IPOFAQ />
        </div>

      </section>
    </div>
  );
};

export default IPODashboard;