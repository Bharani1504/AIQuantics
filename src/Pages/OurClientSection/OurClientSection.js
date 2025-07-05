import React from 'react'
import Eswari from './EaswariLogo.png';
import VIT from './VITLogo.png';
import VITAP from './VITAPLogo.png';
import SRM from './SRMLogo.png';
import KPR from './KPRLogo.png';

const OurClientSection = () => {
  return (
    <div>
        <div>OUR CLIENTS</div>
        <div>We don't just build softwares, we build your business.</div>
        <div>
            <img src={Eswari} alt='Eswari Engineering College'/>
            <img src={VIT} alt='Vellore Institute of Technology'/>
            <img src={VITAP} alt='VIT-AP'/>
            <img src={SRM} alt='SRM Institute of Science and Technology'/>
            <img src={KPR} alt='KPR Institute of Engineering and Technology'/>
        </div>
    </div>
  )
}

export default OurClientSection