import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./provider";
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


import { ThemeProvider } from "next-themes";
export const metadata = {
  title: "Devlib",
  description: "A Library For Developers",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={inter.className}>
      <body className="">
        <Provider>
          <Navbar />
          {children}
          <div id="portal"></div>
        </Provider>
      </body>
    </html>
  );
}
