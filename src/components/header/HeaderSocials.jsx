import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ujjal-kumar-roy-9385a71a7/"
        target="blank"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/Ujjal-ENG/Ujjal-ENG">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/ujjal.roy.7862">
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
