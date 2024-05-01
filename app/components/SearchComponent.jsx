import React from "react";
import { CiSearch } from "react-icons/ci";
import Options from "./Options";
import { useVideoSidebar } from "@/utils (Context)/zustStores";
import { VscMenu } from "react-icons/vsc";
import DummySideBar from "./DummySideBar";

const SearchComponent = ({
  value,
  onChange,
  onClick,
  setPage,
  setQuery,
  isPopular,
  setFetchHomeVideos,
  setIsPopular,
}) => {
  const { videoSideBar, setVideoSideBar } = useVideoSidebar();
  return (
    <>
      {/* <div className={`sticky top-16 left-0 bottom-0 z-[30] h-lvh py-24 px-4`}>
        <Options
          value={value}
          onClick={onClick}
          setQuery={setQuery}
          isPopular={isPopular}
          setFetchHomeVideos={setFetchHomeVideos}
          setIsPopular={setIsPopular}
        />
      </div>
      {videoSideBar && (
        <div className="fixed top-0 min-w-32 z-[100] bg-green-400 h-lvh">
          <button onClick={() => setVideoSideBar(false)}>
            <VscMenu />
          </button>
          <Options
            value={value}
            onClick={onClick}
            setQuery={setQuery}
            isPopular={isPopular}
            setFetchHomeVideos={setFetchHomeVideos}
            setIsPopular={setIsPopular}
          />
        </div>
      )} */}
      {/* {videoSideBar && <VideoSideBar />} */}
      <DummySideBar
        Options={
          <Options
            value={value}
            onClick={onClick}
            setQuery={setPage}
            isPopular={isPopular}
            setFetchHomeVideos={setFetchHomeVideos}
            setIsPopular={setIsPopular}
          />
        }
      />
    </>
  );
};

export default SearchComponent;

{
  /* <div className=" items-center  gap-2 border rounded-3xl dark:bg-[#1d1e23]">
        
      </div> */
}
{
  /* <button
        onClick={onClick}
        disabled={value === ""}
        className="p-2 dark:bg-[#1d1e23]"
      >
        <CiSearch className="w-7 h-7" />
      </button> */
}
// w-1/2 input div
{
  /* <input
          value={value}
          onChange={onChange}
          type="text"
          className="dark:bg-[#1d1e23] outline-none w-full py-3 px-4 rounded-3xl  shadow-2xl"
          placeholder="Enter text"
        /> */
}
{
  /* <button onClick={onClick} disabled={value === ""} className="md:p-2 ">
          <CiSearch className="w-7 h-7" />
        </button> */
}
