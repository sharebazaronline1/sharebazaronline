// src/components/UnlistedCard.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const LetterAvatar = ({ name }) => (
  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gray-800 text-white font-bold text-lg">
    {name?.charAt(0)?.toUpperCase() || "U"}
  </div>
);

const UnlistedCard = ({ stock }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        bg-white rounded-2xl
        border border-gray-300 hover:border-gray-400 hover:shadow-md
        transition
        flex flex-col
        h-full
       w-full sm:w-[300px]
        flex-shrink-0
        snap-start
      "
    >
      {/* TOP */}
      <div className="px-3 sm:px-5 pt-3 sm:pt-5 flex gap-3 items-start"> {/* Increased gap-2 → gap-3 for better internal spacing */}
        <div className="w-12 h-12 flex-shrink-0">
          {!imgError && stock.logo ? (
            <img
              src={stock.logo}
              alt={`${stock.name} logo`}
             className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-contain border bg-gray-50 p-1"
              onError={() => setImgError(true)}
            />
          ) : (
            <LetterAvatar name={stock.name} />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base text-gray-900 leading-tight truncate">
            {stock.name}
          </h3>
          {stock.fullName && (
            <p className="text-xs text-gray-500 truncate">
              {stock.fullName}
            </p>
          )}
        </div>
      </div>

      {/* STATS */}
 <div className="px-3 sm:px-5 mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[13px] sm:text-sm">
  <div className="text-gray-600">Share Price</div>

  <div>
    ₹
    {stock.price
      ? Number(stock.price).toLocaleString("en-IN")
      : "—"}
  </div>

  <div className="text-gray-600">Lot Size</div>

  <div>
    {stock.lotSize ||
      stock.minLotSize ||
      stock.lot ||
      "—"}
  </div>

  <div className="text-gray-600">Min Invest</div>

  <div>
    ₹
    {stock.minInvestment
      ? Number(stock.minInvestment).toLocaleString("en-IN")
      : "—"}
  </div>

  <div className="text-gray-600">Market</div>

  <div>{stock.market || "Unlisted"}</div>
</div>

      {/* ACTIONS */}
    <div className="px-3 sm:px-5 mt-auto pt-3 pb-3 sm:pb-5 flex gap-2">
        <button className="flex-1 py-2 text-xs sm:text-sm font-semibold border border-gray-300 rounded-xl hover:bg-gray-100 transition">
          Buy
        </button>
        <button className="flex-1 py-2 text-xs sm:text-sm font-semibold bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default UnlistedCard;