import React, { useEffect } from "react";
import IMG4 from "../../utils/images/projects/img4.png";
import ContactForm from "../ContactForm";

const Project1 = () => {
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
                src={IMG4}
                alt="project-img"
              />
            </div>
            <div>
              <p className="text-2xl font-bold italic mt-2 text-yellow-800 tracking-wider">
                IAADB, Red Fort, Delhi
              </p>
              <p className="mt-3 tracking-wide">
                The Prime Minister, Shri Narendra Modi inaugurated the first
                Indian Art, Architecture & Design Biennale (IAADB) 2023 being
                held at Red Fort today. During the programme, the Prime Minister
                inaugurated the ‘Aatmanirbhar Bharat Centre for Design’ at Red
                Fort and the student Biennale- Samunnati. He also launched a
                Commemorative Stamp. Shri Modi also took a walkthrough of the
                exhibition showcased on the occasion. Indian Art, Architecture &
                Design Biennale (IAADB) will serve as an introduction to the
                Cultural Space in Delhi.
              </p>
              <p className="mt-3 tracking-wide">
                Addressing the gathering, the Prime Minister welcomed everyone
                to the World Heritage Site of the Red Fort and highlighted the
                historical significance of its courtyards which remain
                unwavering and indelible even though multiple generations have
                passed before and after India’s independence.
              </p>
              <p className="mt-3 tracking-wide">
                The Prime Minister said that every nation is endowed with
                symbols of its own that introduce the world to the country’s
                past and its roots. He emphasized the role of art, culture and
                architecture in forging the connection with these symbols.
                Referring to the capital city of Delhi as a treasure trove of
                symbols that provide a glimpse of the rich architectural
                heritage of India, the Prime Minister said that the organization
                of Indian Art, Architecture & Design Biennale (IAADB) in Delhi
                makes it special in ways more than one. He praised the works
                displayed in the exhibition and said that it is an amalgamation
                of colours, creativity, culture and community connection.
              </p>
            </div>
          </div>
          <div className="lg:border-l-2 border-yellow-800 my-20"></div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Project1;
