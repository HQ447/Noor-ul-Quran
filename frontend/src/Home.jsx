/* eslint-disable react/prop-types */
import Courses from "./Courses";
import shape from "./shape.png";
import { LuTimer } from "react-icons/lu";
import { IoIosPerson } from "react-icons/io";
import { RiUserCommunityLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Home({ darkmode }) {
  return (
    <div className={`${darkmode ? "bg-[#171717] text-white" : ""} w-full `}>
      <div className="main  relative w-full h-[500px] bg-red-500">
        <img
          src="https://images.pexels.com/photos/8522614/pexels-photo-8522614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="error "
          className=" w-full h-full absolute object-cover "
        />
        <div className="w-full flex flex-col justify-center items-center h-full relative z-20 bg-[#0b180898]">
          <h1 className="text-4xl w-[50%] -sm:w-[70%] -xsm:w-[80%] -xsm:text-2xl text-center text-white font-semibold">
            Transforming Lives Through Online Quranic Education.
          </h1>
          <NavLink
            to={"/about"}
            className="bg-[#e30707] mt-4 px-4 py-2 text-white text-sm rounded-md"
          >
            Explore More
          </NavLink>
        </div>
        <img
          src={shape}
          alt="error 404"
          className={`w-full absolute bottom-0 z-20 ${
            darkmode ? "h-8 " : "h-32"
          } `}
        />
      </div>

      <div
        className={` ${
          darkmode ? "bg-[#171717] text-white" : ""
        } flex flex-col w-full my-10`}
      >
        <div className="w-full flex flex-col text-center text-3xl -xsm:text-lg mb-4 font-semibold">
          <h1> Our Features</h1>
          <p className="!text-sm font-normal mt-2">
            Explore the Major Feature of our Acadmey.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center gap-6">
          <div className="flex w-[20%] -sm:w-[45%] -xsm:w-[80%] gap-1 text-center shadow-md border shadow-[#b0b0b0] flex-col justify-center items-center px-4 py-5 rounded-md">
            <LuTimer className="text-5xl rounded-full bg-green-400 text-white p-2" />
            <h1 className=" font-semibold my-1">Flexible Timings</h1>
            <p className="text-sm ">
              Classes are scheduled according to the students availability.
            </p>
          </div>
          <div className="flex w-[20%] -sm:w-[45%] -xsm:w-[80%] gap-1 text-center shadow-md border shadow-[#b0b0b0] flex-col justify-center items-center px-4 py-5 rounded-md">
            <IoIosPerson className="text-5xl rounded-full bg-red-400 text-white p-2" />
            <h1 className=" font-semibold my-1">Certified Teachers</h1>
            <p className="text-sm ">
              Qualified male and female teachers who specialize in Quranic and
              Islamic studies.
            </p>
          </div>
          <div className="flex w-[20%] -sm:w-[45%] -xsm:w-[80%] gap-1 text-center shadow-md border shadow-[#b0b0b0] flex-col justify-center items-center px-4 py-5 rounded-md">
            <RiUserCommunityLine className="text-5xl rounded-full text-white bg-indigo-400 p-2" />
            <h1 className=" font-semibold my-1">One-on-One Sessions</h1>
            <p className="text-sm ">
              Personalized attention through individual classes.
            </p>
          </div>
        </div>
      </div>

      <Courses />
    </div>
  );
}

export default Home;
