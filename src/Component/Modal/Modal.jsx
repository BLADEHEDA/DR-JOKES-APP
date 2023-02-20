import React from 'react'
import JokesProp from '../JokesProp'
import emoji1 from "../../images/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png"


const Modal = ({showModals, setShowModals}) => {
  return (
    // <section className="modal-section w-[80%]  md:w-[60%] m-auto ">
    <section className="modal-section h-[60vh]  w-[80%]  md:w-[60%] m-auto inset-0 z-50 bg-white fixed mb-[13em] py-3 rounded-2xl">
             <div className="modal-head-section flex justify-between px-5 mb-3">
             <h3 className="text-2xl md:text-3xl font-semibold"> JOkes Category </h3>
             <button className='text-2xl font-semibold text-red-500 "'
                    onClick={() =>{ alert("it is modal1")
                       setShowModals()}}
                  >  X
                   </button>
               </div>
              
      <div className="modal-container  ">

     
  
        <div className="modal-prop-div h-[80vh]   overflow-y-auto bg-white shadow-lg "> 
        <div className="relative p-6 flex-auto">
        <JokesProp
              title=" Laygh or die"
               content=" I always felt like I could do anything. That’s the main
               thing people are controlled by! Thoughts- their perception
               of themselves! They're slowed down by their perception of
               themselves. If you're taught you can’t do anything, you
               won’t do anything. I was taught I could do everything."
               author="Modal1"
               src={emoji1}
               />
           
              <JokesProp
              title=" Laygh or die"
               content=" I always felt like I could do anything. That’s the main
               thing people are controlled by! Thoughts- their perception
               of themselves! They're slowed down by their perception of
               themselves. If you're taught you can’t do anything, you
               won’t do anything. I was taught I could do everything."
               author="Yaya the Great"
               src={emoji1}
               />
               <JokesProp
              title=" Laygh or die"
               content=" I always felt like I could do anything. That’s the main
               thing people are controlled by! Thoughts- their perception
               of themselves! They're slowed down by their perception of
               themselves. If you're taught you can’t do anything, you
               won’t do anything. I was taught I could do everything."
               author="Yaya the Great"
               src={emoji1}
               />
                </div>
                 </div>
      </div>
    </section>
  )
}

export default Modal
