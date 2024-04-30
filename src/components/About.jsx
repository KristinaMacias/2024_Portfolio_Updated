import React from "react";
import kristinaPortrait from "../assets/kristina_lightbg.jpg";
import circlesSVG from "../assets/circles-black.svg";

const About = () => {
  return (
    <section className="about web-section">
      <div className="about-container">
        <div className="card-right">
          <img id="portrait" src={kristinaPortrait} alt="Kristina Macias" />
        </div>
        <div className="card-left">
          <img
            className="svg-background"
            src={circlesSVG}
            alt="background svg triangle design"
          />
          <h1>About Me</h1>
          <div className="paragraph-container">
            <p>
              Hi there! I'm Kristina. I'm a full-stack web developer and GIS
              nerd.{" "}
              <span className="color-primary">
                I currently work with React, PostgreSQL, Node.js, and
                Express.js.
              </span>
            </p>
            <p>
              After graduating from California State University, Long Beach, I
              worked as a GIS researcher for the City of Long Beach. During that
              time, I analyzed and mapped five years of LBPD data to better help
              multidisciplinary teams make policy decisions.
            </p>
            <p>
              I've always been interested in web development, so I decided to
              take the plunge and complete a coding bootcamp with El Camino
              College. Since then, I've mentored over 800 students in front-end
              development and worked as a technical curriculum developer,
              improving both the front-end and back-end curriculum.
            </p>
            <p>
              I'm passionate about creating accessible and inclusive web
              applications. I'm also a huge fan of maps, so I'm looking for ways
              to incorporate geospatial data into my projects. Currently,{" "}
              <span className="color-primary">
                I'm seeking a full-time position as a web developer. I'm excited
                to bring my unique background to a team that values creativity
                and innovation.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
