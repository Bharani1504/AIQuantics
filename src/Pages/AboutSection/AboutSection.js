// File: components/About.jsx

import React from "react";
import "./AboutSection";
import AboutImage from "./shield.png"

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={AboutImage} alt="Cyber Shield" />
      </div>
      <div className="about-content">
        <p className="section-label">ABOUT US</p>
        <h2 className="about-heading">
          We're Not Just A Tech Company – We're Your Innovation Partner!
        </h2>
        <p className="about-description">
          Specializing in blending latest technology with visionary strategies to drive your
          success, all. the. time.
          <br />
          With our skills put together, you get an ensemble capable of doing anything and everything you need.
          <br />
          Join us on a journey where technology meets creativity and innovation fuels growth.
        </p>
        <button className="about-button">Read More</button>
      </div>
    </section>
  );
};

export default AboutSection;
