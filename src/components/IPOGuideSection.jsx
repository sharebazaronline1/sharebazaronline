// src/components/IPOGuideSection.jsx (Final - Separate boxes for Price/Lot & How to Apply + Consistent icons + Responsive)

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, FileText, Building2, TrendingUp, AlertTriangle, Users, DollarSign, HelpCircle, Shield } from "lucide-react";

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

const FAQSection = () => {
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const visibleFaqs = showAllFAQs ? faqs : faqs.slice(0, 10);

  return (
    <div className="space-y-3">
      {visibleFaqs.map((faq, i) => (
        <div
          key={i}
          className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-sm transition"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full px-5 py-3 flex items-center justify-between text-left hover:bg-gray-100 transition"
          >
            <p className="text-sm lg:text-base text-gray-900 pr-4">
              {faq.q}
            </p>
            {openIndex === i ? (
              <ChevronUp size={20} className="text-gray-600 flex-shrink-0" />
            ) : (
              <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
            )}
          </button>

          {openIndex === i && (
            <div className="px-5 pb-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
      {!showAllFAQs && faqs.length > 10 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAllFAQs(true)}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
          >
            View All FAQs ({faqs.length - 10} more)
          </button>
        </div>
      )}
    </div>
  );
};

const IPOGuideSection = () => {
    const navigate = useNavigate();
  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl font-black text-center text-gray-900 mb-10">
          IPO in India – Complete Guide
        </h2>

        {/* Grid - Tight & balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Introduction */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Introduction</h3>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              An IPO (Initial Public Offering) marks a crucial milestone in a company’s lifecycle. It is the process through which a privately held company becomes publicly traded by offering its shares to the general public for the first time. In India, IPOs are regulated by SEBI and listed on NSE or BSE.
            </p>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              For investors, IPOs offer a unique opportunity to invest in companies at an early public stage, potentially benefiting from listing gains and long-term growth. The Indian IPO market has evolved significantly with transparent processes, online applications, and faster allotments.
            </p>
          </div>

          {/* What is an IPO? */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">What is an IPO?</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              An IPO is the first sale of a company’s equity shares to public investors. Before an IPO, ownership is limited to promoters, founders, private investors, and venture capitalists. Once listed, shares can be freely traded in the secondary market.
            </p>
            <p className="text-sm font-medium text-gray-800 mb-2">Key Objectives:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Raise capital for expansion</li>
              <li>• Repay existing debt</li>
              <li>• Fund new projects</li>
              <li>• Provide exit to early investors</li>
              <li>• Enhance visibility & brand trust</li>
            </ul>
            <p className="text-sm font-medium text-gray-800 mt-4 mb-2">Market Evolution:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Strong SEBI regulation</li>
              <li>• UPI-ASBA digitization</li>
              <li>• Rise in retail participation</li>
              <li>• Growth of SME platforms</li>
            </ul>
          </div>

          {/* Mainboard vs SME */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Mainboard vs SME</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-gray-50 rounded-lg border border-gray-200">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Feature</th>
                    <th className="px-4 py-2 text-left">Mainboard</th>
                    <th className="px-4 py-2 text-left">SME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-4 py-2">Exchange</td><td>NSE/BSE</td><td>NSE SME / BSE SME</td></tr>
                  <tr className="bg-gray-100"><td className="px-4 py-2">Investment Size</td><td>Higher</td><td>Lower</td></tr>
                  <tr><td className="px-4 py-2">Risk</td><td>Moderate</td><td className="text-red-600 font-medium">High</td></tr>
                  <tr className="bg-gray-100"><td className="px-4 py-2">Liquidity</td><td>High</td><td>Limited</td></tr>
                  <tr><td className="px-4 py-2">Disclosure</td><td>Strict</td><td>Moderate</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Types of IPOs */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Types of IPOs</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-3">Pricing Mechanism</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-2">Fixed Price Issue</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Single fixed price</li>
                      <li>• Common in SME IPOs</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <h5 className="font-bold text-gray-900 mb-2">Book Building (Most Common)</h5>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Price band (lower-upper)</li>
                      <li>• Final price based on demand</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900 mb-3">Share Offering</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h5 className="font-bold text-gray-900 mb-2">Fresh Issue</h5>
                    <p className="text-sm text-gray-700">New shares • Funds to company</p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <h5 className="font-bold text-gray-900 mb-2">Offer for Sale (OFS)</h5>
                    <p className="text-sm text-gray-700">Existing shares sold • No funds to company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investor Categories */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Investor Categories</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <h4 className="text-base font-bold text-gray-900 mb-3">Retail (RII)</h4>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>Max ₹2 lakh</li>
                  <li>≥35% reservation</li>
                  <li>Lottery allotment</li>
                  <li>Best for beginners</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <h4 className="text-base font-bold text-gray-900 mb-3">NII / HNI</h4>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li> ₹2 lakh</li>
                  <li>≥15% reservation</li>
                  <li>Proportionate allotment</li>
                  <li>For experienced investors</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 text-center">
                <h4 className="text-base font-bold text-gray-900 mb-3">QIB</h4>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>Institutions</li>
                  <li>≥50% reservation</li>
                  <li>Strong success indicator</li>
                  <li>Professional focus</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Price, Lot & Size - Separate Box */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Price, Lot & Size</h3>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Price Band</h4>
                <p className="text-xs text-gray-700">Bidding range (e.g., ₹100–₹105)</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Lot Size</h4>
                <p className="text-xs text-gray-700">Minimum shares per application</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 text-center">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">Issue Size</h4>
                <p className="text-xs text-gray-700">Total IPO value</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-xs text-gray-600 mb-2 text-center">Example:</p>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div><p className="text-gray-600">Price Band</p><p className="font-bold">₹200–₹210</p></div>
                <div><p className="text-gray-600">Lot</p><p className="font-bold">70 shares</p></div>
                <div><p className="text-gray-600">Min Investment</p><p className="font-bold text-green-600">₹14,700</p></div>
                <div><p className="text-gray-600">Max Retail</p><p className="font-bold">~13 lots</p></div>
              </div>
            </div>
          </div>

          {/* How to Apply - Separate Box with Button */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">How to Apply</h3>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="text-base font-semibold text-gray-900 mb-4 text-center">Requirements</h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <div className="bg-white rounded-lg py-3 px-2 shadow-sm text-center"><p className="text-xs font-medium">Demat Account</p></div>
                <div className="bg-white rounded-lg py-3 px-2 shadow-sm text-center"><p className="text-xs font-medium">Trading/ASBA</p></div>
                <div className="bg-white rounded-lg py-3 px-2 shadow-sm text-center"><p className="text-xs font-medium">PAN Card</p></div>
                <div className="bg-white rounded-lg py-3 px-2 shadow-sm text-center"><p className="text-xs font-medium">UPI ID</p></div>
                <div className="bg-white rounded-lg py-3 px-2 shadow-sm text-center"><p className="text-xs font-medium">Bank Balance</p></div>
              </div>
            </div>
            <p className="mt-5 text-sm text-center text-gray-700 mb-6">
              Apply via broker apps or bank ASBA. UPI mandate required for retail.
            </p>
            <div className="text-center">
              <button   onClick={() => navigate("/how-to-apply-ipo")} className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition shadow-md">
                Learn How to Apply →
              </button>
            </div>
          </div>

          {/* Taxation */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Taxation</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <p className="text-base font-medium text-gray-600 mb-2">Short-term Gains</p>
                <p className="text-3xl font-bold text-gray-900">15%</p>
                <p className="text-xs text-gray-500 mt-2">Holding &lt; 1 year</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <p className="text-base font-medium text-gray-600 mb-2">Long-term Gains</p>
                <p className="text-3xl font-bold text-gray-900">10%</p>
                <p className="text-xs text-gray-500 mt-2">Above ₹1 lakh (Holding &gt; 1 year)</p>
              </div>
            </div>
          </div>

          {/* FAQs - Full width */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:col-span-3">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Frequently Asked Questions (FAQs)</h3>
            </div>
            <FAQSection />
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-10 p-5 bg-amber-50 border border-amber-200 rounded-2xl text-center">
          <p className="text-sm text-amber-900 font-medium">
            IPO investments carry market risk. Always conduct thorough research before investing.
          </p>
        </div>

      </div>
    </div>
  );
};

export default IPOGuideSection;