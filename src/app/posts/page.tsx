import PostAffiche from "@/components/organism/postAffiche";
import getInstaPosts from "../../../lib/data/instaPost";

export default async function PostsPage() {
  const instaPosts = await getInstaPosts();
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-title glow text-white mb-6 text-center">
        Tous les posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {instaPosts.map((post) => (
          <PostAffiche
            key={post.id}
            post={{
              id: post.id,
              postContent: {
                caption:
                  typeof post.postContent === "object" &&
                  post.postContent !== null &&
                  "caption" in post.postContent
                    ? (post.postContent as { caption?: string }).caption ??
                      "Aucun texte disponible"
                    : "Aucun texte disponible",
                image_url:
                  typeof post.postContent === "object" &&
                  post.postContent !== null &&
                  "image_url" in post.postContent &&
                  Array.isArray(
                    (post.postContent as { image_url?: string[] }).image_url
                  ) &&
                  (post.postContent as { image_url?: string[] }).image_url &&
                  (post.postContent as { image_url?: string[] }).image_url![0]
                    ? `/api/proxy?url=${encodeURIComponent(
                        (post.postContent as { image_url?: string[] })
                          .image_url![0]
                      )}`
                    : "/default-image.png",
                url: post.urlPost ?? "https://instagram.com/default",
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
