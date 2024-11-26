import React from "react";
import ContactForm from "./ContactForm";
import projectInfo from "../utils/constant/projects";
import serviceInfo from "../utils/constant/service";
import { Link } from "react-router-dom";
// import { RiUserSettingsFill } from "react-icons/ri";
// import { FaShoppingBag } from "react-icons/fa";
// import { FaIndustry } from "react-icons/fa6";
// import { MdMuseum } from "react-icons/md";

const WorkPage = () => {
  return (
    <div className="mt-16">
      {/* -----Projects------ */}
      <div className="py-10">
        <h2 className="text-3xl uppercase font-bold ml-10 my-4 tracking-wide">
          Our Projects
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10"></div>
        <div className="flex flex-wrap gap-8 justify-center items-center mt-14">
          {projectInfo.map(({ url, name }, index) => (
            <Link
              to={"/project" + (index + 1)}
              key={index}
              className="relative flex items-center justify-center w-full cursor-pointer overflow-hidden group"
            >
              <img
                className="w-3/4 h-44 md:w-3/4 md:h-72 object-cover cursor-pointer rounded-lg group-hover:scale-110 transition-all duration-300"
                src={url}
                alt="project-image"
              />
              <h2 className="hidden group-hover:block transition-all duration-500 absolute bottom-0 opacity-95 mx-1 text-center px-2 bg-[#767474] text-white tracking-widest w-3/4 md:w-3/4 py-2">
                {name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      {/* ------Services---- */}
      <div className="bg-[#FFFDD0] py-10">
        <h2 className="text-3xl uppercase font-bold ml-10 my-4 tracking-wide">
          Our Service
        </h2>
        <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
        <div className="flex flex-wrap justify-center gap-5 gap-x-10">
          {serviceInfo.map((item, index) => (
            <div key={index} className="w-96 sm:w-72 lg:w-60 p-3">
              <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                {item.name}
              </p>
              <div className="tracking-wide ">
                <p className="mt-3 mb-2">{item.para1}</p>
                <p>{item.para2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default WorkPage;
