"use client";

import React, { useState } from "react";
import SearchResults from "@/app/components/search/searchResults";
import DialogueWrapper from "../../assets/dialogueWrapper";
import axios from "axios";



const MainSearchComponent = (props) => {
  const [searchResultData, setSearchResultData] = useState([]);
  const [searchdRepoData, setSearchedRepoData] = useState([]);


  const fetchRes = async (value) => {
    // setSearch(value);
    console.log(value.length)
    if(value.length<=0){
        setSearchResultData([])
        console.log("length is Short")
        return 0
    }

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}searchUsers`, {
        params: {
          searchedWords: value.toLowerCase(),
        },
      });
     const endResult=response.data.map((user)=>{
        if(user.name.toLowerCase().includes(value)){
            return user 
        }
       })
       console.log(endResult)
       setSearchResultData(endResult)
        console.log(response.data);
        console.log(endResult)
        console.log(searchResultData);
    } catch (error) {
      console.log("we Got an Error");
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    fetchRes(e.target.value);
  };

  return (

  <DialogueWrapper>
    <div
      onClick={fetchRes}
      ref={props.reference}
      className="bg-blue-500 md:h-[50vh] md:w-[80vw] w-[80vw] top-0 h-screen md:left-20 left-10 fixed dark:bg-[#121212]  border rounded-xl my-2 mx-auto"
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
