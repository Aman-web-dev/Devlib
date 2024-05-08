"use client";

import React, { useEffect,useState } from "react";

function Preview(props) {
  const [data, setData] = useState([]);
  return <div className="w-[80vw] p-24 min-h-screen  my-8 bg-white text-black text-wrap border-2 rounded-xl" dangerouslySetInnerHTML={{__html:props.data}}/>
}

export default Preview;
