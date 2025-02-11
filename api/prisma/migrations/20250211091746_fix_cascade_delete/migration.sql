-- DropForeignKey
ALTER TABLE `chatroom` DROP FOREIGN KEY `ChatRoom_createdBy_fkey`;

-- DropForeignKey
ALTER TABLE `friend` DROP FOREIGN KEY `Friend_friendId_fkey`;

-- DropForeignKey
ALTER TABLE `friend` DROP FOREIGN KEY `Friend_userId_fkey`;

-- DropForeignKey
ALTER TABLE `friendrequest` DROP FOREIGN KEY `FriendRequest_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `friendrequest` DROP FOREIGN KEY `FriendRequest_senderId_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_userId_fkey`;

-- DropForeignKey
ALTER TABLE `privatemessage` DROP FOREIGN KEY `PrivateMessage_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `privatemessage` DROP FOREIGN KEY `PrivateMessage_userId_fkey`;

-- DropForeignKey
ALTER TABLE `userchatroom` DROP FOREIGN KEY `UserChatRoom_chatRoomId_fkey`;

-- DropForeignKey
ALTER TABLE `userchatroom` DROP FOREIGN KEY `UserChatRoom_userId_fkey`;

-- DropIndex
DROP INDEX `ChatRoom_createdBy_fkey` ON `chatroom`;

-- DropIndex
DROP INDEX `Friend_friendId_fkey` ON `friend`;

-- DropIndex
DROP INDEX `FriendRequest_receiverId_fkey` ON `friendrequest`;

-- DropIndex
DROP INDEX `FriendRequest_senderId_fkey` ON `friendrequest`;

-- DropIndex
DROP INDEX `Message_userId_fkey` ON `message`;

-- DropIndex
DROP INDEX `PrivateMessage_receiverId_fkey` ON `privatemessage`;

-- DropIndex
DROP INDEX `UserChatRoom_chatRoomId_fkey` ON `userchatroom`;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrivateMessage` ADD CONSTRAINT `PrivateMessage_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrivateMessage` ADD CONSTRAINT `PrivateMessage_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChatRoom` ADD CONSTRAINT `ChatRoom_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserChatRoom` ADD CONSTRAINT `UserChatRoom_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserChatRoom` ADD CONSTRAINT `UserChatRoom_chatRoomId_fkey` FOREIGN KEY (`chatRoomId`) REFERENCES `ChatRoom`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friend` ADD CONSTRAINT `Friend_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friend` ADD CONSTRAINT `Friend_friendId_fkey` FOREIGN KEY (`friendId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendRequest` ADD CONSTRAINT `FriendRequest_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
