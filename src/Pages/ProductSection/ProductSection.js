import React from "react";
import "./ProductSession.css";

const productSection = [
  {
    icon: "/icon-face.svg",
    title: "Facial Biometric Attendance Application",
    description: "Attendance Application – effortless, secure, and incredibly efficient!",
  },
  {
    icon: "/icon-ziffy.svg",
    title: "Ziffy Cloud: Project Management Software for Agile Teams",
    description:
      "Streamline your projects with agile management that turns chaos into clarity!",
  },
  {
    icon: "/icon-vendor.svg",
    title: "Vendor and Asset Management Software",
    description:
      "Track and optimize all your assets & vendor relationships in one powerful platform!",
  },
  {
    icon: "/icon-chatbot.svg",
    title: "ChatGenius: Conversational AI based Chatbot",
    description:
      "Experience the future of customer service with intelligent, human-like conversations!",
  },
];

const ProductSection= () => {
  return (
    <section className="product-section">
      <p className="section-label">PRODUCT</p>
      <h2 className="section-title">
        Glimpse Of Our Few Game-Changing Products To Elevate Your Business To New Heights!
      </h2>
      <div className="product-grid">
        {productSection.map((productSection, idx) => (
          <div className="product-card" key={idx}>
            <div className="product-icon">
              <img src={productSection.icon} alt={productSection.title} />
            </div>
            <h3>{productSection.title}</h3>
            <p>{productSection.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
