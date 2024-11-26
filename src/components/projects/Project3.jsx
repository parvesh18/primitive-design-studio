import React, { useEffect } from "react";
import IMG2 from "../../utils/images/projects/img2.png";
import ContactForm from "../ContactForm";

const Project3 = () => {
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
                src={IMG2}
                alt="project-img"
              />
            </div>
            <div>
              <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                FUSION Bar and Lounge, Rohtak, Haryana
              </p>
              <p className="mt-3 tracking-wide">
                Fusion Bar and Lounge is the premier destination for
                sophisticated nightlife and exceptional dining.
              </p>
              <p className="mt-3 tracking-wide">
                The establishment is dedicated to providing Visitors with a
                unique and unforgettable experience, combining the best of both
                worlds: a chic bar and a stylish lounge.
              </p>
              <p className="mt-3 tracking-wide">
                All hardwood material and top class furniture. Custom made Bar
                Counter from jodhpur and handcrafted ceiling.
              </p>
              <p className="mt-3 tracking-wide">
                All walls are decorated and highlighted with hand made paintings
                logos and graffitis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Project3;
