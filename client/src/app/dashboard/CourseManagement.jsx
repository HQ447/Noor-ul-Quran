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

const CourseManagement = () => {
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [courses, setCourses] = useState([
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
  ]);

  const addCourse = () => {
    if (newCourse.title && newCourse.description) {
      setCourses([
        ...courses,
        {
          id: courses.length + 1,
          ...newCourse,
          image: newCourse.image || "📚",
        },
      ]);
      setNewCourse({ title: "", description: "", image: "" });
      setShowCourseModal(false);
    }
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId));
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex flex-col mb-6 space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <div>
          <h2 className="mb-2 text-xl font-bold md:text-2xl text-emerald-800">
            Course Management
          </h2>
          <p className="text-sm text-emerald-600">
            Manage Islamic courses and content
          </p>
        </div>
        <button
          onClick={() => setShowCourseModal(true)}
          className="flex items-center self-start px-4 py-2 space-x-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700 md:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Course</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-4 transition-shadow border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl md:p-6 border-emerald-200/20 hover:shadow-xl"
          >
            <div className="mb-4 text-center">
              <div className="mb-3 text-3xl md:text-4xl">{course.image}</div>
              <h3 className="mb-2 text-base font-semibold md:text-lg text-emerald-800">
                {course.title}
              </h3>
              <p className="text-sm text-emerald-600">{course.description}</p>
            </div>
            <button
              onClick={() => deleteCourse(course.id)}
              className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm text-red-700 transition-colors bg-red-100 rounded-lg hover:bg-red-200"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete Course</span>
            </button>
          </div>
        ))}
      </div>

      {/* Course Modal */}
      {showCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative w-full max-w-md p-6 bg-white rounded-xl">
            <button
              onClick={() => setShowCourseModal(false)}
              className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="mb-4 text-xl font-semibold text-emerald-800">
              Add New Course
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-emerald-700">
                  Course Title
                </label>
                <input
                  type="text"
                  value={newCourse.title}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, title: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter course title..."
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-emerald-700">
                  Description
                </label>
                <textarea
                  value={newCourse.description}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, description: e.target.value })
                  }
                  rows="3"
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter course description..."
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-emerald-700">
                  Course Icon (Emoji)
                </label>
                <input
                  type="text"
                  value={newCourse.image}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, image: e.target.value })
                  }
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Enter emoji (e.g., 📚, 🕌, 📖)"
                />
              </div>
              <div className="flex pt-4 space-x-3">
                <button
                  onClick={() => setShowCourseModal(false)}
                  className="flex-1 px-4 py-2 text-sm text-gray-700 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={addCourse}
                  className="flex-1 px-4 py-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
                >
                  Add Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseManagement;
