import React from 'react'
import JokesProp from '../JokesProp'
import emoji1 from "../../images/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png"
import Button from '../Button'

const FormModal = ( {showformModal,setshowformModal} ) => {
  return (
    <section className="formmodal-section h-[60vh]  w-[60%]  md:w-[35%] m-auto inset-0 z-50 bg-white fixed mb-[9em] py-3 rounded-xl">
    <div className="modal-head-section1 text-center px-5 mb-3">
    <h3 className="text-2xl md:text-3xl font-semibold center">Add Jokes</h3>

      </div>

<form className="relatives  px-7 pb-10">
    <div className="Author-div form-div ">
        <div className=" mt-[0.5em]">  
        <label htmlFor="Author" className="author-label mt-[0.5em]  p-2">Author</label>
        </div>
        <div className="w-full form-element">   
        <input type="text" placeholder='Enter Your Name' className="joke-input  w-full p-2" />
        </div>
    </div>
    <div className="joke-title-div form-div mt-[1.5em]">
    <div className=" mt-[0.5em]">  
        <label htmlFor="Author" className="author-label">Jokes Auhtor</label>
        </div>
        <div>  
        <input type="text" placeholder='Enter Your Joke Title' className="joke-input w-full p-2" />
        </div>
    </div>
    <div className="joke-content-div form-div mt-[1.5em]">
    <div>  
        <label htmlFor="Author" className="author-label">Joke Content</label>
        </div>
        <div>   
      <textarea name="content" className="joke-input w-full p-2" ></textarea>
      </div>
      <div>   
      <Button  style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"5px" 
      ,padding:"0.75em 1em",margin:"1em 0em 0em 0em",width:"100%" }} text="Add Jokes" />
      </div>
    </div>
       </form>
       

</section>
  )
}

export default FormModal

