import { useState } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Upload, Save, Loader2, CheckCircle, Eye } from "lucide-react";

const AdminIPO = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [jsonInput, setJsonInput] = useState("");
  const [ipoJson, setIpoJson] = useState(null);
  const [jsonError, setJsonError] = useState("");
  const [logoPreview, setLogoPreview] = useState("");

  // ==================== NORMALIZATION ====================
  const normalizeForDatabase = (data) => {
    const normalized = { ...data };

    const mappings = {
      minInvestment: "mininvestment",
      createdAt: "created_at",
      updatedAt: "updated_at",
    };

    Object.keys(mappings).forEach((key) => {
      if (normalized[key] !== undefined) {
        normalized[mappings[key]] = normalized[key];
        delete normalized[key];
      }
    });

    const jsonbFields = [
      "about_company", "ipo_basic_details", "company_overview", "ipo_important_dates",
      "ipo_objectives", "investor_reservation", "market_lot_details",
      "key_performance_indicators", "company_financial_data", "grey_market_premium",
      "ipo_subscription_data", "ipo_intermediaries", "ipo_lead_manager",
      "company_information", "ipo_documents", "faq"
    ];

    jsonbFields.forEach((field) => {
      if (normalized[field] && typeof normalized[field] === "string") {
        try {
          normalized[field] = JSON.parse(normalized[field]);
        } catch (e) {
          console.warn(`Could not parse ${field}`);
        }
      }
    });

    if (normalized.company_financial_data && !Array.isArray(normalized.company_financial_data)) {
      normalized.company_financial_data = [normalized.company_financial_data];
    }

    normalized.updated_at = new Date().toISOString();
    if (!normalized.created_at) normalized.created_at = new Date().toISOString();

    return normalized;
  };

  // ==================== UPLOAD LOGO & UPDATE JSON ====================
  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const ext = file.name.split(".").pop();
      const fileName = `ipo-${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("ipo-logos")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("ipo-logos").getPublicUrl(fileName);
      const bucketUrl = data.publicUrl;

      setLogoPreview(bucketUrl);

      // Auto-update logo in the pasted JSON
      if (jsonInput.trim()) {
        let json = JSON.parse(jsonInput);
        json.logo = bucketUrl;
        setJsonInput(JSON.stringify(json, null, 2));
        alert("Logo uploaded and JSON updated!");
      } else {
        alert(" Logo uploaded! Paste JSON first next time.");
      }
    } catch (err) {
      console.error(err);
      alert("Logo upload failed: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // ==================== LOAD JSON ====================
  const loadFromJson = () => {
    try {
      const data = JSON.parse(jsonInput.trim());
      setIpoJson(data);
      setLogoPreview(data.logo || "");
      setJsonError("");
      alert(" JSON loaded successfully!");
    } catch (err) {
      setJsonError("Invalid JSON format.");
      console.error(err);
    }
  };

  // ==================== PUBLISH ====================
  const handleSubmit = async () => {
    if (!ipoJson) {
      alert("Please load JSON first");
      return;
    }

    setLoading(true);

    try {
      const finalData = normalizeForDatabase(ipoJson);

      const { error } = await supabase.from("ipos").insert([finalData]);

      if (error) throw error;

      setSuccess(true);
      alert(" IPO published successfully!");

      setTimeout(() => {
        setSuccess(false);
        setJsonInput("");
        setIpoJson(null);
        setLogoPreview("");
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Error saving IPO: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <AdminSidebar />
      <main className="md:ml-64">
        <header className="bg-white px-8 py-6 shadow-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">Add New IPO</h1>
            <UserProfileDropdown />
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
          {success && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-800 font-medium rounded-2xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" /> IPO added successfully!
            </div>
          )}

          {/* 1. Paste JSON */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-slate-900">1. Paste IPO JSON</h2>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              rows={14}
              className="w-full font-mono text-sm p-5 border border-gray-300 bg-slate-50 text-slate-900 rounded-2xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400 shadow-inner"
              placeholder="Paste the complete IPO JSON object here..."
            />
            {jsonError && <p className="text-red-600 text-sm mt-2 font-medium">{jsonError}</p>}
          </div>

          {/* 2. Upload Logo */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-slate-900">2. Upload Logo (Updates JSON automatically)</h2>
            
            <input
              type="file"
              id="logo-upload"
              accept="image/*"
              hidden
              onChange={handleLogoUpload}
            />

            <label
              htmlFor="logo-upload"
              className="border-2 border-dashed border-gray-300 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors"
            >
              {logoPreview ? (
                <img src={logoPreview} alt="preview" className="h-32 object-contain" />
              ) : (
                <>
                  <Upload size={48} className="text-slate-500" />
                  <p className="mt-4 text-slate-700 font-medium">Click to upload company logo</p>
                </>
              )}
            </label>
            <p className="text-center text-sm text-slate-600 mt-3 font-normal">
              Logo will be uploaded to <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded border border-slate-200">ipo-logos</code> bucket and JSON will be updated
            </p>
          </div>

          {/* 3. Load JSON */}
          <div className="flex justify-center">
            <button
              onClick={loadFromJson}
              disabled={!jsonInput.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 text-white px-10 py-3 rounded-2xl font-semibold flex items-center gap-2 shadow-sm transition-all"
            >
              3. Load JSON into Preview
            </button>
          </div>

          {/* 4. Preview */}
          {ipoJson && (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-slate-800">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-900">
                <Eye className="w-5 h-5 text-blue-600" /> Preview
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-slate-500 font-medium">Company</p>
                  <p className="font-semibold text-slate-900">{ipoJson.name || ipoJson.full_name}</p>
                </div>
                <div><p className="text-slate-500 font-medium">Open</p><p className="font-semibold text-slate-800">{ipoJson.open}</p></div>
                <div><p className="text-slate-500 font-medium">Close</p><p className="font-semibold text-slate-800">{ipoJson.close}</p></div>
                <div><p className="text-slate-500 font-medium">Listing</p><p className="font-semibold text-slate-800">{ipoJson.listing}</p></div>
                <div><p className="text-slate-500 font-medium">Price</p><p className="font-semibold text-slate-800">{ipoJson.price}</p></div>
                <div><p className="text-slate-500 font-medium">Lot</p><p className="font-semibold text-slate-800">{ipoJson.lot}</p></div>
              </div>

              {logoPreview && (
                <div className="mt-8">
                  <p className="text-slate-500 font-medium mb-2">Logo</p>
                  <img src={logoPreview} alt="logo" className="h-24 object-contain border border-gray-200 rounded-xl p-3 bg-white" />
                </div>
              )}
            </div>
          )}

          {/* Publish */}
          <div className="flex justify-end pt-6">
            <button
              onClick={handleSubmit}
              disabled={loading || !ipoJson}
              className="bg-[#16A34A] hover:bg-[#15803D] disabled:bg-gray-300 disabled:text-gray-500 text-white px-12 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg shadow-sm transition-all"
            >
              {loading ? (
                <><Loader2 className="animate-spin" size={24} /> Publishing...</>
              ) : (
                <><Save size={24} /> Publish IPO</>
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminIPO;