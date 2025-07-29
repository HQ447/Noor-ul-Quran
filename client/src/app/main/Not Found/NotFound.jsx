import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const IslamicPattern = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
    <div className="grid h-full grid-cols-10 gap-2">
      {[...Array(100)].map((_, i) => (
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

const NotFound = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-green-50 to-emerald-100 text-emerald-900">
      <IslamicPattern />

      <div className="relative z-10 max-w-xl space-y-4 text-center">
        <div className="font-bold text-8xl">404</div>
        <div className="text-2xl font-semibold md:text-3xl">
          🕌 Page Not Found
        </div>
        <p className="text-base text-emerald-700 md:text-lg">
          سبحان الله! The page you're looking for may have been moved or never
          existed.
        </p>
        <p className="text-sm text-emerald-600">
          Let’s return to the path of knowledge, in shaa Allah! 🌙
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 mt-4 text-white transition rounded-full shadow bg-emerald-600 hover:bg-emerald-700"
        >
          🏡 Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
