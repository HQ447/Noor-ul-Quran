import React from "react";
import { BookOpen, Users, Award, Heart, Globe, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function About() {
  const [teamData, setTeamData] = useState([]);
  const navigate = useNavigate();
  const BASE_URL = "https://noor-ul-quran-backend-gq68.onrender.com";
  const stats = [
    { number: "10,000+", label: "Students Worldwide", icon: Users },
    { number: "500+", label: "Certified Teachers", icon: Award },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Success Rate", icon: Star },
  ];

  useEffect(() => {
    fetch(`${BASE_URL}/admin/getAdmins`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        // If your API returns { admins: [...] }
        if (Array.isArray(data)) {
          setTeamData(data);
        } else if (Array.isArray(data.admins)) {
          setTeamData(data.admins);
        } else {
          console.warn("Unexpected API shape");
          setTeamData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setTeamData([]);
      });
  }, []);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden text-white bg-gradient-to-r from-green-600 to-emerald-600">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM30 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-6xl px-6 mx-auto text-center lg:px-12">
          <div className="mb-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold text-black bg-white rounded-full bg-opacity-20">
              🕌 About Islamic Center
            </div>
          </div>
          <h1 className="mb-2 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Empowering Hearts Through
            <span className="block text-yellow-300">Islamic Knowledge</span>
          </h1>
          <p className="max-w-3xl mx-auto text-sm leading-relaxed text-green-100 md:text-lg ">
            Dedicated to spreading the beautiful teachings of Islam through
            authentic Quranic education and spiritual guidance
          </p>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl px-6 mx-auto lg:px-12">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
              👥 Our Team
            </div>
            <h2 className="mb-4 text-2xl font-bold text-gray-800 lg:text-3xl">
              Meet Our Scholars
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-600">
              Learn from qualified Islamic scholars and experienced educators
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamData.map((member) => (
              <div
                key={member._id}
                className="relative p-6 transition-all duration-300 border shadow-xl bg-white/95 backdrop-blur-sm rounded-2xl border-emerald-200/50 hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-300/70 group"
              >
                {/* Decorative Islamic Pattern Overlay - Fixed z-index */}
                <div className="absolute top-0 right-0 w-20 h-20 transition-opacity duration-300 pointer-events-none opacity-5 group-hover:opacity-10">
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

                {/* Role badge */}
                <div className="absolute z-20 px-3 py-1 text-xs font-bold text-white capitalize rounded-full shadow-md top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500">
                  🔰 {member.role === "admin" ? "Teacher" : "Super Admin"}
                </div>

                {/* Main content with proper z-index */}
                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-6">
                    <div className="mb-4">
                      {member.img ? (
                        <img
                          src={member.img}
                          alt={member.name}
                          className="object-cover transition-shadow border-4 border-green-200 rounded-full shadow-lg w-18 h-18 md:w-20 md:h-20 group-hover:shadow-xl"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-16 h-16 text-2xl font-bold text-white transition-shadow rounded-full shadow-lg md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 group-hover:shadow-xl">
                          {member?.name?.charAt(0).toUpperCase() || "A"}
                        </div>
                      )}
                    </div>

                    <div className="text-center">
                      <h3 className="mb-1 text-lg font-bold text-green-800">
                        {member.name}
                      </h3>
                      <p className="mb-3 text-sm text-green-600">
                        {member.email}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-600">
                        <Award className="w-3 h-3 mr-1" />
                        {member.designation || "Teacher"}
                      </div>
                    </div>
                  </div>

                  {/* Information Section with better visibility */}
                  {/* <div className="mb-5 space-y-3">
                    <div className="p-4 border rounded-xl bg-gradient-to-r from-emerald-50/80 to-teal-50/80 border-emerald-200/60">
                      <div className="grid grid-cols-1 gap-3 text-xs md:text-sm">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                            <span className="text-emerald-600">🌎</span>
                            Country
                          </span>
                          <span className="font-semibold text-right text-emerald-900">
                            {admin.country || "N/A"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                            <span className="text-emerald-600">🎓</span>
                            Qualification
                          </span>
                          <span
                            className="font-semibold text-right text-emerald-900 line-clamp-1"
                            title={admin.qualification}
                          >
                            {admin.qualification || "N/A"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                            <span className="text-emerald-600">👨‍🏫</span>
                            Experience
                          </span>
                          <span className="font-semibold text-right text-emerald-900">
                            {admin.experience || "N/A"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                            <span className="text-emerald-600">📞</span>
                            Contact
                          </span>
                          <span className="font-semibold text-right text-emerald-900">
                            {admin.whatsapp || "87278328"}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                            <span className="text-emerald-600">📅</span>
                            Joined
                          </span>
                          <span className="font-semibold text-right text-emerald-900">
                            {admin.createdAt
                              ? new Date(admin.createdAt).toLocaleString(
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
                      </div>
                    </div>
                  </div> */}

                  {/* Action Buttons with proper z-index and contrast */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => navigate(`/teacher-detail/${member._id}`)}
                      className="flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-bold text-white transition-all duration-200 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl transform hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-6 mx-auto lg:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center mb-4 transition-transform rounded-full md:w-15 md:h-15 w-13 h-13 bg-gradient-to-br from-green-500 to-emerald-600 group-hover:scale-110">
                    <IconComponent className="w-6 h-6 text-white md:w-8 md:h-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800 md:text-2xl lg:text-3xl">
                    {stat.number}
                  </h3>
                  <p className="text-sm font-medium text-gray-600 md:text-lg">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl px-6 mx-auto lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                🎯 Our Mission
              </div>
              <h2 className="mb-6 text-2xl font-bold text-gray-800 lg:text-4xl">
                Nurturing Souls Through
                <span className="text-green-600"> Sacred Knowledge</span>
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-justify text-gray-600 md:text-lg">
                At Islamic Center, we believe that authentic Islamic education
                is the key to spiritual growth and community building. Our
                mission is to make quality Quranic education accessible to
                Muslims worldwide, regardless of their location or background.
              </p>
              <p className="text-sm leading-relaxed text-justify text-gray-600 md:text-lg">
                We combine traditional Islamic scholarship with modern teaching
                methods to create an engaging and effective learning experience
                that honors the sacred nature of Islamic knowledge while meeting
                the needs of contemporary learners.
              </p>
            </div>
            <div className="relative">
              <div className="p-8 bg-white border-t-4 border-green-500 shadow-2xl rounded-2xl">
                <div className="text-center">
                  <div className="mb-4 text-6xl">📖</div>
                  <h3 className="mb-4 text-xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                  <p className="text-sm leading-relaxed text-justify text-gray-600">
                    "To be the leading platform for Islamic education, inspiring
                    millions to connect with the Quran and live according to its
                    guidance, creating a more compassionate and knowledgeable
                    Ummah."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl px-6 mx-auto text-center lg:px-12">
          <h2 className="mb-6 text-2xl font-bold lg:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-sm text-green-100 md:text-xl">
            Join thousands of students worldwide who have transformed their
            lives through authentic Islamic education
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-2 font-semibold text-green-600 transition-colors bg-white rounded-lg shadow-lg lg:py-4 hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="px-8 py-2 font-semibold text-white transition-colors border-2 rounded-lg md:py-4 bg-emerald-500 hover:bg-emerald-600 border-emerald-400">
              View Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
