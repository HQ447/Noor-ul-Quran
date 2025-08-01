import React, { useEffect, useState } from "react";
import { Star, Grid, Table } from "lucide-react";
import { IoTrashBinSharp } from "react-icons/io5";

// Islamic Pattern Component
const IslamicPattern = () => (
  <div className="absolute inset-0 pointer-events-none opacity-5">
    <div className="grid h-full grid-cols-8 gap-4">
      {[...Array(64)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center text-emerald-600"
        >
          <Star className="w-4 h-4" />
        </div>
      ))}
    </div>
  </div>
);

export const AdminsManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid"); // <-- NEW
  const BASE_URL = "http://localhost:8000";

  const fetchAdmins = async () => {
    try {
      const response = await fetch(`${BASE_URL}/admin/getAdmins`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setAdmins(data.admins || []);
    } catch (error) {
      console.error("Failed to fetch admins:", error);
      setAdmins([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAdmin = async (adminId) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/deleteAdmin/${adminId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        fetchAdmins();
      } else {
        console.error("Failed to delete admin");
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="relative p-4 md:p-6">
      <IslamicPattern />
      <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row md:items-center">
        <div>
          <h2 className="mb-2 text-xl font-bold md:text-2xl text-emerald-800">
            Admin Management
          </h2>
          <p className="text-sm text-emerald-600">
            Manage platform administrators
          </p>
        </div>
        <button
          onClick={() => setViewMode(viewMode === "table" ? "grid" : "table")}
          className="flex items-center px-3 py-2 text-sm transition-colors rounded-lg text-emerald-800 bg-emerald-100 hover:bg-emerald-200"
        >
          {viewMode === "table" ? (
            <>
              <Grid className="w-4 h-4 mr-2" />
              Grid View
            </>
          ) : (
            <>
              <Table className="w-4 h-4 mr-2" />
              Table View
            </>
          )}
        </button>
      </div>

      {viewMode === "table" ? (
        <div className="overflow-hidden border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-emerald-200/20">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead className="bg-emerald-100/50">
                <tr>
                  <th className="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800">
                    Admin
                  </th>
                  <th className="hidden px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800 sm:table-cell">
                    Email
                  </th>
                  <th className="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800">
                    Role
                  </th>
                  <th className="hidden px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800 md:table-cell">
                    Join Date
                  </th>
                  <th className="hidden px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800 md:table-cell">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100">
                {loading ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-center text-emerald-600"
                    >
                      Loading admins...
                    </td>
                  </tr>
                ) : admins.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-center text-red-600"
                    >
                      No admins found.
                    </td>
                  </tr>
                ) : (
                  admins.map((admin) => (
                    <tr
                      key={admin._id}
                      className="transition-colors hover:bg-emerald-50/30"
                    >
                      <td className="px-3 py-4 md:px-6 whitespace-nowrap">
                        <div className="flex items-center">
                          {admin.img ? (
                            <img
                              src={admin.img}
                              alt={admin.name}
                              className="object-cover w-8 h-8 mr-2 rounded-full md:w-8 md:8"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-8 h-8 mr-2 overflow-hidden text-xs font-bold text-white rounded-full md:w-8 md:h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 md:text-sm">
                              {admin?.name?.charAt(0).toUpperCase() || "A"}
                            </div>
                          )}
                          <div className="min-w-0">
                            <div className="text-sm font-medium truncate text-emerald-800">
                              {admin.name}
                            </div>
                            <div className="text-xs truncate text-emerald-600 sm:hidden">
                              {admin.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden px-3 py-4 text-sm md:px-6 whitespace-nowrap text-emerald-600 sm:table-cell">
                        {admin.email}
                      </td>
                      <td className="px-3 py-4 md:px-6 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold text-purple-800 capitalize bg-purple-100 rounded-full">
                          {admin.role}
                        </span>
                      </td>
                      <td className="hidden px-3 py-4 text-sm md:px-6 whitespace-nowrap text-emerald-600 md:table-cell">
                        {admin.createdAt?.substring(0, 10) || "N/A"}
                      </td>
                      <td className="hidden px-3 py-4 text-sm md:px-6 whitespace-nowrap text-emerald-600 md:table-cell">
                        <IoTrashBinSharp
                          className="text-2xl text-red-600 transition-all cursor-pointer hover:scale-95"
                          onClick={() => handleDeleteAdmin(admin._id)}
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {admins.map((admin) => (
            <div
              key={admin._id}
              className="relative p-4 transition-shadow border shadow-md bg-white/80 backdrop-blur-sm rounded-xl border-emerald-200/20 hover:shadow-lg"
            >
              <div className="absolute px-2 py-1 my-2 text-xs font-bold text-yellow-900 capitalize bg-yellow-400 rounded-full top-2 left-3">
                🔰 {admin.role}
              </div>
              <div className="flex flex-col mb-3">
                <div className="flex justify-center mb-1 text-6xl">
                  {admin.img ? (
                    <img
                      src={admin.img}
                      alt={admin.name}
                      className="object-cover mx-auto rounded-full w-14 h-14 md:w-18 md:h-18"
                    />
                  ) : (
                    <div className="flex items-center justify-center overflow-hidden text-xl font-bold text-white rounded-full w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br from-emerald-400 to-emerald-600 md:text-2xl">
                      {admin?.name?.charAt(0).toUpperCase() || "A"}
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-base font-medium text-emerald-800">
                    {admin.name}
                  </div>
                  <div className="text-xs md:text-sm text-emerald-600">
                    {admin.email}
                  </div>
                  <div className="px-2 py-1 my-2 text-xs text-white bg-indigo-400 rounded-sm">
                    🎖️ {admin.designation || "Teacher"}
                  </div>
                </div>

                <div className="px-1 pb-3 space-y-3">
                  <div className="space-y-2 text-xs text-gray-600 md:text-sm">
                    <p className="flex items-center gap-2">
                      <span className="text-blue-500">🎓</span>
                      <span>
                        {admin.qualification || "Expert in Quranic Education"}
                      </span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-500">💼</span>
                      <span>{admin.experience || "2"} years</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-500">📞</span>
                      <span>{admin.whatsapp || "99999999999"}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-500">📅</span>
                      <span>
                        {admin.createdAt
                          ? new Date(admin.createdAt).toLocaleString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "N/A"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleDeleteAdmin(admin._id)}
                  className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-white transition-colors duration-200 bg-red-600 rounded-lg shadow-sm hover:bg-red-700"
                >
                  <IoTrashBinSharp className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminsManagement;
