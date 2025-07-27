import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Reset() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("Reset_email");

  useEffect(() => {
    if (!email) navigate("/forgot");
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BASE_URL = `http://localhost:8000`;

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(`${BASE_URL}/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("Password reset");
      localStorage.removeItem("Reset_email"); // cleanup
      navigate("/admin-Login");
    } else {
      alert(data.message || "Reset failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Reset Password</h2>

        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Reset Password
        </button>
        <Link className="flex justify-end w-full text-sm " to={"/admin-Login"}>
          Back to Login?
        </Link>
      </form>
    </div>
  );
}
