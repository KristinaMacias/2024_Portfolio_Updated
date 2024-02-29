import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content-container">
      <h1>
        Hello, I'm <span className="special-text">Kristina</span>
      </h1>
      <p>Ready to bring your projects to life? Let's work together!</p>
      <div className="button-box">
        <button>
          <a
            href="https://www.linkedin.com/in/maciaskristina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View LinkedIn
          </a>
        </button>
        <button className="secondary-btn">
          <a
            href="https://github.com/KristinaMacias"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </a>
        </button>
      </div>
      </div>
    </section>
  );
};

export default Hero;
