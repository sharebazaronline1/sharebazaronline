// src/pages/IPODetails.jsx
import { useState, useEffect, useRef } from "react";
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
  const sidebarRef = useRef(null);

  useEffect(() => {
    fetchIPOs().then((ipos) => {
      setIpo(ipos.find((i) => i.id === parseInt(id)));
    });
    window.scrollTo(0, 0);
  }, [id]);

  // Prevent sidebar overlapping footer
  useEffect(() => {
    if (!sidebarRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sidebarRef.current.style.position = "absolute";
          sidebarRef.current.style.bottom = "0";
          sidebarRef.current.style.top = "auto";
        } else {
          sidebarRef.current.style.position = "fixed";
          sidebarRef.current.style.top = "16rem";
          sidebarRef.current.style.bottom = "auto";
        }
      },
      { root: null, threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const footer = document.querySelector("footer") || document.body.lastElementChild;
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, [ipo]);

  const getHigherPrice = (priceStr) => {
    if (!priceStr) return 0;
    const parts = priceStr.toString().split("-");
    return parseInt(parts[parts.length - 1].replace(/[^0-9]/g, "")) || 0;
  };

  const scrollToSection = (sectionId) => {
  setActiveSection(sectionId);
  
  const element = document.getElementById(sectionId);
  if (!element) return;

  // Measure ALL fixed top content more accurately
  const header = document.querySelector('header');
  const applyBar = document.querySelector('header > div.bg-blue-50'); // target the apply bar div

  let totalFixedHeight = 0;

  if (header) {
    totalFixedHeight += header.offsetHeight;
  }
  if (applyBar) {
    totalFixedHeight += applyBar.offsetHeight; // sometimes separate
  }

  // Fallback if measurement fails
  if (totalFixedHeight < 100) {
    totalFixedHeight = 260; // measured average from your screenshot
  }

  const buffer = 96; // small extra space so title isn't glued to bar
  const yOffset = -(totalFixedHeight + buffer);

  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

  if (!ipo) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading IPO details...
      </div>
    );
  }

  const minInvestment = (ipo.lot || 1) * getHigherPrice(ipo.price);

  // Only show sections that have meaningful data
  const sections = [
    { id: "overview", label: "Overview", icon: Home, always: true },
    { id: "about", label: "About", icon: Building2, show: !!ipo.about || !!ipo.issueSize || !!ipo.leadManager },
    { id: "objectives", label: "Objectives", icon: Target, show: Array.isArray(ipo.objectives) && ipo.objectives.length > 0 },
    { id: "financials", label: "Financials", icon: BarChart3, show: Array.isArray(ipo.additionalDetails?.financialHighlights?.periods) && ipo.additionalDetails.financialHighlights.periods.length > 0 },
    { id: "valuation", label: "Valuation & KPI", icon: IndianRupee, show: ipo.additionalDetails?.financialHighlights?.kpiPrePost || ipo.additionalDetails?.promoterHolding },
    { id: "timeline", label: "Timeline", icon: Clock, always: true },
    { id: "lot", label: "Lot & Allocation", icon: Ticket, show: ipo.lot || ipo.minInvestment || ipo.additionalDetails?.ipoReservations },
    { id: "subscription", label: "Subscription", icon: Users, show: !!ipo.subscription },
    { id: "anchor", label: "Anchor", icon: CheckCircle, show: !!ipo.additionalDetails?.anchor || !!ipo.additionalDetails?.anchorLockIn },
    { id: "gmp", label: "GMP", icon: IndianRupee, show: !!ipo.gmp },
    { id: "documents", label: "Docs", icon: Download, show: ipo.documents && Object.values(ipo.documents).some(link => !!link) },
  ].filter(s => s.always || s.show);

  const hasDocuments = ipo.documents && Object.values(ipo.documents).some(Boolean);

  return (
    <div className="min-h-screen bg-white">

      {/* FIXED HEADER + APPLY BAR */}
      <header className="fixed inset-x-0 z-30 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              {ipo.logo ? (
                <img src={ipo.logo} alt={ipo.name} className="w-14 h-14 object-contain border rounded-lg" />
              ) : (
                <div className="w-14 h-14 bg-gray-700 text-white flex items-center justify-center rounded-lg text-xl font-bold">
                  {ipo.name.charAt(0)}
                </div>
              )}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{ipo.name}</h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{ipo.fullName}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">₹{minInvestment.toLocaleString()}</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Minimum Investment</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 text-blue-900 text-sm md:text-base">
              <AlertTriangle size={16} />
              Ready to invest in this opportunity? Apply now through our trusted platforms.
            </div>
            <button
              onClick={() => navigate("/how-to-apply-ipo")}
              className="bg-green-600 text-white px-6 py-2 rounded-full text-sm md:text-base font-medium whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div className="pt-48 md:pt-56 lg:pt-64 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* SMALLER FIXED SIDEBAR */}
         <aside
  ref={sidebarRef}
  className="hidden lg:block fixed top-64 left-8 w-60 border rounded-xl p-3 bg-white shadow-md transition-all duration-300"
>
  <h3 className="font-bold text-sm mb-3">Quick Navigation</h3>
  <div className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto text-xs">
    {sections.map(({ id, label, icon: Icon }) => (
      <button
        key={id}
        onClick={() => scrollToSection(id)}
        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
          activeSection === id 
            ? "bg-green-600 text-white font-medium" 
            : "hover:bg-gray-50 text-gray-700"
        }`}
      >
        <Icon size={13} className="shrink-0" /> 
        <span className="truncate">{label}</span>
      </button>
    ))}
  </div>
</aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3 lg:ml-72 space-y-12">

            {/* OVERVIEW - always shown */}
            <section id="overview">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-500">Price</p>
                  <p className="font-medium text-lg">₹{ipo.price || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Lot Size</p>
                  <p className="font-medium text-lg">{ipo.lot || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Listing</p>
                  <p className="font-medium text-lg">{ipo.listing || "N/A"}</p>
                </div>
                <div>
                  <p className="text-gray-500">Min Investment</p>
                  <p className="font-medium text-lg">₹{minInvestment.toLocaleString()}</p>
                </div>
              </div>
            </section>

            {/* ABOUT - conditional */}
            {ipo.about || ipo.issueSize || ipo.leadManager ? (
              <section id="about">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">About Company</h2>
                {ipo.about && (
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">{ipo.about}</p>
                )}
                <p className="mt-4 text-gray-700 text-base md:text-lg">
                  Issue Type: Bookbuilding IPO {ipo.issueSize && `| Issue Size: ${ipo.issueSize}`} | 
                  Lead Manager: {ipo.leadManager || "N/A"} | Registrar: {ipo.registrar || "N/A"}
                </p>
              </section>
            ) : null}

            {/* OBJECTIVES - conditional */}
            {Array.isArray(ipo.objectives) && ipo.objectives.length > 0 && (
              <section id="objectives">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">IPO Objectives</h2>
                <ul className="list-disc ml-6 space-y-3 text-gray-700 text-base md:text-lg">
                  {ipo.objectives.map((o, i) => (
                    <li key={i}>
                      {o} {ipo.totalObjectsAmount && i === ipo.objectives.length - 1 && `(Total: ${ipo.totalObjectsAmount})`}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FINANCIALS - conditional */}
            {Array.isArray(ipo.additionalDetails?.financialHighlights?.periods) && ipo.additionalDetails.financialHighlights.periods.length > 0 && (
              <section id="financials">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Financials</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border text-sm md:text-base">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3">Period</th>
                        <th>Assets</th>
                        <th>Income</th>
                        <th>PAT</th>
                        <th>EBITDA</th>
                        <th>Net Worth</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ipo.additionalDetails.financialHighlights.periods.map((f, i) => (
                        <tr key={i} className="text-center border-t">
                          <td className="p-3">{f.period}</td>
                          <td>{f.assets || "-"}</td>
                          <td>{f.totalIncome || "-"}</td>
                          <td>{f.PAT || "-"}</td>
                          <td>{f.EBITDA || "-"}</td>
                          <td>{f.netWorth || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* VALUATION & KPI - conditional */}
            {(ipo.additionalDetails?.financialHighlights?.kpiPrePost || ipo.additionalDetails?.promoterHolding) && (
              <section id="valuation">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Valuation & KPI</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-lg mb-4">Pre & Post IPO</h3>
                    <div className="space-y-3 text-base">
                      <p>EPS: <strong>Pre ₹{ipo.additionalDetails?.financialHighlights?.kpiPrePost?.eps?.split(" | ")[0]?.replace("Pre-IPO: ", "") || "N/A"}</strong> / Post ₹{ipo.additionalDetails?.financialHighlights?.kpiPrePost?.eps?.split(" | ")[1]?.replace("Post-IPO: ", "") || "N/A"}</p>
                      <p>P/E: <strong>Pre {ipo.additionalDetails?.financialHighlights?.kpiPrePost?.pe?.split(" | ")[0]?.replace("Pre-IPO: ", "") || "N/A"}</strong> / Post {ipo.additionalDetails?.financialHighlights?.kpiPrePost?.pe?.split(" | ")[1]?.replace("Post-IPO: ", "") || "N/A"}</p>
                      <p>Promoter Holding: <strong>Pre {ipo.additionalDetails?.promoterHolding?.split(" | ")[0]?.replace("Pre-IPO: ", "") || "N/A"}</strong> / Post {ipo.additionalDetails?.promoterHolding?.split(" | ")[1]?.replace("Post-IPO: ", "") || "N/A"}</p>
                      <p>Market Cap at Issue: <strong>{ipo.additionalDetails?.financialHighlights?.kpiPrePost?.marketCapAtIssue || "N/A"}</strong></p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-lg mb-4">Key Ratios (Latest)</h3>
                    <div className="space-y-3 text-base">
                      <p>ROE: <strong>{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.ROE || "N/A"}</strong></p>
                      <p>ROCE: <strong>{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.ROCE || "N/A"}</strong></p>
                      <p>Debt/Equity: <strong>{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.debtEquity || "N/A"}</strong></p>
                      <p>RoNW: <strong>{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.roNW || "N/A"}</strong></p>
                      <p>PAT Margin: <strong>{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.patMargin || "N/A"}</strong></p>
                      <p>EBITDA Margin: <strong>{ipo.additionalDetails?.financialHighlights?.periods?.[0]?.ebitdaMargin || "N/A"}</strong></p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* TIMELINE - always shown */}
            <section id="timeline">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Timeline</h2>
              <div className="bg-gray-50 p-6 rounded-lg border space-y-4 text-base">
                <div className="flex justify-between">
                  <span className="font-medium">Bidding Period:</span>
                  <span>{ipo.open} – {ipo.close}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Allotment:</span>
                  <span>Feb 26, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Listing Date:</span>
                  <span>{ipo.listing || "N/A"}</span>
                </div>
                {ipo.additionalDetails?.anchor && (
                  <div className="flex justify-between">
                    <span className="font-medium">Anchor Bid Date:</span>
                    <span>{ipo.additionalDetails.anchor.match(/bid on ([\w\s,]+)/)?.[1] || "N/A"}</span>
                  </div>
                )}
              </div>
            </section>

            {/* LOT & ALLOCATION - conditional */}
            {ipo.lot || ipo.minInvestment || ipo.additionalDetails?.ipoReservations ? (
              <section id="lot">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Lot & Allocation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold mb-3 text-lg">Lot Size</h3>
                    <p className="text-lg">Lot Size: <strong>{ipo.lot || "N/A"} Shares</strong></p>
                    <p className="mt-2 text-base">Min Retail: <strong>₹{ipo.minInvestment?.toLocaleString() || "N/A"}</strong></p>
                  </div>

                  {ipo.additionalDetails?.ipoReservations && (
                    <div className="bg-gray-50 p-6 rounded-lg border">
                      <h3 className="font-semibold mb-3 text-lg">Reservation</h3>
                      <ul className="space-y-2 text-sm md:text-base">
                        <li>Market Maker: {ipo.additionalDetails.ipoReservations.marketMaker || "N/A"}</li>
                        <li>QIB: {ipo.additionalDetails.ipoReservations.QIB || "N/A"}</li>
                        <li>NII/HNI: {ipo.additionalDetails.ipoReservations["NII/HNI"] || "N/A"}</li>
                        <li>Retail: {ipo.additionalDetails.ipoReservations.retail || "N/A"}</li>
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            ) : null}

            {/* SUBSCRIPTION - conditional */}
            {ipo.subscription && (
              <section id="subscription">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Subscription Status</h2>
                <div className="overflow-x-auto bg-gray-50 rounded-lg border">
                  <table className="w-full text-sm md:text-base">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-center">Subscription (x)</th>
                        <th className="p-4 text-center">Shares Offered</th>
                        <th className="p-4 text-center">Shares Bid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4">QIB (Ex Anchor)</td>
                        <td className="p-4 text-center font-bold text-green-700">
                          {ipo.subscription.split("QIB (ex-anchor): ")[1]?.split("x")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.additionalDetails?.ipoReservations?.["QIB ex-anchor"]?.split(" ")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.subscription.match(/QIB.*bid\) ([\d,]+)/)?.[1] || "N/A"}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4">NII/HNI</td>
                        <td className="p-4 text-center font-bold text-green-700">
                          {ipo.subscription.split("NII: ")[1]?.split("x")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.additionalDetails?.ipoReservations?.["NII/HNI"]?.split(" ")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.subscription.match(/NII.*bid\) ([\d,]+)/)?.[1] || "N/A"}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4">Retail</td>
                        <td className="p-4 text-center font-bold text-green-700">
                          {ipo.subscription.split("Retail: ")[1]?.split("x")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.additionalDetails?.ipoReservations?.retail?.split(" ")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.subscription.match(/Retail.*bid\) ([\d,]+)/)?.[1] || "N/A"}
                        </td>
                      </tr>
                      <tr className="bg-gray-100 font-bold">
                        <td className="p-4">Total</td>
                        <td className="p-4 text-center text-green-700">
                          {ipo.subscription.split("Overall: ")[1]?.split("x")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.additionalDetails?.netPublicOffer?.split(" ")[0] || "N/A"}
                        </td>
                        <td className="p-4 text-center">
                          {ipo.subscription.match(/Total.*bid\) ([\d,]+)/)?.[1] || "N/A"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* ANCHOR - conditional */}
            {(ipo.additionalDetails?.anchor || ipo.additionalDetails?.anchorLockIn) && (
              <section id="anchor">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Anchor Investors</h2>
                <div className="bg-gray-50 p-6 rounded-lg border space-y-4 text-base">
                  <div className="grid grid-cols-2 gap-6">
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
                </div>
              </section>
            )}

            {/* GMP - conditional */}
            {ipo.gmp && (
              <section id="gmp">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Grey Market Premium</h2>
                <p className="text-xl font-semibold text-gray-700 mt-4">
                  {ipo.gmp}
                </p>
                <p className="text-sm text-gray-500 mt-2">(Indicative as of latest data)</p>
              </section>
            )}

            {/* DOCUMENTS - conditional but visible when links exist */}
            {hasDocuments && (
              <section id="documents">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Documents</h2>
                <div className="space-y-4 mt-4">
                  {ipo.documents?.finalProspectus && (
                    <a
                      href={ipo.documents.finalProspectus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-base md:text-lg"
                    >
                      <Download size={16} /> Final Prospectus
                    </a>
                  )}
                  {ipo.documents?.drhp && (
                    <a
                      href={ipo.documents.drhp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-base md:text-lg"
                    >
                      <Download size={16} /> DRHP
                    </a>
                  )}
                  {ipo.documents?.rhp && (
                    <a
                      href={ipo.documents.rhp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-base md:text-lg"
                    >
                      <Download size={16} /> RHP
                    </a>
                  )}
                  {ipo.documents?.anchorLetter && (
                    <a
                      href={ipo.documents.anchorLetter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-base md:text-lg"
                    >
                      <Download size={16} /> Anchor Investor Letter
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