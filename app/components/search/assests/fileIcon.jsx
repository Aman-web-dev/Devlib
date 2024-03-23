'use client'
import React from "react";
import { useTheme } from "next-themes";


function FileIcon(props) {
const {theme}=useTheme()

  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={props.Height}
    height={props.width}
    viewBox="0 0 48 48"
    className="">
    <g fill={theme=="dark"?"#ffffff":"#000000"}>

      <path
        d="M41 11H21.57l-1.12-2.31A3 3 0 0017.75 7H7a3 3 0 00-3 3v28a3 3 0 003 3h34a3 3 0 003-3V14a3 3 0 00-3-3zm1 27a1 1 0 01-1 1H7a1 1 0 01-1-1V10a1 1 0 011-1h10.75a1 1 0 01.9.56l2.79 5.75a3 3 0 002.7 1.69H39a1 1 0 000-2H24.14a1 1 0 01-.9-.56l-.7-1.44H41a1 1 0 011 1z"
        data-name="01 Folder"
      ></path>
      </g>
    </svg>
  );
}

export default FileIcon;
