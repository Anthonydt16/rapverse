"use client";
import React from "react";
import Image from "next/image";

interface PostAfficheProps {
  post: {
    id: string;
    postContent: {
      caption: string;
      image_url: string;
      url: string;
    };
  };
}

export default function PostAffiche({ post }: PostAfficheProps) {
  const { caption, image_url, url } = post.postContent;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg group cursor-pointer">
        <Image
          src={image_url}
          alt="Post Instagram"
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black opacity-90 p-4">
          <p
            className={`text-lg font-medium leading-snug line-clamp-4 text-white transition-opacity duration-300 group-hover:opacity-90 ${
              caption.length > 100 ? "line-clamp-4" : "line-clamp-2"
            }`}
          >
            {caption.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < caption.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </a>
  );
}
