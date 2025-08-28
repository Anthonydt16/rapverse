"use client";
import PostAffiche from "@/components/organism/postAffiche";
import { useState, useEffect } from "react";
import { Post } from "../../../lib/types";
import Loading from "@/components/atom/loading";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const instaPosts = await fetch("/api/post").then((res) => res.json());
      setPosts(instaPosts);
    };
    fetchPosts();
  }, []);
  if (!posts || posts.length === 0) {
    return <Loading />;
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-title glow text-white mb-6 text-center">
        Tous les posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
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
                url: "post/" + post.id,
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
