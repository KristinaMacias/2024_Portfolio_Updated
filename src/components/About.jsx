import React from "react";
import kristinaPortrait from '../assets/kristinamacias.jpg'

const About = () => {
  return (
    <section className="about-section section-variant">
      <div className="flex-left">
        <img id="portrait" src={kristinaPortrait} alt="headshot of kristina macias" />
      </div>
      <div className="flex-right">
        <h1>About Me</h1>
        <p>
          I'm Kristina, your friendly, neighborhood, full-stack web developer.
          I'm also a GIS nerd with a bachelor's degree in Geography and a minor
          in Environmental Science & Policy from California State Univeristy,
          Long Beach. I develop in React, Node.js, Express.js and PostgreSQL.
        </p>
        <p>
          I have a background in GIS analysis and data visualization with the
          City of Long Beach, as well as a background in coding currriculum
          development. I am passionate about creating, teaching and learning. I
          am a lifelong learner and I am always looking for new ways to grow and
          expand my skillset.
        </p>
      </div>
    </section>
  );
};

export default About;
