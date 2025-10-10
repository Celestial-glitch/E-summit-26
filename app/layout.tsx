// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "E-Summit'25 | IIT BHU Varanasi",
  referrer: "origin-when-cross-origin",
  title: {
    default: "E-Summit'25 | IIT BHU Varanasi",
    template: "%s | E-Summit'25 | IIT BHU Varanasi",
  },
  description: "E-Summit'25 | IIT BHU Varanasi",
  category: "Technology and Entrepreneurship Summit",
  keywords: [
    "E-Summit",
    "E-Summit'25",
    "E-Summit'25 IIT BHU Varanasi",
    "IIT BHU Varanasi",
    "E-Summit IIT BHU Varanasi",
    "E-Summit'25 IIT BHU",
    "esummit 25",
    "esummit",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon-light.ico" media="(prefers-color-scheme: light)" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-black  font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="flex items-center w-full min-h-screen flex-col">
          <Navbar />
          {/*<ParallaxProvider>*/}
          <main className="flex-1  ">{children}</main>
          {/*</ParallaxProvider>*/}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
