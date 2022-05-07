import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import './HerosSection.css'
import { Link } from 'react-router-dom';

const HerosSection = () => {
  return (
    <div className='hero-container'>
        <span style={{color: 'white',textShadow: '5px -1px 2px rgba(0,0,0,0.9)',}}>
            <Typewriter 
            loop
            cursor
            cursorStyle="_"
            typeSpeed={20}
            deleteSpeed={50}
            words={['WELCOME TO' ,'SOFTGENICS' ,'INDIA PVT LTD']}
            />
            </span>
      <p>Website designer  & Mobile App Development </p>
      <div className="hero-btn">
      <button  className='btn btn-booking' eventKey={2}><Link to='/Book-online'> BOOK ONLINE</Link> </button>
        </div>
        </div>
        

  )
}

export default HerosSection