import React from "react";
import { BookOpen, ArrowRight, Clock, Users, Star } from "lucide-react";

const Courses = () => {
  // Sample courses data
  const courses = [
    {
      id: 1,
      title: "Quran Recitation & Tajweed",
      description:
        "Learn the proper pronunciation and beautiful recitation of the Holy Quran with Tajweed rules. Master the art of Quranic recitation with expert guidance.",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500&h=300&fit=crop",
      duration: "12 weeks",
      students: 1250,
      rating: 4.9,
      level: "Beginner to Advanced",
    },
    {
      id: 2,
      title: "Arabic Language Fundamentals",
      description:
        "Master the Arabic language from basics to advanced levels. Understand Quranic Arabic and communicate effectively in the language of the Quran.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      duration: "16 weeks",
      students: 980,
      rating: 4.8,
      level: "Beginner",
    },
    {
      id: 3,
      title: "Islamic History & Civilization",
      description:
        "Explore the rich history of Islam, from the time of Prophet Muhammad (PBUH) to the golden age of Islamic civilization and its contributions to humanity.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
      duration: "10 weeks",
      students: 750,
      rating: 4.7,
      level: "Intermediate",
    },
    {
      id: 4,
      title: "Islamic Jurisprudence (Fiqh)",
      description:
        "Understand Islamic law and jurisprudence. Learn about worship, transactions, family law, and contemporary issues from authentic Islamic sources.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      duration: "14 weeks",
      students: 650,
      rating: 4.8,
      level: "Intermediate",
    },
    {
      id: 5,
      title: "Hadith Studies",
      description:
        "Study the authentic sayings and traditions of Prophet Muhammad (PBUH). Learn hadith classification, authentication methods, and practical application.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      duration: "12 weeks",
      students: 540,
      rating: 4.9,
      level: "Advanced",
    },
    {
      id: 6,
      title: "Islamic Ethics & Spirituality",
      description:
        "Develop strong Islamic character and spirituality. Learn about Islamic morals, ethics, and the path to spiritual purification and closeness to Allah.",
      image:
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=300&fit=crop",
      duration: "8 weeks",
      students: 890,
      rating: 4.6,
      level: "All Levels",
    },
  ];

  const handleLearnMore = (course) => {
    // In a real app, this would navigate to course details page
    alert(`Learn more about: ${course.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden text-white bg-gradient-to-r from-green-600 to-emerald-600">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="overflow-hidden transition-shadow bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl group"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Level Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-full">
                      {course.level}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute flex items-center gap-1 px-2 py-1 rounded-full top-3 right-3 bg-white/90 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">
                      {course.rating}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-800 transition-colors group-hover:text-green-600">
                    {course.title}
                  </h3>

                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => handleLearnMore(course)}
                    className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
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
            <button className="px-6 py-3 font-semibold text-green-600 transition-colors bg-white rounded-lg shadow-lg hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="px-6 py-3 font-semibold text-white transition-colors border-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 border-emerald-400">
              View All Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
