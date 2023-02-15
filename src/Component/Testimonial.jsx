import React from 'react'
import textimonial1  from "../images/testimonial-1.jpg"

const Testimony = (props) => {
    return (
      <div className='Testimony rounded-[0.5em] text-center py-[0.5em] px-[0.75em]  mt-[1em]  mb-[1em] '>
            <div className="jokes-emoji-div w-[3em] mb-2"> 
             <img src={props.src} alt="Testimonial-icon " className="Testimony-emoji rounded-full mb-[1em] " /> 
             </div>
            <p className="Testimony-content ">  {props.Content} </p>
            <p className="Testimony-author font-bold  ">   {props.Author} </p>
      </div>
    )
  }

//    ]
const Testimonial = () => {
  return (
    <div className='Testimonial mb-[3em]'>
        <h1 className="Testimonial-head font-bold text-2xl text-center mt-[2em]">What Our Users Say </h1>
        <Testimony 
        src={textimonial1}
        Content=" Workdays  used to be very stressful till i stumbled on this website and it changed the way 
        i work now . I highly recommend it . "
        Author=" Says Ashley"
        />  
    </div>
  )
}

export default Testimonial
