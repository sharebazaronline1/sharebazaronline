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
  HelpCircle,
  Clock,
  IndianRupee,
  Ticket,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { fetchIPOs } from "../api/mockApi";

const IPODetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ipo, setIpo] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");
  // State to track which FAQ items are open (key = index)
  const [openFaqs, setOpenFaqs] = useState({});

  useEffect(() => {
    fetchIPOs().then((ipos) => {
      setIpo(ipos.find((i) => i.id === parseInt(id)));
    });
    window.scrollTo(0, 0);
  }, [id]);

 const getHigherPrice = (priceStr) => {
  if (!priceStr) return 0;

  const clean = priceStr.replace(/[₹,\s]/g, "");
  const parts = clean.split(/[-–]/);

  return parseInt(parts[parts.length - 1]) || 0;
};


  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 220;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!ipo) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading IPO details...
      </div>
    );
  }
const getMinInvestment = (ipo) => {

  // 1️⃣ If already provided in detailed JSON
  if (ipo.ipo_basic_details?.minimum_investment) {
    return parseInt(
      ipo.ipo_basic_details.minimum_investment.replace(/[^0-9]/g, "")
    );
  }

  // 2️⃣ If minInvestment exists in root
  if (ipo.minInvestment) {
    return parseInt(ipo.minInvestment.replace(/[^0-9]/g, ""));
  }

  // 3️⃣ Calculate using price band and lot size
  const lot =
    ipo.lot ||
    ipo.minBidQuantity ||
    ipo.ipo_basic_details?.lot_size ||
    1;

  const price =
    getHigherPrice(ipo.price) ||
    getHigherPrice(
      `${ipo.ipo_basic_details?.price_band_min || ""}-${ipo.ipo_basic_details?.price_band_max || ""}`
    );

  return lot * price;
};
const minInvestment = getMinInvestment(ipo);


  const sections = [
    { id: "about", label: "About", icon: Building2 },
    { id: "basic-details", label: "IPO Basic Details", icon: Building2 },
    { id: "company-overview", label: "Company Overview", icon: Target },
    { id: "strengths-risks", label: "IPO Strengths & Risks", icon: Target },
    { id: "important-dates", label: "IPO Important Dates", icon: Clock },
    { id: "objectives", label: "IPO Objectives", icon: Target },
    { id: "investor-reservation", label: "Investor Reservation", icon: Users },
    { id: "lot-allocation", label: "Market Lot Details", icon: Ticket },
    { id: "kpi", label: "Key Performance Indicators", icon: IndianRupee },
    { id: "financials", label: "Financials", icon: BarChart3 },
    { id: "gmp", label: "Grey Market Premium", icon: IndianRupee },
    { id: "subscription", label: "IPO Subscription Data", icon: Users },
    { id: "intermediaries", label: "IPO Intermediaries", icon: Users },
    { id: "lead-manager", label: "IPO Lead Manager(s)", icon: Building2 },
    { id: "company-info", label: "Company Information", icon: Building2 },
    { id: "documents", label: "IPO Documents", icon: Download },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <header className="fixed inset-x-0 z-40 bg-white shadow-sm">
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
                {minInvestment.toLocaleString()}
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

            {/* 1. About Company */}
            <section id="about" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">About Company</h2>
              <div className="space-y-3 text-sm md:text-base">
                <p><strong>Company Name:</strong> {ipo.about_company?.company_name}</p>
                <p><strong>Industry / Sector:</strong> {ipo.about_company?.industry_sector}</p>
                <p><strong>Founded Year:</strong> {ipo.about_company?.founded_year}</p>
                <p><strong>Promoters:</strong> {ipo.about_company?.promoters?.join(", ")}</p>
                <p className="mt-4">{ipo.about_company?.description}</p>
              </div>
            </section>

            {/* 2. IPO Basic Details */}
            <section id="basic-details" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Basic Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Company Name</td>
                      <td className="p-3">{ipo.ipo_basic_details?.company_name || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">IPO Type</td>
                      <td className="p-3">{ipo.ipo_basic_details?.ipo_type || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Issue Type</td>
                      <td className="p-3">{ipo.ipo_basic_details?.issue_type || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Face Value</td>
                      <td className="p-3">{ipo.ipo_basic_details?.face_value || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Price Band</td>
                      <td className="p-3">
                        {ipo.ipo_basic_details?.price_band_min || "-"} – {ipo.ipo_basic_details?.price_band_max || "-"}
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Lot Size</td>
                      <td className="p-3">{ipo.ipo_basic_details?.lot_size || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Total Issue Size</td>
                      <td className="p-3">{ipo.ipo_basic_details?.total_issue_size || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Fresh Issue Size</td>
                      <td className="p-3">{ipo.ipo_basic_details?.fresh_issue_size || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Offer for Sale</td>
                      <td className="p-3">{ipo.ipo_basic_details?.offer_for_sale || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Shares Offered</td>
                      <td className="p-3">{ipo.ipo_basic_details?.shares_offered || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Listing Exchange</td>
                      <td className="p-3">{ipo.ipo_basic_details?.listing_exchange || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Issue Price</td>
                      <td className="p-3">{ipo.ipo_basic_details?.issue_price || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Minimum Investment</td>
                      <td className="p-3">{ipo.ipo_basic_details?.minimum_investment || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Market Cap Post Issue</td>
                      <td className="p-3">{ipo.ipo_basic_details?.market_cap_post_issue || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Pre-issue Shareholding</td>
                      <td className="p-3">{ipo.ipo_basic_details?.pre_issue_shareholding || "-"}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-medium">Post-issue Shareholding</td>
                      <td className="p-3">{ipo.ipo_basic_details?.post_issue_shareholding || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 3. Company Overview */}
            <section id="company-overview" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Company Overview</h2>
              <div className="space-y-4 text-sm md:text-base">
                <p><strong>Business Model:</strong> {ipo.company_overview?.business_model}</p>
                <div>
                  <strong>Products / Services:</strong>
                  <ul className="list-disc ml-6 mt-1">
                    {ipo.company_overview?.products_services?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* IPO Strengths & Risks */}
            <section id="strengths-risks" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Strengths & Risks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Strengths</h3>
                  <ul className="list-disc ml-6 space-y-3 text-gray-700 text-sm md:text-base">
                    {ipo.company_overview?.competitive_strengths?.map((strength, i) => (
                      <li key={i} className="leading-relaxed">{strength}</li>
                    )) || <li>No strengths listed</li>}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Risks</h3>
                  <ul className="list-disc ml-6 space-y-3 text-gray-700 text-sm md:text-base">
                    {ipo.company_overview?.risks?.map((risk, i) => (
                      <li key={i} className="leading-relaxed">{risk}</li>
                    )) || <li>No risks listed</li>}
                  </ul>
                </div>
              </div>
            </section>

            {/* IPO Important Dates */}
            <section id="important-dates" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Important Dates</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">IPO Open Date</td>
                      <td className="p-3">{ipo.ipo_important_dates?.ipo_open_date || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">IPO Close Date</td>
                      <td className="p-3">{ipo.ipo_important_dates?.ipo_close_date || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Basis of Allotment</td>
                      <td className="p-3">{ipo.ipo_important_dates?.basis_of_allotment_date || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Refund Initiation</td>
                      <td className="p-3">{ipo.ipo_important_dates?.refund_initiation_date || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Demat Credit Date</td>
                      <td className="p-3">{ipo.ipo_important_dates?.demat_credit_date || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Listing Date</td>
                      <td className="p-3">{ipo.ipo_important_dates?.listing_date || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Anchor Investor Date</td>
                      <td className="p-3">{ipo.ipo_important_dates?.anchor_investor_date || "-"}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-medium">UPI Mandate Deadline</td>
                      <td className="p-3">{ipo.ipo_important_dates?.upi_mandate_deadline || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* IPO Objectives */}
            <section id="objectives" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Objectives</h2>
              <ul className="list-disc ml-6 space-y-3 text-gray-700">
                <li>Capital expenditure for machinery and equipment – {ipo.ipo_objectives?.expansion}</li>
                <li>Funding working capital requirements – {ipo.ipo_objectives?.working_capital}</li>
                <li>Debt repayment – {ipo.ipo_objectives?.debt_repayment}</li>
                <li>General corporate purposes – {ipo.ipo_objectives?.general_corporate_purposes}</li>
              </ul>
            </section>

            {/* Investor Reservation */}
            <section id="investor-reservation" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Investor Reservation</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">QIB Quota</td>
                      <td className="p-3">{ipo.investor_reservation?.qib_quota || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Retail Quota</td>
                      <td className="p-3">{ipo.investor_reservation?.retail_quota || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">HNI Quota</td>
                      <td className="p-3">{ipo.investor_reservation?.hni_quota || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Employee Quota</td>
                      <td className="p-3">{ipo.investor_reservation?.employee_quota || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Shareholder Quota</td>
                      <td className="p-3">{ipo.investor_reservation?.shareholder_quota || "-"}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-medium">Anchor Investor Allocation</td>
                      <td className="p-3">{ipo.investor_reservation?.anchor_investor_allocation || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Market Lot Details */}
            <section id="lot-allocation" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Market Lot Details</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Application</th>
                      <th className="p-3 text-center">Lot Size</th>
                      <th className="p-3 text-center">Shares</th>
                      <th className="p-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="p-3">Retail Minimum</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.retail_minimum?.lot_size || "-"}</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.retail_minimum?.shares || "-"}</td>
                      <td className="p-3 text-right">{ipo.market_lot_details?.retail_minimum?.amount || "-"}</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="p-3">Retail Maximum</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.retail_maximum?.lot_size || "-"}</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.retail_maximum?.shares || "-"}</td>
                      <td className="p-3 text-right">{ipo.market_lot_details?.retail_maximum?.amount || "-"}</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="p-3">S-HNI Minimum</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.shni_minimum?.lot_size || "-"}</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.shni_minimum?.shares || "-"}</td>
                      <td className="p-3 text-right">{ipo.market_lot_details?.shni_minimum?.amount || "-"}</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="p-3">S-HNI Maximum</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.shni_maximum?.lot_size || "-"}</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.shni_maximum?.shares || "-"}</td>
                      <td className="p-3 text-right">{ipo.market_lot_details?.shni_maximum?.amount || "-"}</td>
                    </tr>
                    <tr className="border-t hover:bg-gray-50">
                      <td className="p-3">B-HNI Minimum</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.bhni_minimum?.lot_size || "-"}</td>
                      <td className="p-3 text-center">{ipo.market_lot_details?.bhni_minimum?.shares || "-"}</td>
                      <td className="p-3 text-right">{ipo.market_lot_details?.bhni_minimum?.amount || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Performance Indicators (KPI) */}
            <section id="kpi" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Key Performance Indicators (KPI)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">ROE</td>
                      <td className="p-3">{ipo.key_performance_indicators?.roe || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">ROCE</td>
                      <td className="p-3">{ipo.key_performance_indicators?.roce || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">RoNW</td>
                      <td className="p-3">{ipo.key_performance_indicators?.ronw || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">PAT Margin</td>
                      <td className="p-3">{ipo.key_performance_indicators?.pat_margin || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">EBITDA Margin</td>
                      <td className="p-3">{ipo.key_performance_indicators?.ebitda_margin || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">EPS</td>
                      <td className="p-3">{ipo.key_performance_indicators?.eps || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">NAV per share</td>
                      <td className="p-3">{ipo.key_performance_indicators?.nav_per_share || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Debt to Equity</td>
                      <td className="p-3">{ipo.key_performance_indicators?.debt_to_equity || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">P/E Ratio</td>
                      <td className="p-3">{ipo.key_performance_indicators?.pe_ratio || "-"}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-medium">Industry P/E</td>
                      <td className="p-3">{ipo.key_performance_indicators?.industry_pe || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Company Financial Data */}
            <section id="financials" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Company Financial Data</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Period</th>
                      <th className="p-3 text-right">Assets</th>
                      <th className="p-3 text-right">Total Income</th>
                      <th className="p-3 text-right">PAT</th>
                      <th className="p-3 text-right">EBITDA</th>
                      <th className="p-3 text-right">Net Worth</th>
                      <th className="p-3 text-right">Borrowings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ipo.company_financial_data?.map((f, i) => (
                      <tr key={i} className="border-t hover:bg-gray-50">
                        <td className="p-3">{f.period}</td>
                        <td className="p-3 text-right">{f.assets || "-"}</td>
                        <td className="p-3 text-right">{f.total_income || "-"}</td>
                        <td className="p-3 text-right">{f.pat || "-"}</td>
                        <td className="p-3 text-right">{f.ebitda || "-"}</td>
                        <td className="p-3 text-right">{f.net_worth || "-"}</td>
                        <td className="p-3 text-right">{f.total_borrowing || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Grey Market Premium */}
            <section id="gmp" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Grey Market Premium</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">GMP Price</td>
                      <td className="p-3">{ipo.grey_market_premium?.gmp_price || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Kostak Rate</td>
                      <td className="p-3">{ipo.grey_market_premium?.kostak_rate || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Subject to Sauda</td>
                      <td className="p-3">{ipo.grey_market_premium?.subject_to_sauda || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Last Updated</td>
                      <td className="p-3">{ipo.grey_market_premium?.gmp_last_updated || "-"}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-medium">Estimated Listing Price</td>
                      <td className="p-3">{ipo.grey_market_premium?.estimated_listing_price || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* IPO Subscription Data */}
            <section id="subscription" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Subscription Data</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Total Subscription</td>
                      <td className="p-3">{ipo.ipo_subscription_data?.total_subscription || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">QIB (Ex Anchor)</td>
                      <td className="p-3">{ipo.ipo_subscription_data?.qib_ex_anchor || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">HNI Subscription</td>
                      <td className="p-3">{ipo.ipo_subscription_data?.hni_subscription || "-"}</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">Retail Subscription</td>
                      <td className="p-3">{ipo.ipo_subscription_data?.retail_subscription || "-"}</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-medium">Anchor</td>
                      <td className="p-3">{ipo.ipo_subscription_data?.anchor || "-"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* IPO Intermediaries */}
            <section id="intermediaries" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Intermediaries</h2>
              <div className="space-y-3 text-sm">
                <p><strong>Registrar:</strong> {ipo.ipo_intermediaries?.registrar}</p>
                <p><strong>Registrar Website:</strong> <a href={ipo.ipo_intermediaries?.registrar_website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{ipo.ipo_intermediaries?.registrar_website}</a></p>
                <p><strong>Market Maker:</strong> {ipo.ipo_intermediaries?.market_maker}</p>
                <p><strong>Company Secretary:</strong> {ipo.ipo_intermediaries?.company_secretary}</p>
                <p><strong>Compliance Officer:</strong> {ipo.ipo_intermediaries?.compliance_officer}</p>
              </div>
            </section>

            {/* IPO Lead Manager(s) */}
            <section id="lead-manager" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Lead Manager(s)</h2>
              <p className="text-sm">{ipo.ipo_lead_manager?.lead_manager}</p>
            </section>

            {/* Company Information */}
            <section id="company-info" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Company Information</h2>
              <div className="space-y-3 text-sm">
                <p><strong>Address:</strong> {ipo.company_information?.company_address}</p>
                <p><strong>Website:</strong> <a href={ipo.company_information?.company_website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{ipo.company_information?.company_website}</a></p>
                <p><strong>Email:</strong> {ipo.company_information?.company_email}</p>
                <p><strong>Phone:</strong> {ipo.company_information?.company_phone}</p>
              </div>
            </section>

            {/* IPO Documents */}
            <section id="documents" className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">IPO Documents</h2>
              <div className="space-y-3">
                {ipo.ipo_documents?.drhp_link && (
                  <a href={ipo.ipo_documents.drhp_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Download size={16} /> DRHP
                  </a>
                )}
                {ipo.ipo_documents?.rhp_link && (
                  <a href={ipo.ipo_documents.rhp_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Download size={16} /> RHP
                  </a>
                )}
                {ipo.ipo_documents?.prospectus_pdf && (
                  <a href={ipo.ipo_documents.prospectus_pdf} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Download size={16} /> Prospectus PDF
                  </a>
                )}
                {ipo.ipo_documents?.investor_presentation && (
                  <a href={ipo.ipo_documents.investor_presentation} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Download size={16} /> Investor Presentation
                  </a>
                )}
              </div>
            </section>

            {/* FAQ - collapsible accordion */}
            {ipo.faq && ipo.faq.length > 0 && (
              <section id="faq" className="bg-white p-6 rounded-xl border shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-3">
                  {ipo.faq.map((item, index) => (
                    <div 
                      key={index} 
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition"
                      >
                        <span className="font-medium text-gray-800">{item.question}</span>
                        {openFaqs[index] ? (
                          <ChevronUp size={20} className="text-gray-600" />
                        ) : (
                          <ChevronDown size={20} className="text-gray-600" />
                        )}
                      </button>
                      {openFaqs[index] && (
                        <div className="px-4 pb-4 pt-2 text-gray-700 text-sm md:text-base border-t">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
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