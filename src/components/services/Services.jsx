import React from "react";
import "./services.css";

import Service from "./Service";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__hand">
            <h3>UI/UX Design</h3>
          </div>
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </article>

        <article className="service">
          <div className="service__hand">
            <h3>Web Devlopment</h3>
          </div>
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </article>

        <article className="service">
        <div className="service__hand">
            <h3>Softawre Development</h3>
          </div>
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </article>
      </div>
    </section>
  );
};

export default Services;
