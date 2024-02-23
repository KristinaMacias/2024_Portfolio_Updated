import React from "react";
import downArrow from "../assets/down-arrow.svg";

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Kristina</h1>
      <h1>
      I am a <span className="special-text">Full Stack</span>
      </h1>
      <h1>Web Developer</h1>
      <div className="button-box">
        <button>
          <a href="https://www.linkedin.com/in/maciaskristina/">LinkedIn</a>
        </button>
        <button>
          <a href="https://github.com/KristinaMacias">GitHub</a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
