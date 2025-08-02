import React, { useEffect, useState } from "react";
import { User, Mail, Phone, Globe, BookOpen, Calendar } from "lucide-react";

const RegStudent = () => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    course: "",
    teacherId: "",
    joinDate: "",
  });

  const BASE_URL = `http://localhost:8000`;

  const fetchCourses = async () => {
    try {
      const res = await fetch(`${BASE_URL}/admin/courses`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses", err);
    }
  };
  const fetchTeachers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/super/getAllTeachers`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setTeachers(data.teachers);
    } catch (err) {
      console.error("Failed to fetch teachers", err);
    }
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Bangladesh",
    "Egypt",
    "Indonesia",
    "Iran",
    "Iraq",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Lebanon",
    "Libya",
    "Malaysia",
    "Morocco",
    "Nigeria",
    "Pakistan",
    "Palestine",
    "Qatar",
    "Saudi Arabia",
    "Somalia",
    "Sudan",
    "Syria",
    "Tunisia",
    "Turkey",
    "United Arab Emirates",
    "United States",
    "United Kingdom",
    "Other",
  ];

  // const courses = [
  //   "Quran Recitation (Tajweed)",
  //   "Quran Memorization (Hifz)",
  //   "Arabic Language",
  //   "Islamic Studies",
  //   "Hadith Studies",
  //   "Fiqh (Islamic Jurisprudence)",
  //   "Tafseer (Quran Interpretation)",
  //   "Islamic History",
  // ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.whatsapp ||
      !formData.country ||
      !formData.course ||
      !formData.teacherId ||
      !formData.joinDate
    ) {
      alert("Please fill in all required fields");
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/auth/register-student`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error("Failed to register student");
      }
      console.log("Registration Data:", formData);
      alert("Registration submitted successfully! جزاك الله خيراً");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
    fetchTeachers();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23065f46' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-md mx-auto">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full shadow-lg bg-gradient-to-r from-green-600 to-emerald-600">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-green-800">
            بسم الله الرحمن الرحيم
          </h1>
          <h2 className="mb-1 text-lg font-semibold text-green-700">
            Student Registration
          </h2>
          <p className="text-sm text-green-600">
            Join our Quranic Education Program
          </p>
        </div>

        {/* Registration Form */}
        <div className="p-6 border border-green-100 shadow-xl bg-white/80 backdrop-blur-sm rounded-2xl">
          <div className="space-y-4">
            {/* Student Name */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-green-700">
                Student Name *
              </label>
              <div className="relative">
                <User className="absolute w-4 h-4 text-green-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-green-700">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute w-4 h-4 text-green-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* WhatsApp Number */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-green-700">
                WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="absolute w-4 h-4 text-green-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                  placeholder="+1234567890"
                />
              </div>
            </div>

            {/* Country */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-green-700">
                Country *
              </label>
              <div className="relative">
                <Globe className="absolute w-4 h-4 text-green-500 transform -translate-y-1/2 left-3 top-1/2" />
                <select
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70 appearance-none cursor-pointer"
                >
                  <option value="">Select your country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="absolute transform -translate-y-1/2 pointer-events-none right-3 top-1/2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Course Selection */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-green-700">
                Select Course *
              </label>
              <div className="relative">
                <BookOpen className="absolute w-4 h-4 text-green-500 transform -translate-y-1/2 left-3 top-1/2" />
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70 appearance-none cursor-pointer"
                >
                  <option value="">Choose a course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
                <div className="absolute transform -translate-y-1/2 pointer-events-none right-3 top-1/2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Select Teacher  */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-green-700">
                Select Teacher *
              </label>
              <div className="relative">
                <BookOpen className="absolute w-4 h-4 text-green-500 transform -translate-y-1/2 left-3 top-1/2" />
                <select
                  name="teacherId"
                  required
                  value={formData.teacherId}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70 appearance-none cursor-pointer"
                >
                  <option value="">Choose Your Fav Teacher</option>
                  {teachers.map((teacher, index) => (
                    <option key={index} value={teacher._id}>
                      {teacher.name}
                    </option>
                  ))}
                </select>
                <div className="absolute transform -translate-y-1/2 pointer-events-none right-3 top-1/2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Starting Date */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium text-green-700">
                Preferred Starting Date *
              </label>
              <div className="relative">
                <Calendar className="absolute w-4 h-4 text-green-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="date"
                  name="joinDate"
                  required
                  value={formData.joinDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-green-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/70"
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-4 focus:ring-green-200 shadow-lg text-sm"
            >
              Register Now - إنشاء الله
            </button>
          </div>

          {/* Footer */}
          <div className="pt-4 mt-6 text-center border-t border-green-100">
            <p className="text-xs text-green-600">
              "And whoever fears Allah - He will make for him a way out" - Quran
              65:2
            </p>
            <p className="mt-1 text-xs text-green-500">
              May Allah bless your learning journey
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegStudent;
