export const seoConfig = {
  title: "RapVerse - La plateforme ultime pour les passionnés de rap",
  description:
    "Découvrez les dernières tendances du rap et de la culture urbaine sur RapVerse. Actualités, artistes, albums et bien plus encore.",
  keywords: [
    "rap",
    "hip-hop",
    "rap français",
    "culture urbaine",
    "musique rap",
    "artistes rap",
    "albums rap",
    "actualité rap",
    "rapverse",
    "rap france",
    "rappeurs",
    "freestyle",
    "clips rap",
    "concerts rap",
  ],
  author: "RapVerse",
  siteUrl: "https://rapverse.devopti.fr",
  siteName: "RapVerse",
  locale: "fr_FR",
  ogImage: "https://rapverse.devopti.fr/logoBig.png",
  twitterHandle: "@rapverse",
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RapVerse",
  url: "https://rapverse.devopti.fr",
  description:
    "La plateforme ultime pour les passionnés de rap et de culture urbaine",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://rapverse.devopti.fr/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "RapVerse",
    logo: {
      "@type": "ImageObject",
      url: "https://rapverse.devopti.fr/logorapverse.png",
    },
  },
};
