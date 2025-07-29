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

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ahmed Hassan",
      email: "ahmed@example.com",
      status: "pending",
      joinDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Fatima Ali",
      email: "fatima@example.com",
      status: "registered",
      joinDate: "2024-01-10",
    },
    {
      id: 3,
      name: "Omar Khan",
      email: "omar@example.com",
      status: "pending",
      joinDate: "2024-01-20",
    },
    {
      id: 4,
      name: "Aisha Rahman",
      email: "aisha@example.com",
      status: "registered",
      joinDate: "2024-01-05",
    },
    {
      id: 5,
      name: "Ibrahim Malik",
      email: "ibrahim@example.com",
      status: "pending",
      joinDate: "2024-01-18",
    },
  ]);

  const updateStudentStatus = (studentId, newStatus) => {
    setStudents(
      students.map((student) =>
        student.id === studentId ? { ...student, status: newStatus } : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col mb-6 space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <div>
          <h2 className="mb-2 text-xl font-bold md:text-2xl text-emerald-800">
            Student Management
          </h2>
          <p className="text-sm text-emerald-600">
            Manage student registrations and approvals
          </p>
        </div>
        <div className="relative">
          <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-emerald-500" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 md:w-auto"
          />
        </div>
      </div>

      <div className="overflow-hidden border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl border-emerald-200/20">
        <div className="overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-emerald-100/50">
              <tr>
                <th className="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800">
                  Student
                </th>
                <th className="hidden px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800 sm:table-cell">
                  Email
                </th>
                <th className="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800">
                  Status
                </th>
                <th className="hidden px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800 md:table-cell">
                  Join Date
                </th>
                <th className="px-3 py-3 text-xs font-medium tracking-wider text-left uppercase md:px-6 text-emerald-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="transition-colors hover:bg-emerald-50/30"
                >
                  <td className="px-3 py-4 md:px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-xs font-semibold text-white rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600">
                        {student.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium truncate text-emerald-800">
                          {student.name}
                        </div>
                        <div className="text-xs truncate text-emerald-600 sm:hidden">
                          {student.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:px-6 whitespace-nowrap text-emerald-600 sm:table-cell">
                    {student.email}
                  </td>
                  <td className="px-3 py-4 md:px-6 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        student.status === "registered"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="hidden px-3 py-4 text-sm md:px-6 whitespace-nowrap text-emerald-600 md:table-cell">
                    {student.joinDate}
                  </td>
                  <td className="px-3 py-4 text-sm font-medium md:px-6 whitespace-nowrap">
                    {student.status === "pending" && (
                      <button
                        onClick={() =>
                          updateStudentStatus(student.id, "registered")
                        }
                        className="flex items-center px-2 py-1 space-x-1 text-xs text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700 md:px-3"
                      >
                        <Check className="w-3 h-3" />
                        <span className="hidden sm:inline">Approve</span>
                      </button>
                    )}
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

export default StudentManagement;
