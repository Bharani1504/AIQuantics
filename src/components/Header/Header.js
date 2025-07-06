import React from "react";
import logo from "./Logo.png";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";

const Header = () => {
  return (
    <header className="Header">
      <div className="logofull">
        <div className="logopart">
          <img src={logo} alt="logo" />
          <div className="companyName">
            <p>VIHAAN</p>
            <p>CYBERLAB</p>
            <p>PVTLTD</p>
          </div>
        </div>
        <div className="logotext">
          <p>Formely Known as AIQUANTALYTICS</p>
        </div>
      </div>
      <nav className="navbarpart">
        <ul>
          <li className="active">HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PRODUCT</li>
          <li>
            CAREER<IoIosArrowDown />
            <ul>
              <li>option1</li>
              <li>option2</li>
              <li>option3</li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="chatbotpart">
        <button><BsChatSquareText className="chatbotsvg"/>CHAT BOT</button>
      </div>
    </header>
  );
};

export default Header;
