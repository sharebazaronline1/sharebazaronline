// src/pages/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import {
  Users,
  FileText,
  CheckCircle,
  XCircle,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

const AdminDashboard = () => {
  const [referrals, setReferrals] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState({});

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data: refData, error: refErr } = await supabase
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

      if (refErr) throw refErr;
      setReferrals(refData || []);

      const { data: docData, error: docErr } = await supabase
        .from("user_kyc_with_user")
        .select("*")
        .order("updated_at", { ascending: false });

      if (docErr) throw docErr;
      setDocuments(docData || []);
    } catch (err) {
      console.error("Admin data fetch error:", err);
      setError(err.message || "Failed to load dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const updateReferralStatus = async (id, newStatus) => {
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

    
    } catch (err) {
      console.error("Referral update failed:", err);
    } finally {
      setActionLoading((prev) => ({ ...prev, [id]: false }));
    }
  };

  const updateDocumentStatus = async (userId, docType, newStatus) => {
    const key = `${userId}-${docType}`;
    setActionLoading((prev) => ({ ...prev, [key]: true }));

    try {
      const updateField = `${docType}_status`;

      const { error } = await supabase
        .from("user_kyc")
        .update({
          [updateField]: newStatus,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", userId);

      if (error) throw error;

      await fetchAllData();
    } catch (err) {
      console.error("Document update failed:", err);
      alert("Failed to update document");
    } finally {
      setActionLoading((prev) => ({ ...prev, [key]: false }));
    }
  };

  const getPublicFileUrl = (path) => {
    if (!path) return "#";
    const { data } = supabase.storage.from("kyc-documents").getPublicUrl(path);
    return data.publicUrl;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-green-600 mx-auto" />
          <p className="text-gray-600 font-medium">Loading...</p>
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
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage referrals and KYC documents</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchAllData}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg text-sm font-medium transition disabled:opacity-50"
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

        {/* Referrals Section */}
        {/* <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Users className="text-green-600" size={28} />
              Referrals
            </h2>
            <span className="text-sm text-gray-500 font-medium">
              {referrals.length} total
            </span>
          </div>

          {referrals.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
              <Users size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Referrals Found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                No referral records found in the database.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {referrals.map((ref) => (
                <div
                  key={ref.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
        //           {/* Header */}
        {/* //           <div className="p-6 pb-4 border-b border-gray-100">
        //             <div className="flex items-start justify-between gap-4">
        //               <div className="flex items-center gap-4">
        //                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-700 font-bold text-xl shrink-0">
        //                   {ref.referred_name?.charAt(0)?.toUpperCase() || "?"}
        //                 </div>
        //                 <div>
        //                   <h3 className="font-semibold text-gray-900 text-lg leading-tight">
        //                     {ref.referred_name || "New User"}
        //                   </h3>
        //                   <p className="text-sm text-gray-600 mt-0.5">
        //                     SB ID: <span className="font-medium">{ref.referred_sb_user_id?.sb_user_id || "—"}</span>
        //                   </p>
        //                 </div>
        //               </div>
        //               <span className="text-xs text-gray-500 whitespace-nowrap">
        //                 {new Date(ref.created_at).toLocaleDateString("en-IN")}
        //               </span>
        //             </div>
        //           </div> */}

               {/* Referrer */}
        {/* //           <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 text-sm">
        //             <span className="font-medium text-gray-700">Referred by:</span>{" "}
        //             {ref.referrer_full_name?.full_name || ref.referrer_email || "Unknown"}
        //             <br />
        //             <span className="text-gray-500 text-xs">
        //              SB ID: {ref.referrer_sb_user_id?.sb_user_id || "—"}
        //             </span>
        //           </div> */}

                  {/* Status & Actions */}
        {/* //           <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        //             <div>
        //               <span className="text-xs text-gray-500 block mb-1">Status</span>
        //               <span */}
        {/* //                 className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
        //                   ref.status === "approved"
        //                     ? "bg-green-100 text-green-700"
        //                     : ref.status === "rejected"
        //                     ? "bg-red-100 text-red-700"
        //                     : "bg-yellow-100 text-yellow-700"
        //                 }`}
        //               >
        //                 {ref.status?.toUpperCase() || "PENDING"}
        //               </span>
        //             </div>

        //             <div className="flex gap-3 w-full sm:w-auto">
        //               <button
        //                 onClick={() => updateReferralStatus(ref.id, "approved")}
        //                 disabled={actionLoading[ref.id] || ref.status === "approved"}
        //                 className="flex-1 sm:flex-none px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
        //               >
        //                 <CheckCircle size={16} />
        //                 Approve
        //               </button>
        //               <button
        //                 onClick={() => updateReferralStatus(ref.id, "rejected")}
        //                 disabled={actionLoading[ref.id] || ref.status === "rejected"}
        //                 className="flex-1 sm:flex-none px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
        //               >
        //                 <XCircle size={16} />
        //                 Reject
        //               </button>
        //             </div>
        //           </div>
        //         </div>
        //       ))}
        //     </div>
        //   )}
        // </section> */} 

        {/* Documents Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="text-green-600" size={28} />
              KYC Documents
            </h2>
            <span className="text-sm text-gray-500 font-medium">
              {documents.length} total
            </span>
          </div>

          {documents.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
              <FileText size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Documents Yet</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Pending KYC uploads will appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {documents.map((doc) => (
                <div
                  key={doc.user_id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6 pb-4 border-b border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {doc.full_name || "Unknown User"}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          SB ID: <span className="font-medium">{doc.sb_user_id || "—"}</span> •{" "}
                          {doc.email || "No email"}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500">
                        Updated: {new Date(doc.updated_at).toLocaleDateString("en-IN")}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {["pan", "aadhaar", "cmr", "cheque"].map((type) => {
                      const status = doc[`${type}_status`] || "Not Uploaded";
                      const filePath = doc[`${type}_file`];

                      return (
                        <div
                          key={type}
                          className={`p-5 rounded-xl border transition-colors ${
                            status === "Pending"
                              ? "bg-yellow-50 border-yellow-200"
                              : status === "Verified"
                              ? "bg-green-50 border-green-200"
                              : status === "Rejected"
                              ? "bg-red-50 border-red-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <p className="font-medium text-gray-900 capitalize">
                              {type.replace(/([A-Z])/g, " $1")}
                            </p>
                            <span
                              className={`text-xs font-medium px-3 py-1 rounded-full ${
                                status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : status === "Verified"
                                  ? "bg-green-100 text-green-800"
                                  : status === "Rejected"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {status}
                            </span>
                          </div>

                          {filePath && (
                            <a
                              href={getPublicFileUrl(filePath)}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 underline block mb-4 truncate"
                            >
                              View File: {filePath.split("/").pop()}
                            </a>
                          )}

                          {status === "Pending" && (
                            <div className="flex flex-col sm:flex-row gap-2">
                              <button
                                onClick={() => updateDocumentStatus(doc.user_id, type, "Verified")}
                                disabled={actionLoading[`${doc.user_id}-${type}`]}
                                className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-1.5"
                              >
                                <CheckCircle size={14} />
                                Verify
                              </button>
                              <button
                                onClick={() => updateDocumentStatus(doc.user_id, type, "Rejected")}
                                disabled={actionLoading[`${doc.user_id}-${type}`]}
                                className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-1.5"
                              >
                                <XCircle size={14} />
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;