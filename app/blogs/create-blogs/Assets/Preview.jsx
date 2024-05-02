"use client";

import React, { useEffect,useState } from "react";

function Preview(props) {
  const [data, setData] = useState([]);

  // const convertHtmlToPlain = (htmlText) => {
  //   var tempDiv = document.createElement("div");
  //   tempDiv.innerHTML = htmlText;
  //   console.log("tempDiv",tempDiv)
  //   setData(tempDiv || tempDiv.innerText || "");
  //   console.log(data)
  //   return tempDiv.textContent || tempDiv.innerText || "";
  // };

  // useEffect(() => {
  //   convertHtmlToPlain(props.data);
  // }, []);

  return <div className="w-[80vw] p-24 min-h-screen  my-8 bg-white text-black text-wrap" dangerouslySetInnerHTML={{__html:props.data}}/>
}

export default Preview;
