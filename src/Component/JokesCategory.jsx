import React from 'react'
import { useEffect,useState } from 'react'
import Button from './Button'
import heart from "../images/icons8-heart-suit-48.png"  
import school from "../images/23847-3-school-file.png" 
import african from "../images/icons8-africa-64.png"  
import western from "../images/icons8-cowgirl.png" 
import fanily from "../images/icons8-family-16.png"  
import tech from "../images/icons8-network-64.png" 
import { Fade ,Roll, Slide,JackInTheBox} from "react-awesome-reveal";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// Default theme 
import '@splidejs/react-splide/css';

import Modal from './Modal/Modal'
import Modal2 from './Modal/Modal2'
import Modal3 from './Modal/Modal3'
import Modal4 from './Modal/Modal4'
import Modal5 from './Modal/Modal5'
import Modal6 from './Modal/Modal6'


const Category=(props)=>{

    return(

    <section className="jokes-category-card"> 
    <div className="category-img-div m-auto w-[3em] ">
       <img src={props.src} alt="category-emoji" className="category-img w-[3em]" /> </div>
    <p className="category-content text-center text-base"> {props.content}   </p>
    </section>
     )
}

const JokesCategory = () => {
// the logic of the modal and its functionalities 
const [showModals, setShowModals] = React.useState(false);
const [showModals2, setShowModals2] = React.useState(false);
const [showModals3, setShowModals3] = React.useState(false);
const [showModals4, setShowModals4] = React.useState(false);
const [showModals6, setShowModals6] = React.useState(false);
const [showModals5, setShowModals5] = React.useState(false);

//  ?handle romance actions 
const handleRomance=()=>{
  setShowModals(!showModals)
}
 
  return (
    <div className='JokesCategory-section '> 
      <h1 className="jokescategory-head font-bold text-center text-2xl mb-[1em]"> JOKES IN  CATEGORY </h1>
      <Slide> 
      <div className='JokesCategory desktop '> 

      <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
          <Category 
          src={heart}
          content="Get love and Relationship jokes that could spice up your mood and that of your loved ones " 
      
          />
            <div  onClick={handleRomance}
       className="category-btn flex justify-center mb-2">  
      <Button 
     
      style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px" 
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>

    <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
        <Category 
        src={school }
        content="Get School related jokes that could spice up your mood and make you think of good old school days " 
        />
                 <div  onClick={() => { setShowModals2(!showModals2)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
   
 
   <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
         <Category 
        src={african}
        content="Get amazing jokes that originate from Africa that shows you how amazing of a place it is to live in " 
        />
                 <div onClick={() => {   setShowModals3(!showModals3)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>

<section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
           <Category 
        src={western }
        content="Get amazing jokes that originate from western ends that shows you how amazing of a place it is to live in " 
        />
                 <div onClick={() => {   setShowModals4(!showModals4)}}
                  className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
   
   <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
         <Category 
        src={fanily}
        content="Get family and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
                 <div onClick={() => {   setShowModals5(!showModals5)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>

<section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
          <Category 
        src={tech }
        content="Get Amazing Tech jokes that could spice up your mood and show you how a journey in tech is awesome " 
        /> 
       <div onClick={() => {   setShowModals6(!showModals6)}}
        className="category-btn flex justify-center mb-2">  
      <Button 
      style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>    
     </div>
     </Slide>

     {/* render the various modals  */}
    {showModals?(<Modal  showModals={showModals} setShowModals={setShowModals}/>):null } 
    {showModals2?(<Modal2  showModals2={showModals2} setShowModals2={setShowModals2}/>):null } 
    {showModals3?(<Modal3  showModals3={showModals3} setShowModals3={setShowModals3}/>):null } 
    {showModals4?(<Modal4  showModals4={showModals4} setShowModals4={setShowModals4}/>):null } 
    {showModals5?(<Modal5  showModals6={showModals5} setShowModals5={setShowModals5}/>):null } 
    {showModals6?(<Modal6  showModals6={showModals6} setShowModals6={setShowModals6}/>):null } 

{/* the values written below os subjected to changes  */}
<Splide aria-label="My Favorite Images" className='splider mobile' >
  <SplideSlide className='SplideSlide' >
  <section className="Category jokescategory-divs rounded-[0.5em] p-[0.75em]  my-[0.5em]"> 
          <Category 
          src={heart}
          content="Get love and Relationship jokes that could spice up your mood and that of your loved ones "
          />
             <div onClick={() => {   setShowModals(!showModals)}}
       className="category-btn flex justify-center mb-2">  
      <Button 
     
      style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px" 
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div> 
    </section>
  </SplideSlide>
  <SplideSlide>
  <section className="Category jokescategory-divs rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
        <Category 
        src={school }
        content="Get School related jokes that could spice up your mood and make you think of good old school days "  
        />
                 <div onClick={() => {   setShowModals2(!showModals2)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>

  <SplideSlide>
    <section className="Category jokescategory-divs rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
         <Category 
       src={western }
        content="Get amazing jokes that originate from western ends that shows you how amazing of a place it is to live in " 
        />
                 <div onClick={() => {   setShowModals3(!showModals3)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>
  <SplideSlide>
  <section className="Category jokescategory-divs rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
           <Category 
        src={african}
        content="Get amazing jokes that originate from Africa that shows you how amazing of a place it is to live in " 
        />
                 <div onClick={() => {   setShowModals4(!showModals4)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>

    <SplideSlide>
    <section className="Category jokescategory-divs rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
         <Category 
        src={fanily}
        content="Get family and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
                 <div onClick={() => {   setShowModals5(!showModals5)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>
  <SplideSlide>
  <section className="Category jokescategory-divs rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
          <Category 
        src={tech }
        content="Get Amazing Tech jokes that could spice up your mood and show you how a journey in tech is awesome " 
        /> 
                 <div onClick={() => {   setShowModals6(!showModals6)}}
                  className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>   
  </SplideSlide>
  
</Splide>

    </div>

  )
}

export default JokesCategory