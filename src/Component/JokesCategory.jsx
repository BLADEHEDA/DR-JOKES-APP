import React from 'react'
import Button from './Button'
import heart from "../images/icons8-heart-suit-48.png"

const Category=(props)=>{
    return(
    <section className="Category jokescategory-div rounded-[0.5em] p-[0.5em] my-[0.5em]"> 
    <div className="category-img-div flex justify-center "> <img src={props.src} alt="category-emoji" className="category-img" /> </div>
    <p className="category-content text-center"> {props.content}   </p>
    <div className="category-btn flex justify-center mb-2">  
    <Button style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"8px"
    ,padding:"0.3em 1em",margin:"0.5em 0em 0em 0em"}} text="View Jokes" /> 
    </div>       
              
    </section>
     )
}

const JokesCategory = () => {
  return (
    <div className='JokesCategory '>
      <h1 className="jokescategory-head font-bold text-center text-2xl mb-[1em]"> JOKES IN  CATEGORY </h1>
        <Category 
        src={heart}
        content="Get love and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
 

        <Category 
        src={heart}
        content="Get love and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
   
 
         <Category 
        src={heart}
        content="Get love and Relationship jokes that could spice up your mood and that of your loved ones " 
        />
     
  
    </div>
  )
}

export default JokesCategory
