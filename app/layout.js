import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Narrow Urls - Make everything in mind",
  description: "Convert long URLs into short, shareable links with our NARROW URLs. Perfect for social media, emails, and more!",
  openGraph: {
    title: "Narrow Urls - Make everything in mind",
    description: "Convert long URLs into short, shareable links with our NARROW URLs",
    url: process.env.NEXT_PUBLIC_HOST,
    siteName: "Narrow Urls",
    images: [
      {
        url:"https://res.cloudinary.com/everywherebackend/image/upload/v1742222421/uj4mkuy14eet3e6zwp7r.png",
        width: 1200,
        height: 630,
        alt: "Narrow Urls",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
