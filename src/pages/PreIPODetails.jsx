// src/pages/PreIPODetails.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { fetchPreIPODetails } from "../api/mockApi";

const PreIPODetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchPreIPODetails().then((res) => {
      setData(res.find((x) => x.id === Number(id)));
    });
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500 bg-slate-50">
        <div className="text-xl">Loading…</div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 py-12 lg:py-16 space-y-12">

        {/* ================= HEADER ================= */}
        <header className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-600 leading-tight">
            {data.name} Unlisted Share Price – Buy & Sell Guide
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Complete details of {data.name} unlisted shares including company overview,
            price details, financials, risks, and the process to buy or sell unlisted shares in India.
          </p>
        </header>

        {/* ================= COMPANY OVERVIEW ================= */}
        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-800">Company Overview</h2>
          </div>
          <div className="px-6 py-6">
            <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line">
              {data.overview}
            </p>
          </div>
        </section>

        {/* ================= DETAILS + FINANCIALS ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4">

          {/* SHARE DETAILS */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-2 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-800">{data.name} Unlisted Share Details</h2>
            </div>
            <div className="p-4">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {Object.entries(data.shareDetails).map(([key, value]) => (
                    <tr key={key} className="hover:bg-green-50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-slate-600">{key.replace(/([A-Z])/g, " $1").trim()}</td>
                      <td className="py-3 text-right font-semibold text-slate-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FINANCIAL HIGHLIGHTS */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-2 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-800">Financial & Valuation Highlights</h2>
            </div>
            <div className="p-4 space-y-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 text-base">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Price to Book (P/B): <strong>~0.22</strong>
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-base">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Debt to Equity Ratio: <strong>~2.81</strong>
                </li>
                <li className="flex items-center gap-3 text-slate-700 text-base">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  Return on Equity (ROE): <strong>Negative</strong>
                </li>
              </ul>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-slate-800">
                <strong>Note:</strong> Financial data of unlisted companies is limited and may not be updated frequently.
                Investors should perform independent analysis.
              </div>
            </div>
          </div>

        </section>

        {/* ================= BUY / SELL ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              How to Buy {data.name} Unlisted Shares
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-base marker:font-semibold marker:text-green-600">
              <li>Confirm the latest unlisted share price.</li>
              <li>Share your Demat details (CMR, PAN, bank details).</li>
              <li>Transfer funds via NEFT / RTGS / IMPS.</li>
              <li>Shares will be credited to your Demat account.</li>
            </ol>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              How to Sell {data.name} Unlisted Shares
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-base marker:font-semibold marker:text-green-600">
              <li>Transfer shares from your Demat to the buyer.</li>
              <li>Receive payment directly into your bank account.</li>
            </ol>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-green-600 text-white rounded-3xl p-6 text-center shadow-lg">
          <p className="text-2xl sm:text-3xl font-bold mb-6 max-w-3xl mx-auto">
            Interested in buying or selling {data.name} Unlisted Shares?
          </p>
          <button className="px-10 py-3 bg-white text-green-700 text-lg font-bold rounded-full hover:bg-gray-100 transition">
            Contact ShareBazaarOnline
          </button>
          <p className="text-sm text-green-100 mt-4 max-w-2xl mx-auto">
            Disclaimer: Prices and financial data are indicative and for informational purposes only. Not investment advice.
          </p>
        </section>

        {/* ================= BACK ================= */}
        <div className="text-center mt-8">
          <Link
            to="/pre-ipo-stocks"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition"
          >
            <ArrowLeft size={24} />
            Back to Unlisted Shares
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PreIPODetails;
