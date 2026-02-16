// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Link } from "react-router-dom";
import {
  Users,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    pendingReferrals: 0,
    totalReferrals: 0,
    pendingKyc: 0,
    totalKyc: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);

    try {
      // Pending & total referrals
      const { count: totalRef, error: refErr } = await supabase
        .from("referrals")
        .select("*", { count: "exact", head: true });

      const { count: pendingRef } = await supabase
        .from("referrals")
        .select("*", { count: "exact", head: true })
        .eq("status", "pending");

      // Pending & total KYC (any document pending)
      const { count: totalKyc } = await supabase
        .from("user_kyc")
        .select("*", { count: "exact", head: true });

      const { count: pendingKyc } = await supabase
        .from("user_kyc")
        .select("*", { count: "exact", head: true })
        .or("pan_status.eq.Pending,aadhaar_status.eq.Pending,cmr_status.eq.Pending,cheque_status.eq.Pending");

      if (refErr) throw refErr;

      setStats({
        pendingReferrals: pendingRef || 0,
        totalReferrals: totalRef || 0,
        pendingKyc: pendingKyc || 0,
        totalKyc: totalKyc || 0,
      });
    } catch (err) {
      console.error("Stats fetch error:", err);
      setError("Failed to load dashboard overview");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-green-600 mx-auto" />
          <p className="text-gray-600 font-medium">Loading overview...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="md:ml-64 p-4 sm:p-6 lg:p-8 transition-all duration-300">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Admin Overview</h1>
            <p className="text-gray-600 mt-1">Quick view of pending actions</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchStats}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium transition"
            >
              <RefreshCw size={16} />
              Refresh
            </button>
            <UserProfileDropdown />
          </div>
        </header>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pending Referrals */}
          <Link
            to="/admin-referrals"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Pending Referrals</h3>
                </div>
              </div>
              <p className="text-4xl font-bold text-yellow-700">
                {stats.pendingReferrals}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                out of {stats.totalReferrals} total
              </p>
            </div>
          </Link>

          {/* Total Referrals */}
          <Link
            to="/admin-referrals"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Total Referrals</h3>
              </div>
              <p className="text-4xl font-bold text-green-700">
                {stats.totalReferrals}
              </p>
              <p className="text-sm text-gray-500 mt-1">All time</p>
            </div>
          </Link>

          {/* Pending KYC */}
          <Link
            to="/admin-kyc"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Clock className="text-yellow-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Pending KYC</h3>
                </div>
              </div>
              <p className="text-4xl font-bold text-yellow-700">
                {stats.pendingKyc}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                out of {stats.totalKyc} total
              </p>
            </div>
          </Link>

          {/* Total KYC */}
          <Link
            to="/admin-kyc"
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <FileText className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Total KYC</h3>
              </div>
              <p className="text-4xl font-bold text-green-700">
                {stats.totalKyc}
              </p>
              <p className="text-sm text-gray-500 mt-1">All submissions</p>
            </div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            to="/admin-referrals"
            className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-green-300 transition-colors flex items-center gap-4 group"
          >
            <div className="p-4 bg-green-100 rounded-xl">
              <Users className="text-green-600" size={32} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg group-hover:text-green-700 transition-colors">
                Manage Referrals
              </h3>
              <p className="text-gray-600 mt-1">Review and update referral statuses</p>
            </div>
          </Link>

          <Link
            to="/admin-kyc"
            className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-green-300 transition-colors flex items-center gap-4 group"
          >
            <div className="p-4 bg-green-100 rounded-xl">
              <FileText className="text-green-600" size={32} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg group-hover:text-green-700 transition-colors">
                Manage KYC Documents
              </h3>
              <p className="text-gray-600 mt-1">Verify or reject uploaded documents</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;