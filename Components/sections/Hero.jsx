"use client";

import { ThemeContext } from "@/utils (Context)/ThemeContext";
import React, { useContext } from "react";
function Hero() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "dark" ? "bg-dark" : "bg-white"
      } min-h-screen w-full m-auto bg-black`}
    >
      <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    Early Access
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    <span className="sm:text-6xl"></span> Dont Waste Time to
                    FInd Perfect Resources,
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                      Dev Lib
                    </span>
                    <br />
                    Has Got Your Back
                  </h1>
                </div>

                <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Unlock the power of seamless coding with Dev Lib - where
                  precision meets efficiency. No more time wasted in the pursuit
                  of perfect resources; Dev Lib has got your back, empowering
                  developers with a world of possibilities at their fingertips.
                </p>
              </div>

              <div className="border-t border-gray-700"></div>

              <div className="flex space-x-4 items-center text-white">
                <div className="flex items-center space-x-2">
                  <div className="flex  ">
                    <img
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                      className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      style={{ color: "transparent" }}
                      src="https://avatars.githubusercontent.com/u/117465920?v=4"
                    />
                    <img
                      loading="lazy"
                      width="400"
                      height="400"
                      decoding="async"
                      className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                      style={{ color: "transparent" }}
                      src="https://avatars.githubusercontent.com/u/112321572?v=4"
                    />
                  </div>

                  <span className="flex-shrink-0 text-xs font-medium leading-5">
                    Start Contributing
                  </span>
                </div>

                <div className="h-4 border-l border-gray-700"></div>

                <div className="flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                  <svg
                    className="h-4 w-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                  </svg>
                </div>
                <div className="h-4 border-l border-gray-700"></div>
                <a
                  href="https://github.com/Aman-web-dev/Devlib"
                  target="_blank"
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/devlib-c6572.appspot.com/o/assets%2FGroup%2017.svg?alt=media&token=94635e79-3054-46e3-acac-34fa68016d32"
                    className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16"
                    width="250"
                    height="54"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full col-span-6">
            <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto ">
              <div style={{ width: "100%", height: "100%" }}>
                <div
                  className="shadow-2xl shadow-cyan-500/50"
                  style={{ width: "100%", height: "100%" }}
                >
                  <iframe
                    frameBorder="0"
                    allowFullScreen="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/mr15Xzb1Ook?autoplay=0&amp;mute=0&amp;controls=0&"
                    id="widget2"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
