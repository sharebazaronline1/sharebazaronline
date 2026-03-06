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
  TrendingUp,
  Briefcase,
  DollarSign,
  Shield,
  Clock,
  Ticket,
  Users,
  IndianRupee,
  HelpCircle,
  CheckCircle,
  XCircle,
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
      const yOffset = -180;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!ipo) {
    return (
      <div className="flex justify-center items-center h-screen">
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
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "documents", label: "Docs", icon: Download },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* FIXED HEADER + APPLY BAR */}
      <header className="fixed inset-x-0  z-30 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
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
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{ipo.name}</h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{ipo.fullName}</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                ₹{minInvestment.toLocaleString()}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">Minimum Investment</p>
            </div>
          </div>
        </div>

        {/* APPLY BAR */}
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

      {/* MAIN PAGE CONTENT - REDUCED top padding only here */}
      <div className="pt-48 md:pt-56 lg:pt-64 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* FIXED SIDEBAR - Quick Navigation */}
          <aside className="hidden lg:block fixed top-64 left-8  w-72 border rounded-xl p-6 bg-white shadow-md">
            <h3 className="font-bold text-lg mb-5">Quick Navigation</h3>
            <div className="space-y-2 max-h-[calc(100vh-320px)] overflow-y-auto">
              {sections.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                    activeSection === id
                      ? "bg-green-600 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon size={16} /> {label}
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="lg:col-span-3 lg:ml-80 space-y-12">

            {/* OVERVIEW */}
            <section id="overview">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-500">Price</p>
                  <p className="font-medium text-lg">₹{ipo.price}</p>
                </div>
                <div>
                  <p className="text-gray-500">Lot Size</p>
                  <p className="font-medium text-lg">{ipo.lot}</p>
                </div>
                <div>
                  <p className="text-gray-500">Listing</p>
                  <p className="font-medium text-lg">{ipo.listing}</p>
                </div>
                <div>
                  <p className="text-gray-500">Min Investment</p>
                  <p className="font-medium text-lg">
                    ₹{minInvestment.toLocaleString()}
                  </p>
                </div>
              </div>
            </section>

            {/* ABOUT */}
            <section id="about">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">About Company</h2>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {ipo.about || "Company overview not available."}
              </p>
              <p className="mt-4 text-gray-700 text-base md:text-lg">
                Issue Type: {ipo.ipoType || "Bookbuilding IPO"} | Issue Size: {ipo.issueSize || "₹25.59 Cr"} | 
                Lead Manager: {ipo.leadManager || "N/A"} | Registrar: {ipo.registrar || "N/A"}
              </p>
            </section>

            {/* OBJECTIVES */}
            <section id="objectives">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">IPO Objectives</h2>
              <ul className="list-disc ml-6 space-y-3 text-gray-700 text-base md:text-lg">
                {ipo.objectives?.map((o, i) => (
                  <li key={i}>
                    {o.purpose || o.title || o} {o.amount && `- ${o.amount}`}
                  </li>
                ))}
              </ul>
              {ipo.totalObjectsAmount && (
                <p className="mt-6 font-medium text-gray-800 text-lg">
                  Total Estimated Amount: {ipo.totalObjectsAmount}
                </p>
              )}
            </section>

            {/* FINANCIALS */}
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
                    {ipo.financials?.map((f, i) => (
                      <tr key={i} className="text-center border-t">
                        <td className="p-3">{f.period}</td>
                        <td>{f.assets}</td>
                        <td>{f.totalIncome || f.revenue}</td>
                        <td>{f.pat}</td>
                        <td>{f.ebitda}</td>
                        <td>{f.netWorth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* VALUATION & KPI */}
            <section id="valuation">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Valuation & KPI</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4">Pre & Post IPO</h3>
                  <div className="space-y-3 text-base">
                    <p>EPS: Pre ₹{ipo.prePostIpo?.eps?.pre || "N/A"} / Post ₹{ipo.prePostIpo?.eps?.post || "N/A"}</p>
                    <p>P/E: Pre {ipo.prePostIpo?.pe?.pre || "N/A"} / Post {ipo.prePostIpo?.pe?.post || "N/A"}</p>
                    <p>Promoter Holding: Pre {ipo.prePostIpo?.promoterHolding?.pre || "N/A"} / Post {ipo.prePostIpo?.promoterHolding?.post || "N/A"}</p>
                    <p>Market Cap (Pre): {ipo.prePostIpo?.marketCapPre || "N/A"}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4">Key Ratios (Dec 31, 2025)</h3>
                  <div className="space-y-3 text-base">
                    {ipo.kpi?.dec312025 &&
                      Object.entries(ipo.kpi.dec312025).map(([key, value]) => (
                        <p key={key} className="capitalize">
                          {key.replace(/([A-Z])/g, " $1")}: <strong>{value}</strong>
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </section>

            {/* STRENGTHS & RISKS */}
             <section id="strengths-risks">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Strengths & Risks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-green-700 flex items-center gap-2 text-lg">
                    <CheckCircle size={20} /> Strengths
                  </h3>
                  {ipo.strengths?.map((s, i) => (
                    <p key={i} className="flex gap-2 items-start text-base">
                      <CheckCircle className="text-green-600 mt-1" size={16} />
                      {s}
                    </p>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-red-700 flex items-center gap-2 text-lg">
                    <XCircle size={20} /> Risks
                  </h3>
                  {ipo.risks?.map((r, i) => (
                    <p key={i} className="flex gap-2 items-start text-base">
                      <XCircle className="text-red-600 mt-1" size={16} />
                      {r}
                    </p>
                  ))}
                </div>
              </div>
            </section> 

            {/* TIMELINE */}
            <section id="timeline">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Timeline</h2>
              <div className="bg-gray-50 p-6 rounded-lg border space-y-4 text-base">
                <div className="flex justify-between">
                  <span className="font-medium">Bidding Period:</span>
                  <span>{ipo.open} – {ipo.close}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Allotment:</span>
                  <span>{ipo.allotmentDate || "Feb 26, 2026"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Listing Date:</span>
                  <span>{ipo.listing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Anchor Bid Date:</span>
                  <span>{ipo.anchor?.bidDate || "N/A"}</span>
                </div>
              </div>
            </section>

            {/* LOT & ALLOCATION */}
            <section id="lot">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Lot & Allocation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="font-semibold mb-3 text-lg">Lot Size</h3>
                  <p className="text-lg">Lot Size: <strong>{ipo.lot} Shares</strong></p>
                  <p className="mt-2 text-base">Min Retail: <strong>₹{ipo.minInvestmentRetail?.toLocaleString() || "N/A"}</strong></p>
                  <p className="text-base">Min HNI: <strong>₹{ipo.minInvestmentHNI?.toLocaleString() || "N/A"}</strong></p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="font-semibold mb-3 text-lg">Reservation</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li>Market Maker: {ipo.reservation?.marketMaker?.percent || "N/A"}</li>
                    <li>QIB: {ipo.reservation?.qib?.percent || "N/A"}</li>
                    <li>NII/HNI: {ipo.reservation?.niiHni?.percent || "N/A"}</li>
                    <li>Retail: {ipo.reservation?.retail?.percent || "N/A"}</li>
                  </ul>
                </div>
              </div>
            </section> 

            {/* SUBSCRIPTION */}
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
                        {ipo.subscriptionStatus?.qibNonAnchor?.subscription || "N/A"}
                      </td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.qibNonAnchor?.sharesOffered || "N/A"}</td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.qibNonAnchor?.sharesBid || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="p-4">NII/HNI</td>
                      <td className="p-4 text-center font-bold text-green-700">
                        {ipo.subscriptionStatus?.niiHni?.subscription || "N/A"}
                      </td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.niiHni?.sharesOffered || "N/A"}</td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.niiHni?.sharesBid || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="p-4">Retail</td>
                      <td className="p-4 text-center font-bold text-green-700">
                        {ipo.subscriptionStatus?.retail?.subscription || "N/A"}
                      </td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.retail?.sharesOffered || "N/A"}</td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.retail?.sharesBid || "N/A"}</td>
                    </tr>
                    <tr className="bg-gray-100 font-bold">
                      <td className="p-4">Total</td>
                      <td className="p-4 text-center text-green-700">
                        {ipo.subscriptionStatus?.total?.subscription || "N/A"}
                      </td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.total?.sharesOffered || "N/A"}</td>
                      <td className="p-4 text-center">{ipo.subscriptionStatus?.total?.sharesBid || "N/A"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ANCHOR */}
            <section id="anchor">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Anchor Investors</h2>
              <div className="bg-gray-50 p-6 rounded-lg border space-y-4 text-base">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-600">Bid Date</p>
                    <p className="font-medium">{ipo.anchor?.bidDate || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Shares Offered</p>
                    <p className="font-medium">{ipo.anchor?.sharesOffered?.toLocaleString() || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Amount</p>
                    <p className="font-medium">{ipo.anchor?.amount || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">50% Lock-in End</p>
                    <p className="font-medium">{ipo.anchor?.lockIn50PercentEnd || "N/A"}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* EXPENSES */}
            {/* <section id="expenses">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">IPO Expenses</h2>
              <div className="overflow-x-auto bg-gray-50 rounded-lg border">
                <table className="w-full text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 text-left">#</th>
                      <th className="p-4 text-left">Expense Item</th>
                      <th className="p-4 text-right">Amount (₹ Cr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipo.issueExpenses?.map((exp, i) => (
                      <tr key={i}>
                        <td className="p-4">{i + 1}</td>
                        <td className="p-4">{exp.item}</td>
                        <td className="p-4 text-right font-medium">{exp.amount}</td>
                      </tr>
                    ))}
                    <tr className="bg-gray-100 font-bold">
                      <td colSpan="2" className="p-4 text-right">Total</td>
                      <td className="p-4 text-right">{ipo.totalExpenses}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section> */}

            {/* GMP */}
            <section id="gmp">
              <h2 className="text-xl md:text-xl font-bold mb-6">Grey Market Premium</h2>
              <p className="text-xl md:text-xl font-semibold text-gray-700 mt-4">
                {ipo.gmp || "Not Available"}
              </p>
              <p className="text-sm md:text-base text-gray-500 mt-2">(Indicative as of latest data)</p>
            </section>

            {/* DOCUMENTS */}
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

          </main>
        </div>
      </div>
    </div>
  );
};

export default IPODetails;