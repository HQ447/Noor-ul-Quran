/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

function ResponsiveBar({ showNavbar, setShowNavbar }) {
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setShowNavbar(false);
      }
    }

    if (!showNavbar) return;

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNavbar, setShowNavbar]);

  return (
    <div>
      <div
        ref={sidebarRef}
        className={`${
          showNavbar ? "flex top-11" : "hidden -top-52"
        } sm:hidden fixed z-[40] rounded-lg responsiveBar backdrop-blur-sm bg-[#ffffffa2] w-full h-fit py-5`}
      >
        <div className="flex flex-col justify-center w-full items-center text-sm gap-3">
          <NavLink
            to={""}
            className={" py-2 w-full text-center rounded-md shadow-md"}
            onClick={() => setShowNavbar(false)}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={" py-2 w-full text-center rounded-md shadow-md"}
            onClick={() => setShowNavbar(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to={"/downloads"}
            className={" py-2 w-full text-center rounded-md shadow-md"}
            onClick={() => setShowNavbar(false)}
          >
            Resources
          </NavLink>
          <NavLink
            to={"/profile"}
            className={" py-2 w-full text-center rounded-md shadow-md"}
            onClick={() => setShowNavbar(false)}
          >
            Instructor
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveBar;
