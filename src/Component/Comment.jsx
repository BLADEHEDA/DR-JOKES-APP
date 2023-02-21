import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const Comment = () => {
  // logic for the comment component 
const[comments ,setComments]=useState([]);
const [commentInput,setcommentInput]=useState("");
const[errors,setErrors]= useState()
// teack the changes of the input 
let inputvalue
const handleChange =(e)=>{
   inputvalue = e.target.value;
  setcommentInput(inputvalue);
}
// track the behaviour of the list on submit 
const handleSubmit =(e)=>{
  e.preventDefault();
  if(commentInput.length>1 && commentInput.length <201 ) {
    console.log(commentInput, commentInput.length);
    const comment = {  
      id:Math.floor(Math.random()*10000),
      commentInput:commentInput 
    };

    // Add the comment to the list of comments 
    const AddComments =[...comments , comment];
    setComments(AddComments)
    setErrors()
    console.log(AddComments);
setcommentInput("")


  }
  // incase he user"s input is invalid , validate the form 
  else if (!(commentInput.length>1 && commentInput.length <201)){
    console.log( "Enter somethining  valid " + commentInput.length);
    setErrors(!errors)
    setcommentInput("")
  
  }

}

return (
    <section className='comment-section md:w-[75%] lg:w-[60%]  m-auto py-[1em] px-[1.5em]'>
       
        { comments.map( (comment)=>{ const {id, commentInput}= comment 
            return <p className="commetn-section p-[1em] " key={id}>
              <div className="comment-div w-[10%]">  {commentInput}  </div></p>  
      }  )
        }                
        
        <form className="comment-actions flex mt-[2em]" onSubmit={handleSubmit }>
            <div className="form-comment-div basis-[90%] "> 
             <input type="text" className="comment-input w-full" placeholder="Enter a comment"
              value={commentInput} onChange={handleChange} /> 
               </div>
            <div className="form-btn-div basis-[10%] w-full">
                 <button className="comment-btn w-full">
                    <FontAwesomeIcon icon={faPaperPlane} /> </button> </div>
        </form>
              {/* show the form error  */}
              {errors?<div className="error text-sm text-red-600">Enter valid character lendth  </div>:null}
    </section>
  )
}

export default Comment
