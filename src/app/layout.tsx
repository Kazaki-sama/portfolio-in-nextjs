import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <div className="navbar">
        <ul>
         <li> <Link href="/">Subham Maharjan / Designer / Web Developer </Link> </li>
         <li> <Link href="/">About me</Link></li>
         <li> <Link href="/resume">Resume</Link></li>
         <li> <Link href="/Project">Project</Link></li>
          </ul>
          </div>
        <hr/>
        
        {children}</body>
    </html>
  );
}
