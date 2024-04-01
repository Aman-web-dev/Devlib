'use client'

import React,{useRef,useState} from 'react'
import FetchUserData from './data'
import useclickOutisdeHook from '@/hooks/useclickOutisdeHook';



function page() {
  const elementRef=useRef(null);


  const [visible,setVisible]=useState(false)
  useclickOutisdeHook(elementRef,()=>{
    setVisible(false)
  },visible)


  return (
    <div>
  {visible?  
    <FetchUserData reference={elementRef}/>
  :""}
      <p>{visible?"true":"false"}</p>
      <button  onClick={()=>setVisible(true)}>Open</button>
    </div>
  )
}

export default page
