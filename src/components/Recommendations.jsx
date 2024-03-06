import React from "react";
import testimonialData from "../data/testimonials";
import backgroundSVG from "../assets/circles-black.svg";

const Recommendations = () => {
  return (
    <section className="web-section">
      <div className="paragraph-container">
      <img className="svg-background" src={backgroundSVG} alt="" />
      <h1>Say What..?!</h1>
        {testimonialData.content.map((testimonial) => {
          return (
            <div key={testimonial.id} className="recommendation">
              <p>"{testimonial.highlight}"</p>
              <p className="author">{testimonial.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Recommendations;
