'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'


function page() {

 const {theme}=useTheme()


  return (
    <div className=''>
<p className='text-blue-300 dark:text-pink-400 hover:bg-blue-500'>{theme}</p>
    </div>
  )
}

export default page
