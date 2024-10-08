import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Josh Kim's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={roboto.className}>
          {children}
        </body>
      </html>
      <Analytics></Analytics>
    </>
  );
}
