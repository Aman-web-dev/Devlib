"use client";

import { useEffect } from "react";
import ShimmerEffect from "@/app/components/ShimmerEffect";
import Card from "./YoutubeCard";
import Link from "next/link";
import { useVideoStore } from "@/utils (Context)/zustStores";

function AddNewArticles() {
  const { getAllVideos, videoStore } = useVideoStore();
  useEffect(() => {
    getAllVideos();
  }, []);
  console.log("videos-store: ", videoStore)
  return (
    <section
      className={` dark:bg-[#121212] w-full px-12 py-12 relative min-h-screen gap-8`}
    >
      {videoStore?.length !== 0 ? (
        videoStore?.map((data) => (
          <Link href={`videos/${data?.vid_id}`} key={data?.id}>
            <Card data={data} />
          </Link>
        ))
      ) : (
        <ShimmerEffect />
      )}
      <Link
        className={`dark:bg-[#149eca] fixed right-10 bottom-10 p-4 rounded-full`}
        href={"/videos/addNewVideo"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      </Link>
    </section>
  );
}

export default AddNewArticles;
