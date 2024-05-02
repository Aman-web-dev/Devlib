import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdVideoLibrary } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { useVideoSidebar, useVideoStore } from "@/utils (Context)/zustStores";
import { useRouter } from "next/navigation";

const VideoSideBarOptions = ({
  openSearchBox,
  setOpenSearchBox,
  setIsEmpty,
  setHasMore,
  setDataMessage,
  setPage,
  isPopular,
  setIsPopular,
}) => {
  const { setVideoSideBar } = useVideoSidebar();
  const { getVideos, emptyVideoStore } = useVideoStore();
  const router = useRouter();
  const handleSearch = () => {
    setVideoSideBar(false);
    setOpenSearchBox(true);
  };

  const handleAllVideos = () => {
    emptyVideoStore({ setIsEmpty, setHasMore });
    getVideos("", 1, {
      setIsEmpty,
      setPage,
      setHasMore,
      setDataMessage,
    });
    setVideoSideBar(false);
  };

  const handlePopularVideos = () => {
    emptyVideoStore({ setIsEmpty, setHasMore });
    setIsPopular((prev) => !prev);
  };

  const handleGitHub = () => {
    window.open("https://github.com/Aman-web-dev/Devlib", "_blank");
  };

  return (
    <div className="grid gap-4 my-12 px-2 ">
      <div
        onClick={handleSearch}
        className="flex items-center gap-3 hover:bg-gray-200 hover:bg-opacity-50 cursor-pointer py-1 px-2 w-1/2 rounded-xl"
      >
        <button className="rounded-full p-1">
          <CiSearch className="w-6 h-6" />
        </button>
        <span className="text-md">Search</span>
      </div>
      <VideoBarOptionsComponent
        onClick={handleAllVideos}
        text={"All"}
        icon={<MdVideoLibrary className="w-6 h-6" />}
      />
      <VideoBarOptionsComponent
        onClick={handleGitHub}
        text={"Git hub"}
        icon={<FaGithub className="w-6 h-6" />}
      />
      <VideoBarOptionsComponent
        onClick={handlePopularVideos}
        text={"Popular"}
        icon={<FaTrophy className="w-6 h-6" />}
      />
    </div>
  );
};

export const VideoBarOptionsComponent = ({ onClick, text, icon }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 hover:bg-gray-200 hover:bg-opacity-50 cursor-pointer py-1 px-2 rounded-xl w-1/2"
    >
      <button className="dark:bg-[#1d1e23] rounded-full p-1">{icon}</button>
      <span className="text-md">{text}</span>
    </div>
  );
};

export default VideoSideBarOptions;
