import React from "react";
import "./experience.css";

import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills i Offered for people</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Bootstarp</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Tailwind CSS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Material UI</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>TailBox</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>React JS</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Next JS</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JavaScipt</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Node Js</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Express Js</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JAVA</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>PHP Laravel</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Sanitiy.io</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Starpy</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
