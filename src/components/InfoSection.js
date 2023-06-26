import React from 'react'
import './InfoSection.css'
import GreenBubbleTea from '../assets/green-bubble-tea.png'
import ShopIcon from '../assets/shop.png'
import GreenTea from '../assets/green-tea.png'

const InfoSection = () => {
  return (
    <div className='info-section'>
        <div className='wrapper'>
            <div className='info-segment'>
                <img src={GreenTea} onClick={null} alt="Boba icons created by Freepik" width="80" height="80"></img>
                <h2>Our drinks are brewed in-store. Come on in and watch the magic happen!</h2>
            </div>
            <div className='info-segment'>
                <img src={GreenBubbleTea} onClick={null} alt="Boba icons created by Freepik" width="80" height="80"></img>
                <h2>We sell many different types of teas, from bubble tea, to fresh hot tea. We even sell tea accessories!</h2>
            </div>
            <div className='info-segment'>
                <img src={ShopIcon} onClick={null} alt="Boba icons created by Freepik" width="80" height="80"></img>
                <h2>Come on in to a store near you. We are sure you will be satisfied.</h2>
            </div>
        </div>
    </div>
  )
}

export default InfoSection