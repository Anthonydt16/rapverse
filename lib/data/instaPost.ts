// lib/data/instaPost.ts
import { prisma } from "../prisma";

export async function getInstaPosts(isPending = false) {
  return await prisma.instaPost.findMany({
    orderBy: {
      createdAt: "desc",
    },
    // Remove or replace 'isPending' with a valid field from your Prisma schema
    // Example: if your model has a field named 'status', you could use:
    // where: { status: isPending ? "pending" : undefined },
    where: {
      pinned: isPending ? true : undefined, // Adjust this condition based on your schema
    },
  });
}

export async function getInstaPostById(id: string) {
  return await prisma.instaPost.findUnique({
    where: { id },
  });
}
