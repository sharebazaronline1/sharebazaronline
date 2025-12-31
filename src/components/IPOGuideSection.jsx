// src/components/IPOGuideSection.jsx (Added FAQ Tab with Clean, Responsive Accordion)

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "What is an IPO in simple terms?", a: "An IPO (Initial Public Offering) is when a company sells its shares to the public for the first time and gets listed on NSE or BSE." },
  { q: "Is IPO investment safe?", a: "IPO investment carries market risk. Safety depends on company fundamentals, valuation, and market conditions." },
  { q: "How can I apply for an IPO in India?", a: "You can apply through broker apps or bank ASBA using a UPI ID linked to your bank account." },
  { q: "What is IPO GMP today?", a: "IPO GMP is the unofficial premium at which shares trade in the grey market before listing." },
  { q: "Does high GMP guarantee listing gains?", a: "No. GMP only reflects market sentiment and does not guarantee profits." },
  { q: "How is IPO allotment decided?", a: "Allotment depends on subscription levels. In oversubscription, retail allotment is done via lottery." },
  { q: "How to check IPO allotment status?", a: "You can check using PAN or application number on registrar websites like KFintech or Link Intime." },
  { q: "What happens if I don’t get IPO allotment?", a: "Your blocked funds are released automatically." },
  { q: "What is IPO price band?", a: "Price band is the range within which investors can bid during the IPO." },
  { q: "What is IPO lot size?", a: "Lot size is the minimum number of shares required to apply for an IPO." },
  { q: "What is the minimum investment in IPO?", a: "Minimum investment equals lot size × upper price band." },
  { q: "Can I apply for multiple IPOs at the same time?", a: "Yes, if IPO dates overlap and you meet fund requirements." },
  { q: "Can I apply multiple times for the same IPO?", a: "No. One PAN is allowed per category." },
  { q: "What is SME IPO?", a: "SME IPOs are offerings by small and medium enterprises listed on NSE SME or BSE SME platforms." },
  { q: "Are SME IPOs risky?", a: "Yes. SME IPOs carry higher risk due to lower liquidity and limited disclosure." },
  { q: "What is IPO subscription status?", a: "It shows demand from retail, HNI, and QIB investors." },
  { q: "Which subscription category matters most?", a: "QIB subscription is considered the most reliable indicator." },
  { q: "What is IPO listing date?", a: "Listing date is when shares start trading on the stock exchange." },
  { q: "What is listing gain?", a: "Listing gain is the profit earned if shares list above issue price." },
  { q: "Should I sell IPO shares on listing day?", a: "Depends on valuation, fundamentals, and your investment goal." },
  { q: "What is DRHP?", a: "Draft Red Herring Prospectus filed with SEBI containing company details." },
  { q: "What is RHP?", a: "Red Herring Prospectus filed before IPO opening." },
  { q: "What is anchor investment?", a: "Anchor investors are institutions that invest before IPO opens." },
  { q: "What is OFS in IPO?", a: "Offer for Sale is when existing shareholders sell shares." },
  { q: "What is fresh issue?", a: "Fresh issue involves issuing new shares to raise capital." },
  { q: "What is ASBA?", a: "Application Supported by Blocked Amount." },
  { q: "Is UPI mandatory for IPO?", a: "Yes, for retail investors." },
  { q: "What is IPO lock-in period?", a: "Time during which promoters cannot sell shares." },
  { q: "How long does IPO process take?", a: "6–10 working days." },
  { q: "Are IPO gains taxable?", a: "Yes. Short-term: 15%, Long-term: 10% above ₹1 lakh." },
  { q: "Can NRIs apply for IPO?", a: "Yes, through NRE/NRO accounts." },
  { q: "What is cut-off price?", a: "Highest price in the price band for retail investors." },
  { q: "What happens if UPI mandate is not approved?", a: "IPO application is rejected." },
  { q: "What is oversubscription?", a: "When IPO demand exceeds available shares." },
  { q: "What is undersubscription?", a: "When demand is less than offered shares." },
  { q: "How many lots can retail apply?", a: "Depends on ₹2 lakh limit." },
  { q: "Can I modify IPO application?", a: "Yes, before issue closure." },
  { q: "Is IPO allotment guaranteed?", a: "No." },
  { q: "Can I cancel IPO application?", a: "Yes, before closing." },
  { q: "What is IPO registrar?", a: "Entity managing allotment and refunds." },
  { q: "How to avoid bad IPOs?", a: "Focus on fundamentals and valuation." },
  { q: "What documents are required?", a: "PAN, Demat, Bank account." },
  { q: "What is grey market?", a: "Unofficial IPO trading market." },
  { q: "Is grey market legal?", a: "It is unregulated." },
  { q: "Do IPOs always perform well?", a: "No." },
  { q: "What is face value?", a: "Nominal value of a share." },
  { q: "What is market lot?", a: "Minimum tradable quantity." },
  { q: "What is IPO cut-off time?", a: "Usually 5 PM on closing day." },
  { q: "Can IPO shares be pledged?", a: "Yes, after listing." },
  { q: "What is book building?", a: "Price discovery process." }
];

const FAQTab = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions (FAQs)
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition"
            >
              <h4 className="text-base lg:text-lg font-medium text-gray-900 pr-4">
                {faq.q}
              </h4>
              {openIndex === i ? (
                <ChevronUp size={22} className="text-gray-600 flex-shrink-0" />
              ) : (
                <ChevronDown size={22} className="text-gray-500 flex-shrink-0" />
              )}
            </button>

            {openIndex === i && (
              <div className="px-6 pb-5">
                <p className="text-gray-700 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const IPOGuideSection = () => {
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
    {
      name: "FAQs",
      content: <FAQTab />,
    },
  ];

  return (
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

      {/* Tab Content */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 lg:p-10">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default IPOGuideSection;