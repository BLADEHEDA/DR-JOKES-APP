import React from 'react'
import { useEffect,useState } from 'react'
import JokesProp from '../JokesProp'
import emoji1 from "../../images/6-2-angel-blushing-smile-emoji-png.png"

const Modal2 = ({showModals2, setShowModals2}) => {
 // states for teh Api data fetch 
const [Data, setData] = useState([]);
// handle the Api fetch 
const handleRomanceFetch =()=>{
  fetch(` https://api.jokes.digitalrenter.com/api/jokes`)
  .then(res => res.json())
  .then(
    (results) => {
      console.log(results);
      const filtered = results.filter(result=>result.category_id==2)
      // setData(results)
      console.log(filtered);
      setData(filtered )
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
    <section className="modal-section h-[60vh] px-[1em] w-[80%]  md:w-[60%] h-[85vh]  m-auto inset-0 z-50 bg-white 
    fixed  py-3 rounded-2xl overflow-y-auto"> 
    <div className="modal-head-section flex justify-between px-5 mb-3">
             <h3 className="text-2xl md:text-3xl font-semibold  "> Education Jokes</h3>
             <button className='text-2xl font-semibold text-red-500   "'
                    onClick={() =>{ 
                       setShowModals2()}}
                  >  X
                   </button>
               </div>
  <section className="Mapped-div-from Api">  
            {Data.map((data)=>{ const {id, punchline,setup}  = data ;
          return(
            <div className="render-demos" key={id}> 
          <JokesProp
                  title={punchline}
                  jokesid={data.id}
                  content={setup} 
                  author={data.author.name}
                  src={emoji1}
                  /> 
            </div>
          )
          })}
        </section>

    </section>
  )
}

export default Modal2
