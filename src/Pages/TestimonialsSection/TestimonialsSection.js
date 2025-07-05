// File: components/Testimonials.jsx

import React from "react";
import './TestimonialSection.css';

const testimonialSection = [
  {
    name: "Miss Sammy Feeney",
    title: "Investor Metrics Executive",
    image: "/avatar1.jpg",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    name: "Rosemary Mante",
    title: "Human Integration Agent",
    image: "/avatar2.jpg",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    name: "Regina Weissnat",
    title: "Regional Branding Consultant",
    image: "/avatar3.jpg",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    name: "Marianne Bode",
    title: "Product Intranet Agent",
    image: "/avatar4.jpg",
    rating: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <p className="section-label">TESTIMONIAL</p>
      <h2 className="section-title">See What Others People Are Saying</h2>
      <p className="section-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue metus quis
        accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.
      </p>
      <div className="testimonial-grid">
        {testimonialSection.map((item, idx) => (
          <div className="testimonial-card" key={idx}>
            <p className="testimonial-text">{item.content}</p>
            <div className="testimonial-user">
              <img src={item.image} alt={item.name} className="avatar" />
              <div>
                <p className="user-name">{item.name}</p>
                <p className="user-title">{item.title}</p>
              </div>
            </div>
            <div className="stars">{'★'.repeat(item.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
