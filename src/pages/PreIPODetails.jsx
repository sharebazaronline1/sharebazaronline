/* ================= IMPORTS ================= */
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
      .replace(/([A-Z])/g, " $1")   // add space before capitals
      .replace(/^./, str => str.toUpperCase()); // capitalize first letter

  useEffect(() => {
    fetchPreIPODetails().then((res) =>
      setData(res.find((x) => x.id === Number(id)))
    );
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

  // Assuming price comes as number or string — format it nicely
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
                {data.shareDetails.companyName}
              </p>

              {/* === Eye-catching Price Block === */}
            
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

        {/* ================= COMPANY OVERVIEW ================= */}
        <Card>
          <SectionHeader icon={Building2} title="Company Overview" />
          <div className="p-4 text-slate-700 whitespace-pre-line leading-relaxed">
            {showFullOverview ? overviewText : shortOverview}

            {overviewText.length > 900 && (
              <button
                onClick={() => setShowFullOverview(!showFullOverview)}
                className="block mt-2 text-green-600 font-semibold text-sm hover:underline"
              >
                {showFullOverview ? "View less" : "View more"}
              </button>
            )}
          </div>
        </Card>

        {/* ================= PRODUCTS / PLANTS / CLIENTS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Core Products", icon: Wallet, items: data.products },
            { title: "Manufacturing Units", icon: Factory, items: data.manufacturingUnits },
            { title: "Key Clients", icon: Users, items: data.clients },
          ].map((box, i) => (
            <Card key={i}>
              <div className="p-4">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                  <box.icon className="w-5 h-5 text-slate-600" />
                  {box.title}
                </h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  {box.items.map((x, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1 w-2 h-2 bg-slate-500 rounded-full"></span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </section>

        {/* ================= SHARE DETAILS ================= */}
        <Card>
          <SectionHeader icon={IndianRupee} title="Unlisted Share Details" />

          <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(data.shareDetails).map(([k, v]) => (
              <div
                key={k}
                className="bg-slate-50 border rounded-xl p-3 text-center"
              >
                <p className="text-xs uppercase text-slate-500 mb-1">
                  {formatKey(k)}
                </p>
                <p className="text-sm font-semibold text-slate-900">{v}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ================= INCOME STATEMENT ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Income Statement (₹ in Crore)" />
          <TableWrapper>
            <table className="w-full min-w-[700px] text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2 text-left">Particulars</th>
                  <th className="px-4 py-2 text-right">FY22</th>
                  <th className="px-4 py-2 text-right">FY23</th>
                  <th className="px-4 py-2 text-right">FY24</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.financials.incomeStatement.map((r, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2">{r.label}</td>
                    <td className="px-4 py-2 text-right">{r.fy22}</td>
                    <td className="px-4 py-2 text-right">{r.fy23}</td>
                    <td className="px-4 py-2 text-right">{r.fy24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          <div className="px-4 pb-4 text-sm text-slate-600 space-y-1">
            {data.financials.investorInsight.map((i, idx) => (
              <p key={idx}>• {i}</p>
            ))}
          </div>
        </Card>

        {/* ================= BALANCE SHEET ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[
            { title: "Assets (₹ in Crore)", rows: data.balanceSheet.assets },
            { title: "Liabilities (₹ in Crore)", rows: data.balanceSheet.liabilities },
          ].map((sec, i) => (
            <Card key={i}>
              <SectionHeader icon={Wallet} title={sec.title} />
              <TableWrapper>
                <table className="w-full min-w-[600px] text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Item</th>
                      <th className="px-4 py-2 text-right">FY22</th>
                      <th className="px-4 py-2 text-right">FY23</th>
                      <th className="px-4 py-2 text-right">FY24</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {sec.rows.map((r, idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-2">{r.label}</td>
                        <td className="px-4 py-2 text-right">{r.fy22}</td>
                        <td className="px-4 py-2 text-right">{r.fy23}</td>
                        <td className="px-4 py-2 text-right">{r.fy24}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </TableWrapper>
            </Card>
          ))}
        </section>

        {/* ================= CASH FLOW ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Cash Flow Statement (₹ in Crore)" />
          <TableWrapper>
            <table className="w-full min-w-[700px] text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-2 text-left">Particulars</th>
                  <th className="px-4 py-2 text-right">FY22</th>
                  <th className="px-4 py-2 text-right">FY23</th>
                  <th className="px-4 py-2 text-right">FY24</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data.cashFlow.data.map((c, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2">{c.label}</td>
                    <td className="px-4 py-2 text-right">{c.fy22}</td>
                    <td className="px-4 py-2 text-right">{c.fy23}</td>
                    <td className="px-4 py-2 text-right">{c.fy24}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrapper>

          <div className="px-4 pb-4 text-sm text-slate-600 space-y-1">
            {data.cashFlow.insights.map((i, idx) => (
              <p key={idx}>• {i}</p>
            ))}
          </div>
        </Card>

        {/* ================= SHAREHOLDING ================= */}
        <Card>
          <SectionHeader icon={Users} title="Shareholding Pattern" />
          <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {data.shareholding.map((s, i) => (
              <div key={i} className="border rounded-xl p-3 bg-slate-50 text-center">
                <p className="font-semibold">{s.year}</p>
                <p className="text-sm">Promoters: {s.promoters}</p>
                <p className="text-sm">Other: {s.public}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ================= MANAGEMENT ================= */}
        <Card>
          <SectionHeader icon={Users} title="Management Team" />
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.management.map((m, i) => (
              <div key={i} className="border rounded-xl p-3 bg-slate-50">
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-slate-600">{m.role}</p>
                <p className="text-xs text-slate-500">{m.experience}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* ================= INVESTOR INSIGHT ================= */}
        <Card>
          <SectionHeader icon={BarChart3} title="Investor Insight" />
          <div className="p-4 text-slate-700 whitespace-pre-line leading-relaxed">
            {data.managementInsight}
          </div>
        </Card>

        {/* ================= BACK ================= */}
        <div className="text-center">
          <Link to="/pre-ipo-stocks" className="inline-flex items-center gap-2 font-semibold">
            <ArrowLeft size={18} />
            Back to All Unlisted Shares
          </Link>
        </div>

      </div>
    </div>
  );
};

export default PreIPODetails;