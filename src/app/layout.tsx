import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--bellfair-font",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlow-font",
});

export const metadata: Metadata = {
  title: "Space Next App",
  description: "Developed by kvng-dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} bg-primary antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
