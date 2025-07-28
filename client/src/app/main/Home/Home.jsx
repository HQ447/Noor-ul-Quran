import React from "react";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import Faqs from "./Faqs";

function Home() {
  return (
    <div className="px-2 sm:px-6 lg:px-13">
      <Hero />
      <ChooseUs />
      <Testimonial />
      <Faqs />
    </div>
  );
}

export default Home;
