import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useNavigate } from "react-router";
import { isTokenExpired } from "../../../utils/authUtils";
import NotFound from "../main/Not Found/NotFound";

function Dashboard() {
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

  if (!role) return <NotFound />;

  return (
    <div className="flex ">
      <Sidebar className="md:w-[30%]" />
      <div className="flex-1 h-screen overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
