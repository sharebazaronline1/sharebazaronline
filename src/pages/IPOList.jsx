import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CalendarClock,
  Radio,
  BriefcaseBusiness,
  BadgeCheck,
  TrendingUp,
  Zap,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { fetchIPOs } from "../api/mockApi";
import IPOFAQ from "../components/IPOFaq";
import slugify from "../utils/slugify";

const SITE_URL = "https://sharebazaaronline.com";
const CANONICAL_URL = `${SITE_URL}/ipo/ipo-list`;

const tabs = ["Open", "Closed", "Upcoming"];
const ITEMS_PER_PAGE = 10;

const IPODashboard = () => {
  const [ipos, setIpos] = useState([]);
  const [activeTab, setActiveTab] = useState("Closed");
  const [typeFilter, setTypeFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortConfig, setSortConfig] = useState({
    key: "open",
    direction: "asc",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loadIPOs = async () => {
      try {
        const data = await fetchIPOs();
        setIpos(data || []);
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

  const parseIPODate = (dateValue) => {
    if (!dateValue) return null;

    if (dateValue instanceof Date) {
      return isNaN(dateValue.getTime()) ? null : dateValue;
    }

    const dateString = String(dateValue).trim();

    const directDate = new Date(dateString);

    if (!isNaN(directDate.getTime())) {
      return directDate;
    }

    const normalizedDate = dateString
      .replace(/\./g, "/")
      .replace(/-/g, "/");

    const parts = normalizedDate.split("/");

    if (parts.length === 3) {
      const [day, month, year] = parts.map(Number);

      if (day && month && year) {
        const fullYear = String(year).length === 2 ? 2000 + year : year;

        const parsedDate = new Date(fullYear, month - 1, day);

        if (!isNaN(parsedDate.getTime())) {
          return parsedDate;
        }
      }
    }

    return null;
  };

  const getOpenDate = (ipo) => {
    return (
      ipo.openDate ||
      ipo.open ||
      ipo.ipo_basic_details?.open_date ||
      ipo.ipo_basic_details?.issue_open_date ||
      null
    );
  };

  const getCloseDate = (ipo) => {
    return (
      ipo.closeDate ||
      ipo.close ||
      ipo.ipo_basic_details?.close_date ||
      ipo.ipo_basic_details?.issue_close_date ||
      null
    );
  };

  const getIPOStatusByDate = (ipo) => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const openDate = parseIPODate(getOpenDate(ipo));
    const closeDate = parseIPODate(getCloseDate(ipo));

    if (openDate) {
      openDate.setHours(0, 0, 0, 0);
    }

    if (closeDate) {
      closeDate.setHours(0, 0, 0, 0);
    }

    if (openDate && closeDate) {
      if (today >= openDate && today <= closeDate) {
        return "Open";
      }

      if (today > closeDate) {
        return "Closed";
      }

      if (today < openDate) {
        return "Upcoming";
      }
    } else if (openDate) {
      if (today >= openDate) {
        return "Open";
      }

      return "Upcoming";
    }

    return "Upcoming";
  };

  const getPriceValue = (ipo) => {
    const price =
      ipo?.price ||
      ipo?.priceBand ||
      ipo?.ipo_basic_details?.price_band ||
      "";

    if (typeof price === "number") {
      return price;
    }

    const numbers = String(price)
      .replace(/₹/g, "")
      .match(/\d+(?:\.\d+)?/g);

    if (!numbers || numbers.length === 0) {
      return 0;
    }

    return Number(numbers[0]);
  };

  const getLotValue = (ipo) => {
    const lot =
      ipo?.lot ||
      ipo?.lotSize ||
      ipo?.ipo_basic_details?.lot_size ||
      "";

    const number = String(lot)
      .replace(/,/g, "")
      .match(/\d+/);

    return number ? Number(number[0]) : 0;
  };

  const getListingDate = (ipo) => {
    return (
      ipo?.listingDate ||
      ipo?.listing ||
      ipo?.ipo_basic_details?.listing_date ||
      null
    );
  };

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }

      return {
        key,
        direction: "asc",
      };
    });

    setCurrentPage(1);
  };

  const getSortValue = (ipo, key) => {
    switch (key) {
      case "company":
        return (ipo?.name || ipo?.fullName || "").toLowerCase();

      case "open": {
        const date = parseIPODate(getOpenDate(ipo));

        return date ? date.getTime() : Number.MAX_SAFE_INTEGER;
      }

      case "close": {
        const date = parseIPODate(getCloseDate(ipo));

        return date ? date.getTime() : Number.MAX_SAFE_INTEGER;
      }

      case "price":
        return getPriceValue(ipo);

      case "listing": {
        const date = parseIPODate(getListingDate(ipo));

        return date ? date.getTime() : Number.MAX_SAFE_INTEGER;
      }

      case "lot":
        return getLotValue(ipo);

      default:
        return "";
    }
  };

  const filteredAndSortedIPOs = useMemo(() => {
    const filtered = ipos.filter((ipo) => {
      const ipoStatus = getIPOStatusByDate(ipo);

      const matchesTab = ipoStatus === activeTab;

      const matchesType =
        typeFilter === "All" ||
        getIPOType(ipo)
          .toLowerCase()
          .includes(typeFilter.toLowerCase());

      return matchesTab && matchesType;
    });

    return [...filtered].sort((a, b) => {
      const aValue = getSortValue(a, sortConfig.key);

      const bValue = getSortValue(b, sortConfig.key);

      if (typeof aValue === "string" && typeof bValue === "string") {
        const comparison = aValue.localeCompare(bValue, undefined, {
          numeric: true,
          sensitivity: "base",
        });

        return sortConfig.direction === "asc" ? comparison : -comparison;
      }

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }

      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }

      return 0;
    });
  }, [ipos, activeTab, typeFilter, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedIPOs.length / ITEMS_PER_PAGE);

  const paginatedIPOs = filteredAndSortedIPOs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getCount = (tab) => {
    if (tab === "All") {
      return ipos.length;
    }

    return ipos.filter((ipo) => getIPOStatusByDate(ipo) === tab).length;
  };

  const LetterAvatar = ({ name }) => {
    const letter = name?.charAt(0).toUpperCase() || "?";

    return (
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-semibold text-lg shadow-sm">
        {letter}
      </div>
    );
  };

  const SortableHeader = ({ label, sortKey, align = "center" }) => {
    const isActive = sortConfig.key === sortKey;

    const isAscending = sortConfig.direction === "asc";

    return (
      <th className={`px-6 py-4 text-${align}`}>
        <button
          onClick={() => handleSort(sortKey)}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition ${
            isActive ? "text-green-700" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          {label}

          <span className="flex flex-col">
            {isActive ? (
              isAscending ? (
                <ChevronUp size={15} strokeWidth={2.5} />
              ) : (
                <ChevronDown size={15} strokeWidth={2.5} />
              )
            ) : (
              <ChevronDown size={14} className="text-gray-300" />
            )}
          </span>
        </button>
      </th>
    );
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${CANONICAL_URL}#webpage`,
    url: CANONICAL_URL,
    name: "IPO Tracker - Live, Upcoming & Closed IPOs in India 2026 | ShareBazaarOnline",
    description:
      "Track all live, upcoming and closed IPOs in India 2026. Get open date, close date, price band, listing date, lot size and subscription details for Mainboard and SME IPOs.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "ShareBazaarOnline",
      publisher: { "@id": `${SITE_URL}#organization` },
    },
    about: {
      "@type": "Thing",
      name: "IPO Tracker India",
      description:
        "Live IPO tracker for NSE and BSE with price band, lot size, listing dates and subscription status.",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.jpg`,
    },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "ShareBazaarOnline",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    sameAs: [
      "https://twitter.com/sharebazaar",
      "https://www.linkedin.com/company/sharebazaaronline",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "IPO Tracker", item: CANONICAL_URL },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "List of IPOs in India 2026",
    description:
      "Track live, upcoming and closed IPOs in India with price band, lot size and listing dates.",
    numberOfItems: ipos.length,
    itemListElement: ipos.slice(0, 20).map((ipo, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: ipo.name || ipo.fullName,
      url: `${SITE_URL}/ipo/${ipo.id}/${slugify(ipo.name || ipo.fullName)}`,
    })),
  };

  const safeJson = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-600 mx-auto"></div>

        <p className="mt-4 text-gray-600">Loading IPOs...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          IPO Tracker - Live, Upcoming & Closed IPOs in India 2026 | ShareBazaarOnline
        </title>

        <meta
          name="description"
          content="Track all live, upcoming and closed IPOs in India 2026. Get IPO open date, close date, price band, listing date, lot size and subscription details for Mainboard and SME IPOs."
        />

        <meta
          name="keywords"
          content="IPO tracker, live IPO, upcoming IPO, closed IPO, IPO in India, IPO 2026, IPO list, IPO calendar, mainboard IPO, SME IPO, IPO open date, IPO close date, IPO price band, IPO lot size, IPO listing date, IPO GMP, IPO subscription status, IPO allotment status, best IPO 2026, top IPOs in India, NSE IPO, BSE IPO, NSE SME IPO, BSE SME IPO, new IPO today, upcoming IPO in India, live IPO in India, IPO tracker India, IPO watch, IPO news, IPO details, IPO application, apply IPO online, IPO allotment, IPO investment, IPO listing gain, IPO grey market premium"
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="author" content="ShareBazaarOnline" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#16A34A" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />

        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ShareBazaarOnline" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta
          property="og:title"
          content="IPO Tracker - Live, Upcoming & Closed IPOs in India 2026"
        />
        <meta
          property="og:description"
          content="Track all live, upcoming and closed IPOs in India 2026 with open date, close date, price band, listing date, lot size and subscription details."
        />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="IPO Tracker India - ShareBazaarOnline"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sharebazaar" />
        <meta name="twitter:creator" content="@sharebazaar" />
        <meta
          name="twitter:title"
          content="IPO Tracker - Live, Upcoming & Closed IPOs in India 2026"
        />
        <meta
          name="twitter:description"
          content="Track live, upcoming and closed IPOs in India with price band, lot size and listing dates."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(itemListSchema) }}
        />
      </Helmet>

      <div className="w-full bg-[#f7faf8] min-h-screen">
        <section className="relative overflow-hidden border-gray-200 bg-gradient-to-br from-white via-[#f6fffb] to-[#eef8ff] py-16 lg:py-2">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-100/40 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-100/40 blur-3xl rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative max-w-[1800px] mx-auto px-6">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 items-center">
              <div className="xl:col-span-6">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm">
                  <TrendingUp size={16} />
                  IPO Tracker
                </div>

                <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-black tracking-[-3px] leading-[0.95] text-[#0f172a]">
                  Track India’s
                  <span className="text-green-600 block">Complete IPOs</span>
                </h1>

                <p className="mt-6 text-lg lg:text-[22px] leading-9 text-slate-600 max-w-2xl">
                  Track live & upcoming IPOs in India with listing dates, price
                  bands, GMP trends, lot sizes, and subscription insights — all
                  in one place.
                </p>

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
                      <ShieldCheck size={22} className="text-blue-700" />
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
                <div className="relative flex justify-center">
                  <img
                    src="/images/hero-ipo.png"
                    alt="IPO Tracker"
                    className="w-full max-w-[780px] object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 sm:px-8 py-5 border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="flex flex-wrap gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all flex items-center gap-2
                      ${
                        activeTab === tab
                          ? "bg-[#16A34A] text-white shadow-sm"
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
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    pointer-events-none
                  "
                />
              </div>
            </div>

            <div className="sm:hidden flex items-center justify-end px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold border-b">
              ← Swipe →
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1200px]">
                <thead>
                  <tr className="bg-gray-50 border-gray-200">
                    <SortableHeader
                      label="Company"
                      sortKey="company"
                      align="left"
                    />

                    <SortableHeader label="Open" sortKey="open" />

                    <SortableHeader label="Close" sortKey="close" />

                    <SortableHeader label="Price Band" sortKey="price" />

                    <SortableHeader label="Listing" sortKey="listing" />

                    <SortableHeader label="Lot Size" sortKey="lot" />

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

                      const hasLogo = ipo.logo && ipo.logo.trim() !== "";

                      return (
                        <motion.tr
                          key={ipo.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.03 }}
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
                            <div className="flex items-center gap-4 min-w-[240px]">
                              {hasLogo ? (
                                <img
                                  src={ipo.logo}
                                  alt={ipo.name}
                                  className="w-14 h-14 object-contain rounded-2xl border border-gray-200 bg-white p-2 shadow-sm"
                                  onError={(e) => {
                                    e.target.style.display = "none";

                                    if (e.target.nextElementSibling) {
                                      e.target.nextElementSibling.style.display =
                                        "flex";
                                    }
                                  }}
                                />
                              ) : null}

                              <div
                                className={`${hasLogo ? "hidden" : "flex"}`}
                              >
                                <LetterAvatar name={ipo.name} />
                              </div>

                              <div>
                                <p className="font-semibold text-gray-900 text-base">
                                  {ipo.name || ipo.fullName}
                                </p>

                                <p className="hidden sm:block text-xs text-gray-500 mt-1">
                                  {ipo.about_company?.company_name ||
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

                          <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                            {ipo.open || "—"}
                          </td>

                          <td className="px-6 py-5 text-center text-sm text-gray-700 font-medium">
                            {ipo.close || "—"}
                          </td>

                          <td className="px-6 py-5 text-center">
                            <span className="font-semibold text-gray-900 text-base">
                              ₹{ipo.price}
                            </span>
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
                                className="px-5 py-2 rounded-xl text-sm font-semibold transition bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
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

            {!loading && filteredAndSortedIPOs.length > 0 && totalPages > 1 && (
              <div className="px-6 py-5 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-700">
                    {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-gray-700">
                    {Math.min(
                      currentPage * ITEMS_PER_PAGE,
                      filteredAndSortedIPOs.length
                    )}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-700">
                    {filteredAndSortedIPOs.length}
                  </span>{" "}
                  records
                </p>

                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl border border-gray-300 text-gray-600 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                  >
                    <ChevronLeft size={16} />
                    Prev
                  </button>

                  <span className="px-4 h-10 inline-flex items-center rounded-xl border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-700">
                    <span className="text-[#16A34A]">{currentPage}</span>
                    <span className="mx-1.5 text-gray-400">/</span>
                    <span>{totalPages}</span>
                  </span>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl border border-gray-300 text-gray-600 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <IPOFAQ />
          </div>
        </section>
      </div>
    </>
  );
};

export default IPODashboard;