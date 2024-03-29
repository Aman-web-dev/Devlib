'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'

function page() {
  const params = useParams()

  const [userData,setUserData]=useState({})




  


  async function getUserData(userId) {
    try {
        const response = await fetch("http://localhost:4000/get-userDeta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: userId }),
        });
        console.log(response)
        // const data
        // console.log(data); // Logging the response data
    } catch (error) {
        console.log("error during fetching data: ", error);
    }
}

const user_id = "g6jvHvLep0aPXi32g4261t63y7P2" // Replace "your_user_id_here" with the actual user ID


  return (
    <div>
      <button onClick={()=>getUserData(user_id)}>Click to fetch</button>
      {/* {id} */}
    </div>
  )
}

export default page
