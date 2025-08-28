"use client";
import PostAffiche from "@/components/organism/postAffiche";
import { useState, useEffect } from "react";
import { Post } from "../../lib/types";
import Loading from "@/components/atom/loading";

export default function Home() {
  // Fetch Instagram posts data
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      fetch("/api/post?pinned=true")
        .then((res) => res.json())
        .then((instaPosts) => {
          setPosts(instaPosts);
          setLoading(false);
        });
    };
    fetchPosts();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid gap-4 p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bienvenue sur RapVerse
      </h1>
      <p className="text-lg text-center mb-4">
        Découvrez les dernières tendances du rap et de la culture urbaine.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.length === 0 ? (
          <div className="col-span-4 text-center text-gray-500">
            Aucun post épinglée disponible
          </div>
        ) : (
          posts.map((post) => {
            // Ensure postContent is the expected object type
            const postContent =
              typeof post.postContent === "object" && post.postContent !== null
                ? (post.postContent as {
                    caption?: string;
                    image_url?: string[];
                  })
                : {};
            return (
              <PostAffiche
                key={post.id}
                post={{
                  id: post.id,
                  postContent: {
                    caption: postContent.caption ?? "Aucun texte disponible",
                    image_url: postContent.image_url?.[0]
                      ? `/api/proxy?url=${encodeURIComponent(
                          postContent.image_url?.[0] ?? ""
                        )}`
                      : "/default-image.png",
                    url: "post/" + post.id,
                  },
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
