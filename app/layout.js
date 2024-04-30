import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Footer from "./components/Footer";
// import DummySideBar from "./components/DummySideBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Devlib",
  description: "A Library For Developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className + "antialiased "}>
      <body className="">
        <Provider>
          <ToastContainer />
          <Navbar />
          {children}
          <div id="portal"></div>
          {/* <Footer /> */}
        </Provider>
      </body>
    </html>
  );
}
