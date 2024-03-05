import React from "react";
import kristinaPortrait from "../assets/kristinamacias.jpg";

const About = () => {
  return (
    <section className="about-section">
        <div className="card-left">
          <h2>Kristina Macias</h2>
          <h4>Full Stack Developer</h4>
          <p>
            I am a full-stack web developer with a background in GIS analysis
            and data visualization. I develop in React, Node.js, Express.js and
            PostgreSQL.
          </p>
        </div>
        <div className="card-right">
          <img id="profile-thumbnail" src={kristinaPortrait} alt="" />
        </div>
    </section>
  );
};

export default About;
