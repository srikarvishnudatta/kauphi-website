import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../comodo-stamp.otf",
});

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
      <body className={`${myFont.className} antialiased `}>{children}</body>
    </html>
  );
}
