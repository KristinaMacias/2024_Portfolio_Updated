import React, { useState } from "react";
import technologies from "../data/tech";

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="main-section section-variant">
      <h1>Tech Stack</h1>
      <div className="tech-container">
        {technologies.content.map((tech) => {
          return (
            <div key={tech.id} className="tech">
              <p style={{ color: tech.category === selectedCategory ? '#ffa3afff' : "" }}>
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
      <h3>Select to Filter Tech:</h3>
      <div className="selection-container">
        <div className="btn front-end" onClick={() => handleCategoryClick("Front-End")}>
          Front-End
        </div>
        <div className="btn back-end" onClick={() => handleCategoryClick("Back-End")}>
          Back-End
        </div>
        <div className="btn version-control" onClick={() => handleCategoryClick("Version Control")}>
          Version Control
        </div>
        <div className="btn package-management" onClick={() => handleCategoryClick("Package Management")}>
          Package Management
        </div>
        <div className="btn geospatial" onClick={() => handleCategoryClick("Geospatial")}>
          Geospatial
        </div>
      </div>
    </section>
  );
};

export default TechStack;
