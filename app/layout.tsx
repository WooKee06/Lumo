import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/widgets/Header/ui/Header";
import "./global.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bellatrix",
  description: "Simple player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
