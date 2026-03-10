// src/components/BrokerAnalyzer.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, AlertTriangle, BarChart3, DollarSign,HelpCircle, Zap, Star } from "lucide-react";

const brokerTypes = [
  {
    title: "Full-Service Brokers",
    description: "Offer complete support including research, personalized advice, portfolio management, and dedicated relationship managers. Ideal for investors who want guidance.",
    features: ["Investment advice", "Research reports", "Portfolio management", "Relationship manager"],
    brokerage: "Usually 0.1% – 0.5% or higher",
    color: "indigo",
  },
  {
    title: "Discount Brokers",
    description: "Provide low-cost online trading platforms with minimal advisory services. Best suited for self-directed and active traders.",
    features: ["Fast trading platform", "Ultra-low brokerage", "No advisory", "Self-directed trading"],
    brokerage: "₹0 – ₹20 per order or flat fee",
    color: "emerald",
  },
];

const brokers = [
  { name: "ICICI Securities", type: "Full Service", rating: 4.2, logo: "./images/brokers/icic.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 700, delivery: "0.55%", intraday: "0.275%" } },
  { name: "HDFC Securities", type: "Full Service", rating: 4.0, logo: "https://via.placeholder.com/64?text=HDFC", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 750, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Kotak Securities", type: "Full Service", rating: 4.1, logo: "./images/brokers/kotak.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 600, delivery: "0.49%", intraday: "0.049%" } },
  { name: "Motilal Oswal", type: "Full Service", rating: 4.3, logo: "https://via.placeholder.com/64?text=Motilal", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 899, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Mirae Asset Sharekhan", type: "Full Service", rating: 4.0, logo: "https://via.placeholder.com/64?text=Sharekhan", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 400, delivery: "0.50%", intraday: "0.10%" } },
  { name: "Axis Securities", type: "Full Service", rating: 4.1, logo: "https://via.placeholder.com/64?text=Axis", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 650, delivery: "0.50%", intraday: "0.05%" } },
  { name: "SBICAP Securities", type: "Full Service", rating: 3.9, logo: "https://via.placeholder.com/64?text=SBICAP", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 750, delivery: "0.50%", intraday: "0.08%" } },
  { name: "Geojit Financial Services", type: "Full Service", rating: 4.0, logo: "https://via.placeholder.com/64?text=Geojit", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 400, amc: 400, delivery: "0.30%", intraday: "0.03%" } },
  { name: "Aditya Birla Money", type: "Full Service", rating: 3.8, logo: "https://via.placeholder.com/64?text=Aditya", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 310, amc: 420, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Religare Broking", type: "Full Service", rating: 3.7, logo: "https://via.placeholder.com/64?text=Religare", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 600, delivery: "0.50%", intraday: "0.05%" } },
  { name: "IIFL Securities", type: "Full Service", rating: 3.9, logo: "https://via.placeholder.com/64?text=IIFL", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 700, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Nuvama Wealth Management", type: "Full Service", rating: 4.2, logo: "https://via.placeholder.com/64?text=Nuvama", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "0.30%", intraday: "0.03%" } },
  { name: "Groww", type: "Discount", rating: 4.5, logo: "./images/brokers/groww.png", segments: ["Equity", "F&O", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹20 or 0.05%", intraday: "₹20 or 0.05%" } },
  { name: "Zerodha", type: "Discount", rating: 4.6, logo: "/images/brokers/zerodha.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 200, amc: 300, delivery: "₹0", intraday: "₹20 or 0.03%" } },
  { name: "Angel One", type: "Discount", rating: 4.4, logo: "https://via.placeholder.com/64?text=Angel", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 240, delivery: "₹0", intraday: "₹20 or 0.03%" } },
  { name: "Upstox", type: "Discount", rating: 4.5, logo: "/images/brokers/upstox.jpg", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹20 or 0.05%" } },
  { name: "5paisa Capital", type: "Discount", rating: 4.2, logo: "https://via.placeholder.com/64?text=5paisa", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 45, delivery: "₹20", intraday: "₹20" } },
  { name: "Paytm Money", type: "Discount", rating: 4.3, logo: "https://via.placeholder.com/64?text=Paytm", segments: ["Equity", "F&O", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹15 or 0.05%" } },
  { name: "Fyers", type: "Discount", rating: 4.4, logo: "https://via.placeholder.com/64?text=Fyers", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹20" } },
  { name: "Dhan", type: "Discount", rating: 4.5, logo: "https://via.placeholder.com/64?text=Dhan", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹20" } },
  { name: "Alice Blue", type: "Discount", rating: 4.3, logo: "https://via.placeholder.com/64?text=Alice", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹15", intraday: "₹15" } },
  { name: "SAS Online", type: "Discount", rating: 4.1, logo: "https://via.placeholder.com/64?text=SAS", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹9", intraday: "₹9" } },
  { name: "TradeSmart", type: "Discount", rating: 4.0, logo: "https://via.placeholder.com/64?text=TradeSmart", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹15", intraday: "₹15" } },
  { name: "Choice Broking", type: "Full Service", rating: 3.9, logo: "https://via.placeholder.com/64?text=Choice", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 400, delivery: "0.30%", intraday: "0.03%" } },
  { name: "Samco Securities", type: "Discount", rating: 4.2, logo: "https://via.placeholder.com/64?text=Samco", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 400, delivery: "₹20", intraday: "₹20" } },
];

const faqs = [
  { q: "What is a stock broker in the stock market?", a: "A stock broker is a SEBI-registered intermediary that provides access to stock exchanges (NSE/BSE) so investors can buy and sell shares, derivatives, and other securities." },
  { q: "Why do investors need a stock broker for trading?", a: "Direct access to exchanges is not allowed for individuals. Brokers act as a bridge by providing trading platforms, order execution, and compliance services." },
  { q: "What are brokerage charges in stock trading?", a: "Brokerage is the commission paid to the broker for executing buy or sell orders. It can be flat per order or a percentage of trade value." },
  { q: "How are brokerage charges calculated?", a: "Charges are usually: flat fee per trade (₹10–₹20), percentage of turnover (0.01%–0.50%), or zero for delivery trades in many discount brokers." },
  { q: "What are the main types of stock brokers in India?", a: "There are two main types: Full-service brokers (advice + research) and Discount brokers (low-cost platforms, no advice)." },
  { q: "What services do full-service brokers provide?", a: "They offer personalized advice, research reports, portfolio management, IPO applications, mutual funds, and relationship manager support." },
  { q: "What accounts are required to start trading?", a: "You need three linked accounts: Trading account, Demat account, and Bank account." },
  { q: "How can I open a trading account online?", a: "Most brokers allow 100% online account opening using Aadhaar e-KYC, PAN, and bank proof in 10–30 minutes." },
  { q: "Is there any minimum investment to start trading?", a: "No minimum is required by brokers — you can start with the price of one share (subject to lot size for some stocks)." },
  { q: "What is DP (Depository Participant) charge?", a: "DP charges are levied by the depository (CDSL/NSDL) when shares are sold from your Demat account. Usually ₹10–₹25 + GST per scrip." },
  { q: "What is AMC in Demat account?", a: "Annual Maintenance Charge (AMC) is the yearly fee for maintaining your Demat account. Many discount brokers now offer zero AMC." },
  { q: "How do brokers earn money?", a: "Main sources: brokerage fees, account opening/AMC charges, interest on margin funding, premium advisory, and transaction charges." },
  { q: "Which broker is best for beginners in India?", a: "Zerodha, Groww, and Angel One are popular among beginners due to simple UI, zero delivery brokerage, and educational content." },
  { q: "Which broker is best for active traders?", a: "Zerodha (Kite), Dhan, Fyers, and Upstox are preferred for fast execution, low latency, and advanced charting." },
  { q: "Which broker is best if I want research and advice?", a: "ICICI Direct, Motilal Oswal, HDFC Securities, and Kotak Securities offer strong research and advisory services." },
  { q: "Are discount brokers safe?", a: "Yes, all SEBI-registered discount brokers are safe. Funds and securities are held with banks and depositories, not with the broker." },
];

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(full)].map((_, i) => (
        <Star key={`f-${i}`} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
      {half && <Star size={14} className="fill-yellow-400/50 text-yellow-400" />}
      {[...Array(empty)].map((_, i) => (
        <Star key={`e-${i}`} size={14} className="text-gray-300" />
      ))}
      <span className="ml-1.5 text-xs font-medium text-gray-600">{rating}</span>
    </div>
  );
};

const AdBanner = () => (
  <div className="w-full flex justify-center py-4">
    <div className="bg-gray-50 border border-gray-200 rounded-xl w-full max-w-5xl h-24 flex items-center justify-center text-gray-400 text-sm">
      Advertisement
    </div>
  </div>
);

const BrokerAnalyzer = () => {
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const visibleFaqs = showAllFAQs ? faqs : faqs.slice(0, 10);

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">

        {/* Banner */}
       

        {/* Introduction */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Stock Brokers</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
A broker is a person or company that executes buy and sell orders in financial markets on behalf of investors. Brokers provide access to exchanges and charge a brokerage fee for their services.
In India, brokers operate under regulation from the Securities and Exchange Board of India and allow trading on exchanges such as the National Stock Exchange of India and BSE Limited.
They also provide access to a Demat account, which stores securities electronically through depositories like National Securities Depository Limited and Central Depository Services Limited.
          </p>
        </section>

        {/* Brokerage Charges */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Brokerage Charges</h3>
          </div>
          <p className="text-gray-700">
Brokerage charges are the fees a broker charges for executing trades (buying or selling financial assets).
You pay brokerage whenever you trade:
Stocks,
Futures & Options (F&O),
Commodities,
Currency derivatives,
ETFs and sometimes mutual funds.
Brokerage is usually charged per trade or per order.
          </p>
        </section>

        {/* Broker Types */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Types of Brokers</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {brokerTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-indigo-200 transition-colors"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{type.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <ul className="text-sm text-gray-600 space-y-1.5 pl-5 list-disc">
                  {type.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <p className="mt-4 text-sm font-medium text-indigo-600">
                  Typical Brokerage: {type.brokerage}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AdBanner />

        {/* Brokers Grid */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Popular Brokers (2025)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {brokers.map((broker, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-all flex flex-col h-full"
              >
                <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                  <img
                    src={broker.logo}
                    alt={broker.name}
                    className="w-10 h-10 object-contain rounded-md border bg-white"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-gray-900">{broker.name}</h4>
                    <p className="text-xs text-gray-500">{broker.type}</p>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col gap-3 text-sm">
                  <StarRating rating={broker.rating} />

                  <div>
                    <p className="font-medium text-gray-700 mb-1">Segments</p>
                    <div className="flex flex-wrap gap-1.5">
                      {broker.segments.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-700 mb-1">Charges</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>Opening: ₹{broker.charges.opening}</li>
                      <li>AMC: ₹{broker.charges.amc}/yr</li>
                      <li>Delivery: {broker.charges.delivery}</li>
                      <li>Intraday: {broker.charges.intraday}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdBanner />

        {/* Recommendations */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Best for Beginners", brokers: ["Zerodha", "Groww", "Angel One"], color: "blue" },
              { title: "Best for Traders", brokers: ["Zerodha Kite", "Dhan", "Fyers"], color: "blue" },
              { title: "Best Advisory", brokers: ["ICICI Direct", "Motilal Oswal", "HDFC Sec"], color: "blue" },
            ].map((rec, idx) => (
              <div
                key={idx}
                className={`bg-${rec.color}-50 border border-${rec.color}-100 rounded-xl p-5 hover:border-${rec.color}-300 transition`}
              >
                <h4 className={`text-lg font-semibold text-${rec.color}-800 mb-3`}>{rec.title}</h4>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  {rec.brokers.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${rec.color}-500`}></div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compact Warning Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800 font-medium">
              Stock market investments carry market risk. Choose a SEBI-registered broker wisely.
            </p>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition"
          >
            Open Account
          </button>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">FAQs</h3>
          </div>
          <div className="space-y-2">
            {visibleFaqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => toggle(i)}
                  className="w-full py-3 flex items-center justify-between text-left hover:bg-gray-50 transition"
                >
                  <span className="font-medium text-gray-800">{faq.q}</span>
                  {openIndex === i ? (
                    <ChevronUp size={18} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500" />
                  )}
                </button>
                {openIndex === i && (
                  <p className="pb-4 text-sm text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
          {!showAllFAQs && faqs.length > 10 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllFAQs(true)}
                className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
              >
                Show all FAQs →
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};

export default BrokerAnalyzer;