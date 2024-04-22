import React from 'react'
import UserRepo from './UsersRepo'
import UserPost from './UsersPost'



const ContentFeed = () => {


  return (
    <div>
        <div id="otherDetails" className=" md:w-full p-4">
        <h1 className="dark:text-gray-300 text-xl my-4">Pinned</h1>
        <section className="grid md:grid-cols-2 grid-cols-1 mx-auto w-full ">
          <UserRepo />
          <UserRepo />
          <UserRepo />
          <UserRepo />
          <UserRepo />
          <UserRepo />
        </section>

        <h1 className="dark:text-gray-300 text-xl my-4">Posts</h1>

        <section className=" flex flex-wrap dark:bg-[#2d333b] px-2 py-4 border rounded-t-lg">
          <div className="dark:text-gray-300 p-2 text-lg">
            Number Of Projects
          </div>
          <div className=" p-2 text-lg">Projects </div>
          <div className="font-bold p-2 text-xl">@UserName </div>
        </section>

        <section id="Posts" className="grid grid-cols-1 mx-auto w-full">
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
          <UserPost />
        </section>
      </div>
    </div>
  )
}

export default ContentFeed
