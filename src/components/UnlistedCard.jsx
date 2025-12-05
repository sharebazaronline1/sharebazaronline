// components/UnlistedCard.jsx
import { motion } from 'framer-motion';

const UnlistedCard = ({ stock }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden w-full max-w-xs mx-auto"
    >
      {/* Header - Logo + Name */}
      <div className="px-5 py-4 bg-white flex items-center gap-3 border-b border-gray-200">
        {/* Company Logo Circle */}
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-bold">
          {stock.name.charAt(0)}
        </div>
        <h3 className="font-bold text-lg tracking-tight">{stock.name}</h3>
      </div>

      {/* Body - Price & Lot Size */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm font-medium">Share Price:</span>
          <span className="font-bold text-gray-900 text-sm">₹{stock.price}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm font-medium">Lot Size:</span>
          <span className="font-bold text-gray-900 text-sm">{stock.lot || '-'}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-5 pb-5 flex gap-3">
        <button className="flex-1 px-5 sm:px-6 py-2.5 bg-white border border-purple-200 text-blue-700 rounded-xl font-medium text-sm hover:bg-purple-50 transition">
          Buy Now
        </button>
        <button className="flex-1 px-6 sm:px-7 py-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-700 shadow transition">
          View 
        </button>
      </div>
    </motion.div>
  );
};

export default UnlistedCard;
