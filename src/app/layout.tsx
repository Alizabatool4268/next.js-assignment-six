import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import roboto from "@/app/fonts/font"
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ddsgnr",
  description: "Static website auther aliza batool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
