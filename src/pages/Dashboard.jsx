// src/pages/Dashboard.jsx

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import {
  BarChart2,
  Briefcase,
  FileText,
  AlertTriangle,
  IndianRupee,
  Menu,
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [accountStatus, setAccountStatus] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [trendingShares, setTrendingShares] = useState([]);
const [upcomingShares, setUpcomingShares] = useState([]);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/login");
        return;
      }

      setUser(session.user);

      const { data: profile } = await supabase
        .from("profiles")
        .select("account_status")
        .eq("id", session.user.id)
        .single();

      setAccountStatus(profile?.account_status || "inactive");

      // FETCH USER ORDERS
      const { data: userOrders, error: orderError } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (orderError) {
        console.error(orderError);
      } else {
        setOrders(userOrders || []);
      }
// FETCH PRE IPO PRICES
const { data: preIPOData, error: preIPOError } = await supabase
  .from("pre_ipo_companies")
  .select("id, name, price")
  .order("updated_at", { ascending: false });

if (preIPOError) {
  console.error(preIPOError);
} else {
  setTrendingShares(preIPOData || []);
  setUpcomingShares(preIPOData || []);
}
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  if (!user || loading) return null;

  // CALCULATIONS
  const totalOrders = orders.length;

  const settledOrders = orders.filter(
    (o) => o.status?.toUpperCase() === "SETTLED"
  );

  const holdingsCount = settledOrders.length;

  const portfolioValue = settledOrders.reduce((acc, item) => {
    const qty = Number(item.quantity || 0);
    const price = Number(item.price || 0);
    return acc + qty * price;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
     <Sidebar
  mobileOpen={mobileSidebarOpen}
  setMobileOpen={setMobileSidebarOpen}
/>

      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
    <header className="md:hidden sticky top-0 z-20 bg-white border-gray-200 px-4 py-4 mb-6">
  <div className="flex items-center justify-between">

    {/* LEFT */}
    <div className="flex items-center gap-3">
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="p-1"
      >
        <Menu size={24} />
      </button>

      <div>
        <p className="text-xs text-gray-500">Welcome Back</p>
        <h1 className="text-lg font-semibold text-gray-900 leading-tight">Dashboard</h1>
      </div>

      {/* Account Inactive / Complete KYC Button */}
     <button
  onClick={() => navigate("/kyc")}
  className="
    ml-2
    px-4
    py-2
    rounded-full
    bg-blue-600
    hover:bg-blue-700
    text-white
    text-xs
    font-semibold
    shadow-sm
    transition-all
    whitespace-nowrap
  "
  title="Complete your KYC"
>
  Complete KYC
</button>
    </div>

    {/* RIGHT */}
    <div className="shrink-0">
      <UserProfileDropdown />
    </div>
  </div>
</header>
        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome,{" "}
              {user.user_metadata?.full_name ||
                user.email ||
                "Investor"}
            </h1>

            <p className="text-gray-600 mt-1">
              Track IPOs, Pre-IPOs & portfolio performance
            </p>
          </div>
<div className="flex items-center gap-4">
  {accountStatus !== "active" && (
    <div
      className="
        flex items-center gap-4
        px-5 py-3
        rounded-2xl
        border border-orange-200
        bg-gradient-to-r
        from-orange-50
        to-amber-50
        shadow-sm
      "
    >
      {/* Icon */}
      <div
        className="
          w-10 h-10
          rounded-xl
          bg-orange-100
          flex items-center justify-center
          flex-shrink-0
        "
      >
        <AlertTriangle
          size={20}
          className="text-orange-600"
        />
      </div>

      {/* Text */}
      <div>
                  <p className="font-semibold text-amber-800 text-sm">
                    Account is Inactive
        </p>

        <p className="text-xs text-slate-600">
          Complete your KYC to start trading
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate("/kyc")}
        className="
          ml-2
          px-5 py-2.5
          rounded-xl
          bg-blue-600
          hover:bg-blue-700
          text-white
          text-sm
          font-semibold
          transition-all
          shadow-sm
          whitespace-nowrap
        "
      >
        Complete KYC
      </button>
    </div>
  )}

  <UserProfileDropdown />
</div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
         

          <StatCard
            icon={<FileText />}
            title="Holdings"
            value={holdingsCount}
            change="Settled investments"
            onClick={() => navigate("/holdings")}
          />

          <StatCard
            icon={<CalendarDays />}
            title="Orders"
            value={totalOrders}
            change="View all orders"
            onClick={() => navigate("/orders")}
          />

          <StatCard
            icon={<IndianRupee />}
            title="Wallet Balance"
            value="₹0"
            change="Add funds to invest"
          />
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <section className="bg-white rounded-2xl p-5 -sm xl:col-span-2 h-72 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Top Trending</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
            {trendingShares.slice(0, 3).map((item, idx) => (
  <SmallPreIPOItem
    key={item.id || idx}
    id={item.id}
    name={item.name}
    price={`₹${Number(item.price || 0).toLocaleString("en-IN")}`}
    demand={
      idx === 0
        ? "Very High Demand"
        : idx === 1
        ? "High Investor Interest"
        : "IPO Watchlist"
    }
    navigate={navigate}
  />
))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-5 -sm h-72 flex flex-col">
            <h2 className="text-xl font-bold mb-4">Portfolio Mix</h2>

            <div className="flex-1 bg-gray-50 rounded-xl flex items-center justify-center">
              <BarChart2 className="w-14 h-14 text-green-600" />
            </div>

            <p className="text-center text-xs text-gray-500 mt-2">
              IPO • Pre-IPO distribution
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 -sm xl:col-span-3">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-green-600" />
              Upcoming Unlisted Shares
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingShares.slice(0, 3).map((item, idx) => (
  <UnlistedCard
    key={item.id || idx}
    id={item.id}
    name={item.name}
    sector="Pre-IPO"
    price={`₹${Number(item.price || 0).toLocaleString("en-IN")}`}
    status={
      idx === 0
        ? "Active Unlisted"
        : idx === 1
        ? "IPO Expected"
        : "Pre-IPO"
    }
    navigate={navigate}
  />
))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

/* ---------------- Reusable Components ---------------- */

const StatCard = ({ icon, title, value, change, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-xl p-5 -sm ${
      onClick ? "cursor-pointer hover:shadow-md transition" : ""
    }`}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-green-100 text-green-600 rounded-full">
        {icon}
      </div>

      <p className="text-gray-600 text-sm">{title}</p>
    </div>

    <p className="text-2xl font-bold">{value}</p>

    <p className="text-sm text-green-600">{change}</p>
  </div>
);

const SmallPreIPOItem = ({
  id,
  name,
  price,
  demand,
  navigate,
}) => (
  <div className="bg-white border-gray-200 rounded-2xl p-4 flex flex-col gap-3 hover:shadow-md transition">
    <h4 className="font-semibold text-gray-900 text-sm leading-snug">
      {name}
    </h4>

    <div className="flex items-center gap-1">
      <span className="text-lg font-bold text-gray-900">{price}</span>

      <span className="text-xs text-gray-500">/ share</span>
    </div>

    {demand && (
      <span className="inline-block w-fit px-2.5 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700">
        {demand}
      </span>
    )}

    <div className="pt-2">
      <button
        onClick={() => navigate("/orders")}
        className="w-full py-2 text-xs font-semibold rounded-xl bg-[#16A34A] text-white hover:bg-[#15803D] transition"
      >
        Buy
      </button>
    </div>
  </div>
);

const UnlistedCard = ({
  name,
  sector,
  price,
  status,
  navigate,
}) => (
  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition">
    <h4 className="font-bold text-gray-900">{name}</h4>

    <p className="text-sm text-gray-600 mt-1">
      Sector: {sector}
    </p>

    <p className="text-sm text-gray-600">
      Price Range: {price}
    </p>

    <div className="flex items-center justify-between mt-4">
      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
        {status}
      </span>

      <button
        onClick={() => navigate("/orders")}
        className="px-4 py-1.5 text-sm font-semibold rounded-full border-green-600 text-green-600 hover:bg-green-50 transition"
      >
        Buy
      </button>
    </div>
  </div>
);

export default Dashboard;