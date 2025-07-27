import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./Footer";
import NavbarDefault from "./NavbarDefault";
import Downloads from "./Downloads";
import About from "./About";
import ReactWhatsapp from "react-whatsapp";
import ResponsiveBar from "./ResponsiveBar";
import { useState } from "react";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div className={`${darkmode ? "" : ""}`}>
      <NavbarDefault
        setShowNavbar={setShowNavbar}
        setDarkmode={setDarkmode}
        darkmode={darkmode}
      />
      <ResponsiveBar
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
        darkmode={darkmode}
      />

      <Routes>
        <Route path={""} element={<Home darkmode={darkmode} />} />
        <Route path={"/about"} element={<About darkmode={darkmode} />} />
        <Route
          path={"/downloads"}
          element={<Downloads darkmode={darkmode} />}
        />
        <Route path={"/profile"} element={<Profile darkmode={darkmode} />} />
      </Routes>
      <Footer darkmode={darkmode} />
      <div className="fixed z-50 bottom-7 right-7">
        <ReactWhatsapp number="+923445330016" message="Assalam  O Alikum!">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            }
            alt="loading error"
            className="transition-all  w-14 hover:scale-105"
          />
        </ReactWhatsapp>
        <a
          href="https://www.facebook.com/profile.php?id=61571015821547&mibextid=ZbWKwL"
          target="_blank"
        >
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
            }
            alt="error 404"
            className="transition-all cursor-pointer w-14 hover:scale-105"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
