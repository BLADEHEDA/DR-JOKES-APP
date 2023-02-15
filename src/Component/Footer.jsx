import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFaceAngry,faRetweet} from '@fortawesome/free-solid-svg-icons'





const Footer = () => {
  return (
    <div className='Footer py-[1.2em] text-center font-bold'>
      <div className="footer-head font-size text-3xl mb-[0.3em]  ">JOKING-LY </div>
      <p className="linksz mb-[0.5em]"> QUICK LINKS</p>
      <ul className="links"> 
      <li className="link mb-[0.3em]">ABOUT</li>
      <li className="link">CONTACT</li>
      <p className="icons mt-[1em] text-xl"> GET IN TOUCH</p>
      <div className="icons flex  justify-center mt-3"> 
      <div className="icon"><FontAwesomeIcon icon={faFaceAngry} className="text-2xl mt-1"  /> </div>
      <div className="icon"><FontAwesomeIcon icon={faRetweet} className="text-2xl mt-1"  /> </div>
      <div className="icon"><FontAwesomeIcon icon={faFaceAngry} className="text-2xl mt-1"  /> </div>
      <div className="icon"><FontAwesomeIcon icon={faRetweet} className="text-2xl mt-1"  /> </div>
      </div>
      </ul>
    </div>
  )
}

export default Footer
