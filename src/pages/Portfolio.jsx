// src/pages/Portfolio.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, Briefcase, IndianRupee, TrendingUp, BarChart2, PlusCircle } from "lucide-react";

const Portfolio = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setUser(currentUser);
    });
    return () => unsub();
  }, [navigate]);

  if (!user) return null;

  // Real holdings - empty by default until user invests
  const holdings = []; // Initially empty - no investments

  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const hasInvestments = holdings.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Portfolio</h1>
          <button onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:block mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
          <p className="text-gray-600 mt-1">Track your pre-IPO and unlisted investments</p>
        </header>

        {/* Overview Stats - Empty State */}
        {!hasInvestments ? (
          <div className="text-center py-16 px-6">
            <div className="max-w-md mx-auto">
              <Briefcase className="w-20 h-20 text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Your portfolio is empty</h2>
              <p className="text-gray-600 mb-8">
                Start building your wealth by investing in high-growth pre-IPO and unlisted companies.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition font-medium inline-flex items-center gap-2">
                <PlusCircle size={20} />
                Explore Investments
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                icon={<Briefcase />}
                title="Total Portfolio Value"
                value={`₹${totalValue.toLocaleString()}`}
                change="+12.4%"
              />
              <StatCard
                icon={<IndianRupee />}
                title="Invested Amount"
                value="₹3,45,800"
                change="—"
              />
              <StatCard
                icon={<TrendingUp />}
                title="Unrealized Gain"
                value="₹42,300"
                change="+12.2%"
              />
              <StatCard
                icon={<BarChart2 />}
                title="Holdings"
                value={holdings.length}
                change="Diversified"
              />
            </div>

            {/* Holdings Table */}
            <section className="bg-white rounded-2xl p-6 border shadow-sm mb-6">
              <h2 className="text-xl font-bold mb-6">Your Holdings</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-left text-gray-600 font-medium">
                      <th className="pb-4">Company</th>
                      <th className="pb-4 text-center">Shares</th>
                      <th className="pb-4 text-right">Avg. Cost</th>
                      <th className="pb-4 text-right">Current Price</th>
                      <th className="pb-4 text-right">Total Value</th>
                      <th className="pb-4 text-right">Gain/Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding, i) => (
                      <tr key={i} className="border-b last:border-0 hover:bg-gray-50 transition">
                        <td className="py-5 font-medium text-gray-900">{holding.name}</td>
                        <td className="py-5 text-center">{holding.shares}</td>
                        <td className="py-5 text-right">₹{holding.avgPrice.toLocaleString()}</td>
                        <td className="py-5 text-right font-medium">₹{holding.currentPrice.toLocaleString()}</td>
                        <td className="py-5 text-right font-semibold">₹{holding.value.toLocaleString()}</td>
                        <td className={`py-5 text-right font-medium ${holding.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                          {holding.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Performance Chart */}
            <section className="bg-white rounded-2xl p-6 border shadow-sm">
              <h2 className="text-xl font-bold mb-6">Portfolio Performance</h2>
              <div className="h-80 bg-gray-50 rounded-xl flex items-center justify-center">
                <BarChart2 className="w-16 h-16 text-green-600" />
                <p className="ml-4 text-gray-500 text-lg">Performance chart will appear once you start investing</p>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

const StatCard = ({ icon, title, value, change }) => (
  <div className="bg-white rounded-2xl p-6 border shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-green-100 text-green-600 rounded-xl">{icon}</div>
      {change !== "—" && (
        <span className={`text-sm font-medium ${change.startsWith("+") ? "text-green-600" : "text-gray-600"}`}>
          {change}
        </span>
      )}
    </div>
    <p className="text-sm text-gray-600 mb-1">{title}</p>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

export default Portfolio;