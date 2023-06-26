import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='Hero'>
        <div className='Hero-text wrapper'>
            <h1>Our Bu<span>bb</span>le Tea</h1>
            <h2>
                You will find only the best in-store.<br></br> 
                Come in and try our new flavours and understand why people are <span>raving</span> over BubBly.
            </h2>
            <button>Start here</button>
        </div>
    </div>
  )
}

export default HeroSection