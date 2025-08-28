// lib/data/instaPost.ts
import { prisma } from "../prisma";

export async function getInstaPosts(isPending = false, page?: number) {
  const pageSize = 6; // Number of posts per page
  const skip = page ? (page - 1) * pageSize : 0;
  if (page) {
    return await prisma.instaPost.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: pageSize,
      // Remove or replace 'isPending' with a valid field from your Prisma schema
      // Example: if your model has a field named 'status', you could use:
      // where: { status: isPending ? "pending" : undefined },
      where: {
        pinned: isPending ? true : undefined, // Adjust this condition based on your schema
      },
    });
  }
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
