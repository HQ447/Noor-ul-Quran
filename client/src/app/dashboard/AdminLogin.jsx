import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = `http://localhost:8000/auth`;

  const handleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();

    const res = await fetch(`${BASE_URL}/admin-login`, {
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
    }
    // Handle login logic here (token storage, redirect, etc.)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Admin Login</h2>

        <div className="mb-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="ali@gmail.com"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter Secure Password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          {`${loading ? "Loading..." : "Login"}`}
        </button>

        <Link className="flex justify-end w-full text-sm " to={"/forgot"}>
          Forgot Password?
        </Link>
        <p className="mt-4 text-sm text-center">
          Don't have an account?
          <Link to="/admin-register" className="text-blue-600 hover:underline">
            Create Admin Account
          </Link>
        </p>
      </form>
    </div>
  );
}
