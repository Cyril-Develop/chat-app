/*
  Warnings:

  - You are about to drop the column `fromUserId` on the `friendrequest` table. All the data in the column will be lost.
  - You are about to drop the column `toUserId` on the `friendrequest` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `friendrequest` table. All the data in the column will be lost.
  - You are about to alter the column `status` on the `friendrequest` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - Added the required column `receiverId` to the `FriendRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `FriendRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `friendrequest` DROP FOREIGN KEY `FriendRequest_fromUserId_fkey`;

-- DropForeignKey
ALTER TABLE `friendrequest` DROP FOREIGN KEY `FriendRequest_toUserId_fkey`;

-- AlterTable
ALTER TABLE `friendrequest` DROP COLUMN `fromUserId`,
    DROP COLUMN `toUserId`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `receiverId` INTEGER NOT NULL,
    ADD COLUMN `senderId` INTEGER NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'pending';

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
