
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./provider";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Devlib",
  description: "A Library For Developers",
  other: {
    'link-tag': [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/react-toastify@9.1.3/dist/ReactToastify.min.css",
      }
    ],
    'script-tag': [
      {
        src: "https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.js",
        once: true,
        'data-quill-instance': 'quill',
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className + "antialiased"}>
      <body className="">
        <Provider>
          <ToastContainer />
          <Navbar />
          {children}
          <div id="portal"></div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
