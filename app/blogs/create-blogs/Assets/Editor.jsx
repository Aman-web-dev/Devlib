"use client";


import React, { useEffect, useState } from 'react';
import Trix from "trix"


function Editor(props) {

    const [value,setValue]=useState()

    document.addEventListener("trix-before-initialize", () => {
      // Change Trix.config if you need
    })

    useEffect(()=>{
        props.handleData(value)
    },[value])
  return (
    <div className='w-1/2 h-full text-wrap' >
      <trix-toolbar></trix-toolbar>
     <trix-editor id='one' className="synap-trix-content" placeholder="Enter note here">


  
     </trix-editor>
     <form>
  <input id="x" type="hidden" name="content"/>
  <trix-editor input="x"></trix-editor>
</form>
    </div>
  )
}

export default Editor
