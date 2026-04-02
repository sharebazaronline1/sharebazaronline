// src/pages/AdminUsers.jsx
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
  X,
  TrendingUp,
  FileText,
} from "lucide-react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedUserId, setExpandedUserId] = useState(null);

  // Modal state for referred user details
  const [selectedReferred, setSelectedReferred] = useState(null);
  const [referredOrders, setReferredOrders] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
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

          // Referred users with full referral details + commission
          const { data: referredUsers } = await supabase
            .from("referrals")
            .select(`
              referred_name,
              referred_email,
              referred_mobile,
              referred_user_id,
              reward_amount,
              commission_earned,
              status,
              created_at,
              profiles:referred_user_id (
                sb_user_id
              )
            `)
            .eq("referrer_id", profile.id)
            .limit(10);

          // Order count for main user
          const { count: orderCount } = await supabase
            .from("orders")
            .select("*", { count: "exact", head: true })
            .eq("user_id", profile.id);

          // Portfolio value
          const { data: portfolio } = await supabase
            .from("portfolios")
            .select("value")
            .eq("user_id", profile.id);

          const totalPortfolio = portfolio?.reduce((sum, p) => sum + (p.value || 0), 0) || 0;

          // KYC
          const { data: kycData } = await supabase
            .from("user_kyc")
            .select(`
              pan_status, aadhaar_status, cmr_status, cheque_status,
              bank_name, bank_account_no, ifsc, name_as_per_pan, name_as_per_demat
            `)
            .eq("user_id", profile.id)
            .maybeSingle();

          let kycStatus = "Not Uploaded";
          if (kycData) {
            const statuses = [kycData.pan_status, kycData.aadhaar_status, kycData.cmr_status, kycData.cheque_status];
            if (statuses.every((s) => s === "Verified")) kycStatus = "Verified";
            else if (statuses.some((s) => s === "Pending")) kycStatus = "Pending";
            else kycStatus = "Incomplete";
          }

          const bankAccount = kycData
            ? {
                bank_name: kycData.bank_name,
                account_number: kycData.bank_account_no,
                ifsc_code: kycData.ifsc,
                account_holder_name: kycData.name_as_per_pan || kycData.name_as_per_demat || profile.full_name,
              }
            : null;

          return {
            ...profile,
            referralCount: referralCount || 0,
            referredUsers: referredUsers || [],
            orderCount: orderCount || 0,
            totalPortfolioValue: totalPortfolio,
            kycStatus,
            bankAccount,
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

  // Open modal for a referred user
  const openReferredModal = async (referred) => {
    setSelectedReferred(referred);
    setModalLoading(true);
    setReferredOrders([]);

    try {
      // Fetch orders of the referred user
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select(`
          id,
          asset_name,
          price,
          quantity,
          status,
          order_type,
          created_at
        `)
        .eq("user_id", referred.referred_user_id)
        .order("created_at", { ascending: false });

      if (ordersError) throw ordersError;

      setReferredOrders(ordersData || []);
    } catch (err) {
      console.error("Failed to load referred user orders:", err);
      setReferredOrders([]);
    } finally {
      setModalLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedReferred(null);
    setReferredOrders([]);
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
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-7xl mx-auto">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Users Overview</h1>
              <p className="text-sm text-gray-600 mt-1">All registered users • Orders • Portfolio • Referrals • KYC</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={fetchUsers}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
              >
                <RefreshCw size={17} />
                Refresh
              </button>
              <UserProfileDropdown />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
          {error && (
            <div className="mb-10 p-6 bg-red-50 border border-red-200 rounded-3xl flex items-center gap-4">
              <AlertCircle size={26} className="text-red-600 flex-shrink-0" />
              <span className="text-red-800 font-medium">{error}</span>
            </div>
          )}

          {users.length === 0 ? (
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-20 text-center">
              <Users className="mx-auto text-emerald-600" size={56} />
              <h3 className="text-2xl font-semibold text-gray-800 mt-8">No Users Found</h3>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-4 py-5"></th>
                    <th className="px-4 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                    <th className="px-4 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">SB ID</th>
                    <th className="px-4 py-5 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">Email</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Orders</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Portfolio</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Referrals</th>
                    <th className="px-4 py-5 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">KYC</th>
                    <th className="w-12 px-4 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {users.map((user) => (
                    <>
                      <tr
                        key={user.id}
                        className="hover:bg-emerald-50/60 transition-colors cursor-pointer group"
                        onClick={() => toggleExpand(user.id)}
                      >
                        <td className="px-4 py-5">
                          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-700 font-semibold text-lg shadow-sm group-hover:scale-105 transition-transform">
                            {user.full_name?.charAt(0)?.toUpperCase() || "?"}
                          </div>
                        </td>
                        <td className="px-4 py-5">
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">{user.full_name || "Unknown"}</div>
                        </td>
                        <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell">
                          {user.sb_user_id || "—"}
                        </td>
                        <td className="px-4 py-5 whitespace-nowrap text-sm text-gray-600 hidden lg:table-cell truncate max-w-[200px]">
                          {user.email || "—"}
                        </td>
                        <td className="px-4 py-5 text-center font-medium text-gray-900 text-sm">{user.orderCount || 0}</td>
                        <td className="px-4 py-5 text-center font-medium text-emerald-700 text-sm">
                          ₹{(user.totalPortfolioValue || 0).toLocaleString("en-IN")}
                        </td>
                        <td className="px-4 py-5 text-center font-semibold text-gray-900 text-sm">{user.referralCount}</td>
                        <td className="px-4 py-5 text-center">
                          <span
                            className={`inline-flex px-3.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
                              user.kycStatus === "Verified"
                                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                                : user.kycStatus === "Pending"
                                ? "bg-amber-100 text-amber-700 border border-amber-200"
                                : "bg-gray-100 text-gray-600 border border-gray-200"
                            }`}
                          >
                            {user.kycStatus}
                          </span>
                        </td>
                        <td className="px-4 py-5 text-center">
                          {expandedUserId === user.id ? (
                            <ChevronUp size={19} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                          ) : (
                            <ChevronDown size={19} className="text-gray-400 group-hover:text-emerald-600 transition-colors" />
                          )}
                        </td>
                      </tr>

                      {/* Expanded Content */}
                      {expandedUserId === user.id && (
                        <tr>
                          <td colSpan={9} className="p-0 bg-gray-50">
                            <div className="px-6 py-8">
                              {/* Info Cards Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
                                {/* Account Details */}
                                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm h-full">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <Clock size={18} className="text-gray-500" />
                                    Account Details
                                  </h4>
                                  <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Joined</span>
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
                                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm h-full">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <Package size={18} className="text-gray-500" />
                                    Activity
                                  </h4>
                                  <div className="space-y-2.5 text-sm">
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Orders</span>
                                      <span className="font-medium">{user.orderCount || 0}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-gray-500">Portfolio</span>
                                      <span className="font-medium text-emerald-700">
                                        ₹{(user.totalPortfolioValue || 0).toLocaleString("en-IN")}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* Referrals */}
                                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm h-full flex flex-col">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <Users size={18} className="text-gray-500" />
                                    Referrals
                                  </h4>
                                  <div className="mt-auto">
                                    <div className="text-5xl font-semibold text-emerald-700 tracking-tighter">{user.referralCount}</div>
                                    <p className="text-sm text-gray-500 mt-1">Total referred users</p>
                                  </div>
                                </div>

                                {/* KYC Status */}
                                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm h-full">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <ShieldCheck size={18} className="text-gray-500" />
                                    KYC Status
                                  </h4>
                                  <span
                                    className={`inline-flex px-5 py-2 rounded-2xl text-sm font-semibold ${
                                      user.kycStatus === "Verified"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : user.kycStatus === "Pending"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                                  >
                                    {user.kycStatus}
                                  </span>
                                </div>

                                {/* Bank Account */}
                                <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm h-full">
                                  <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4">
                                    <CreditCard size={18} className="text-gray-500" />
                                    Bank Account
                                  </h4>
                                  {user.bankAccount && user.bankAccount.bank_name ? (
                                    <div className="space-y-2.5 text-sm">
                                      <div>
                                        <span className="text-gray-500 text-xs block">Bank Name</span>
                                        <p className="font-medium text-gray-800 mt-1">{user.bankAccount.bank_name}</p>
                                      </div>
                                      <div>
                                        <span className="text-gray-500 text-xs block">Account No.</span>
                                        <p className="font-medium font-mono text-gray-800 mt-1 break-all">{user.bankAccount.account_number || "—"}</p>
                                      </div>
                                      <div>
                                        <span className="text-gray-500 text-xs block">IFSC</span>
                                        <p className="font-medium font-mono text-gray-800 mt-1">{user.bankAccount.ifsc_code || "—"}</p>
                                      </div>
                                      <div>
                                        <span className="text-gray-500 text-xs block">Holder</span>
                                        <p className="font-medium text-gray-800 mt-1">{user.bankAccount.account_holder_name}</p>
                                      </div>
                                    </div>
                                  ) : (
                                    <p className="text-sm text-gray-500 italic py-1">No bank account details added yet.</p>
                                  )}
                                </div>
                              </div>

                              {/* Referred Users Section */}
                              <div>
                                <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-6">
                                  <Users size={18} />
                                  Referred Users ({user.referredUsers.length})
                                </h4>

                                {user.referredUsers.length === 0 ? (
                                  <div className="bg-white border border-gray-100 rounded-3xl p-10 text-center">
                                    <p className="text-gray-500">This user has not referred anyone yet.</p>
                                  </div>
                                ) : (
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {user.referredUsers.map((ref, index) => (
                                      <div
                                        key={`${user.id}-ref-${index}`}
                                        onClick={() => openReferredModal(ref)}
                                        className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
                                      >
                                        <div className="font-medium text-gray-900 group-hover:text-emerald-700 transition-colors">
                                          {ref.referred_name || "Unnamed User"}
                                        </div>
                                        <div className="text-sm text-gray-600 mt-3">
                                          SB ID: {ref.profiles?.sb_user_id || "Not Registered"}
                                        </div>
                                        {ref.referred_email && (
                                          <div className="text-xs text-gray-500 mt-2 truncate">{ref.referred_email}</div>
                                        )}
                                        <div className="mt-6 flex items-center justify-between text-xs">
                                          <span className="text-emerald-600 font-medium">
                                            Commission: ₹{ref.commission_earned || 0}
                                          </span>
                                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-2xl font-medium">
                                            {ref.status || "Pending"}
                                          </span>
                                        </div>
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

      {/* REFERRED USER MODAL */}
      {selectedReferred && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{selectedReferred.referred_name}</h2>
                <p className="text-sm text-gray-500 mt-1">{selectedReferred.referred_email}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-3 hover:bg-gray-100 rounded-2xl transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Referral & Commission Card */}
                <div className="lg:col-span-4 bg-emerald-50 border border-emerald-100 rounded-3xl p-6 h-fit">
                  <h4 className="flex items-center gap-2 text-emerald-700 font-semibold mb-5">
                    <TrendingUp size={20} />
                    Referral Commission
                  </h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Commission Earned</span>
                      <span className="text-3xl font-semibold text-emerald-700">₹{selectedReferred.commission_earned || 0}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Reward Amount</span>
                      <span className="font-medium">₹{selectedReferred.reward_amount || 0}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Referral Date</span>
                      <span className="font-medium">
                        {selectedReferred.created_at
                          ? new Date(selectedReferred.created_at).toLocaleDateString("en-IN")
                          : "—"}
                      </span>
                    </div>
                    <div className="pt-4 border-t text-xs flex items-center justify-between">
                      <span className="text-gray-500">Status</span>
                      <span
                        className={`px-4 py-1 rounded-2xl font-medium ${
                          selectedReferred.status === "pending"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {selectedReferred.status || "Pending"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Orders Section */}
                <div className="lg:col-span-8">
                  <div className="flex items-center justify-between mb-5">
                    <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                      <FileText size={20} />
                      Orders Placed by {selectedReferred.referred_name}
                    </h4>
                    <span className="text-sm text-gray-500">{referredOrders.length} orders</span>
                  </div>

                  {modalLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
                    </div>
                  ) : referredOrders.length === 0 ? (
                    <div className="bg-gray-50 border border-gray-100 rounded-3xl py-12 text-center">
                      <p className="text-gray-500">No orders placed yet by this referred user.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto rounded-3xl border border-gray-100">
                      <table className="min-w-full text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-4 text-left font-medium text-gray-600">Asset</th>
                            <th className="px-6 py-4 text-right font-medium text-gray-600">Price</th>
                            <th className="px-6 py-4 text-right font-medium text-gray-600">Qty</th>
                            <th className="px-6 py-4 text-center font-medium text-gray-600">Type</th>
                            <th className="px-6 py-4 text-center font-medium text-gray-600">Status</th>
                            <th className="px-6 py-4 text-right font-medium text-gray-600">Date</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {referredOrders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 font-medium text-gray-900">{order.asset_name}</td>
                              <td className="px-6 py-4 text-right font-medium">₹{order.price}</td>
                              <td className="px-6 py-4 text-right font-medium">{order.quantity}</td>
                              <td className="px-6 py-4 text-center">
                                <span
                                  className={`inline-flex px-4 py-1 text-xs font-semibold rounded-2xl ${
                                    order.order_type === "BUY"
                                      ? "bg-emerald-100 text-emerald-700"
                                      : "bg-red-100 text-red-700"
                                  }`}
                                >
                                  {order.order_type}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-center">
                                <span
                                  className={`inline-flex px-4 py-1 text-xs font-semibold rounded-2xl ${
                                    order.status === "PENDING"
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-emerald-100 text-emerald-700"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right text-xs text-gray-500">
                                {new Date(order.created_at).toLocaleDateString("en-IN")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 border-t flex justify-end">
              <button
                onClick={closeModal}
                className="px-8 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-2xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;