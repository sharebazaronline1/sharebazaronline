// src/components/IPODashboard.jsx (Final - Fully responsive tabs, standard colors/fonts, clean professional style)

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

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

// Single IPO card – unchanged
export const IPOCard = ({ ipo }) => {
  const navigate = useNavigate();

  const type = ipo.type 
    ? ipo.type.toUpperCase() 
    : (ipo.fullName || ipo.name || "").toLowerCase().includes("sme")
      ? "SME"
      : "MAINBOARD";

  const typeColor =
    type === "SME"
      ? "bg-blue-100 text-blue-700 border border-blue-200"
      : "bg-green-100 text-green-700 border border-green-200";

  const isLive = isIPOActiveByDate(ipo.open, ipo.close);

  return (
    <div className="w-full min-w-[300px] flex-shrink-0 bg-white border border-gray-300 rounded-2xl shadow-sm">
      <div className="p-4 flex flex-col gap-2 h-full">
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

            <div className="flex items-center gap-2 mt-1 overflow-x-hidden">
              {isLive && (
                <span className="inline-flex items-center gap-1 px-2 text-xs rounded-full bg-red-50 text-red-700 border border-red-200 flex-shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-70"></span>
                    <span className="relative inline-flex h-full w-full rounded-full bg-red-600"></span>
                  </span>
                  Live
                </span>
              )}

              <span className={`inline-flex items-center px-0.5 text-xs rounded flex-shrink-0 ${typeColor}`}>
                {type}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-2 text-sm grid grid-cols-2 gap-y-1 gap-x-2">
          <span className="text-gray-600">Dates</span>
          <span className="font-medium">
            {formatDateRange(ipo.open, ipo.close)}
          </span>

          <span className="text-gray-600">Price</span>
          <span>₹{ipo.price}</span>

          <span className="text-gray-600">Lot</span>
          <span>{ipo.lot} shares</span>

          <span className="text-gray-600">Listing</span>
          <span>{ipo.listing || "TBA"}</span>
        </div>

        <div className="mt-auto flex gap-2">
          <button
            onClick={() => navigate("/how-to-apply-ipo")}
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

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Introduction",
      content: (
        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
          <p>
            An IPO (Initial Public Offering) marks a crucial milestone in a company’s lifecycle. It is the process through which a privately held company becomes publicly traded by offering its shares to the general public for the first time. In India, IPOs are regulated by SEBI and listed on NSE or BSE.
          </p>
          <p>
            For investors, IPOs offer a unique opportunity to invest in companies at an early public stage, potentially benefiting from listing gains and long-term growth. The Indian IPO market has evolved significantly with transparent processes, online applications, and faster allotments.
          </p>
        </div>
      ),
    },
    {
      name: "What is an IPO?",
      content: (
        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
          <p>
            An IPO is the first sale of a company’s equity shares to public investors. Before an IPO, ownership is limited to promoters, founders, private investors, and venture capitalists. Once listed, shares can be freely traded in the secondary market.
          </p>
          <h4 className="text-xl font-bold text-gray-900 mt-8">Key Objectives</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Raise capital for expansion</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Repay existing debt</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Fund new projects</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Provide exit to early investors</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Enhance visibility & brand trust</li>
          </ul>
          <h4 className="text-xl font-bold text-gray-900 mt-8">Market Evolution</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Strong SEBI regulation</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> UPI-ASBA digitization</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Rise in retail participation</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Growth of SME platforms</li>
          </ul>
        </div>
      ),
    },
    {
      name: "Types of IPOs",
      content: (
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Pricing Mechanism</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h5 className="text-lg font-semibold mb-4">Fixed Price Issue</h5>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Single fixed price</li>
                  <li>• Common in SME IPOs</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h5 className="text-lg font-semibold mb-4">Book Building (Most Common)</h5>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Price band (lower-upper)</li>
                  <li>• Final price based on demand</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">Share Offering</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h5 className="text-lg font-semibold mb-4">Fresh Issue</h5>
                <p className="text-sm text-gray-700">New shares • Funds to company</p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h5 className="text-lg font-semibold mb-4">Offer for Sale (OFS)</h5>
                <p className="text-sm text-gray-700">Existing shares sold • No funds to company</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Mainboard vs SME",
      content: (
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full min-w-[600px] bg-white rounded-2xl shadow-md border border-gray-200">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-medium">Feature</th>
                <th className="px-6 py-4 text-left font-medium">Mainboard IPO</th>
                <th className="px-6 py-4 text-left font-medium">SME IPO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Exchange</td>
                <td className="px-6 py-4">NSE/BSE</td>
                <td className="px-6 py-4">NSE SME / BSE SME</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Investment Size</td>
                <td className="px-6 py-4">Higher</td>
                <td className="px-6 py-4">Lower</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Risk</td>
                <td className="px-6 py-4">Moderate</td>
                <td className="px-6 py-4 text-red-600 font-medium">High</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Liquidity</td>
                <td className="px-6 py-4">High</td>
                <td className="px-6 py-4">Limited</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">Disclosure</td>
                <td className="px-6 py-4">Strict</td>
                <td className="px-6 py-4">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      name: "Investor Categories",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Retail (RII)</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Max ₹2 lakh</li>
              <li>≥35% reservation</li>
              <li>Lottery allotment</li>
              <li>Best for beginners</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">NII / HNI</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li> ₹2 lakh</li>
              <li>≥15% reservation</li>
              <li>Proportionate allotment</li>
              <li>For experienced investors</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">QIB</h4>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Institutions</li>
              <li>≥50% reservation</li>
              <li>Strong success indicator</li>
              <li>Professional focus</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      name: "Price, Lot & Size",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Price Band</h4>
              <p className="text-sm text-gray-700">Bidding range (e.g., ₹100–₹105)</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Lot Size</h4>
              <p className="text-sm text-gray-700">Minimum shares per application</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Issue Size</h4>
              <p className="text-sm text-gray-700">Total IPO value</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 text-center">
            <p className="text-sm text-gray-600 mb-4">Example:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div><p className="text-gray-600 text-xs">Price Band</p><p className="font-bold">₹200–₹210</p></div>
              <div><p className="text-gray-600 text-xs">Lot</p><p className="font-bold">70 shares</p></div>
              <div><p className="text-gray-600 text-xs">Min Investment</p><p className="font-bold text-green-600">₹14,700</p></div>
              <div><p className="text-gray-600 text-xs">Max Retail</p><p className="font-bold">~13 lots</p></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "How to Apply",
      content: (
        <div className="space-y-8 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Requirements</h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              <div className="bg-white rounded-xl py-4 px-2 shadow-sm"><p className="font-medium text-sm">Demat Account</p></div>
              <div className="bg-white rounded-xl py-4 px-2 shadow-sm"><p className="font-medium text-sm">Trading/ASBA</p></div>
              <div className="bg-white rounded-xl py-4 px-2 shadow-sm"><p className="font-medium text-sm">PAN Card</p></div>
              <div className="bg-white rounded-xl py-4 px-2 shadow-sm"><p className="font-medium text-sm">UPI ID</p></div>
              <div className="bg-white rounded-xl py-4 px-2 shadow-sm"><p className="font-medium text-sm">Bank Balance</p></div>
            </div>
          </div>
          <p className="text-base text-gray-700">
            Apply via broker apps or bank ASBA. UPI mandate required for retail.
          </p>
          <button
            onClick={() => navigate("/how-to-apply-ipo")}
            className="mx-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition"
          >
            Full Application Guide →
          </button>
        </div>
      ),
    },
    {
      name: "Taxation",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-lg font-medium text-gray-600 mb-4">Short-term Gains</p>
            <p className="text-5xl font-bold text-gray-900">15%</p>
            <p className="text-sm text-gray-500 mt-3">Holding &lt; 1 year</p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-lg font-medium text-gray-600 mb-4">Long-term Gains</p>
            <p className="text-5xl font-bold text-gray-900">10%</p>
            <p className="text-sm text-gray-500 mt-3">Above ₹1 lakh (Holding &gt; 1 year)</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-4 px-4 lg:py-8">
      <div className="w-full">
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {top8IPOs.length > 0 ? (
            top8IPOs.map((ipo, i) => (
              <motion.div
                key={ipo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="h-full"
              >
                <IPOCard ipo={ipo} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-4 py-20 text-center">
              <p className="text-2xl font-semibold text-gray-600">
                No Live IPOs Right Now
              </p>
              <p className="text-lg text-gray-500 mt-4">
                Check back soon for upcoming IPOs or explore Pre-IPO & Unlisted Shares.
              </p>
            </div>
          )}
        </div>

        {/* Mobile / Tablet Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
          {top8IPOs.length > 0 ? (
            <div className="flex gap-4 py-4 min-w-max">
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
          ) : (
            <div className="py-20 text-center px-8">
              <p className="text-2xl font-semibold text-gray-600">
                No Live IPOs Right Now
              </p>
              <p className="text-lg text-gray-500 mt-4">
                Check back soon for new opportunities.
              </p>
              <button
                onClick={() => navigate("/how-to-apply-ipo")}
                className="mt-8 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-lg"
              >
                Learn How to Apply for IPOs
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Responsive Tabbed Guide Section */}
      <div className="mt-12 lg:mt-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-black text-center text-gray-900 mb-10">
          IPO in India – Complete Guide
        </h2>

        {/* Responsive Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeTab === i
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content - Clean & Responsive */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 lg:p-10">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
};

export default IPODashboard;