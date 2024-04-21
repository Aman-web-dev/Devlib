import React from 'react'
import DialogueWrapper from '@/app/assets/dialogueWrapper'
import useclickOutisdeHook from '@/hooks/useclickOutisdeHook'
import FollowButton from './FollowButton'


function Modal(props) {

  return (
    <DialogueWrapper>
    <div className=' h-[100vh] w-full  '>

      <div className='h-1/2 w-[40vw]  mt-40 mx-auto overflow-y-scroll rounded-xl ' ref={props.reference} >

  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>
  <UserCard/>


  <div class="scrollbar" id="style-2">
				<div class="force-overflow"></div>
			</div>
      </div>
    </div>
    </DialogueWrapper>
  )
}

export default Modal


const UserCard=()=>{
  return(
    <div className='dark:bg-[#121212] bg-white font-bold border-b flex flex-row items-center justify-between px-4 pr-4 py-2'>
      Aman Kumar
      <FollowButton/>
    </div>
  )
}



