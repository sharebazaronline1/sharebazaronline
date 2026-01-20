import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { supabase } from "../lib/supabase";
import {
  Menu,
  CheckCircle,
  FileText,
  AlertCircle,
  User,
  CreditCard,
  Building,
  ShieldCheck,
  Upload,
  Save,
} from "lucide-react";

const Documents = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    nameAsPerPan: "",
    nameAsPerDemat: "",
    dematId: "",
    depositoryName: "",
    bankName: "",
    bankAccountNo: "",
    ifsc: "",
  });

  const [savedData, setSavedData] = useState(null);

  const [panStatus, setPanStatus] = useState("Not Uploaded");
  const [aadhaarStatus, setAadhaarStatus] = useState("Not Uploaded");
  const [cmrStatus, setCmrStatus] = useState("Not Uploaded");
  const [chequeStatus, setChequeStatus] = useState("Not Uploaded");

  const [selectedFiles, setSelectedFiles] = useState({
    pan: null,
    aadhaar: null,
    cmr: null,
    cheque: null,
  });

  const allVerified =
    panStatus === "Verified" &&
    aadhaarStatus === "Verified" &&
    cmrStatus === "Verified" &&
    chequeStatus === "Verified";

  /* ---------------- AUTH + LOAD KYC ---------------- */
  useEffect(() => {
    let mounted = true;

    const initKyc = async () => {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.user || !mounted) {
        setLoading(false);
        return;
      }

      const currentUser = session.user;
      setUser(currentUser);

      // 1. Try to fetch existing row
      const { data: existing, error: fetchError } = await supabase
        .from("user_kyc")
        .select("*")
        .eq("user_id", currentUser.id)
        .maybeSingle();

      let kyc = existing;

      // 2. If no row → create minimal one
      if (!existing) {
        const { data: created, error: insertError } = await supabase
          .from("user_kyc")
          .insert({ user_id: currentUser.id })
          .select()
          .single();

        if (insertError) {
          console.error("Create KYC row failed:", insertError);
          setLoading(false);
          return;
        }
        kyc = created;
      }

      if (fetchError && fetchError.code !== "PGRST116") {
        console.error("Fetch KYC failed:", fetchError);
        setLoading(false);
        return;
      }

      // 3. Populate form & saved state
      setFormData({
        nameAsPerPan: kyc?.name_as_per_pan || "",
        nameAsPerDemat: kyc?.name_as_per_demat || "",
        dematId: kyc?.demat_id || "",
        depositoryName: kyc?.depository_name || "",
        bankName: kyc?.bank_name || "",
        bankAccountNo: kyc?.bank_account_no || "",
        ifsc: kyc?.ifsc || "",
      });

      setSavedData(kyc || null);

      setPanStatus(kyc?.pan_status || "Not Uploaded");
      setAadhaarStatus(kyc?.aadhaar_status || "Not Uploaded");
      setCmrStatus(kyc?.cmr_status || "Not Uploaded");
      setChequeStatus(kyc?.cheque_status || "Not Uploaded");

      // 4. Restore selectedFiles based on whether file paths exist
      setSelectedFiles({
        pan: kyc?.pan_file ? { name: "PAN Document" } : null,
        aadhaar: kyc?.aadhaar_file ? { name: "Aadhaar Document" } : null,
        cmr: kyc?.cmr_file ? { name: "CMR Document" } : null,
        cheque: kyc?.cheque_file ? { name: "Cancelled Cheque" } : null,
      });

      setLoading(false);
    };

    initKyc();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) initKyc();
    });

    return () => {
      mounted = false;
      subscription?.unsubscribe();
    };
  }, []);

  /* ---------------- HANDLERS ---------------- */

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAll = async () => {
    if (!user) {
      alert("Please log in first");
      return;
    }

    const payload = {
      user_id: user.id,
      name_as_per_pan: formData.nameAsPerPan.trim() || null,
      name_as_per_demat: formData.nameAsPerDemat.trim() || null,
      demat_id: formData.dematId.trim() || null,
      depository_name: formData.depositoryName.trim() || null,
      bank_name: formData.bankName.trim() || null,
      bank_account_no: formData.bankAccountNo.trim() || null,
      ifsc: formData.ifsc.trim() || null,
    };

    const { data, error } = await supabase
      .from("user_kyc")
      .upsert(payload, { onConflict: "user_id" })
      .select()
      .single();

    if (error) {
      console.error("Save failed:", error);
      alert("Failed to save: " + (error.message || "Unknown error"));
      return;
    }

    setSavedData(data);
    alert("Details saved successfully!");
  };

  const handleFileSelect = async (docType, file) => {
    if (!user || !file) return;

    const fileExt = file.name.split(".").pop();
    const filePath = `${user.id}/${docType}_${Date.now()}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("kyc-documents")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      alert("File upload failed");
      return;
    }

    const { error: updateError } = await supabase
      .from("user_kyc")
      .update({
        [`${docType}_file`]: filePath,
        [`${docType}_status`]: "Pending",
      })
      .eq("user_id", user.id);

    if (updateError) {
      console.error("Status update failed:", updateError);
      alert("Could not update document status");
      return;
    }

    setSelectedFiles((prev) => ({ ...prev, [docType]: file }));
    if (docType === "pan") setPanStatus("Pending");
    if (docType === "aadhaar") setAadhaarStatus("Pending");
    if (docType === "cmr") setCmrStatus("Pending");
    if (docType === "cheque") setChequeStatus("Pending");
  };

  // Only consider saved if at least one meaningful field exists
  const hasAnyData = savedData && (
    savedData.name_as_per_pan ||
    savedData.name_as_per_demat ||
    savedData.demat_id ||
    savedData.depository_name ||
    savedData.bank_name ||
    savedData.bank_account_no ||
    savedData.ifsc
  );

  const isSaved = !!hasAnyData;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Loading KYC details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar mobileOpen={mobileSidebarOpen} setMobileSidebarOpen={setMobileSidebarOpen} />

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
            <p className="text-gray-600 mt-1">Manage and verify your account details</p>
          </div>
          <UserProfileDropdown />
        </header>

        {/* Main KYC Card */}
        <section className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-600" size={24} />
              <h2 className="text-xl font-bold text-gray-900">KYC & Account Details</h2>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Personal Information */}
              <DetailGroup title="Personal Information">
                {isSaved ? (
                  <>
                    <DetailItem
                      icon={<User size={16} />}
                      label="Name (As Per PAN)"
                      value={savedData.name_as_per_pan || "Not Provided"}
                    />
                    <DetailItem
                      icon={<User size={16} />}
                      label="Name (As Per Demat)"
                      value={savedData.name_as_per_demat || "Not Provided"}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500">Name (As Per PAN)</label>
                      <input
                        type="text"
                        name="nameAsPerPan"
                        value={formData.nameAsPerPan}
                        onChange={handleInputChange}
                        placeholder="Enter name as per PAN"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500">Name (As Per Demat)</label>
                      <input
                        type="text"
                        name="nameAsPerDemat"
                        value={formData.nameAsPerDemat}
                        onChange={handleInputChange}
                        placeholder="Enter name as per Demat"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                    </div>
                  </>
                )}
              </DetailGroup>

              {/* Demat Details */}
              <DetailGroup title="Demat Account">
                {isSaved ? (
                  <>
                    <DetailItem
                      icon={<CreditCard size={16} />}
                      label="Demat ID"
                      value={savedData.demat_id || "Not Provided"}
                    />
                    <DetailItem
                      icon={<Building size={16} />}
                      label="Depository Name"
                      value={savedData.depository_name || "Not Provided"}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500">Demat ID</label>
                      <input
                        type="text"
                        name="dematId"
                        value={formData.dematId}
                        onChange={handleInputChange}
                        placeholder="Enter Demat ID"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500">Depository Name</label>
                      <input
                        type="text"
                        name="depositoryName"
                        value={formData.depositoryName}
                        onChange={handleInputChange}
                        placeholder="CDSL / NSDL"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                    </div>
                  </>
                )}
              </DetailGroup>

              {/* Bank Details */}
              <DetailGroup title="Bank Details">
                {isSaved ? (
                  <>
                    <DetailItem
                      icon={<Building size={16} />}
                      label="Bank Name"
                      value={savedData.bank_name || "Not Provided"}
                    />
                    <DetailItem
                      icon={<CreditCard size={16} />}
                      label="Bank Account No."
                      value={savedData.bank_account_no || "Not Provided"}
                    />
                    <DetailItem
                      icon={<FileText size={16} />}
                      label="IFSC Code"
                      value={savedData.ifsc || "Not Provided"}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500">Bank Name</label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        placeholder="HDFC Bank / SBI / etc"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500">Bank Account No.</label>
                      <input
                        type="text"
                        name="bankAccountNo"
                        value={formData.bankAccountNo}
                        onChange={handleInputChange}
                        placeholder="Enter account number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-gray-500">IFSC Code</label>
                      <input
                        type="text"
                        name="ifsc"
                        value={formData.ifsc}
                        onChange={handleInputChange}
                        placeholder="HDFC0000123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                    </div>
                  </>
                )}
              </DetailGroup>

              {/* Required Documents Uploads */}
              <DetailGroup title="Required Documents" fullWidth>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <UploadCard
                    title="PAN"
                    status={panStatus}
                    selectedFile={selectedFiles.pan}
                    onFileSelect={(file) => handleFileSelect("pan", file)}
                  />
                  <UploadCard
                    title="Aadhaar"
                    status={aadhaarStatus}
                    selectedFile={selectedFiles.aadhaar}
                    onFileSelect={(file) => handleFileSelect("aadhaar", file)}
                  />
                  <UploadCard
                    title="CMR"
                    status={cmrStatus}
                    selectedFile={selectedFiles.cmr}
                    onFileSelect={(file) => handleFileSelect("cmr", file)}
                  />
                  <UploadCard
                    title="Cancelled Cheque"
                    status={chequeStatus}
                    selectedFile={selectedFiles.cheque}
                    onFileSelect={(file) => handleFileSelect("cheque", file)}
                  />
                </div>
              </DetailGroup>
            </div>

            {/* Save Button - show when editing (not saved) */}
            {!isSaved && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleSaveAll}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition shadow-md"
                >
                  <Save size={18} />
                  Save All Details
                </button>
              </div>
            )}

            {/* Update Note */}
            <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="text-amber-600 mt-0.5" size={18} />
              <div className="text-sm text-amber-800">
                <p className="font-medium">To update any details</p>
                <p className="mt-1">
                  Please email us at{" "}
                  <a
                    href="mailto:support@sharebazaaronline.com"
                    className="text-green-700 hover:underline font-medium"
                  >
                    support@sharebazaaronline.com
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
        <p className="font-medium text-gray-900 break-all">{value || "Not Provided"}</p>
      </div>
    </div>

    {status && (
      <span
        className={`text-sm font-medium flex items-center gap-1.5 ${
          status === "Verified"
            ? "text-green-600"
            : status === "Pending"
            ? "text-yellow-600"
            : "text-gray-600"
        }`}
      >
        {status === "Verified" ? <CheckCircle size={14} /> : status === "Pending" ? <AlertCircle size={14} /> : null}
        {status}
      </span>
    )}
  </div>
);

const UploadCard = ({ title, status, selectedFile, onFileSelect }) => (
  <div className="bg-gray-50 rounded-xl p-3 border hover:border-green-300 transition h-full flex flex-col">
    <p className="font-medium text-gray-900 text-sm mb-1.5 truncate">{title}</p>

    {!selectedFile ? (
      <label className="cursor-pointer block flex-1">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-green-400 transition h-full flex flex-col justify-center items-center">
          <Upload size={18} className="text-gray-400 mb-1.5" />
          <p className="text-xs font-medium text-gray-700">Upload</p>
        </div>
        <input
          type="file"
          accept="image/jpeg,image/png,application/pdf"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
        />
      </label>
    ) : (
      <div className="bg-white rounded-lg border p-2.5 text-xs flex items-center justify-between gap-2 min-h-[60px]">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <FileText className="text-green-600 flex-shrink-0" size={16} />
          <p className="font-medium truncate flex-1">{selectedFile?.name || "Uploaded file"}</p>
        </div>
        <span
          className={`text-xs font-medium flex items-center gap-1 flex-shrink-0 ${
            status === "Pending"
              ? "text-yellow-600"
              : status === "Verified"
              ? "text-green-600"
              : "text-gray-600"
          }`}
        >
          {status === "Pending" ? (
            <>
              <AlertCircle size={12} /> Pending
            </>
          ) : status === "Verified" ? (
            <>
              <CheckCircle size={12} /> Verified
            </>
          ) : (
            status
          )}
        </span>
      </div>
    )}
  </div>
);

export default Documents;