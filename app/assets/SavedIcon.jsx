'use client'

import React from "react";
import { useTheme } from "next-themes";

function SavedIcon() {
    const {theme}=useTheme()
  return (
    <svg
     xmlns="http://www.w3.org/2000/svg" 
     width="19"
    height="17"
    viewBox="0 0 1999 1420"
    className=""
    >

      <g fill={theme=="dark"?"#ffffff":"#000000"}>
      <path d="M1408 256H384v1242l423-406 89-85 89 85 423 406V256zm12-128q23 0 44 9 33 13 52.5 41t19.5 62v1289q0 34-19.5 62t-52.5 41q-19 8-44 8-48 0-83-32l-441-424-441 424q-36 33-83 33-23 0-44-9-33-13-52.5-41t-19.5-62V240q0-34 19.5-62t52.5-41q21-9 44-9h1048z"></path>
      </g>

    </svg>
  );
}

export default SavedIcon;
