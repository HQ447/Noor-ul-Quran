import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("reset_email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BASE_URL = `http://localhost:8000/`;

    const res = await fetch(`${BASE_URL}/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    console.log(data);

    if (data.success) {
      navigate("/reset");
    } else {
      alert(data.message || "Invalid OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Verify OTP</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Enter OTP</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-purple-600 rounded hover:bg-purple-700"
        >
          Verify OTP
        </button>
        <Link className="flex justify-end w-full text-sm " to={"/admin-Login"}>
          Back to Login?
        </Link>
      </form>
    </div>
  );
}
