import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to the Carbon Footprint Calculator</h1>
          <p>
            Discover how your everyday choices impact the environment. Calculate your personal carbon footprint and take the first step toward a more sustainable future.
          </p>
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <button >Start Calculating</button>
          </a>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/189/189001.png"
            alt="Eco friendly earth"
          />
        </div>
      </section>

      <section className="features">
        <h2>Why Use This Calculator?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Raise Awareness</h3>
            <p>Understand how your daily activities contribute to carbon emissions.</p>
          </div>
          <div className="feature-card">
            <h3>Make Smarter Choices</h3>
            <p>Identify high-impact areas and reduce your environmental footprint.</p>
          </div>
          <div className="feature-card">
            <h3>Track Your Progress</h3>
            <p>Use the tool regularly to see how small changes add up over time.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
