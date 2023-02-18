import React from 'react'
// import close from "../../images/icon-close.svg"

const Modal = ({showModals, setShowModals}) => {
  // const [showModals, setShowModals] = React.useState(false);
  return (
    <div className='modal-div'>
          
          <div className=" m-auto mt-[3em] fixed inset-0 z-50 outline-none focus:outline-none w-[80%] h-[80vh] md:w-[60%]  overflow-y-auto" 
          >

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white
               outline-none focus:outline-none">
                     <button  
                    className="text-red-500 fixed flex start font-bold uppercase px-6 py-2 text-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>{ alert("yes boss")
                       setShowModals()}}
                  >  X
                   </button>
            
                <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold"> JOkes Category </h3>
             
                 
                </div>
            
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
    
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

export default Modal

