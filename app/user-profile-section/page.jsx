import React from 'react'

function page() {

  return (
    <div >
      <div id="profile" className="profile">

        <img src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1710992753~exp=1710996353~hmac=2af61fc06522af9b5c2b2141e34e3eb3bd7170d25f11c7128e7b29bacb8a0d32&w=996' className='h-20 rounded-full w-20'/>


        <div id="userDetails">

          <p>{}</p>
        </div>
      </div>
      <div id="projects"></div>
    </div>
  ) 
}

export default page
