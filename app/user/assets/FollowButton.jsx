"use client";

import React, { useState, useEffect } from "react";
import { followUser, checkUserFollowed, userUnfollow } from "../api/api";
import { useAuth } from "@/utils (Context)/authContext";

function FollowButton({ followed_id }) {
  const [followed, setFollowed] = useState(false);
  const { currentUser } = useAuth();
  console.log("user Followed", followed_id);
  const followedUserObj = {
    follower_id: currentUser.uid,
    followed_id: followed_id,
  };

  const handleUserFollow = async () => {
    await followUser(followedUserObj, (res) => {
      console.log(res.message);
      isUserFollowed();
    });
  };

  const handleUserUnfollow = async () => {
    await userUnfollow(followedUserObj, (res) => {
      console.log(res.message);
      isUserFollowed();
    });
  };

  const isUserFollowed = async () => {
    try {
      const res = await checkUserFollowed(followedUserObj);
      console.log("before follow Check", res);
      if (res == true) {
        setFollowed(true);
      } else {
        setFollowed(false);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    isUserFollowed();
  
  }, []);
  
  if(currentUser.uid==followed_id){
    return 
  }

  return (
    
      <div className="flex flex-wrap justify-center gap-6 z-0  rounded-lg mx-2">
        {followed ? (
          <button
            href="#"
            className=""
            onClick={() => {
              handleUserUnfollow();
            }}
          >
            <span className=" top-0 left-0 mt-1 ml-1 h-full w-full  rounded bg-gray-700"></span>
            <span className="fold-bold relative inline-block h-full  w-full rounded border-2 border-white bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
              Following
            </span>
          </button>
        ) : (
          <button
            className="relative"
            href="#"
            onClick={() => {
              handleUserFollow();
            }}
          >
            <span className="top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-blue-400"></span>
            <span className="fold-bold  inline-block h-full w-full rounded border-2 border-blue-600 bg-blue-400  px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-blue-900 hover:text-gray-200 hover:border-gray-300">
              Follow
            </span>
          </button>
        )}
      </div>
  );
}

export default FollowButton;
