import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const Comment = ({jokesid}) => {
  // logic for the comment component 
const[Comments ,setComments]=useState([]);
const [commentInput,setcommentInput]=useState("");
const[errors,setErrors]= useState()
// teack the changes of the input 
let inputvalue
const handleChange =(e)=>{
   inputvalue = e.target.value;
   fetch(`https://api.jokes.digitalrenter.com/api/comments?joke_id=${jokesid}`)
   .then(res => res.json())
   .then(
     (results) => {
       console.log(results);
       // alert( jokesid)
       console.log(jokesid);
       setComments(results)
     },
   )
  setcommentInput(inputvalue);
}
// track the behaviour of the list on submit 
const handleSubmit =(e)=>{
  e.preventDefault();
  if(commentInput.length>1 && commentInput.length <201 ) {
    console.log(commentInput, commentInput.length);
    const comment = {  
      // id:Math.floor(Math.random()*10000),
      id:Math.floor(Math.random()*10),
      commentInput:commentInput,
    };    
  // Add the comment to the list of comments 
    const AddComments =[Comment,...Comments];
    setComments(AddComments)
    setErrors()
    console.log(AddComments);
// setcommentInput("");

// add comments on a joke 
     fetch(`https://api.jokes.digitalrenter.com/api/comments`, {
     method: 'POST',
     body: JSON.stringify({ 
    joke_id:Math.floor(Math.random()*25),
    // joke_id:joke.id,
    comment:commentInput,
     }),
     headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    
  })
  setcommentInput("")
     .then((res) => res.json())
     .then((Comments) => {
         setComments([Comment,...Comments])
        //  setcommentInput("")
     })
     .catch((err) => {
        console.log(err.message);
     });
    
//the end of the line that was subjected ti changes 
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
       
         {/* <div>  {Comments[0].comments.map((el)=>el)} </div>  */}
            {/* subjected to changes  */}
        { Comments.map( (commentx)=>{ const {joke_id,  comment}= commentx 
            return <section className="commetn-section p-[0.75em] " key={joke_id}>
              <div className="comment-div w-[100%] overflow-hidden">  {comment}  </div>
              </section>  
      }  )}
   

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
