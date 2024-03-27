import React from 'react'
import UserSVG from './assests/user.jsx'
import AlienIcon from './assests/Alien.jsx'

const SearchResults = (props) => {
  return (
    <div className=' w-[95%] mx-auto h-[80%]  overflow-auto overflow-x-hidden'>




<div id='userResults' className='w-[120%] border-b my-4'>
      <p className='dark:text-gray-300  text-sm my-4'>Users</p>

{props.searchResults.map((elem)=>{
  return(
<div key={elem.id} id="searchBox" className='flex rounded  h-10 align-center my-2'>
<div className='rounded-full  h-10 w-10 my-auto p-2'><AlienIcon/></div>
<p className=' mx-2 my-auto'>{elem.name}</p> 
</div>
  )
})}



</div>

<div id='userResults' className='w-[120%] border-b my-4'>
      <p className='dark:text-gray-300 text-sm my-4'>Repos</p>

      {props.searchdRepoData.map((elem)=>{
        return (
          <div key={elem.id} id="searchBox" className='flex rounded  h-10 align-center my-2'>
          <div className='rounded-full  h-10 w-10 my-auto p-2'><AlienIcon/></div>
          <p className=' mx-2 my-auto'>{elem.title}</p> 
          </div>
        )
      })}

</div>
    </div>
  )
}

export default SearchResults
