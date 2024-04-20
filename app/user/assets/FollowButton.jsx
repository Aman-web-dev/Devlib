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

  if (currentUser.uid == followed_id) {
    return;
  }

  useEffect(() => {
    isUserFollowed();
  }, []);

  return (
    <div class="flex flex-wrap justify-center gap-6">
      {followed ? (
        <button
          href="#"
          class="relative"
          onClick={() => {
            handleUserUnfollow();
          }}
        >
          <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
          <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
            Following
          </span>
        </button>
      ) : (
        <button
          class="relative"
          href="#"
          onClick={() => {
            handleUserFollow();
          }}
        >
          <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
          <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            Follow
          </span>
        </button>
      )}
    </div>
  );
}

export default FollowButton;
