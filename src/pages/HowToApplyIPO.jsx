import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

const HowToApplyIPO = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            How to Apply for an IPO (Step-by-Step Guide)
          </h1>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl">
            An IPO (Initial Public Offering) lets retail investors buy shares of a company when it goes public.
            Modern IPO applications in India are completely online — no paperwork, no cheques.
            You can apply through your broker trading platform (like Zerodha) or your bank’s ASBA
            (Application Supported by Blocked Amount) facility.
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">

        {/* REQUIREMENTS */}
        <section className="bg-white border border-gray-200 rounded-md p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            What You Need Before Applying
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            To apply for an IPO, you must have:
          </p>

          <ul className="space-y-1.5 text-sm text-gray-700">
            {[
              "A Demat account (to hold shares)",
              "A trading account or bank ASBA access",
              "A valid PAN card linked to your bank account",
              "A UPI ID (for UPI-based IPO applications)",
              "Sufficient funds in your bank account",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle size={16} className="text-green-600 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-2 text-xs text-gray-500">
            These are standard SEBI requirements for any IPO application.
          </p>
        </section>

        {/* METHODS */}
        <section className="bg-gray-100 rounded-md p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            Methods of Applying for an IPO
          </h2>

          <p className="text-sm text-gray-700 mb-4">
            There are two main ways to apply Online and Offline:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* UPI */}
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                1️⃣ Apply via UPI (Through Your Broker / Trading App)
              </h3>

              <p className="text-sm text-gray-700 mb-2">
                This is the most popular and convenient online method.
              </p>

              <h4 className="font-medium text-gray-900 mb-1">How It Works</h4>
              <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-700 mb-2">
                <li>You select the IPO on your trading app or web platform</li>
                <li>Enter your UPI ID linked to your bank account</li>
                <li>You bid for a price and quantity of shares</li>
                <li>A mandate request is sent — you approve it</li>
              </ul>

              <div className="text-xs bg-green-50 border border-green-200 rounded p-2">
                ✔ No charges for IPO application <br />
                ✔ Amount is blocked, not debited <br />
                ✔ Mandate can be approved till IPO closing (usually 5 PM)
              </div>
            </div>

            {/* ASBA */}
            <div className="bg-white border border-gray-200 rounded-md p-4">
              <h3 className="font-semibold text-gray-900 mb-1">
                2️⃣ Apply via ASBA (Bank’s Internet Banking)
              </h3>

              <p className="text-sm text-gray-700 mb-2">
                ASBA stands for Application Supported by Blocked Amount.
              </p>

              <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-700">
                <li>Log in to your bank’s net banking portal</li>
                <li>Choose the IPO under IPO / ASBA section</li>
                <li>Enter bid and Demat account details</li>
                <li>The bank blocks funds until allotment</li>
              </ul>

              <p className="mt-2 text-sm text-gray-700">
                Funds remain in your bank account and are debited only if shares are allotted.
              </p>
            </div>

          </div>
        </section>

        {/* OFFLINE */}
        <section className="bg-white border border-gray-200 rounded-md p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Offline Method: ASBA Application
          </h2>

          <ul className="list-disc list-inside space-y-0.5 text-sm text-gray-700">
            <li>Download the ASBA form from NSE or BSE websites</li>
            <li>Fill PAN, Demat details, bid quantity and price</li>
            <li>Submit the form to a Self-Certified Syndicate Bank (SCSB)</li>
          </ul>
        </section>

        {/* MULTIPLE BIDS */}
        <section className="bg-gray-100 rounded-md p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            How Many Bids Can Be Placed in an IPO Application?
          </h2>

          <p className="text-sm text-gray-700 mb-3">
            Retail investors in India can place up to three (3) bids in a single IPO application.
            This feature helps investors increase allotment flexibility by bidding at different price levels
            within the IPO price band.
          </p>

          <h3 className="font-semibold text-gray-900 mb-1">
            🔑 Key IPO Bidding Rules
          </h3>

          <ul className="space-y-0.5 text-sm text-gray-700 mb-4">
            <li>✔ Maximum 3 bids per IPO application</li>
            <li>✔ Each bid must be within the IPO price band</li>
            <li>✔ Share quantity must be a multiple of the IPO lot size</li>
            <li>✔ Highest bid amount is blocked via UPI or ASBA</li>
            <li>✔ Only one bid is finally considered for allotment</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-2">
            IPO Multiple Bids – Practical Example
          </h3>

          <p className="text-sm text-gray-700 mb-2">
            📈 IPO Price Band: ₹100 – ₹105
          </p>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-md mb-3">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2 text-left">Bid</th>
                  <th className="px-3 py-2 text-center">Shares</th>
                  <th className="px-3 py-2 text-center">Price</th>
                  <th className="px-3 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-3 py-2">Bid 1</td>
                  <td className="px-3 py-2 text-center">10</td>
                  <td className="px-3 py-2 text-center">₹102</td>
                  <td className="px-3 py-2 text-right">₹1,020</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Bid 2</td>
                  <td className="px-3 py-2 text-center">150</td>
                  <td className="px-3 py-2 text-center">₹101</td>
                  <td className="px-3 py-2 text-right">₹15,150</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Bid 3</td>
                  <td className="px-3 py-2 text-center">50</td>
                  <td className="px-3 py-2 text-center">Cut-Off (₹105)</td>
                  <td className="px-3 py-2 text-right">₹5,250</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-700 mb-2">
            🔒 Blocked Amount in this example: <strong>₹15,150</strong>
          </p>

          <p className="text-sm text-gray-700">
            ✔ Funds remain blocked until allotment <br />
            ✔ Excess funds are automatically unblocked if shares are not allotted
          </p>
        </section>

        {/* TIMING */}
        <section className="bg-white border border-gray-200 rounded-md p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            When Can You Apply? (Timing)
          </h2>

          <ul className="space-y-0.5 text-sm text-gray-700">
            <li>IPO opens at 10:00 AM on the first day</li>
            <li>You can apply until 4:30 PM on the closing day</li>
            <li>Pre-apply window may be available but doesn’t affect allotment</li>
          </ul>
        </section>

        {/* AFTER APPLY */}
        <section className="bg-gray-100 rounded-md p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            After You Apply: What Happens Next?
          </h2>

          <ul className="space-y-0.5 text-sm text-gray-700">
            <li>Your bid is sent to the exchange and funds are blocked</li>
            <li>The Registrar processes allotments after IPO closure</li>
            <li>If allotted, shares are credited to your Demat account</li>
            <li>If not allotted, the blocked amount is released automatically</li>
          </ul>
        </section>

        {/* CHECK STATUS */}
        <section className="bg-white border border-gray-200 rounded-md p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Check Allotment Status
          </h2>

          <ul className="space-y-1 text-sm text-gray-700">
            <li>📌 NSE IPO Status Pages</li>
            <li className="break-all text-xs text-blue-600">
              https://www.nseindia.com/invest/check-trades-bids-verify-ipo-bids
            </li>
            <li>📌 BSE IPO Status Pages</li>
            <li className="break-all text-xs text-blue-600">
              https://www.bseindia.com/publicissue.html
            </li>
            <li>📌 Registrar & Transfer Agent (RTA)</li>
            <li className="break-all text-xs text-blue-600">
              https://ipostatus.kfintech.com/
            </li>
          </ul>

          <p className="mt-2 text-sm text-gray-700">
            Just enter your application number or PAN to check allotment.
          </p>
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
