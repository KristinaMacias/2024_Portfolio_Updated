import React from "react";

const Hero = () => {
  return (
    <section className="hero web-section">
      <div className="content-container">
        <div className="greeting-container">
          <h2 className="color-primary">Hi there! I'm </h2>
          <h1>Kristina Macias.</h1>
          <div className="title-container">
            <h2>
              Full Stack Developer. <span className="color-secondary">GIS Nerd.</span>
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
          <button><a href="">LinkedIn</a></button>
          <button><a href="">GitHub</a></button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
