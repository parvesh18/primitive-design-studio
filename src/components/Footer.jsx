import React from "react";
import LOGO from "../utils/images/logo.png";
import { RiMessage2Fill } from "react-icons/ri";
import { RiContactsBook3Fill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#333333] text-white py-10 px-10 lg:px-20 flex flex-col lg:flex-row md:justify-evenly items-center gap-y-10 tracking-wider">
      <div className="w-2/3 lg:w-2/5 flex items-center gap-5">
        <div className="rounded-full overflow-hidden">
          <img
            src={LOGO}
            className="w-20 hover:scale-125 transition ease-in duration-500 cursor-pointer"
            alt="company-logo"
          />
        </div>
        <p>Copyright 2024 - TOD | Privacy Policy</p>
      </div>
      <div className="flex flex-col gap-y-2 w-2/3 lg:w-2/5 ml-10 lg:ml-0 ">
        <div className="my-1 flex gap-2">
          <RiMessage2Fill className="text-2xl" />
          <a
            href="mailto:studio@toddesign.in"
            className="hover:text-slate-200 tracking-widest"
          >
            studio@toddesign.in
          </a>
        </div>
        <div className="my-1 flex gap-2">
          <RiContactsBook3Fill className="text-2xl" />
          <a href="tel:+91-011-26501923" className="hover:text-slate-200">
            +91-011-26501923
          </a>
        </div>
        <div className="my-1 flex gap-2">
          <FaHouse className="text-2xl" />
          <a
            href="https://www.google.com/maps/place/Club+Drive+Road/@28.4881198,77.1441636,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1f8bb4bd6739:0xb24fb06a6b53aa73!8m2!3d28.4881151!4d77.1467385!16s%2Fg%2F11rwp8l9br?authuser=0&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="hover:text-slate-200"
          >
            3/1, Club Drive Road, Ghitorni,New Delhi 110030
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
