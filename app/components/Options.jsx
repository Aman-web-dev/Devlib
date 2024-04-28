import { useVideoStore } from "@/utils (Context)/zustStores";
import React, { useEffect, useState } from "react";
import { MdVideoLibrary } from "react-icons/md";

const Options = ({
  setPage,
  setHasMore,
  setQuery,
  setIsPopular,
  isPopular,
}) => {
  const { getVideos, emptyVideoStore } = useVideoStore();

  const fetchHomeVideos = () => {
    setQuery("");
    emptyVideoStore();
    getVideos("", 1, { setPage, setHasMore }, false);
  };

  const fetchPopularVideos = () => {
    setIsPopular((prev) => !prev);
  };

  return (
    <div className="flex gap-4 items-center mx-6">
      <button
        className="flex items-center gap-2 dark:bg-[#1d1e23] bg-opacity-5 px-2 py-1 rounded-lg border border-white hover:dark:bg-[#31333a]"
        onClick={fetchHomeVideos}
      >
        <MdVideoLibrary />
        <span className="text-opacity-50">Videos</span>
      </button>
      {/* <button
        className={`${
          isPopular ? "bg-white text-black" : "dark:bg-[#1d1e23]"
        } flex items-center gap-2  px-2 py-1 rounded-lg border border-white `}
        onClick={fetchPopularVideos}
      >
        <MdVideoLibrary />
        <span>Popular</span>
      </button> */}
    </div>
  );
};

export default Options;
