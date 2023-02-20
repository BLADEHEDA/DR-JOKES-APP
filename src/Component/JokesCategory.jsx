import React from 'react'
import Button from './Button'
import heart from "../images/icons8-heart-suit-48.png"  
import school from "../images/23847-3-school-file.png" 
import african from "../images/icons8-africa-64.png"  
import western from "../images/icons8-cowgirl.png" 
import fanily from "../images/icons8-family-16.png"  
import tech from "../images/icons8-network-64.png" 
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

import Modal from './Modal/Modal'
import Modal2 from './Modal/Modal2'
import Modal3 from './Modal/Modal3'
import Modal4 from './Modal/Modal4'
import Modal6 from './Modal/Modal6'


const Category=(props)=>{

    return(

    <section className="jokes-category-card"> 
    <div className="category-img-div flex justify-center ">
       <img src={props.src} alt="category-emoji" className="category-img w-[3em]" /> </div>
    <p className="category-content text-center text-base"> {props.content}   </p>
    </section>
     )
}

const JokesCategory = () => {
// the logic of the modal and its functionalities 
const [showModals, setShowModals] = React.useState(false);
const [showModals2, setShowModals2] = React.useState(false);

  return (
    <div className='JokesCategory-section '>
       
      <h1 className="jokescategory-head font-bold text-center text-2xl mb-[1em]"> JOKES IN  CATEGORY </h1>
      <div className='JokesCategory desktop '> 

      <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
          <Category 
          src={heart}
          content="Get School related jokes that could spice up your mood and make you think of good old school days " 
          />
            <div onClick={() => {   setShowModals(!showModals)}}
       className="category-btn flex justify-center mb-2">  
      <Button 
     
      style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px" 
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>

    <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
        <Category 
        src={school }
        content="Get love and Relationship jokes that could spice up your mood and that of your loved ones " 
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
        content="Get amazing jokes that originate from western ends that shows you how amazing of a place it is to live in " 
        />
                 <div onClick={() => {   setShowModals(!showModals)}}
                 className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>

<section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
           <Category 
        src={western }
        content="Get amazing jokes that originate from Africa that shows you how amazing of a place it is to live in " 
        />
                 <div onClick={() => {   setShowModals(!showModals)}}
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
                 <div onClick={() => {   setShowModals(!showModals)}}
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
                 <div className="category-btn flex justify-center mb-2">  
      <Button 
      style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>    
     </div>

     {/* render the various modals  */}
    {showModals?(<Modal  showModals={showModals} setShowModals={setShowModals}/>):null } 
    {showModals2?(<Modal2  showModals2={showModals2} setShowModals2={setShowModals2}/>):null } 
    {showModals?(<Modal3  showModals={showModals} setShowModals={setShowModals}/>):null } 
    {showModals?(<Modal4  showModals={showModals} setShowModals={setShowModals}/>):null } 
    {showModals?(<Modal6  showModals={showModals} setShowModals={setShowModals}/>):null } 

{/* the values written below os subjected to changes  */}
<Splide aria-label="My Favorite Images" className='splider mobile' >
  <SplideSlide className='SplideSlide' >
  <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
          <Category 
          src={heart}
          content="Get School related jokes that could spice up your mood and make you think of good old school days " 
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
  <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
        <Category 
        src={school }
        content="Get love and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
                 <div className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>

  <SplideSlide>
    <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
         <Category 
        src={african}
        content="Get amazing jokes that originate from western ends that shows you how amazing of a place it is to live in " 
        />
                 <div className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>
  <SplideSlide>
  <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
           <Category 
        src={western }
        content="Get amazing jokes that originate from Africa that shows you how amazing of a place it is to live in " 
        />
                 <div className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>

    <SplideSlide>
    <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
         <Category 
        src={fanily}
        content="Get family and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
                 <div className="category-btn flex justify-center mb-2">  
      <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
      ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
      </div>  
    </section>
  </SplideSlide>
  <SplideSlide>
  <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
          <Category 
        src={tech }
        content="Get Amazing Tech jokes that could spice up your mood and show you how a journey in tech is awesome " 
        /> 
                 <div className="category-btn flex justify-center mb-2">  
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
