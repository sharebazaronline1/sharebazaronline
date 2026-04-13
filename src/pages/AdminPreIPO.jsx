// src/pages/AdminPreIPO.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import { Save, Loader2, Search } from "lucide-react";

const AdminPreIPO = () => {
  const [companies, setCompanies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editPrice, setEditPrice] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch companies
  const fetchCompanies = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("pre_ipo_companies")
      .select("*")
      .order("name", { ascending: true });

    if (error) console.error(error);
    else {
      setCompanies(data || []);
      setFiltered(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // Live Search
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(companies);
    } else {
      const term = search.toLowerCase();
      setFiltered(companies.filter((c) => c.name.toLowerCase().includes(term)));
    }
  }, [search, companies]);

  // Double Click to Edit
  const handleDoubleClick = (company) => {
    setEditingId(company.id);
    setEditPrice(company.price.toString());
  };

  // Save Price
  const savePrice = async (id) => {
    if (!editPrice || isNaN(editPrice)) {
      setEditingId(null);
      return;
    }

    setSaving(true);
    const { error } = await supabase
      .from("pre_ipo_companies")
      .update({
        price: parseFloat(editPrice),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) alert("Failed to update price");
    else {
      setEditingId(null);
      fetchCompanies();
    }
    setSaving(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar mobileOpen={false} setMobileOpen={() => {}} />

      <main className="md:ml-64 p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pre IPO Management</h1>
          <p className="text-gray-600 mb-8">Double-click on price to edit</p>

          {/* Search Bar */}
          <div className="relative mb-8 max-w-md">
            <div className="absolute left-4 top-1/3 -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              placeholder="Search company name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:border-green-500 text-sm"
            />
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-6 py-4 font-medium text-gray-600">Company Name</th>
                  <th className="text-right px-6 py-4 font-medium text-gray-600">Current Price (₹)</th>
                  <th className="w-24"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {loading ? (
                  <tr>
                    <td colSpan="3" className="py-16 text-center">
                      <Loader2 className="animate-spin mx-auto text-green-600" size={36} />
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="py-16 text-center text-gray-500">
                      No companies found
                    </td>
                  </tr>
                ) : (
                  filtered.map((company) => (
                    <tr key={company.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-5 font-medium text-gray-900">
                        {company.name}
                      </td>

                      <td className="px-6 py-5 text-right">
                        {editingId === company.id ? (
                          <input
                            type="number"
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                            onBlur={() => savePrice(company.id)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") savePrice(company.id);
                              if (e.key === "Escape") setEditingId(null);
                            }}
                            className="w-32 text-right text-lg font-semibold border border-green-500 rounded-xl px-4 py-2 focus:outline-none"
                            autoFocus
                          />
                        ) : (
                          <span
                            onDoubleClick={() => handleDoubleClick(company)}
                            className="text-lg font-semibold cursor-pointer hover:text-green-600 transition-colors"
                          >
                            ₹{company.price}
                          </span>
                        )}
                      </td>

                     
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPreIPO;