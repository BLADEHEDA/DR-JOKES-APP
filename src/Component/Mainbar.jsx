import React from 'react'
import hero from "../images/holidays-friends-having-fun-at-the-party.png"
import Button from './Button'

const Mainbar = () => {
  return (
    <div className='mainbar '>
        <div className="hero-img"> <img src={hero} alt="hero-image" className="hero-pic" /> </div>
        <div className="main-section text-center ">
            <h1 className="main-head text-3xl font-bold r md:text-start">MAKE YOUR DAY REMARKABLY JOYFUL</h1>
            <p className="main-content mt-1 mb-[1em]">
            Happilly Ever After  Everyday At Every Moment With Amazing Jokes That Makes 
             You Giggle  And Laugh Blissfully  </p>
             <div className="main-section-btn flex justify-center">
                <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)"
                ,borderRadius:"8px",padding:"0.5em 1em"}} text="Get started"/> 
                </div>

        </div>

       
    </div>
  )
}

export default Mainbar
