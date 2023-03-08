import React from 'react'
import { useEffect,useState } from 'react'
import JokesProp from '../JokesProp'
import emoji1 from "../../images/65031-emoticon-whatsapp-sticker-emoji-free-download-png-hq.png"
import { Fade ,Roll, Slide,JackInTheBox} from "react-awesome-reveal";

const Modal = ({showModals, setShowModals}) => {
  // states for teh modal1 search 
const [Data, setData] = useState([]);
    // handle the Api fetch 
    const handleRomanceFetch =()=>{
      fetch(` https://api.jokes.digitalrenter.com/api/jokes`)
      .then(res => res.json())
      .then(
        (results) => {
          console.log(results);
          // console.log(results.category_id);
          const filtered= results.filter(result=>result.category_id===1)
          console.log(filtered);
          setData(filtered)
        },
      )
    }
  useEffect(() => {
    handleRomanceFetch()
  }, [])
  // this second use effect is to catch any changes done on the state found inn the  depemdency array 
  // useEffect(() => {
  //   console.log(Data); 
  // }, [Data])
  
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
             <h3 className="text-2xl md:text-3xl font-semibold "> Romantic Jokes</h3>
             <button className='text-2xl font-semibold text-red-500 "'
                    onClick={() =>{ 
                       setShowModals()}}
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

export default Modal
