"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Post } from "../../../../lib/types";
import PostComponent from "@/components/organism/postComponent";
import Loading from "@/components/atom/loading";

function getProxiedImageUrl(url?: string) {
  if (!url) return "/default-image.png";
  return `/api/proxy?url=${encodeURIComponent(url)}`;
}

export default function PostPage() {
  const { post_id } = useParams<{ post_id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`/api/post/${post_id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [post_id]);

  return (
    <div>
      {!post ? (
        <Loading />
      ) : (
        <div>
          <PostComponent
            post={{
              ...post,
              postContent: {
                ...post.postContent,
                caption: post.postContent?.caption ?? "",
                image_url: (post.postContent?.image_url ?? []).map((url) =>
                  getProxiedImageUrl(url)
                ),
              },
              urlPost: post.urlPost ?? "https://instagram.com/default",
            }}
          />
        </div>
      )}
    </div>
  );
}
