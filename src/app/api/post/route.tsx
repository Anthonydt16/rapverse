import { NextResponse } from "next/server";
import { getInstaPosts } from "../../../../lib/data/instaPost";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pinned = searchParams.get("pinned");
  const paginate = searchParams.get("paginate");
  //For pagination
  if (paginate) {
    const page = parseInt(paginate, 10);
    if (isNaN(page) || page < 1) {
      return NextResponse.json(
        { error: "Invalid paginate parameter" },
        { status: 400 }
      );
    }
    const posts = await getInstaPosts(false, page);
    return NextResponse.json(posts);
  }
  //For pinned posts
  if (pinned === "true") {
    const posts = await getInstaPosts(true);
    return NextResponse.json(posts);
  }
  //For all posts
  const posts = await getInstaPosts();
  return NextResponse.json(posts);
}
