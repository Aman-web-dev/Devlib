'use client'
import * as React from "react";
import { useTheme } from "next-themes";

const PostIcon = (props) =>{
    
    const {theme}=useTheme()
    
    
    return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    viewBox=" 0 0 120 190"
    className="mx-auto bg-blue-300 w-full h-full"
    id="book"
    {...props}
  >
      <g fill={theme=="dark"?"#ffffff":"#000000"}>
    <path d="M27.042 0h-22A5.036 5.036 0 0 0 .008 4.968L0 4.958v22A5.043 5.043 0 0 0 5.042 32h17C23.146 32 24 31.104 24 30V9c0-.552-.406-1-.958-1h-18C3.364 8 2 6.718 2 5.042A3.045 3.045 0 0 1 5.042 2H26v23c0 .552.49 1 1.042 1s.958-.448.958-1V1c0-.552-.406-1-.958-1zm-22 10h16.96l.04 20h-17A3.045 3.045 0 0 1 2 26.958V9.022c.84.616 1.89.978 3.042.978z" />
    </g>
  
  </svg>

);}
export default PostIcon;