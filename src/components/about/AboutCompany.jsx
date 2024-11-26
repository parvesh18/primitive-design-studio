import React from "react";

const AboutCompany = () => {
  return (
    <div className="my-10 mx-2 pb-10">
      <h2 className="text-3xl font-bold ml-10 my-4 tracking-wide uppercase">
        About Company
      </h2>
      <div className="border-b-2 border-b-[#FFBF00] mb-10 w-80 ml-10 "></div>
      <div className="mx-10 lg:mx-20">
        <p className="text-2xl text-yellow-500 font-semibold italic">
          "Architecture is a visual art, and the buildings speak for
          themselves." - <span className="text-black">Julia Morgan</span>
        </p>
        <p className="mt-3 tracking-wide">
          As a design firm we specialise in multidisciplinary design domains
          like Residence design, Retail design, exhibition design, Commercial
          Architecture, Interior design, and Museum Architecture with a focus on
          user experience.
        </p>
        <p className="mt-3 tracking-wide">
          We explore ways to engage the user, the way they move through the
          space. We like taking design to an extremely conceptual stage. We find
          inspiration in ordinary things, everyday events and chance encounters.
        </p>
        <p className="mt-3 tracking-wide">
          The firm takes a deeply contextual approach to its work and combines
          this with a strong focus on the tactile and sensory qualities of the
          space. Our design process looks at sustainability through the multiple
          lenses of cultural, social and environmental impact. There is an
          active engagement in integrating localised skills and resources with
          state-of-the art materials and technologies.
        </p>
        <p className="mt-3 tracking-wide">
          PDC is a design initiative founded by{" "}
          <span className="font-semibold">Ar. Nihit Dawar</span> and{" "}
          <span className="font-semibold">Ar. Saurabh Chhillar</span>.
        </p>
        <p className="mt-3 tracking-wide">
          For us every project is an opportunity to do something new and unique.
          We amalgamate the client’s vision and our understanding of design to
          create something that is an absolutely unique.
        </p>
        <p className="mt-3 tracking-wide">
          Working in a highly collaborative environment, our team combines
          distinct strengths over multiple domains to shape master plans,
          buildings, interiors and related endeavors, which are at the cutting
          edge of design thinking.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
