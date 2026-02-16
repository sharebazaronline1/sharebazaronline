// src/pages/AdminReferrals.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Users, CheckCircle, XCircle, Loader2, RefreshCw, AlertCircle } from "lucide-react";

const AdminReferrals = () => {
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState({});
  const [error, setError] = useState(null);

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
          created_at,
          status,
          reward_amount,
          referred_name,
          referred_email,
          referred_mobile,
          referrer_id,
          referred_user_id,
          referrer_sb_user_id:profiles!referrer_id (sb_user_id),
          referrer_full_name:profiles!referrer_id (full_name),
          referrer_email:profiles!referrer_id (email),
          referred_sb_user_id:profiles!referred_user_id (sb_user_id),
          referred_full_name:profiles!referred_user_id (full_name),
          referred_email:profiles!referred_user_id (email)
        `)
        .order("created_at", { ascending: false });

      if (fetchError) throw fetchError;
      setReferrals(data || []);
    } catch (err) {
      console.error("Referrals fetch failed:", err);
      setError("Failed to load referrals");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    setActionLoading((prev) => ({ ...prev, [id]: true }));

    try {
      const { error } = await supabase
        .from("referrals")
        .update({
          status: newStatus,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (error) throw error;

      setReferrals((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
      );

      alert(`Referral status updated to ${newStatus}`);
    } catch (err) {
      console.error("Status update failed:", err);
      alert("Failed to update status");
    } finally {
      setActionLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-green-600 mx-auto" />
          <p className="text-gray-600 font-medium">Loading referrals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      
    </div>
  );
};

export default AdminReferrals;