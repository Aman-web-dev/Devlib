'use client'

import React, { useState } from 'react'
import ImageUpdate from './components/ImageUpdater/imageUpdate'
import PersonalDetailsUpdate from './components/ProfileUpdater/personalDetailsUpdate'

function page() {

const [currentUpdate,setCurrentUpdate]=useState(<ImageUpdate/>)

const updateCurrent={
    components:{
       'imageUpdate':<ImageUpdate/>,
       'personDetailsUpdate':<PersonalDetailsUpdate/>
    },

    next:(e)=>{
        console.log(updateCurrent.components)
        setCurrentUpdate(updateCurrent.components[e.target.id])
        console.log("next")
    },
    previous:(e)=>{
        setCurrentUpdate(updateCurrent.components[e.target.id])
        console.log("previous")
    }

}


  return (
    <div className=' dark:bg-[#121212] bg-white text-center'>

<Heading/>

<div className='bg-white w-[80vw] mx-auto border'>
{currentUpdate}
<button className='text-black' id='imageUpdate' onClick={(e)=>{updateCurrent.next(e)}}>Next</button>
<button className='text-black' id='personDetailsUpdate' onClick={(e)=>{updateCurrent.previous(e)}}>Previous</button>
</div>



     </div>

  )
}

export default page













const Heading=()=>{
    return(
        
       
        <div className='mt-8'>
             <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better Data</span> Scalable AI.</h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
    
    )
}