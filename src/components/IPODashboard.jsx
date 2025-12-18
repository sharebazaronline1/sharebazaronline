// src/components/IPODashboard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const LetterAvatar = ({ name }) => (
  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-800 text-white font-bold text-sm">
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

const isIPOActiveByDate = (open, close) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const o = new Date(open);
  const c = new Date(close);
  if (isNaN(o) || isNaN(c)) return false;

  return o <= today && today <= c;
};

// Single IPO card – used on both mobile & desktop
export const IPOCard = ({ ipo }) => {
  const navigate = useNavigate();

  const type = (ipo.fullName || ipo.name || "")
    .toLowerCase()
    .includes("sme")
    ? "SME"
    : "Mainboard";

  const typeColor =
    type === "SME"
      ? "bg-blue-100 text-blue-700 border border-blue-200"
      : "bg-green-100 text-green-700 border border-green-200";

  const isLive = isIPOActiveByDate(ipo.open, ipo.close);

  return (
    <div className="w-full min-w-[300px] flex-shrink-0 bg-white border border-gray-300 rounded-2xl shadow-sm">
      {/* Fixed minimum width to 300px to prevent shrinking on mobile/tablet */}
      <div className="p-2 flex flex-col gap-2 h-full">
        <div className="flex gap-3 items-start">
          {ipo.logo ? (
            <img
              src={ipo.logo}
              alt={ipo.name}
              className="w-12 h-12 rounded-xl object-contain border bg-gray-50 p-1"
            />
          ) : (
            <LetterAvatar name={ipo.name} />
          )}

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base text-gray-900 truncate">
              {ipo.name}
            </h3>
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {ipo.fullName || "IPO"}
            </p>

            {/* Badges – increased size and removed flex-wrap to prevent line break */}
            <div className="flex items-center gap-2 mt-1 overflow-x-hidden">
              {/* overflow-x-hidden ensures badge doesn't get cut off */}
              {isLive && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-red-50 text-red-700 border border-red-200 flex-shrink-0">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70"></span>
                    <span className="relative inline-flex h-full w-full rounded-full bg-red-600"></span>
                  </span>
                  Live
                </span>
              )}

              <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full flex-shrink-0 ${typeColor}`}>
                {type}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 text-xs grid grid-cols-2 gap-y-1 gap-x-2">
          <span className="text-gray-600">Dates</span>
          <span className="font-medium">
            {formatDateRange(ipo.open, ipo.close)}
          </span>

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
      .map((ipo) => ({
        ...ipo,
        _openDate: parseDate(ipo.open),
        _closeDate: parseDate(ipo.close),
      }))
      .filter(
        (ipo) =>
          ipo._openDate &&
          ipo._closeDate &&
          ipo._openDate <= today &&
          today <= ipo._closeDate
      )
      .sort((a, b) => a._closeDate - b._closeDate)
      .slice(0, 8);
  }, [ipos]);

  return (
    <div className="py-2 px-2">
      <div className="w-full">
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-3.5">
          {top8IPOs.map((ipo, i) => (
            <motion.div
              key={ipo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="h-full"
            >
              <IPOCard ipo={ipo} />
            </motion.div>
          ))}
        </div>

        {/* Mobile / Tablet Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
          <div className="flex gap-3 py-4 min-w-max">
            {top8IPOs.map((ipo, i) => (
              <motion.div
                key={ipo.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <IPOCard ipo={ipo} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPODashboard;