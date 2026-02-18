// src/pages/AdminUsers.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import {
  Users,
  Mail,
  ChevronDown,
  ChevronUp,
  Loader2,
  AlertCircle,
  RefreshCw,
  Package,
  DollarSign,
  ShieldCheck,
  Clock,
} from "lucide-react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUserId, setExpandedUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch core profile data (removed non-existent updated_at)
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("id, full_name, email, sb_user_id, created_at")
        .order("created_at", { ascending: false });

      if (profilesError) throw profilesError;

      const enriched = await Promise.all(
        profiles.map(async (profile) => {
          // Referral count
          const { count: referralCount } = await supabase
            .from("referrals")
            .select("*", { count: "exact", head: true })
            .eq("referrer_id", profile.id);

          // Sample of referred users (top 5)
          const { data: referredUsers } = await supabase
            .from("referrals")
            .select(`
              referred_name,
              referred_email,
              referred_sb_user_id:profiles!referred_user_id (sb_user_id)
            `)
            .eq("referrer_id", profile.id)
            .limit(5);

          // Orders count
          const { count: orderCount } = await supabase
            .from("orders")
            .select("*", { count: "exact", head: true })
            .eq("user_id", profile.id);

          // Portfolio total value (assuming portfolios table has 'value' column)
          const { data: portfolio } = await supabase
            .from("portfolios")
            .select("value")
            .eq("user_id", profile.id);

          const totalPortfolio = portfolio?.reduce((sum, p) => sum + (p.value || 0), 0) || 0;

          // KYC status summary
          const { data: kyc } = await supabase
            .from("user_kyc")
            .select("pan_status, aadhaar_status, cmr_status, cheque_status")
            .eq("user_id", profile.id)
            .maybeSingle();

          let kycStatus = "Not Uploaded";
          if (kyc) {
            const statuses = [
              kyc.pan_status,
              kyc.aadhaar_status,
              kyc.cmr_status,
              kyc.cheque_status,
            ];

            if (statuses.every(s => s === "Verified")) {
              kycStatus = "Verified";
            } else if (statuses.some(s => s === "Pending")) {
              kycStatus = "Pending";
            } else {
              kycStatus = "Incomplete";
            }
          }

          return {
            ...profile,
            referralCount: referralCount || 0,
            referredUsers: referredUsers || [],
            orderCount: orderCount || 0,
            totalPortfolioValue: totalPortfolio,
            kycStatus,
          };
        })
      );

      setUsers(enriched);
    } catch (err) {
      console.error("Users fetch failed:", err);
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center space-y-5">
          <Loader2 className="w-12 h-12 animate-spin text-emerald-600 mx-auto" />
          <p className="text-lg font-medium text-gray-700">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <AdminSidebar />

      <main className="md:ml-64 transition-all duration-300">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white backdrop-blur-lg border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-7xl mx-auto">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Users Overview
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                All registered users • Orders • Portfolio • Referrals • KYC
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchUsers}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 transition-all shadow-sm"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
              <UserProfileDropdown />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
          {error && (
            <div className="mb-8 p-5 bg-red-50/90 border border-red-200 rounded-2xl flex items-center gap-4 shadow-sm">
              <AlertCircle size={24} className="text-red-600 flex-shrink-0" />
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          )}

          {users.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-16 text-center">
              <div className="mx-auto w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                <Users className="text-emerald-600" size={48} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No Users Found
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
                There are currently no registered users in the system.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50/80">
                  <tr>
                    <th className="w-10 px-6 py-4"></th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">
                      SB ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                      Email
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Orders
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Portfolio
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Referrals
                    </th>
                    <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      KYC
                    </th>
                    <th className="w-10 px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((user) => (
                    <>
                      {/* Main Row */}
                      <tr
                        key={user.id}
                        className="hover:bg-emerald-50/30 transition-colors cursor-pointer group"
                        onClick={() => toggleExpand(user.id)}
                      >
                        <td className="px-6 py-5">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-700 font-semibold text-lg group-hover:scale-105 transition-transform">
                            {user.full_name?.charAt(0)?.toUpperCase() || "?"}
                          </div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                          <div className="font-medium text-gray-900 truncate max-w-[180px]">
                            {user.full_name || "Unknown"}
                          </div>
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">
                          {user.sb_user_id || "—"}
                        </td>
                        <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600 hidden lg:table-cell truncate max-w-[220px]">
                          {user.email || "—"}
                        </td>
                        <td className="px-6 py-5 text-center text-sm font-medium text-gray-900">
                          {user.orderCount || 0}
                        </td>
                        <td className="px-6 py-5 text-center text-sm font-medium text-emerald-700">
                          ₹{(user.totalPortfolioValue || 0).toLocaleString("en-IN")}
                        </td>
                        <td className="px-6 py-5 text-center text-sm font-medium text-gray-900">
                          {user.referralCount}
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span
                            className={`inline-flex px-3.5 py-1.5 rounded-full text-xs font-semibold ${
                              user.kycStatus === "Verified"
                                ? "bg-emerald-100 text-emerald-700 border border-emerald-200/60"
                                : user.kycStatus === "Pending"
                                ? "bg-amber-100 text-amber-700 border border-amber-200/60"
                                : "bg-gray-100 text-gray-700 border border-gray-200/60"
                            }`}
                          >
                            {user.kycStatus}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          {expandedUserId === user.id ? (
                            <ChevronUp size={18} className="text-gray-500 group-hover:text-emerald-600 transition-colors" />
                          ) : (
                            <ChevronDown size={18} className="text-gray-500 group-hover:text-emerald-600 transition-colors" />
                          )}
                        </td>
                      </tr>

                      {/* Expanded Row */}
                      {expandedUserId === user.id && (
                        <tr>
                          <td colSpan="9" className="p-0">
                            <div className="bg-gradient-to-b from-gray-50/80 to-white px-6 py-6 border-t border-gray-100">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                                {/* Account Info */}
                                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <Clock size={18} />
                                    Account Details
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Joined:</span>
                                      <span className="font-medium">
                                        {new Date(user.created_at).toLocaleDateString("en-IN", {
                                          day: "numeric",
                                          month: "short",
                                          year: "numeric",
                                        })}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Activity */}
                                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <Package size={18} />
                                    Activity
                                  </h4>
                                  <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Orders:</span>
                                      <span className="font-medium text-emerald-700">
                                        {user.orderCount || 0}
                                      </span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-600">Portfolio:</span>
                                      <span className="font-medium text-emerald-700">
                                        ₹{(user.totalPortfolioValue || 0).toLocaleString("en-IN")}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Referrals */}
                                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <Users size={18} />
                                    Referrals
                                  </h4>
                                  <div className="text-3xl font-bold text-emerald-700">
                                    {user.referralCount}
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1">
                                    Total referred users
                                  </p>
                                </div>

                                {/* KYC */}
                                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <ShieldCheck size={18} />
                                    KYC Status
                                  </h4>
                                  <span
                                    className={`inline-flex px-4 py-2 rounded-xl text-sm font-semibold ${
                                      user.kycStatus === "Verified"
                                        ? "bg-emerald-100 text-emerald-700 border border-emerald-200/60"
                                        : user.kycStatus === "Pending"
                                        ? "bg-amber-100 text-amber-700 border border-amber-200/60"
                                        : "bg-gray-100 text-gray-700 border border-gray-200/60"
                                    }`}
                                  >
                                    {user.kycStatus}
                                  </span>
                                </div>
                              </div>

                              {/* Referred Users */}
                              <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
                                  <Users size={18} />
                                  Referred Users ({user.referredUsers.length})
                                </h4>

                                {user.referredUsers.length === 0 ? (
                                  <p className="text-sm text-gray-500 italic bg-gray-50/60 p-5 rounded-xl">
                                    This user has not referred anyone yet.
                                  </p>
                                ) : (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {user.referredUsers.map((ref, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                      >
                                        <div className="font-medium text-gray-900">
                                          {ref.referred_name || "Unnamed User"}
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1">
                                          SB ID: {ref.referred_sb_user_id?.sb_user_id || "—"}
                                        </div>
                                        {ref.referred_email && (
                                          <div className="text-xs text-gray-500 mt-1 truncate">
                                            {ref.referred_email}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}
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

export default AdminUsers;