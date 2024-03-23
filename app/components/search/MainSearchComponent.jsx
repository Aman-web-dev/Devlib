'use client'

import React,{useState} from 'react'
import SearchResults from '@/app/components/search/searchResults'

const MainSearchComponent = () => {

  const [searchResultData,setSearchResultData]=useState([])
  const [searchdRepoData,setSearchedRepoData]=useState([])
  const [searchedValue,setSearchedValue]=useState("")

    const fetchRes=async(value)=>{
      await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {const result = json.filter((user)=>{
        return user && user.name && user.name.toLowerCase().includes(value)
      }); setSearchResultData(result)})



      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res =>res.json())
      .then((val)=>{
        const result= val.filter((elem)=>{
           return elem && elem.title && elem.title.toLowerCase().includes(value)
        })

        setSearchedRepoData(result)
      })
    }


  



    const handleSearch=(e)=>{
      setSearchedValue(e.target.value)
      fetchRes(e.target.value)
    }



  return (
    <div onClick={fetchRes} className='md:h-[50vh] md:w-[80vw] w-[90vw] dark:bg-[#22272e] bg-white border rounded-xl my-2 mx-auto'>
     <form class="flex items-center  mx-4 my-2 ">   
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required onChange={(e)=>handleSearch(e)}/>
       
    </div>
  
</form>



<SearchResults searchResults={searchResultData} searchdRepoData={searchdRepoData}/>
    </div>
  )
}

export default MainSearchComponent
