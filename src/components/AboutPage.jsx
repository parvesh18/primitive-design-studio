import React, { useEffect } from "react";
import { AboutCompany, Founders, Team, Studio, ContactForm } from "./about";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-28">
      <AboutCompany />
      <Founders />
      <Team />
      <Studio />
      <ContactForm />
    </div>
  );
};

export default AboutPage;
