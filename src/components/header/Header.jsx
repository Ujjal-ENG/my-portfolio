import React from "react";
import CTA from "./CTA";
import "./header.css";

import ME from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello!! This is</h5>
        <h1>Ujjal Kumar Roy</h1>
        <h5 className="text-light">Full Stack Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
