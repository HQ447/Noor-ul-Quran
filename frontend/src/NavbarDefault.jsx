import { NavLink } from "react-router-dom";
import { MdOutlineModeNight } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaBars } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types, no-unused-vars
function NavbarDefault({ setShowNavbar, darkmode, setDarkmode }) {
  return (
    <div
      className={`${
        darkmode ? "bg-[#292929c7] text-white" : "bg-white"
      } fixed  w-full transition-all rounded-full top-3 z-50 shadow-md    flex justify-between -md:px-8 -xsm:px-3  px-16 py-3  items-center`}
    >
      <div className="flex items-center gap-1">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/049/955/379/small_2x/a-graduation-cap-and-books-on-a-black-background-png.png"
          alt=""
          className="w-5"
        />
        <NavLink to={""} className="text-lg font-semibold -xsm:text-sm">
          e Islamic <span className="">Center</span>
        </NavLink>
      </div>
      <div className="flex items-center gap-7 text-sm -sm:hidden">
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"/about"}>About Us</NavLink>
        <NavLink to={"/downloads"}>Resources</NavLink>
        <NavLink to={"/profile"}>Instructor</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        {darkmode ? (
          <MdOutlineWbSunny
            className="text-xl"
            onClick={() => setDarkmode((prev) => !prev)}
          />
        ) : (
          <MdOutlineModeNight
            className="text-xl"
            onClick={() => setDarkmode((prev) => !prev)}
          />
        )}

        <FaBars
          className="text-xl hidden -sm:flex"
          onClick={() => setShowNavbar((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default NavbarDefault;
