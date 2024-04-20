"use client";

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/utils (Context)/authContext";
import { getUserPostCount } from "../api/api";
import FollowButton from "../assets/FollowButton";
import { useParams } from "next/navigation";
import Post from "../assets/Post";
import Repo from "../assets/Repo";

function Page() {
  const { currentUser } = useContext(AuthContext);
  const [userPostCount, setUserPostCount] = useState(0);
  const params = useParams()
  console.log("params",params)




const PostCount=()=>{
getUserPostCount({user_id:currentUser.uid},(result)=>setUserPostCount(result))
}

useEffect(() => PostCount(), []);
  
  
  return (
    <div className="flex md:flex-row flex-col py-4">
      <div className="py-4 px-12">
        <img
          src={currentUser?.photoURL}
          className=" w-40 rounded-full border p-1 dark:border-gray-400 border-black"
        />
        <h2 className="text-3xl mt-4">{currentUser?.displayName}</h2>
        <div className="flex gap-4">
          <span>{userPostCount} posts</span>
          <span>0 followers</span>
          <span>0 following</span>
          <FollowButton followed_id={params.user_id}/>

        </div>
        <h2 className=" mt-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          libero earum. Iste officia ut totam culpa numquam cumque asperiores
          fugit!
        </h2>
      </div>

      <div id="otherDetails" className="bg-green-400 md:w-full p-4">
        <h1 className="dark:text-gray-300 text-xl my-4">Pinned</h1>
        <section className="grid md:grid-cols-2 grid-cols-1 mx-auto w-full ">
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
          <Repo />
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </div>
    </div>
  );
}

export default Page;



