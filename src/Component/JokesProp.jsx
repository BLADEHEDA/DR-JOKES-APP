// Subjected to changes . This is the JOkes  jokesprop
import { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faThumbsUp,faThumbsDown,faComment,faPlus} from '@fortawesome/free-solid-svg-icons'
import Comment from "./Comment"
import FormModal from './Navbar/FormModal'

const JokesProp = (props) => {
    // the lines that follow are the code to implement the states of the like comment and subscribe functionalities 
    // like states 
    const [like, setLike]=useState(0)
const handleLike =()=>{
    setLike(like+1);
}
    // like states 
    const [dislike, setDislike]=useState(0)
const handleDislike =()=>{
    setDislike(dislike+1);
}
// Hide and show the comment modal 
const [comment ,setComment]=useState();
const handleComment=()=>{
    setComment(!comment)
}
// The code to show and hide show the form to add jokes 
const [ showformModal,setshowformModal] = useState();
const handleformModal=()=>{
    setshowformModal(!showformModal)
    // implement the get request for the jokes per joke id 
}

  return (
<div>     
       <section className="jokes-prop-card   md:w-[75%] lg:w-[60%]  m-auto py-[1em] px-[1.5em] rounded-[10px] mb-[2em]"> 
            <div className="prop-img-div w-[2em] m-auto ">
            <img src={props.src} alt="prop-emoji" className="category-img " /> </div>
            <p className="prop-title font-bold text-center "> {props.title} </p>
            {/* <p className="prop-title font-bold text-center "> {props.jokesid} </p> */}
            <p className="prop-content text-center text-base my-2 break-all "> {props.content}   </p>
            <p className="prop-author-content text-center font-bold text-slate-600">{props.author} </p>
                <div className="props-icons flex justify-evenly mt-7"> 
                    <div className="likes cursor-pointer"> <FontAwesomeIcon icon={faThumbsUp} onClick={ handleLike} /> {like} </div>
                    <div className="dislike cursor-pointer"><FontAwesomeIcon icon={faThumbsDown} onClick={ handleDislike} /> {dislike} </div>
                    <div className="comments cursor-pointer"> <FontAwesomeIcon icon={faComment} onClick={ handleComment} /></div>
                    <div className="add cursor-pointer"> <FontAwesomeIcon icon={faPlus} onClick={handleformModal}  /></div>
                </div>
    </section>
            { comment?<Comment  id={props.jokesid}/>:""}
           {showformModal?<FormModal showformModal={showformModal} setshowformModal={setshowformModal} />:""}
    </div>
  )
}
export default JokesProp

