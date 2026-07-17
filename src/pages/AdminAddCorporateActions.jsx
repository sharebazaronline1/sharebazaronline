// src/pages/AdminCorporateAction.jsx
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Save, Image as ImageIcon, Loader2, CheckCircle } from "lucide-react";

const AdminCorporateAction = () => {
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageUploading, setImageUploading] = useState(false);
  const [category, setCategory] = useState("Buyback");
  const [readingTime, setReadingTime] = useState(5);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Added states for managing corporate action relationships
  const [corporateActions, setCorporateActions] = useState([]);
  const [selectedAction, setSelectedAction] = useState("");

  const categories = [
    "Buyback",
    "Stock Split",
    "Bonus Issue",
    "Dividend",
    "Rights Issue",
    "Merger",
    "Demerger",
    "Takeover / Acquisition",
    "Open Offer",
    "Delisting",
    "OFS",
    "QIP",
    "Preferential Allotment",
    "Warrants Issue",
    "ESOP Allotment",
    "FPO",
    "Bond Issue",
    "NCD Issue",
    "Distribution",
    "Unit Split",

    // Corporate Meetings & Governance
    "AGM",
    "EGM",
    "Board Meeting",
    "Postal Ballot",
    "E-Voting",

    // Promoter & Shareholding Changes
    "Promoter Stake Increase",
    "Promoter Stake Sale",
    "Pledge Release",

    // Others
    "Scheme of Arrangement",
    "Insolvency Resolution",
    "CIRP Process",
    "Subsidiary Incorporation",
    "Joint Venture",
    "Change of Company Name",
    "IPO Listing",
    "Change in Director",
    "CEO Appointment",
    "Auditor Appointment",
    "Regulatory Action",
    "Trading Suspension",
    "Revocation of Suspension",
  ];

  // Fetch unlinked corporate actions on component mount
  useEffect(() => {
    const loadActions = async () => {
      const { data, error } = await supabase
        .from("corporate_actions")
        .select("id, company, action_type")
        .is("blog_id", null)
        .order("company");

      if (!error) {
        setCorporateActions(data || []);
      }
    };

    loadActions();
  }, []);

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

  const stripHtml = (html) => html.replace(/<[^>]*>/g, "").trim();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageUploading(true);
    try {
      const fileName = `${Date.now()}-${file.name}`;

      await supabase.storage.from("blog-images").upload(fileName, file);

      const { data } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      setImageUrl(data.publicUrl);
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Required fields missing");
      return;
    }

    setLoading(true);

    try {
      const slug = `${generateSlug(title)}-${Date.now()}`;

      const cleanExcerpt =
        excerpt || stripHtml(content).substring(0, 160) + "...";

      const { data, error } = await supabase
        .from("blogs")
        .insert([
          {
            title,
            heading,
            excerpt: cleanExcerpt,
            content,
            image_url: imageUrl || null,
            category,
            reading_time: Number(readingTime),
            status: "published",
            slug,
            author: "Admin",
            published_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        console.error("Supabase Insert Error:", error);
        alert(error.message);
        return;
      }

      // Link the corporate action record if one was chosen
      const blogId = data[0].id;
      if (selectedAction) {
        const { error: updateError } = await supabase
          .from("corporate_actions")
          .update({
            blog_id: blogId,
          })
          .eq("id", selectedAction);

        if (updateError) {
          console.error("Supabase Relationship Link Error:", updateError);
        } else {
          // Remove linked item from local UI dropdown list
          setCorporateActions((prev) => prev.filter((item) => item.id !== selectedAction));
        }
      }

      setSuccess(true);

      // Reset form variables
      setTitle("");
      setHeading("");
      setExcerpt("");
      setContent("");
      setImageUrl("");
      setSelectedAction("");

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="md:ml-64">
        <header className="bg-white px-8 py-6 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Create New Corporate Action
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Publish corporate announcements to Insight Hub
              </p>
            </div>
            <UserProfileDropdown />
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-10">
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
              Corporate Action published successfully
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-2xl font-medium px-5 py-4 border rounded-xl focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              placeholder="Enter heading..."
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full text-lg px-5 py-4 border rounded-xl focus:ring-2 focus:ring-green-500"
            />

            <div className="grid md:grid-cols-3 gap-6 items-end">
              {/* Relationship Dropdown placement */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Link Corporate Action
                </label>
                <select
                  value={selectedAction}
                  onChange={(e) => setSelectedAction(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl bg-white"
                >
                  <option value="">Select Corporate Action</option>
                  {corporateActions.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.company} — {item.action_type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Corporate Action Type</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl bg-white"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Reading Time (min)</label>
                <input
                  type="number"
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Featured Image</label>
                <label className="flex items-center justify-center gap-2 px-4 py-3 border rounded-xl cursor-pointer hover:bg-gray-50 transition">
                  <input type="file" onChange={handleImageUpload} className="hidden" />
                  {imageUploading ? (
                    <>
                      <Loader2 className="animate-spin text-gray-500" size={18} />
                      <span className="text-sm text-gray-600">Uploading...</span>
                    </>
                  ) : imageUrl ? (
                    <>
                      <CheckCircle className="text-green-600" size={18} />
                      <span className="text-sm text-green-600">Uploaded successfully</span>
                    </>
                  ) : (
                    <>
                      <ImageIcon size={18} className="text-gray-500" />
                      <span className="text-sm text-gray-600">Upload image</span>
                    </>
                  )}
                </label>
              </div>
            </div>

            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              placeholder="Short summary..."
              className="w-full px-4 py-3 border rounded-xl"
            />

            <div className="bg-white border rounded-xl overflow-hidden">
              <label className="block px-5 py-3 bg-gray-50 border-b text-sm font-medium text-gray-700">
                HTML Content (Detailed Description)
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Paste or write full HTML here..."
                className="w-full h-[600px] p-5 font-mono text-sm leading-relaxed resize-y focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                disabled={loading}
                className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 disabled:opacity-70"
              >
                <Save size={18} />
                {loading ? "Publishing..." : "Publish Corporate Action"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminCorporateAction;