// components/IPOCard.jsx
const IPOCard = ({ ipo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={ipo.logo || "/placeholder-logo.svg"}
              alt={ipo.name}
              className="w-12 h-12 object-contain"
              onError={(e) => (e.target.src = "/placeholder-logo.svg")}
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{ipo.name} IPO</h3>
              {ipo.fullName && (
                <p className="text-xs text-gray-500 mt-0.5">{ipo.fullName}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {ipo.type === "mainboard" && (
              <span className="bg-green-700 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                Mainboard
              </span>
            )}
            {ipo.status === "live" && (
              <span className="bg-red-100 text-red-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                Live
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Offer Date */}
      <div className="px-6 py-4">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Offer Date:</span>{" "}
          <span className="font-semibold text-gray-900">
            {ipo.open} - {ipo.close}
          </span>
        </p>
      </div>

      {/* Stats Row */}
      <div className="px-6 pb-5">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xs text-gray-500">Offer Price</p>
            <p className="font-bold text-gray-900 mt-1">₹{ipo.price}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Lot Size</p>
            <p className="font-bold text-gray-900 mt-1">{ipo.lot}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Subscription</p>
            <p className="font-bold text-orange-600 mt-1 text-sm">
              {ipo.subscription || "—"}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Exp. Premium</p>
            <p className="font-bold text-green-600 mt-1 text-sm">
              {ipo.premium || "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-6 flex justify-end gap-3">
        <button className="px-6 py-2.5 border border-purple-200 text-blue-700 rounded-xl hover:bg-purple-50 font-medium text-sm transition">
          View
        </button>
        <button className="px-7 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium text-sm shadow transition">
          Apply
        </button>
      </div>
    </div>
  );
};

export default IPOCard;