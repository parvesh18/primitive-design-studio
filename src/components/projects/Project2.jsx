import React, { useEffect } from "react";
import IMG1 from "../../utils/images/projects/img1.png";
import ContactForm from "../ContactForm";

const Project2 = () => {
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
                src={IMG1}
                alt="project-img"
              />
            </div>
            <div>
              <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                Robust Brakes, Barhana, Haryana
              </p>
              <p className="mt-3 tracking-wide">
                Our Industrial project exemplifies cutting-edge design and
                engineering excellence tailored for industrial applications.
                Located in Barhana, Haryana, this facility serves as a robust
                and efficient workspace that meets the specific operational
                needs of our client.
              </p>
              <p className="mt-3 tracking-wide">
                Our Industrial project demonstrates our expertise in delivering
                innovative architectural solutions tailored for industrial
                sectors. Designed with a focus on efficiency, functionality, and
                sustainability, this facility sets a benchmark for modern
                industrial infrastructure in Barhana.
              </p>
              <p className="mt-3 tracking-wide">
                It reflects our commitment to excellence and our ability to meet
                the unique challenges and requirements of industrial clients
                with bespoke architectural and engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Project2;
