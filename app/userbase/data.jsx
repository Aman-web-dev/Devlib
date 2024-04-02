'use client'

import { useRef,useState } from "react"
import useclickOutisdeHook from "@/hooks/useclickOutisdeHook"

export default  function FecthUserData(props){

  return(
    <div ref={props.reference} className="w-[40vw] h-[40vw] bg-blue-400">
<div >I am a Dialogue Box</div>
    </div>
  )
   
  
}

