// src/components/UnlistedCard.jsx
import { motion } from "framer-motion";

const UnlistedCard = ({ stock }) => {
 
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full min-w-[300px] w-[300px] flex-shrink-0 snap-center"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-4">
          {/* Company Logo with Fallback */}
          <div className="relative w-14 h-14 bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm flex-shrink-0">
           
              <img
                src={stock.logo}
                alt={`${stock.name} logo`}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  // Hide broken image and show fallback
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
   

            {/* Fallback: First letter (always rendered, hidden if image loads) */}
            <div className={`absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-xl bg-gray-50 ${stock.logo ? 'hidden' : 'flex'}`}>
              {stock?.name?.charAt(0)}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg leading-tight truncate">
              {stock.name}
            </h3>
            {stock.fullName && (
              <p className="text-sm text-gray-500 mt-1 truncate">
                {stock.fullName}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6 space-y-5 text-sm flex-1">
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Share Price</span>
            <span className="font-semibold text-gray-900">₹{stock.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Lot Size</span>
            <span className="font-semibold text-gray-900">{stock.lot || "—"}</span>
          </div>
          {stock.minInvestment && (
            <div className="flex justify-between">
              <span className="text-gray-600">Min. Investment</span>
              <span className="font-semibold text-gray-900">₹{stock.minInvestment}</span>
            </div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="p-6 pt-4 border-t border-gray-100 flex gap-3">
        <button className="flex-1 py-3 text-sm font-semibold border border-gray-300 text-gray-800 rounded-xl hover:bg-gray-50 transition">
          Buy
        </button>
        <button className="flex-1 py-3 text-sm font-semibold bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default UnlistedCard;