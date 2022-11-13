import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ujjal
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testmonials">Testmonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
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
    </footer>
  );
};

export default Footer;
