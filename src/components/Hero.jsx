import React from "react";
import circlesSVG from "../assets/circles-black.svg";
import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";

const Hero = () => {
  return (
    <section className="hero web-section">
      <div className="content-container">
        <div className="greeting-container">
          <img className="svg-background" src={circlesSVG} alt="" />
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
          <p>🚀 Passionate about learning, creating & teaching.</p>
          <p>
            💫 Focused on{" "}
            <span className="color-primary">
              React.js, PostgreSQL, Node.js & Express.js.
            </span>
          </p>
        </div>
        <div className="button-container">
          <button>
            <img className="btn-icon" src={linkedinIcon} alt="linkedin icon" />
            <a href="">LinkedIn</a>
          </button>
          <button>
            <img className="btn-icon" src={githubIcon} alt="github icon" />
            <a href="">GitHub</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
