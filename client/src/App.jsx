import React from "react";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Main from "./app/main/Main";
import Dashboard from "./app/dashboard/Dashboard";
import Home from "./app/main/Home/Home";
import Contact from "./app/main/Contact/Contact";
import About from "./app/main/About/About";
import Faqs from "./app/main/Home/Faqs";
import Courses from "./app/main/Courses/Courses";
import Fee from "./app/main/FeePlans/Fee";
import Books from "./app/main/Books/Books";
import RegStudent from "./app/main/student Reg/RegStudent";
import AdminLogin from "./app/dashboard/AdminLogin";
import RegisterAdmin from "./app/dashboard/RegisterAdmin";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/library" element={<Books />} />
          <Route path="/register-student" element={<RegStudent />} />

          <Route path="/fee" element={<Fee />} />
        </Route>

        <Route path="/admin-Login" element={<AdminLogin />} />
        <Route path="/admin-Register" element={<RegisterAdmin />} />
        <Route path="/admin-dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
