import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const myFont = localFont({
  src: "../comodo-stamp.otf",
  variable: "--font-comodo"
});

const fontSec = localFont({
  src: "../lovelace.otf",
  variable:"--font-lovelace"
})

export const metadata: Metadata = {
  title: "Kauphi Toronto",
  description: "Kauphi Toronto Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={`${myFont.variable} ${fontSec.variable} antialiased `}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
