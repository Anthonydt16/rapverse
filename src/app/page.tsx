import PostAffiche from "@/components/organism/postAffiche";
import getInstaPosts from "../../lib/data/instaPost";

export default async function Home() {
  // Fetch Instagram posts data
  const instaPosts = await getInstaPosts(true);
  return (
    <div className="grid gap-4 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenue sur RapVerse
      </h1>
      <p className="text-lg text-center mb-4">
        Découvrez les dernières tendances du rap et de la culture urbaine.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instaPosts.map((post) => {
          // Ensure postContent is the expected object type
          const postContent =
            typeof post.postContent === "object" && post.postContent !== null
              ? (post.postContent as { caption?: string; image_url?: string[] })
              : {};
          return (
            <PostAffiche
              key={post.id}
              post={{
                id: post.id,
                postContent: {
                  caption: postContent.caption ?? "Aucun texte disponible",
                  image_url:
                    postContent.image_url &&
                    Array.isArray(postContent.image_url) &&
                    postContent.image_url[0]
                      ? `/api/proxy?url=${encodeURIComponent(
                          postContent.image_url[0]
                        )}`
                      : "/default-image.png",
                  url: post.urlPost ?? "https://instagram.com/default",
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
