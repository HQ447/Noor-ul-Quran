import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterAdmin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const BASE_URL = `http://localhost:8000`;

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(`${BASE_URL}/auth/register-admin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, secret, password }),
    });

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      setLoading(false);
      navigate("/admin-Login");
    } else {
      setLoading(false);
    }
    // Handle registration logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">
          Admin Registration
        </h2>

        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ali Hamza"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ali@gmail.com"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="Enter Admin Secret"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Choose a Secure Password"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Your Password"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="mt-4 text-sm text-center">
          Already an admin?{" "}
          <Link to="/admin-login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
