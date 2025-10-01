import { MetadataRoute } from "next";
import { prisma } from "../../lib/prisma";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://rapverse.devopti.fr";

  // Pages statiques
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Récupérer tous les posts depuis la base de données
  try {
    const posts = await prisma.instaPost.findMany({
      select: {
        id: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    const postPages: MetadataRoute.Sitemap = posts.map(
      (post: { id: string; updatedAt: Date }) => ({
        url: `${baseUrl}/post/${post.id}`,
        lastModified: post.updatedAt,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    );

    return [...staticPages, ...postPages];
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap:", error);
    // En cas d'erreur, retourner uniquement les pages statiques
    return staticPages;
  }
}
