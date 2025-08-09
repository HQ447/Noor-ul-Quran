import React, { useEffect } from "react";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import Faqs from "./Faqs";
import whatsapp from "../../../assets/w2.png";
import { useLocation } from "react-router";
import { CiChat1 } from "react-icons/ci";

function Home() {
  const phoneNumber = "923411918094";
  const message = "Assalam O Alikum! I’m interested in your services.";
  const encodedMessage = encodeURIComponent(message);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 flex items-center justify-center transition-all bg-teal-500 rounded-full hover:scale-105 right-10 bottom-7 md:bottom-10 w-13 h-13"
      >
        <CiChat1 className="text-2xl text-white" />
        {/* <img src={whatsapp} alt="" /> */}
      </a>
      <Hero />
      <ChooseUs />
      <Testimonial />
      <Faqs />
    </div>
  );
}

export default Home;
