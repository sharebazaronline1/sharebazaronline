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
  TrendingUp 
} from "lucide-react";

const CorporateActions = () => {
  const [activeTab, setActiveTab] = useState("dividends");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2026");

  const tabs = [
    { id: "rights", label: "RIGHTS", dbType: "rights" },
    { id: "bonus", label: "BONUS", dbType: "bonus" },
    { id: "splits", label: "SPLITS", dbType: "split" },
    { id: "dividends", label: "DIVIDENDS", dbType: "dividend" },
  ];

  const currentTabLabel = tabs.find((t) => t.id === activeTab)?.label || "DIVIDENDS";

  // Fetch from Supabase on Mount & Filters Change
  useEffect(() => {
    const fetchCorporateActions = async () => {
      setLoading(true);
      try {
        const currentConfig = tabs.find((t) => t.id === activeTab);
        let query = supabase
          .from("corporate_actions")
          .select("*")
          .eq("action_type", currentConfig?.dbType || "dividend")
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

  // Client side filtering for search & dynamic year matching based on ex_date
  const filteredRecords = records.filter((item) => {
    const matchesSearch = item.company?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = item.ex_date ? item.ex_date.startsWith(selectedYear) : true;
    return matchesSearch && matchesYear;
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-[#16A34A] px-5 py-2 rounded-full text-sm font-semibold border border-green-200 shadow-sm mb-6">
            <BookOpen size={16} />
            Corporate Actions Hub
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-2px] text-[#0f172a] capitalize">
            Upcoming {currentTabLabel.toLowerCase()} Shares
          </h1>
          <p className="mt-4 text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Keep track of corporate declarations, important record checkpoints, ex-dates, and fundamental shifts across your stock portfolio.
          </p>
        </div>
      </section>

      {/* ==================== TABS BAR ==================== */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center">
        <div className="flex bg-slate-100 p-1.5 rounded-full items-center gap-1 shadow-inner border border-slate-200/60">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSearchQuery("");
              }}
              className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-[#16A34A] shadow-md ring-1 ring-black/5"
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
            
            {/* Left Box Header Space Placeholder if empty */}
            <div className="text-slate-800 font-bold text-base select-none">
              Upcoming {currentTabLabel.charAt(0) + currentTabLabel.slice(1).toLowerCase()} Actions
            </div>

            {/* Right Search and Filtering Tools - FORCE ALIGNED RIGHT */}
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
                No corporate corporate records matched your selected criteria.
              </div>
            ) : (
              <table className="w-full border-collapse text-[13px] text-slate-700">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-slate-200 text-slate-500 font-semibold text-center select-none">
                    <th className="px-6 py-3.5 text-left font-semibold text-slate-600 w-1/3 border-r border-slate-200/60">Company</th>
                    
                    {activeTab === "dividends" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Type</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">%</th>
                      </>
                    )}
                    {(activeTab === "rights" || activeTab === "bonus") && (
                      <th className="px-4 py-3.5 border-r border-slate-200/60">Ratio</th>
                    )}
                    {activeTab === "rights" && (
                      <th className="px-4 py-3.5 border-r border-slate-200/60">Premium</th>
                    )}
                    {activeTab === "splits" && (
                      <>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">Old Face Value</th>
                        <th className="px-4 py-3.5 border-r border-slate-200/60">New Face Value</th>
                      </>
                    )}

                    <th className="px-4 py-3.5 border-r border-slate-200/60">Announcement</th>
                    <th className="px-4 py-3.5 border-r border-slate-200/60">Record</th>
                    <th className="px-4 py-3.5">Ex-{currentTabLabel.charAt(0) + currentTabLabel.slice(1).toLowerCase()}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800 text-center">
                  {filteredRecords.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                      {/* Company Name */}
                      <td className="px-6 py-4 text-left font-bold text-slate-900 border-r border-slate-100">
                        {row.company}
                      </td>

                      {/* Dividends Specific Structural Columns */}
                      {activeTab === "dividends" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-600">{row.type || "Final"}</td>
                          <td className="px-4 py-4 border-r border-slate-100 font-bold text-slate-900">{row.ratio_or_percentage || "-"}</td>
                        </>
                      )}

                      {/* Rights & Bonus Specific Structural Columns */}
                      {(activeTab === "rights" || activeTab === "bonus") && (
                        <td className="px-4 py-4 border-r border-slate-100 font-bold text-[#0f172a]">{row.ratio_or_percentage || "-"}</td>
                      )}
                      {activeTab === "rights" && (
                        <td className="px-4 py-4 border-r border-slate-100">{row.premium !== null ? `₹${row.premium}` : "-"}</td>
                      )}

                      {/* Splits Specific Structural Columns */}
                      {activeTab === "splits" && (
                        <>
                          <td className="px-4 py-4 border-r border-slate-100 text-slate-500">{row.old_fv || "-"}</td>
                          <td className="px-4 py-4 border-r border-slate-100 font-bold text-green-600">{row.new_fv || "-"}</td>
                        </>
                      )}

                      {/* Shared Standard Dates Columns */}
                      <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">{formatDate(row.announcement)}</td>
                      <td className="px-4 py-4 border-r border-slate-100 text-slate-600 text-xs tracking-wider">{formatDate(row.record)}</td>
                      <td className="px-4 py-4 font-semibold text-xs tracking-wider text-slate-900">{formatDate(row.ex_date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* ==================== FOOTER / PAGINATION ACTION ==================== */}
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