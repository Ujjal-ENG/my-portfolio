import React from "react";
import "./about.css";
import ME from "../../assets/professional321 - Copy.jpg";
import Card from "./Card";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_img">
            <img src={ME} alt="aboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <Card
                h5="Experience"
                small="3+ Years Working Experience"
                Icon={FaAward}
              />
            </article>
            <article className="about_card">
              <Card h5="Clients" small="200+ Worldwide" Icon={FiUsers} />
            </article>
            <article className="about_card">
              <Card
                h5="Projects"
                small="80+ Compelted"
                Icon={VscFolderLibrary}
              />
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A tempora,
            sapiente eveniet illo dicta excepturi libero asperiores sunt earum
            at perferendis et voluptate eos est eaque unde amet deserunt
            veritatis omnis voluptates velit odit neque. Earum odio quae
            nesciunt repellat.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
