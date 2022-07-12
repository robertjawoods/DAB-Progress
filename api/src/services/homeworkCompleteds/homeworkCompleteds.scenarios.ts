import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.HomeworkCompletedCreateArgs>({
  homeworkCompleted: {
    one: {
      data: {
        user: { create: { id: 2070326, email: 'String7491565' } },
        homework: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        user: { create: { id: 4613813, email: 'String8293735' } },
        homework: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
