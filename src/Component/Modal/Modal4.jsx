import React from 'react'
import { useEffect,useState } from 'react'
import JokesProp from '../JokesProp'
import emoji1 from "../../images/94437-emoticon-of-smiley-dota-defense-fortnite-ancients_800x800.png"


const Modal4= ({showModals4, setShowModals4}) => {
    // states for teh Api data fetch 
const [Data, setData] = useState([]);
// handle the Api fetch 
const handleRomanceFetch =()=>{
  fetch(` https://api.jokes.digitalrenter.com/api/jokes`)
  .then(res => res.json())
  .then(
    (results) => {
      console.log(results);
      const filtered= results.filter(result=>result.category_id===4)
      console.log(filtered);
      setData(filtered)
    },
  )
}
useEffect(() => {
handleRomanceFetch()
}, [])

if(Data.length===0){
return(
  <div className='loading-modal w-[80%] text-center bg-white text-3xl
  md:w-[30%] h-[15vh] rounded-[10px] m-auto inset-0 z-50 fixed  py-[1em] '> LOADING....</div>
) 
} 
  return (
    <section className="modal-section h-[60vh]  w-[80%]  md:w-[60%] m-auto inset-0 z-50 bg-white fixed mb-[13em] py-3 rounded-2xl">
             <div className="modal-head-section flex justify-between px-5 mb-3">
             <h3 className="text-2xl md:text-3xl font-semibold"> Western Jokes </h3>
                   <button className='text-2xl font-semibold text-red-500 "'
                    onClick={() =>{ 
                       setShowModals4()}}
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
           jokesid={data.id}
                  title={punchline}
                  content={setup} 
                  author={data.author.name}
                  src={emoji1}
                  />
        
            </div>
          )
          })}
        </section>
                </div>
                 </div>
      </div>
    </section>
  )
}

export default Modal4
