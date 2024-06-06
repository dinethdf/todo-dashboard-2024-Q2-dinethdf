"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Pagewrapper } from "@/components/pagewrapper";
import { Sidebar } from "@/components/sidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar toggleCollapse={toggleCollapse}></Sidebar>
          <Header
            toggleCollapse={toggleCollapse}
            setToggleCollapse={setToggleCollapse}
          ></Header>

          <Pagewrapper toggleCollapse={toggleCollapse}>{children}</Pagewrapper>
        </div>
      </body>
    </html>
  );
}
