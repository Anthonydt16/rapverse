import { NextResponse } from "next/server";
import { getInstaPosts } from "../../../../lib/data/instaPost";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pinned = searchParams.get("pinned");
  if (pinned === "true") {
    const posts = await getInstaPosts(true);
    return NextResponse.json(posts);
  }
  const posts = await getInstaPosts();
  return NextResponse.json(posts);
}
