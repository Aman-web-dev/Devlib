"use client";

import { ThemeContext } from "@/utils (Context)/ThemeContext";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/utils (Context)/authContext.jsx";
import { doSignOut } from "@/app/firebase/auth";
import Image from "next/image";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("")
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { userLoggedIn, currentUser } = useAuth()



  const CheckSize = function () {


    if (typeof window !== 'undefined') {
      if (window.innerWidth > 764) {
        //   console.log("changing Nav Show to row");
        setNavShow(true);
      }
  
      if (window.innerWidth < 764) {
        console.log("changing Nav Show to col");
        setNavShow(false);
      }
    }
   
  };



  const HandleNavigation=()=>{

  }
  useEffect(() => {
    if (currentUser != null) {
      console.log(currentUser.photoURL)
      if (currentUser.photoURL) {
        setPhotoUrl(currentUser.photoURL)
      }
    }
    CheckSize();

    if (typeof window !== 'undefined'){

      window.addEventListener("resize", CheckSize);

    }

    
  }, [currentUser]);

  return (
    <>
      <nav
        className={`${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"
          } sticky top-0 w-full z-40 py-2 `}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto md:px-8 ">
          <Link href="/">
            <Image
              src={"/assets/logo.svg"}
              width={50}
              height={50}
              alt="Dev lib"
              className=""
            />
          </Link>

          <button
            onClick={() => {
              setNavShow(!navShow);
            }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {navShow ? (
            <div className=" w-full md:block md:w-auto" id="navbar-default">
              <ul
                className={`font-medium flex flex-col md:flex-row p-4 md:p-0 md:items-center mt-4 border md:mt-0 md:border-0 gap-8`}
              >
                <li>
                  <Link href="/articles" className="dark: ">
                    Articles
                  </Link>
                </li>

                <li>
                  <Link href="/documentation" className="">
                    Documentation
                  </Link>
                </li>

                <li>
                  <Link href="/documentation" className="">
                    Videos
                  </Link>
                </li>

                <li>
                  <div>
                    <div className="flex flex-col md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">



                      {userLoggedIn ?

                        <div className="flex flex-row">
                          <ProfileSection ImgUrl={photoUrl} signOut={doSignOut}/>
                        </div>
                        :
                        <Link href="/authentication">
                          <button
                            type="button"
                            className=" bg-[#ec4899] hover: focus:outline-none rounded-lg text-lg py-1 px-3 text-center hover:bg-[#f8c419] transition-opacity duration-2000 ease-in-out opacity-100"
                          >
                            Login
                          </button>
                        </Link>}

                    </div>
                  </div>

                </li>
                <li>
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      onClick={toggleTheme}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={theme === "light" && "black"}
                      className="w-6 h-6 cursor-pointer"
                      onClick={toggleTheme}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  )}
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;



Navbar.getInitialProps = async () => {
  return { ssr: false };
};


const ProfileSection = (props) => {

const [optionsVisible,setOptionVisible]=useState(false)


  return (

    <>


    <div className="  h-10 w-10">
      <img src={props.ImgUrl} className="h-10 w-10 rounded-full mx-4 cursor-pointer" onClick={()=>setOptionVisible(!optionsVisible)}/>




      {optionsVisible?
     <Sidebar 
     handleScreenClick={()=>(setOptionVisible(!optionsVisible))}
     handleLinkClick={()=>setOptionVisible(false)}/>

     
      :""}    




    </div>

    </>

  )
}