// File: pages/Home.jsx

import React from "react";
import "./HeroSection.css";
import HomeImage from './character.png';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>INNOVATE</h1>
          <h1 className="green-text">AUTOMATE</h1>
          <h1>EVOLVE</h1>
        </div>
        <div className="hero-image">
          <img src={HomeImage} alt="Hero Warrior" />
        </div>
        <button className="faq-button">FAQ</button>
      </section>
    </div>
  );
};

export default Home;
