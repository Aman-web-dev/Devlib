import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devlib",
  description: "A Library For Developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav/>
        
        {children}

        <script>

        
        </script>
       
        </body>
    </html>
  );
}
