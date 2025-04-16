"use client";
import React, { useState } from "react";
import { ArrowRight, Star, X, Github, Code, Bookmark } from "lucide-react";

function Hero() {
  const [donateButton, setDonateButton] = useState(true);
  
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-700 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 h-60 w-60 rounded-full bg-pink-600 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
      </div>
      
      {/* Donation banner */}
      {donateButton && (
        <div className="relative z-10 flex items-center gap-x-6 overflow-hidden bg-gradient-to-r from-purple-800 to-pink-700 px-6 py-3">
          <div className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm font-medium text-white">
              <strong className="font-bold">Help DevLib</strong>
              <span className="mx-2 inline-block h-1 w-1 rounded-full bg-white"></span>
              Support DevLib&apos;s Programmers to keep working on DevLib and
              make a better Programming Community.
            </p>
            <a
              href="#"
              className="flex items-center rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-purple-900 shadow-lg transition-all hover:bg-opacity-90 hover:shadow-xl"
            >
              Donate Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <button
            onClick={() => setDonateButton(false)}
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-20 text-white transition-colors hover:bg-opacity-30"
          >
            <span className="sr-only">Dismiss</span>
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[80vh] flex-col items-center justify-center py-12 lg:flex-row lg:justify-between lg:py-24">
          {/* Text content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-6 inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Early Access
            </div>
            
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Don't Waste Time to Find Perfect{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Resources, DevLib
              </span>
              <br />
              Has Got Your Back
            </h1>
            
            <p className="mb-8 text-base text-gray-300 sm:text-lg">
              Unlock the power of seamless coding with DevLib - where
              precision meets efficiency. No more time wasted in the pursuit
              of perfect resources; DevLib has got your back, empowering
              developers with a world of possibilities at their fingertips.
            </p>
            
            {/* Action buttons */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a 
                href="#" 
                className="flex items-center rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl"
              >
                <Code className="mr-2 h-5 w-5" />
                Get Started
              </a>
              
              <a 
                href="https://github.com/Aman-web-dev/Devlib" 
                target="_blank"
                className="flex items-center rounded-lg border border-gray-600 bg-gray-800 bg-opacity-50 px-6 py-3 font-medium text-white transition-all hover:bg-opacity-70"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub Repo
              </a>
            </div>
            
            {/* Social proof */}
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8 lg:items-start">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                    className="h-10 w-10 rounded-full border-2 border-slate-800 ring-2 ring-purple-500"
                    src="https://avatars.githubusercontent.com/u/117465920?v=4"
                    alt="Contributor"
                  />
                  <img
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                    className="h-10 w-10 rounded-full border-2 border-slate-800 ring-2 ring-pink-500"
                    src="https://avatars.githubusercontent.com/u/112321572?v=4"
                    alt="Contributor"
                  />
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-xs font-medium">
                    20+
                  </div>
                </div>
                <span className="ml-4 text-sm font-medium text-gray-300">
                  Join <span className="text-white font-bold">100+</span> contributors
                </span>
              </div>
              
              <div className="h-8 hidden sm:block border-l border-gray-700"></div>
              
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-300">
                  <span className="text-white font-bold">4.9/5</span> from 200+ reviews
                </span>
              </div>
            </div>
          </div>
          
          {/* Hero image/visual */}
          <div className="mt-10 lg:mt-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur"></div>
              
              {/* Image container */}
              <div className="relative rounded-lg bg-gray-900 p-1">
                <div className="rounded-lg overflow-hidden border border-gray-700">
                  <img 
                    src="/api/placeholder/600/400" 
                    alt="DevLib Dashboard Preview"
                    className="w-full max-w-md rounded-lg shadow-2xl"
                  />
                </div>
                
                {/* Badge overlay */}
                <div className="absolute -right-3 -top-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xs font-bold">
                    <div className="text-center">
                      <div className="text-yellow-400">NEW</div>
                      <div className="text-white text-xs">V2.0</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats cards */}
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-gray-800 p-4 shadow-lg border border-gray-700">
                <div className="flex items-center space-x-2">
                  <Bookmark className="h-5 w-5 text-purple-400" />
                  <div>
                    <div className="text-xs text-gray-400">Resources</div>
                    <div className="text-lg font-bold text-white">10,000+</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-6 -bottom-6 rounded-lg bg-gray-800 p-4 shadow-lg border border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-green-500 p-1">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Updated</div>
                    <div className="text-lg font-bold text-white">Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech stack logos */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16">
        <div className="mx-auto max-w-2xl">
          <p className="mb-6 text-center text-sm font-medium text-gray-400">
            SUPPORTED TECHNOLOGIES
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {/* These would be actual tech logos in a real implementation */}
            {["React", "Vue", "Angular", "Node", "Python", "Go", "Ruby"].map((tech) => (
              <div key={tech} className="flex h-8 items-center rounded-md bg-gray-800 px-4 text-sm font-medium text-gray-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;