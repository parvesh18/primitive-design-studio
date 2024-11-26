import React from "react";
import {
  Carousel,
  CarouselText,
  HiThere,
  About,
  Studio,
  ContactForm,
} from "./home";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <CarouselText />
      <HiThere />
      <About />
      <Studio />
      <ContactForm />
    </div>
  );
};

export default HomePage;
