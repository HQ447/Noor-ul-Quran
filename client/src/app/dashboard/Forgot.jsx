import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const BASE_URL = `http://localhost:8000`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("Reset_email", email); // ✅ moved here

    const res = await fetch(`${BASE_URL}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("OTP sent");
      navigate("/otp");
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Forgot Password</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Send OTP
        </button>
        <Link className="flex justify-end w-full text-sm " to={"/admin-Login"}>
          Back to Login?
        </Link>
      </form>
    </div>
  );
}
