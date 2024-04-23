"use client";


import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



function Editor(props) {

    const [value,setValue]=useState()

    useEffect(()=>{
        props.handleData(value)
    },[value])
  return (
    <div className='w-1/2 h-full text-wrap' >
        <ReactQuill theme="snow" value={value} onChange={setValue} />
     
    </div>
  )
}

export default Editor
