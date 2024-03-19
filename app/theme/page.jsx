'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'


function page() {

    const {theme,setTheme}=useTheme()

    console.log(theme)

    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":'light')
    }


  return (

    <ThemeProvider >

    <div onClick={()=>toggleTheme()}>
Current Theme:{theme==='light'?"light":"dark"}
<p className=' dark:text-pink-400 hover:bg-blue-500'>{theme}</p>
    </div>
    </ThemeProvider>
  )
}

export default page
