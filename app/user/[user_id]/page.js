"use client";
import ProfileHeader from "../assets/ProfileHeader";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import UsersResources from "../assets/ContentFeed";
import { getDataFromDatabase } from "@/app/authentication/customization/User-updating-apis/apiCalls";
import { Suspense } from "react";
import UserLoading from "./loading";
import { PostLoading } from "./loading";

function Page() {
  const params = useParams();
  console.log("the main Page Loaded");

  return (
    <div className="flex md:flex-row flex-col py-4">
      <Suspense fallback={<UserLoading />}>
        <ProfileHeader user_id={params.user_id} />
      </Suspense>

      <Suspense fallback={<PostLoading />}>
        <UsersResources />
      </Suspense>
    </div>
  );
}

export default Page;
