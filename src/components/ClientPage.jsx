import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import clientLogo from "../utils/constant/client";
import feedbackInfo from "../utils/constant/feedback";

const ClientsPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (index + 1 < feedbackInfo.length) setIndex(index + 1);
      else setIndex(0);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div className="mt-28">
      {/* Clients Logo */}
      <div className="mx-5 sm:mx-10 mt-16">
        <h2 className="text-3xl font-bold ml-2 my-4 tracking-wide">
          OUR CLIENTS
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-4 "></div>
        <div className="flex flex-wrap gap-4 justify-center">
          {clientLogo.map((logo) => (
            <img
              src={logo}
              alt="client-logo-img"
              className="w-36 rounded-xl md:w-48 lg:w-64 border-[1px]"
            />
          ))}
        </div>
      </div>
      {/* Feedback */}
      <div>
        <h2 className="text-3xl uppercase font-bold ml-10 my-4 tracking-wide mt-10">
          Our Feedback
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
        <div className="w-full flex justify-center mt-10 ">
          <div className="w-[90%] md:w-8/12 flex flex-col justify-center items-center">
            <p className="text-2xl text-center font-cedarville">
              {feedbackInfo[index].message}
            </p>
            <h2 className="font-semibold italic self-end tracking-wider text-lg mt-6">
              - {feedbackInfo[index].name}
            </h2>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ClientsPage;
