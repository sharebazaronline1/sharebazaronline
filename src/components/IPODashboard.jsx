// src/components/IPODashboard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const Badge = ({ children, colorClass }) => (
  <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${colorClass}`}>
    {children}
  </span>
);

const LetterAvatar = ({ name }) => (
  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-800 text-white font-bold text-lg">
    {name?.charAt(0)?.toUpperCase() || "I"}
  </div>
);

const formatDateRange = (open, close) => {
  if (!open || !close) return "—";
  const o = new Date(open);
  const c = new Date(close);
  if (isNaN(o) || isNaN(c)) return "—";

  const month = c.toLocaleString("en-GB", { month: "short" });
  return `${o.getDate()}–${c.getDate()} ${month}`;
};

// 🔹 Single IPO card for mobile/tablet horizontal scroll
export const IPOCard = ({ ipo }) => {
  const navigate = useNavigate();
  const type = (ipo.fullName || ipo.name || "").toLowerCase().includes("sme") ? "SME" : "Mainboard";
  const typeColor =
    type === "SME"
      ? "bg-blue-100 text-blue-700 border border-blue-200"
      : "bg-green-100 text-green-700 border border-green-200";

  return (
    <div className="min-w-[250px] flex-shrink-0 bg-white border border-gray-300 rounded-2xl shadow-sm">
      <div className="p-4 flex flex-col gap-2 h-full">
        <div className="flex gap-3 items-start">
          {ipo.logo ? (
            <img src={ipo.logo} alt={ipo.name} className="w-12 h-12 rounded-xl object-contain border bg-gray-50 p-1" />
          ) : (
            <LetterAvatar name={ipo.name} />
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base text-gray-900 truncate">{ipo.name}</h3>
            <p className="text-xs text-gray-500 truncate">{ipo.fullName || "IPO"}</p>
            <div className="flex gap-2 mt-1 flex-wrap">
              <Badge colorClass={typeColor}>{type}</Badge>
              {ipo.status?.toLowerCase() === "live" && (
                <Badge colorClass="flex items-center gap-1.5 text-red-600 bg-red-50 border border-red-200">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex h-full w-full rounded-full bg-red-600"></span>
                  </span>
                  LIVE
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="mt-2 text-xs grid grid-cols-2 gap-y-1">
          <span className="text-gray-600">Dates</span>
          <span className="font-medium">{formatDateRange(ipo.open, ipo.close)}</span>

          <span className="text-gray-600">Price</span>
          <span className="font-semibold">₹{ipo.price}</span>

          <span className="text-gray-600">Lot</span>
          <span>{ipo.lot} shares</span>

          <span className="text-gray-600">Listing</span>
          <span>{ipo.listing || "TBA"}</span>
        </div>

        <div className="mt-auto flex gap-2">
          <button
            onClick={() => navigate(`/ipo/${ipo.id}`)}
            className="flex-1 py-2.5 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-xl"
          >
            Apply
          </button>
          <button
            onClick={() => navigate(`/ipo/${ipo.id}`)}
            className="flex-1 py-2.5 border border-gray-300 hover:bg-gray-100 text-xs font-semibold rounded-xl"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const IPODashboard = ({ ipos = [] }) => {
  const navigate = useNavigate();

  const parseDate = (dateStr) => {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const top8IPOs = useMemo(() => {
    return ipos
      .filter((ipo) => ipo.status?.toLowerCase() === "open")
      .map((ipo) => ({ ...ipo, _closeDate: parseDate(ipo.close) }))
      .filter((ipo) => ipo._closeDate !== null && ipo._closeDate.getTime() >= today.getTime())
      .sort((a, b) => a._closeDate - b._closeDate)
      .slice(0, 8);
  }, [ipos]);

  const getIPOType = (ipo) => {
    const name = (ipo.fullName || ipo.name || "").toLowerCase();
    return name.includes("sme") ? "SME" : "Mainboard";
  };

  return (
    <div className="py-6 px-4">
      <div className="max-w-screen-2xl mx-auto">

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {top8IPOs.map((ipo, i) => {
            const type = getIPOType(ipo);
            const typeColor =
              type === "SME"
                ? "bg-blue-100 text-blue-700 border border-blue-200"
                : "bg-green-100 text-green-700 border border-green-200";

            return (
              <motion.div
                key={ipo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="h-full"
              >
                <IPOCard ipo={ipo} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IPODashboard;
