import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar";
import ParentWrapper from "./ParentWrapper";
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
          <Nav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
