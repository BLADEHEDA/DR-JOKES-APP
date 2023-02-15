import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='Footer py-[1.2em] text-center font-bold'>
      <div className="footer-head font-size text-3xl mb-[0.3em]  ">JOKING-LY </div>
      <p className="linksz mb-[0.5em]"> QUICK LINKS</p>
      <ul className="links"> 
      <li className="link mb-[0.3em]">ABOUT</li>
      <li className="link">CONTACT</li>
      <p className="icons mt-[1em]"> GET IN TOUCH</p>
      <div className="icons"> 
      <div className="icon"> </div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      </div>
      </ul>
    </div>
  )
}

export default Footer
