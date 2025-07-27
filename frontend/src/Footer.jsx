import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer({ darkmode }) {
  return (
    <section id="section-56-31" className="" style={{ backgroundColor: "" }}>
      <div
        className={`${
          darkmode ? " " : ""
        } flex px-8 relative bg-[#1717179d] text-white -xsm:px-3 gap-24 py-8 -xsm:py-8 justify-around flex-wrap `}
      >
        <img
          src="https://images.pexels.com/photos/7249367/pexels-photo-7249367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full h-full absolute top-0 object-cover -z-20"
        />
        <div className=" w-2/6 -xsm:w-full ">
          <h1 className=" text-2xl -xsm:text-lg">E Islamic Center</h1>
          <p className="my-3 -xsm:text-sm">
            E Islamic Center is an online educational setup to pursue the
            teachings of the Holy Quran.
          </p>
          <div className="flex gap-4 text-2xl ">
            <FaFacebook style={{ color: "#f27900" }} />
            <FaInstagram style={{ color: "#f27900" }} />
            <FaXTwitter style={{ color: "#f27900" }} />
          </div>
        </div>
        <div className="w-2/6 -xsm:w-full gap-3 flex flex-col">
          <h1 className=" text-2xl -xsm:text-lg">Contact Info</h1>
          <div className="flex gap-3 items-center -xsm:text-xs">
            <FaPhone className=" text-xl  -xsm:text-xs" />
            <p>+92 3445330016</p>
          </div>

          <div className="flex gap-3 items-center -xsm:text-xs">
            <MdEmail className="text-xl -xsm:text-xs" />
            <p>mtalha30016@gmail.com</p>
          </div>
          <div className="flex gap-3 items-center -xsm:text-xs">
            <FaLocationDot className="text-xl -xsm:text-xs" />
            <p>Islamabad , Kpk , Pakistan</p>
          </div>
        </div>
      </div>
      <div className=" text-center bg-green-800 py-2 ">
        <h1 className="px-3 text-white text-xs">
          Copyright © 2024. All rights reserved. E ISLAMIC CENTER.
        </h1>
      </div>
    </section>
  );
}

export default Footer;
