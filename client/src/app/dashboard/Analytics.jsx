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

const Analytics = () => {
  const analytics = {
    totalStudents: 25,
    pendingStudents: 8,
    registeredStudents: 17,
    totalCourses: 12,
    totalAdmins: 3,
  };

  const students = [
    { id: 1, name: "Ahmed Hassan", status: "pending", joinDate: "2024-01-15" },
    { id: 2, name: "Fatima Ali", status: "registered", joinDate: "2024-01-10" },
    { id: 3, name: "Omar Khan", status: "pending", joinDate: "2024-01-20" },
    {
      id: 4,
      name: "Aisha Rahman",
      status: "registered",
      joinDate: "2024-01-05",
    },
    { id: 5, name: "Ibrahim Malik", status: "pending", joinDate: "2024-01-18" },
  ];

  const courses = [
    {
      id: 1,
      title: "Quran Recitation",
      description: "Learn proper Tajweed and Quran recitation",
      image: "🕌",
    },
    {
      id: 2,
      title: "Islamic History",
      description: "Comprehensive Islamic history course",
      image: "📚",
    },
    {
      id: 3,
      title: "Arabic Language",
      description: "Classical Arabic language fundamentals",
      image: "📖",
    },
    {
      id: 4,
      title: "Hadith Studies",
      description: "Study of authentic Hadith collections",
      image: "📜",
    },
  ];

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div
      className={`relative bg-gradient-to-br ${color} p-4 rounded-xl shadow-lg border border-emerald-200/20 overflow-hidden`}
    >
      <IslamicPattern />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/90" />
          <span className="hidden text-xs text-white/70 font-arabic sm:block">
            بِسْمِ اللَّهِ
          </span>
        </div>
        <div className="mb-1 text-xl font-bold text-white md:text-2xl">
          {value}
        </div>
        <div className="text-xs text-white/80">{title}</div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6">
      <div className="mb-6">
        <h2 className="mb-2 text-xl font-bold md:text-2xl text-emerald-800">
          Analytics Dashboard
        </h2>
        <p className="text-sm text-emerald-600">
          Overview of your Islamic learning platform
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-3 lg:grid-cols-5 md:gap-4 md:mb-8">
        <StatCard
          title="Total Students"
          value={analytics.totalStudents}
          icon={Users}
          color="from-emerald-600 to-emerald-700"
        />
        <StatCard
          title="Pending Students"
          value={analytics.pendingStudents}
          icon={UserCheck}
          color="from-amber-500 to-amber-600"
        />
        <StatCard
          title="Registered Students"
          value={analytics.registeredStudents}
          icon={Check}
          color="from-green-500 to-green-600"
        />
        <StatCard
          title="Total Courses"
          value={analytics.totalCourses}
          icon={BookOpen}
          color="from-blue-500 to-blue-600"
        />
        <StatCard
          title="Total Admins"
          value={analytics.totalAdmins}
          icon={UserCheck}
          color="from-purple-500 to-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-6">
        <div className="p-4 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl md:p-6 border-emerald-200/20">
          <h3 className="mb-4 text-base font-semibold md:text-lg text-emerald-800">
            Recent Activity
          </h3>
          <div className="space-y-3">
            {students.slice(0, 5).map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-3 rounded-lg bg-emerald-50/50"
              >
                <div>
                  <p className="text-sm font-medium text-emerald-800">
                    {student.name}
                  </p>
                  <p className="text-xs text-emerald-600">
                    Joined: {student.joinDate}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    student.status === "registered"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl md:p-6 border-emerald-200/20">
          <h3 className="mb-4 text-base font-semibold md:text-lg text-emerald-800">
            Popular Courses
          </h3>
          <div className="space-y-3">
            {courses.slice(0, 4).map((course) => (
              <div
                key={course.id}
                className="flex items-center p-3 space-x-3 rounded-lg bg-emerald-50/50"
              >
                <div className="text-xl md:text-2xl">{course.image}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-emerald-800">
                    {course.title}
                  </p>
                  <p className="text-xs truncate text-emerald-600">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
