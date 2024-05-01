//options
import { useVideoStore } from "../../utils (Context)/zustStores";
import React, { useState } from "react";
import { MdVideoLibrary } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Options = ({
  value,
  onClick,
  setQuery,
  isPopular,
  setFetchHomeVideos,
  setIsPopular,
}) => {
  const { getVideos, emptyVideoStore } = useVideoStore();
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const fetchHomeVideos = () => {
    setFetchHomeVideos((prev) => !prev);
    setIsPopular(false);
    setQuery("");
    console.log("running all video");
  };

  const fetchPopularVideos = () => {
    setIsPopular((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-full">
      <div className="space-y-5 flex-1">
        <div className="grid place-items-center">
          <button
            onClick={() => alert("Under construction!!")}
            disabled={value === ""}
            className="dark:bg-[#1d1e23] rounded-full p-1"
          >
            <CiSearch className="w-6 h-6" />
          </button>
          <span className="text-xs">Search</span>
        </div>
        <div className="grid place-items-center">
          <button
            className="dark:bg-[#1d1e23] p-1 rounded-full hover:dark:-[#1497c1]"
            onClick={fetchHomeVideos}
          >
            <MdVideoLibrary className="w-6 h-6" />
          </button>
          <span className="text-xs">All</span>
        </div>
        <div className="grid place-items-center">
          <button
            className={`${
              isPopular ? "bg-white text-black" : "dark:bg-[#1d1e23]"
            }   hover:dark:-[#1497c1] p-1 rounded-full`}
            onClick={fetchPopularVideos}
          >
            <FaTrophy className="w-6 h-6" />
          </button>
          <span className="text-xs">Popular</span>
        </div>
      </div>
      <hr />
      {/* <div>
        <div className="grid place-items-center">
          <button
            className={`${
              isPopular ? "bg-white text-black" : "dark:bg-[#1d1e23]"
            }   hover:dark:-[#1497c1] p-1 rounded-full`}
            onClick={fetchPopularVideos}
          >
            <FaGithub className="w-6 h-6" />
          </button>
          <span className="text-xs">Popular</span>
        </div>
      </div> */}
      {openSearchBox && (
        <div className="fixed top-20 right-0 min-w-24 bg-red-400 bottom-3  z-[4000]">
          hello
        </div>
      )}
    </div>
  );
};

export default Options;
