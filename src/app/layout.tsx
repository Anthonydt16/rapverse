import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/atom/footer";
import NavBar from "@/components/atom/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RapVerse",
  description: "La plateforme ultime pour les passionnés de rap",
  openGraph: {
    title: "RapVerse",
    description: "La plateforme ultime pour les passionnés de rap",
    url: "https://rapverse.com",
    siteName: "RapVerse",
    images: [
      {
        url: "/logoBig.png",
        width: 1200,
        height: 630,
        alt: "RapVerse - La plateforme ultime pour les passionnés de rap",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className=" font-body antialiased">
        <NavBar />
        {/* Main content */}
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
