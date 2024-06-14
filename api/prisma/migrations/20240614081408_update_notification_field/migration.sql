/*
  Warnings:

  - You are about to alter the column `notification` on the `user` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `notification` VARCHAR(191) NOT NULL DEFAULT 'accept';
