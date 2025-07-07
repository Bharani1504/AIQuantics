import React from 'react'
import Image1 from './image 1.png';
import Image2 from './image 2.png';
import Image3 from './image 3.png';
import Image4 from './image 4.png';
import Image5 from './image 5.png';
import vector from './Vector.png';
import './Visionaries.css';

const Visionaries = () => {
  return (
    <div className='Visionaries'>
      <div className='vectorpart'>
        <img src={vector} alt='' />
      </div>
      <div className='textpart'>
        <div className='VisionariesText'>
            <p>MEET OUR MISIONARIES</p>
        </div>
        <div className='VisionariesImage'>
          <div className='top-layer'>
            <img src={Image1} alt='' />
            <img src={Image2} alt='' />
            <img src={Image3} alt='' />
          </div>
          <div className='bottom-layer'>
            <img src={Image4} alt='' />
            <img src={Image5} alt='' />
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Visionaries