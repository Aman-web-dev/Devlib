'use client'

import React, { useEffect, useState } from 'react'

const  Nav = () => {


    const [navShow, setNavShow] = useState(false)

    const CheckSize = function () {
        if (window.innerWidth > 764) {
            console.log("changing Nav Show to row")
            setNavShow(true)}
         
            if (window.innerWidth < 764) {
                console.log("changing Nav Show to col")
                setNavShow(false)
            }
        }
        useEffect(() => {
            CheckSize()
            window.addEventListener("resize", CheckSize)
        }, [])


        return (
            <>

                <nav className="bg-[#000000]  shadow-md sticky top-0 w-full z-40 backdrop-filter backdrop-blur-lg bg-opacity-50">
                    <div className="bg-[#000000] flex flex-wrap items-center justify-between mx-auto p-1 md:px-8 text-white">
                        <a href="/" className="flex items-center h-50">
                            {/* <img src="https://firebasestorage.googleapis.com/v0/b/rajvip-numbers.appspot.com/o/logo%2FRAJ%20VIP%20NUMBER%20LOGO%201.webp?alt=media&token=37e43ac8-cf57-4060-b2cd-f0b89fc3027f" className="w-50 h-20 rounded-lg" /> */}
                        </a>



                         <button onClick={()=>{setNavShow(!navShow)}}  type="button" className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>


                    


                        {navShow ? <div className=" w-full md:block md:w-auto" id="navbar-default">
                      


                             <ul className={`font-medium flex flex-col md:flex-row p-4 md:p-0 md:items-center mt-4 border  md:space-x-8 md:mt-0 md:border-0`}>

                                <li>
                                    <a href="/" className="block px-4 py-2 font-bold text-white   ">Home</a>
                                </li>


                                <li>
                                    <a href="/articles" className="block px-4 py-2 font-bold text-white  ">Articles</a>
                                </li>


                                <li>
                                    <a href="/documentation" className="block px-4 py-2 font-bold text-white  ">Documentation</a>
                                </li>

                                <li>
                                    <a href="/documentation" className="block px-4 py-2 font-bold text-white  ">Videos</a>
                                </li>

                                <li>

                                    <div>
                                        <div  className="flex flex-col md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                                            <a href='/authentication'>
                                            <button      type="button" className="text-white bg-[#ec4899] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-4 py-2 text-center dark:bg-[#ec4899] hover:bg-[#f8c419] dark:focus:ring-blue-800 transition-opacity duration-2000 ease-in-out opacity-100">Get Started</button>
                                            </a>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>:""}
                    </div>
                </nav>

            </>
        )
    }

export default Nav