import React, { useState, useEffect } from "react";
import { Gift, Star, Users, BookOpen, CheckCircle } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "https://learnqurankids.com/wp-content/uploads/2023/01/Tajweed-Quran-with-tajweed-rules-for-beginners-Basic-to-Advanced-Tajweed-1.svg",
      alt: "Muslim boy reading",
    },
    {
      src: "https://elitequrantutors.com/wp-content/uploads/2022/08/hand-drawn-cartoon-reading-quran.png",
      alt: "Cartoon boy reading Quran",
    },
    {
      src: "https://elitequrantutors.com/wp-content/uploads/2022/08/muslim-man-reading-quran.png",
      alt: "Muslim man reading Quran",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Professional Islamic Background */}
      <div className="absolute inset-0">
        {/* Clean gradient base with better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950"></div>

        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 0v60M0 30h60' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Radial overlay for depth without overwhelming */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/30 to-slate-900/60"></div>

        {/* Minimalist floating elements */}
        <div
          className="absolute w-16 h-16 border rounded-full top-20 left-10 border-emerald-400/20 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute w-12 h-12 border rounded-full top-40 right-20 border-teal-400/15 animate-pulse"
          style={{ animationDuration: "3s", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-8 h-8 border rounded-full bottom-32 left-16 border-emerald-300/10 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>

        {/* Professional accent elements */}
        <div className="absolute top-1/4 left-1/3">
          <Star
            className="w-4 h-4 text-emerald-400/30 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
        </div>
        <div className="absolute bottom-1/3 right-1/3">
          <Star
            className="w-3 h-3 text-teal-400/25 animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Clean Arabic calligraphy header */}
      <div className="absolute z-10 text-center transform -translate-x-1/2 top-8 left-1/2">
        <div className="px-6 py-3 border rounded-lg bg-white/10 backdrop-blur-md border-white/20">
          <div className="mb-1 text-2xl font-bold lg:text-3xl text-emerald-100">
            بسم الله الرحمن الرحيم
          </div>
          <div className="text-sm text-emerald-200/80">
            In the name of Allah, the Most Gracious, the Most Merciful
          </div>
        </div>
      </div>

      {/* Professional bottom wave */}
      <div className="absolute bottom-0 z-10 w-full">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-16 lg:h-20"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C250,20 750,20 1000,60 L1000,100 L0,100 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      <div className="relative z-20 flex flex-col items-center gap-12 px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-12 lg:flex-row lg:gap-16 lg:py-28 xl:py-32">
        {/* Enhanced Text Content with better readability */}
        <div className="flex-1 text-center lg:text-left">
          {/* Professional Islamic greeting */}
          <div className="mb-6 lg:mb-8">
            <div className="inline-block p-4 border rounded-xl bg-white/10 backdrop-blur-lg border-white/20">
              <p className="text-sm font-medium tracking-wide text-emerald-100 md:text-base">
                السلام عليكم ورحمة الله وبركاته
              </p>
              <p className="mt-1 text-sm text-emerald-200/90">
                Peace and blessings of Allah be upon you
              </p>
            </div>
          </div>

          {/* Clear, professional main heading */}
          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block mb-3">Learn Online from</span>
            <span className="inline-block px-4 py-2 shadow-xl text-slate-900 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
              Expert Quran Teachers
            </span>
          </h1>

          {/* Clear description with better contrast */}
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-relaxed text-emerald-50 lg:mx-0 lg:text-xl">
            Join us today as we are offering{" "}
            <span className="px-3 py-1 font-semibold rounded-lg text-slate-900 bg-gradient-to-r from-teal-400 to-emerald-400">
              free trial classes
            </span>{" "}
            to all our new students.
          </p>

          {/* Professional features grid */}
          <div className="grid grid-cols-2 gap-4 mt-8 lg:gap-6">
            {[
              { icon: Users, text: "Certified Teachers" },
              { icon: BookOpen, text: "Interactive Learning" },
              { icon: Star, text: "Personalized Approach" },
              { icon: CheckCircle, text: "Flexible Schedule" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 border rounded-lg bg-white/10 backdrop-blur-sm border-white/20"
              >
                <feature.icon className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-100 md:text-base">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Professional Islamic quote */}
          <div className="p-6 mt-8 border-l-4 rounded-r-xl border-emerald-400 bg-white/10 backdrop-blur-lg">
            <p className="text-base italic text-emerald-100 md:text-lg">
              "خَيْرُكُمْ مَن تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ"
            </p>
            <p className="mt-2 text-sm text-emerald-200/90">
              "The best of you are those who learn the Quran and teach it" -
              Prophet Muhammad (ﷺ)
            </p>
          </div>

          {/* Professional CTA Button */}
          <div className="mt-10 lg:mt-12">
            <button className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white transition-all duration-300 transform rounded-full shadow-2xl md:px-10 md:py-5 md:text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-3xl hover:-translate-y-1 group">
              <Gift className="w-5 h-5 text-emerald-200 group-hover:animate-bounce" />
              <span>Book Free Trial Class</span>
              <span className="text-sm text-emerald-200">إن شاء الله</span>
            </button>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 mt-4 text-sm lg:justify-start text-emerald-200/90">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                500+ Happy Students
              </span>
            </div>
          </div>
        </div>

        {/* Professional Image Slider */}
        <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
          <div className="relative">
            {/* Clean, professional frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl backdrop-blur-sm"></div>
            <div className="absolute -inset-2 bg-white/10 rounded-xl backdrop-blur-sm"></div>

            <div className="relative overflow-hidden border shadow-2xl rounded-2xl border-white/30 bg-white/95 backdrop-blur-sm">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="object-contain w-full h-auto"
                      style={{ minHeight: "300px", maxHeight: "400px" }}
                    />
                  </div>
                ))}
              </div>

              {/* Professional slide indicators */}
              <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-6 left-1/2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      currentSlide === index
                        ? "w-8 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"
                        : "w-3 h-3 bg-gray-400/60 rounded-full hover:bg-gray-300 backdrop-blur-sm"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Clean progress bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-200/30">
                <div
                  className="h-full transition-all duration-700 bg-gradient-to-r from-emerald-500 to-teal-500"
                  style={{
                    width: `${((currentSlide + 1) / slides.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Subtle corner accents */}
            <div className="absolute w-6 h-6 rotate-45 border-2 -top-3 -right-3 border-emerald-400/40"></div>
            <div className="absolute w-4 h-4 rounded-full -bottom-2 -left-2 bg-teal-400/40"></div>
          </div>

          {/* Professional testimonial */}
          <div className="p-4 mt-6 text-center border rounded-xl bg-white/10 backdrop-blur-lg border-white/20">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-emerald-100">
              "Excellent teachers and flexible timing!"
            </p>
            <p className="text-sm text-emerald-200/80">- Sarah M.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
