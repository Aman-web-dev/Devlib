import React from "react";
import { CiSearch } from "react-icons/ci";
const SearchComponent = ({ value, onChange, onClick }) => {
  return (
    <div className="flex items-center  gap-2">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="dark:bg-[#1d1e23] w-1/2 outline-none py-3 px-4 rounded-3xl  shadow-2xl"
        placeholder="Enter text"
      />
      <button
        onClick={onClick}
        disabled={value === ""}
        className="dark:bg-[#1d1e23] md:p-2 rounded-full"
      >
        <CiSearch className="w-7 h-7" />
      </button>
    </div>
  );
};

export default SearchComponent;
