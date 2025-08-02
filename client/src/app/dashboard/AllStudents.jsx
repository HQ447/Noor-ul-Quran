import React, { useEffect, useState } from "react";
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
    <div className="p-4 md:p-6">
      <IslamicPattern />
      <div className="flex flex-col mb-6 space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <div>
          <h2 className="mb-2 text-xl font-bold md:text-2xl text-emerald-800">
            All Students
          </h2>
          <p className="text-sm text-emerald-600">
            Manage all students registrations and approvals
          </p>
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <div
              key={student._id || student.id}
              className="p-4 transition-shadow border shadow-md bg-white/80 backdrop-blur-sm rounded-xl border-emerald-200/20 hover:shadow-lg"
            >
              <div className="relative flex flex-col items-center justify-center mb-3">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mb-2 text-sm font-semibold text-white rounded-full md:w-12 md:h-12 bg-gradient-to-br from-indigo-400 to-indigo-600">
                  {student.name?.charAt(0)}
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-base font-medium text-emerald-800">
                    {student.name}
                  </div>
                  <div className="text-sm text-emerald-600">
                    {student.email}
                  </div>
                </div>
                <div className="w-full mt-2 text-center">
                  <span
                    className={`px-3 py-1 text-[9px] md:text-[10px] font-medium ${
                      student.status == "registered"
                        ? "text-green-800 bg-green-300"
                        : "text-yellow-800 bg-yellow-300"
                    }   rounded-full`}
                  >
                    {student.status === "registered"
                      ? "Registered ✔️"
                      : "Pending ⏱"}
                  </span>
                </div>
              </div>

              <div className="px-1 pb-3 space-y-3">
                <div className="space-y-2 text-xs text-gray-600 md:text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-500">Country 🌎 :</span>
                    <span>{student.country}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-500 ">Course 📚 :</span>
                    <span className=" line-clamp-1">{student.course}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-500">Teacher 👨‍🏫 :</span>
                    <span>{student.teacherName}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-500">Contact 📞 :</span>
                    <span>{student.whatsapp}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-500">Join on 📅 :</span>
                    <span>
                      {student.joinDate
                        ? new Date(student.joinDate).toLocaleString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}
                    </span>
                  </p>

                  <p className="flex items-center gap-2 ">
                    <span className="text-blue-500">Fee Status 💲 :</span>
                    <span className="capitalize ">{student.feeStatus}</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                {student.status?.toLowerCase() === "pending" && (
                  <button
                    onClick={() => handleApprove(student._id)}
                    className="flex items-center px-3 py-1 space-x-1 text-xs text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                  >
                    <Check className="w-3 h-3" />
                    <span>Approve</span>
                  </button>
                )}
                <div className="flex justify-center w-full gap-2">
                  <a
                    href={`https://wa.me/${student.whatsapp}?text=Assalam O Alikum ! Welcome to Noor ul Quran , How can we Help you?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-1 px-3 py-2 text-xs font-medium text-white transition-colors duration-200 bg-green-600 rounded-lg shadow-sm hover:bg-green-700"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Whatsapp</span>
                  </a>
                  <button
                    onClick={() =>
                      handleDeleteStudent(student._id || student.id)
                    }
                    className="flex items-center justify-center w-full gap-1 px-3 py-2 text-xs font-medium text-white transition-colors duration-200 bg-red-600 rounded-lg shadow-sm hover:bg-red-700"
                  >
                    <IoTrashBinSharp className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllStudents;
