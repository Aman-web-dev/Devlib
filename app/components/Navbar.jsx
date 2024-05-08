"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/utils (Context)/authContext.jsx";
import { doSignOut } from "@/app/firebase/auth";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";
import { FaUserAstronaut } from "react-icons/fa";
import NavSearchButton from "./search/navSearchButton";
import { useTheme } from "next-themes";
import { VscMenu } from "react-icons/vsc";
import { useVideoSidebar } from "@/utils (Context)/zustStores";
import DummySideBar from "./DummySideBar";
import Options from "./Options";

const Navbar = () => {
  const defaultPhotoUrl =
    "https://firebasestorage.googleapis.com/v0/b/devlib-c6572.appspot.com/o/assets%2Fpexels-sora-shimazaki-5668837.jpg?alt=media&token=6f17f0c5-dd45-4a69-a06b-28705ecd846e";
  const [navShow, setNavShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(defaultPhotoUrl);
  const { theme, setTheme } = useTheme();
  const { userLoggedIn, currentUser } = useAuth();
  const pathName = usePathname();
  const { videoSideBar, setVideoSideBar } = useVideoSidebar();

  const CheckSize = function () {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 764) {
        setNavShow(true);
      }
      if (window.innerWidth < 764) {
        setNavShow(false);
      }
    }
  };

  const toggleTheme = () => {
    console.log("Current Theme:", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (currentUser != null) {
      if (currentUser.photoURL) {
        setPhotoUrl(currentUser.photoURL);
      }
    }
    CheckSize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", CheckSize);
    }
  }, [currentUser]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav
        className={`
           dark:bg-[#121212] dark:border-b border-0.5 bg-gray-300  
         sticky top-0 w-full z-40 py-2`}
      >
        <div className="flex flex-wrap items-center justify-between px-4">
          <div className="flex gap-4">
            {pathName === "/videos" && (
              <button onClick={() => setVideoSideBar(!videoSideBar)}>
                <VscMenu className="w-6 h-6" />
              </button>
            )}
            <Link href="/">
              <Image
                src={"/assets/logo.svg"}
                width={50}
                height={50}
                alt="Dev lib"
              />
            </Link>
          </div>
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
                {/* {userLoggedIn && (
                <li>
                  <SessionTimer />
                </li>
              )} */}

                {/* <li className={`${pathName === "/" && "text-cyan"}`}>
                <Link href="/" className="">
                  Home
                </Link>
              </li> */}
                <li>
                  <NavSearchButton />
                </li>
                <li className={`${pathName === "/videos" && " text-cyan"}`}>
                  <Link href="/videos">Videos</Link>
                </li>

                <li
                  className={`${pathName === "/documentation" && " text-cyan"}`}
                >
                  <Link href="/documentation" className="">
                    Documentation
                  </Link>
                </li>

                {/* <li className={`${pathName === "/articles" && " text-cyan"}`}>
                  <Link href="/articles" className="">
                    Articles
                  </Link>
                </li> */}
                {/* not completed yet */}
                <li>
                  <div>
                    <div className="flex flex-col md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                      {userLoggedIn ? (
                        <div className="flex flex-row">
                          <ProfileSection
                            ImgUrl={photoUrl}
                            signOut={doSignOut}
                          />
                        </div>
                      ) : (
                        <Link href="/authentication">
                          <button
                            type="button"
                            className="border rounded-3xl border-[#ec4899] hover: focus:outline-none  text-lg py-1 px-3 text-center hover:bg-[#ec4899] transition-opacity duration-2000 ease-in-out opacity-100 flex items-center gap-2 text-[#ec4899] text-normal hover:text-white"
                          >
                            <FaUserAstronaut /> <span>Sign in</span>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
                <li className="border bordder-2 rounded-full p-2">
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => toggleTheme()}
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
                      onClick={() => toggleTheme()}
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
  const [optionsVisible, setOptionVisible] = useState(false);

  return (
    <>
      <div>
        <Image
          src={props?.ImgUrl}
          width={200}
          height={200}
          alt={props?.displayName}
          className="size-12 rounded-full cursor-pointer"
          onClick={() => setOptionVisible(!optionsVisible)}
        />

        {optionsVisible && (
          <Sidebar
            handleScreenClick={() => setOptionVisible(!optionsVisible)}
            handleLinkClick={(e) => {
              e.preventDefault();
              setOptionVisible(false);
            }}
          />
        )}
      </div>
    </>
  );
};
