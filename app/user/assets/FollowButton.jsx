"use client";

import React, { useState, useEffect } from "react";
import { followUser, checkUserFollowed } from "../api/api";
import { useAuth } from "@/utils (Context)/authContext";

function FollowButton({ followed_id }) {
  const [followed, setFollowed] = useState(false);
  const { currentUser } = useAuth();


  const handleUserFollow = async () => {
    const followedUserObj = {
      follower_id: currentUser.uid,
      followed_id: followed_id,
    };
    await followUser(followedUserObj, () => {});
  };

  const isUserFollowed = async () => {
    try {
      const res = await checkUserFollowed(followed_id);
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

  return (
    <button
      onClick={() => {
        handleUserFollow;
      }}
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    >
      {followed?"Following":"Follow"}
    </button>
  );
}

export default FollowButton;
