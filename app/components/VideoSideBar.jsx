import { useVideoSidebar } from "@/utils (Context)/zustStores";
import React from "react";
import { VscMenu } from "react-icons/vsc";
import VideoSideBarOptions from "./VideoSideBarOptions";

const VideoSideBar = ({
  openSearchBox,
  setOpenSearchBox,
  setIsEmpty,
  setHasMore,
  setDataMessage,
  setPage,
  isPopular,
  setIsPopular,
}) => {
  const { videoSideBar, setVideoSideBar } = useVideoSidebar();
  return (
    <div>
      <div
        className={`${
          videoSideBar ? "left-0" : "-left-full"
        } fixed top-0 min-w-72 bg-major h-full z-[2024] overflow-y-auto`}
      >
        <button onClick={() => setVideoSideBar(false)} className="py-5 px-4">
          <VscMenu className="w-6 h-6" />
        </button>
        <VideoSideBarOptions
          openSearchBox={openSearchBox}
          setOpenSearchBox={setOpenSearchBox}
          setIsEmpty={setIsEmpty}
          setHasMore={setHasMore}
          setDataMessage={setDataMessage}
          setPage={setPage}
          isPopular={isPopular}
          setIsPopular={setIsPopular}
        />
      </div>
    </div>
  );
};

export default VideoSideBar;
