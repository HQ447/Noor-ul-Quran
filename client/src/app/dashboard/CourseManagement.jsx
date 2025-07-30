import React, { useEffect, useState } from "react";
import { Plus, X, Star } from "lucide-react";
import { IoTrashBinSharp } from "react-icons/io5";
import NotFound from "../main/Not Found/NotFound";
const BASE_URL = "http://localhost:8000";

const IslamicPattern = () => (
  <div className="absolute inset-0 z-0 opacity-5">
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
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    level: "",
    duration: "",
    thumbnail: null,
  });

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/admin/courses`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.error("Failed to fetch courses", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      const res = await fetch(`${BASE_URL}/admin/deleteCourse/${courseId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.ok) {
        fetchCourses();
      } else {
        console.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.thumbnail ||
      !form.level.trim() ||
      !form.duration.trim()
    )
      return;

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("thumbnail", form.thumbnail);
    formData.append("level", form.level);
    formData.append("duration", form.duration);

    console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}/admin/create-course`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (res.ok) {
        await fetchCourses();
        setShowModal(false);
        setForm({
          title: "",
          description: "",
          thumbnail: null,
          level: "",
          duration: "",
        });
      } else {
        console.error("Failed to add course");
      }
    } catch (err) {
      console.error("Error submitting course", err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const token = localStorage.getItem("token");
  if (!token) return <NotFound />;

  return (
    <div className="relative min-h-screen p-6 bg-emerald-50">
      <IslamicPattern />

      <div className="relative z-10 flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold md:text-2xl text-emerald-800">
            Course Management
          </h2>
          <p className="text-sm text-emerald-600">
            {loading ? "Loading courses..." : "Manage all Islamic courses"}
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center px-4 py-2 text-sm text-white transition-colors rounded-lg bg-emerald-600 hover:bg-emerald-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Course
        </button>
      </div>

      <div className="relative z-10">
        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="relative p-4 transition-shadow border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl md:p-6 border-emerald-200/20"
              >
                <div className="mb-4 text-center">
                  <div className="h-32 mx-auto mb-2 rounded bg-emerald-100 animate-pulse"></div>
                  <div className="h-4 mb-2 rounded bg-emerald-100 animate-pulse"></div>
                  <div className="h-3 rounded bg-emerald-100 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div className="p-8 text-center bg-white shadow text-emerald-600 rounded-xl">
            No courses available.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
              <div
                key={course._id}
                className="relative p-4 transition-shadow border shadow-lg bg-white/80 backdrop-blur-sm rounded-xl md:p-6 border-emerald-200/20 hover:shadow-xl"
              >
                <IoTrashBinSharp
                  className="absolute text-2xl text-red-600 transition-all cursor-pointer top-2 right-3 hover:scale-95"
                  onClick={() => handleDeleteCourse(course._id)}
                />
                <div className="mb-4 text-center">
                  {course.thumbnail && (
                    <img
                      src={course.thumbnail}
                      alt="thumbnail"
                      className="object-cover mx-auto mb-2 shadow h-30"
                    />
                  )}
                  <h3 className="mb-1 text-base font-semibold line-clamp-2 md:text-lg text-emerald-800">
                    {course.title}
                  </h3>
                  <p className="text-sm text-emerald-600 line-clamp-4">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative w-full max-w-md p-6 mx-2 bg-white shadow-lg rounded-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="mb-4 text-xl font-semibold text-emerald-800">
              Add New Course
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm font-medium text-emerald-700">
                  Title
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-emerald-700">
                  Description
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  rows="3"
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-emerald-700">
                  Difficulty Level
                </label>
                <select
                  value={form.level}
                  onChange={(e) => setForm({ ...form, level: e.target.value })}
                  required
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Basic">Basic</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advance">Advance</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-emerald-700">
                  Course Duration (in months)
                </label>
                <input
                  value={form.duration}
                  onChange={(e) =>
                    setForm({ ...form, duration: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-emerald-700">
                  Thumbnail Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setForm({ ...form, thumbnail: e.target.files[0] })
                  }
                  className="w-full px-3 py-2 text-sm border rounded-lg border-emerald-200"
                  required
                />
              </div>
              <div className="flex justify-end pt-4 space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm text-white rounded-lg bg-emerald-600 hover:bg-emerald-700"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseManagement;
