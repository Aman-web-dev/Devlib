"use client";

import React, { useState } from "react";
import DialogueWrapper from "@/app/components/dialogueWrapper";

import PersonalDetailsUpdate from "./components/ProfileUpdater/personalDetailsUpdate";
import Profile from "./components/ImageUpdater/Profile";

function page() {
  const [hidden,setHidden]=useState(true)
  return (
    <div className=" dark:bg-[#121212]  text-center my-8">
    
              <div className="bg-gradient-to-r from-slate-800 to-gray-700 shadow-xl shadow-white min-h-[70vh] bg-opacity-50 max-h-[200vh] mb-40 p-4 rounded-lg my-4 w-[80vw] mx-auto border">
        <Heading/>
        <Profile/>

        {hidden?"":<PersonalDetailsUpdate/>}

        <div class="inline-flex mt-4 gap-4">

          {hidden?
          <button
           onClick={()=>{setHidden(!hidden)}}
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">
                Customize Personal Details
              </span>
            </span>
          </button>:""}
        </div>
      </div>
   
    </div>
  );
}

export default page;



const Heading=()=>{
  return(
    <>
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Customize Your Profile According to Your Needs</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
<a href="/" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
<span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
<span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
<span class="relative text-white">Skip Customization</span>
</a>
</>
  )
}