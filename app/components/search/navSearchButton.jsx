'use client'

import React,{useState} from 'react'
import MainSearchComponent from './MainSearchComponent'

function navSearchButton() {

    const [visible,setVisible]=useState(false)


   const  handleDialogueBoxClose=(e)=>{
    console.log(e.target.id)
    if(e.target.id=='bg-grayScale'){
        setVisible(prev=>!prev)
    }
   }

  return (
    <div>
      
<form class="flex items-center  max-w-sm mx-auto" onClick={()=>setVisible(prev=>!prev)}>   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
    </div>

</form>


{
visible?
<div  className='w-full  top-0 h-screen left-0 fixed' >
{/* Background with lower opacity */}
<div id="bg-grayScale" className="w-full  top-0 h-screen left-0 opacity-40 bg-slate-50 absolute inset-0" onClick={(e) => handleDialogueBoxClose(e)}></div>

{/* MainSearchComponent */}
<div  className="relative md:max-w-[80vw] w-[90vw] m-auto">
    <MainSearchComponent />
</div>


</div>
:""
}



    </div>
  )
}

export default navSearchButton
