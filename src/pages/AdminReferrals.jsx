// src/pages/AdminReferrals.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import {
  Users,
  ChevronDown,
  ChevronUp,
  Loader2,
  AlertCircle,
  RefreshCw,
  Package,
  ShieldCheck,
  Clock,
  CreditCard,
  UserPlus,
  IndianRupee,
} from "lucide-react";

const AdminReferrals = () => {
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetchReferrals();
  }, []);

  const fetchReferrals = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error: fetchError } = await supabase
        .from("referrals")
        .select(`
          id,
          referrer_sb_user_id,
          referred_name,
          referred_email,
          referred_mobile,
          referred_sb_user_id,
          status,
          created_at,
          profiles:referrer_sb_user_id (full_name, sb_user_id, email),
          referred_profile:referred_sb_user_id (id, full_name, sb_user_id, email, created_at)
        `)
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;

      const enriched = await Promise.all(
        data.map(async (ref) => {
          // Orders by referred user
          const { data: ordersData } = await supabase
            .from("orders")
            .select("total")
            .eq("user_id", ref.referred_sb_user_id);

          const totalOrderValue = ordersData?.reduce((sum, o) => sum + (o.total || 0), 0) || 0;
          const commissionEarned = Math.round(totalOrderValue * 0.0005 * 100) / 100;

          // Portfolio
          const { data: portfolioData } = await supabase
            .from("portfolios")
            .select("value")
            .eq("user_id", ref.referred_sb_user_id);

          const totalPortfolio = portfolioData?.reduce((sum, p) => sum + (p.value || 0), 0) || 0;

          // KYC
          const { data: kycData } = await supabase
            .from("user_kyc")
            .select("pan_status, aadhaar_status, cmr_status, cheque_status")
            .eq("user_id", ref.referred_sb_user_id)
            .maybeSingle();

          let kycStatus = "Not Uploaded";
          if (kycData) {
            const statuses = [kycData.pan_status, kycData.aadhaar_status, kycData.cmr_status, kycData.cheque_status];
            if (statuses.every(s => s === "Verified")) kycStatus = "Verified";
            else if (statuses.some(s => s === "Pending")) kycStatus = "Pending";
            else kycStatus = "Incomplete";
          }

          return {
            ...ref,
            referrer_name: ref.profiles?.full_name || "Unknown",
            referred_full_name: ref.referred_profile?.full_name || ref.referred_name || "Unnamed",
            referred_sb_id: ref.referred_profile?.sb_user_id || "Not Registered",
            joinedDate: ref.referred_profile?.created_at,
            orderCount: ordersData?.length || 0,
            totalOrderValue,
            totalPortfolioValue: totalPortfolio,
            commissionEarned,
            kycStatus,
          };
        })
      );

      setReferrals(enriched);
    } catch (err) {
      console.error("Referrals fetch failed:", err);
      setError(err.message || "Failed to load referrals");
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center space-y-5">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-600 mx-auto" />
          <p className="text-lg font-medium text-gray-700">Loading referrals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <AdminSidebar />

      <main className="md:ml-64 transition-all duration-300">
        <header className="sticky top-0 z-10 bg-white backdrop-blur-lg border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-7xl mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Referrals Overview</h1>
              <p className="text-sm text-gray-600 mt-1">
                All referred users • Orders • Commission (0.05% of order value) • Referrer details
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchReferrals}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
              >
                <RefreshCw size={17} />
                Refresh
              </button>
              <UserProfileDropdown />
            </div>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
          {error && (
            <div className="mb-10 p-6 bg-red-50 border border-red-200 rounded-3xl flex items-center gap-4">
              <AlertCircle size={26} className="text-red-600 flex-shrink-0" />
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          )}

          {referrals.length === 0 ? (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-20 text-center">
              <UserPlus className="mx-auto text-emerald-600" size={56} />
              <h3 className="text-2xl font-semibold text-gray-800 mt-8">No Referrals Yet</h3>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-4 py-5"></th>
                    <th className="px-4 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Referred User</th>
                    <th className="px-4 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">Referred By</th>
                    <th className="px-4 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">Email</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Orders</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Portfolio</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-emerald-600 uppercase tracking-wider">Commission</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">KYC</th>
                    <th className="w-12 px-4 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {referrals.map((ref) => (
                    <>
                      <tr
                        key={ref.id}
                        className="hover:bg-emerald-50/60 transition-colors cursor-pointer group"
                        onClick={() => toggleExpand(ref.id)}
                      >
                        <td className="px-4 py-5">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-700 font-semibold text-lg shadow-sm group-hover:scale-105 transition-transform">
                            {ref.referred_full_name?.charAt(0)?.toUpperCase() || "?"}
                          </div>
                        </td>
                        <td className="px-4 py-5">
                          <div className="font-semibold text-gray-900">{ref.referred_full_name}</div>
                        </td>
                        <td className="px-4 py-5 text-sm text-gray-600 hidden md:table-cell">
                          {ref.referrer_name}
                        </td>
                        <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-600 hidden lg:table-cell truncate max-w-[200px]">
                          {ref.referred_email || "—"}
                        </td>
                        <td className="px-4 py-5 text-center font-medium text-gray-900 text-sm">{ref.orderCount}</td>
                        <td className="px-4 py-5 text-center font-medium text-emerald-700 text-sm">
                          ₹{ref.totalPortfolioValue.toLocaleString("en-IN")}
                        </td>
                        <td className="px-4 py-5 text-center font-medium text-emerald-700 text-sm">
                          ₹{ref.commissionEarned.toLocaleString("en-IN")}
                        </td>
                        <td className="px-4 py-5 text-center">
                          <span
                            className={`inline-flex px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                              ref.kycStatus === "Verified"
                                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                                : ref.kycStatus === "Pending"
                                ? "bg-amber-100 text-amber-700 border border-amber-200"
                                : "bg-gray-100 text-gray-600 border border-gray-200"
                            }`}
                          >
                            {ref.kycStatus}
                          </span>
                        </td>
                        <td className="px-4 py-5 text-center">
                          {expandedId === ref.id ? (
                            <ChevronUp size={19} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                          ) : (
                            <ChevronDown size={19} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                          )}
                        </td>
                      </tr>

                      {expandedId === ref.id && (
                        <tr>
                          <td colSpan={9} className="p-0 bg-gray-50">
                            <div className="px-6 py-9">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
                                {/* Referred User */}
                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <Users size={18} className="text-gray-500" />
                                    Referred User
                                  </h4>
                                  <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Name</span>
                                      <span className="font-medium">{ref.referred_full_name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">SB ID</span>
                                      <span className="font-medium">{ref.referred_sb_id}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Joined</span>
                                      <span className="font-medium">
                                        {ref.joinedDate
                                          ? new Date(ref.joinedDate).toLocaleDateString("en-IN", {
                                              day: "numeric",
                                              month: "short",
                                              year: "numeric",
                                            })
                                          : "—"}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Activity */}
                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <Package size={18} className="text-gray-500" />
                                    Activity
                                  </h4>
                                  <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Orders</span>
                                      <span className="font-medium">{ref.orderCount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Portfolio</span>
                                      <span className="font-medium text-emerald-700">
                                        ₹{ref.totalPortfolioValue.toLocaleString("en-IN")}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* KYC Status */}
                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <ShieldCheck size={18} className="text-gray-500" />
                                    KYC Status
                                  </h4>
                                  <span
                                    className={`inline-flex px-5 py-2 rounded-2xl text-sm font-semibold ${
                                      ref.kycStatus === "Verified"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : ref.kycStatus === "Pending"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                                  >
                                    {ref.kycStatus}
                                  </span>
                                </div>

                                {/* Referred By */}
                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <UserPlus size={18} className="text-gray-500" />
                                    Referred By
                                  </h4>
                                  <div className="text-sm space-y-2">
                                    <div>
                                      <span className="text-gray-500 block text-xs">Name</span>
                                      <span className="font-medium text-gray-800">{ref.referrer_name}</span>
                                    </div>
                                    <div>
                                      <span className="text-gray-500 block text-xs">SB ID</span>
                                      <span className="font-medium text-gray-800">{ref.profiles?.sb_user_id || "—"}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminReferrals;