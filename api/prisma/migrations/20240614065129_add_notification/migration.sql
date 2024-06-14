-- AlterTable
ALTER TABLE `user` ADD COLUMN `notification` BOOLEAN NOT NULL DEFAULT true,
    MODIFY `profileImage` VARCHAR(191) NOT NULL DEFAULT '/images/profile/default.jpg';
