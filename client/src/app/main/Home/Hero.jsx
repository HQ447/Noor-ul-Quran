import React, { useState, useEffect } from "react";
import { Gift, Star, Users, BookOpen, CheckCircle } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "https://elitequrantutors.com/wp-content/uploads/2022/08/muslim-boy-reading.png",
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
      {/* Enhanced Islamic Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Base gradient - Rich Islamic colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-green-900 to-teal-900"></div>

        {/* Animated geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Cpath d='M40 40l20-20v40zm0 0l-20-20v40zm0 0l20 20h-40zm0 0l-20 20h40zm0-20a20 20 0 100 40 20 20 0 000-40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-950/40 to-emerald-950/80"></div>

        {/* Enhanced floating Islamic elements */}
        <div className="absolute w-20 h-20 border rounded-full md:w-24 md:h-24 top-16 left-4 md:top-20 md:left-10 border-emerald-300/20 animate-pulse"></div>
        <div
          className="absolute w-12 h-12 rotate-45 md:w-16 md:h-16 top-32 right-8 md:top-40 md:right-20 bg-teal-400/10 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="absolute w-16 h-16 transform border md:w-20 md:h-20 bottom-24 left-8 md:bottom-32 md:left-16 border-green-300/20 rotate-12">
          <div className="w-full h-full transform rotate-45 border border-green-300/20"></div>
        </div>
        <div
          className="absolute w-10 h-10 transform rounded-lg md:w-14 md:h-14 top-1/3 right-1/4 bg-emerald-400/5 rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Additional decorative elements */}
        <div className="absolute w-6 h-6 border rounded-full md:w-8 md:h-8 top-20 right-6 md:top-24 md:right-12 border-green-300/30"></div>
        <div
          className="absolute w-4 h-4 rounded-full md:w-6 md:h-6 bottom-20 right-16 md:bottom-24 md:right-32 bg-teal-300/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Star elements */}
        <div className="absolute top-1/4 left-1/3">
          <Star className="w-3 h-3 md:w-4 md:h-4 text-emerald-300/30 animate-pulse" />
        </div>
        <div
          className="absolute bottom-1/3 right-1/3"
          style={{ animationDelay: "1.5s" }}
        >
          <Star className="w-2 h-2 md:w-3 md:h-3 text-teal-300/40 animate-pulse" />
        </div>
      </div>

      {/* Enhanced Arabic calligraphy overlay */}
      <div className="absolute text-center transform -translate-x-1/2 top-4 left-1/2 z-5 md:top-8">
        <div className="mb-1 text-lg font-bold md:mb-2 md:text-2xl lg:text-3xl text-emerald-200/40">
          بسم الله الرحمن الرحيم
        </div>
        <div className="text-xs md:text-sm text-green-300/60">
          In the name of Allah, the Most Gracious, the Most Merciful
        </div>
      </div>

      {/* Enhanced bottom separator */}
      <div className="absolute bottom-0 z-10 w-full">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 lg:h-20"
        >
          <defs>
            <pattern
              id="islamicPattern"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect width="20" height="20" fill="#065f46" opacity="0.1" />
              <circle cx="10" cy="10" r="2" fill="#059669" opacity="0.3" />
            </pattern>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M1000,0l-500,98l-500,-98l0,100l1000,0l0,-100Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M1000,20l-500,78l-500,-78l0,80l1000,0l0,-80Z"
            className="fill-white"
            fill="url(#islamicPattern)"
          />
        </svg>
      </div>

      <div className="relative z-20 flex flex-col items-center gap-6 px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-12 lg:flex-row lg:gap-12 lg:py-20 xl:py-28">
        {/* Enhanced Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Islamic greeting with enhanced styling */}
          <div className="mb-4 lg:mb-6">
            <div className="inline-block p-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm">
              <p className="text-xs font-medium tracking-wide md:text-sm text-emerald-200">
                السلام عليكم ورحمة الله وبركاته
              </p>
              <p className="mt-1 text-xs text-green-300/80">
                Peace and blessings of Allah be upon you
              </p>
            </div>
          </div>

          {/* Enhanced main heading */}
          <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg">
            <span className="block mb-2">Learn Online from</span>
            <mark className="inline-block px-2 py-1 text-sm text-green-900 rounded-lg shadow-lg md:px-3 md:py-2 md:text-base lg:text-lg xl:text-xl bg-gradient-to-r from-emerald-400 to-teal-400">
              Expert Quran Teachers
            </mark>
          </h1>

          {/* Enhanced description */}
          <p className="max-w-lg mx-auto mt-4 text-sm leading-relaxed md:text-base lg:text-lg text-emerald-100 lg:mx-0 lg:max-w-xl">
            Join us today as we are offering{" "}
            <mark className="px-1 py-0.5 font-semibold text-green-900 rounded-md shadow-sm md:px-2 md:py-1 bg-gradient-to-r from-teal-400 to-emerald-400">
              free trial classes
            </mark>{" "}
            to all our new students.
          </p>

          {/* Features list */}
          <div className="grid grid-cols-1 gap-2 mt-4 md:grid-cols-2 lg:gap-3">
            {[
              { icon: Users, text: "Certified Teachers" },
              { icon: BookOpen, text: "Interactive Learning" },
              { icon: Star, text: "Personalized Approach" },
              { icon: CheckCircle, text: "Flexible Schedule" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-emerald-200"
              >
                <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                <span className="text-xs md:text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced Islamic quote */}
          <div className="p-3 mt-4 border-l-4 rounded-r-lg md:p-4 border-emerald-300 bg-green-900/30 backdrop-blur-sm">
            <p className="text-xs italic md:text-sm text-emerald-200">
              "خَيْرُكُمْ مَن تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ"
            </p>
            <p className="mt-1 text-xs text-green-300/80">
              "The best of you are those who learn the Quran and teach it" -
              Prophet Muhammad (ﷺ)
            </p>
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-6 lg:mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white transition-all duration-300 transform border rounded-full shadow-xl md:gap-3 md:px-8 md:py-4 md:text-sm lg:text-base bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-2xl hover:-translate-y-1 border-emerald-400/20 group">
              <Gift className="w-4 h-4 md:w-5 md:h-5 text-emerald-200 group-hover:animate-bounce" />
              <span>Book Free Trial Class</span>
              <span className="text-xs text-emerald-200">إن شاء الله</span>
            </button>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 mt-3 text-xs lg:justify-start text-emerald-300/80">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                500+ Happy Students
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Image Slider */}
        <div className="flex-1 w-full max-w-sm mx-auto lg:mx-0 lg:max-w-md xl:max-w-lg">
          <div className="relative">
            {/* Enhanced Islamic decorative frame */}
            <div className="absolute border -inset-3 md:-inset-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl backdrop-blur-sm border-emerald-400/30"></div>
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl"></div>

            <div className="relative overflow-hidden border shadow-2xl rounded-xl border-emerald-300/30 bg-white/95">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="object-contain w-full h-auto"
                      style={{ minHeight: "200px", maxHeight: "300px" }}
                    />
                  </div>
                ))}
              </div>

              {/* Enhanced slide indicators */}
              <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-4 left-1/2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      currentSlide === index
                        ? "w-6 h-2 md:w-8 md:h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"
                        : "w-2 h-2 md:w-3 md:h-3 bg-emerald-200/60 rounded-full hover:bg-emerald-300/80 backdrop-blur-sm"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-200/20">
                <div
                  className="h-full transition-all duration-500 bg-gradient-to-r from-emerald-500 to-teal-500"
                  style={{
                    width: `${((currentSlide + 1) / slides.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Enhanced corner decorations */}
            <div className="absolute w-4 h-4 rotate-45 border-2 md:w-6 md:h-6 -top-2 -right-2 border-emerald-400/40 animate-pulse"></div>
            <div
              className="absolute w-3 h-3 rounded-full md:w-4 md:h-4 -bottom-2 -left-2 bg-teal-400/30 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Additional glow effect */}
            <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-t from-emerald-500/5 to-transparent"></div>
          </div>

          {/* Student testimonial preview */}
          <div className="p-3 mt-4 text-center rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="flex justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-xs text-emerald-200">
              "Excellent teachers and flexible timing!"
            </p>
            <p className="text-xs text-emerald-300/60">- Sarah M.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
