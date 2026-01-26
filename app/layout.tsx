import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./global.scss";

const raleway = Raleway({
  variable: "--font-raleway-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zpotify",
  description: "Wookee sound club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
