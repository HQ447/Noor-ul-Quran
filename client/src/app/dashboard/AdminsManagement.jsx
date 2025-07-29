import React, { useState } from "react";
import {
  Users,
  BookOpen,
  UserCheck,
  Settings,
  BarChart3,
  Search,
  Plus,
  Trash2,
  Check,
  X,
  Upload,
  Edit,
  Moon,
  Star,
} from "lucide-react";
import { NavLink } from "react-router";

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
  const admins = [
    {
      id: 1,
      name: "Muhammad Abdullah",
      email: "admin1@example.com",
      role: "Super Admin",
      joinDate: "2023-01-01",
    },
    {
      id: 2,
      name: "Khadija Omar",
      email: "admin2@example.com",
      role: "Content Admin",
      joinDate: "2023-06-15",
    },
    {
      id: 3,
      name: "Ali Hassan",
      email: "admin3@example.com",
      role: "Student Admin",
      joinDate: "2023-08-20",
    },
  ];

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
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {admins.map((admin) => (
                <tr
                  key={admin.id}
                  className="transition-colors hover:bg-emerald-50/30"
                >
                  <td className="px-3 py-4 md:px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-xs font-semibold text-white rounded-full bg-gradient-to-br from-purple-400 to-purple-600">
                        {admin.name.charAt(0)}
                      </div>
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
                    <span className="inline-flex px-2 py-1 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">
                      {admin.role}
                    </span>
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:px-6 whitespace-nowrap text-emerald-600 md:table-cell">
                    {admin.joinDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminsManagement;
