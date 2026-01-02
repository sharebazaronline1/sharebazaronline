// src/components/BrokerAnalyzer.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const brokers = [
  {
    id: "zerodha",
    name: "Zerodha",
    img: "/images/zerodha.png",
    rating: 4.6,
    brokerage: "₹0 Delivery • ₹20 Intraday & F&O",
    equities: "₹0 (Free)",
    fo: "₹20 per order",
    openAccountUrl: "https://zerodha.com/open-account/",
  },
  {
    id: "angelone",
    name: "Angel One",
    img: "/images/angelone.png",
    rating: 4.5,
    brokerage: "₹0 Delivery • ₹20 Intraday & F&O",
    equities: "₹0 (Free)",
    fo: "₹20 per order",
    openAccountUrl: "https://angelone.in/open-account",
  },
  {
    id: "groww",
    name: "Groww",
    img: "/images/groww.png",
    rating: 4.4,
    brokerage: "₹20 or 0.05% (whichever lower)",
    equities: "₹20 or 0.05%",
    fo: "₹20 per order",
    openAccountUrl: "https://groww.in/signup",
  },
  {
    id: "upstox",
    name: "Upstox",
    img: "/images/upstox.jpg",
    rating: 4.3,
    brokerage: "₹20 or 0.05% (Delivery ₹20)",
    equities: "₹20 or 0.05%",
    fo: "₹20 per order",
    openAccountUrl: "https://upstox.com/open-account/",
  },
];

// Image Logo Component
const ImageLogo = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-10 h-10 rounded-lg object-contain"
    />
  );
};

const BrokerCard = ({ broker }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ImageLogo src={broker.img} alt={broker.name} />
            <h3 className="text-lg font-bold text-gray-900">{broker.name}</h3>
          </div>
        
        </div>
      </div>

      {/* Info Rows */}
      <div className="px-5 py-4 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Brokerage</span>
          <span className="font-medium text-gray-900 text-right max-w-[140px] leading-tight">
            {broker.brokerage}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Equities</span>
          <span
            className={`font-bold ${
              broker.equities.includes("Free") ? "text-green-600" : "text-gray-900"
            }`}
          >
            {broker.equities}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Futures/Options</span>
          <span className="font-medium text-gray-900">{broker.fo}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-5 pb-5 pt-2 flex gap-3">
        <button
          onClick={() =>
            window.open(broker.openAccountUrl, "_blank", "noopener,noreferrer")
          }
          className="flex-1 py-2.5 text-sm font-semibold text-gray-100 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
        >
          Open Now
        </button>
        <button
          onClick={() => navigate(`/broker/${broker.id}`)}
          className="flex-1 py-2.5 text-sm font-semibold text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          View More
        </button>
      </div>
    </div>
  );
};

const BrokerAnalyzer = () => {
  return (
    <section className="py-10 px-4 ">
      <div className="max-w-full mx-auto">  
        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide -mx-4 px-4 pb-6">
          <div className="flex gap-3">
            {brokers.map((broker) => (
              <div key={broker.id} className="w-80 flex-shrink-0">
                <BrokerCard broker={broker} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-3">
          {brokers.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrokerAnalyzer;
