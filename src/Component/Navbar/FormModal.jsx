import React, { useState } from 'react'
import JokesProp from '../JokesProp'
import emoji1 from "../../images/65057-emoticon-signal-smiley-thumb-emoji-free-frame.png"
import Button from '../Button'

const FormModal = ( {showformModal,setshowformModal} ) => {
    // the code below validates the form inputs
    const[validAuthor,setvalidAuthor]= useState();
    const[validTitle,setvalidTitle]=useState();
    const[validtextArea ,setvalidvalidtextArea]=useState()
    // the code below handles the state of the App

    const[Author ,setAuhtor]  =useState("");
    const[Title,setTitle]=useState("");
    const[textArea ,settextArea]=useState("");
    // 
  // define the container array for the newjokes 
  const[newJOkes , setnewJOkes]=useState([])

    // the function below handles the behaviour of the input 
    let authotValue , titleValue,textAreaValue;
    // Track changes ogf the author
    const handleChangeAuthor =(e)=>{
      authotValue= e.target.value;
        setAuhtor(authotValue);
        
    }
    // Track changes of the Title
    const handleChangeTitle =(e)=>{
      titleValue= e.target.value;
      setTitle(titleValue)
    }
    // track changes of the text area 
    const handletextArea =(e)=>{
      textAreaValue = e.target.value
      settextArea(textAreaValue );
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
  
    //  append the values to the array 
    // if((Author.length && Title.length)>2 &&textArea.length>10 ){
      if( Title.length>2){

 
    const newJoke= {
      id:Math.floor(Math.random()*10000),
      Author:Author,
      Title:Title,
      textArea:textArea
    }
    // add the new joke instance to an array 
    const addnewJOkes= [...newJOkes,newJoke ]
     setnewJOkes(addnewJOkes);
     console.log(addnewJOkes );
    //  reset the state back to its original 
       setAuhtor("");
     setTitle("")
     settextArea("");
    }
    alert(" validate the forms")
    setAuhtor(!Author);
    setTitle(!Title)
    settextArea(!textArea);
    }


  return (
    <section className="formmodal-section h-[60vh] py-1  w-[70%]  md:w-[35%] py-3   m-auto inset-0 z-50 bg-white fixed mb-[9em] rounded-xl">
    <div className="modal-head-section1 text-center px-5 mb-3">
    <h3 className="text-2xl md:text-3xl font-semibold center">Add Jokes</h3>

      </div>

<form className="relatives px-4 pb-10 md:px-7 " onSubmit={handleSubmit} >
    <div className="Author-div form-div ">
        <div className=" mt-[0.5em]">  
        <label htmlFor="Author" className="author-label mt-[0.5em] text-sm p-2 md:text-lg  ">Author</label>
        </div>
        <div className="w-full form-element">   
        <input type="text" placeholder='Enter Your Name' onChange={handleChangeAuthor} value={Author } 
        className="joke-input  w-full p-2" /> 
        {Author? <div className="errors">Enter a valid Name</div>:null   }
        </div>
    </div>
    <div className="joke-title-div form-div mt-[1.5em]">
    <div className=" mt-[0.5em]">  
        <label htmlFor="Author" className="author-label text-sm md:text-lg">Jokes Auhtor</label>
        </div>
        <div>  
        <input type="text" placeholder='Enter Your Joke Title' onChange={handleChangeTitle}  value={Title}  className="joke-input w-full p-2" />
        </div>
    </div>
    <div className="joke-content-div form-div mt-[1.5em]">
    <div>  
        <label htmlFor="Author" className="author-label text-sm md:text-lg">Joke Content</label>
        </div>
        <div>   
      <textarea name="content" className="joke-input w-full p-2" onChange={handletextArea} value={textArea} ></textarea>
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

