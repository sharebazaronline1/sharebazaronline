// src/pages/AdminCorporateActions.jsx
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import AdminSidebar from "../components/AdminSidebar";
import UserProfileDropdown from "../components/UserProfileDropdown";
import { Save, Plus, Trash2, Loader2, CheckCircle, Edit2 } from "lucide-react";

const AdminCorporateActions = () => {
  const [activeTab, setActiveTab] = useState("dividends");
  const [submitLoading, setSubmitLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);

  // Form Data for Adding New
  const [data, setData] = useState({
    dividends: [{ company: "", type: "Final", percentage: "", announcement: "", record: "", ex_dividend: "" }],
    rights: [{ company: "", ratio: "", premium: "", announcement: "", record: "", ex_rights: "" }],
    bonus: [{ company: "", ratio: "", announcement: "", record: "", ex_bonus: "" }],
    splits: [{ company: "", old_fv: "", new_fv: "", announcement: "", record: "", split_date: "" }],
  });

  // Existing Records
  const [existingRecords, setExistingRecords] = useState([]);
  const [editModal, setEditModal] = useState(null);

  const tabs = [
    { id: "dividends", label: "Dividends", dbType: "dividend" },
    { id: "rights", label: "Rights Issue", dbType: "rights" },
    { id: "bonus", label: "Bonus Shares", dbType: "bonus" },
    { id: "splits", label: "Stock Splits", dbType: "split" },
  ];

  const currentTabConfig = tabs.find(t => t.id === activeTab);
  const currentData = data[activeTab];
  const setCurrentData = (newData) => setData(prev => ({ ...prev, [activeTab]: newData }));

  // Fetch Records
  const fetchRecords = async () => {
    setFetchLoading(true);
    try {
      const { data: records, error } = await supabase
        .from("corporate_actions")
        .select("*")
        .order("announcement", { ascending: false });
      if (error) throw error;
      setExistingRecords(records || []);
    } catch (err) {
      console.error(err);
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const addNewRow = () => {
    let newRow = {};
    if (activeTab === "dividends") newRow = { company: "", type: "Final", percentage: "", announcement: "", record: "", ex_dividend: "" };
    else if (activeTab === "rights") newRow = { company: "", ratio: "", premium: "", announcement: "", record: "", ex_rights: "" };
    else if (activeTab === "bonus") newRow = { company: "", ratio: "", announcement: "", record: "", ex_bonus: "" };
    else if (activeTab === "splits") newRow = { company: "", old_fv: "", new_fv: "", announcement: "", record: "", split_date: "" };

    setCurrentData([...currentData, newRow]);
  };

  const removeRow = (index) => {
    if (currentData.length === 1) return;
    setCurrentData(currentData.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...currentData];
    updated[index][field] = value;
    setCurrentData(updated);
  };

  // Submit New Entries
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validEntries = currentData.filter(item => item.company?.trim());
    if (validEntries.length === 0) return alert("Please fill at least one company name");

    setSubmitLoading(true);
    try {
      let formattedData = [];

      if (activeTab === "dividends") {
        formattedData = validEntries.map(item => ({
          action_type: "dividend", company: item.company.trim(), type: item.type,
          ratio_or_percentage: item.percentage ? parseFloat(item.percentage) : null,
          announcement: item.announcement || null, record: item.record || null,
          ex_date: item.ex_dividend || null, year: new Date().getFullYear().toString(),
        }));
      } else if (activeTab === "rights") {
        formattedData = validEntries.map(item => ({
          action_type: "rights", company: item.company.trim(), ratio_or_percentage: item.ratio,
          premium: item.premium ? parseFloat(item.premium) : null,
          announcement: item.announcement || null, record: item.record || null,
          ex_date: item.ex_rights || null,
        }));
      } else if (activeTab === "bonus") {
        formattedData = validEntries.map(item => ({
          action_type: "bonus", company: item.company.trim(), ratio_or_percentage: item.ratio,
          announcement: item.announcement || null, record: item.record || null,
          ex_date: item.ex_bonus || null,
        }));
      } else if (activeTab === "splits") {
        formattedData = validEntries.map(item => ({
          action_type: "split", company: item.company.trim(),
          old_fv: item.old_fv ? parseInt(item.old_fv) : null,
          new_fv: item.new_fv ? parseInt(item.new_fv) : null,
          announcement: item.announcement || null, record: item.record || null,
          ex_date: item.split_date || null,
        }));
      }

      const { error } = await supabase.from("corporate_actions").insert(formattedData);
      if (error) throw error;

      setSuccess(true);
      fetchRecords();

      const emptyRow = activeTab === "dividends" ? 
        { company: "", type: "Final", percentage: "", announcement: "", record: "", ex_dividend: "" } :
        activeTab === "rights" ? { company: "", ratio: "", premium: "", announcement: "", record: "", ex_rights: "" } :
        activeTab === "bonus" ? { company: "", ratio: "", announcement: "", record: "", ex_bonus: "" } :
        { company: "", old_fv: "", new_fv: "", announcement: "", record: "", split_date: "" };

      setData(prev => ({ ...prev, [activeTab]: [emptyRow] }));

      setTimeout(() => setSuccess(false), 2500);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this record?")) return;
    const { error } = await supabase.from("corporate_actions").delete().eq("id", id);
    if (error) alert(error.message);
    else fetchRecords();
  };

  const openEdit = (record) => setEditModal({ ...record });

  const handleUpdate = async () => {
    if (!editModal) return;

    const { error } = await supabase
      .from("corporate_actions")
      .update({
        company: editModal.company,
        type: editModal.type,
        ratio_or_percentage: editModal.ratio_or_percentage,
        premium: editModal.premium ? parseFloat(editModal.premium) : null,
        old_fv: editModal.old_fv ? parseInt(editModal.old_fv) : null,
        new_fv: editModal.new_fv ? parseInt(editModal.new_fv) : null,
        announcement: editModal.announcement || null,
        record: editModal.record || null,
        ex_date: editModal.ex_date || null,
      })
      .eq("id", editModal.id);

    if (error) alert(error.message);
    else {
      setEditModal(null);
      fetchRecords();
    }
  };

  const updateEditModal = (field, value) => {
    setEditModal(prev => ({ ...prev, [field]: value }));
  };

  // Filter records based on the current selected tab configuration
  const filteredRecords = existingRecords.filter(
    record => record.action_type === currentTabConfig?.dbType
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="md:ml-64">
        <header className="bg-white px-8 py-6 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Corporate Actions </h1>
              <p className="text-gray-500 text-sm mt-1">Manage Dividends, Rights, Bonus & Splits</p>
            </div>
            <UserProfileDropdown />
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">

          {success && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-2">
              <CheckCircle className="text-green-600" /> Saved successfully!
            </div>
          )}

          {/* Global Tabs Navigation shared across creation and viewing forms */}
          <div className="flex border-b">
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-medium text-sm transition-all ${
                  activeTab === tab.id ? "border-b-4 border-green-600 text-green-700" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ==================== ADD NEW SECTION ==================== */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Add New {currentTabConfig?.label}</h2>
            <form onSubmit={handleSubmit}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b text-sm text-gray-600">
                      <th className="px-4 py-3 text-left">Company</th>
                      {activeTab === "dividends" && <><th className="px-4 py-3 text-left">Type</th><th className="px-4 py-3 text-left">%</th></>}
                      {(activeTab === "rights" || activeTab === "bonus") && <th className="px-4 py-3 text-left">Ratio</th>}
                      {activeTab === "rights" && <th className="px-4 py-3 text-left">Premium</th>}
                      {activeTab === "splits" && <><th className="px-4 py-3 text-left">Old FV</th><th className="px-4 py-3 text-left">New FV</th></>}
                      <th className="px-4 py-3 text-left">Announcement</th>
                      <th className="px-4 py-3 text-left">Record</th>
                      <th className="px-4 py-3 text-left">Ex Date</th>
                      <th className="w-12"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((row, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <input type="text" value={row.company} onChange={(e) => handleInputChange(index, "company", e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Company Name" required={index === 0} />
                        </td>

                        {activeTab === "dividends" && (
                          <>
                            <td className="px-4 py-3">
                              <select value={row.type} onChange={(e) => handleInputChange(index, "type", e.target.value)} className="w-full px-3 py-2 border rounded-lg">
                                <option value="Final">Final</option>
                                <option value="Special">Special</option>
                                <option value="Interim">Interim</option>
                              </select>
                            </td>
                            <td className="px-4 py-3">
                              <input type="number" step="0.01" value={row.percentage} onChange={(e) => handleInputChange(index, "percentage", e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="10" />
                            </td>
                          </>
                        )}

                        {(activeTab === "rights" || activeTab === "bonus") && (
                          <td className="px-4 py-3">
                            <input type="text" value={row.ratio} onChange={(e) => handleInputChange(index, "ratio", e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="2:1" />
                          </td>
                        )}

                        {activeTab === "rights" && (
                          <td className="px-4 py-3">
                            <input type="number" value={row.premium} onChange={(e) => handleInputChange(index, "premium", e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="0" />
                          </td>
                        )}

                        {activeTab === "splits" && (
                          <>
                            <td className="px-4 py-3"><input type="number" value={row.old_fv} onChange={(e) => handleInputChange(index, "old_fv", e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="10" /></td>
                            <td className="px-4 py-3"><input type="number" value={row.new_fv} onChange={(e) => handleInputChange(index, "new_fv", e.target.value)} className="w-full px-3 py-2 border rounded-lg" placeholder="2" /></td>
                          </>
                        )}

                        <td className="px-4 py-3"><input type="date" value={row.announcement} onChange={(e) => handleInputChange(index, "announcement", e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></td>
                        <td className="px-4 py-3"><input type="date" value={row.record} onChange={(e) => handleInputChange(index, "record", e.target.value)} className="w-full px-3 py-2 border rounded-lg" /></td>
                        <td className="px-4 py-3">
                          <input type="date"
                            value={activeTab === "dividends" ? row.ex_dividend : activeTab === "rights" ? row.ex_rights : activeTab === "bonus" ? row.ex_bonus : row.split_date}
                            onChange={(e) => {
                              const field = activeTab === "dividends" ? "ex_dividend" : activeTab === "rights" ? "ex_rights" : activeTab === "bonus" ? "ex_bonus" : "split_date";
                              handleInputChange(index, field, e.target.value);
                            }}
                            className="w-full px-3 py-2 border rounded-lg"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <button type="button" onClick={() => removeRow(index)} className="text-red-500 hover:text-red-700" disabled={currentData.length === 1}>
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mt-6">
                <button type="button" onClick={addNewRow} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-xl text-sm font-medium">
                  <Plus size={18} /> Add Row
                </button>
                <button type="submit" disabled={submitLoading} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2">
                  {submitLoading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                  Save {currentTabConfig?.label}
                </button>
              </div>
            </form>
          </div>

          {/* ==================== EXISTING RECORDS SECTION ==================== */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Existing {currentTabConfig?.label}</h2>
              <button onClick={fetchRecords} className="text-green-600 hover:underline font-medium">Refresh</button>
            </div>

            {fetchLoading ? (
              <p className="text-center py-8 text-gray-500">Loading records...</p>
            ) : filteredRecords.length === 0 ? (
              <p className="text-center py-8 text-gray-400">No data found for {currentTabConfig?.label}.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-600 font-medium">
                      <th className="px-4 py-3 text-left">Company</th>
                      {activeTab === "dividends" && <th className="px-4 py-3 text-left">Type</th>}
                      {activeTab === "dividends" && <th className="px-4 py-3 text-left">Percentage</th>}
                      {(activeTab === "rights" || activeTab === "bonus") && <th className="px-4 py-3 text-left">Ratio</th>}
                      {activeTab === "rights" && <th className="px-4 py-3 text-left">Premium</th>}
                      {activeTab === "splits" && <th className="px-4 py-3 text-left">Old Face Value</th>}
                      {activeTab === "splits" && <th className="px-4 py-3 text-left">New Face Value</th>}
                      <th className="px-4 py-3 text-left">Announcement</th>
                      <th className="px-4 py-3 text-left">Record</th>
                      <th className="px-4 py-3 text-left">Ex Date</th>
                      <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.map(record => (
                      <tr key={record.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium text-gray-900">{record.company}</td>
                        
                        {activeTab === "dividends" && <td className="px-4 py-3">{record.type || "-"}</td>}
                        {activeTab === "dividends" && <td className="px-4 py-3">{record.ratio_or_percentage ? `${record.ratio_or_percentage}%` : "-"}</td>}
                        
                        {(activeTab === "rights" || activeTab === "bonus") && <td className="px-4 py-3">{record.ratio_or_percentage || "-"}</td>}
                        {activeTab === "rights" && <td className="px-4 py-3">{record.premium !== null ? record.premium : "-"}</td>}
                        
                        {activeTab === "splits" && <td className="px-4 py-3">{record.old_fv || "-"}</td>}
                        {activeTab === "splits" && <td className="px-4 py-3">{record.new_fv || "-"}</td>}

                        <td className="px-4 py-3">{record.announcement?.split("T")[0] || "-"}</td>
                        <td className="px-4 py-3">{record.record?.split("T")[0] || "-"}</td>
                        <td className="px-4 py-3">{record.ex_date?.split("T")[0] || "-"}</td>
                        <td className="px-4 py-3 text-center space-x-4">
                          <button onClick={() => openEdit(record)} className="text-blue-600 hover:text-blue-800">
                            <Edit2 size={18} />
                          </button>
                          <button onClick={() => handleDelete(record.id)} className="text-red-600 hover:text-red-800">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-auto">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Edit Corporate Action</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <input type="text" value={editModal.company || ""} onChange={(e) => updateEditModal("company", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                </div>

                {editModal.action_type === "dividend" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Type</label>
                      <select value={editModal.type || ""} onChange={(e) => updateEditModal("type", e.target.value)} className="w-full px-4 py-3 border rounded-xl">
                        <option value="Final">Final</option>
                        <option value="Special">Special</option>
                        <option value="Interim">Interim</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Percentage</label>
                      <input type="number" step="0.01" value={editModal.ratio_or_percentage || ""} onChange={(e) => updateEditModal("ratio_or_percentage", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                    </div>
                  </>
                )}

                {(editModal.action_type === "rights" || editModal.action_type === "bonus") && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Ratio</label>
                    <input type="text" value={editModal.ratio_or_percentage || ""} onChange={(e) => updateEditModal("ratio_or_percentage", e.target.value)} className="w-full px-4 py-3 border rounded-xl" placeholder="2:1" />
                  </div>
                )}

                {editModal.action_type === "rights" && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Premium</label>
                    <input type="number" value={editModal.premium || ""} onChange={(e) => updateEditModal("premium", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                  </div>
                )}

                {editModal.action_type === "split" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Old Face Value</label>
                      <input type="number" value={editModal.old_fv || ""} onChange={(e) => updateEditModal("old_fv", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">New Face Value</label>
                      <input type="number" value={editModal.new_fv || ""} onChange={(e) => updateEditModal("new_fv", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Announcement</label>
                    <input type="date" value={editModal.announcement?.split("T")[0] || ""} onChange={(e) => updateEditModal("announcement", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Record Date</label>
                    <input type="date" value={editModal.record?.split("T")[0] || ""} onChange={(e) => updateEditModal("record", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Ex Date</label>
                    <input type="date" value={editModal.ex_date?.split("T")[0] || ""} onChange={(e) => updateEditModal("ex_date", e.target.value)} className="w-full px-4 py-3 border rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
                <button onClick={() => setEditModal(null)} className="px-8 py-3 border rounded-xl font-medium">Cancel</button>
                <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium">Update Record</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCorporateActions;