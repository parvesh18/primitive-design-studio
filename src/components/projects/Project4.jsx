import React, { useEffect } from "react";
import IMG3 from "../../utils/images/projects/img3.png";
import ContactForm from "../ContactForm";

const Project4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-24">
      <div className="lg:mx-10">
        <div className="lg:flex flex-wrap justify-evenly gap-x-10">
          <div className="flex flex-col flex-wrap my-10 mx-10 lg:mx-2">
            <div className=" overflow-hidden rounded-md mb-4">
              <img
                className="h-[300px] md:h-[400px] w-full object-cover"
                src={IMG3}
                alt="project-img"
              />
            </div>
            <div>
              <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                Real Estate Office, TDI City, Sonipat, Haryana
              </p>
              <p className="mt-3 tracking-wide">
                Our real estate office project embodies innovation and
                functionality, creating a dynamic space that enhances the client
                experience and supports our team's success. Designed with
                meticulous attention to detail and client needs, this
                architectural achievement underscores our dedication to
                delivering exceptional real estate services in Sonipat, Haryana.
                It stands as a testament to our commitment to excellence and
                leadership in the real estate industry.
              </p>
              <p className="mt-3 tracking-wide">
                Our real estate office project exemplifies a harmonious blend of
                functionality, aesthetics, and client-centric design. This space
                serves as a hub for our real estate operations, providing a
                welcoming environment for clients and a productive workspace for
                their team.
              </p>
              <p className="mt-3 tracking-wide">
                It is blend of vibrant colours and unique design supporting the
                work atmosphere and client integration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Project4;
