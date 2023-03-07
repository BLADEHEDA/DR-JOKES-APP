import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Jokes=(props)=>{
  return(
      <div className="jokes mb-[1em] lg:px-[2em]">
          <div className="jokes-emoji-div  mb-2 w-[3em]"> 
           <img src={props.src} alt="emoji-icon " className="jokes-emoji " /> </div>
          <p className="jokes-content text-center">  {props.jokeContent} </p>
          <p className="jokes-author font-bold ">   {props.jokeAuthor} </p>
      </div>
  )
}

const Carousel = () => {
    // defining the image 
    const jokes=[
        {
        src:require("../images/2-2-grinning-face-emoji-png.png"), 
        jokecontent:"The past, present, and future walked into a bar. Things got a little tense",
        jokesAutor:"BladeHeda"

    },
    {   src:require("../images/5-2-face-with-tears-of-joy-emoji-png.png"), 
        jokecontent:"One day YouTube, Twitter, and Facebook will join together and be called: YouTwitFace",
        jokesAutor:"Blade"

    },
    {    src:require("../images/2-2-grinning-face-emoji-png.png"), 
    jokecontent:"What did the fried rice say to the shrimp? Don’t wok away from me! ",
    jokesAutor:"Becca"

}
]
// heree are the settingd of the App
const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 4000,
   
  };
  return (

      <div className="dayjokes mb-[4em] mt-[2em]">
          <p className="dayjokes-head text-2xl font-bold text-center mt-[2em] text-center"> JOKES OF THE DAY</p>
        <Slider  {...settings} >
  { jokes.map(joke=>{
        const{src,jokecontent,jokesAutor}=joke;
        return(
            <div className="dayjokes-div  mt-[1em] rounded-[0.5em] text-center p-[0.5em]">
                <Jokes src={src} jokeContent={jokecontent} jokeAuthor={jokesAutor} />

             </div>
        )
       })   }
        </Slider>
      </div>
  )
}

export default Carousel
