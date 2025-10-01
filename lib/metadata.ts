/**
 * Utilitaire pour générer des métadonnées SEO pour les pages dynamiques
 */

import { Metadata } from "next";
import { seoConfig } from "./seo";

interface PageMetadataProps {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  keywords?: string[];
}

/**
 * Génère des métadonnées optimisées pour le SEO
 * @param props - Propriétés de la page
 * @returns Métadonnées Next.js
 */
export function generatePageMetadata({
  title,
  description = seoConfig.description,
  image = seoConfig.ogImage,
  path = "",
  keywords = seoConfig.keywords,
}: PageMetadataProps): Metadata {
  const url = `${seoConfig.siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: seoConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: seoConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * Génère des données structurées JSON-LD pour un article
 */
export function generateArticleStructuredData({
  title,
  description,
  image,
  datePublished,
  dateModified,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: Date;
  dateModified: Date;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    datePublished: datePublished.toISOString(),
    dateModified: dateModified.toISOString(),
    author: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: seoConfig.ogImage,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Tronque un texte à une longueur maximale pour les métadonnées
 */
export function truncateText(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

/**
 * Nettoie et formate une description pour le SEO
 */
export function cleanDescription(text: string): string {
  return text
    .replace(/\n/g, " ") // Remplace les sauts de ligne
    .replace(/\s+/g, " ") // Remplace les espaces multiples
    .replace(/#\w+/g, "") // Supprime les hashtags
    .replace(/@\w+/g, "") // Supprime les mentions
    .trim();
}
