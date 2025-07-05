/*
  Warnings:

  - Added the required column `urlPost` to the `InstaPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InstaPost" ADD COLUMN     "pinned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "urlPost" TEXT NOT NULL;
