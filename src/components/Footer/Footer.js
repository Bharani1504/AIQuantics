import React from 'react'
import logo from './Logo.png';

const Footer = () => {
  return (
    <div>
        <div className='leftend' >
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
                <div className='socialmedia'>
                    //social media
                </div>
            </div>
        </div>
        <div className='midleft' >
            <div className='Footerheading'>
                <p>Quick Links</p>
            </div>
            <div className='FooterContent'>
                <p>Our Service</p>
                <p>About Us</p>
                <p>Pricing</p>
                <p>Testimonial</p>
            </div>
        </div>
        <div className='midright' >
            <div className='Footerheading'>
                <p>Contact Us</p>
            </div>
            <div className='FooterContent'>
                <div className='Footermail'>
                    <p>hello@website.com</p>
                </div>
                <div className='FooterLocation'>
                    <p>838 Cantt Sialkot, ENG</p>
                </div>
                <div className='FooterPhone'>
                    <p>+02 54212 34560</p>
                </div>
            </div>
        </div>
        <div className='rightend' >
            <div className='Footerheading'>
                <p>Newsletter</p>
            </div>
            <div className='FooterContent'>
                <input type='email'/>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Footer