import React from 'react'
import Button from './Button'
import heart from "../images/icons8-heart-suit-48.png"  
import school from "../images/23847-3-school-file.png" 
import african from "../images/icons8-africa-64.png"  
import western from "../images/icons8-cowgirl.png" 
import fanily from "../images/icons8-family-16.png"  
import tech from "../images/icons8-network-64.png" 

const Category=(props)=>{
    return(
    <section className="Category jokescategory-div rounded-[0.5em] p-[0.75em] my-[0.5em]"> 
    <div className="category-img-div flex justify-center ">
       <img src={props.src} alt="category-emoji" className="category-img w-[3em]" /> </div>
    <p className="category-content text-center text-base"> {props.content}   </p>
    <div className="category-btn flex justify-center mb-2">  
    <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
    ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
    </div>       
              
    </section>
     )
}

const JokesCategory = () => {
  return (
    <div className='JokesCategory-section '>
       
      <h1 className="jokescategory-head font-bold text-center text-2xl mb-[1em]"> JOKES IN  CATEGORY </h1>
      <div className='JokesCategory '> 
        <Category 
        src={heart}
        content="Get School related jokes that could spice up your mood and make you think of good old school days " 
        />
 

        <Category 
        src={school }
        content="Get love and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
   
 
         <Category 
        src={african}
        content="Get amazing jokes that originate from western ends that shows you how amazing of a place it is to live in " 
        />
           <Category 
        src={western }
        content="Get amazing jokes that originate from Africa that shows you how amazing of a place it is to live in " 
        />
   
 
         <Category 
        src={fanily}
        content="Get family and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
          <Category 
        src={tech }
        content="Get Amazing Tech jokes that could spice up your mood and show you how a journey in tech is awesome " 
        />
     
     </div>
    </div>
  )
}

export default JokesCategory
