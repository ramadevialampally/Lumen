// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Edit, Plus, Search, Trash2 } from "lucide-react";
// import axios from "../../lib/axios.js";


// const VendorsTable = ({ vendorData }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredVendors, setFilteredVendors] = useState(vendorData);
//   const [showFormModal, setShowFormModal] = useState(false); // Add modal visibility for adding products
//   const [SelectedVendor, setSelectedVendor] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     setFilteredVendors(vendorData);
//   }, [vendorData]);

//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     const filtered = vendorData.filter(
//       (user) =>
//         user.name.toLowerCase().includes(term) ||
//         user.email.toLowerCase().includes(term)
//     );
//     setFilteredVendors(filtered);
//   };

//   const handleEdit = (vendor) => {
//     setSelectedVendor(vendor); // change to vendor
//     setShowEditModal(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/vendors/${id}`);
//       setFilteredVendors((prev) => prev.filter((v) => v._id !== id)); // 'v' for vendor 😘
//     } catch (err) {
//       console.error("Delete failed, darling 💔", err);
//     }
//   };

//   const handleUpdate = async (updatedVendor) => {
//     try {
//       const { data } = await axios.put(
//         `/vendors/${updatedVendor._id}`,
//         updatedVendor
//       );
//       const updatedList = filteredVendors.map((v) =>
//         v._id === data._id ? data : v
//       );
//       setFilteredVendors(updatedList);
//       setShowEditModal(false);
//       setSelectedVendor(null);
//     } catch (err) {
//       console.error("Update failed, sweetheart 💥", err);
//     }
//   };

//   const handleSaveNewVendor = async (newVendor) => {
//     try {
//       const { data } = await axios.post(`/vendors/`, newVendor);
//       setFilteredVendors((prev) => [...prev, data]);
//       setShowFormModal(false);
//     } catch (err) {
//       console.error("Adding vendor failed, honey 🍯", err);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.2 }}>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-100">Vendors</h2>
//         <div className="flex items-center">
//           <div className="relative mr-4">
//             <input
//               type="text"
//               placeholder="Search Vendors..."
//               className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleSearch}
//               value={searchTerm}
//             />
//             <Search
//               className="absolute left-3 top-2.5 text-gray-400"
//               size={18}
//             />
//           </div>
//           <button
//             className="bg-green-500 text-white rounded-full p-2 hover:bg-green-400 focus:outline-none"
//             onClick={handleSaveNewVendor}>
//             <Plus size={20} />
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-700">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Shop Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Owner Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-700">
//             {filteredVendors.map((user) => (
//               <motion.tr
//                 key={user.id}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-10 w-10">
//                       <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
//                         {user.shopName.charAt(0)}
//                       </div>
//                     </div>
//                     <div className="ml-4">
//                       <div className="text-sm font-medium text-gray-100">
//                         {user.shopName}
//                       </div>
//                     </div>
//                   </div>
//                 </td>

//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-300">{user.email}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">
//                     {user.ownerName}
//                   </span>
//                 </td>

//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       // check if user.approved is true or false
//                       user.approved === true
//                         ? "bg-green-800 text-green-100"
//                         : "bg-red-800 text-red-100"
//                     }`}>
//                     {user.approved === true ? "Approved" : "Pending"}
//                   </span>
//                 </td>

//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
//                   <button
//                     className="text-indigo-400 hover:text-indigo-300 mr-2"
//                     onClick={() => handleEdit(user)}>
//                     <Edit size={18} />
//                   </button>
//                   <button
//                     className="text-red-400 hover:text-red-300"
//                     onClick={() => handleDelete(user._id)}>
//                     <Trash2 size={18} />
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </motion.div>
//   );
// };
// export default VendorsTable;


// src/components/vendors/VendorsTable.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Edit, Plus, Search, Trash2 } from "lucide-react";
import axios from "../../lib/axios.js";
import { toast } from "react-hot-toast";

const emptyForm = {
  shopName: "",
  ownerName: "",
  email: "",
  password: "",
  approved: false,
  name: "",
};

const VendorsTable = ({ vendorData = [] }) => {
  const [vendors, setVendors] = useState(vendorData || []);
  const [filteredVendors, setFilteredVendors] = useState(vendorData || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  // modal states
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingVendor, setEditingVendor] = useState(null);
  const [form, setForm] = useState(emptyForm);

  // sync prop updates
  useEffect(() => {
    setVendors(vendorData || []);
  }, [vendorData]);

  // update filtered list whenever vendors or search changes
  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) {
      setFilteredVendors(vendors);
      return;
    }
    const filtered = vendors.filter((v) => {
      const shop = String(v.shopName || v.name || "").toLowerCase();
      const owner = String(v.ownerName || v.name || "").toLowerCase();
      const email = String(v.email || "").toLowerCase();
      return shop.includes(term) || owner.includes(term) || email.includes(term);
    });
    setFilteredVendors(filtered);
  }, [vendors, searchTerm]);

  // fetch vendors from backend
  const fetchVendors = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/admin/vendors"); // ← correct admin endpoint
      setVendors(res.data || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error("Failed to fetch vendors", err);
      toast.error(err?.response?.data?.message || "Failed to load vendors");
    }
  };

  useEffect(() => {
    // If initial vendorData is empty, fetch fresh list.
    if (!vendorData || vendorData.length === 0) {
      fetchVendors();
    }
  }, []); // run once on mount

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const openCreateModal = () => {
    setEditingVendor(null);
    setForm(emptyForm);
    setShowFormModal(true);
  };

  const openEditModal = (vendor) => {
    setEditingVendor(vendor);
    setForm({
      shopName: vendor.shopName || "",
      ownerName: vendor.ownerName || vendor.name || "",
      email: vendor.email || "",
      password: "",
      approved: !!vendor.approved,
      name: vendor.name || "",
    });
    setShowFormModal(true);
  };

  const closeModal = () => {
    setShowFormModal(false);
    setEditingVendor(null);
    setForm(emptyForm);
  };

  // DELETE vendor
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this vendor?")) return;
    try {
      await axios.delete(`/admin/vendors/${id}`); // ← correct admin endpoint
      setVendors((prev) => prev.filter((v) => v._id !== id));
      toast.success("Vendor deleted");
    } catch (err) {
      console.error("Delete failed", err);
      toast.error(err?.response?.data?.message || "Delete failed");
    }
  };

  // CREATE / UPDATE vendor
  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic validation
    if (!form.email || (!editingVendor && !form.password)) {
      return toast.error("Please fill required fields (email and password for new vendor)");
    }

    try {
      if (editingVendor) {
        const payload = {
          shopName: form.shopName,
          ownerName: form.ownerName,
          email: form.email,
          approved: !!form.approved,
          name: form.name || form.ownerName || form.shopName,
        };
        if (form.password) payload.password = form.password; // only update if provided

        const { data } = await axios.put(`/admin/vendors/${editingVendor._id}`, payload); // ← admin endpoint
        setVendors((prev) => prev.map((v) => (v._id === data._id ? data : v)));
        toast.success("Vendor updated");
      } else {
        const payload = {
          shopName: form.shopName,
          ownerName: form.ownerName,
          email: form.email,
          password: form.password,
          approved: !!form.approved,
          name: form.name || form.ownerName || form.shopName,
        };
        const { data } = await axios.post(`/admin/vendors`, payload); // ← admin endpoint
        setVendors((prev) => [data, ...prev]);
        toast.success("Vendor created");
      }
      closeModal();
    } catch (err) {
      console.error("Save failed", err);
      toast.error(err?.response?.data?.message || "Save failed");
    }
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Vendors</h2>
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search Vendors..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
              value={searchTerm}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchVendors}
              className="px-3 py-1 rounded bg-slate-600 text-sm hover:bg-slate-500"
              disabled={loading}
            >
              {loading ? "Loading..." : "Refresh"}
            </button>

            <button
              onClick={openCreateModal}
              className="bg-green-500 text-white rounded-full p-2 hover:bg-green-400 focus:outline-none"
              title="Add vendor"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Shop Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Owner Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredVendors && filteredVendors.length > 0 ? (
              filteredVendors.map((user) => (
                <motion.tr key={user._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                          {(user.shopName || user.ownerName || user.name || "V").charAt(0).toUpperCase()}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-100">{user.shopName || user.name || "—"}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-300">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100">{user.ownerName || user.name || "—"}</span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.approved === true ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"}`}>{user.approved === true ? "Approved" : "Pending"}</span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <div className="flex gap-2">
                      <button className="text-indigo-400 hover:text-indigo-300 mr-2 flex items-center gap-2 px-2 py-1 rounded bg-slate-700" onClick={() => openEditModal(user)}>
                        <Edit size={16} /> Edit
                      </button>
                      <button className="text-red-400 hover:text-red-300 px-2 py-1 rounded bg-slate-700 flex items-center gap-2" onClick={() => handleDelete(user._id)}>
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-400">No vendors found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 rounded shadow-lg p-6">
            <h3 className="text-lg font-medium mb-4 text-gray-100">{editingVendor ? "Edit Vendor" : "Create Vendor"}</h3>

            <label className="text-sm text-gray-300">Shop Name</label>
            <input value={form.shopName} onChange={(e) => setForm((f) => ({ ...f, shopName: e.target.value }))} className="w-full p-2 mb-3 bg-slate-800 text-white rounded" />

            <label className="text-sm text-gray-300">Owner Name</label>
            <input value={form.ownerName} onChange={(e) => setForm((f) => ({ ...f, ownerName: e.target.value }))} className="w-full p-2 mb-3 bg-slate-800 text-white rounded" />

            <label className="text-sm text-gray-300">Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="w-full p-2 mb-3 bg-slate-800 text-white rounded" />

            <label className="text-sm text-gray-300">{editingVendor ? "Password (only fill to change)" : "Password"}</label>
            <input type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} className="w-full p-2 mb-3 bg-slate-800 text-white rounded" />

            <label className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <input type="checkbox" checked={!!form.approved} onChange={(e) => setForm((f) => ({ ...f, approved: e.target.checked }))} className="rounded" />
              Approved
            </label>

            <div className="flex justify-end gap-2">
              <button type="button" onClick={closeModal} className="px-3 py-1 rounded bg-slate-600">Cancel</button>
              <button type="submit" className="px-3 py-1 rounded bg-emerald-600 text-white">{editingVendor ? "Save" : "Create"}</button>
            </div>
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default VendorsTable;

