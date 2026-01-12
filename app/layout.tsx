import type { Metadata } from "next";
import {   Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header/ui/Header";



const montserrat = Montserrat({
  variable: "--font-montserrat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumo",
  description: "Simple player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
    <Header/>

        {children}
      </body>
    </html>
  );
}
