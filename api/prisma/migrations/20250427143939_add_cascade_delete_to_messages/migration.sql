-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_chatRoomId_fkey`;

-- DropIndex
DROP INDEX `Message_chatRoomId_fkey` ON `message`;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `ChatRoom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
