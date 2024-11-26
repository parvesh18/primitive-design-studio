import React from "react";
import TeamMember from "../../utils/constant/team";
import TeamMemberCard from "./TeamMemberCard";

const Team = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold ml-10 my-4 tracking-wide">
        MEET THE TEAM
      </h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
      <div className="bg-white py-10 mx-10">
        <ul
          role="list"
          className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-y-16 xl:col-span-2"
        >
          {TeamMember.map(({ name, imageUrl, role }, index) => (
            <TeamMemberCard
              key={index}
              name={name}
              imageUrl={imageUrl}
              role={role}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
