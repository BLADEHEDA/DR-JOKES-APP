import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp,faThumbsDown,faComment,faPlus} from '@fortawesome/free-solid-svg-icons'


const JokesProp = (props) => {
  return (

       <section className="jokes-prop-card w-[60%] m-auto p-[1em] rounded-[10px] my-[1.5em]"> 
            <div className="prop-img-div flex justify-center ">
            <img src={props.src} alt="prop-emoji" className="category-img w-[3em]" /> </div>
            <p className="prop-title font-bold text-center "> {props.title} </p>
            <p className="prop-content text-center text-base my-2 "> {props.content}   </p>
            <p className="prop-author-content text-center font-bold ">{props.author} </p>
                <div className="props-icons flex justify-evenly mt-2"> 
                    <div className="likes"> <FontAwesomeIcon icon={faThumbsUp} /></div>
                    <div className="dislike"><FontAwesomeIcon icon={faThumbsDown} /></div>
                    <div className="comments"> <FontAwesomeIcon icon={faComment} /></div>
                    <div className="add"> <FontAwesomeIcon icon={faPlus} /></div>
                </div>
    </section>

  )
}

export default JokesProp

