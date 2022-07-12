import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LessonsCompletedCreateArgs>({
  lessonsCompleted: {
    one: {
      data: {
        watchedVideo: true,
        readText: true,
        user: { create: { id: 8287274, email: 'String2817454' } },
        lesson: { create: { name: 'String', index: 6521571 } },
      },
    },
    two: {
      data: {
        watchedVideo: true,
        readText: true,
        user: { create: { id: 493369, email: 'String1657830' } },
        lesson: { create: { name: 'String', index: 8164430 } },
      },
    },
  },
})

export type StandardScenario = typeof standard
