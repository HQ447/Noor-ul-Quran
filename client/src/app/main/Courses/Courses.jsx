import React, { useState, useEffect } from "react";
import { BookOpen, ArrowRight, Clock, Users, Star } from "lucide-react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8000";
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/admin/courses`);
        setCourses(res.data); // Adjust depending on your API response shape
      } catch (err) {
        console.error("Failed to fetch courses", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleLearnMore = (id) => {
    navigate(`/course-detail/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden text-white bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM30 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-6xl px-6 mx-auto text-center lg:px-12">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-black bg-white rounded-full bg-opacity-20">
              📚 Islamic Courses
            </div>
          </div>
          <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Expand Your Knowledge Through
            <span className="block text-yellow-300">Expert-Led Courses</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-green-100 md:text-xl">
            Deepen your understanding of Islam with comprehensive courses taught
            by qualified scholars
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl px-6 mx-auto lg:px-12">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
              🎓 Available Courses
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-3xl">
              Choose Your Learning Path
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Select from our comprehensive range of Islamic courses designed
              for all levels
            </p>
          </div>

          {/* Courses Grid */}
          {loading ? (
            <div className="text-center text-gray-500">Loading courses...</div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course._id}
                  className="overflow-hidden transition-shadow bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-full">
                        {course.level || "Intermediate"}
                      </span>
                    </div>
                    <div className="absolute flex items-center gap-1 px-2 py-1 rounded-full top-3 right-3 bg-white/90 backdrop-blur-sm">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium text-gray-700">
                        5{course.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold text-gray-800 transition-colors group-hover:text-green-600">
                      {course.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{course.duration} months</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>423{course.students?.toLocaleString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleLearnMore(course._id)}
                      className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-white bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl px-6 mx-auto text-center lg:px-12">
          <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
            Ready to Begin Your Learning Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-lg text-green-100">
            Join thousands of students worldwide in deepening their
            understanding of Islam
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <NavLink
              to={"/register-student"}
              className="px-6 py-3 font-semibold text-green-600 transition-colors bg-white rounded-lg shadow-lg hover:bg-gray-100"
            >
              Start Free Trial
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
