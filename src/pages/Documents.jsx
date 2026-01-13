// src/pages/Documents.jsx

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Menu, CheckCircle, FileText, Share2, AlertCircle, User, CreditCard, Building, ShieldCheck, Upload } from "lucide-react";

const Documents = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Static demo data (in real app → fetch from Firestore / user profile)
  const [kycDetails] = useState({
    nameAsPerPan: "Kumar",
    nameAsPerPanStatus: "Verified",
    dematId: "IN12345678901234",
    bankAccountNo: "XXXXXXX1234",
    bankName: "HDFC Bank",
    ifsc: "HDFC0000123",
    depositoryName: "CDSL",
    nameAsPerDemat: "Kumar",
    dematAccountNo: "12012345 12345678",
  });

  // Cancelled Cheque upload state
  const [chequeFile, setChequeFile] = useState(null);
  const [chequeStatus, setChequeStatus] = useState("Not Uploaded"); // "Not Uploaded" → "Pending" → "Verified"

  const allVerified = chequeStatus === "Verified";

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setUser(currentUser);
    });
    return () => unsub();
  }, [navigate]);

  if (!user) return null;

  const handleChequeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setChequeFile(file);
      setChequeStatus("Pending"); // Simulate upload → pending for review
      // In real app: upload to Firebase Storage, then update status
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileOpen={setMobileSidebarOpen} />

      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Documents & KYC</h1>
          <button onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Documents & KYC</h1>
            <p className="text-gray-600 mt-1">Your verified details & account information</p>
          </div>

          <UserProfileDropdown />
        </header>

        {/* Main KYC Card */}
        <section className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">KYC & Account Details</h2>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Personal Information */}
             {/* Personal Information */}
<DetailGroup title="Personal Information">
  <DetailItem
    icon={<User size={16} />}
    label="Name"
    value={
      <>
        <span className="block text-xs text-gray-400">
          (As Per PAN)
        </span>
        <span className="text-sm font-medium text-gray-900">
          {kycDetails.nameAsPerPan}
        </span>
      </>
    }
    
  />

  <DetailItem
    icon={<User size={16} />}
    label="Name"
    value={
      <>
        <span className="block text-xs text-gray-400">
          (As Per Demat)
        </span>
        <span className="text-sm font-medium text-gray-900">
          {kycDetails.nameAsPerDemat}
        </span>
      </>
    }
  />
</DetailGroup>

              {/* Demat Details */}
              <DetailGroup title="Demat Account">
                <DetailItem icon={<CreditCard size={16} />} label="Demat ID" value={kycDetails.dematId} />
                <DetailItem icon={<FileText size={16} />} label="Demat Account No." value={kycDetails.dematAccountNo} />
                <DetailItem icon={<Building size={16} />} label="Depository Name" value={kycDetails.depositoryName} />
              </DetailGroup>

              {/* Bank Details */}
              <DetailGroup title="Bank Details">
                <DetailItem icon={<Building size={16} />} label="Bank Name" value={kycDetails.bankName} />
                <DetailItem icon={<CreditCard size={16} />} label="Bank Account No." value={kycDetails.bankAccountNo} />
                <DetailItem icon={<FileText size={16} />} label="IFSC Code" value={kycDetails.ifsc} />
              </DetailGroup>

              {/* Cancelled Cheque */}
              <DetailGroup title="Cancelled Cheque" fullWidth>
                {chequeStatus === "Not Uploaded" ? (
                  <div className="flex flex-col gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-gray-700 font-medium">
                      <Upload size={18} />
                      Upload Cancelled Cheque
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        onChange={handleChequeUpload}
                      />
                    </label>
                    <p className="text-xs text-gray-500">Supported: JPG, PNG, PDF (max 5MB)</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <FileText className="text-green-600" size={20} />
                      <div>
                        <p className="font-medium text-gray-900">Cancelled Cheque</p>
                        <p className="text-xs text-gray-600">{chequeFile?.name || "Uploaded"}</p>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-medium flex items-center gap-1.5 ${
                        chequeStatus === "Pending"
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      {chequeStatus === "Pending" ? (
                        <>
                          <AlertCircle size={16} />
                          Pending
                        </>
                      ) : (
                        <>
                          <CheckCircle size={16} />
                          Verified
                        </>
                      )}
                    </span>
                  </div>
                )}
              </DetailGroup>
            </div>

            {/* Update Note */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="text-amber-600 mt-0.5" size={18} />
              <div className="text-sm text-amber-800">
                <p className="font-medium">To update any details</p>
                <p className="mt-1">
                  Please email us at{" "}
                  <a href="mailto:support@sha.com" className="text-green-700 hover:underline font-medium">
                    support@sha.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEBI Compliance Banner */}
        {allVerified && (
          <section className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-green-800 text-lg">
                SEBI Compliance Completed
              </h3>
              <p className="text-sm text-green-700 mt-1">
                All required documents and details are verified as per regulatory guidelines.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

/* ---------------- Reusable Components ---------------- */

const DetailGroup = ({ title, children, fullWidth = false }) => (
  <div className={`${fullWidth ? "md:col-span-2 lg:col-span-3" : ""}`}>
    <h3 className="text-sm font-semibold text-gray-700 mb-3 border-b pb-2">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
);

const DetailItem = ({ icon, label, value, status }) => (
  <div className="flex items-start justify-between gap-3">
    <div className="flex items-start gap-3 flex-1">
      <div className="p-2 bg-gray-100 rounded-lg text-gray-600">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-medium text-gray-900 break-all">{value || "Not Available"}</p>
      </div>
    </div>
    {status && (
      <span className="flex items-center gap-1.5 text-sm font-medium text-green-600">
        <CheckCircle size={14} />
        {status}
      </span>
    )}
  </div>
);

export default Documents;