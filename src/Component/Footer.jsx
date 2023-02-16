import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFaceAngry,faRetweet} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare , faTwitter,faInstagram,faPinterest} from "@fortawesome/free-brands-svg-icons"



const Footer = () => {
  return (
    <footer className='Footer py-[1.2em] text-center font-bold md:py-[2em] px-[4em]'>
      <footer className="flex-one md:flex justify-between" > 
        <div className="footer-head font-size text-3xl mb-[0.3em]  ">JOKING-LY </div>
        <p className="linksz mb-[0.5em] mobile"> QUICK LINKS</p>
        <ul className="links  md:flex"> 
          <li className="link mb-[0.3em]">ABOUT</li>
          <li className="link md: pl-[2em]">CONTACT</li>
        </ul>
      </footer>
      <p className="icons my-[1em] text-xl  mobile"> GET IN TOUCH</p>
      <footer className="flex-two md:flex justify-between">     
      <p className="copyright-text desktop mt-[1em]">@Copyright  2023  </p>
     
      <div className="icons flex  justify-center mt-3"> 
      <div className="icon"><FontAwesomeIcon icon={faFacebookSquare } className="text-[1.75rem] "  /> </div>
      <div className="icon"><FontAwesomeIcon icon={faTwitter } className="text-[1.75rem]"  /> </div>
      <div className="icon"><FontAwesomeIcon icon={faInstagram} className="text-[1.75rem]"  /> </div>
      <div className="icon"><FontAwesomeIcon icon={faPinterest} className="text-[1.75rem] "  /> </div>
      </div>
      </footer>
    </footer>
  )
}

export default Footer
