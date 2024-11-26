import React from "react";
import FOUNDERIMG from "../../utils/images/founder1.jpg";

const Founders = () => {
  return (
    <div className="px-2 my-5 bg-[#FFFDD0] py-5">
      <h2 className="text-3xl font-bold ml-10 my-4 tracking-wide uppercase">
        Founders
      </h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-5 w-80 ml-10"></div>
      <div className="p-3 flex justify-evenly items-center flex-wrap">
        <div className="lg:w-4/12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe
            temporibus ad voluptatum sit possimus velit distinctio ducimus
            beatae soluta commodi earum minus, dicta ex unde, exercitationem
            deserunt cumque maxime!
          </p>
          <button className="bg-[#FFBF00] px-3 py-2 rounded-md my-4 hover:transition hover:duration-200 hover:scale-110">
            Read More
          </button>
        </div>
        {/* Founder - 1 */}
        <div className="lg:w-3/12 mt-4">
          <div className="flex flex-col justify-center items-center">
            <img
              src={FOUNDERIMG}
              className="h-40 rounded-full border-8 border-white"
              alt=""
            />
            <h2 className="text-3xl font-bold italic ">Ar. Saurabh Chhillar</h2>
            <p className="text-sm">(B.arch, M.Plan)</p>
            <p className="text-sm">Spatial Planner & Project Management</p>
          </div>
        </div>
        {/* founder - 2 */}
        <div className="lg:w-3/12 mt-4 flex">
          <div className="flex flex-col justify-center items-center">
            <img
              src={FOUNDERIMG}
              className="h-40 rounded-full border-8 border-white"
              alt=""
            />
            <h2 className="text-3xl font-bold italic">Ar. Nihit Dawar</h2>
            <p className="text-sm">(B.arch)</p>
            <p className="text-sm">Creative Head and Client Acquisition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
