import React, { useState, useEffect } from "react";
import { Menu, X, User, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { isTokenExpired } from "../../utils/authUtils";
import logoImage from "../assets/logo1.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }

  useEffect(() => {
    const checkTokenExpiry = () => {
      const token = localStorage.getItem("token");
      if (token && isTokenExpired(token)) {
        handleLogout();
        navigate("/");
      }
    };
    const interval = setInterval(checkTokenExpiry, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <div className="lg:hidden ">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 rounded-md hover:text-green-800 hover:bg-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <img
                src={logoImage}
                alt=""
                className="w-8 h-8 rounded-full md:w-13 md:h-13"
              />
              <NavLink to={"/"} className="flex flex-col">
                <h1 className="text-xs font-bold text-gray-800 sm:text-base lg:text-xl">
                  Noor ul Quran
                </h1>
                <p className=" text-[6px] md:text-[10px] text-gray-600 sm:block sm:text-xs">
                  Distance Learning Academy
                </p>
              </NavLink>
            </div>

            {/* Desktop Nav Links */}
            <div className="items-center hidden space-x-8 lg:flex">
              {["", "courses", "fee", "library", "contact", "about"].map(
                (link) => (
                  <NavLink
                    key={link}
                    to={link}
                    className="relative font-semibold text-red-800 transition hover:text-green-800 group"
                  >
                    {link === ""
                      ? "Home"
                      : link.charAt(0).toUpperCase() + link.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-800 transition-all duration-200 group-hover:w-full"></span>
                  </NavLink>
                )
              )}
            </div>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-2 lg:gap-3">
              {role === "admin" ? (
                <>
                  <div
                    onClick={() => navigate("/admin-dashboard")}
                    className="flex items-center justify-center gap-2 px-3 py-1 bg-gray-100 rounded-full cursor-pointer sm:py-2"
                  >
                    <User className="hidden w-4 h-4 text-gray-600 sm:flex" />
                    <span className="text-[10px] capitalize sm:text-sm font-medium text-gray-800">
                      {name?.split(" ")[0]}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="items-center hidden gap-2 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-full sm:flex hover:bg-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className=" sm:inline">Logout</span>
                  </button>
                </>
              ) : role === "student" ? (
                <div className="px-3 py-2 text-green-800 bg-green-100 border border-green-200 rounded-full">
                  <p className="text-sm font-medium">✅ Registered</p>
                </div>
              ) : (
                <>
                  {/* Admin Login: Only on large screen */}
                  <NavLink
                    to="admin-Login"
                    className="hidden px-3 py-2 text-xs font-medium border border-green-500 rounded-sm green-500 lg:inline hover:bg-green-600 hover:text-white hover:shadow-lg"
                  >
                    Admin Login
                  </NavLink>

                  {/* Register Now: Always visible */}
                  <NavLink
                    to="register-student"
                    className="px-2 py-1 text-xs font-medium text-white bg-green-500 rounded-sm sm:px-3 sm:py-2 hover:bg-green-600 hover:shadow-lg"
                  >
                    Register Now
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={closeMobileMenu}
          ></div>
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600">
                <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
                  <span className="text-sm font-bold text-green-600">🕌</span>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-gray-800">Islamic Center</h2>
                <p className="text-xs text-gray-600">Learn Online Quran</p>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 text-gray-600 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="py-4">
            {[
              { to: "", label: "🏠 Home" },
              { to: "courses", label: "📚 Courses" },
              { to: "fee", label: "💰 Fee Plan" },
              { to: "library", label: "📖 Library" },
              { to: "contact", label: "📞 Contact" },
              { to: "about", label: "ℹ️ About" },
            ].map((link) => (
              <NavLink
                key={link.to}
                onClick={closeMobileMenu}
                to={link.to}
                className="block w-full px-6 py-3 font-semibold text-left text-red-800 transition-colors hover:text-green-800 hover:bg-gray-50"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Sidebar Bottom - Admin Login for non-authenticated users */}
          <div className="p-4 space-y-3 border-t">
            {!role ? (
              <NavLink
                to="admin-Login"
                onClick={closeMobileMenu}
                className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Admin Login
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600"
              >
                <LogOut className="w-4 h-4" />
                <span className=" sm:inline">Logout</span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
