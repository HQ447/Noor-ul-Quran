import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { NavLink } from "react-router";

import { IoTrashBinSharp } from "react-icons/io5";
// Islamic Pattern Component
const IslamicPattern = () => (
  <div className="absolute inset-0 opacity-5">
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
  const BASE_URL = "http://localhost:8000";
  const fetchAdmins = async () => {
    try {
      const response = await fetch(`${BASE_URL}/admin/getAdmins`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setAdmins(data.admins || []); // assuming your API returns { admins: [...] }
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
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold md:text-2xl text-emerald-800">
          Admin Management
        </h2>
        <p className="text-sm text-emerald-600">
          Manage platform administrators
        </p>
      </div>

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
                    colSpan={4}
                    className="px-6 py-4 text-center text-emerald-600"
                  >
                    Loading admins...
                  </td>
                </tr>
              ) : admins.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
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
                        <img
                          src={admin.img ? admin.img : admin.name?.charAt(0)}
                          alt={admin.name?.charAt(0) || "A"}
                          className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-xs font-semibold text-white rounded-full bg-gradient-to-br from-purple-400 to-purple-600"
                        />

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
                      <span className="inline-flex capitalize px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">
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
    </div>
  );
};

export default AdminsManagement;
