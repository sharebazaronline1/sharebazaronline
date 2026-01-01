/* ================= IMPORTS ================= */
import { useParams, Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  DollarSign,
  AlertTriangle,
  Users,
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

  useEffect(() => {
    fetchPreIPODetails().then((res) =>
      setData(res.find((x) => x.id === Number(id)))
    );
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500">
        Loading…
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        {/* ================= HERO ================= */}
       <header className="relative bg-slate-50 pb-20"> {/* Added pb-20 to make space for the fixed bar */}
  <div className="flex items-start gap-6 ml-4 lg:ml-6 py-6 pl-6 lg:pl-64">

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

    {/* TEXT */}
    <div className="pt-2 lg:pt-4">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">
        {data.name}
      </h1>
      <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-4xl">
        {data.shareDetails.companyName}
      </p>
    </div>

  </div>

  {/* FULL WIDTH NOTICE BAR - Fixed & Screen-wide */}
<div className="  inset-x-0 top-[140px] sm:top-[152px] rounded bg-blue-50 border-b border-blue-200 shadow-sm overflow-x-auto">
  <div className="min-w-[1024px] max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <AlertTriangle className="text-blue-700 w-5 h-5 flex-shrink-0" />
      <p className="text-sm lg:text-base font-medium text-blue-900 whitespace-nowrap">
        Ready to invest in this opportunity? Apply now through trusted platforms.
      </p>
    </div>
    <button
      onClick={() => navigate('/how-to-apply-ipo')}
      className="px-6 py-3 lg:px-10 lg:py-4 text-sm lg:text-base bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition shadow-md flex-shrink-0"
    >
      Apply Now
    </button>
  </div>
</div>
</header>

        {/* ================= COMPANY OVERVIEW ================= */}
        <Card>
          <SectionHeader icon={Building2} title="Company Overview" />
          <div className="p-4 text-slate-700 whitespace-pre-line leading-relaxed">
            {data.overview}
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
          <SectionHeader icon={DollarSign} title="Unlisted Share Details" />
          <div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Object.entries(data.shareDetails).map(([k, v]) => (
              <div key={k} className="bg-slate-50 border rounded-xl p-3 text-center">
                <p className="text-xs uppercase text-slate-500 mb-1">{k}</p>
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
