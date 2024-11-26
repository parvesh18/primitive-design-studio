import React from "react";
import BGIMG from "../utils/images/contact-page-bg.jpg";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="relative mt-20">
      <div className=" overflow-hidden">
        <img
          src={BGIMG}
          className="w-full object-cover h-[600px]"
          alt="background-img"
        />
      </div>
      <div className="absolute top-3 text-white lg:mt-16">
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:my-10">
          <div className="w-2/3 lg:w-2/5 ">
            <h2 className="text-2xl font-bold ml-2 my-4 tracking-wide">
              CONTACT US
            </h2>
            <div className="border-b-2 border-b-[#FFBF00] mb-4 lg:mb-10 w-60 ml-4 "></div>
            <p className="text-xl lg:text-3xl lg:leading-10 lg:tracking-widest">
              We’re always happy to meet face to face or start a conversation
              online.
            </p>
          </div>
          <div className="w-2/3 lg:w-2/5 flex flex-col gap-y-3">
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="Full Name"
              autoComplete="given-name"
              className="block w-full lg:w-3/4  rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 placeholder:tracking-widest focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
            />
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              placeholder="Phone Number"
              autoComplete="tel"
              className="block w-full lg:w-3/4 rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 placeholder:tracking-widest focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="block w-full lg:w-3/4 rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 placeholder:tracking-widest focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              className="block w-full lg:w-3/4 rounded-sm border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 placeholder:tracking-widest focus:ring-2 focus:ring-inset focus:ring-[#FFBF00] sm:text-sm/6"
              defaultValue={""}
            />
            <button
              type="submit"
              className="block w-full lg:w-3/4 rounded-sm bg-[#FFBF00] px-3.5 py-2.5 text-center tracking-widest font-semibold shadow-sm hover:scale-105 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFBF00]"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div className="w-5/6 my-10">
          <h2 className="text-2xl font-bold ml-2 my-2 tracking-wide">CARRER</h2>
          <div className="border-b-2 border-b-[#FFBF00] mb-10 w-60 ml-4 "></div>
          <p className="tracking-wider">
            We at TOD are always looking for young dynamic and creative fresh
            minds for designing something out of the Box.If you feel you have
            the Dot in you.....
          </p>
          <p className="tracking-wider">
            Send us your Creative Design Portfolio and Resume at:
          </p>
          <div className="flex items-center gap-2 mt-2">
            <MdEmail className="text-xl" />
            <a
              href="mailto:studio@toddesign.in"
              className="hover:text-gray-500 tracking-widest"
            >
              studio@toddesign.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
