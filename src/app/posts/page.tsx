"use client";
import PostAffiche from "@/components/organism/postAffiche";
import { useState, useEffect, useRef, useCallback } from "react";
import { Post } from "../../../lib/types";
import Loading from "@/components/atom/loading";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [paginate, setPaginate] = useState(1);

  // Refs pour éviter les closures périmées dans le handler
  const loadingRef = useRef(loading);
  const postsLenRef = useRef(0);
  const paginateRef = useRef(paginate);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);
  useEffect(() => {
    postsLenRef.current = posts.length;
  }, [posts.length]);
  useEffect(() => {
    paginateRef.current = paginate;
  }, [paginate]);

  // Fetch avec AbortController + guard
  useEffect(() => {
    const controller = new AbortController();
    const run = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post?paginate=${paginateRef.current}`, {
          signal: controller.signal,
        });
        const instaPosts: Post[] = await res.json();
        setPosts((prev) => [...prev, ...instaPosts]);
      } catch (e) {
        if ((e as Error).name !== "AbortError") console.error(e);
      } finally {
        setLoading(false);
      }
    };
    run();
    return () => controller.abort();
  }, [paginate]);

  const handlePagination = useCallback(() => {
    // évite de déclencher si déjà en chargement
    if (loadingRef.current) return;

    const expectedCount = 6 * paginateRef.current;
    const hasFilledPage = postsLenRef.current >= expectedCount;

    // bas de page
    const nearBottom =
      typeof window !== "undefined" &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    // haut de page (cas “pile 6” au reload)
    const atTop =
      typeof window !== "undefined" &&
      window.scrollY === 0 &&
      postsLenRef.current === expectedCount;

    if ((nearBottom && hasFilledPage) || atTop) {
      setPaginate((p) => p + 1);
    }
  }, []);

  // 👉 ICI: on accède à window uniquement en client, avec cleanup
  useEffect(() => {
    if (typeof window === "undefined") return; // évite SSR
    const onScroll = () => handlePagination();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handlePagination]);

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

      {loading && (
        <div className="flex justify-center mt-6">
          <Loading />
        </div>
      )}
    </div>
  );
}
