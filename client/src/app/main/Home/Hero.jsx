import React, { useState, useEffect } from "react";
import { Gift } from "lucide-react";
import { NavLink } from "react-router";

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
    <section className="relative min-h-screen pb-12 overflow-hidden">
      {/* Islamic Background with Layers */}
      <div className="absolute inset-0">
        {/* Base gradient - Deep Islamic greens */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"></div>

        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M60 60l30-30v60zm0 0l-30-30v60zm0 0l30 30h-60zm0 0l-30 30h60zm0-30a30 30 0 100 60 30 30 0 000-60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "120px 120px",
            }}
          />
        </div>

        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-900/30 to-emerald-900/60"></div>

        {/* Floating Islamic elements */}
        <div className="absolute w-32 h-32 border-2 rounded-full top-20 left-10 border-emerald-300/20 animate-pulse"></div>
        <div
          className="absolute w-20 h-20 rotate-45 top-40 right-20 bg-teal-400/10 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="absolute w-24 h-24 transform border bottom-32 left-16 border-green-300/20 rotate-12">
          <div className="w-full h-full transform rotate-45 border border-green-300/20"></div>
        </div>
        <div
          className="absolute w-16 h-16 transform rounded-lg top-1/3 right-1/4 bg-emerald-400/5 rotate-12 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Crescent moon decorative elements */}
        <div className="absolute w-8 h-8 border-2 rounded-full top-24 right-12 border-green-300/30"></div>
        <div
          className="absolute w-6 h-6 rounded-full bottom-24 right-32 bg-teal-300/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Arabic calligraphy overlay */}
      <div className="absolute text-center transform -translate-x-1/2 top-8 left-1/2 z-5">
        <div className="mb-2 text-2xl font-bold md:text-3xl text-emerald-200/40">
          بسم الله الرحمن الرحيم
        </div>
        <div className="text-sm text-green-300/60">
          In the name of Allah, the Most Gracious, the Most Merciful
        </div>
      </div>

      {/* Bottom Islamic SVG separator */}
      <div className="absolute bottom-0 z-10 w-full">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full h-20"
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
          </defs>
          <path
            d="M1000,0l-500,98l-500,-98l0,100l1000,0l0,-100Z"
            className="opacity-60 fill-white"
          />
          <path
            d="M1000,20l-500,78l-500,-78l0,80l1000,0l0,-80Z"
            className="fill-white"
            fill="url(#islamicPattern)"
          />
        </svg>
      </div>

      <div className="relative z-20 flex flex-col items-center gap-8 py-20 mx-auto max-w-7xl lg:px-12 lg:flex-row lg:gap-12 lg:py-28">
        {/* Text Content */}
        <div className="flex-1 px-6 text-center lg:text-left lg:px-0">
          {/* Islamic greeting */}
          <div className="mb-6">
            <p className="text-sm font-medium tracking-wide text-emerald-200">
              السلام عليكم ورحمة الله وبركاته
            </p>
            <p className="mt-1 text-xs text-green-300/80">
              Peace and blessings of Allah be upon you
            </p>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl drop-shadow-lg">
            Learn online from{" "}
            <mark className="px-3 py-2 text-green-900 rounded-lg shadow-lg bg-gradient-to-r from-emerald-400 to-teal-400">
              Expert Quran Teachers
            </mark>
          </h1>
          <p className="max-w-xl mx-auto mt-6 text-base leading-relaxed md:text-lg text-emerald-100 lg:mx-0 lg:text-xl">
            Join us today as we are offering{" "}
            <mark className="px-2 py-1 font-semibold text-green-900 rounded-md shadow-sm bg-gradient-to-r from-teal-400 to-emerald-400">
              free trial classes
            </mark>{" "}
            to all our new students.
          </p>

          {/* Islamic quote */}
          <div className="p-4 mt-4 border-l-4 rounded-r-lg border-emerald-300 bg-green-900/30 backdrop-blur-sm">
            <p className="text-sm italic text-emerald-200">
              "خَيْرُكُمْ مَن تَعَلَّمَ القُرْآنَ وَعَلَّمَهُ"
            </p>
            <p className="mt-1 text-xs text-green-300/80">
              "The best of you are those who learn the Quran and teach it" -
              Prophet Muhammad (ﷺ)
            </p>
          </div>

          <div className="mt-8 lg:mt-10">
            <NavLink
              to={"/register-student"}
              className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 transform border rounded-full shadow-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-2xl hover:-translate-y-1 md:px-10 md:py-5 md:text-base border-emerald-400/20"
            >
              <Gift className="w-5 h-5 text-emerald-200" />
              Book Free Trial Class
              <span className="text-xs text-emerald-200">إن شاء الله</span>
            </NavLink>
          </div>
        </div>

        {/* Image Slider with Islamic Frame */}
        <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 lg:max-w-lg">
          <div className="relative">
            {/* Islamic decorative frame */}
            <div className="absolute border -inset-4 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl backdrop-blur-sm border-emerald-400/30"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl"></div>

            <div className="relative overflow-hidden border shadow-2xl rounded-xl border-emerald-300/30">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="flex-shrink-0 w-full bg-white/95">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="object-contain w-full h-auto"
                      style={{ minHeight: "300px" }}
                    />
                  </div>
                ))}
              </div>

              {/* Islamic-themed slide indicators */}
              <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-6 left-1/2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      currentSlide === index
                        ? "w-8 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"
                        : "w-3 h-3 bg-emerald-200/60 rounded-full hover:bg-emerald-300/80 backdrop-blur-sm"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Corner Islamic decorations */}
            <div className="absolute w-6 h-6 rotate-45 border-2 -top-2 -right-2 border-emerald-400/40"></div>
            <div className="absolute w-4 h-4 rounded-full -bottom-2 -left-2 bg-teal-400/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
