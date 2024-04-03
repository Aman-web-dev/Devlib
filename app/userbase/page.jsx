"use client";

import { useState } from "react";
import axios from "axios";

const page = () => {
  const [search, setSearch] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);

  const fetchData = async (value) => {
    setSearch(value);
    console.log(value.length)
    if(value.length<=0){
        setSearchResultData([])
        console.log("length is Short")
        return 0
    }

    try {
      const response = await axios.get("http://localhost:4000/get-userData", {
        params: {
          searchedWords: value,
        },
      });
     const endResult=response.data.map((user)=>{
        if(user.name.toLowerCase().includes(value)){
            return user 
        }
       })
       setSearchResultData(endResult)
        console.log(response.data);
        console.log(endResult)
        console.log(searchResultData);
    } catch (error) {
      console.log("we Got an Error");
      console.log(error);
    }
  };

  return (
    <div>
      <span>Put some Value=</span>
      <input
        type="text"
        onChange={(e) => fetchData(e.target.value)}
        className="h-5"
        placeholder="search User"
      />

      <p>{search ? search : ""}</p>

      <div className="flex flex-col">
        {searchResultData?.map((elem) => {
          return <p key={elem.user_id}>{elem.name}</p>;
        })}
      </div>
    </div>
  );
};

export default page;
