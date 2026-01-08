import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, CheckCircle, FileText, Share2 } from "lucide-react";

const Documents = () => {
  const [user, setUser] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [documents, setDocuments] = useState({
    pan: { number: "", uploaded: false, date: "" },
    aadhaar: { number: "", uploaded: false, date: "" },
    cheque: { uploaded: false, date: "" },
    demat: { account: "", uploaded: false, date: "" },
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/login");
      else setUser(currentUser);
    });
    return () => unsub();
  }, [navigate]);

  if (!user) return null;

  const handleUpload = (docType, data) => {
    setDocuments((prev) => ({
      ...prev,
      [docType]: {
        ...data,
        uploaded: true,
        date: new Date().toLocaleDateString(),
      },
    }));
  };

  const allVerified = Object.values(documents).every((doc) => doc.uploaded);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      {/* Main Content */}
      <main className="md:ml-64 p-4 md:p-8 transition-all">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-lg font-bold text-gray-900">Documents</h1>
          <button onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={24} />
          </button>
        </header>

        {/* Desktop Header */}
        <header className="hidden md:flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
            <p className="text-gray-600 mt-1">
              Upload & manage your verification documents
            </p>
          </div>

          {/* Refer Button */}
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition">
            <Share2 size={18} />
            Refer & Earn
          </button>
        </header>

        {/* Documents Section */}
        <section className="bg-white rounded-2xl p-6 border shadow-sm">
          <h2 className="text-xl font-bold mb-6">Your Documents</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DocumentItem
              title="PAN Card"
              details={documents.pan}
              onUpload={(data) => handleUpload("pan", data)}
            />
            <DocumentItem
              title="Aadhaar"
              details={documents.aadhaar}
              onUpload={(data) => handleUpload("aadhaar", data)}
            />
            <DocumentItem
              title="Cancelled Cheque"
              details={documents.cheque}
              onUpload={(data) => handleUpload("cheque", data)}
            />
            <DocumentItem
              title="Demat Proof"
              details={documents.demat}
              onUpload={(data) => handleUpload("demat", data)}
            />
          </div>
        </section>

        {/* SEBI Compliance */}
        {allVerified && (
          <section className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5 flex items-start gap-3">
            <CheckCircle className="text-green-600 mt-1" size={22} />
            <div>
              <h3 className="font-semibold text-green-800">
                SEBI Compliance Completed
              </h3>
              <p className="text-sm text-green-700 mt-1">
                All required documents are verified as per regulatory guidelines.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

/* ---------------- Reusable Components ---------------- */

const DocumentItem = ({ title, details, onUpload }) => {
  const [inputValue, setInputValue] = useState("");

  if (details.uploaded) {
    return (
      <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <FileText className="text-green-600" size={18} />
          </div>
          <div>
            <p className="font-medium text-gray-900">{title}</p>
            <p className="text-xs text-gray-600">
              {details.number || details.account || "Uploaded"} • {details.date}
            </p>
          </div>
        </div>

        <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
          <CheckCircle size={16} />
          Verified
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-4 border flex flex-col gap-3">
      <p className="font-medium text-gray-900">{title}</p>

      <input
        type="text"
        placeholder={`Enter ${title} details`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        onClick={() =>
          onUpload({
            number: title.includes("Demat") ? "" : inputValue,
            account: title.includes("Demat") ? inputValue : "",
          })
        }
        className="self-start px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
      >
        Upload & Verify
      </button>
    </div>
  );
};

export default Documents;
