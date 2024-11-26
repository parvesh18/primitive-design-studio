import React from "react";

const TeamMemberCard = ({ name, imageUrl, role }) => {
  return (
    <li key={name} className="flex items-start gap-x-6">
      <img
        alt="team-member-img"
        src={imageUrl}
        className="h-16 w-16 rounded-full"
      />
      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {name}
        </h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          {role}
        </p>
        <p>
          B.tech Civil from DTU, Delhi. Specialises in Construction Services and
          Site Management.
        </p>
      </div>
    </li>
  );
};

export default TeamMemberCard;
