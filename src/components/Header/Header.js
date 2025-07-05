import React from 'react'
import logo from "./Logo.png"

const Header = () => {
  return (
    <div>
      <div className='logofull'>
        <div className='logopart'>
          <img src={logo} alt='logo'/>
          <div className='companyName'>
            <p>VIHAAN CYBERLAB PVTLTD</p>
          </div>
        </div>
        <div className='logotext'>
          <p>Formely Known as AIQUANTALYTICS</p>
        </div>
      </div>
      <div className='navbarpart'>
        <ul>
        <li className="active">HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>PRODUCT</li>
        <li>
          <ul>
            CAREER
            <li>option1</li>
            <li>option2</li>
            <li>option3</li>
          </ul>
        </li>
      </ul>
      </div>
      <div className='chatbotpart'>
        <btn>Chatbot</btn>
      </div>
    </div>
  )
}

export default Header

