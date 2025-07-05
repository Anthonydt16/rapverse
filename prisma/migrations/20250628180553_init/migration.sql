-- CreateTable
CREATE TABLE "InstaPost" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "postContent" JSONB NOT NULL,

    CONSTRAINT "InstaPost_pkey" PRIMARY KEY ("id")
);
