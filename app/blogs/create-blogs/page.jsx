"use client";


import React, { useState } from 'react';

import 'react-quill/dist/quill.snow.css';
import Editor from './Assets/Editor';
import Preview from './Assets/Preview';


function Page() {
  const [data,setData]=useState()

 const  handleEditData=(val)=>{
  setData(val)
  }

  return (
    <div className="min-h-screen max-w-[100vw] flex flex-row">
      <Editor handleData={handleEditData}/>
      <Preview text={data}/>
    </div>
  );
}

export default Page;
