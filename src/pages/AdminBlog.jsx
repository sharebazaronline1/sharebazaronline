// src/pages/AdminBlog.jsx
import { useState, useRef } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Save, Image as ImageIcon, Loader2, CheckCircle } from "lucide-react";
import ReactQuill from "react-quill";
import Quill from "quill";
import "react-quill/dist/quill.snow.css";

/* 🔥 Preserve table paste */
const Clipboard = Quill.import("modules/clipboard");

class PlainClipboard extends Clipboard {
  onPaste(e) {
    e.preventDefault();
    const html = e.clipboardData.getData("text/html");
    const text = e.clipboardData.getData("text/plain");

    const quill = this.quill;
    const range = quill.getSelection();

    if (html && html.includes("<table")) {
      quill.clipboard.dangerouslyPasteHTML(range.index, html);
    } else {
      quill.insertText(range.index, text);
    }
  }
}

Quill.register("modules/clipboard", PlainClipboard, true);

const AdminBlog = () => {
  const quillRef = useRef(null);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageUploading, setImageUploading] = useState(false); // 🔥 NEW
  const [category, setCategory] = useState("IPO News");
  const [readingTime, setReadingTime] = useState(5);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const categories = [
    "IPO News",
    "Market Analysis",
    "Pre-IPO",
    "Investment Tips",
    "Company Updates",
    "Dividend News",
  ];

  const generateSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

  const stripHtml = (html) => html.replace(/<[^>]*>/g, "").trim();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageUploading(true); // 🔥 start uploading
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
      setImageUploading(false); // 🔥 done
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

    console.log("Inserted:", data);

    setSuccess(true);

    setTitle("");
    setExcerpt("");
    setContent("");
    setImageUrl("");

    setTimeout(() => setSuccess(false), 3000);

  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    setLoading(false);
  }
};

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <main className="md:ml-64">
        {/* HEADER */}
        <header className="bg-white border-b px-8 py-6 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Create New Blog
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Publish content to Insight Hub
              </p>
            </div>
            <UserProfileDropdown />
          </div>
        </header>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto px-6 py-10">
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
              Blog published successfully
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* TITLE */}
            <input
              type="text"
              placeholder="Enter blog title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-2xl font-semibold px-5 py-4 border rounded-xl focus:ring-2 focus:ring-green-500"
            />

            {/* HORIZONTAL */}
            <div className="grid md:grid-cols-3 gap-6 items-end">

              {/* CATEGORY */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Category
                </label>
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

              {/* TIME */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Reading Time (min)
                </label>
                <input
                  type="number"
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl"
                />
              </div>

              {/* IMAGE STATUS UI */}
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Featured Image
                </label>

                <label className="flex items-center justify-center gap-2 px-4 py-3 border rounded-xl cursor-pointer hover:bg-gray-50 transition">
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* 🔥 STATES */}
                  {imageUploading ? (
                    <>
                      <Loader2 className="animate-spin text-gray-500" size={18} />
                      <span className="text-sm text-gray-600">
                        Uploading...
                      </span>
                    </>
                  ) : imageUrl ? (
                    <>
                      <CheckCircle className="text-green-600" size={18} />
                      <span className="text-sm text-green-600">
                        Uploaded successfully
                      </span>
                    </>
                  ) : (
                    <>
                      <ImageIcon size={18} className="text-gray-500" />
                      <span className="text-sm text-gray-600">
                        Upload image
                      </span>
                    </>
                  )}
                </label>
              </div>
            </div>

            {/* EXCERPT */}
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              placeholder="Short summary..."
              className="w-full px-4 py-3 border rounded-xl"
            />

            {/* EDITOR */}
            <div className="bg-white border rounded-xl overflow-hidden">
              <ReactQuill
                ref={quillRef}
                value={content}
                onChange={setContent}
                modules={modules}
                className="min-h-[420px]"
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-end">
              <button
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2"
              >
                <Save size={18} />
                {loading ? "Publishing..." : "Publish"}
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminBlog;