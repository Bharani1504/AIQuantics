import React from "react";
import character from "./character.png";
import { LuMessageCircle } from "react-icons/lu";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">  
      <div className="hero-text">
        <h1>INNOVATE</h1>
        <h1 ><span className="green-text">AUTOMATE</span></h1>
        <h1>EVOLVE</h1>
      </div>
      <div className="hero-image">
        <img src={character} alt="Hero Warrior" />
      </div>
      <button className="faq-button"><LuMessageCircle  className="faqsvg"/>FAQ</button>
    </section>
  );
};

export default HeroSection;
