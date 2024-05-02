import React from "react";
import { CiSearch } from "react-icons/ci";
import Options from "./Options";
import { useVideoSidebar } from "@/utils (Context)/zustStores";
import { VscMenu } from "react-icons/vsc";
import DummySideBar from "./DummySideBar";
import { useState } from "react";
import VideoSideBar from "./VideoSideBar";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchComponent = ({
  value,
  onChange,
  onClick,
  setPage,
  setQuery,
  isPopular,
  setFetchHomeVideos,
  setIsPopular,
  setIsEmpty,
  setHasMore,
  setDataMessage,
}) => {
  const { videoSideBar, setVideoSideBar } = useVideoSidebar();
  const [openSearchBox, setOpenSearchBox] = useState(false);

  const handleSearch = () => {
    onClick;
    setOpenSearchBox(false);
  };

  return (
    <>
      <div>
        <DummySideBar
          Options={
            <Options
              value={value}
              onClick={onClick}
              setQuery={setPage}
              isPopular={isPopular}
              setFetchHomeVideos={setFetchHomeVideos}
              setIsPopular={setIsPopular}
              setOpenSearchBox={() => setOpenSearchBox(!openSearchBox)}
            />
          }
        />
        {videoSideBar && (
          <VideoSideBar
            openSearchBox={openSearchBox}
            setOpenSearchBox={setOpenSearchBox}
            setIsEmpty={setIsEmpty}
            setHasMore={setHasMore}
            setDataMessage={setDataMessage}
            setPage={setPage}
            isPopular={isPopular}
            setIsPopular={setIsPopular}
          />
        )}
      </div>
      {openSearchBox && (
        <div
          className={`z-[3000] backdrop-blur-3xl fixed top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-96 w-1/2  py-4 px-6 rounded-lg dark:bg-major dark:bg-opacity-50 `}
        >
          <button onClick={() => setOpenSearchBox(false)} className="mb-4">
            <IoMdClose />
          </button>
          <div className="flex gap-2 items-center">
            <input
              value={value}
              onChange={onChange}
              type="text"
              placeholder="Search..."
              className="w-full outline-none py-3 px-4 rounded-3xl dark:bg-mainColor drop-shadow-xl"
            />

            <button
              disabled={value === ""}
              onClick={() => {
                onClick();
                setOpenSearchBox(false);
              }}
            >
              <CiSearch className="w-6 h-6" />
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                window.open("https://github.com/Aman-web-dev", "_blank")
              }
              className="hover:bg-mainColor hover:bg-opacity-50 px-2 py-2 rounded-2xl mt-4 flex gap-2"
            >
              <FaGithub className="w-6 h-6" />
              <span>Aman</span>
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/rajnikantwebdev", "_blank")
              }
              className="hover:bg-mainColor hover:bg-opacity-50 px-2 py-2 rounded-2xl mt-2 flex gap-2"
            >
              <FaGithub className="w-6 h-6" />
              <span>Rajni Kant</span>
            </button>
          </div>
        </div>
      )}
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
