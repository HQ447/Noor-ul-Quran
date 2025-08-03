import React, { useEffect, useState } from "react";
import {
  Users,
  BookOpen,
  UserCheck,
  Settings,
  BarChart3,
  Search,
  Sparkles,
  Plus,
  Trash2,
  Check,
  X,
  Upload,
  Edit,
  Moon,
  Star,
  Grid,
  Table,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

import { IoTrashBinSharp } from "react-icons/io5";

const BASE_URL = "http://localhost:8000";

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

const AllStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // table or grid
  const [statusFilter, setStatusFilter] = useState("all"); // all, registered, pending

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${BASE_URL}/super/getAllStudents`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const result = await response.json();
      const studentList = Array.isArray(result)
        ? result
        : result.students || [];
      setStudents(studentList);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleApprove = async (studentId) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/updateStatus/${studentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status: "registered" }),
      });

      if (res.ok) {
        setStudents((prev) =>
          prev.map((student) =>
            student._id === studentId || student.id === studentId
              ? { ...student, status: "registered" }
              : student
          )
        );
      } else {
        console.error("Failed to update student status");
      }
    } catch (error) {
      console.error("Error updating student status:", error);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/deleteStudent/${studentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        fetchStudents();
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const handleFilterChange = (filter) => {
    setStatusFilter(filter);
  };

  const handleViewToggle = () => {
    setViewMode((prev) => (prev === "table" ? "grid" : "table"));
  };

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (student.status &&
        student.status.toLowerCase() === statusFilter.toLowerCase());

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <IslamicPattern />
      <div className="flex flex-col mb-6 space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div>
              <h2 className="text-xl font-bold text-transparent md:text-2xl bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text">
                All Students
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <Sparkles className="w-4 h-4 text-green-500" />
                <p className="text-xs font-medium text-green-600 md:text-sm">
                  Manage all Students Registration and Approval
                </p>
              </div>
            </div>
          </div>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"></div>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          <div className="flex space-x-2">
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                statusFilter === "all"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleFilterChange("registered")}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                statusFilter === "registered"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-200"
              }`}
            >
              Registered
            </button>
            <button
              onClick={() => {
                console.log("click");
                handleFilterChange("pending");
              }}
              className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                statusFilter === "pending"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-200"
              }`}
            >
              Pending
            </button>
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
          <button
            onClick={handleViewToggle}
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
      </div>

      {viewMode === "table" ? (
        <div className="overflow-hidden border shadow-lg bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 backdrop-blur-sm rounded-xl border-emerald-200/20">
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
                    key={student._id || student.id}
                    className="transition-colors hover:bg-emerald-50/30"
                  >
                    <td className="px-3 py-4 md:px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-3 text-xs font-semibold text-white rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600">
                          {student.name?.charAt(0)}
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
                        className={`inline-flex capitalize px-2 py-1 text-xs font-semibold rounded-full ${
                          student.status?.toLowerCase() === "registered"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="hidden px-3 py-4 text-sm md:px-6 whitespace-nowrap text-emerald-600 md:table-cell">
                      {student.joinDate
                        ? new Date(student.joinDate).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })
                        : "N/A"}
                    </td>
                    <td className="flex gap-2 px-3 py-4 text-sm font-medium md:px-6 whitespace-nowrap">
                      {student.status?.toLowerCase() === "pending" && (
                        <button
                          onClick={() =>
                            handleApprove(student._id || student.id)
                          }
                          className="flex items-center px-2 py-1 space-x-1 text-xs text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700 md:px-3"
                        >
                          <FaUserCheck className="w-3 h-3" />
                          <span className="hidden sm:inline">Approve</span>
                        </button>
                      )}
                      <IoTrashBinSharp
                        className="text-2xl text-red-600 transition-all cursor-pointer hover:scale-95"
                        onClick={() => handleDeleteStudent(student._id)}
                      />
                      <a
                        href={`https://wa.me/${student.whatsapp}?text=Assalam O Alikum ! Welcome to Noor ul Quran , How can we Help you?`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="text-2xl font-bold text-green-600 transition-all cursor-pointer hover:scale-95" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <div
              key={student._id || student.id}
              className="relative overflow-hidden transition-all duration-300 transform border border-emerald-200/30 shadow-lg bg-gradient-to-br from-emerald-50/90 via-white/95 to-teal-50/90 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:scale-[1.02] hover:border-emerald-300/50 group"
            >
              {/* Decorative Islamic Pattern Overlay */}
              <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 opacity-5 group-hover:opacity-10">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-emerald-600"
                >
                  <circle cx="50" cy="20" r="8" fill="currentColor" />
                  <circle cx="50" cy="50" r="12" fill="currentColor" />
                  <circle cx="50" cy="80" r="8" fill="currentColor" />
                  <circle cx="20" cy="35" r="6" fill="currentColor" />
                  <circle cx="80" cy="35" r="6" fill="currentColor" />
                  <circle cx="20" cy="65" r="6" fill="currentColor" />
                  <circle cx="80" cy="65" r="6" fill="currentColor" />
                </svg>
              </div>

              <div className="relative p-5">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-4">
                  <div className="relative mb-3">
                    <div className="flex items-center justify-center w-16 h-16 text-lg font-bold text-white rounded-full shadow-lg bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 ring-4 ring-emerald-100">
                      {student.name?.charAt(0)}
                    </div>
                    {/* Status indicator dot */}
                    <div
                      className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white shadow-sm ${
                        student.status === "registered"
                          ? "bg-green-500"
                          : "bg-amber-500"
                      }`}
                    >
                      <div
                        className={`w-full h-full rounded-full animate-pulse ${
                          student.status === "registered"
                            ? "bg-green-400"
                            : "bg-amber-400"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="mb-1 text-base font-semibold leading-tight text-emerald-900">
                      {student.name}
                    </h3>
                    <p className="mb-2 text-sm text-emerald-700/80">
                      {student.email}
                    </p>
                    <span
                      className={`inline-flex items-center px-3 py-1.5 text-[9px] md:text-[10px] font-semibold rounded-full shadow-sm ${
                        student.status === "registered"
                          ? "text-emerald-800 bg-emerald-100 border border-emerald-200"
                          : "text-amber-800 bg-amber-100 border border-amber-200"
                      }`}
                    >
                      {student.status === "registered"
                        ? "✔️ Registered"
                        : "⏱ Pending"}
                    </span>
                  </div>
                </div>

                {/* Information Section */}
                <div className="mb-5 space-y-3">
                  <div className="p-3 border rounded-xl bg-gradient-to-r from-emerald-50/50 to-teal-50/50 border-emerald-100/50">
                    <div className="grid grid-cols-1 gap-2.5 text-xs md:text-sm">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <span className="text-emerald-600">🌎</span>
                          Country
                        </span>
                        <span className="font-medium text-right text-emerald-900">
                          {student.country}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <span className="text-emerald-600">📚</span>
                          Course
                        </span>
                        <span
                          className="font-medium text-right text-emerald-900 line-clamp-1"
                          title={student.course}
                        >
                          {student.course}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <span className="text-emerald-600">👨‍🏫</span>
                          Teacher
                        </span>
                        <span className="font-medium text-right text-emerald-900">
                          {student.teacherName}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <span className="text-emerald-600">📞</span>
                          Contact
                        </span>
                        <span className="font-medium text-right text-emerald-900">
                          {student.whatsapp}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <span className="text-emerald-600">📅</span>
                          Joined
                        </span>
                        <span className="font-medium text-right text-emerald-900">
                          {student.joinDate
                            ? new Date(student.joinDate).toLocaleString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                }
                              )
                            : "N/A"}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <span className="text-emerald-600">💲</span>
                          Fee Status
                        </span>
                        <span
                          className={`text-right font-semibold capitalize px-2 py-0.5 rounded-md text-xs ${
                            student.feeStatus?.toLowerCase() === "paid"
                              ? "text-emerald-800 bg-emerald-100"
                              : student.feeStatus?.toLowerCase() === "pending"
                              ? "text-amber-800 bg-amber-100"
                              : "text-slate-800 bg-slate-100"
                          }`}
                        >
                          {student.feeStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {student.status?.toLowerCase() === "pending" && (
                    <button
                      onClick={() => handleApprove(student._id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl shadow-md hover:from-emerald-700 hover:to-emerald-800 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Approve Student</span>
                    </button>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`https://wa.me/${student.whatsapp}?text=Assalam O Alikum ! Welcome to Noor ul Quran , How can we Help you?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white transition-all duration-200 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      onClick={() =>
                        handleDeleteStudent(student._id || student.id)
                      }
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-white transition-all duration-200 bg-gradient-to-r from-red-500 to-red-600 rounded-xl shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <IoTrashBinSharp className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none rounded-2xl bg-gradient-to-br from-emerald-200/20 via-transparent to-teal-200/20 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllStudents;
