import React from "react";
import kristinaPortrait from "../assets/kristina-portrait.png";
import circlesSVG from "../assets/circles-black.svg";

const About = () => {
  return (
    <section className="about web-section">
      <div className="about-container">
        <div className="card-right">
          <img id="portrait" src={kristinaPortrait} alt="Kristina Macias" />
        </div>
        <div className="card-left">
          <img
            className="svg-background-alt"
            src={circlesSVG}
            alt="background svg triangle design"
          />
          <h1>About Me</h1>
          <div className="paragraph-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              tempore eligendi ab odit vitae illum aliquid ipsum porro
              voluptatem. Dignissimos excepturi amet illum totam nobis magni
              ipsam alias quibusdam consectetur rem repellendus vitae odit
              voluptas sunt tenetur ex facere omnis inventore voluptates nostrum
              sequi, perferendis officiis distinctio. Tenetur voluptas nemo
              odit, sint praesentium soluta itaque perferendis commodi
              accusantium exercitationem, facere, fugiat quidem officiis id
              reprehenderit earum eveniet. Sunt minima sed nobis. Illum possimus
              dolore nostrum aperiam iure tempora eius debitis quisquam
              architecto maiores accusamus cum rem, odit ratione hic
              dignissimos, illo sint velit quidem saepe? Reiciendis quibusdam
              officia reprehenderit odit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
