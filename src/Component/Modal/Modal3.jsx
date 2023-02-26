import React from 'react'
import { useEffect,useState } from 'react'
import JokesProp from '../JokesProp'
import emoji1 from "../../images/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png"

const Modal3 = ({showModals3, setShowModals3}) => {
  // states for teh Api data fetch 
const [Data, setData] = useState([]);
// handle the Api fetch 
const handleRomanceFetch =()=>{
  fetch(` https://api.jokes.digitalrenter.com/api/jokes`)
  .then(res => res.json())
  .then(
    (results) => {
      console.log(results);
      setData(results)
    },
  )
}
useEffect(() => {
handleRomanceFetch()
}, [])

if(Data.length===0){
return(
  <div className='h-[60vh] loading-modal w-[80%] text-center bg-white text-3xl
  md:w-[30%] h-[20vh] rounded-[10px] m-auto inset-0 z-50 fixed  py-[1.2em] '> LOADING....</div>
) 
} 
  return (

    <section className="modal-section h-[60vh]  w-[80%]  md:w-[60%] m-auto inset-0 z-50 bg-white fixed mb-[13em] py-3 rounded-2xl">
             <div className="modal-head-section flex justify-between px-5 mb-3">
             <h3 className="text-2xl md:text-3xl font-semibold"> JOkes Category </h3>
                   <button className='text-2xl font-semibold text-red-500 "'
                    onClick={() =>{ 
                       setShowModals3()}}
                  >  X
                   </button>
               </div>
              
      <div className="modal-container  ">

        <div className="modal-prop-div h-[80vh]   overflow-y-auto bg-white shadow-lg "> 
        <div className="relative p-6 flex-auto">
   {/* the lines below are mapped from the api so are subjected to changes  */}
   <section className="Mapped-div-from Api">  
            {Data.map((data)=>{ const {id, punchline,setup}  = data ;
          return(
            <div className="render-demos" key={id}>
          <JokesProp
                  title={punchline}
                  content={setup} 
                  author={data.author.name}
                  src={emoji1}
                  />
            </div>
          )
          })}
        </section>
           {/* the jokes below are manually Typed JOkes */}


        <JokesProp
              title=" Laugh or die"
               content=" I always felt like I could do anything. That’s the main
               thing people are controlled by! Thoughts- their perception
               of themselves! They're slowed down by their perception of
               themselves. If you're taught you can’t do anything, you
               won’t do anything. I was taught I could do everything."
               author="Blade the Great"
               src={emoji1}
               />
           
              <JokesProp
              title=" Laugh or die"
               content=" I always felt like I could do anything. That’s the main
               thing people are controlled by! Thoughts- their perception
               of themselves! They're slowed down by their perception of
               themselves. If you're taught you can’t do anything, you
               won’t do anything. I was taught I could do everything."
               author="Blade"
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

export default Modal3
