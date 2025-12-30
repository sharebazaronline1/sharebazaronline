import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Info,
  TrendingUp,
  Clock,
  AlertTriangle,
} from "lucide-react";

const HowToApplyIPO = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER */}
    <header>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-3 text-center lg:pl-16">
    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
      How to Apply for an IPO (Step-by-Step Guide)
    </h1>
    <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
      An IPO (Initial Public Offering) lets retail investors buy shares of a company when it goes public.
      Modern IPO applications in India are completely online — no paperwork, no cheques.
      You can apply through your broker trading platform or your bank’s ASBA facility.
    </p>
  </div>
</header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">

        {/* REQUIREMENTS */}
        <section className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-bold mb-4">What You Need Before Applying</h2>

          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {[
              "A Demat account (to hold shares)",
              "A trading account or bank ASBA access",
              "A valid PAN card linked to your bank account",
              "A UPI ID (for UPI-based IPO applications)",
              "Sufficient funds in your bank account",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-gray-500">
            These are mandatory SEBI requirements for IPO participation.
          </p>
        </section>

        {/* METHODS */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold">Methods of Applying for an IPO</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* UPI */}
            <div className="bg-white border rounded-lg p-5 space-y-3">
              <h3 className="font-semibold flex items-center gap-2">
                Apply via UPI (Trading App)
              </h3>

              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Select IPO on your trading app</li>
                <li>Enter UPI ID linked to your bank</li>
                <li>Choose bid price & quantity</li>
                <li>Approve mandate request</li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded p-3 text-xs">
                ✔ No charges <br />
                ✔ Funds are blocked, not debited <br />
                ✔ Mandate approval till IPO closing
              </div>
            </div>

            {/* ASBA */}
            <div className="bg-white border rounded-lg p-5 space-y-3">
              <h3 className="font-semibold">
                Apply via ASBA (Bank Net Banking)
              </h3>

              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Login to net banking</li>
                <li>Go to IPO / ASBA section</li>
                <li>Enter bid & Demat details</li>
                <li>Funds remain blocked</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MULTIPLE BIDS */}
        <section className="bg-white border rounded-lg p-6 space-y-5">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <TrendingUp size={18} />
            IPO Multiple Bids – Practical Example
          </h2>

          <p className="text-sm text-gray-700">
             IPO Price Band: <strong>₹100 – ₹105</strong>
          </p>

          {/* BIDS TABLE */}
          <div className="overflow-x-auto border rounded">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left">Bid</th>
                  <th className="px-3 py-2 text-center">Number of Shares</th>
                  <th className="px-3 py-2 text-center">Bid Price</th>
                  <th className="px-3 py-2 text-right">Total Bid Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-3 py-2">Bid 1</td>
                  <td className="px-3 py-2 text-center">150</td>
                  <td className="px-3 py-2 text-center">₹101</td>
                  <td className="px-3 py-2 text-right">₹15,150</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Bid 2</td>
                  <td className="px-3 py-2 text-center">150</td>
                  <td className="px-3 py-2 text-center">₹102</td>
                  <td className="px-3 py-2 text-right">₹15,300</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Bid 3</td>
                  <td className="px-3 py-2 text-center">150</td>
                  <td className="px-3 py-2 text-center">Cut-Off (₹105)</td>
                  <td className="px-3 py-2 text-right">₹15,750</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ALLOTMENT TABLE */}
          <div className="bg-gray-50 border rounded p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Info size={16} />
              Which Bid Gets Considered for Allotment?
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left">Final Issue Price</th>
                    <th className="px-3 py-2 text-left">Eligible Bid</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-3 py-2">₹103 or higher</td>
                    <td className="px-3 py-2">Bid 3</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">₹102</td>
                    <td className="px-3 py-2">
                      Bid 3 (higher quantity between Bid 1 & Bid 3)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2">₹100</td>
                    <td className="px-3 py-2">
                      Bid 2 (largest quantity)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* IMPORTANT NOTE */}
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm flex gap-2">
            <AlertTriangle size={16} className="text-yellow-600 mt-0.5" />
            Only one bid is finally considered for allotment, even if you place three bids.
          </div>

          {/* BLOCKED AMOUNT */}
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="font-semibold">How Much Money Gets Blocked?</p>
            <p className="text-sm mt-1">
              Highest bid amount is blocked.
              <br />
             Blocked Amount in this example: <strong>₹15,300 (Bid 2)</strong>
            </p>
            <p className="text-sm mt-2">
              ✔ Funds remain blocked until allotment <br />
              ✔ Excess funds are automatically unblocked
            </p>
          </div>
        </section>

        {/* WHY MULTIPLE BIDS */}
        <section className="bg-white border rounded-lg p-6">
          <h2 className="text-lg font-bold mb-3">Why Use Multiple Bids?</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
            <li>✔ Improve chances of allotment</li>
            <li>✔ Participate at different valuation levels</li>
            <li>✔ Optimize IPO strategy</li>
            <li>✔ Reduce price mismatch risk</li>
          </ul>
        </section>

      {/* TIMING */}
<section className="bg-gray-100 rounded-lg p-6">
  <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
    <Clock size={18} />
    When Can You Apply?
  </h2>

  <div className="flex flex-wrap gap-4 text-sm text-gray-700">
    <span className="bg-white border rounded px-4 py-2">
      IPO opens at 10:00 AM
    </span>
    <span className="bg-white border rounded px-4 py-2">
      Closes at 4:30 PM
    </span>
    <span className="bg-white border rounded px-4 py-2">
      Pre-apply window does not affect allotment
    </span>
  </div>
</section>

{/* RULES */}
<section className="bg-white border rounded-lg p-6">
  <h2 className="text-lg font-bold mb-4">
    Application Tips & Rules
  </h2>

  <div className="flex flex-wrap gap-4 text-sm text-gray-700">
    <span className="bg-gray-50 border rounded px-4 py-2">
      Up to 3 bids allowed per IPO
    </span>
    <span className="bg-gray-50 border rounded px-4 py-2">
      UPI mandate must be approved before closing
    </span>
    <span className="bg-gray-50 border rounded px-4 py-2">
      Only one application per PAN is allowed
    </span>
  </div>
</section>

        {/* CHECK STATUS */}
        <section className="bg-white border rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-bold">🔎 Check Allotment Status</h2>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.nseindia.com/invest/check-trades-bids-verify-ipo-bids"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
            >
              NSE IPO <ExternalLink size={14} />
            </a>

            <a
              href="https://www.bseindia.com/publicissue.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
            >
              BSE IPO <ExternalLink size={14} />
            </a>

            <a
              href="https://ipostatus.kfintech.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-emerald-700"
            >
              Registrar (KFintech) <ExternalLink size={14} />
            </a>
          </div>
        </section>

        {/* BACK */}
        <Link
          to={-1}
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

      </main>
    </div>
  );
};

export default HowToApplyIPO;
