import React from "react";
import { CiSearch } from "react-icons/ci";
import Options from "./Options";

const SearchComponent = ({
  value,
  onChange,
  onClick,
  setHasMore,
  setPage,
  setQuery,
  setIsPopular,
  isPopular,
}) => {
  return (
    <div className=" top-20 z-50 flex items-center w-full">
      <div className="flex items-center w-1/2 gap-2 border rounded-3xl dark:bg-[#1d1e23]">
        <input
          value={value}
          onChange={onChange}
          type="text"
          className="dark:bg-[#1d1e23] outline-none w-full py-3 px-4 rounded-3xl  shadow-2xl"
          placeholder="Enter text"
        />
        <button onClick={onClick} disabled={value === ""} className="md:p-2 ">
          <CiSearch className="w-7 h-7" />
        </button>
      </div>

      <Options
        setIsPopular={setIsPopular}
        setHasMore={setHasMore}
        setPage={setPage}
        setQuery={setQuery}
        isPopular={isPopular}
      />
    </div>
  );
};

export default SearchComponent;
