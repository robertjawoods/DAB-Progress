import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ChallengesCompletedCreateArgs>({
  challengesCompleted: {
    one: {
      data: {
        challenge: { create: { name: 'String' } },
        user: { create: { id: 7538634, email: 'String6540576' } },
      },
    },
    two: {
      data: {
        challenge: { create: { name: 'String' } },
        user: { create: { id: 3104500, email: 'String2109641' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
