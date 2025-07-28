import React from "react";
import { BookOpen, Users, Award, Heart, Globe, Star } from "lucide-react";

function About() {
  const stats = [
    { number: "10,000+", label: "Students Worldwide", icon: Users },
    { number: "500+", label: "Certified Teachers", icon: Award },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Success Rate", icon: Star },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Authentic Islamic Education",
      description:
        "We provide authentic Quranic education based on traditional Islamic scholarship and modern teaching methodologies.",
    },
    {
      icon: Heart,
      title: "Compassionate Teaching",
      description:
        "Our teachers approach each student with patience, understanding, and genuine care for their spiritual journey.",
    },
    {
      icon: Users,
      title: "Global Community",
      description:
        "Join a worldwide community of learners united in their pursuit of Islamic knowledge and spiritual growth.",
    },
    {
      icon: Award,
      title: "Excellence in Learning",
      description:
        "We maintain the highest standards of Islamic education with certified teachers and proven methodologies.",
    },
  ];

  const team = [
    {
      name: "Sheikh Muhammad Al-Rashid",
      role: "Head of Islamic Studies",
      qualification: "PhD in Islamic Studies, Al-Azhar University",
      experience: "15+ years",
      image: "👨‍🏫",
    },
    {
      name: "Ustadha Fatima Al-Zahra",
      role: "Director of Quran Studies",
      qualification: "Ijazah in Quran Recitation & Tajweed",
      experience: "12+ years",
      image: "👩‍🏫",
    },
    {
      name: "Sheikh Omar Abdullah",
      role: "Arabic Language Director",
      qualification: "Masters in Arabic Literature",
      experience: "10+ years",
      image: "👨‍💼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-green-600 to-emerald-600">
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
              🕌 About Islamic Center
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Empowering Hearts Through
            <span className="block text-yellow-300">Islamic Knowledge</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-green-100 md:text-2xl">
            Dedicated to spreading the beautiful teachings of Islam through
            authentic Quranic education and spiritual guidance
          </p>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 transition-transform rounded-full bg-gradient-to-br from-green-500 to-emerald-600 group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-3xl font-bold text-gray-800 lg:text-4xl">
                    {stat.number}
                  </h3>
                  <p className="font-medium text-gray-600">{stat.label}</p>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
                🎯 Our Mission
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800 lg:text-4xl">
                Nurturing Souls Through
                <span className="text-green-600"> Sacred Knowledge</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                At Islamic Center, we believe that authentic Islamic education
                is the key to spiritual growth and community building. Our
                mission is to make quality Quranic education accessible to
                Muslims worldwide, regardless of their location or background.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
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
                  <h3 className="mb-4 text-2xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                  <p className="leading-relaxed text-gray-600">
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

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-6 mx-auto lg:px-12">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
              ⭐ Our Values
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl">
              What Guides Our Work
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our core values shape everything we do, from curriculum design to
              student interaction
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="p-8 transition-shadow bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-gray-800">
                        {value.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl px-6 mx-auto lg:px-12">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
              👥 Our Team
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl">
              Meet Our Scholars
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Learn from qualified Islamic scholars and experienced educators
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="overflow-hidden transition-shadow bg-white shadow-lg rounded-xl hover:shadow-xl"
              >
                <div className="p-8 text-center">
                  <div className="mb-4 text-6xl">{member.image}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-semibold text-green-600">
                    {member.role}
                  </p>
                  <p className="mb-2 text-sm text-gray-600">
                    {member.qualification}
                  </p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                    <Award className="w-4 h-4" />
                    {member.experience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl px-6 mx-auto text-center lg:px-12">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-green-100">
            Join thousands of students worldwide who have transformed their
            lives through authentic Islamic education
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-4 font-semibold text-green-600 transition-colors bg-white rounded-lg shadow-lg hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="px-8 py-4 font-semibold text-white transition-colors border-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 border-emerald-400">
              View Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
