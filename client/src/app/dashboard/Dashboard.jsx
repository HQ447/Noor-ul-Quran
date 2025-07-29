import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

function Dashboard() {
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
