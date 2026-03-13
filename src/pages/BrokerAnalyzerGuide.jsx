// src/components/BrokerAnalyzerGuide.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  BarChart3,
  DollarSign,
  HelpCircle,
  Zap,
  Star,
} from "lucide-react";

const brokerTypes = [
  {
    title: "Full-Service Brokers",
    description:
      "Offer complete support including research, personalized advice, portfolio management, and dedicated relationship managers.",
    features: ["Investment advice", "Research reports", "Portfolio management", "Relationship manager"],
    brokerage: "Usually 0.1% – 0.5% or higher",
    color: "indigo",
  },
  {
    title: "Discount Brokers",
    description:
      "Provide low-cost online trading platforms with minimal advisory services. Best for self-directed traders.",
    features: ["Fast trading platform", "Ultra-low brokerage", "No advisory", "Self-directed trading"],
    brokerage: "₹0 – ₹20 per order or flat fee",
    color: "emerald",
  },
];

const brokers = [
  { name: "Zerodha", type: "Discount", rating: 4.6, logo: "/images/brokers/zerodha.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 200, amc: 300, delivery: "₹0", intraday: "₹20 or 0.03%" } },
  { name: "Fyers", type: "Discount", rating: 4.4, logo: "/images/brokers/fyers.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹20" } },
  { name: "Upstox", type: "Discount", rating: 4.5, logo: "/images/brokers/upstox.jpg", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹20 or 0.05%" } },
  { name: "ICICI Securities", type: "Full Service", rating: 4.2, logo: "/images/brokers/icic.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 700, delivery: "0.55%", intraday: "0.275%" } },
  { name: "HDFC Securities", type: "Full Service", rating: 4.0, logo: "/images/brokers/hdfc.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 750, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Kotak Securities", type: "Full Service", rating: 4.1, logo: "/images/brokers/kotak.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 600, delivery: "0.49%", intraday: "0.049%" } },
  { name: "Motilal Oswal", type: "Full Service", rating: 4.3, logo: "/images/brokers/motilal.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 899, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Mirae Asset Sharekhan", type: "Full Service", rating: 4.0, logo: "/images/brokers/sharekhan.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 400, delivery: "0.50%", intraday: "0.10%" } },
  { name: "Axis Securities", type: "Full Service", rating: 4.1, logo: "/images/brokers/axis.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 650, delivery: "0.50%", intraday: "0.05%" } },
  { name: "SBICAP Securities", type: "Full Service", rating: 3.9, logo: "/images/brokers/sbicap.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 750, delivery: "0.50%", intraday: "0.08%" } },
  { name: "Geojit Financial Services", type: "Full Service", rating: 4.0, logo: "/images/brokers/geojit.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 400, amc: 400, delivery: "0.30%", intraday: "0.03%" } },
  { name: "Aditya Birla Money", type: "Full Service", rating: 3.8, logo: "/images/brokers/aditya-birla.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 310, amc: 420, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Religare Broking", type: "Full Service", rating: 3.7, logo: "/images/brokers/religare.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 600, delivery: "0.50%", intraday: "0.05%" } },
  { name: "IIFL Securities", type: "Full Service", rating: 3.9, logo: "/images/brokers/iifl.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 700, delivery: "0.50%", intraday: "0.05%" } },
  { name: "Nuvama Wealth Management", type: "Full Service", rating: 4.2, logo: "/images/brokers/nuvama.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "0.30%", intraday: "0.03%" } },
  { name: "Groww", type: "Discount", rating: 4.5, logo: "/images/brokers/groww.png", segments: ["Equity", "F&O", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹20 or 0.05%", intraday: "₹20 or 0.05%" } },
  { name: "Angel One", type: "Discount", rating: 4.4, logo: "/images/brokers/angel-one.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 240, delivery: "₹0", intraday: "₹20 or 0.03%" } },
  { name: "5paisa Capital", type: "Discount", rating: 4.2, logo: "/images/brokers/5paisa.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 45, delivery: "₹20", intraday: "₹20" } },
  { name: "Paytm Money", type: "Discount", rating: 4.3, logo: "/images/brokers/paytm-money.png", segments: ["Equity", "F&O", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹15 or 0.05%" } },
  { name: "Dhan", type: "Discount", rating: 4.5, logo: "/images/brokers/dhan.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹0", intraday: "₹20" } },
  { name: "Alice Blue", type: "Discount", rating: 4.3, logo: "/images/brokers/alice-blue.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹15", intraday: "₹15" } },
  { name: "SAS Online", type: "Discount", rating: 4.1, logo: "/images/brokers/sas-online.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹9", intraday: "₹9" } },
  { name: "TradeSmart", type: "Discount", rating: 4.0, logo: "/images/brokers/tradesmart.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 0, delivery: "₹15", intraday: "₹15" } },
  { name: "Choice Broking", type: "Full Service", rating: 3.9, logo: "/images/brokers/choice.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 400, delivery: "0.30%", intraday: "0.03%" } },
  { name: "Samco Securities", type: "Discount", rating: 4.2, logo: "/images/brokers/samco.png", segments: ["Equity", "F&O", "Commodity", "Currency"], charges: { opening: 0, amc: 400, delivery: "₹20", intraday: "₹20" } },
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
    <div className="flex items-center gap-0.5 justify-center md:justify-start">
      {[...Array(full)].map((_, i) => (
        <Star key={`f-${i}`} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
      {half && <Star size={16} className="fill-yellow-400/50 text-yellow-400" />}
      {[...Array(empty)].map((_, i) => (
        <Star key={`e-${i}`} size={16} className="text-gray-300" />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-600">{rating}</span>
    </div>
  );
};

const AdBanner = () => (
  <div className="w-full flex justify-center py-4">
    <div className="bg-gray-50 border border-gray-200 rounded-xl w-full max-w-5xl h-20 flex items-center justify-center text-gray-400 text-sm">
      Advertisement
    </div>
  </div>
);

const BrokerAnalyzerGuide = () => {
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const visibleFaqs = showAllFAQs ? faqs : faqs.slice(0, 10);

  return (
   <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-screen relative left-1 -translate-x-1/2 -mx-8">
          <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] rounded overflow-hidden lg:mr-12">
            <img
              src="images/brokers/brokerguide.png"
              alt="Broker Analysis"
              className="absolute inset-0 w-full h-full object-top object-center"
            />
          </div>
        </div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-4 mt-4">
  

 
        {/* Introduction */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Stock Brokers </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A stock broker is a SEBI-registered intermediary that gives investors access to NSE and BSE for trading shares, derivatives, commodities, and more. They provide trading platforms and Demat account services via NSDL/CDSL.
          </p>
        </section>

        {/* Brokerage Charges */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Brokerage Charges</h3>
          </div>
          <p className="text-gray-700">
            Brokerage is the fee paid to the broker for executing trades. It applies to equity, F&O, commodities, currency, ETFs, and sometimes mutual funds.
          </p>
        </section>

        {/* Types of Brokers */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Types of Brokers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {brokerTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:border-indigo-200 transition-colors"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{type.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-600 space-y-2 mx-auto max-w-xs list-disc list-inside">
                  {type.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-medium text-indigo-600">
                  Typical Brokerage: {type.brokerage}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AdBanner />

        {/* Brokers – Horizontal Layout: Segments last, Charges at end */}
        <section className="space-y-4">
          {brokers.map((broker, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden w-full hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row items-start p-6 md:p-8 gap-6 md:gap-10">
                {/* Left: Logo + Name + Type + Rating */}
                <div className="flex flex-col items-center md:items-start min-w-[180px] md:min-w-[220px] text-center md:text-left">
                  <img
                    src={broker.logo}
                    alt={`${broker.name} logo`}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl border border-gray-200 shadow-md mb-4 bg-white p-2"
                  />
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{broker.name}</h4>
                  <p className="text-sm md:text-base text-gray-600 mb-3">{broker.type} Broker</p>
                  <StarRating rating={broker.rating} />
                </div>

                {/* Right: Segments (last) + Charges (at end) */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  {/* Trading Segments – moved to last position */}
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3 text-lg">Trading Segments</h5>
                    <div className="flex flex-wrap gap-2.5">
                      {broker.segments.map((seg, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-200 shadow-sm"
                        >
                          {seg}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Indicative Charges – at the very end */}
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3 text-lg">Indicative Charges</h5>
                    <ul className="text-sm text-gray-700 space-y-2.5">
                      <li className="flex justify-between">
                        <span className="font-medium">Account Opening:</span>
                        <span className="font-semibold">₹{broker.charges.opening}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">AMC:</span>
                        <span className="font-semibold">₹{broker.charges.amc}/year</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Equity Delivery:</span>
                        <span className="font-semibold">{broker.charges.delivery}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="font-medium">Equity Intraday:</span>
                        <span className="font-semibold">{broker.charges.intraday}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <AdBanner />

        {/* Recommendations */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Our Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Best for Beginners",
                brokers: [
                  { name: "Zerodha", logo: "/images/brokers/zerodha.png" },
                  { name: "Groww", logo: "/images/brokers/groww.png" },
                  { name: "Angel One", logo: "/images/brokers/angel-one.png" },
                ],
              },
              {
                title: "Best for Traders",
                brokers: [
                  { name: "Zerodha", logo: "/images/brokers/zerodha.png" },
                  { name: "Dhan", logo: "/images/brokers/dhan.png" },
                  { name: "Fyers", logo: "/images/brokers/fyers.png" },
                ],
              },
              {
                title: "Best Advisory",
                brokers: [
                  { name: "ICICI Direct", logo: "/images/brokers/icici-direct.png" },
                  { name: "Motilal Oswal", logo: "/images/brokers/motilal.png" },
                  { name: "HDFC Securities", logo: "/images/brokers/hdfc.png" },
                ],
              },
            ].map((rec, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center hover:border-gray-300 transition"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{rec.title}</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {rec.brokers.map((b, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <img
                        src={b.logo}
                        alt={b.name}
                        className="w-12 h-12 object-contain rounded-lg border bg-white mb-1"
                      />
                      <span className="text-xs font-medium text-gray-700">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compact Warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <p className="text-sm text-amber-800 font-medium">
              Stock market investments carry market risk. Choose wisely.
            </p>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition shadow-lg"
          >
            Open Account
          </button>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
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
                  <span className="font-medium text-gray-800 text-sm">{faq.q}</span>
                  {openIndex === i ? (
                    <ChevronUp size={16} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={16} className="text-gray-500" />
                  )}
                </button>
                {openIndex === i && (
                  <p className="pb-4 text-sm text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
          {!showAllFAQs && faqs.length > 10 && (
            <div className="text-center mt-4">
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

export default BrokerAnalyzerGuide;