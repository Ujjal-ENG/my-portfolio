import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Filota - Financial Admin Dashboard",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19880901-Filota-Financial-Admin-Dashboard",
  },
  {
    id: 2,
    image: IMG2,
    title: "Internet Security Web Design",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19880101-Internet-Security-Web-Design",
  },
  {
    id: 3,
    image: IMG3,
    title: "Skincare Product Website",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19881737-Skincare-Product-Website",
  },
  {
    id: 4,
    image: IMG4,
    title: "Software Development Website Design",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19880422-Software-Development-Website-Design",
  },
  {
    id: 5,
    image: IMG5,
    title: "Trek - Bike Shop Website",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19877415-Trek-Bike-Shop-Website",
  },
  {
    id: 6,
    image: IMG6,
    title: "Web Design: Header Exploration",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19877540-Web-Design-Header-Exploration",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data &&
          data.map(({ id, image, title, github, demo }) => (
            <>
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portifolio__item-cta">
                  <a href={github} className="btn" target="blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="blank">
                    Live Demo
                  </a>
                </div>
              </article>
            </>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
