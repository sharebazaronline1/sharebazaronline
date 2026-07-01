// src/pages/CorporateActions.jsx

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Percent, 
  ArrowLeftRight, 
  Award, 
  TrendingUp,
  Briefcase
} from "lucide-react";

const CorporateActions = () => {
  const [activeTab, setActiveTab] = useState("buyback");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2026");

  const tabs = [
    { id: "buyback", label: "Buyback", dbType: "buyback" },
    { id: "dividends", label: "Dividends", dbType: "dividend" },
    { id: "rights", label: "Rights Issue", dbType: "rights" },
    { id: "bonus", label: "Bonus Issue", dbType: "bonus" },
    { id: "splits", label: "Stock Split", dbType: "split" },
    { id: "others", label: "Other Actions", dbType: "other" },
  ];

  const currentTabLabel = tabs.find((t) => t.id === activeTab)?.label || "Dividends";

  // Fetch from Supabase on Mount & Filters Change
  useEffect(() => {
    const fetchCorporateActions = async () => {
      setLoading(true);
      try {
        const currentConfig = tabs.find((t) => t.id === activeTab);
        let query = supabase
          .from("corporate_actions")
          .select("*")
          .eq("action_type", currentConfig?.dbType || "buyback")
          .order("ex_date", { ascending: false });

        const { data, error } = await query;
        if (error) throw error;

        setRecords(data || []);
      } catch (err) {
        console.error("Error fetching corporate actions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCorporateActions();
  }, [activeTab]);

  // Client side filtering for search & year matching based on ex_date or announcement
  const filteredRecords = records.filter((item) => {
    const matchesSearch = item.company?.toLowerCase().includes(searchQuery.toLowerCase());
    const dateToCheck = item.ex_date || item.announcement || "";
    const matchesYear = dateToCheck ? dateToCheck.startsWith(selectedYear) : true;
    return matchesSearch && matchesYear;
  });

  const formatDate = (dateStr) => {
    if (!dateStr || dateStr.toUpperCase() === "N/A") return "-";
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr; // Return raw string if it's already structured text
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase()
      .replace(/ /g, "-");
  };

  return (
    <div className="w-full min-h-screen bg-slate-50/50 pb-20">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden py-16 bg-white border-b border-gray-100">
        <div className="relative max-w-[1800px] mx-auto px-6 text-center">
          
          {/* Badges Container */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#16A34A] px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-200/60 shadow-xs">
              <BookOpen size={14} />
              Corporate Actions Calendar
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-200/60 shadow-xs">
              <TrendingUp size={14} />
              Live Market Tracking
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-4">
            Corporate Actions Matrix
          </h1>
          
          {/* Interactive dynamic subheader layout */}
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed on essential stock distributions, company restructurings, and upcoming eligibility dates. Want to explore delistings or mergers?{" "}
            <button 
              onClick={() => {
                setActiveTab("others");
                setSearchQuery("");
              }}
              className="text-[#16A34A] hover:text-[#15803D] font-bold inline-flex items-center gap-0.5 transition"
            >
              Track More Actions
            </button>
          </p>
        </div>
      </section>

      {/* ==================== TABS BAR ==================== */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center">
        <div className="flex bg-slate-100 p-1.5 rounded-xl items-center gap-1 shadow-inner border border-slate-200/60 overflow-x-auto max-w-full scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSearchQuery("");
              }}
              className={`px-6 py-2 rounded-lg text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-[#16A34A] shadow-sm border border-slate-200/40"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ==================== CONTROL & TABLE CONTAINER ==================== */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          
          {/* Controls Bar Header */}
          <div className="px-6 py-5 border-b border-slate-100 bg-white flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="text-slate-800 font-bold text-base select-none">
              Upcoming {currentTabLabel} Records
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end lg:justify-end lg:ml-auto">
              <div className="relative max-w-xs w-full lg:w-64">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search Company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[#16A34A]"
                />
              </div>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-[#16A34A]"
              >
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center py-20 text-slate-500 space-y-3">
                <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-[#16A34A] rounded-full" role="status" aria-label="loading"></div>
                <p className="text-sm tracking-wide">Syncing market data...</p>
              </div>
            ) : filteredRecords.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                No data matched your selected metrics for {currentTabLabel}.
              </div>
            ) : (
              <table className="w-full border-collapse text-[13px] text-slate-700">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-500 font-semibold text-center select-none">
                    <th className="px-6 py-3.5 text-left font-semibold text-slate-600 w-1/4 border-r border-slate-200/60">Company</th>
                    
                    {/* Buyback Columns */}
                    {activeTab === "buyback" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Buyback Price</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">CMP</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Premium</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Record Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Ex Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Size</th>
                      </>
                    )}

                    {/* Dividends Columns */}
                    {activeTab === "dividends" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Dividend Type</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Yield %</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Announcement</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Record Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Ex Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Payment Date</th>
                      </>
                    )}
                    
                    {/* Rights Issue Columns */}
                    {activeTab === "rights" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Ratio</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Rights Price</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Market Price</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Discount</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Record Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Ex Date</th>
                      </>
                    )}

                    {/* Bonus Issue Columns */}
                    {activeTab === "bonus" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Bonus Ratio</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Announcement</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Record Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Ex-Bonus Date</th>
                      </>
                    )}
                    
                    {/* Stock Split Columns */}
                    {activeTab === "splits" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Split Ratio</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Old FV</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">New FV</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Announcement</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Record Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Ex Date</th>
                      </>
                    )}

                    {/* Other Corporate Actions Columns */}
                    {activeTab === "others" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Action Type</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Key Detail</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Announcement Date</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Status</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800 text-center">
                  {filteredRecords.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="px-6 py-4 text-left font-bold text-slate-900 border-r border-slate-100">
                        {row.company}
                      </td>

                      {/* Buyback Render */}
                      {activeTab === "buyback" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-900 font-bold">
                            {row.buyback_price !== null && row.buyback_price !== undefined ? `₹${row.buyback_price}` : "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600">
                            {row.cmp !== null && row.cmp !== undefined ? `₹${row.cmp}` : "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 font-bold text-emerald-600">
                            {row.premium || "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.record)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.ex_date)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 font-semibold">
                            {row.size || "-"}
                          </td>
                        </>
                      )}

                      {/* Dividends Render */}
                      {activeTab === "dividends" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600">
                            {row.type || "Final Dividend"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 font-bold text-slate-900">
                            {row.ratio_or_percentage || "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.announcement)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.record)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.ex_date)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-900 font-semibold text-xs tracking-wider">
                            {formatDate(row.payment_date)}
                          </td>
                        </>
                      )}

                      {/* Rights Issue Render */}
                      {activeTab === "rights" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 font-bold text-slate-950">
                            {row.ratio_or_percentage || "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-900">
                            {row.rights_price !== null && row.rights_price !== undefined ? `₹${row.rights_price}` : "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600">
                            {row.market_price !== null && row.market_price !== undefined ? `₹${row.market_price}` : "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-amber-600 font-semibold">
                            {row.discount || "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.record)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.ex_date)}
                          </td>
                        </>
                      )}

                      {/* Bonus Issue Render */}
                      {activeTab === "bonus" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 font-bold text-slate-950">
                            {row.ratio_or_percentage || "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.announcement)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.record)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 font-semibold text-xs tracking-wider text-slate-900">
                            {formatDate(row.ex_date)}
                          </td>
                        </>
                      )}

                      {/* Splits Render */}
                      {activeTab === "splits" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 font-bold">
                            {row.ratio_or_percentage || "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-500">
                            {row.old_fv !== null && row.old_fv !== undefined ? `₹${row.old_fv}` : "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 font-bold text-emerald-600">
                            {row.new_fv !== null && row.new_fv !== undefined ? `₹${row.new_fv}` : "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.announcement)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.record)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.ex_date)}
                          </td>
                        </>
                      )}

                      {/* Other Actions Render */}
                      {activeTab === "others" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-center font-semibold">
                            {row.action_type_detail || "General Action"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-center max-w-xs truncate font-semibold">
                            {row.key_detail || "-"}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">
                            {formatDate(row.announcement)}
                          </td>
                          <td className="px-4 py-4 border-r border-slate-100 text-emerald-700 font-bold text-xs tracking-wide">
                            <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/50 inline-block">
                              {row.status || "Completed"}
                            </span>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {!loading && filteredRecords.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-10 py-3 bg-[#16A34A] text-white text-xs font-bold tracking-widest rounded-md hover:bg-[#15803D] transition shadow-md uppercase">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CorporateActions;