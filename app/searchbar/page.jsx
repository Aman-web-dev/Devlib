'use client'

import React from 'react'
import SearchResults from '../components/search/searchResults'

const page = () => {

    const fetchRes=async()=>{
      const result = await   fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
    }



  return (


    <div onClick={fetchRes}>
  
    </div>
  )
}

export default page
