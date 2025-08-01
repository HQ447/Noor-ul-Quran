import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Star,
  Quote,
} from "lucide-react";

// Testimonials Component
export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "London, UK",
      rating: 5,
      text: "Alhamdulillah, my children have learned to recite the Quran beautifully with proper Tajweed. The teachers are very patient and knowledgeable. May Allah bless this institution.",
      course: "Quran Recitation with Tajweed",
    },
    {
      name: "Fatima Al-Zahra",
      location: "Toronto, Canada",
      rating: 5,
      text: "SubhanAllah! The online classes are so convenient and the teaching method is excellent. My daughter has memorized 5 Surahs in just 3 months. Highly recommended!",
      course: "Hifz Program",
    },
    {
      name: "Muhammad Ali",
      location: "Sydney, Australia",
      rating: 5,
      text: "The Arabic language classes helped me understand the Quran better. The teachers explain everything clearly and are very supportive. JazakAllahu Khair!",
      course: "Arabic Language & Quran",
    },
    {
      name: "Aisha Rahman",
      location: "New York, USA",
      rating: 5,
      text: "As a revert to Islam, learning to read the Quran was challenging. But with Elite Quran Tutors, I can now read fluently. The teachers are very understanding and encouraging.",
      course: "Quran Reading for Beginners",
    },
    {
      name: "Omar Abdullah",
      location: "Manchester, UK",
      rating: 5,
      text: "My son was struggling with Arabic pronunciation. After joining these classes, his recitation has improved tremendously. The one-on-one attention is excellent. Barakallahu feek!",
      course: "Tajweed & Pronunciation",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM30 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-6xl px-6 mx-auto lg:px-12">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
            <Star className="w-3 h-3" />
            Student Testimonials
          </div>
          <h2 className="mb-2 text-xl font-bold text-blue-700 md:text-2xl lg:text-3xl">
            What <span className="text-green-600">Our Students Say!</span>
          </h2>
          <div className="flex justify-center my-3">
            <img
              src="https://elitequrantutors.com/wp-content/uploads/2023/02/Saperator-1-300x25.png"
              alt="Separator"
              className="w-56 h-auto"
            />
          </div>

          <p className="max-w-2xl mx-auto text-sm md:text-lg text-slate-600">
            Hear from our beloved students and their families about their Quran
            learning journey
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="p-8 bg-white border-t-4 shadow-2xl rounded-2xl md:p-12 border-emerald-500">
            {/* Islamic Decoration */}
            <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg md:w-15 md:h-15 bg-emerald-500">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="mt-3 text-center">
              {/* Stars Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  )
                )}
              </div>

              {/* Testimonial Text */}
              <blockquote className="max-w-4xl mx-auto mb-8 text-xs leading-relaxed lg:text-lg md:text-xl text-slate-700">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Student Info */}
              <div className="pt-6 border-t">
                <h4 className="mb-1 text-lg font-bold md:text-xl text-slate-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="mb-2 font-semibold text-emerald-600">
                  {testimonials[currentTestimonial].location}
                </p>
                <p className="inline-block px-3 py-1 text-xs rounded-full text-slate-500 bg-slate-50">
                  {testimonials[currentTestimonial].course}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 flex items-center justify-center w-12 h-12 transition-colors -translate-x-6 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 text-emerald-600 hover:bg-emerald-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 flex items-center justify-center w-12 h-12 transition-colors translate-x-6 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 text-emerald-600 hover:bg-emerald-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === index
                    ? "bg-emerald-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
