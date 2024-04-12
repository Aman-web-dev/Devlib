'use client'
import React, { useState } from 'react'
import axios from 'axios'

function Page() {
  

  const [userData,setUserData]=useState({})

  async function getUserData(userId) {
    try {
        const response = await axios.get("http://localhost:4000/get-userDeta",
        {params:{
          user_id:userId
        }});
        console.log(response.data[0]) 
        setUserData(response.data[0])
    } catch (error) {
        console.log("error during fetching data: ", error);
    }
}

const user_id = "F4k3Us3r1D" 


  return (
    <div>
      <button onClick={()=>getUserData(user_id)}>Click to fetch</button>
      {userData.user_id}
    </div>
  )
}




export default Page
