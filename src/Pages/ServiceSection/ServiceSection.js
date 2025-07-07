// File: components/Services.jsx

import React from "react";
import "./ServiceSection.css";
import { GoShieldLock } from "react-icons/go";
import { LuBrainCircuit } from "react-icons/lu";
import { IoIosCloudUpload } from "react-icons/io";
import { BiAbacus } from "react-icons/bi";
import { MdComputer } from "react-icons/md";
import { FiBox } from "react-icons/fi";

const serviceSection = [
  {
    icon: <GoShieldLock />,
    title: "Cybersecurity & Digital Transformation",
    description:
      "Our expertise includes risk assessment, threat mitigation, data protection, and advanced security measures to safeguard your digital assets and enhance your company’s operational efficiency.",
    highlight: true,
  },
  {
    icon: <LuBrainCircuit />,
    title: "AI & Business Intelligence",
    description:
      "Our services include custom chatbot development, AI and LLMs, data science solutions, and intelligent automation systems, focusing on data engineering, analytics, and business optimization.",
  },
  {
    icon: <IoIosCloudUpload />,
    title: "Cloud Solutions & Services",
    description:
      "Our Cloud Solutions & Services offer comprehensive architecture design, migration, deployment, and management across AWS, Azure, and Google Cloud, ensuring seamless integration and performance.",
  },
  {
    icon: <BiAbacus />,
    title: "Corporate Training & Development",
    description:
      "We offer top-notch corporate training in all technology domains, partnering with 22 top universities to deliver development courses for top-tier companies.",
  },
  {
    icon: <MdComputer />,
    title: "Technology Consulting & IT Services",
    description:
      "We provide IT services like strategic planning, digital transformation, system integration, and support to drive innovation and accelerate growth.",
  },
  {
    icon: <FiBox />,
    title: "Product & Software Development",
    description:
      "Our team specializes in transforming ideas into advanced products and software solutions, ensuring excellence throughout the development lifecycle.",
  },
];

const ServiceSection = () => {
  return (
    <section className="services-section">
      <p className="section-label">OUR SERVICE</p>
      <h2 className="section-title">
        We Offer A Spectrum Of Services From IT Consulting And Product Development To AI-Driven
        Solutions And Cloud Innovations. Our Expertise Turns Your Tech Dreams Into Reality.
      </h2>
      <div className="services-grid">
        {serviceSection.map((item, idx) => (
          <div
            className={`service-card ${item.highlight ? "highlight" : ""} ${idx < 3 ? "top" : ""}`}
            key={idx}
          >
            <div className="icon-wrapper">
              {typeof item.icon === "string" ? (
                <img src={item.icon} alt={item.title} />
              ) : (
                item.icon
              )}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
