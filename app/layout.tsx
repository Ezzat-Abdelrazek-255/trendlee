import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header";
import { ReactLenis } from "@/libs/lenis";
import Footer from "@/components/ui/footer";
import Grid from "@/components/ui/grid";

const humaneSans = localFont({
  src: "./fonts/Humane-VF.woff2",
  variable: "--font-humane-sans",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trendlee",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${humaneSans.variable} font-body antialiased`}
      >
        <ReactLenis root>
          <Header />
          {children}
          <Grid />
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
