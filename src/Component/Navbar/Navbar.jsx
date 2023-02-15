import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import close from "../../images/icon-close.svg"

const Navbar = () => {
  const [links,setLinks]=useState();
  const displayNavbar = links?"navlinks-mobile":"show";
  // toggle the navbar component 
  const togleNav=()=>{
    setLinks(!links)
  }
  return (
    <div className='Navbar  '>
      <div className="navbar-mobile mobile flex justify-between ">
        <div className="Navbar-left text-2xl font-bold">JOKING-LY</div>
        <div className="nav-right"> 
        <FontAwesomeIcon icon={faBars} className="text-2xl mt-1"  onClick={togleNav} /></div> 
        <ul className={`navlinks-mobile absolute rounded-lg pt-4 pb-7 ${displayNavbar}  `}>
          <div className="navlink-img"> <img src={close} alt="" className="close absolute" onClick={togleNav} /> </div>
          <li className="navlink text-lg">About</li>  
          <li className="navlink text-lg">Contact</li>  
        </ul> 
      </div>
      <div className="navbar-desktop desktop justify-between">  
      <div className="Navbar-left text-3xl font-bold ">JOKING-LY</div>
      <div className="navbar-right">  
      <ul className="navlinks desktop flex">
          <li className="navlink text-xl ">About</li>  
          <li className="navlink pl-5 text-xl">Contact</li>  
        </ul>  
      </div>
      
      </div>
        
    </div>
  )
}

export default Navbar
