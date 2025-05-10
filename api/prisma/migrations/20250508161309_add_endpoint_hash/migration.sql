/*
  Warnings:

  - A unique constraint covering the columns `[userId,endpointHash]` on the table `PushSubscription` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `endpointHash` to the `PushSubscription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pushsubscription` ADD COLUMN `endpointHash` VARCHAR(64) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `PushSubscription_userId_endpointHash_key` ON `PushSubscription`(`userId`, `endpointHash`);
