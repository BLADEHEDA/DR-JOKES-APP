import React from 'react'
const Jokes=(props)=>{
    return(
        <div className="jokes mb-[1em] lg:px-[2em]">
            <div className="jokes-emoji-div w-[3em] mb-2"> 
             <img src={props.src} alt="emoji-icon" className="jokes-emoji" /> </div>
            <p className="jokes-content text-center">  {props.jokeContent} </p>
            <p className="jokes-author font-bold ">   {props.jokeAuthor} </p>
        </div>
    )
}

const JokesDay = () => {
    const jokes=[
        {
        src:require("../images/2-2-grinning-face-emoji-png.png"), 
        jokecontent:"The past, present, and future walked into a bar. Things got a little tense",
        jokesAutor:"BladeHeda"

    },
    {   src:require("../images/5-2-face-with-tears-of-joy-emoji-png.png"), 
        jokecontent:"One day YouTube, Twitter, and Facebook will join together and be called: YouTwitFace",
        jokesAutor:"Blade"

    }
]

  return (
    <div className='dayjokes mb-[4em]'>
      <p className="dayjokes-head text-2xl font-bold text-center mt-[1em] text-center"> JOKES OF THE DAY</p>
        <div className="dayjokes-div-section ">
       { jokes.map(joke=>{
        const{src,jokecontent,jokesAutor}=joke;
        return(
            <div className="dayjokes-div mt-[1em] rounded-[0.5em] text-center p-[0.5em]">
                <Jokes src={src} jokeContent={jokecontent} jokeAuthor={jokesAutor} />

             </div>
        )
       })   }
        </div>
    </div>
  )
}

export default JokesDay
