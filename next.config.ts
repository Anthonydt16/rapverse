import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // Optimisations pour le SEO
  compress: true, // Compression gzip
  poweredByHeader: false, // Masque le header X-Powered-By pour la sécurité

  // Génération de sitemap et robots.txt
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },

  // Images externes autorisées
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
