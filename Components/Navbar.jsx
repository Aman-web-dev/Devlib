"use client";

import { ThemeContext } from "@/utils (Context)/ThemeContext";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [navShow, setNavShow] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const CheckSize = function () {
    if (window.innerWidth > 764) {
      console.log("changing Nav Show to row");
      setNavShow(true);
    }

    if (window.innerWidth < 764) {
      console.log("changing Nav Show to col");
      setNavShow(false);
    }
  };
  useEffect(() => {
    CheckSize();
    window.addEventListener("resize", CheckSize);
  }, []);

  return (
    <>
      <nav
        className={`${
          theme === "dark" ? "bg-dark" : "bg-light"
        } sticky top-0 w-full z-40`}
      >
        <div className="flex flex-wrap items-center justify-between mx-auto p-1 md:px-8 text-white">
          <Link href="/" className="flex items-center h-50">
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/rajvip-numbers.appspot.com/o/logo%2FRAJ%20VIP%20NUMBER%20LOGO%201.webp?alt=media&token=37e43ac8-cf57-4060-b2cd-f0b89fc3027f" className="w-50 h-20 rounded-lg" /> */}
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
                className={`font-medium flex flex-col md:flex-row p-4 md:p-0 md:items-center mt-4 border  md:space-x-8 md:mt-0 md:border-0`}
              >
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 font-bold text-white   "
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/articles"
                    className="block px-4 py-2 font-bold text-white  "
                  >
                    Articles
                  </Link>
                </li>

                <li>
                  <Link
                    href="/documentation"
                    className="block px-4 py-2 font-bold text-white  "
                  >
                    Documentation
                  </Link>
                </li>

                <li>
                  <Link
                    href="/documentation"
                    className="block px-4 py-2 font-bold text-white  "
                  >
                    Videos
                  </Link>
                </li>

                <li>
                  <div>
                    <div className="flex flex-col md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                      <Link href="/authentication">
                        <button
                          type="button"
                          className="text-white bg-[#ec4899] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-4 py-2 text-center dark:bg-[#ec4899] hover:bg-[#f8c419] dark:focus:ring-blue-800 transition-opacity duration-2000 ease-in-out opacity-100"
                        >
                          Get Started
                        </button>
                      </Link>
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

export default Nav;
