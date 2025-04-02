-- CreateTable
CREATE TABLE `PrivateMessageLike` (
    `privateMessageId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`privateMessageId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PrivateMessageLike` ADD CONSTRAINT `PrivateMessageLike_privateMessageId_fkey` FOREIGN KEY (`privateMessageId`) REFERENCES `PrivateMessage`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrivateMessageLike` ADD CONSTRAINT `PrivateMessageLike_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
