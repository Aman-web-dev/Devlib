import React from 'react'

function DialogueWrapper({children}) {
  const handleScroll=(e)=>{
    console.log(e.target.className)
     }
  return (
    <div className="w-[100vw] h-full  fixed left-0 bottom-0 bg-gray-400 bg-opacity-50 overflow-hidden z-10" onScroll={(e)=>{handleScroll()}}>
      {children}
    </div>
  )
}

export default DialogueWrapper
