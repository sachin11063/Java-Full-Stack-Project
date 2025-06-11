import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>About This Project</h2>
        <p>
          The <strong>Carbon Footprint Calculator</strong> is a simple, interactive tool designed to help individuals
          understand and measure their impact on the environment based on their daily lifestyle habits.
        </p>
        <p>
          From how much electricity you use, how far you drive, the flights you take, to your food choices and
          shopping behaviors — every action has a carbon cost. This application allows you to estimate your
          monthly carbon emissions in a few quick steps.
        </p>
        <p>
          Our goal is to create awareness and empower people to make informed decisions that contribute to a
          sustainable and eco-friendly future. Whether you're just curious or committed to reducing your
          carbon footprint, this tool offers valuable insights tailored to your routine.
        </p>
        <p className="quote">“The greatest threat to our planet is the belief that someone else will save it.” – Robert Swan</p>
      </div>
      <div className="about-image">
        <img src="https://carbontrail.net/wp-content/uploads/2024/07/N1.png" alt="Earth with green leaves" />
      </div>
    </div>
  );
};

export default About;
