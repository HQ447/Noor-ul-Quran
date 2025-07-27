import React from "react";
import heroIcon from "../assets/header-logo.png";
import { NavLink, useNavigate } from "react-router";
import { useEffect } from "react";
import { isTokenExpired } from "../../utils/authUtils";

function Navbar() {
  const role = localStorage.getItem("role");
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

  return (
    <div className="flex items-center justify-between px-12 py-3 border">
      <div className="flex items-center gap-2">
        <img src={heroIcon} alt="" className="w-17" />
        <div className="flex flex-col">
          <h1 className="text-xl font-bold ">Islamic Center</h1>
          <p className="text-[10px]">Learn Online Quran with us</p>
        </div>
      </div>
      <div className="flex gap-5 font-bold text-red-800 nav ">
        <NavLink to="" className="hover:scale-95 hover:text-green-800">
          Home
        </NavLink>
        <NavLink to="courses" className="hover:scale-95 hover:text-green-800">
          Courses
        </NavLink>
        <NavLink to="fee" className="hover:scale-95 hover:text-green-800">
          Fee Plan
        </NavLink>
        <NavLink to="library" className="hover:scale-95 hover:text-green-800">
          Library
        </NavLink>
        <NavLink to="contact" className="hover:scale-95 hover:text-green-800">
          Contact
        </NavLink>
        <NavLink to="about" className="hover:scale-95 hover:text-green-800">
          About
        </NavLink>
      </div>
      <div className="flex gap-1">
        {role == "admin" ? (
          <div>
            <p>ADmin Name</p> <button onClick={handleLogout}>Logout</button>{" "}
            <button>Dashboard</button>
          </div>
        ) : role == "student" ? (
          <p>Registered Successfull</p>
        ) : (
          <div>
            <NavLink
              to={"register-student"}
              className="px-3 py-2 text-sm text-white bg-green-500 rounded-md"
            >
              Register Now
            </NavLink>
            <NavLink
              to={"admin-Login"}
              className="px-3 py-2 text-sm text-white bg-blue-500 rounded-md"
            >
              Admin Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
