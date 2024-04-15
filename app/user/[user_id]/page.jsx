"use client";

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/utils (Context)/authContext";
import { getUserPostCount } from "../api/api";
import FollowButton from "../assets/FollowButton";
import { useParams } from "next/navigation";

function Page() {
  const { currentUser } = useContext(AuthContext);
  const [userPostCount, setUserPostCount] = useState(0);
  const params = useParams()
  console.log("params",params)


  // async function getUserPostCount() {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:4000/api/user/post-count",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ userId: currentUser.uid }),
  //       }
  //     );
  //     const jsonResponse = await response.json();
     
  //     setUserPostCount(jsonResponse.data);
  //   } catch (error) {
  //     console.log("error while getting post count: ", error);
  //   }
  // }

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
          <RepoContainer />
          <RepoContainer />
          <RepoContainer />
          <RepoContainer />
          <RepoContainer />
          <RepoContainer />
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
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
          <PostContainer />
        </section>
      </div>
    </div>
  );
}

export default Page;

const RepoContainer = () => {
  return (
    <div
      id="repoContainer"
      className="border mx-1 dark:bg-[#374151] my-1   px-4 py-2 rounded-md"
    >
      <section className="flex gap-2 my-2">
        {/* <FileIcon Height={20} Width={20} /> */}
        <h1 className="text-green-400">Repo</h1>
      </section>
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, sed
        fugit reprehenderit reiciendis fugiat tempore ea cumque nihil at
        laboriosam id nisi, odit eos aliquid dignissimos dolore non aliquam.
        Iste!
      </p>
      <section id="tags" className="flex flex-wrap gap-2">
        <h1 className="text-red-400 mt-2">#React</h1>
        <h1 className="text-blue-400 mt-2">#React</h1>
        <h1 className="text-green-400 mt-2">#React</h1>
        <h1 className="text-yellow-400 mt-2">#React</h1>
      </section>
    </div>
  );
};

const PostContainer = () => {
  return (
    <div className="border py-4 px-4  ">
      <section className="flex items-center gap-4 my-2">
        <section className="  flex items-center">{/* <BookIcon /> */}</section>

        <h1 className=" dark:text-gray-200 font-bold">@My first Project</h1>
      </section>
      <section className="flex flex-row gap-4 my-2x">
        <h1 className=" dark:text-gray-200 font-bold">project</h1>
        <h1 className="text-xs  text-green-700 border border-green-400 rounded-full pt-1  px-2">
          Private
        </h1>
      </section>
      <h1 className="text-sm dark:text-[#717e8b] ">
        Uploaded on Date: 12/05/2023
      </h1>
    </div>
  );
};
