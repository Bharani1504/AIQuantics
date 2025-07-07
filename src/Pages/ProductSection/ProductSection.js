import React from "react";
import "./ProductSection.css";
import vector1 from './VectorTop.png';
import vector2 from './VectorBottom.png';

import { IoFingerPrint } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";
import { GrWindows } from "react-icons/gr";
import { GiTeacher } from "react-icons/gi";

const productSection = [
  {
    icon: <IoFingerPrint />,
    title: "Facial Biometric Attendance Application",
    description: "Attendance Application – effortless, secure, and incredibly efficient!",
  },
  {
    icon: <BsRobot />,
    title: "Ziffy Cloud: Project Management Software for Agile Teams",
    description: "Streamline your projects with agile management that turns chaos into clarity!",
  },
  {
    icon: <GrWindows />,
    title: "Vendor and Asset Management Software",
    description: "Track and optimize all your assets & vendor relationships in one powerful platform!",
  },
  {
    icon: <GiTeacher />,
    title: "ChatGenius: Conversational AI based Chatbot",
    description: "Experience the future of customer service with intelligent, human-like conversations!",
  },
];

const ProductSection = () => {
  return (
    <div className="productsection">
      <div className="vectorpart">
        <img src={vector1} alt=""/>
        <img src={vector2} alt="" />
      </div>
      <div className="textpart">
          <div className="product-section">
          <p className="section-label">PRODUCT</p>
          <h2 className="section-title">
            Glimpse Of Our Few Game-Changing Products To Elevate Your Business To New Heights!
          </h2>
          <div className="product-grid">
            {productSection.map((item, idx) => (
              <div className="product-card" key={idx}>
                <div className="product-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default ProductSection;
