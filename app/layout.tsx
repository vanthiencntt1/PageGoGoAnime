import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import pacs from "./Pace/pace";
import Header from "@/components/Header";
import Top from "@/components/Top";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Test from "@/components/Test";

const inter = Roboto({ subsets: ["vietnamese"], weight: ["300", "900"] });

export const metadata: Metadata = {
  title: "GOGO ANIME",
  description: "GOGO ANIME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Top />
        <Nav />
        {/* <Test />
        <Section />
        <Main /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
