import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Pagewrapper } from "@/components/pagewrapper";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do Dashboard",
  description:
    "The “To-Do Dashboard” is a simple dashboard application to track to-do tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Header></Header>
          <Sidebar></Sidebar>
          <Pagewrapper>{children}</Pagewrapper>
        </div>
      </body>
    </html>
  );
}
