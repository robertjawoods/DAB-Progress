/*
  Warnings:

  - A unique constraint covering the columns `[challengeId,userId]` on the table `ChallengesCompleted` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[homeworkId,userId]` on the table `HomeworkCompleted` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[lessonId,userId]` on the table `LessonsCompleted` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id") SELECT "email", "id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "ChallengesCompleted_challengeId_userId_key" ON "ChallengesCompleted"("challengeId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "HomeworkCompleted_homeworkId_userId_key" ON "HomeworkCompleted"("homeworkId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "LessonsCompleted_lessonId_userId_key" ON "LessonsCompleted"("lessonId", "userId");
