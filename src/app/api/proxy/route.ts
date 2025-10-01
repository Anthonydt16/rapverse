// app/api/proxy/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing image URL" }, { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error("Failed to fetch image");

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    try {
      const defaultImageUrl = "/default_image_post.png";
      const defaultResponse = await fetch(defaultImageUrl);
      if (!defaultResponse.ok) throw new Error("Failed to fetch default image");

      const defaultContentType =
        defaultResponse.headers.get("content-type") || "image/png";
      const defaultBuffer = await defaultResponse.arrayBuffer();

      return new NextResponse(defaultBuffer, {
        status: 200,
        headers: {
          "Content-Type": defaultContentType,
          "Cache-Control": "public, max-age=86400",
        },
      });
    } catch {
      return NextResponse.json(
        { error: "Error fetching image and default image" },
        { status: 500 }
      );
    }
  }
}
