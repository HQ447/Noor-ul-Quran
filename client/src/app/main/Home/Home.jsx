import React from "react";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import Faqs from "./Faqs";
import whatsapp from "../../../assets/w2.png";

function Home() {
  const phoneNumber = "923411918094";
  const message = "Assalam O Alikum! I’m interested in your services.";
  const encodedMessage = encodeURIComponent(message);
  return (
    <div className="">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsapp}
          alt=""
          className="fixed z-50 w-10 h-10 transition-all rounded-full cursor-pointer hover:scale-95 hover:rotate-180 right-6 bottom-3 md:w-15 md:h-15 md:right-10 md:bottom-7"
        />
      </a>
      <Hero />
      <ChooseUs />
      <Testimonial />
      <Faqs />
    </div>
  );
}

export default Home;
