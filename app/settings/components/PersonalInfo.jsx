import React from 'react'

function PersonalInfo() {
  return (
    <div className="min-h-screen bg-[#23272f] text-[#adb9c5] ">
   

   <div className="w-[90%] m-auto">
        <p className="text-2xl border-b py-4">Change Phone Number</p>
        <p className="text-sm my-4">Change Your phone Number</p>
        <button className="bg-[#373e47] py-2 px-2 rounded-lg my-2">
          Change Phone Number
        </button>
      </div>

      <div className="w-[90%]  m-auto">
        <p className="text-2xl border-b py-4">Change Theme</p>
        <p className="text-sm my-4">Chnage Your Color Scheme and</p>
        <button className="bg-[#373e47] py-2 px-2 rounded-lg my-2">
          Change Theme
        </button>
      </div>

      <div className="w-[90%] m-auto">
        <p className="text-2xl border-b py-4">Change Password</p>
        <p className="text-sm my-4">Chnage Your login Password.</p>
        <button className="bg-[#373e47] py-2 px-2 rounded-lg my-2">
          Change username
        </button>
      </div>




  </div>
  )
}

export default PersonalInfo
