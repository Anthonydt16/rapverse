import { NextResponse } from "next/server";
import { getInstaPostById } from "../../../../../lib/data/instaPost";
export async function GET(request: Request) {
  const post_id = request.url.split("/").pop();
  if (!post_id) {
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
  }
  const post = await getInstaPostById(post_id);

  return NextResponse.json(post);
}
