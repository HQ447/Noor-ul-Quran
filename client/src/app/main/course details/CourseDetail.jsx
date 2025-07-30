import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Clock, Users, Star } from "lucide-react";
import axios from "axios";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const BASE_URL = "http://localhost:8000";

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/course/${id}`);
        setCourse(res.data.course);
        console.log(res.data.course);
      } catch (error) {
        console.error("Failed to fetch course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-emerald-50">
        <p className="text-lg text-gray-600">Loading course details...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-emerald-50">
        <p className="text-lg text-red-600">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative px-6 py-20 text-white bg-gradient-to-r from-green-700 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 font-bold md:text-4xl">{course.title}</h1>
          <p className="text-justify text-green-100 sm:text-xs md:text-lg line-clamp-5">
            {course.description}
          </p>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-5xl px-6 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Course Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="object-cover w-full h-80"
            />
          </div>

          {/* Course Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Duration: {course.duration} months</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>Enrolled Students: {course.students} 232</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>Rating: {course.rating} 4.98</span>
            </div>

            <p className="text-base leading-relaxed text-gray-700">
              <strong>Level:</strong> {course.level}
            </p>

            <p className="text-base leading-relaxed text-gray-700">
              <strong>Topics:</strong> {course.topics?.join(", ") || "N/A"}
            </p>

            <div className="mt-6">
              <NavLink
                to={"/register-student"}
                className="px-6 py-3 font-semibold text-white transition rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                Enroll Now
              </NavLink>
            </div>
          </div>
        </div>

        {/* Syllabus or Description */}
        {course.fullDescription && (
          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-emerald-700">
              📖 Course Overview
            </h2>
            <p className="leading-relaxed text-gray-700 whitespace-pre-line">
              {course.fullDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetail;
