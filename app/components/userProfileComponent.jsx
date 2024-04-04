"use client";

import { AuthContext } from "@/utils (Context)/authContext";
import { useContext, useEffect } from "react";

export default function UserProfileComponent() {
  const { currentUser } = useContext(AuthContext);
  function getPostCount() {
    return 0;
  }
  return (
    <section className="w-full min-h-screen h-full bg-red-200">
      <div className="flex py-12">
        <div className="photo-container">
          <img
            className="rounded-full"
            src={currentUser?.photoURL}
            alt={currentUser?.displayName}
          />
        </div>
        <div>hello</div>
      </div>
    </section>
  );
}
