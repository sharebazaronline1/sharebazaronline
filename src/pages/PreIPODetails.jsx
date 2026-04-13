/* ================= IMPORTS ================= */
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  AlertTriangle,
  Users,
  IndianRupee,
  Wallet,
  Factory,
} from "lucide-react";
import { fetchPreIPODetails } from "../api/mockApi";

/* ================= REUSABLE ================= */
const Card = ({ children }) => (
  <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
    {children}
  </section>
);

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 px-6 py-3 border-b bg-slate-50">
    <Icon className="w-5 h-5 text-slate-600" />
    <h2 className="text-lg lg:text-xl font-semibold text-slate-800">
      {title}
    </h2>
  </div>
);

const TableWrapper = ({ children }) => (
  <div className="p-4 overflow-x-auto">{children}</div>
);

/* ================= MAIN ================= */
const PreIPODetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [showFullOverview, setShowFullOverview] = useState(false);

  const formatKey = (key) =>
    key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());

  useEffect(() => {
  const load = async () => {
    const mockData = await fetchPreIPODetails();
    const selected = mockData.find((x) => x.id === Number(id));

    if (!selected) return;

    const { data: dbData, error } = await supabase
      .from("pre_ipo_companies")
      .select("name, price");

    if (error) console.error(error);

    const dbItem = dbData?.find((d) => d.name === selected.name);

    const updatedPrice = dbItem ? Number(dbItem.price) : selected.price;

    const merged = {
      ...selected,
      price: updatedPrice,

      shareDetails: {
        ...selected.shareDetails,
        indicativeUnlistedSharePrice: `₹${updatedPrice}`, // override here
      },
    };

    setData(merged);
  };

  load();
}, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500">
        Coming Soon
      </div>
    );
  }

  const overviewText = data.overview || "";
  const shortOverview =
    overviewText.length > 900
      ? overviewText.slice(0, 900) + "..."
      : overviewText;

  const displayPrice = Number(data.price || 0).toLocaleString("en-IN");

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* ================= HERO ================= */}
        <header className="relative bg-slate-50">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 ml-4 lg:ml-6 py-8 pl-6 lg:pl-96 relative">
            {/* LOGO */}
            <div className="shrink-0">
              <div className="w-28 h-28 lg:w-36 lg:h-36 border rounded-xl p-4 bg-white shadow-md">
                <img
                  src={data.logo}
                  alt={data.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* TEXT + BIG PRICE */}
            <div className="pt-2 lg:pt-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">
                {data.name}
              </h1>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-4xl">
                {data.shareDetails?.companyName || data.name}
              </p>
            </div>
          </div>

          {/* FULL-WIDTH sticky bar with integrated price */}
          <div
            className="
              sticky
              top-[72px] sm:top-[88px]
              left-0 right-0
              w-screen
              rounded-lg
              z-40
              bg-blue-100 
              shadow-lg
            "
          >
            <div
              className="
                max-w-7xl
                mx-auto
                flex flex-col sm:flex-row
                items-center justify-between
                gap-4 py-4 px-4 sm:px-6 lg:px-8
              "
            >
              <div className="flex items-center gap-4 text-blue-700 font-medium">
                <span className="text-lg">Ready to invest in this opportunity? Apply now through our trusted platforms.</span>
              </div>

              <button
                onClick={() => navigate('/login')}
                className="
                  px-10 py-4
                  bg-green-600 text-white
                  font-bold text-lg
                  rounded-full
                  shadow-2xl hover:shadow-xl
                  hover:bg-green-700
                  transform hover:-translate-y-1
                  transition-all duration-200
                  flex items-center gap-2 whitespace-nowrap
                "
              >
                Buy Now @ ₹{displayPrice}
              </button>
            </div>
          </div>
        </header>

        {/* ================= 1. COMPANY OVERVIEW (Minimum 1000 words) ================= */}
        <Card>
          <SectionHeader icon={Building2} title="About the Company" />
          <div className="p-6 text-slate-700 whitespace-pre-line leading-relaxed text-[15px]">
            {showFullOverview ? overviewText : shortOverview}

            {overviewText.length > 900 && (
              <button
                onClick={() => setShowFullOverview(!showFullOverview)}
                className="block mt-4 text-green-600 font-semibold text-sm hover:underline"
              >
                {showFullOverview ? "View less" : "View more"}
              </button>
            )}
          </div>
        </Card>

        {/* ================= 2. COMPANY DETAILS TABLE ================= */}
        <Card>
          <SectionHeader icon={IndianRupee} title="Company Details" />
          <TableWrapper>
            <table className="w-full min-w-[800px] text-sm border-collapse">
              <tbody className="divide-y">
                {Object.entries(data.shareDetails || {}).map(([key, value]) => (
                  <tr key={key} className="hover:bg-slate-50">
                    <td className="px-6 py-3 font-medium text-slate-600 w-1/2">
                      {formatKey(key)}
                    </td>
                    <td className="px-6 py-3 text-slate-900 text-right font-semibold">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
        </Card>

        {/* ================= 3. FINANCIAL ANNUAL REPORT SUMMARY ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Financial Annual Report Summary" />
          <div className="p-6 text-slate-700 leading-relaxed whitespace-pre-line">
            {data.financials?.annualReportSummary || "Detailed audited financial performance summary will be updated soon."}
          </div>
        </Card>

        {/* ================= 4. INCOME STATEMENT ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Income Statement (Profit & Loss) (₹ in Crore)" />
          <TableWrapper>
            <table className="w-full min-w-[700px] text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">Particulars</th>
                  <th className="px-4 py-3 text-right">FY22</th>
                  <th className="px-4 py-3 text-right">FY23</th>
                  <th className="px-4 py-3 text-right">FY24</th>
                  <th className="px-4 py-3 text-right">FY25 (if avail.)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.financials?.incomeStatement?.map((r, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">{r.label}</td>
                    <td className="px-4 py-3 text-right">{r.fy22}</td>
                    <td className="px-4 py-3 text-right">{r.fy23}</td>
                    <td className="px-4 py-3 text-right">{r.fy24}</td>
                    <td className="px-4 py-3 text-right">{r.fy25 || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
        </Card>

        {/* ================= 5. KEY FINANCIAL RATIOS ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Key Financial Ratios (Last 3–5 Years)" />
          <TableWrapper>
            <table className="w-full min-w-[600px] text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">Ratio</th>
                  <th className="px-4 py-3 text-right">FY22</th>
                  <th className="px-4 py-3 text-right">FY23</th>
                  <th className="px-4 py-3 text-right">FY24</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.financials?.keyRatios?.map((ratio, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-medium">{ratio.label}</td>
                    <td className="px-4 py-3 text-right">{ratio.fy22}</td>
                    <td className="px-4 py-3 text-right">{ratio.fy23}</td>
                    <td className="px-4 py-3 text-right">{ratio.fy24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>
        </Card>

        {/* ================= 6. INVESTOR INSIGHT ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Investor Insight" />
          <div className="p-6 text-slate-700 whitespace-pre-line leading-relaxed">
            {data.investorInsight || data.managementInsight}
          </div>
        </Card>

        {/* ================= 7. BALANCE SHEET ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <SectionHeader icon={Wallet} title="Balance Sheet - Assets (₹ in Crore)" />
            <TableWrapper>
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Item</th>
                    <th className="px-4 py-3 text-right">FY22</th>
                    <th className="px-4 py-3 text-right">FY23</th>
                    <th className="px-4 py-3 text-right">FY24</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {data.balanceSheet?.assets?.map((item, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3">{item.label}</td>
                      <td className="px-4 py-3 text-right">{item.fy22}</td>
                      <td className="px-4 py-3 text-right">{item.fy23}</td>
                      <td className="px-4 py-3 text-right">{item.fy24}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          </Card>

          <Card>
            <SectionHeader icon={Wallet} title="Balance Sheet - Liabilities & Equity (₹ in Crore)" />
            <TableWrapper>
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Item</th>
                    <th className="px-4 py-3 text-right">FY22</th>
                    <th className="px-4 py-3 text-right">FY23</th>
                    <th className="px-4 py-3 text-right">FY24</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {data.balanceSheet?.liabilities?.map((item, i) => (
                    <tr key={i}>
                      <td className="px-4 py-3">{item.label}</td>
                      <td className="px-4 py-3 text-right">{item.fy22}</td>
                      <td className="px-4 py-3 text-right">{item.fy23}</td>
                      <td className="px-4 py-3 text-right">{item.fy24}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableWrapper>
          </Card>
        </section>

        {/* ================= 8 & 9. LIABILITIES BREAKDOWN + INSIGHTS ================= */}
        <Card>
          <SectionHeader icon={AlertTriangle} title="Liabilities Breakdown & Balance Sheet Insights" />
          <div className="p-6 text-slate-700 space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Liabilities Breakdown</h4>
              <p className="text-sm leading-relaxed">
                {data.liabilitiesBreakdown || "Short-term liabilities, long-term borrowings, and other obligations details will be updated."}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Balance Sheet Insights</h4>
              <p className="text-sm leading-relaxed">
                {data.balanceSheetInsights || "Financial stability, leverage, and solvency analysis will be provided here."}
              </p>
            </div>
          </div>
        </Card>

        {/* ================= 10 & 11. CASH FLOW ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Cash Flow Statement (₹ in Crore)" />
          <TableWrapper>
            <table className="w-full min-w-[700px] text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left">Particulars</th>
                  <th className="px-4 py-3 text-right">FY22</th>
                  <th className="px-4 py-3 text-right">FY23</th>
                  <th className="px-4 py-3 text-right">FY24</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.cashFlow?.data?.map((c, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">{c.label}</td>
                    <td className="px-4 py-3 text-right">{c.fy22}</td>
                    <td className="px-4 py-3 text-right">{c.fy23}</td>
                    <td className="px-4 py-3 text-right">{c.fy24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          <div className="px-6 pb-6 text-sm text-slate-600 space-y-1">
            {data.cashFlow?.insights?.map((insight, idx) => (
              <p key={idx}>• {insight}</p>
            ))}
          </div>
        </Card>

        {/* ================= 12. SHAREHOLDING PATTERN ================= */}
        <Card>
          <SectionHeader icon={Users} title="Shareholding Pattern" />
          <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.shareholding?.map((s, i) => (
              <div key={i} className="border rounded-xl p-4 bg-slate-50 text-center">
                <p className="font-semibold text-lg mb-2">{s.year}</p>
                <p className="text-sm">Promoter: <span className="font-medium">{s.promoters}</span></p>
                <p className="text-sm">Institutional: <span className="font-medium">{s.institutional || "-"}</span></p>
                <p className="text-sm">Public / Others: <span className="font-medium">{s.public}</span></p>
              </div>
            ))}
          </div>
        </Card>

        {/* ================= 13. PROMOTERS / MANAGEMENT ================= */}
        <Card>
          <SectionHeader icon={Users} title="Promoters & Management" />
          <div className="p-6 text-slate-700 whitespace-pre-line leading-relaxed">
            {data.promotersManagement || "Promoter background, key management personnel, and board of directors details coming soon."}
          </div>
        </Card>

        {/* ================= 14. RTA INFO ================= */}
        <Card>
          <SectionHeader icon={Users} title="Registrar & Transfer Agent (RTA)" />
          <div className="p-6">
            <p><strong>Registrar:</strong> {data.rta?.registrar || "Not Available"}</p>
            <p className="mt-2">
              <strong>Website:</strong>{" "}
              <a href={data.rta?.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                {data.rta?.website || "N/A"}
              </a>
            </p>
          </div>
        </Card>

        {/* ================= 15. MANAGEMENT INSIGHT ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Management Insight" />
          <div className="p-6 text-slate-700 whitespace-pre-line leading-relaxed">
            {data.managementInsight || "Leadership strategy, vision, execution capability, and corporate governance overview."}
          </div>
        </Card>

        {/* ================= BACK BUTTON ================= */}
        <div className="text-center pt-4">
          <Link to="/pre-ipo-stocks" className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-slate-900">
            <ArrowLeft size={18} />
            Back to All Unlisted Shares
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PreIPODetails;