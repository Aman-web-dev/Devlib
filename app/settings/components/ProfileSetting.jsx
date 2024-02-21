import React from 'react'
import { useAuth } from '@/utils (Context)/authContext'


function ProfileSetting() {
    const {
        currentUser,
        userLoggedIn,
        loading,
      }=useAuth()

    console.log(currentUser,userLoggedIn,loading)
  return (
    <>
    <div className="w-full flex flex-col bg-[#23272f] min-h-screen text-white ">
  
    <section className='flex flex-col mx-auto my-4 justify-center text-center '>
    <img src={currentUser.photoURL} className='rounded-full h-40 w-40 mx-auto'/>
    <p className='text-2xl mt-2 font-sans font-bold'>{currentUser.displayName}</p>
    <p className='text-xl '>{currentUser.email}</p>

    </section>
   
    </div>
    </>
  )
}

export default ProfileSetting
