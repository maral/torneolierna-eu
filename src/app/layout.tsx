import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const sans = Nunito_Sans({
  weight: ["300", "400"],
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const benka = localFont({
  src: [
    {
      path: "./fonts/Benka.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-benka",
});

export const metadata: Metadata = {
  title: "Torneo Calcio Lierna - 3 agosto 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${benka.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
