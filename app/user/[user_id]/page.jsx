"use client";
import ProfileHeader from "../assets/ProfileHeader";

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/utils (Context)/authContext";
import { getUserPostCount } from "../api/api";
import FollowButton from "../assets/FollowButton";
import { useParams } from "next/navigation";
import Post from "../assets/UsersPost";
import Repo from "../assets/UsersRepo";
import UsersResources from "../assets/ContentFeed";
import Modal from "../assets/Modal";


function Page() {
  const { currentUser } = useContext(AuthContext);
  const [userPostCount, setUserPostCount] = useState(0);



  const postCount = () => {
    getUserPostCount({ user_id: currentUser.uid }, (result) =>
      setUserPostCount(result)
    );
  };

  useEffect(() => postCount() , []);

  return (
    <div className="flex md:flex-row flex-col py-4">
   <ProfileHeader/>
   <UsersResources/>


    </div>
  );
}

export default Page;



