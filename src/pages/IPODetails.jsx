// src/pages/IPODetails.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Download,
  AlertTriangle,
  Home,
  Building2,
  Target,
  BarChart3,
  Clock,
  IndianRupee,
  Ticket,
  Users,
  CheckCircle,
} from "lucide-react";
import { fetchIPOs } from "../api/mockApi";

const IPODetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ipo, setIpo] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    fetchIPOs().then((ipos) => {
      setIpo(ipos.find((i) => i.id === parseInt(id)));
    });
    window.scrollTo(0, 0);
  }, [id]);

  const getHigherPrice = (priceStr) => {
    if (!priceStr) return 0;
    const parts = priceStr.toString().split("-");
    return parseInt(parts[parts.length - 1].replace(/[^0-9]/g, "")) || 0;
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 160;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!ipo) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading IPO details...
      </div>
    );
  }

  const minInvestment = (ipo.lot || 1) * getHigherPrice(ipo.price);

  const sections = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "about", label: "About", icon: Building2 },
    { id: "objectives", label: "Objectives", icon: Target },
    { id: "financials", label: "Financials", icon: BarChart3 },
    { id: "valuation", label: "Valuation & KPI", icon: IndianRupee },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "lot", label: "Lot & Allocation", icon: Ticket },
    { id: "subscription", label: "Subscription", icon: Users },
    { id: "anchor", label: "Anchor", icon: CheckCircle },
    { id: "gmp", label: "GMP", icon: IndianRupee },
    { id: "documents", label: "Docs", icon: Download },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="fixed inset-x-0  z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b">
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-4">
              {ipo.logo ? (
                <img
                  src={ipo.logo}
                  alt={ipo.name}
                  className="w-14 h-14 object-contain border rounded-lg"
                />
              ) : (
                <div className="w-14 h-14 bg-gray-700 text-white flex items-center justify-center rounded-lg text-xl font-bold">
                  {ipo.name.charAt(0)}
                </div>
              )}

              <div>
                <h1 className="text-2xl font-bold">{ipo.name}</h1>
                <p className="text-sm text-gray-600">{ipo.fullName}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold">
                ₹{minInvestment.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">Minimum Investment</p>
            </div>

          </div>
        </div>

        <div className="bg-blue-50 border-t">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2 text-blue-900 text-sm">
              <AlertTriangle size={16} />
              Ready to invest in this opportunity? Apply now.
            </div>

            <button
              onClick={() => navigate("/how-to-apply-ipo")}
              className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="pt-48 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* SIDEBAR */}
         <aside className="hidden lg:block lg:col-span-1">

  <div className="sticky top-28 w-full border rounded-xl p-4 bg-white shadow-md max-h-[calc(100vh-160px)] overflow-y-auto">

    <h3 className="font-semibold text-base mb-3">Quick Navigation</h3>

    <div className="space-y-1.5">

      {sections.map(({ id, label, icon: Icon }) => (

        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition ${
            activeSection === id
              ? "bg-green-600 text-white font-medium"
              : "hover:bg-gray-100 text-gray-700"
          }`}
        >
          <Icon size={14} />
          <span className="truncate">{label}</span>
        </button>

      ))}

    </div>

  </div>

</aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3 space-y-4">

            {/* OVERVIEW */}
            <section id="overview" className="bg-white p-6 rounded-xl border shadow-sm">

              <h2 className="text-2xl font-bold mb-6">Overview</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div>
                  <p className="text-gray-500 text-sm">Price</p>
                  <p className="font-medium text-lg">₹{ipo.price}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Lot Size</p>
                  <p className="font-medium text-lg">{ipo.lot}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Listing</p>
                  <p className="font-medium text-lg">{ipo.listing}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Min Investment</p>
                  <p className="font-medium text-lg">
                    ₹{minInvestment.toLocaleString()}
                  </p>
                </div>

              </div>

            </section>

            {/* ABOUT */}
            {ipo.about && (

              <section id="about" className="bg-white p-6 rounded-xl border shadow-sm">

                <h2 className="text-2xl font-bold mb-6">About Company</h2>

                <p className="text-gray-700 leading-relaxed">
                  {ipo.about}
                </p>

              </section>

            )}

            {/* OBJECTIVES */}
            {Array.isArray(ipo.objectives) && ipo.objectives.length > 0 && (

              <section id="objectives" className="bg-white p-6 rounded-xl border shadow-sm">

                <h2 className="text-2xl font-bold mb-6">IPO Objectives</h2>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">

                  {ipo.objectives.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}

                </ul>

              </section>

            )}

           {/* FINANCIAL HIGHLIGHTS */}
            {Array.isArray(ipo.additionalDetails?.financialHighlights?.periods) && (
              <section id="financials" className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Financial Highlights</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left">Period</th>
                        <th className="p-3 text-right">Assets (Cr)</th>
                        <th className="p-3 text-right">Income (Cr)</th>
                        <th className="p-3 text-right">PAT (Cr)</th>
                        <th className="p-3 text-right">EBITDA (Cr)</th>
                        <th className="p-3 text-right">Net Worth (Cr)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ipo.additionalDetails.financialHighlights.periods.map((f, i) => (
                        <tr key={i} className="border-t hover:bg-gray-50">
                          <td className="p-3">{f.period}</td>
                          <td className="p-3 text-right">{f.assets || "-"}</td>
                          <td className="p-3 text-right">{f.totalIncome || "-"}</td>
                          <td className="p-3 text-right">{f.PAT || "-"}</td>
                          <td className="p-3 text-right">{f.EBITDA || "-"}</td>
                          <td className="p-3 text-right">{f.netWorth || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* VALUATION & KPI */}
            {(ipo.additionalDetails?.financialHighlights?.kpiPrePost || ipo.additionalDetails?.promoterHolding) && (
              <section id="valuation" className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Valuation & KPI</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="overflow-hidden rounded-lg border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 text-left">Metric</th>
                          <th className="p-3 text-center">Pre-IPO</th>
                          <th className="p-3 text-center">Post-IPO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3">EPS</td>
                          <td className="p-3 text-center font-medium">
                            {ipo.additionalDetails?.financialHighlights?.kpiPrePost?.eps?.split(" | ")[0]?.replace("Pre-IPO: ", "") || "N/A"}
                          </td>
                          <td className="p-3 text-center font-medium">
                            {ipo.additionalDetails?.financialHighlights?.kpiPrePost?.eps?.split(" | ")[1]?.replace("Post-IPO: ", "") || "N/A"}
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">P/E</td>
                          <td className="p-3 text-center font-medium">
                            {ipo.additionalDetails?.financialHighlights?.kpiPrePost?.pe?.split(" | ")[0]?.replace("Pre-IPO: ", "") || "N/A"}
                          </td>
                          <td className="p-3 text-center font-medium">
                            {ipo.additionalDetails?.financialHighlights?.kpiPrePost?.pe?.split(" | ")[1]?.replace("Post-IPO: ", "") || "N/A"}
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">Promoter Holding</td>
                          <td className="p-3 text-center font-medium">
                            {ipo.additionalDetails?.promoterHolding?.split(" | ")[0]?.replace("Pre-IPO: ", "") || "N/A"}
                          </td>
                          <td className="p-3 text-center font-medium">
                            {ipo.additionalDetails?.promoterHolding?.split(" | ")[1]?.replace("Post-IPO: ", "") || "N/A"}
                          </td>
                        </tr>
                        <tr className="border-t bg-gray-50">
                          <td className="p-3 font-medium">Market Cap at Issue</td>
                          <td className="p-3 text-center font-medium" colSpan={2}>
                            {ipo.additionalDetails?.financialHighlights?.kpiPrePost?.marketCapAtIssue || "N/A"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="overflow-hidden rounded-lg border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 text-left">Key Ratio (Latest)</th>
                          <th className="p-3 text-center">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-3">ROE</td>
                          <td className="p-3 text-center font-medium">{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.ROE || "N/A"}</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">ROCE</td>
                          <td className="p-3 text-center font-medium">{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.ROCE || "N/A"}</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">Debt/Equity</td>
                          <td className="p-3 text-center font-medium">{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.debtEquity || "N/A"}</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">RoNW</td>
                          <td className="p-3 text-center font-medium">{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.roNW || "N/A"}</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">PAT Margin</td>
                          <td className="p-3 text-center font-medium">{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.patMargin || "N/A"}</td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-3">EBITDA Margin</td>
                          <td className="p-3 text-center font-medium">{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.ebitdaMargin || "N/A"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* TIMELINE */}
            <section id="timeline" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Timeline</h2>
              <div className="space-y-4 text-base divide-y">
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Bidding Period:</span>
                  <span>{ipo.open} – {ipo.close}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Allotment:</span>
                  <span>Feb 26, 2026</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Listing Date:</span>
                  <span>{ipo.listing || "N/A"}</span>
                </div>
                {ipo.additionalDetails?.anchor && (
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Anchor Bid Date:</span>
                    <span>{ipo.additionalDetails.anchor.match(/bid on ([\w\s,]+)/)?.[1] || "N/A"}</span>
                  </div>
                )}
              </div>
            </section>

            {/* LOT & ALLOCATION */}
            {ipo.lot || ipo.minInvestment || ipo.additionalDetails?.ipoReservations ? (
              <section id="lot" className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Lot & Allocation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="rounded-lg border overflow-hidden">
                    <h3 className="font-semibold text-base bg-gray-100 p-3">Lot Size Details</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs md:text-sm">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-center">Lots</th>
                            <th className="p-3 text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="p-3">Retail (Min/Max)</td>
                            <td className="p-3 text-center">2 lots</td>
                            <td className="p-3 text-right">₹2,76,000</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-3">S-HNI (Min)</td>
                            <td className="p-3 text-center">3 lots</td>
                            <td className="p-3 text-right">₹4,14,000</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-3">S-HNI (Max)</td>
                            <td className="p-3 text-center">7 lots</td>
                            <td className="p-3 text-right">₹9,66,000</td>
                          </tr>
                          <tr className="border-t">
                            <td className="p-3">B-HNI (Min)</td>
                            <td className="p-3 text-center">8 lots</td>
                            <td className="p-3 text-right">₹11,04,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {ipo.additionalDetails?.ipoReservations && (
                    <div className="rounded-lg border overflow-hidden">
                      <h3 className="font-semibold text-base bg-gray-100 p-3">Reservation</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs md:text-sm">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="p-3 text-left">Category</th>
                              <th className="p-3 text-center">Shares</th>
                              <th className="p-3 text-center">%</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t">
                              <td className="p-3">Market Maker</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations.marketMaker?.split(" ")[0] || "N/A"}</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations.marketMaker?.match(/\(([^)]+)\)/)?.[1] || "N/A"}</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3">QIB</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations.QIB?.split(" ")[0] || "N/A"}</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations.QIB?.match(/\(([^)]+)\)/)?.[1] || "N/A"}</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3">NII/HNI</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations["NII/HNI"]?.split(" ")[0] || "N/A"}</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations["NII/HNI"]?.match(/\(([^)]+)\)/)?.[1] || "N/A"}</td>
                            </tr>
                            <tr className="border-t">
                              <td className="p-3">Retail</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations.retail?.split(" ")[0] || "N/A"}</td>
                              <td className="p-3 text-center">{ipo.additionalDetails.ipoReservations.retail?.match(/\(([^)]+)\)/)?.[1] || "N/A"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ) : null}

            {/* SUBSCRIPTION */}
            {ipo.subscription && (
              <section id="subscription" className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Subscription Status</h2>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-center">Subscription (x)</th>
                        <th className="p-4 text-center">Shares Offered</th>
                        <th className="p-4 text-center">Shares Bid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t hover:bg-gray-50">
                        <td className="p-4">QIB (Ex Anchor)</td>
                        <td className="p-4 text-center font-bold text-green-700">
                          {ipo.subscription.split("QIB (ex-anchor): ")[1]?.split("x")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">10,56,000</td>
                        <td className="p-4 text-center">16,15,83,000</td>
                      </tr>
                      <tr className="border-t hover:bg-gray-50">
                        <td className="p-4">NII/HNI (Total)</td>
                        <td className="p-4 text-center font-bold text-green-700">606.02</td>
                        <td className="p-4 text-center">7,92,000</td>
                        <td className="p-4 text-center">47,99,70,000</td>
                      </tr>
                      <tr className="text-sm text-gray-600 border-t hover:bg-gray-50">
                        <td className="p-4 pl-8">– bNII (₹10L)</td>
                        <td className="p-4 text-center font-bold text-green-700">709.68</td>
                        <td className="p-4 text-center">5,28,000</td>
                        <td className="p-4 text-center">37,47,12,000</td>
                      </tr>
                      <tr className="text-sm text-gray-600 border-t hover:bg-gray-50">
                        <td className="p-4 pl-8">– sNII (₹10L)</td>
                        <td className="p-4 text-center font-bold text-green-700">398.70</td>
                        <td className="p-4 text-center">2,64,000</td>
                        <td className="p-4 text-center">10,52,58,000</td>
                      </tr>
                      <tr className="border-t hover:bg-gray-50">
                        <td className="p-4">Retail</td>
                        <td className="p-4 text-center font-bold text-green-700">367.59</td>
                        <td className="p-4 text-center">18,48,000</td>
                        <td className="p-4 text-center">67,93,02,000</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold border-t">
                        <td className="p-4">Total</td>
                        <td className="p-4 text-center text-green-700">357.37</td>
                        <td className="p-4 text-center">36,96,000</td>
                        <td className="p-4 text-center">1,32,08,55,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* ANCHOR */}
            {(ipo.additionalDetails?.anchor || ipo.additionalDetails?.anchorLockIn) && (
              <section id="anchor" className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Anchor Investors</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm md:text-base">
                  <div>
                    <p className="text-gray-600">Bid Date</p>
                    <p className="font-medium">
                      {ipo.additionalDetails?.anchor?.match(/bid on ([\w\s,]+)/)?.[1] || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Shares Offered</p>
                    <p className="font-medium">
                      {ipo.additionalDetails?.anchor?.split(" ")[0] || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Amount</p>
                    <p className="font-medium">
                      {ipo.additionalDetails?.anchor?.match(/₹([\d.]+ Cr)/)?.[0] || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">50% Lock-in End</p>
                    <p className="font-medium">
                      {ipo.additionalDetails?.anchorLockIn?.match(/\(.*\)/)?.[0]?.replace(/[()]/g, "") || "N/A"}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* GMP */}
            {ipo.gmp && (
              <section id="gmp" className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold mb-5">Grey Market Premium</h2>
                <p className="text-xl font-semibold text-gray-700">
                  {ipo.gmp}
                </p>
                <p className="text-sm text-gray-500 mt-2">(Indicative as of latest data)</p>
              </section>
            )}

            {/* DOCUMENTS */}
            {ipo.documents && (

              <section id="documents" className="bg-white p-6 rounded-xl border shadow-sm">

                <h2 className="text-2xl font-bold mb-6">Documents</h2>

                <div className="space-y-4">

                  {ipo.documents?.drhp && (
                    <a
                      href={ipo.documents.drhp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <Download size={16} /> DRHP
                    </a>
                  )}

                  {ipo.documents?.rhp && (
                    <a
                      href={ipo.documents.rhp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <Download size={16} /> RHP
                    </a>
                  )}

                </div>

              </section>

            )}

          </main>

        </div>

      </div>

    </div>
  );
};

export default IPODetails;