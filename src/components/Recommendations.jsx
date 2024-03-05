import React from "react";
import testimonialData from "../data/testimonials";

const Recommendations = () => {
  return (
    <section className="web-section">
      <div className="paragraph-container">
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
