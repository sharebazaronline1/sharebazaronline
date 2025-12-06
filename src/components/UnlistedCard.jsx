import { motion } from "framer-motion";

const UnlistedCard = ({ stock }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 
      border border-gray-100 w-full max-w-[340px] mx-auto flex flex-col h-full min-h-[280px]"
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Logo Circle */}
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-semibold">
            {stock?.name?.charAt(0)}
          </div>

          {/* Title */}
          <div>
            <h3 className="text-base font-semibold text-gray-800">
              {stock.name}
            </h3>
            {stock.fullName && (
              <p className="text-xs text-gray-500 truncate w-36">
                {stock.fullName}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-3 grid grid-cols-2 text-center text-xs">
        <div>
          <p className="text-gray-500">Share Price</p>
          <p className="font-bold text-gray-900 text-sm">₹{stock.price}</p>
        </div>
        <div>
          <p className="text-gray-500">Lot Size</p>
          <p className="font-bold text-gray-900 text-sm">{stock.lot || "—"}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between px-6 pb-5 gap-3 mt-auto">
        <button className="w-1/2 text-xs py-2 border rounded-xl border-gray-300 hover:bg-gray-50 transition">
          Buy
        </button>
        <button className="w-1/2 text-xs py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
          View
        </button>
      </div>
    </motion.div>
  );
};

export default UnlistedCard;
