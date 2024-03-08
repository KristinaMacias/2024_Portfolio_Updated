import React from "react";
import circlesSVG from "../assets/circles-black.svg";
import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";

const Hero = () => {
  return (
    <section className="hero web-section">
      <div className="hero-container">
        <img className="svg-background" src={circlesSVG} alt="" />
        <div className="greeting-container">
          <h2 className="color-primary">Hi there! I'm </h2>
          <h1>Kristina Macias.</h1>
          <div className="title-container">
            <h2>
              Full Stack Developer.{" "}
              <span className="color-secondary">GIS Nerd.</span>
            </h2>
          </div>
        </div>
        <div className="paragraph-container">
          <p>🚀 Passionate about learning, teaching & creating.</p>
          <p>
            💫 Focused on{" "}
            <span className="color-primary">
              React.js, PostgreSQL, Node.js, Express.js & GIS.
            </span>
          </p>
        </div>
        <div className="button-container">
          <button>
            <img className="btn-icon" src={linkedinIcon} alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/maciaskristina/">LinkedIn</a>
          </button>
          <button>
            <img className="btn-icon" src={githubIcon} alt="github icon" />
            <a href="https://github.com/KristinaMacias">GitHub</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
