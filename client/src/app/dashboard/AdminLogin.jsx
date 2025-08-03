import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(""); // Added error state
  const navigate = useNavigate();
  // Mock navigation function for demo

  const BASE_URL = `http://localhost:8000`;

  const handleSubmit = async (e) => {
    setloading(true);
    setError(""); // Clear previous errors
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/auth/admin-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setloading(false);
        navigate("/");
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("userImg", data.user.img);
        localStorage.setItem("user", data.user);
      } else {
        // Handle error response
        setloading(false);
        setError(
          data.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      setloading(false);
      console.error("Login error:", error);
      setError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-12 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23065f46' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute w-20 h-20 rounded-full top-10 left-10 bg-emerald-200 opacity-20 animate-pulse"></div>
      <div className="absolute w-16 h-16 delay-1000 bg-green-300 rounded-full bottom-10 right-10 opacity-20 animate-pulse"></div>
      <div className="absolute w-12 h-12 delay-500 bg-teal-200 rounded-full top-1/3 right-20 opacity-20 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Islamic Geometric Border */}
        <div className="overflow-hidden border shadow-2xl bg-white/90 backdrop-blur-sm rounded-2xl border-emerald-100">
          {/* Header with Islamic Pattern */}
          <div className="relative px-8 py-6 bg-gradient-to-r from-emerald-600 to-green-600">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.8'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
              }}
            ></div>

            {/* Islamic Crescent and Star Symbol */}
            <div className="flex items-center justify-center mb-2">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                  <path
                    fill="currentColor"
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                    opacity="0.8"
                  />
                  <path
                    fill="currentColor"
                    d="M9 12C9 16.5 5.5 20 1 20C2.5 20 4 19 5 17.5C6 16 6.5 14 6.5 12C6.5 10 6 8 5 6.5C4 5 2.5 4 1 4C5.5 4 9 7.5 9 12Z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-white">
              Admin Portal
            </h2>
            <p className="mt-1 text-sm text-center text-emerald-100">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>

          <div className="p-8 space-y-6">
            {/* Error Message Display */}
            {error && (
              <div className="p-4 border border-red-200 rounded-xl bg-red-50">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm font-medium text-red-700">{error}</p>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="admin@example.com"
                    className="w-full py-3 pl-12 pr-4 transition-all duration-300 border-2 outline-none border-emerald-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 bg-white/70 backdrop-blur-sm"
                  />
                  <div className="absolute transform -translate-y-1/2 left-4 top-1/2 text-emerald-500">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter secure password"
                    className="w-full py-3 pl-12 pr-4 transition-all duration-300 border-2 outline-none border-emerald-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 bg-white/70 backdrop-blur-sm"
                  />
                  <div className="absolute transform -translate-y-1/2 left-4 top-1/2 text-emerald-500">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:from-emerald-700 hover:to-green-700 focus:ring-4 focus:ring-emerald-200 transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-700">
                  <svg
                    className="w-5 h-5 mr-2 text-white animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Authenticating...</span>
                </div>
              )}
              <span className={loading ? "opacity-0" : "opacity-100"}>
                Sign In
              </span>
            </button>

            <div className="text-center">
              <NavLink
                to={"/forgot"}
                className="text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer text-emerald-600 hover:text-emerald-800 hover:underline"
              >
                Forgot your password?
              </NavLink>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-emerald-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">
                  New to our platform?
                </span>
              </div>
            </div>

            <div className="text-center">
              <NavLink
                to={"/admin-Register"}
                className="inline-flex items-center justify-center w-full py-3 px-6 border-2 border-emerald-600 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-[1.02] focus:ring-4 focus:ring-emerald-100 bg-transparent cursor-pointer"
              >
                Create Admin Account
              </NavLink>
              <NavLink
                to={"/"}
                className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold transition-all duration-300 bg-transparent cursor-pointer border-emerald-600 text-emerald-600 rounded-xl"
              >
                Back
              </NavLink>
            </div>
          </div>

          {/* Footer with Islamic blessing */}
          <div className="px-8 py-4 border-t bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-100">
            <p className="text-xs font-medium text-center text-emerald-600">
              May Allah bless your endeavors • اللَّهُمَّ بَارِكْ
            </p>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 text-emerald-600">
            <div className="w-4 h-0.5 bg-emerald-300"></div>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                opacity="0.6"
              />
            </svg>
            <div className="w-4 h-0.5 bg-emerald-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
