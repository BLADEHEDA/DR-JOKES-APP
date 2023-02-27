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
    const [Email,setEmail]=useState("");
    const [select ,setSelect]= useState([]);
    // 
  // define the container array for the newjokes 
  const[newJOkes , setnewJOkes]=useState([])
  // define integer names for your select tap 


    // the function below handles the behaviour of the input 
    let authotValue , titleValue,textAreaValue, EmailValue;
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
    // Track the chenges of the Enail
    const handlechangeEmail=(e)=>{
      EmailValue=e.target.value
      setEmail( EmailValue)
    }
    //Track changes of the Select 
    const handlechangeSelect =(e)=>{
      console.log(e.target.value)
    setSelect(e.target.value)
   }

    const handleSubmit=(e)=>{
      e.preventDefault();
  
    //  append the values to the array 

    if((Author.length<2 && Title.length<2 && textArea.length<10) ){
      setvalidTitle(!validTitle)
      setvalidAuthor(!validAuthor)
      setvalidvalidtextArea(!validtextArea )
    }
    else if(!(Author.length>2)){
      setvalidAuthor(!validAuthor)
      setvalidTitle()
      setvalidvalidtextArea()
    }
   else if(!(Title.length>2)){
     setvalidTitle(!validTitle)
     setvalidAuthor()
     setvalidvalidtextArea()
    }
    else if(!(textArea.length>10)) {
     setvalidvalidtextArea(!validtextArea )
     setvalidAuthor()
     setvalidTitle()
      }
   
    // else if((Author.length && Title.length)>2 &&textArea.length>10 ){
      if( Title.length>2 &&Author.length>2 && textArea.length>10){ 
    const newJoke= {
      id:Math.floor(Math.random()*10000),
      punchline:Title,
      setup:textArea,
      authoer_name:Author,
      author_email:Email,
      category_id:parseInt(select)
       
    }
    // add the new joke instance to an array 
    const addnewJOkes= [...newJOkes,newJoke]
     setnewJOkes(addnewJOkes);
     console.log(addnewJOkes );
    // THE lines below are subjected to changes 
         fetch(`https://api.jokes.digitalrenter.com/api/jokes`, {
         method: 'POST',
         body: JSON.stringify({ 
          punchline:Title,
          setup:textArea,
          author_name:Author,
          author_email:Email,

          category_id:parseInt(select)
         }),
         headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
         .then((res) => res.json())
         .then((newJOkes ) => {
            // Add the body body of the to the pst request by means of spread
             setnewJOkes([...newJOkes,newJoke]);
             console.log("Below is what to be added to the Api");
             console.log(newJOkes);
            //  subjected to change 
             setAuhtor("");
             setTitle("")
             settextArea("");
             setEmail("")
             setSelect("")
         })
         .catch((err) => {
            console.log(err.message);
         });
    //  reset the values of the Validatee-erros if valid 
    setvalidAuthor()
    setvalidTitle()
    setvalidvalidtextArea()
     setshowformModal()
     alert(" Joke Added Thats Dope ")
    }

    }



  return (
    <section className="formmodal-section h-[60vh] py-1  w-[75%]  md:w-[35%] py-3   m-auto inset-0 z-50 bg-white fixed mb-[14em] rounded-xl">
    <div className="modal-head-section1 text-center px-5 mb-0.5"     onClick={() =>{ 
                      setshowformModal()}}
                  > 
    <h3 className="text-2xl md:text-3xl font-semibold center">Add Jokes</h3>

      </div>
<form className="relatives px-4 pb-10 md:px-7 " onSubmit={handleSubmit} >
    <div className="Author-div form-div ">
        <div className=" mt-[0.5em]">  
        <label htmlFor="Author" className="author-label mt-[0.5em] text-sm p-2 md:text-lg  ">Author</label>
        </div>
        <div className="w-full form-element">   
        <input type="text" name="author_name" placeholder='Enter Your Name' onChange={handleChangeAuthor} value={Author } 
        className="joke-input  w-full p-2" /> 
        {validAuthor? <div className="errors text-sm text-red-600">Enter a valid Name</div>:null   }
        </div>
    </div>
    <div className="joke-title-div form-div mt-[.3em]">
    <div className=" mt-[0em]">  
        <label htmlFor="Author" className="author-label text-sm md:text-lg">Author Email</label>
        </div>
        <div>  
        <input type="email"  name="author_email" placeholder='Enter Your Email Adresss' onChange={handlechangeEmail}  value={EmailValue} 
         className="joke-input w-full p-2" />
         { validTitle?<div className="errors text-sm text-red-600">Enter a valid Email Adresss</div>:null   }
        </div>
    </div>
   
        <div className="joke-title-div form-div mt-[.3em] ">
    <label htmlFor="Author" className="author-label text-sm md:text-lg">Choose a category</label>
  <select name="categories"  className='select  w-full p-2 focus:outline-none ' onChange={ handlechangeSelect } > 
  <option name="relationship" >Choose Option</option>
    <option name="category_id" value={1}>Relationship Jokess</option>
    <option  name="category_id" value={2} >Education Jokes</option>
    <option   name="category_id"value={3}>Westernv Jokes</option>  
    <option  name="category_id"value={4}>Tech Jokes</option>
    <option  name="category_id"value={5}> African Jokes</option>
    <option  name="category_id"value={5}>Family JOkes</option>
  </select>
</div>

    <div className="joke-title-div form-div mt-[0.3em]">
    <div className=" mt-[0em]">  
        <label htmlFor="Author" className="author-label text-sm md:text-lg">Jokes Punchline</label>
        </div>
        <div>  
        <input type="text"  name="punchline" placeholder='Enter Your Joke Joke Punchline' onChange={handleChangeTitle}  value={Title} 
         className="joke-input w-full p-2" />
         { validTitle?<div className="errors text-sm text-red-600">Enter a valid Joke Punchline</div>:null   }
        </div>
    </div>

    <div className="joke-content-div form-div mt-[.3em]">
    <div>  
        <label htmlFor="Author" className="author-label text-sm md:text-lg">Joke Content</label>
        </div>
        <div>   
      <textarea name="setup" className="joke-input w-full p-2" onChange={handletextArea} value={textArea} ></textarea>
      { validtextArea ?<div className="errors text-sm text-red-600">Joke should be atleast 10 Characters</div>:null   }
     
      </div>
      <div>   
      <Button  style={{color:"white",background:"rgba(0, 0, 255, 0.84)",borderRadius:"5px" 
      ,padding:"0.75em 1em",margin:"0.5em 0em 2em 0em",width:"100%" }} text="Add Jokes" />
      </div>
    </div>
       </form>
       

</section>
  )
}

export default FormModal

