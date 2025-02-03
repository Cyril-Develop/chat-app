/*
  Warnings:

  - You are about to drop the column `senderId` on the `privatemessage` table. All the data in the column will be lost.
  - Added the required column `userId` to the `PrivateMessage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `privatemessage` DROP FOREIGN KEY `PrivateMessage_senderId_fkey`;

-- DropIndex
DROP INDEX `PrivateMessage_senderId_receiverId_idx` ON `privatemessage`;

-- AlterTable
ALTER TABLE `privatemessage` DROP COLUMN `senderId`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `PrivateMessage_userId_receiverId_idx` ON `PrivateMessage`(`userId`, `receiverId`);

-- AddForeignKey
ALTER TABLE `PrivateMessage` ADD CONSTRAINT `PrivateMessage_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
