// src/components/UnlistedGuideSection.jsx (Complete Guide to Unlisted Shares with Tabs)

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { q: "What are unlisted shares?", a: "Unlisted shares are equity shares of companies that are not listed on stock exchanges like NSE or BSE and are traded through off-market transactions." },
  { q: "Are unlisted shares legal in India?", a: "Yes, unlisted shares are completely legal and governed by the Companies Act, 2013, and depository regulations." },
  { q: "Can retail investors buy unlisted shares?", a: "Yes, any retail investor with a valid PAN card and Demat account can invest in unlisted shares." },
  { q: "What are pre-IPO shares?", a: "Pre-IPO shares are unlisted shares of companies that are expected or planning to launch an IPO in the future." },
  { q: "How are unlisted shares different from listed shares?", a: "Unlisted shares are not traded on stock exchanges, have lower liquidity, and their prices are not publicly discovered like listed shares." },
  { q: "Where can I buy unlisted shares in India?", a: "Unlisted shares can be bought through unlisted share brokers, private deals, employees selling ESOPs, or online platforms like ShareBazar Online." },
  { q: "Is a Demat account mandatory to buy unlisted shares?", a: "Yes, a Demat account is mandatory as unlisted shares are transferred electronically via NSDL or CDSL." },
  { q: "How is the price of unlisted shares decided?", a: "Prices are determined by demand and supply, company fundamentals, industry outlook, IPO expectations, and recent transactions." },
  { q: "Do unlisted shares have an ISIN?", a: "Yes, most unlisted shares have a unique ISIN and are held in Demat form." },
  { q: "Is there a minimum investment amount for unlisted shares?", a: "There is no fixed minimum; it depends on the share price and seller availability." },
  { q: "Can unlisted shares be sold anytime?", a: "They can be sold off-market, but finding a buyer may take time due to limited liquidity." },
  { q: "How long does it take to transfer unlisted shares?", a: "Typically, 2 to 7 working days after payment confirmation and documentation." },
  { q: "What is the settlement process for unlisted shares?", a: "Settlement happens via off-market Demat transfer after funds are transferred to the seller." },
  { q: "Is there a lock-in period for unlisted shares?", a: "There is no lock-in while unlisted, but after IPO, a 6-month lock-in applies for non-promoters." },
  { q: "What happens to unlisted shares after IPO?", a: "They automatically convert into listed shares, but selling is allowed only after the lock-in period ends." },
  { q: "Are dividends paid on unlisted shares?", a: "Yes, if the company declares dividends, unlisted shareholders are eligible." },
  { q: "Is IPO listing guaranteed for pre-IPO shares?", a: "No, IPO plans can be delayed, postponed, or cancelled." },
  { q: "What are the risks of investing in unlisted shares?", a: "Major risks include liquidity risk, valuation risk, governance risk, and IPO uncertainty." },
  { q: "Are unlisted shares safe investments?", a: "They can be safe if invested after proper due diligence, but they carry higher risk than listed stocks." },
  { q: "Can unlisted shares give higher returns than IPOs?", a: "Yes, early entry may result in higher long-term returns, but risks are also higher." },
  { q: "How are unlisted shares taxed in India?", a: "Capital gains tax applies—short-term gains as per income slab, long-term gains at 20% with indexation." },
  { q: "Is Securities Transaction Tax (STT) applicable?", a: "No, STT is not applicable to unlisted share transactions." },
  { q: "What is the holding period for long-term capital gains?", a: "More than 24 months qualifies as long-term for unlisted shares." },
  { q: "Can unlisted shares be pledged for loans?", a: "Generally no, banks rarely accept unlisted shares as collateral." },
  { q: "How do I track the value of unlisted shares?", a: "Values are tracked through broker quotes, recent transactions, and platform-provided price updates." },
  { q: "Are unlisted share prices transparent?", a: "Prices are indicative and negotiated, unlike exchange-traded stocks." },
  { q: "What documents are required to buy unlisted shares?", a: "PAN card, Demat account details, KYC documents, and a linked bank account." },
  { q: "Can NRIs invest in unlisted shares?", a: "Yes, subject to FEMA and RBI guidelines, using appropriate Demat and bank accounts." },
  { q: "Are unlisted shares suitable for beginners?", a: "Not recommended for beginners without guidance due to higher complexity and risk." },
  { q: "How much of my portfolio should I allocate to unlisted shares?", a: "Ideally 5%–15%, depending on risk appetite and financial goals." },
  { q: "Can unlisted shares become worthless?", a: "Yes, if the company fails or shuts down, investors may lose capital." },
  { q: "What are ESOP shares?", a: "ESOP shares are issued to employees and often traded in the unlisted market before IPO." },
  { q: "Are financial statements of unlisted companies available?", a: "Yes, through ROC filings, annual reports, and company disclosures." },
  { q: "How do I verify the authenticity of unlisted shares?", a: "Verify ISIN, company name, Demat credit, and transaction documentation." },
  { q: "Can I buy unlisted shares online?", a: "Yes, through verified platforms that facilitate off-market transactions." },
  { q: "Are unlisted shares regulated by SEBI?", a: "They are indirectly regulated through company law, depositories, and IPO regulations." },
  { q: "What happens if an IPO price is lower than unlisted price?", a: "Investors may face notional losses post listing." },
  { q: "Can I sell unlisted shares partially?", a: "Yes, subject to buyer availability and minimum lot size." },
  { q: "Do unlisted shares appear in Demat statements?", a: "Yes, they appear separately under unlisted securities." },
  { q: "Is insider information a concern in unlisted markets?", a: "Yes, investors should rely only on publicly available and verified information." },
  { q: "Are unlisted shares good for long-term investment?", a: "Yes, if the company has strong fundamentals and growth prospects." },
  { q: "What is off-market transfer?", a: "A direct transfer of shares between two Demat accounts without stock exchange involvement." },
  { q: "How liquid are unlisted shares?", a: "Liquidity is low to medium and depends on company popularity." },
  { q: "Can I gift unlisted shares?", a: "Yes, gifting is allowed through off-market transfer with proper documentation." },
  { q: "Can companies buy back unlisted shares?", a: "Yes, subject to company law and shareholder approvals." },
  { q: "How often do unlisted share prices change?", a: "Prices may change frequently based on demand, news, and IPO developments." },
  { q: "Are unlisted shares risky during market downturns?", a: "Yes, liquidity may dry up during weak market conditions." },
  { q: "What is the biggest advantage of unlisted shares?", a: "Early access to high-quality companies before public listing." },
  { q: "What is the biggest disadvantage of unlisted shares?", a: "Limited liquidity and price transparency." },
  { q: "Should unlisted shares be part of every investor’s portfolio?", a: "Only for investors who understand the risks and have a long-term investment horizon." }
];

const FAQTab = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Frequently Asked Questions (FAQs) on Unlisted Shares
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

const UnlistedGuideSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Introduction",
      content: (
        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
          <p>
            Unlisted shares, often referred to as pre-IPO shares, represent ownership in companies that are not listed on recognized stock exchanges such as the National Stock Exchange (NSE) or Bombay Stock Exchange (BSE). These shares are legally issued, fully valid equity instruments, but they are traded off-market through private arrangements rather than public exchanges.
          </p>
          <p>
            In recent years, unlisted shares have emerged as one of the fastest-growing alternative investment segments in India, attracting retail investors, High Net-Worth Individuals (HNIs), family offices, venture capitalists, and long-term value investors.
          </p>
          <p>
            The growing interest in companies like NSE India, Tata Capital, HDB Financial Services, SBI General Insurance, and ICICI Lombard (before IPO) has pushed unlisted equity investing into the mainstream.
          </p>
        </div>
      ),
    },
    {
      name: "What Are Unlisted Shares?",
      content: (
        <div className="space-y-6 text-base text-gray-700 leading-relaxed">
          <p>
            <strong>Definition:</strong> Unlisted shares are equity shares of companies that are not traded on any public stock exchange. These companies may be:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Private limited companies</li>
            <li>Public limited companies not listed on NSE/BSE</li>
            <li>Companies planning an IPO in the future</li>
          </ul>
          <p className="mt-6">
            Despite not being listed, these companies are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Registered under the Companies Act</li>
            <li>Issued legally</li>
            <li>Held in Demat form</li>
            <li>Transferable via depositories (NSDL/CDSL)</li>
          </ul>
        </div>
      ),
    },
    {
      name: "Why Companies Remain Unlisted",
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Long-Term Vision</h4>
            <p className="text-base text-gray-700">Companies may prefer long-term business building without short-term market pressure.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Regulatory Compliance Cost</h4>
            <p className="text-base text-gray-700">Listed companies must comply with:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Quarterly disclosures</li>
              <li>Investor presentations</li>
              <li>Exchange reporting</li>
            </ul>
            <p className="mt-3">Many companies avoid listing to reduce compliance burden.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Fundraising</h4>
            <p className="text-base text-gray-700">Companies raise capital from without going public.</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Private equity</li>
              <li>Venture capital</li>
              <li>Strategic investors</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Valuation Optimization</h4>
            <p className="text-base text-gray-700">Some companies wait until:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Revenue stabilizes</li>
              <li>Profitability improves</li>
              <li>Market conditions become favorable</li>
            </ul>
          </div>
        </div>
      ),
    },
 {
  name: "Types of Unlisted Shares",
  content: (
    <div className="space-y-8">
      {/* Pre-IPO Shares */}
      <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:shadow-sm transition-shadow">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Pre-IPO Shares</h4>
        <p className="text-base text-gray-700 mb-5">
          Pre-IPO shares are unlisted shares of companies that are planning to launch an IPO in the future.
        </p>

        <div className="mb-5">
          <p className="font-medium text-gray-800 mb-3">Key Characteristics:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              High demand
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              Valuation linked to IPO expectations
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              Medium-term investment horizon
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <p className="font-medium text-gray-800 mb-3">Popular Examples:</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white rounded-lg text-gray-800 text-sm font-medium border border-gray-200">NSE India Ltd</span>
            <span className="px-4 py-2 bg-white rounded-lg text-gray-800 text-sm font-medium border border-gray-200">Tata Capital Ltd</span>
            <span className="px-4 py-2 bg-white rounded-lg text-gray-800 text-sm font-medium border border-gray-200">HDB Financial Services</span>
            <span className="px-4 py-2 bg-white rounded-lg text-gray-800 text-sm font-medium border border-gray-200">SBI Mutual Fund</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm font-medium flex items-center gap-2">
          <span className="text-lg">📌</span> These shares often experience price appreciation as IPO news strengthens.
        </p>
      </div>

      {/* Private Company Shares */}
      <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:shadow-sm transition-shadow">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Private Company Shares</h4>
        <p className="text-base text-gray-700 mb-5">
          These belong to companies that are privately held and may or may not have plans for a future IPO.
        </p>

        <div className="mb-5">
          <p className="font-medium text-gray-800 mb-3">Characteristics:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              Are privately held
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              May or may not plan an IPO
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <p className="font-medium text-gray-800 mb-3">Examples:</p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-white rounded-lg text-gray-800 text-sm font-medium border border-gray-200">OYO (earlier phase)</span>
            <span className="px-4 py-2 bg-white rounded-lg text-gray-800 text-sm font-medium border border-gray-200">PharmEasy</span>
            <span className="px-4 py-2 bg-white rounded-lg text-gray-800 text-sm font-medium border border-gray-200">Swiggy (before IPO)</span>
          </div>
        </div>

        <p className="text-gray-700 text-sm font-medium flex items-center gap-2">
          <span className="text-lg">⚠️</span> Higher risk due to IPO uncertainty.
        </p>
      </div>

      {/* Delisted Shares */}
      <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:shadow-sm transition-shadow">
        <h4 className="text-xl font-bold text-gray-900 mb-4">Delisted Shares</h4>
        <p className="text-base text-gray-700 mb-5">
          Shares of companies that were once listed on stock exchanges but have been voluntarily or compulsorily delisted.
        </p>

        <div className="mb-5">
          <p className="font-medium text-gray-800 mb-3">Common Reasons for Delisting:</p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              Promoter buyback
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              Low liquidity
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
              Strategic restructuring
            </li>
          </ul>
        </div>

        <p className="text-gray-700 text-sm font-medium flex items-center gap-2">
          <span className="text-lg">📌</span> Liquidity is extremely limited.
        </p>
      </div>

      {/* ESOP Shares */}
      <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200 hover:shadow-sm transition-shadow">
        <h4 className="text-xl font-bold text-gray-900 mb-4">ESOP Shares (Employee Stock Options)</h4>
        <p className="text-base text-gray-700">
          Employees of startups or large corporations receive shares under ESOP plans. Many ESOP holders sell these shares in the unlisted market before the company goes public through off-market deals.
        </p>
      </div>
    </div>
  ),
},
    {
      name: "Future & Trends",
      content: (
        <div className="space-y-8">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Key Trends</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Growing fintech platforms</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Rising retail awareness</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Strong IPO pipeline</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Increasing ESOP monetization</li>
          </ul>
          <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4">Expected Growth Drivers</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Startup ecosystem maturity</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Institutional participation</li>
            <li className="flex items-start gap-3"><span className="text-green-600 font-bold mt-0.5">✓</span> Regulatory clarity</li>
          </ul>
          <p className="mt-8 text-lg text-green-700 font-medium">
            📈 Unlisted shares are expected to become a mainstream alternative asset class over the next decade.
          </p>
        </div>
      ),
    },
    {
      name: "Regulation & Taxation",
      content: (
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Regulatory Safeguards for Investors</h4>
            <p className="text-base text-gray-700">Although unlisted shares are not exchange-traded, they are governed by:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Companies Act, 2013</li>
              <li>Depository regulations (NSDL/CDSL)</li>
              <li>SEBI rules for IPO transition</li>
            </ul>
            <p className="mt-4 text-green-700">📌 Ownership rights remain legally protected.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Lock-In Period After IPO</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] bg-gray-50 rounded-xl border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Lock-In Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-3">Non-promoters</td>
                    <td className="px-6 py-3">6 months</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">Promoters</td>
                    <td className="px-6 py-3">18 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Taxation of Unlisted Shares in India</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-gray-50 rounded-xl border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-3 text-left">Capital Gains Tax</th>
                    <th className="px-6 py-3 text-left">Holding Period</th>
                    <th className="px-6 py-3 text-left">Tax Type</th>
                    <th className="px-6 py-3 text-left">Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-3" rowSpan={2}>Capital Gains</td>
                    <td className="px-6 py-3">≤ 24 months</td>
                    <td className="px-6 py-3">STCG</td>
                    <td className="px-6 py-3">As per slab</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3">&gt; 24 months</td>
                    <td className="px-6 py-3">LTCG</td>
                    <td className="px-6 py-3">20% with indexation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Comparison",
      content: (
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Unlisted Shares vs Other Asset Classes</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-white rounded-xl border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Asset Class</th>
                    <th className="px-6 py-4 text-left">Risk</th>
                    <th className="px-6 py-4 text-left">Return Potential</th>
                    <th className="px-6 py-4 text-left">Liquidity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Fixed Deposit</td>
                    <td className="px-6 py-4">Low</td>
                    <td className="px-6 py-4">Low</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Mutual Funds</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Listed Stocks</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Medium–High</td>
                    <td className="px-6 py-4">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Unlisted Shares</td>
                    <td className="px-6 py-4 font-medium text-red-600">High</td>
                    <td className="px-6 py-4 font-medium text-green-600">High</td>
                    <td className="px-6 py-4">Low</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Real Estate</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Medium</td>
                    <td className="px-6 py-4">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-green-700">📌 Best used as satellite allocation, not core.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Unlisted Shares vs IPO Investment</h4>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] bg-white rounded-xl border border-gray-200">
                <thead className="bg-gray-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Aspect</th>
                    <th className="px-6 py-4 text-left">Unlisted Shares</th>
                    <th className="px-6 py-4 text-left">IPO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Entry Timing</td>
                    <td className="px-6 py-4">Before IPO</td>
                    <td className="px-6 py-4">At IPO</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Price Certainty</td>
                    <td className="px-6 py-4">Variable</td>
                    <td className="px-6 py-4">Fixed</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Lock-in</td>
                    <td className="px-6 py-4">Mandatory</td>
                    <td className="px-6 py-4">No</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Risk</td>
                    <td className="px-6 py-4 text-red-600 font-medium">Higher</td>
                    <td className="px-6 py-4">Lower</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
        Unlisted Shares in India – Complete Guide
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

export default UnlistedGuideSection;