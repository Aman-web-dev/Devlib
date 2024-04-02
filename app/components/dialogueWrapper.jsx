import React from 'react'

function DialogueWrapper({children}) {
  return (
    <div className="w-[100vw] h-[100vh]  fixed top-0 left-0 bottom-0 bg-gray-400 bg-opacity-50 overflow-hidden">
      {children}
    </div>
  )
}

export default DialogueWrapper
