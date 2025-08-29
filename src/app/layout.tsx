import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/atom/footer";
import NavBar from "@/components/atom/navbar";
import Script from "next/script";
import AnalyticsTracker from "@/components/organism/analyticsTracker";
import { Suspense } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
        url: "http://5.189.186.252/logoBig.png",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-body antialiased">
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>

        <NavBar />
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
        <Footer />

        {/* Google Analytics — chargé seulement si GA_ID et en prod */}
        {GA_ID && process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
