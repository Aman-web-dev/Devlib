"use client";

import React, { useState } from "react";
import SearchResults from "@/app/components/search/searchResults";
import DialogueWrapper from "../dialogueWrapper";


const MainSearchComponent = (props) => {
  const [searchResultData, setSearchResultData] = useState([]);
  const [searchdRepoData, setSearchedRepoData] = useState([]);

  const fetchRes = async (value) => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) => {
          return user && user.name && user.name.toLowerCase().includes(value);
        });
        setSearchResultData(result);
        console.log(result);
      });

    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((val) => {
        const result = val.filter((elem) => {
          return elem && elem.title && elem.title.toLowerCase().includes(value);
        });

        setSearchedRepoData(result);
      });
  };

  const handleSearch = (e) => {
    fetchRes(e.target.value);
  };

  return (

  <DialogueWrapper>
    <div
      onClick={fetchRes}
      ref={props.reference}
      className="bg-blue-500 md:h-[50vh] md:w-[80vw] w-[80vw] top-0 h-screen md:left-20 left-10 fixed dark:bg-[#22272e]  border rounded-xl my-2 mx-auto"
    >
      <form className="flex items-center  mx-4 my-2 ">
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </form>

      <SearchResults
        searchResults={searchResultData}
        searchdRepoData={searchdRepoData}
      />
    </div>
    </DialogueWrapper>
  );
};

export default MainSearchComponent;
