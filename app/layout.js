import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";

import Provider from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devlib",
  description: "A Library For Developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
          <div id="portal" ></div>
        </Provider>
      </body>
    </html>
  );
}
  