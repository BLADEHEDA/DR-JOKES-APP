import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import close from "../../images/icon-close.svg"

const Navbar = () => {
  const [links,setLinks]=useState();
  const displayNavbar = links?"show":"navlinks-mobile"
  return (
    <div className='Navbar  px-5 py-7'>
      <div className="navbar-mobile mobile flex justify-between">
        <div className="Navbar-left text-2xl font-bold">JOKING-LY</div>
        <div className="nav-right"> <FontAwesomeIcon icon={faBars} className="text-2xl mt-1"  /></div> 
        <ul className="navlinks-mobile absolute rounded-lg pt-4 pb-7">
          <div className="navlink"> <img src={close} alt="" className="close" /> </div>
          <li className="navlink text-lg">About</li>  
          <li className="navlink text-lg">Contact</li>  
        </ul> 
      </div>
      <div className="navbar-desktop desktop">  
      <div className="Navbar-left">JOKING-LY</div>
      <div className="navbar-right">  
      <ul className="navlinks">
          <li className="navlink">About</li>  
          <li className="navlink">Contact</li>  
        </ul>  
      </div>
      
      </div>
        
    </div>
  )
}

export default Navbar
