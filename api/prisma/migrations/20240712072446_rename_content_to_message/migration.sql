/*
  Warnings:

  - You are about to drop the column `content` on the `message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `message` DROP COLUMN `content`,
    ADD COLUMN `message` VARCHAR(191) NOT NULL DEFAULT '';
